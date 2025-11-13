<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<br />

<h3 align="center">MBTI Personality Test App</h3>

<center>

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

</center>

  <p align="center">
    MBTI Personality Test App is a test app with 70 questions to determine your personality type based on 
    <a href="https://en.wikipedia.org/wiki/Myers%E2%80%93Briggs_Type_Indicator">MBTI (Myers–Briggs Type Indicator)</a>. The test is based from this <a href="http://www.lrjj.cn/encrm1.0/public/upload/MBTI-personality-test.pdf">source</a>. 
    <br />
    <br />
    <a href="https://r-21-mbti-personality-test-app.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/rauf-21/mbti-personality-test-app/issues">Report Bug</a>
    ·
    <a href="https://github.com/rauf-21/mbti-personality-test-app/issues">Request Feature</a>
  </p>
</div>

### Built With

[![Next][next.js]][next-url]
[![Chakra UI][chakra-ui.com]][chakra-ui-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 快速开始

### 安装依赖

```bash
yarn install
# 或
npm install
```

### 启动开发服务器

```bash
yarn dev
# 或
npm run dev
```

项目将在 [http://localhost:3000](http://localhost:3000) 启动。

### 构建生产版本

```bash
yarn build
yarn start
# 或
npm run build
npm start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 项目结构

### 文件目录介绍

```
mbti-personality-test-app/
│
├── components/              # React 组件
│   ├── common/             # 通用组件
│   │   ├── footer.tsx      # 页脚组件
│   │   └── nav.tsx         # 导航栏组件
│   ├── layouts/            # 布局组件
│   │   └── main-layout.tsx # 主布局组件
│   └── test/               # 测试相关组件
│       ├── test-answer-option.tsx      # 答案选项组件
│       ├── test-display.tsx            # 测试展示组件
│       ├── test-instructions.tsx       # 测试说明组件
│       ├── test-menu.tsx               # 测试菜单组件
│       ├── test-progress.tsx           # 测试进度组件
│       ├── test-question.tsx           # 测试题目组件
│       ├── test-result.tsx             # 测试结果组件
│       ├── test-result-history.tsx     # 测试历史组件
│       ├── test-result-stats.tsx       # 测试统计组件
│       ├── test-result-table-of-content.tsx  # 结果目录组件
│       └── test-timer.tsx              # 测试计时器组件
│
├── data/                    # 数据文件（题目和结果数据）
│   ├── personality-test.ts           # ⭐ 测试题目数据（70道题目）
│   ├── personality-classes.ts        # MBTI 性格类型定义（E/I, S/N, T/F, J/P）
│   └── personality-class-groups.ts   # MBTI 16种性格组合详细描述
│
├── hooks/                   # 自定义 React Hooks
│   └── use-headings-observer.tsx  # 标题观察器 Hook
│
├── lib/                     # 工具库和业务逻辑
│   └── personality-test.ts  # 测试逻辑核心文件
│                            # - 题目数据处理
│                            # - 分数计算
│                            # - IndexedDB 数据库操作（保存/读取测试结果）
│
├── pages/                   # Next.js 页面路由
│   ├── _app.tsx            # 应用入口文件
│   ├── _document.tsx       # HTML 文档结构
│   ├── index.tsx           # 首页
│   └── test/               # 测试相关页面
│       ├── index.tsx                    # 测试页面
│       └── result/                      # 结果页面
│           ├── [testResultId].tsx       # 单个测试结果详情页
│           └── history/                 # 测试历史
│               └── index.tsx            # 测试历史列表页
│
├── public/                  # 静态资源
│   ├── images/             # 图片资源
│   │   └── mbti/          # MBTI 16种性格类型图片
│   │       ├── enfj.png
│   │       ├── enfp.png
│   │       └── ... (共16张图片)
│   ├── favicon.ico         # 网站图标
│   └── *.svg              # SVG 图标
│
├── store/                   # 状态管理
│   └── use-user-test-answers.ts  # 用户测试答案状态管理（使用 Zustand）
│
├── theme/                   # 主题配置
│   └── index.ts            # Chakra UI 主题配置
│
├── next.config.js          # Next.js 配置文件
├── tsconfig.json           # TypeScript 配置文件
├── package.json            # 项目依赖配置
└── yarn.lock              # Yarn 锁文件
```

### 数据存储说明

#### 题目数据

**题目存储在：`data/personality-test.ts`**

- 包含 **70 道测试题目**
- 每道题目包含：
  - `no`: 题目编号（1-70）
  - `question`: 题目文本
  - `answerOptions`: 答案选项数组
    - `type`: 选项类型（"A" 或 "B"）
    - `answer`: 选项文本
    - `score`: 对应的 MBTI 分数（"E"/"I", "S"/"N", "T"/"F", "J"/"P"）

**示例：**
```typescript
{
  no: 1,
  question: "At a party do you: ",
  answerOptions: [
    {
      type: "A",
      answer: "Interact with many, including strangers",
      score: "E",  // 外向型
    },
    {
      type: "B",
      answer: "Interact with a few, known to you",
      score: "I",  // 内向型
    },
  ],
}
```

#### 测试结果数据

**测试结果存储在浏览器的 IndexedDB 中**

- 数据库名称：`MBTI_PERSONALITY_TEST_APP_IDB`
- 存储内容：
  - `timestamp`: 测试时间戳（作为主键）
  - `testAnswers`: 用户选择的答案数组（"A" 或 "B"）
  - `testScores`: 每道题对应的 MBTI 分数数组
- 数据操作在 `lib/personality-test.ts` 中实现：
  - `saveTestResult()`: 保存测试结果
  - `getSavedTestResult()`: 获取单个测试结果
  - `getAllSavedTestResult()`: 获取所有测试结果

#### 性格类型数据

- **`data/personality-classes.ts`**: 8 种基础性格类型（E/I, S/N, T/F, J/P）
- **`data/personality-class-groups.ts`**: 16 种 MBTI 性格组合的详细描述
  - 包含每种性格的：
    - 名称和描述
    - 优势、弱点
    - 人际关系特点
    - 职业建议
    - 生活建议等

### 技术栈

- **框架**: Next.js 13.1.1
- **UI 库**: Chakra UI 2.4.2
- **状态管理**: Zustand 4.1.5
- **数据存储**: IndexedDB (通过 idb 库)
- **语言**: TypeScript 4.9.4
- **样式**: Emotion (Chakra UI 内置)
- **动画**: Framer Motion 6.5.1

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Abdul Rauf - rauf21dev@gmail.com

Project Link: [https://github.com/rauf-21/mbti-personality-test-app](https://github.com/rauf-21/mbti-personality-test-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/rauf-21/mbti-personality-test-app.svg?style=for-the-badge
[contributors-url]: https://github.com/rauf-21/mbti-personality-test-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/rauf-21/mbti-personality-test-app.svg?style=for-the-badge
[forks-url]: https://github.com/rauf-21/mbti-personality-test-app/network/members
[stars-shield]: https://img.shields.io/github/stars/rauf-21/mbti-personality-test-app.svg?style=for-the-badge
[stars-url]: https://github.com/rauf-21/mbti-personality-test-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/rauf-21/mbti-personality-test-app.svg?style=for-the-badge
[issues-url]: https://github.com/rauf-21/mbti-personality-test-app/issues
[license-shield]: https://img.shields.io/github/license/rauf-21/mbti-personality-test-app.svg?style=for-the-badge
[license-url]: https://github.com/rauf-21/mbti-personality-test-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[chakra-ui.com]: https://img.shields.io/badge/chakra--ui-46c7c1?style=for-the-badge&logo=chakra-ui&logoColor=white
[chakra-ui-url]: https://chakra-ui.com/
