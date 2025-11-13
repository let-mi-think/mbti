import Link from "next/link";
import { Flex, Button, HStack } from "@chakra-ui/react";
import { BiHistory } from "react-icons/bi";

import useLanguageStore from "../../store/use-language-store";
import { getTranslation } from "../../lib/i18n";

export default function Nav() {
  const { language, _hasHydrated, setLanguage } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const t = getTranslation(effectiveLanguage);

  return (
    <Flex
      as="nav"
      py={2}
      px={5}
      w="full"
      h={20}
      justifyContent="space-between"
      alignItems="center"
      overflowX="hidden"
    >
      <Link href="/">
        <Button
          colorScheme="black"
          variant="link"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {t.nav.title}
        </Button>
      </Link>
      <HStack spacing={2}>
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setLanguage(effectiveLanguage === "en" ? "zh" : "en")}
        >
          {effectiveLanguage === "en" ? "中文" : "EN"}
        </Button>
        <Link href="/test/result/history">
          <Button
            variant="outline"
            leftIcon={<BiHistory size={24} />}
          >
            {t.nav.history}
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}
