import Link from "next/link";
import { useState } from "react";
import {
  Heading,
  Text,
  Highlight,
  Flex,
  Button,
  Checkbox,
  Tooltip,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

import MainLayout from "../components/layouts/main-layout";
import useLanguageStore from "../store/use-language-store";
import { getTranslation } from "../lib/i18n";

export default function HomePage() {
  const { language, _hasHydrated } = useLanguageStore();
  // 在 hydration 完成前使用默认语言 "en" 以避免 hydration 错误
  const effectiveLanguage = _hasHydrated ? language : "en";
  const t = getTranslation(effectiveLanguage);
  const [hasAcceptedPrivacy, setHasAcceptedPrivacy] = useState(false);

  return (
    <>
      <MainLayout>
        <Flex
          w={{
            base: "full",
            lg: "50%",
          }}
          alignSelf="center"
          px={4}
          gap={8}
          minH="full"
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading
            as="h1"
            lineHeight="tall"
            textAlign="center"
          >
            <Highlight
              query={effectiveLanguage === "zh" ? "MBTI 性格测试" : "MBTI Personality Test"}
              styles={{
                py: 1,
                px: 4,
                rounded: "full",
                bg: "primary.500",
                color: "white",
              }}
            >
              {t.home.welcome}
            </Highlight>
          </Heading>
          <Text
            fontSize="xl"
            align="center"
          >
            {t.home.description}
          </Text>
          <VStack spacing={2} align="stretch">
            <Text fontSize="sm" color="gray.600" textAlign="center">
              {t.home.questionSource}
            </Text>
            <Text fontSize="sm" color="gray.600" textAlign="center">
              {t.home.freeForAll}
            </Text>
          </VStack>
          <Checkbox
            colorScheme="primary"
            isChecked={hasAcceptedPrivacy}
            onChange={(event) => setHasAcceptedPrivacy(event.target.checked)}
          >
            <Text fontSize="sm">
              {t.home.privacyAgreement}{" "}
              <ChakraLink as={Link} href="/privacy-policy" color="primary.500">
                {t.home.privacyPolicy}
              </ChakraLink>
            </Text>
          </Checkbox>
          <Tooltip
            label={!hasAcceptedPrivacy ? t.home.startButtonTooltip : undefined}
            isDisabled={hasAcceptedPrivacy}
          >
            <span>
              <Link href="/test">
                <Button
                  w="min-content"
                  colorScheme="primary"
                  variant="outline"
                  rightIcon={<FiArrowRight size={20} />}
                  isDisabled={!hasAcceptedPrivacy}
                >
                  {t.home.takeTest}
                </Button>
              </Link>
            </span>
          </Tooltip>
        </Flex>
      </MainLayout>
    </>
  );
}
