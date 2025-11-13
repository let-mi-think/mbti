import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { FiChevronRight } from "react-icons/fi";

import { TestResult } from "../../lib/personality-test";
import useLanguageStore from "../../store/use-language-store";
import { getTranslation } from "../../lib/i18n";

interface TestResultHistoryProps {
  testResults: TestResult[];
}

export default function TestResultHistory(props: TestResultHistoryProps) {
  const { language, _hasHydrated } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const t = getTranslation(effectiveLanguage);

  const formattedResults = props.testResults.map((testResult) => ({
    ...testResult,
    formattedTimestamp:
      effectiveLanguage === "zh"
        ? dayjs(testResult.timestamp)
            .locale("zh-cn")
            .format("YYYY年M月D日 HH:mm")
        : dayjs(testResult.timestamp)
            .locale("en")
            .format("D MMMM YYYY, HH:mm"),
  }));

  return (
    <Flex
      my={4}
      w={{
        base: "full",
        lg: "50%",
      }}
      h="full"
      px={8}
      gap={8}
      alignSelf="flex-start"
      alignItems="center"
      direction="column"
    >
      <Heading
        as="h1"
        textAlign="center"
      >
        {t.history.title}
      </Heading>
      <Flex
        w="full"
        gap={4}
        direction="column"
      >
        {formattedResults.length === 0 ? (
          <Text textAlign="center" color="gray.500">
            {t.history.noResults}
          </Text>
        ) : (
          formattedResults.map((testResult) => (
            <Flex
              key={testResult.timestamp}
              as={Link}
              href={`/test/result/${testResult.timestamp}`}
              py={2}
              px={4}
              w="full"
              rounded="md"
              cursor="pointer"
              alignItems="center"
              justifyContent="space-between"
              borderWidth={1}
              borderColor="gray.100"
              _hover={{
                bg: "gray.100",
              }}
            >
              <Text>
                {testResult.formattedTimestamp}
              </Text>
              <FiChevronRight />
            </Flex>
          ))
        )}
      </Flex>
    </Flex>
  );
}
