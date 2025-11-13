import type { AppProps } from "next/app";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins/400.css";

import theme from "../theme";
import useLanguageStore, { getStoredLanguage } from "../store/use-language-store";

export default function App({ Component, pageProps }: AppProps) {
  const { _hasHydrated, _setHasHydrated, setLanguage } = useLanguageStore();

  // 客户端 hydration：从 localStorage 同步语言设置
  useEffect(() => {
    if (!_hasHydrated) {
      const storedLanguage = getStoredLanguage();
      setLanguage(storedLanguage);
      _setHasHydrated(true);
    }
  }, [_hasHydrated, _setHasHydrated, setLanguage]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
