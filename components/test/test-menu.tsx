import { Flex, Button } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

import TestTimer from "./test-timer";
import useLanguageStore from "../../store/use-language-store";
import { getTranslation } from "../../lib/i18n";

interface TestMenuProps {
  onShowInstructionsButtonClick: () => void;
}

export default function TestMenu(props: TestMenuProps) {
  const { language, _hasHydrated } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const t = getTranslation(effectiveLanguage);

  return (
    <Flex
      width="full"
      my={2}
      px={4}
      direction="column"
      justifyContent="center"
      alignItems="flex-end"
      gap={2}
    >
      <Flex>
        <Button
          aria-label="instructions"
          variant="outline"
          leftIcon={<RiInformationLine size={24} />}
          onClick={props.onShowInstructionsButtonClick}
        >
          {t.testMenu.instructions}
        </Button>
        <TestTimer />
      </Flex>
    </Flex>
  );
}
