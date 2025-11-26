// Google Translate 网站 JavaScript 代码

// 语言配置
const languages = [
  { code: "zh", name: "中文", flag: "🇨🇳", nativeName: "中文" },
  { code: "en", name: "英语", flag: "🇺🇸", nativeName: "English" },
  { code: "ja", name: "日语", flag: "🇯🇵", nativeName: "日本語" },
  { code: "ko", name: "韩语", flag: "🇰🇷", nativeName: "한국어" },
  { code: "fr", name: "法语", flag: "🇫🇷", nativeName: "Français" },
  { code: "de", name: "德语", flag: "🇩🇪", nativeName: "Deutsch" },
  { code: "es", name: "西班牙语", flag: "🇪🇸", nativeName: "Español" },
  { code: "pt", name: "葡萄牙语", flag: "🇵🇹", nativeName: "Português" },
  { code: "it", name: "意大利语", flag: "🇮🇹", nativeName: "Italiano" },
  { code: "ru", name: "俄语", flag: "🇷🇺", nativeName: "Русский" },
  { code: "ar", name: "阿拉伯语", flag: "🇸🇦", nativeName: "العربية" },
  { code: "hi", name: "印地语", flag: "🇮🇳", nativeName: "हिन्दी" },
  { code: "th", name: "泰语", flag: "🇹🇭", nativeName: "ไทย" },
  { code: "vi", name: "越南语", flag: "🇻🇳", nativeName: "Tiếng Việt" },
  { code: "nl", name: "荷兰语", flag: "🇳🇱", nativeName: "Nederlands" },
  { code: "sv", name: "瑞典语", flag: "🇸🇪", nativeName: "Svenska" },
  { code: "da", name: "丹麦语", flag: "🇩🇰", nativeName: "Dansk" },
  { code: "no", name: "挪威语", flag: "🇳🇴", nativeName: "Norsk" },
  { code: "fi", name: "芬兰语", flag: "🇫🇮", nativeName: "Suomi" },
  { code: "pl", name: "波兰语", flag: "🇵🇱", nativeName: "Polski" },
  { code: "tr", name: "土耳其语", flag: "🇹🇷", nativeName: "Türkçe" },
  { code: "he", name: "希伯来语", flag: "🇮🇱", nativeName: "עברית" },
  { code: "el", name: "希腊语", flag: "🇬🇷", nativeName: "Ελληνικά" },
  { code: "hu", name: "匈牙利语", flag: "🇭🇺", nativeName: "Magyar" },
  { code: "cs", name: "捷克语", flag: "🇨🇿", nativeName: "Čeština" },
  { code: "ro", name: "罗马尼亚语", flag: "🇷🇴", nativeName: "Română" },
  { code: "bg", name: "保加利亚语", flag: "🇧🇬", nativeName: "Български" },
  { code: "hr", name: "克罗地亚语", flag: "🇭🇷", nativeName: "Hrvatski" },
  { code: "sk", name: "斯洛伐克语", flag: "🇸🇰", nativeName: "Slovenčina" },
  { code: "sl", name: "斯洛文尼亚语", flag: "🇸🇮", nativeName: "Slovenščina" },
  { code: "et", name: "爱沙尼亚语", flag: "🇪🇪", nativeName: "Eesti" },
  { code: "lv", name: "拉脱维亚语", flag: "🇱🇻", nativeName: "Latviešu" },
  { code: "lt", name: "立陶宛语", flag: "🇱🇹", nativeName: "Lietuvių" },
  { code: "mt", name: "马耳他语", flag: "🇲🇹", nativeName: "Malti" },
  { code: "ga", name: "爱尔兰语", flag: "🇮🇪", nativeName: "Gaeilge" },
  { code: "cy", name: "威尔士语", flag: "🇬🇧", nativeName: "Cymraeg" },
  { code: "is", name: "冰岛语", flag: "🇮🇸", nativeName: "Íslenska" },
  { code: "fo", name: "法罗语", flag: "🇫🇴", nativeName: "Føroyskt" },
  { code: "sq", name: "阿尔巴尼亚语", flag: "🇦🇱", nativeName: "Shqip" },
  { code: "mk", name: "马其顿语", flag: "🇲🇰", nativeName: "Македонски" },
  { code: "sr", name: "塞尔维亚语", flag: "🇷🇸", nativeName: "Српски" },
  { code: "bs", name: "波斯尼亚语", flag: "🇧🇦", nativeName: "Bosanski" },
  { code: "me", name: "黑山语", flag: "🇲🇪", nativeName: "Crnogorski" },
  { code: "ca", name: "加泰罗尼亚语", flag: "🇪🇸", nativeName: "Català" },
  { code: "eu", name: "巴斯克语", flag: "🇪🇸", nativeName: "Euskara" },
  { code: "gl", name: "加利西亚语", flag: "🇪🇸", nativeName: "Galego" },
  { code: "oc", name: "奥克语", flag: "🇫🇷", nativeName: "Occitan" },
  { code: "br", name: "布列塔尼语", flag: "🇫🇷", nativeName: "Brezhoneg" },
  { code: "co", name: "科西嘉语", flag: "🇫🇷", nativeName: "Corsu" },
  { code: "rm", name: "罗曼什语", flag: "🇨🇭", nativeName: "Rumantsch" },
  { code: "fur", name: "弗留利语", flag: "🇮🇹", nativeName: "Furlan" },
  { code: "sc", name: "撒丁语", flag: "🇮🇹", nativeName: "Sardu" },
  { code: "vec", name: "威尼斯语", flag: "🇮🇹", nativeName: "Vèneto" },
  { code: "lmo", name: "伦巴第语", flag: "🇮🇹", nativeName: "Lombard" },
  { code: "pms", name: "皮埃蒙特语", flag: "🇮🇹", nativeName: "Piemontèis" },
  { code: "nap", name: "那不勒斯语", flag: "🇮🇹", nativeName: "Nnapulitano" },
  { code: "scn", name: "西西里语", flag: "🇮🇹", nativeName: "Sicilianu" },
  { code: "lij", name: "利古里亚语", flag: "🇮🇹", nativeName: "Lìgure" },
  {
    code: "eml",
    name: "艾米利亚-罗马涅语",
    flag: "🇮🇹",
    nativeName: "Emiliàn e rumagnòl",
  },
  { code: "pdc", name: "宾夕法尼亚德语", flag: "🇺🇸", nativeName: "Deitsch" },
  { code: "lb", name: "卢森堡语", flag: "🇱🇺", nativeName: "Lëtzebuergesch" },
  { code: "af", name: "南非荷兰语", flag: "🇿🇦", nativeName: "Afrikaans" },
  { code: "sw", name: "斯瓦希里语", flag: "🇹🇿", nativeName: "Kiswahili" },
  { code: "zu", name: "祖鲁语", flag: "🇿🇦", nativeName: "isiZulu" },
  { code: "xh", name: "科萨语", flag: "🇿🇦", nativeName: "isiXhosa" },
  { code: "st", name: "塞索托语", flag: "🇿🇦", nativeName: "Sesotho" },
  { code: "tn", name: "茨瓦纳语", flag: "🇧🇼", nativeName: "Setswana" },
  { code: "ss", name: "斯威士语", flag: "🇸🇿", nativeName: "SiSwati" },
  { code: "ve", name: "文达语", flag: "🇿🇦", nativeName: "Tshivenda" },
  { code: "ts", name: "聪加语", flag: "🇿🇦", nativeName: "Xitsonga" },
  { code: "nd", name: "北恩德贝莱语", flag: "🇿🇦", nativeName: "isiNdebele" },
  { code: "nr", name: "南恩德贝莱语", flag: "🇿🇦", nativeName: "isiNdebele" },
  { code: "sn", name: "绍纳语", flag: "🇿🇼", nativeName: "chiShona" },
  { code: "ny", name: "奇切瓦语", flag: "🇲🇼", nativeName: "Chichewa" },
  { code: "rw", name: "卢旺达语", flag: "🇷🇼", nativeName: "Ikinyarwanda" },
  { code: "lg", name: "卢干达语", flag: "🇺🇬", nativeName: "Luganda" },
  { code: "ak", name: "阿坎语", flag: "🇬🇭", nativeName: "Akan" },
  { code: "yo", name: "约鲁巴语", flag: "🇳🇬", nativeName: "Yorùbá" },
  { code: "ig", name: "伊博语", flag: "🇳🇬", nativeName: "Igbo" },
  { code: "ha", name: "豪萨语", flag: "🇳🇬", nativeName: "Hausa" },
  { code: "am", name: "阿姆哈拉语", flag: "🇪🇹", nativeName: "አማርኛ" },
  { code: "ti", name: "提格里尼亚语", flag: "🇪🇷", nativeName: "ትግርኛ" },
  { code: "so", name: "索马里语", flag: "🇸🇴", nativeName: "Soomaali" },
  { code: "om", name: "奥罗莫语", flag: "🇪🇹", nativeName: "Afaan Oromoo" },
  { code: "sid", name: "锡达莫语", flag: "🇪🇹", nativeName: "Sidaamu" },
  { code: "wal", name: "瓦拉莫语", flag: "🇪🇹", nativeName: "Wolaytta" },
  { code: "gv", name: "马恩岛语", flag: "🇮🇲", nativeName: "Gaelg" },
  { code: "kw", name: "康沃尔语", flag: "🇬🇧", nativeName: "Kernewek" },
  { code: "an", name: "阿拉贡语", flag: "🇪🇸", nativeName: "Aragonés" },
  { code: "ast", name: "阿斯图里亚斯语", flag: "🇪🇸", nativeName: "Asturianu" },
  {
    code: "ext",
    name: "埃斯特雷马杜拉语",
    flag: "🇪🇸",
    nativeName: "Estremeñu",
  },
  { code: "lad", name: "拉迪诺语", flag: "🇪🇸", nativeName: "Ladino" },
  { code: "mwl", name: "米兰德斯语", flag: "🇵🇹", nativeName: "Mirandés" },
  { code: "pcd", name: "皮卡第语", flag: "🇫🇷", nativeName: "Picard" },
  { code: "wa", name: "瓦隆语", flag: "🇧🇪", nativeName: "Walon" },
  { code: "li", name: "林堡语", flag: "🇳🇱", nativeName: "Limburgs" },
  { code: "fy", name: "西弗里西亚语", flag: "🇳🇱", nativeName: "Frysk" },
  {
    code: "stq",
    name: "萨尔特兰弗里西亚语",
    flag: "🇩🇪",
    nativeName: "Seeltersk",
  },
  { code: "nds", name: "低地德语", flag: "🇩🇪", nativeName: "Plattdüütsch" },
  { code: "ksh", name: "科隆语", flag: "🇩🇪", nativeName: "Kölsch" },
  { code: "pfl", name: "普法尔茨德语", flag: "🇩🇪", nativeName: "Pälzisch" },
  { code: "bar", name: "巴伐利亚语", flag: "🇩🇪", nativeName: "Boarisch" },
  { code: "swg", name: "施瓦本德语", flag: "🇩🇪", nativeName: "Schwäbisch" },
  { code: "gsw", name: "瑞士德语", flag: "🇨🇭", nativeName: "Schwiizertüütsch" },
  { code: "als", name: "阿尔萨斯语", flag: "🇫🇷", nativeName: "Elsässisch" },
  { code: "pdt", name: "门诺低地德语", flag: "🇺🇸", nativeName: "Plautdietsch" },
  { code: "vls", name: "西佛兰德语", flag: "🇧🇪", nativeName: "West-Vlams" },
  { code: "zea", name: "泽兰语", flag: "🇳🇱", nativeName: "Zeêuws" },
  { code: "sco", name: "苏格兰语", flag: "🇬🇧", nativeName: "Scots" },
  { code: "ang", name: "古英语", flag: "🇬🇧", nativeName: "Ænglisc" },
  { code: "enm", name: "中古英语", flag: "🇬🇧", nativeName: "Middle English" },
  { code: "fro", name: "古法语", flag: "🇫🇷", nativeName: "Ancien français" },
  { code: "frm", name: "中古法语", flag: "🇫🇷", nativeName: "Moyen français" },
  { code: "pro", name: "古普罗旺斯语", flag: "🇫🇷", nativeName: "Provençal" },
  {
    code: "osp",
    name: "古西班牙语",
    flag: "🇪🇸",
    nativeName: "Español medieval",
  },
  {
    code: "osp",
    name: "古葡萄牙语",
    flag: "🇵🇹",
    nativeName: "Português medieval",
  },
  { code: "roa", name: "罗曼语", flag: "🇪🇺", nativeName: "Romance" },
  { code: "la", name: "拉丁语", flag: "🇻🇦", nativeName: "Latina" },
  { code: "grc", name: "古希腊语", flag: "🇬🇷", nativeName: "Ἀρχαία ἑλληνική" },
  { code: "sa", name: "梵语", flag: "🇮🇳", nativeName: "संस्कृतम्" },
  { code: "peo", name: "古波斯语", flag: "🇮🇷", nativeName: "فارسی باستان" },
  { code: "pal", name: "中古波斯语", flag: "🇮🇷", nativeName: "پارسیگ" },
  { code: "psu", name: "古印度-雅利安语", flag: "🇮🇳", nativeName: "Prakrit" },
  { code: "inc", name: "印度语", flag: "🇮🇳", nativeName: "Indo-Aryan" },
  { code: "ira", name: "伊朗语", flag: "🇮🇷", nativeName: "Iranian" },
  { code: "gem", name: "日耳曼语", flag: "🇪🇺", nativeName: "Germanic" },
  { code: "cel", name: "凯尔特语", flag: "🇪🇺", nativeName: "Celtic" },
  { code: "sla", name: "斯拉夫语", flag: "🇪🇺", nativeName: "Slavic" },
  { code: "bat", name: "波罗的海语", flag: "🇪🇺", nativeName: "Baltic" },
  { code: "fiu", name: "芬兰-乌戈尔语", flag: "🇪🇺", nativeName: "Finno-Ugric" },
  { code: "urj", name: "乌拉尔语", flag: "🇪🇺", nativeName: "Uralic" },
  { code: "afa", name: "亚非语", flag: "🇪🇺", nativeName: "Afro-Asiatic" },
  { code: "nic", name: "尼日尔-刚果语", flag: "🇪🇺", nativeName: "Niger-Congo" },
  { code: "nub", name: "努比亚语", flag: "🇸🇩", nativeName: "Nubian" },
  { code: "cus", name: "库希特语", flag: "🇪🇹", nativeName: "Cushitic" },
  { code: "ber", name: "柏柏尔语", flag: "🇲🇦", nativeName: "Tamazight" },
  { code: "sem", name: "闪米特语", flag: "🇸🇦", nativeName: "Semitic" },
  { code: "cau", name: "高加索语", flag: "🇷🇺", nativeName: "Caucasian" },
  { code: "tut", name: "阿尔泰语", flag: "🇹🇷", nativeName: "Altaic" },
  { code: "dra", name: "达罗毗荼语", flag: "🇮🇳", nativeName: "Dravidian" },
  { code: "aav", name: "南亚语", flag: "🇰🇭", nativeName: "Austroasiatic" },
  { code: "tai", name: "泰语", flag: "🇹🇭", nativeName: "Tai" },
  { code: "mkh", name: "孟-高棉语", flag: "🇰🇭", nativeName: "Mon-Khmer" },
  { code: "hmn", name: "苗语", flag: "🇨🇳", nativeName: "Hmong" },
  { code: "myn", name: "玛雅语", flag: "🇲🇽", nativeName: "Mayan" },
  { code: "azc", name: "阿兹特克语", flag: "🇲🇽", nativeName: "Nahuatl" },
  { code: "oto", name: "奥托米语", flag: "🇲🇽", nativeName: "Otomian" },
  {
    code: "cai",
    name: "中美洲印第安语",
    flag: "🇲🇽",
    nativeName: "Central American Indian",
  },
  {
    code: "sai",
    name: "南美洲印第安语",
    flag: "🇧🇷",
    nativeName: "South American Indian",
  },
  {
    code: "nai",
    name: "北美洲印第安语",
    flag: "🇺🇸",
    nativeName: "North American Indian",
  },
  { code: "map", name: "南岛语", flag: "🇵🇭", nativeName: "Austronesian" },
  { code: "paa", name: "巴布亚语", flag: "🇵🇬", nativeName: "Papuan" },
  {
    code: "aus",
    name: "澳大利亚原住民语",
    flag: "🇦🇺",
    nativeName: "Australian Aboriginal",
  },
  { code: "art", name: "人工语言", flag: "🌍", nativeName: "Constructed" },
  { code: "qaa", name: "私人使用", flag: "🔒", nativeName: "Private use" },
  { code: "und", name: "未确定", flag: "❓", nativeName: "Undetermined" },
  {
    code: "mul",
    name: "多种语言",
    flag: "🌍",
    nativeName: "Multiple languages",
  },
  {
    code: "zxx",
    name: "无语言内容",
    flag: "🚫",
    nativeName: "No linguistic content",
  },
  {
    code: "mis",
    name: "未编码语言",
    flag: "❓",
    nativeName: "Uncoded language",
  },
];

