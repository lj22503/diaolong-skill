export const translations = {
  zh: {
    nav: {
      book: '书籍',
      skills: 'Skill工具箱',
      tools: '工具',
      examples: '案例库',
      community: '社区',
      about: '关于',
    },
    home: {
      tagline: '让每个人都能讲好自己的故事',
      subtitle: '叙事平权运动',
      cta_book: '免费阅读书籍',
      cta_skills: '探索Skill',
      cta_community: '加入社区',
    },
    book: {
      title: '叙事引擎',
      subtitle: 'AI时代的内容操作系统',
      wechat_version: '公众号版',
      book_version: '书籍完整版',
    },
    skills: {
      title: '26个场景Skill',
      subtitle: '覆盖个人IP、品牌、危机等全场景',
    },
    community: {
      title: '社区协作',
      contribute: '提交案例',
      contribute_desc: '分享你的真实叙事故事',
      github: 'GitHub',
      github_desc: '参与开源协作',
    },
    footer: {
      copyright: '© 2026 燃冰 · 叙事平权',
      license: 'MIT License',
    },
  },
  en: {
    nav: {
      book: 'Book',
      skills: 'Skills',
      tools: 'Tools',
      examples: 'Examples',
      community: 'Community',
      about: 'About',
    },
    home: {
      tagline: 'Everyone deserves to tell their story well.',
      subtitle: 'The Narrative Equality Movement',
      cta_book: 'Read the Book',
      cta_skills: 'Explore Skills',
      cta_community: 'Join Community',
    },
    book: {
      title: 'Narrative Engine',
      subtitle: 'Content Operating System in the AI Era',
      wechat_version: 'WeChat Version',
      book_version: 'Full Book Version',
    },
    skills: {
      title: '26 Scenario Skills',
      subtitle: 'Personal IP, brand, crisis, and beyond',
    },
    community: {
      title: 'Community',
      contribute: 'Submit Case Study',
      contribute_desc: 'Share your real narrative story',
      github: 'GitHub',
      github_desc: 'Participate in open source',
    },
    footer: {
      copyright: '© 2026 Ran Bing · Narrative Equality',
      license: 'MIT License',
    },
  },
};

export const t = (locale: 'zh' | 'en', key: string): string => {
  const keys = key.split('.');
  let value: any = translations[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
};
