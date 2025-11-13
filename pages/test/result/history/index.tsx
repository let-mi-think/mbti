import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Option, AsyncData, Result } from "@swan-io/boxed";
import { Flex, Text } from "@chakra-ui/react";

import MainLayout from "../../../../components/layouts/main-layout";
import TestResultHistory from "../../../../components/test/test-result-history";
import {
  TestResult,
  getAllSavedTestResult,
} from "../../../../lib/personality-test";
import useLanguageStore from "../../../../store/use-language-store";
import { getTranslation } from "../../../../lib/i18n";

export default function TestResultHistoryPage() {
  const router = useRouter();
  const { language, _hasHydrated } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const t = getTranslation(effectiveLanguage);

  const [testResults, setTestResults] = useState<
    AsyncData<Result<Option<TestResult[]>, Error>>
  >(AsyncData.NotAsked());

  useEffect(() => {
    if (router.isReady) {
      setTestResults(AsyncData.Loading());

      getAllSavedTestResult().tap((result) =>
        setTestResults(AsyncData.Done(result))
      );
    }
  }, [router.isReady]);

  return (
    <MainLayout>
      {testResults.match({
        NotAsked: () => <Text>{t.common.loading}</Text>,
        Loading: () => <Text>{t.common.loading}</Text>,
        Done: (result) =>
          result.match({
            Error: () => <Text>{t.common.error}</Text>,
            Ok: (value) =>
              value.match({
                Some: (data) => <TestResultHistory testResults={data} />,
                None: () => <Text>{t.history.noResults}</Text>,
              }),
          }),
      })}
    </MainLayout>
  );
}