// 应用状态
let appState = {
  sourceLanguage: "zh",
  targetLanguage: "en",
  sourceText: "",
  translatedText: "",
  autoTranslate: true,
  showPhonetics: false,
  theme: "auto",
};

// DOM 元素
const elements = {
  sourceLanguageBtn: null,
  targetLanguageBtn: null,
  sourceLanguageMenu: null,
  targetLanguageMenu: null,
  sourceText: null,
  translatedText: null,
  swapLanguages: null,
  translateBtn: null,
  clearSource: null,
  copyTranslation: null,
  speakSource: null,
  speakTranslation: null,
  settingsBtn: null,
  themeToggle: null,
  settingsModal: null,
  closeSettings: null,
  autoTranslate: null,
  showPhonetics: null,
  themeSelect: null,
  loadingOverlay: null,
  charCount: null,
  wordCount: null,
};

// 初始化应用
function initApp() {
  initializeElements();
  setupEventListeners();
  populateLanguageMenus();
  loadSettings();
  updateUI();
  startAutoThemeWatcher();
}

// 初始化DOM元素
function initializeElements() {
  elements.sourceLanguageBtn = document.getElementById("sourceLanguageBtn");
  elements.targetLanguageBtn = document.getElementById("targetLanguageBtn");
  elements.sourceLanguageMenu = document.getElementById("sourceLanguageMenu");
  elements.targetLanguageMenu = document.getElementById("targetLanguageMenu");
  elements.sourceText = document.getElementById("sourceText");
  elements.translatedText = document.getElementById("translatedText");
  elements.swapLanguages = document.getElementById("swapLanguages");
  elements.translateBtn = document.getElementById("translateBtn");
  elements.clearSource = document.getElementById("clearSource");
  elements.copyTranslation = document.getElementById("copyTranslation");
  elements.speakSource = document.getElementById("speakSource");
  elements.speakTranslation = document.getElementById("speakTranslation");
  elements.settingsBtn = document.getElementById("settingsBtn");
  elements.themeToggle = document.getElementById("themeToggle");
  elements.settingsModal = document.getElementById("settingsModal");
  elements.closeSettings = document.getElementById("closeSettings");
  elements.autoTranslate = document.getElementById("autoTranslate");
  elements.showPhonetics = document.getElementById("showPhonetics");
  elements.themeSelect = document.getElementById("themeSelect");
  elements.loadingOverlay = document.getElementById("loadingOverlay");
  elements.charCount = document.getElementById("charCount");
  elements.wordCount = document.getElementById("wordCount");
}

