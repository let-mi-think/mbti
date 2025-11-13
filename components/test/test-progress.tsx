import { Progress } from "@chakra-ui/react";

import { getPersonalityTest } from "../../lib/personality-test";
import useUserTestAnswersStore from "../../store/use-user-test-answers";
import useLanguageStore from "../../store/use-language-store";

export default function TestProgress() {
  const { userTestAnswers } = useUserTestAnswersStore();
  const { language, _hasHydrated } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const personalityTest = getPersonalityTest(effectiveLanguage);

  const progress =
    personalityTest.length > 0
      ? (userTestAnswers.length / personalityTest.length) * 100
      : 0;

  return (
    <Progress
      w="full"
      size="lg"
      rounded="md"
      colorScheme="primary"
      value={progress}
    />
  );
}
