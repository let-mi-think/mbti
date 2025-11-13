import { PersonalityClass } from "../lib/personality-test";
import type { Language } from "../lib/i18n";

const personalityClassesTranslations: Record<Language, PersonalityClass[]> = {
  en: [
    {
      type: "E",
      description: "Extroverted",
    },
    {
      type: "I",
      description: "Introverted",
    },
    {
      type: "S",
      description: "Sensing",
    },
    {
      type: "N",
      description: "Intuitive",
    },
    {
      type: "T",
      description: "Thinking",
    },
    {
      type: "F",
      description: "Feeling",
    },
    {
      type: "P",
      description: "Perceiving",
    },
    {
      type: "J",
      description: "Judging",
    },
  ],
  zh: [
    {
      type: "E",
      description: "外向 (Extroverted)",
    },
    {
      type: "I",
      description: "内向 (Introverted)",
    },
    {
      type: "S",
      description: "感觉型 (Sensing)",
    },
    {
      type: "N",
      description: "直觉型 (Intuitive)",
    },
    {
      type: "T",
      description: "思考型 (Thinking)",
    },
    {
      type: "F",
      description: "情感型 (Feeling)",
    },
    {
      type: "P",
      description: "感知型 (Perceiving)",
    },
    {
      type: "J",
      description: "判断型 (Judging)",
    },
  ],
};

export function getPersonalityClasses(language: Language = "en") {
  return personalityClassesTranslations[language];
}