// 设置事件监听器
function setupEventListeners() {
  // 语言选择
  elements.sourceLanguageBtn.addEventListener("click", () =>
    toggleLanguageMenu("source")
  );
  elements.targetLanguageBtn.addEventListener("click", () =>
    toggleLanguageMenu("target")
  );

  // 文本输入
  elements.sourceText.addEventListener("input", handleSourceTextInput);
  elements.sourceText.addEventListener("keydown", handleSourceTextKeydown);

  // 按钮事件
  elements.swapLanguages.addEventListener("click", swapLanguages);
  elements.translateBtn.addEventListener("click", translateText);
  elements.clearSource.addEventListener("click", clearSourceText);
  elements.copyTranslation.addEventListener("click", copyTranslation);
  elements.speakSource.addEventListener("click", () =>
    speakText(appState.sourceText, appState.sourceLanguage)
  );
  elements.speakTranslation.addEventListener("click", () =>
    speakText(appState.translatedText, appState.targetLanguage)
  );

  // 设置
  elements.settingsBtn.addEventListener("click", () => showSettings());
  if (elements.themeToggle) {
    elements.themeToggle.addEventListener("click", toggleThemeQuick);
  }
  elements.closeSettings.addEventListener("click", () => hideSettings());
  elements.autoTranslate.addEventListener("change", handleAutoTranslateChange);
  elements.showPhonetics.addEventListener("change", handleShowPhoneticsChange);
  elements.themeSelect.addEventListener("change", handleThemeChange);

  // 点击外部关闭下拉菜单
  document.addEventListener("click", handleOutsideClick);

  // 键盘快捷键
  document.addEventListener("keydown", handleKeyboardShortcuts);
}

