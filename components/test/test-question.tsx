import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useRadioGroup, Flex, Text, Button } from "@chakra-ui/react";

import TestProgress from "./test-progress";
import TestAnswerOption from "./test-answer-option";

import {
  TestAnswerOption as TestAnswer,
  getQuestionAnswerScore,
  getPersonalityTest,
  saveTestResult,
} from "../../lib/personality-test";
import useUserTestAnswersStore from "../../store/use-user-test-answers";
import useLanguageStore from "../../store/use-language-store";
import { getTranslation } from "../../lib/i18n";

export default function TestQuestion() {
  const router = useRouter();

  const { userTestAnswers, setUserTestAnswers } = useUserTestAnswersStore();
  const { language, _hasHydrated } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const t = getTranslation(effectiveLanguage);
  const personalityTest = getPersonalityTest(effectiveLanguage);

  const [currentPersonalityTestIndex, setCurrentPersonalityTestIndex] =
    useState(0);

  // 确保索引在有效范围内
  const safeIndex = Math.min(
    Math.max(0, currentPersonalityTestIndex),
    Math.max(0, personalityTest.length - 1)
  );
  const currentQuestion =
    personalityTest.length > 0 ? personalityTest[safeIndex] : null;

  const isUserAlreadyPickAnswer =
    userTestAnswers[currentPersonalityTestIndex] !== undefined;

  function handleNextButtonClick() {
    setCurrentPersonalityTestIndex((currentPersonalityTestIndex) => {
      if (currentPersonalityTestIndex + 1 > personalityTest.length - 1) {
        return currentPersonalityTestIndex;
      }

      return currentPersonalityTestIndex + 1;
    });
  }

  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "answer",
    defaultValue: userTestAnswers[currentPersonalityTestIndex],
    onChange: (value) => {
      const newUserTestAnswers = [...userTestAnswers];

      newUserTestAnswers[currentPersonalityTestIndex] =
        value as TestAnswer["type"];

      setUserTestAnswers(newUserTestAnswers);

      handleNextButtonClick();
    },
  });

  const group = getRootProps();

  // 当语言改变时，重置索引以确保在有效范围内
  useEffect(() => {
    if (currentPersonalityTestIndex >= personalityTest.length) {
      setCurrentPersonalityTestIndex(0);
    }
  }, [effectiveLanguage, personalityTest.length, currentPersonalityTestIndex]);

  useEffect(() => {
    if (userTestAnswers[currentPersonalityTestIndex] === undefined) {
      setValue("");
      return;
    }

    setValue(userTestAnswers[currentPersonalityTestIndex]);
  }, [currentPersonalityTestIndex, userTestAnswers, setValue]);

  function handlePreviousButtonClick() {
    setCurrentPersonalityTestIndex((currentPersonalityTestIndex) => {
      if (currentPersonalityTestIndex - 1 < 0) {
        return currentPersonalityTestIndex;
      }

      return currentPersonalityTestIndex - 1;
    });
  }

  function handleSeeResultButtonClick() {
    const timestamp = Date.now();
    const testScores = userTestAnswers.map((answer, index) =>
      getQuestionAnswerScore(index + 1, answer, effectiveLanguage)
    );

    saveTestResult({
      testAnswers: userTestAnswers,
      testScores,
      timestamp,
    })
      .tap(() => {
        setUserTestAnswers([]);
      })
      .tapOk((id) => {
        router.replace(`/test/result/${id}`);
      })
      .tapError((error) => {
        console.error(error);
      });
  }

  return (
    <Flex
      py={4}
      w="full"
      h="full"
      gap={8}
      direction="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <TestProgress />
      {currentQuestion && (
        <>
          <Flex direction="column">
            <Text
              fontWeight="bold"
              align="center"
            >
              #{currentPersonalityTestIndex + 1}
            </Text>
            <Text
              fontSize="lg"
              align="center"
            >
              {currentQuestion.question}
            </Text>
          </Flex>
          <Flex
            w="full"
            gap={4}
            direction="column"
            {...group}
          >
            {currentQuestion.answerOptions.map((answerOption) => {
              const radio = getRadioProps({ value: answerOption.type });

              return (
                <TestAnswerOption
                  key={answerOption.type}
                  {...radio}
                >
                  {answerOption.answer}
                </TestAnswerOption>
              );
            })}
          </Flex>
        </>
      )}
      <Flex
        direction="row"
        w="full"
        gap={4}
      >
        <Button
          w="full"
          variant="outline"
          {...(currentPersonalityTestIndex === 0 && {
            disabled: true,
          })}
          onClick={handlePreviousButtonClick}
        >
          {t.test.previous}
        </Button>
        {personalityTest.length > 0 &&
        isUserAlreadyPickAnswer &&
        currentPersonalityTestIndex === personalityTest.length - 1 ? (
          <Button
            w="full"
            colorScheme="primary"
            onClick={handleSeeResultButtonClick}
          >
            {t.test.seeResult}
          </Button>
        ) : (
          <Button
            w="full"
            colorScheme="primary"
            variant="outline"
            {...(!isUserAlreadyPickAnswer && {
              disabled: true,
            })}
            onClick={handleNextButtonClick}
            disabled={personalityTest.length === 0}
          >
            {t.test.next}
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
