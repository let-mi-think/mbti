export type Language = "en" | "zh";

export const translations = {
  en: {
    common: {
      loading: "Loading",
      error: "Something went wrong! Please refresh!",
      noData: "No Data",
    },
    // Navigation
    nav: {
      title: "MBTI Personality Test",
      history: "Test Result History",
    },
    // Home Page
    home: {
      welcome: "Welcome to MBTI Personality Test",
      description:
        "Learn to know yourself better with this personality test.",
      takeTest: "Take Test",
      questionSource: "Question bank sourced from The Myers-Briggs Company.",
      freeForAll:
        "This test is completely free - just watch a single ad to unlock it. Any proceeds are used solely for site maintenance.",
      privacyAgreement: "I have read and agree to the",
      privacyPolicy: "Privacy Policy",
      startButtonTooltip: "Please agree to the privacy policy to continue.",
    },
    // Test Page
    test: {
      previous: "Previous",
      next: "Next",
      seeResult: "See Result",
      loading: "Loading",
      noData: "No Data",
      error: "Something went wrong! Please refresh!",
    },
    instructions: {
      title: "Instructions",
      intro:
        "Completing the test should only take about 15 minutes. Keep the following tips in mind:",
      hints: [
        "There are no right answers to any of these questions.",
        "Answer quickly and go with what feels natural to you.",
        "Answer as the way you are, not the way you want others to see you.",
      ],
      confirm: "Okay, I got it!",
    },
    testMenu: {
      instructions: "Instructions",
    },
    // Footer
    footer: {
      sourceText: "All test on this website is based on this",
      source: "source",
      madeBy: "Made by",
    },
    // Result History
    history: {
      title: "Test Result History",
      noResults: "No test results yet.",
    },
    privacy: {
      title: "Privacy Policy",
      intro:
        "We only store the answers you submit locally in your browser to show test history. We never upload your data to our servers.",
      items: [
        "Test answers and scores are kept in your browser's storage.",
        "Clearing your browser data will remove all saved results.",
        "Ads, when shown, are used solely to cover hosting and maintenance costs.",
        "We do not collect identifiable personal information.",
      ],
    },
    result: {
      error: "Something went wrong! Please refresh!",
      notFound: "No test data found.",
      statsTitle: "Scores",
      tableOfContentTitle: "Table of Contents",
      sections: {
        jungianFunctionalPreferenceOrdering:
          "Jungian Functional Preference Ordering",
        generalTraits: "General Traits",
        relationshipStrengths: "Relationship Strengths",
        relationshipWeaknesses: "Relationship Weaknesses",
        successDefinition: "Success Definition",
        strengths: "Strengths",
        specialGifts: "Special Gifts",
        potentialProblemAreas: "Potential Problem Areas",
        explanationOfProblems: "Explanation of Problems",
        solutions: "Solutions",
        livingHappilyTips: "Living Happily Tips",
        specificSuggestions: "Specific Suggestions",
        tenRulesToLive: "Ten Rules to Live to Achieve Success",
      },
      tableHeaders: {
        dominant: "Dominant",
        auxiliary: "Auxiliary",
        tertiary: "Tertiary",
        inferior: "Inferior",
      },
    },
  },
  zh: {
    common: {
      loading: "加载中",
      error: "出错了！请刷新页面！",
      noData: "暂无数据",
    },
    // 导航
    nav: {
      title: "MBTI 性格测试",
      history: "测试历史",
    },
    // 首页
    home: {
      welcome: "欢迎来到 MBTI 性格测试",
      description: "通过这个性格测试更好地了解自己。",
      takeTest: "开始测试",
      questionSource: "题库来源：Myers-Briggs 公司官方资料。",
      freeForAll: "本测试完全免费，只需观看一个广告即可解锁，所有费用仅用于网站维护。",
      privacyAgreement: "我已阅读并同意",
      privacyPolicy: "隐私政策",
      startButtonTooltip: "请先勾选同意隐私政策后再继续。",
    },
    // 测试页面
    test: {
      previous: "上一题",
      next: "下一题",
      seeResult: "查看结果",
      loading: "加载中",
      noData: "暂无数据",
      error: "出错了！请刷新页面！",
    },
    instructions: {
      title: "测试说明",
      intro: "完成整份测试大约需要 15 分钟，请注意以下提示：",
      hints: [
        "这些问题没有标准答案。",
        "请迅速作答，按照第一直觉选择即可。",
        "请按照“真实的自己”回答，而不是“希望别人看到的自己”。",
      ],
      confirm: "好的，我明白了",
    },
    testMenu: {
      instructions: "查看说明",
    },
    // 页脚
    footer: {
      sourceText: "本网站上的所有测试均基于此",
      source: "来源",
      // madeBy: "制作",
      madeBy: "Copyright 2025-2025 荣 出品",
    },
    // 测试历史
    history: {
      title: "测试历史",
      noResults: "暂无测试结果。",
    },
    privacy: {
      title: "隐私政策",
      intro:
        "我们只会将您提交的答案保存在浏览器本地，用于展示测试历史，不会上传到任何服务器。",
      items: [
        "测试答案与结果仅保存在您的浏览器存储中。",
        "清除浏览器数据将会删除所有历史测试记录。",
        "广告（如有）仅用于支付网站托管与维护费用。",
        "我们不会收集任何可识别个人身份的信息。",
      ],
    },
    result: {
      error: "出错了！请刷新页面！",
      notFound: "未找到对应的测试数据。",
      statsTitle: "得分统计",
      tableOfContentTitle: "内容目录",
      sections: {
        jungianFunctionalPreferenceOrdering: "荣格功能偏好顺序",
        generalTraits: "总体特质",
        relationshipStrengths: "关系优势",
        relationshipWeaknesses: "关系劣势",
        successDefinition: "成功的定义",
        strengths: "优势特长",
        specialGifts: "特殊天赋",
        potentialProblemAreas: "潜在问题领域",
        explanationOfProblems: "问题解析",
        solutions: "解决建议",
        livingHappilyTips: "幸福生活小贴士",
        specificSuggestions: "具体建议",
        tenRulesToLive: "成功的十条法则",
      },
      tableHeaders: {
        dominant: "主导功能",
        auxiliary: "辅助功能",
        tertiary: "第三功能",
        inferior: "劣势功能",
      },
    },
  },
};

export function getTranslation(language: Language) {
  return translations[language];
}

export type TranslationKeys = typeof translations.en;

