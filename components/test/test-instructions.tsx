import {
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";

import useLanguageStore from "../../store/use-language-store";
import { getTranslation } from "../../lib/i18n";

interface TestInstructionsProps {
  onCloseTestInstructions: () => void;
}

export default function TestInstructions(props: TestInstructionsProps) {
  const { language, _hasHydrated } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const t = getTranslation(effectiveLanguage);

  return (
    <Flex
      h="full"
      px={4}
      direction="column"
      gap={8}
    >
      <Heading>{t.instructions.title}</Heading>
      <Flex
        direction="column"
        gap={2}
      >
        <Text>{t.instructions.intro}</Text>
        <UnorderedList spacing={2}>
          {t.instructions.hints.map((hint, index) => (
            <ListItem key={index}>{hint}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Button
        w="min-content"
        colorScheme="primary"
        alignSelf="flex-end"
        onClick={props.onCloseTestInstructions}
      >
        {t.instructions.confirm}
      </Button>
    </Flex>
  );
}