// 填充语言菜单
function populateLanguageMenus() {
  const sourceMenu = elements.sourceLanguageMenu;
  const targetMenu = elements.targetLanguageMenu;

  languages.forEach((lang) => {
    const sourceOption = createLanguageOption(lang, "source");
    const targetOption = createLanguageOption(lang, "target");

    sourceMenu.appendChild(sourceOption);
    targetMenu.appendChild(targetOption);
  });
}

// 创建语言选项
function createLanguageOption(lang, type) {
  const option = document.createElement("div");
  option.className = "language-option";
  option.innerHTML = `
        <span class="flag">${lang.flag}</span>
        <span class="language-name">${lang.name}</span>
        <span class="native-name">${lang.nativeName}</span>
    `;

  option.addEventListener("click", () => selectLanguage(lang.code, type));

  if (type === "source" && lang.code === appState.sourceLanguage) {
    option.classList.add("selected");
  } else if (type === "target" && lang.code === appState.targetLanguage) {
    option.classList.add("selected");
  }

  return option;
}

// 切换语言菜单
function toggleLanguageMenu(type) {
  const menu =
    type === "source"
      ? elements.sourceLanguageMenu
      : elements.targetLanguageMenu;
  const otherMenu =
    type === "source"
      ? elements.targetLanguageMenu
      : elements.sourceLanguageMenu;

  // 关闭其他菜单
  otherMenu.classList.remove("show");

  // 切换当前菜单
  menu.classList.toggle("show");
}

