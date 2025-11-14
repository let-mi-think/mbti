import create from "zustand";

export type Language = "en" | "zh";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  _hasHydrated: boolean;
  _setHasHydrated: (hasHydrated: boolean) => void;
}

// 使用简单的 localStorage 实现，避免 persist middleware 的兼容性问题
export const getStoredLanguage = (): Language => {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("mbti-language");
  return (stored === "en" || stored === "zh") ? stored : "en";
};

const useLanguageStore = create<LanguageState>((set) => ({
  language: "en", // 始终初始化为 "en" 以避免 hydration 错误
  _hasHydrated: false,
  _setHasHydrated: (hasHydrated) => set({ _hasHydrated: hasHydrated }),
  setLanguage: (language) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mbti-language", language);
    }
    set({ language });
  },
}));

export default useLanguageStore;

