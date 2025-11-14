import { Heading, Text, UnorderedList, ListItem, Flex } from "@chakra-ui/react";

import MainLayout from "../components/layouts/main-layout";
import useLanguageStore from "../store/use-language-store";
import { getTranslation } from "../lib/i18n";

export default function PrivacyPolicyPage() {
  const { language, _hasHydrated } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const t = getTranslation(effectiveLanguage);

  return (
    <MainLayout>
      <Flex
        w={{
          base: "full",
          lg: "50%",
        }}
        minH="full"
        direction="column"
        gap={6}
        px={6}
        py={8}
        alignSelf="center"
      >
        <Heading as="h1" textAlign="center">
          {t.privacy.title}
        </Heading>
        <Text textAlign="justify">{t.privacy.intro}</Text>
        <UnorderedList spacing={3}>
          {t.privacy.items.map((item, index) => (
            <ListItem key={index} textAlign="justify">
              {item}
            </ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </MainLayout>
  );
}