// 选择语言
function selectLanguage(langCode, type) {
  if (type === "source") {
    appState.sourceLanguage = langCode;
    updateLanguageButton("source", langCode);
  } else {
    appState.targetLanguage = langCode;
    updateLanguageButton("target", langCode);
  }

  // 关闭菜单
  const menu =
    type === "source"
      ? elements.sourceLanguageMenu
      : elements.targetLanguageMenu;
  menu.classList.remove("show");

  // 如果启用了自动翻译且有文本，则重新翻译
  if (appState.autoTranslate && appState.sourceText.trim()) {
    translateText();
  }

  // 保存设置
  saveSettings();
}

// 更新语言按钮
function updateLanguageButton(type, langCode) {
  const lang = languages.find((l) => l.code === langCode);
  const btn =
    type === "source" ? elements.sourceLanguageBtn : elements.targetLanguageBtn;

  if (lang) {
    btn.innerHTML = `
            <span class="flag">${lang.flag}</span>
            <span class="language-name">${lang.name}</span>
            <i class="fas fa-chevron-down"></i>
        `;
  }
}

// 交换语言
function swapLanguages() {
  const temp = appState.sourceLanguage;
  appState.sourceLanguage = appState.targetLanguage;
  appState.targetLanguage = temp;

  updateLanguageButton("source", appState.sourceLanguage);
  updateLanguageButton("target", appState.targetLanguage);

  // 交换文本
  const tempText = appState.sourceText;
  appState.sourceText = appState.translatedText;
  appState.translatedText = tempText;

  elements.sourceText.value = appState.sourceText;
  elements.translatedText.innerHTML =
    appState.translatedText ||
    `
        <div class="placeholder-text">
            <i class="fas fa-arrow-left"></i>
            <span>翻译结果将在这里显示</span>
        </div>
    `;

  // 如果启用了自动翻译且有文本，则重新翻译
  if (appState.autoTranslate && appState.sourceText.trim()) {
    translateText();
  }

  // 保存设置
  saveSettings();
}

