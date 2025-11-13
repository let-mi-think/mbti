import Link from "next/link";
import { Flex, Text, Button } from "@chakra-ui/react";

import useLanguageStore from "../../store/use-language-store";
import { getTranslation } from "../../lib/i18n";

export default function Footer() {
  const { language, _hasHydrated } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const t = getTranslation(effectiveLanguage);

  return (
    <Flex
      as="footer"
      py={2}
      w="100%"
      h="full"
      bg="black"
      color="white"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text>
        {t.footer.sourceText}{" "}
      </Text>
      <Text>
        🔨 {t.footer.madeBy}{" "}
      </Text>
    </Flex>
  );
}
