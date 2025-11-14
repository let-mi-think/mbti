import { PersonalityClassGroup } from "./personality-test";
import type { Language } from "./i18n";

// MBTI 类型名称翻译映射
const mbtiTypeTranslations: Record<string, { name: string; nameDescription: string; epithet: string }> = {
  ENFJ: {
    name: "外向直觉情感判断型",
    nameDescription: "外向情感与内向直觉",
    epithet: "给予者",
  },
  ENFP: {
    name: "外向直觉情感感知型",
    nameDescription: "外向直觉与内向情感",
    epithet: "倡导者",
  },
  ENTJ: {
    name: "外向直觉思考判断型",
    nameDescription: "外向思考与内向直觉",
    epithet: "指挥官",
  },
  ENTP: {
    name: "外向直觉思考感知型",
    nameDescription: "外向直觉与内向思考",
    epithet: "辩论家",
  },
  ESFJ: {
    name: "外向感觉情感判断型",
    nameDescription: "外向情感与内向感觉",
    epithet: "执政官",
  },
  ESFP: {
    name: "外向感觉情感感知型",
    nameDescription: "外向感觉与内向情感",
    epithet: "表演者",
  },
  ESTJ: {
    name: "外向感觉思考判断型",
    nameDescription: "外向思考与内向感觉",
    epithet: "总经理",
  },
  ESTP: {
    name: "外向感觉思考感知型",
    nameDescription: "外向感觉与内向思考",
    epithet: "企业家",
  },
  INFJ: {
    name: "内向直觉情感判断型",
    nameDescription: "内向直觉与外向情感",
    epithet: "提倡者",
  },
  INFP: {
    name: "内向直觉情感感知型",
    nameDescription: "内向情感与外向直觉",
    epithet: "调停者",
  },
  INTJ: {
    name: "内向直觉思考判断型",
    nameDescription: "内向直觉与外向思考",
    epithet: "建筑师",
  },
  INTP: {
    name: "内向直觉思考感知型",
    nameDescription: "内向思考与外向直觉",
    epithet: "逻辑学家",
  },
  ISFJ: {
    name: "内向感觉情感判断型",
    nameDescription: "内向感觉与外向情感",
    epithet: "守护者",
  },
  ISFP: {
    name: "内向感觉情感感知型",
    nameDescription: "内向情感与外向感觉",
    epithet: "探险家",
  },
  ISTJ: {
    name: "内向感觉思考判断型",
    nameDescription: "内向感觉与外向思考",
    epithet: "物流师",
  },
  ISTP: {
    name: "内向感觉思考感知型",
    nameDescription: "内向思考与外向感觉",
    epithet: "鉴赏家",
  },
};

// 荣格功能翻译映射
const jungianFunctionTranslations: Record<string, string> = {
  "Extraverted Feeling": "外向情感",
  "Introverted Feeling": "内向情感",
  "Extraverted Thinking": "外向思考",
  "Introverted Thinking": "内向思考",
  "Extraverted Intuition": "外向直觉",
  "Introverted Intuition": "内向直觉",
  "Extraverted Sensing": "外向感觉",
  "Introverted Sensing": "内向感觉",
};

/**
 * 翻译 PersonalityClassGroup 为中文
 * 注意：这是一个简化版本，只翻译关键信息
 * 完整描述需要专业翻译或使用翻译API
 */
export function translatePersonalityClassGroup(
  group: PersonalityClassGroup | undefined,
  language: Language
): PersonalityClassGroup | undefined {
  if (!group || language === "en") {
    return group;
  }

  const typeTranslation = mbtiTypeTranslations[group.type];
  if (!typeTranslation) {
    return group;
  }

  // 翻译荣格功能
  const translateJungianFunction = (func?: string): string => {
    if (!func) {
      return "";
    }
    return jungianFunctionTranslations[func.trim()] || func;
  };

  return {
    ...group,
    name: typeTranslation.name,
    nameDescription: typeTranslation.nameDescription,
    epithet: typeTranslation.epithet,
    jungianFunctionalPreference: group.jungianFunctionalPreference
      ? {
          dominant: translateJungianFunction(group.jungianFunctionalPreference.dominant),
          auxiliary: translateJungianFunction(group.jungianFunctionalPreference.auxiliary),
          tertiary: translateJungianFunction(group.jungianFunctionalPreference.tertiary),
          inferior: translateJungianFunction(group.jungianFunctionalPreference.inferior),
        }
      : group.jungianFunctionalPreference,
    // 注意：description 和其他详细文本需要完整翻译
    // 这里保持原样，因为数据量太大
    // 如果需要完整翻译，建议使用专业翻译服务或逐步添加翻译数据
  };
}