// 处理源文本输入
function handleSourceTextInput() {
  appState.sourceText = elements.sourceText.value;
  updateTextCounts();

  // 如果启用了自动翻译，延迟翻译
  if (appState.autoTranslate) {
    clearTimeout(window.autoTranslateTimer);
    window.autoTranslateTimer = setTimeout(() => {
      if (appState.sourceText.trim()) {
        translateText();
      } else {
        clearTranslation();
      }
    }, 1000);
  }
}

// 处理源文本键盘事件
function handleSourceTextKeydown(event) {
  if (event.ctrlKey && event.key === "Enter") {
    translateText();
  }
}

// 更新文本计数
function updateTextCounts() {
  const text = appState.sourceText;
  const charCount = text.length;
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;

  elements.charCount.textContent = `${charCount} 字符`;
  elements.wordCount.textContent = `${wordCount} 词`;
}

// 翻译文本
async function translateText() {
  console.log("开始翻译:", appState.sourceText);

  if (!appState.sourceText.trim()) {
    console.log("源文本为空，清除翻译");
    clearTranslation();
    return;
  }

  console.log("显示加载状态");
  showLoading();

  try {
    // 使用Google Translate API进行翻译
    console.log("调用翻译API:", {
      text: appState.sourceText,
      source: appState.sourceLanguage,
      target: appState.targetLanguage,
    });

    const translation = await translateWithGoogle(
      appState.sourceText,
      appState.sourceLanguage,
      appState.targetLanguage
    );

    console.log("翻译完成:", translation);
    appState.translatedText = translation;
    updateTranslationDisplay();
  } catch (error) {
    console.error("翻译错误:", error);
    showTranslationError(error.message);
  } finally {
    console.log("隐藏加载状态");
    hideLoading();
  }
}

// 使用Google Translate API翻译
async function translateWithGoogle(text, sourceLang, targetLang) {
  // 尝试多个翻译API端点
  const endpoints = [
    // 主要端点
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
      text
    )}`,
    // 备用端点1
    `https://translate.googleapis.com/translate_a/single?client=webapp&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
      text
    )}`,
    // 备用端点2
    `https://clients5.google.com/translate_a/single?client=dict-chrome-ex&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(
      text
    )}`,
  ];

  console.log("翻译请求:", { text, sourceLang, targetLang });

  for (let i = 0; i < endpoints.length; i++) {
    const url = endpoints[i];
    console.log(`尝试端点 ${i + 1}:`, url);

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      });

      console.log(`端点 ${i + 1} 响应状态:`, response.status);

      if (!response.ok) {
        console.warn(`端点 ${i + 1} 失败，状态码:`, response.status);
        continue;
      }

      const data = await response.json();
      console.log(`端点 ${i + 1} 响应数据:`, data);

      if (data && data[0] && Array.isArray(data[0])) {
        // Google Translate API 返回格式: [[[翻译片段1], [翻译片段2], ...], ...]
        // 我们需要将所有翻译片段连接起来
        let result = "";
        for (let j = 0; j < data[0].length; j++) {
          if (data[0][j] && data[0][j][0]) {
            result += data[0][j][0];
          }
        }

        if (result.trim()) {
          console.log("翻译结果:", result);
          return result;
        } else {
          console.warn(`端点 ${i + 1} 翻译结果为空`);
          continue;
        }
      } else {
        console.warn(`端点 ${i + 1} 数据格式错误`);
        continue;
      }
    } catch (error) {
      console.warn(`端点 ${i + 1} 请求失败:`, error.message);
      if (i === endpoints.length - 1) {
        // 最后一个端点也失败了
        throw new Error(`所有翻译服务都不可用。最后错误: ${error.message}`);
      }
      continue;
    }
  }

  throw new Error("所有翻译服务都不可用");
}

// 更新翻译显示
function updateTranslationDisplay() {
  if (appState.translatedText) {
    elements.translatedText.innerHTML = `
            <div class="translation-result fade-in">
                ${appState.translatedText}
            </div>
        `;
  } else {
    clearTranslation();
  }
}

// 清除翻译
function clearTranslation() {
  appState.translatedText = "";
  elements.translatedText.innerHTML = `
        <div class="placeholder-text">
            <i class="fas fa-arrow-left"></i>
            <span>翻译结果将在这里显示</span>
        </div>
    `;
}

// 清除源文本
function clearSourceText() {
  appState.sourceText = "";
  elements.sourceText.value = "";
  clearTranslation();
  updateTextCounts();
}

// 复制翻译
async function copyTranslation() {
  if (!appState.translatedText) {
    showToast("没有可复制的内容");
    return;
  }

  try {
    await navigator.clipboard.writeText(appState.translatedText);
    showToast("翻译已复制到剪贴板");
  } catch (error) {
    // 降级方案
    const textArea = document.createElement("textarea");
    textArea.value = appState.translatedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    showToast("翻译已复制到剪贴板");
  }
}

// 语音朗读
function speakText(text, language) {
  if (!text.trim()) {
    showToast("没有可朗读的文本");
    return;
  }

  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.9;
    utterance.pitch = 1;

    speechSynthesis.speak(utterance);
    showToast("正在朗读...");
  } else {
    showToast("您的浏览器不支持语音朗读功能");
  }
}

// 显示加载状态
function showLoading() {
  elements.loadingOverlay.classList.add("show");
}

// 隐藏加载状态
function hideLoading() {
  elements.loadingOverlay.classList.remove("show");
}

// 显示翻译错误
function showTranslationError(message) {
  elements.translatedText.innerHTML = `
        <div class="translation-error fade-in">
            <i class="fas fa-exclamation-triangle"></i>
            <span>${message}</span>
        </div>
        <style>
        .translation-error {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 160px;
            color: var(--accent-color);
            text-align: center;
            gap: 16px;
        }
        .translation-error i {
            font-size: 32px;
            opacity: 0.7;
        }
        </style>
    `;
}

// 显示设置
function showSettings() {
  elements.settingsModal.classList.add("show");
}

// 隐藏设置
function hideSettings() {
  elements.settingsModal.classList.remove("show");
}

// 处理自动翻译设置变更
function handleAutoTranslateChange() {
  appState.autoTranslate = elements.autoTranslate.checked;
  saveSettings();
}

// 处理显示音标设置变更
function handleShowPhoneticsChange() {
  appState.showPhonetics = elements.showPhonetics.checked;
  saveSettings();
}

// 处理主题设置变更
function handleThemeChange() {
  appState.theme = elements.themeSelect.value;
  applyTheme(appState.theme);
  saveSettings();
}

// 快速切换主题（浅色/深色之间切换）
function toggleThemeQuick() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // 更新设置
  appState.theme = newTheme;
  elements.themeSelect.value = newTheme;

  // 应用新主题
  applyTheme(newTheme);
  saveSettings();
}

// 应用主题
function applyTheme(theme) {
  if (theme === "auto") {
    const mode = computeAutoThemeByTime();
    document.documentElement.setAttribute("data-theme", mode);
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
  // 更新头部图标
  updateThemeToggleIcon();
}

// 基于本地时间决定主题：07:00-19:00 使用浅色，否则深色
function computeAutoThemeByTime() {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 7 && hour < 19 ? "light" : "dark";
}

// 自动主题监听：每分钟校正一次（仅当设置为 auto 时）
let autoThemeTimerId = null;
function startAutoThemeWatcher() {
  if (autoThemeTimerId) {
    clearInterval(autoThemeTimerId);
  }
  autoThemeTimerId = setInterval(() => {
    if (appState.theme === "auto") {
      const desired = computeAutoThemeByTime();
      const current = document.documentElement.getAttribute("data-theme");
      if (current !== desired) {
        document.documentElement.setAttribute("data-theme", desired);
        updateThemeToggleIcon();
      }
    }
  }, 60 * 1000);
}

function updateThemeToggleIcon() {
  if (!elements.themeToggle) return;
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  elements.themeToggle.innerHTML = `<i class="fas ${
    isDark ? "fa-sun" : "fa-moon"
  }"></i>`;
}

// 保存设置
function saveSettings() {
  localStorage.setItem("googleTranslateSettings", JSON.stringify(appState));
}

// 加载设置
function loadSettings() {
  const saved = localStorage.getItem("googleTranslateSettings");
  if (saved) {
    try {
      const settings = JSON.parse(saved);
      appState = { ...appState, ...settings };

      // 应用设置到UI
      elements.autoTranslate.checked = appState.autoTranslate;
      elements.showPhonetics.checked = appState.showPhonetics;
      elements.themeSelect.value = appState.theme;
      applyTheme(appState.theme);
    } catch (error) {
      console.error("加载设置失败:", error);
    }
  }
}

// 更新UI
function updateUI() {
  updateLanguageButton("source", appState.sourceLanguage);
  updateLanguageButton("target", appState.targetLanguage);
  updateTextCounts();
  updateThemeToggleIcon();
}

// 处理外部点击
function handleOutsideClick(event) {
  if (!event.target.closest(".language-dropdown")) {
    elements.sourceLanguageMenu.classList.remove("show");
    elements.targetLanguageMenu.classList.remove("show");
  }

  if (
    !event.target.closest(".modal-content") &&
    !event.target.closest(".btn-settings")
  ) {
    elements.settingsModal.classList.remove("show");
  }
}

// 处理键盘快捷键
function handleKeyboardShortcuts(event) {
  // Ctrl+Shift+T: 翻译
  if (event.ctrlKey && event.shiftKey && event.key === "T") {
    event.preventDefault();
    translateText();
  }

  // Ctrl+Shift+S: 交换语言
  if (event.ctrlKey && event.shiftKey && event.key === "S") {
    event.preventDefault();
    swapLanguages();
  }

  // Ctrl+Shift+C: 复制翻译
  if (event.ctrlKey && event.shiftKey && event.key === "C") {
    event.preventDefault();
    copyTranslation();
  }

  // Ctrl+Shift+L: 清除文本
  if (event.ctrlKey && event.shiftKey && event.key === "L") {
    event.preventDefault();
    clearSourceText();
  }
}

// 显示提示消息
function showToast(message, duration = 3000) {
  // 创建提示元素
  const toast = document.createElement("div");
  toast.className = "toast fade-in";
  toast.textContent = message;
  toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 12px 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-medium);
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        transition: var(--transition);
    `;

  document.body.appendChild(toast);

  // 自动移除
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (document.body.contains(toast)) {
        document.body.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// 页面加载完成后初始化应用
document.addEventListener("DOMContentLoaded", initApp);

// 接收来自后台的消息（转发自内容脚本的选中内容）
chrome?.runtime?.onMessage?.addListener?.((message) => {
  if (
    message &&
    message.type === "FORWARD_SELECTION_TO_PANEL" &&
    typeof message.text === "string"
  ) {
    handleExternalSelection(message.text);
  }
});

async function handleExternalSelection(text) {
  if (!text || !elements.sourceText) return;
  appState.sourceText = text;
  elements.sourceText.value = text;
  updateTextCounts();

  try {
    // 先检测语言
    const detectedLang = await detectLanguageWithGoogle(text);
    if (detectedLang) {
      appState.sourceLanguage = detectedLang;
      // 目标语言规则：若源是中文，则目标=英文；否则目标=中文
      appState.targetLanguage = detectedLang.startsWith("zh") ? "en" : "zh";
      updateLanguageButton("source", appState.sourceLanguage);
      updateLanguageButton("target", appState.targetLanguage);
    }
  } catch (e) {
    console.warn("语言检测失败，使用当前设置继续翻译", e);
  }

  // 翻译
  translateText();
}

// 语言检测（Google接口）
async function detectLanguageWithGoogle(text) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(
    text
  )}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error("detect failed");
  const data = await resp.json();
  // 响应结构通常包含 data[2] 为源语言，或在不同结构里 data[8][0][0]
  if (Array.isArray(data)) {
    if (data[2]) return data[2];
    if (data[8] && data[8][0] && data[8][0][0]) return data[8][0][0];
  }
  return null;
}

// 监听系统主题变化
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    // 当为 auto 时，我们基于本地时间，不再跟随系统事件；这里不做处理
  });
