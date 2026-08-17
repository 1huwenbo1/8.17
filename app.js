const artifacts = [
  {
    id: "yubing",
    number: "01",
    name: "玉柄铁剑",
    city: "三门峡",
    mapLabel: "三门峡 · 玉柄铁剑",
    period: "周代礼制与早期铁器",
    keyword: "玉纹 · 剑意 · 守护",
    theme: "古剑探秘",
    image: "assets/artifacts/yubing-tiejian.webp",
    lead: "以玉柄与铁刃的材质碰撞为线索，让游客从一柄古剑进入三门峡的先秦文明叙事。",
    drawer: "玉与铁在一件器物上相遇，技术、礼制与身份由此交织。沿着剑身的线索，开启三门峡篇章。",
    route: "从玉柄铁剑出发，连接三门峡的虢国文化、城市博物馆与历史遗址。",
    origin: "三门峡虢国墓地2001号墓（虢季墓）",
    venue: "河南博物院 · 郑州",
    officialUrl: "https://www.chnmus.net/ch/collection/treasure/details.html?id=508167711638793656",
    routeStory: "这条线索从三门峡的虢国墓地出发，再到郑州观看河南博物院的馆藏叙事。重点不是赶景点，而是理解玉与铁为何会同时出现在一件周代礼制重器上。",
    routeSteps: [
      ["先在线识器", "完成“玉纹拼合”，记住玉柄、铁刃与云纹三个识别点。"],
      ["再读虢国线索", "把出土地、墓葬礼制与三门峡城市历史放在同一条时间线上。"],
      ["到馆看原作", "出发前查看河南博物院官方展讯，确认展品与预约安排。"],
    ],
    actions: ["古剑探秘", "玉纹拼合", "文明挑战"],
    awakening: "观察玉柄、剑身与装饰结构，理解角色头饰、服装和武器元素如何由文物转译而来。",
    pattern: "按器物结构依次选择玉质剑柄、护手与铁质剑身，让分散的构件重新组成完整古剑。",
    clues: [
      ["玉质柄首", "角色头冠与护肩使用温润玉色，呼应玉柄构件的材质感。"],
      ["铁质剑身", "深色剑身形成视觉中轴，强化古剑的力量与时间感。"],
      ["云纹装饰", "衣摆、腰带与剑鞘上的曲线，让器物纹样转化为角色语言。"],
    ],
    patternPrompt: "哪组元素最能概括玉柄铁剑IP的设计来源？",
    patternOptions: ["玉柄＋铁刃", "莲瓣＋仙鹤", "牛角＋兽纹"],
    patternAnswer: 0,
    question: "这个角色最核心的文物视觉线索是什么？",
    options: ["玉柄与铁剑", "莲花与仙鹤", "骨笛与音孔"],
    answer: 0,
  },
  {
    id: "fuhao",
    number: "02",
    name: "妇好鸮尊",
    city: "安阳",
    mapLabel: "安阳 · 妇好鸮尊",
    period: "商代青铜文明",
    keyword: "鸮鸟 · 青铜 · 甲骨",
    theme: "鸮尊觉醒",
    image: "assets/artifacts/fuhao-xiaozun.webp",
    lead: "从鸮鸟造型、青铜纹饰与甲骨文字出发，走进安阳殷墟所代表的商代文明。",
    drawer: "一只青铜鸮鸟，连接着商代礼制、甲骨文字与妇好的传奇。让纹饰成为通往安阳的入口。",
    route: "以安阳殷墟为核心，串联考古遗址、博物馆与文字文化体验。",
    origin: "安阳殷墟妇好墓",
    venue: "河南博物院 · 郑州",
    officialUrl: "https://www.chnmus.net/ch/cultural/product/details.html?id=519149539630452212",
    routeStory: "妇好鸮尊的出土地在安阳殷墟，而器物的河南博物院馆藏线索把安阳与郑州连接起来。适合做成“商文明—女性人物—甲骨文字”主题路线。",
    routeSteps: [
      ["辨认鸮形", "先在角色页找到双耳、羽翼和青铜纹饰。"],
      ["走进殷墟", "在安阳把妇好墓、甲骨文字与商代都城放回真实空间。"],
      ["延伸到郑州", "根据河南博物院官方展讯安排馆藏参观与华夏古乐体验。"],
    ],
    actions: ["鸮尊觉醒", "甲骨解谜", "文明挑战"],
    awakening: "点击角色的鸮形冠饰与青铜配色，理解IP形象如何提取文物轮廓和纹样。",
    pattern: "从鸮鸟造型、青铜纹饰与铭文信息中排除干扰项，找出能够确认妇好鸮尊身份的三条线索。",
    clues: [
      ["鸮鸟轮廓", "角色冠饰保留鸮的双耳与展开的羽翼，是最直接的识别符号。"],
      ["青铜纹饰", "墨青、玉绿与古金建立青铜器的厚重质感和神秘气息。"],
      ["甲骨线索", "背景中的甲骨片把角色与安阳殷墟的文字文明连接起来。"],
    ],
    patternPrompt: "选择最适合妇好鸮尊的核心纹样组合。",
    patternOptions: ["鸮羽＋青铜纹", "音孔＋水纹", "玉柄＋云纹"],
    patternAnswer: 0,
    question: "妇好鸮尊IP最醒目的动物造型来自哪一种鸟？",
    options: ["鹤", "鸮", "雁"],
    answer: 1,
  },
  {
    id: "yachang",
    number: "03",
    name: "亚长牛尊",
    city: "安阳",
    mapLabel: "安阳 · 亚长牛尊",
    period: "商代青铜动物尊",
    keyword: "牛首 · 百兽纹 · 铸造",
    theme: "牛尊觉醒",
    image: "assets/artifacts/yachang-niuzun.webp",
    lead: "以牛的力量感和青铜动物纹饰塑造守护者形象，让器物造型转化为可亲近的城市文化角色。",
    drawer: "牛首、兽纹与青铜铸造共同构成力量感鲜明的IP角色。跟随百兽纹样寻找文明线索。",
    route: "以青铜文明为主题，连接城市文化地标、博物馆展览与文创体验空间。",
    origin: "安阳殷墟花园庄东地亚长墓",
    venue: "殷墟博物馆 · 安阳",
    officialUrl: "https://www.ayyx.com/",
    routeStory: "亚长牛尊让这条路线完全落在安阳：从器身上的百兽纹样进入商代青铜艺术，再在殷墟博物馆理解墓葬、铸造与都城生活。",
    routeSteps: [
      ["线上找百兽", "完成角色页“百兽寻纹”，记录牛、虎、鸟、鱼等纹样线索。"],
      ["到访殷墟博物馆", "从亚长牛尊切入商代青铜器、考古发现与殷墟都城。"],
      ["生成城市纪念", "把找到的纹样组合成一张安阳主题数字卡或线下印章。"],
    ],
    actions: ["牛尊觉醒", "百兽寻纹", "文明挑战"],
    awakening: "观察牛角、牛首权杖和青铜器轮廓，查看这些元素在角色设计中的对应关系。",
    pattern: "在六枚图形线索中寻找牛、虎、鸟、鱼，集齐亚长牛尊所代表的动物纹样谱系。",
    clues: [
      ["牛首双角", "头冠与权杖共同强化牛的正面轮廓，建立守护者般的力量感。"],
      ["百兽纹样", "服饰和背景中的动物纹饰，让观众从角色继续寻找器物细节。"],
      ["铸造场景", "冶铸火光与青铜器陈列，把IP角色放回器物诞生的语境。"],
    ],
    patternPrompt: "亚长牛尊角色最应保留的识别组合是什么？",
    patternOptions: ["莲花＋羽翼", "牛角＋兽纹", "骨笛＋音符"],
    patternAnswer: 1,
    question: "亚长牛尊IP角色的主要造型来源是什么？",
    options: ["牛形青铜器", "玉剑", "骨笛"],
    answer: 0,
  },
  {
    id: "lianhe",
    number: "04",
    name: "莲鹤方壶",
    city: "新郑",
    mapLabel: "新郑 · 莲鹤方壶",
    period: "春秋礼乐文明",
    keyword: "莲花 · 仙鹤 · 礼乐",
    theme: "莲鹤觉醒",
    image: "assets/artifacts/lianhe-fanghu.webp",
    lead: "以展翅仙鹤和层叠莲瓣构成轻盈的视觉核心，将春秋礼乐文明转化为可互动的城市意象。",
    drawer: "莲花向上盛放，仙鹤振翅欲飞。器物的动态感，被转化为一位连接礼乐与自然的角色。",
    route: "从新郑出发，串联郑韩故城相关文化线索、博物馆与古都体验。",
    origin: "新郑李家楼郑公大墓",
    venue: "河南博物院 · 郑州",
    officialUrl: "https://www.chnmus.net/?page_index=1",
    routeStory: "从新郑出土的莲鹤方壶出发，可以把郑韩故城与河南博物院连接为一条春秋礼乐路线。页面重点提取莲、鹤与方壶结构，不代替真实器物的观看。",
    routeSteps: [
      ["线上看结构", "辨认层叠莲瓣、展翅仙鹤与方壶器身的上下关系。"],
      ["新郑读古都", "围绕郑韩故城理解春秋时期的城市与礼乐文化。"],
      ["郑州看重器", "查看河南博物院官方展讯后，安排莲鹤方壶相关馆藏参观。"],
    ],
    actions: ["莲鹤觉醒", "礼乐拼映", "文明挑战"],
    awakening: "点击莲冠、鹤羽和方壶轮廓，查看角色从器物结构中提炼出的三层设计语言。",
    pattern: "从方壶器身开始，依次承托莲瓣与仙鹤，重建器物由厚重向轻盈生长的视觉层次。",
    clues: [
      ["层叠莲瓣", "头冠和胸前光源延续莲花向上生长的结构与生命感。"],
      ["振翅仙鹤", "鹤冠、羽翼与飞行姿态，把器物顶部的动态转化为角色动作。"],
      ["礼乐空间", "城邑、水系与礼器场景共同建立春秋礼乐文明的叙事背景。"],
    ],
    patternPrompt: "哪组意象构成莲鹤方壶IP的视觉核心？",
    patternOptions: ["鸮鸟＋甲骨", "莲花＋仙鹤", "剑刃＋玉饰"],
    patternAnswer: 1,
    question: "莲鹤方壶IP最核心的两种自然意象是什么？",
    options: ["牛与鸟", "莲与鹤", "玉与铁"],
    answer: 1,
  },
  {
    id: "jiahu",
    number: "05",
    name: "贾湖骨笛",
    city: "舞阳",
    mapLabel: "舞阳 · 贾湖骨笛",
    period: "新石器时代音乐文化",
    keyword: "骨笛 · 音律 · 水乡",
    theme: "骨笛聆听",
    image: "assets/artifacts/jiahu-gudi.webp",
    lead: "从骨笛音孔与远古聚落出发，把声音变成可以看见的水纹和光带，形成独特的听觉互动章节。",
    drawer: "一支骨笛让远古的声音被今天听见。跟随水纹与音符，走进舞阳贾湖的文明记忆。",
    route: "围绕舞阳贾湖文化，连接遗址认知、音乐体验与地方文旅内容。",
    origin: "舞阳贾湖遗址M282号墓",
    venue: "河南博物院 · 郑州",
    officialUrl: "https://www.chnmus.net/ch/collection/treasure/details.html?id=508164979145447651",
    routeStory: "这是一条从舞阳水乡与史前聚落走向郑州博物馆的声音路线。先听懂音孔与节奏，再理解八千多年前的人如何测量、钻孔并创造音乐。",
    routeSteps: [
      ["先听见远古", "在角色页完成“音律拼合”，用水波与节奏建立第一印象。"],
      ["回到贾湖", "从遗址环境理解骨笛与史前生活、自然材料之间的关系。"],
      ["到馆细看", "通过河南博物院官方页面确认馆藏信息和参观安排。"],
    ],
    actions: ["骨笛聆听", "音律拼合", "文明挑战"],
    awakening: "观察骨笛音孔、角色头饰与页面水纹，理解声音如何转化为一套可见、可点击的IP视觉语言。",
    pattern: "点击七枚音孔演奏不同音高，按照“宫—角—徵”的顺序完成一段三音文明旋律。",
    clues: [
      ["骨笛音孔", "头饰、手持骨笛和页面按钮都重复音孔结构，形成统一识别。"],
      ["水纹音律", "音符被转化成流动水纹，让声音在画面中获得可见的形态。"],
      ["远古聚落", "水岸、房屋与生活场景将音乐线索放回贾湖先民的日常。"],
    ],
    patternPrompt: "贾湖骨笛章节最适合使用哪组动态图形？",
    patternOptions: ["音孔＋水波", "牛角＋火焰", "莲瓣＋鹤羽"],
    patternAnswer: 0,
    question: "贾湖骨笛IP页面最适合延展哪类交互？",
    options: ["音符与节奏", "青铜铸造", "玉纹拼图"],
    answer: 0,
  },
];

const chronology = [
  { id: "jiahu", timeline: "距今约9000—7800年" },
  { id: "fuhao", timeline: "商代晚期" },
  { id: "yachang", timeline: "商代晚期 · 与妇好墓约同时" },
  { id: "yubing", timeline: "西周晚期" },
  { id: "lianhe", timeline: "春秋时期" },
];
const chronologyIndex = new Map(chronology.map((item, index) => [item.id, index]));
const chronologyMeta = new Map(chronology.map((item) => [item.id, item]));
artifacts.sort((left, right) => chronologyIndex.get(left.id) - chronologyIndex.get(right.id));
artifacts.forEach((item, index) => {
  item.number = String(index + 1).padStart(2, "0");
  item.timeline = chronologyMeta.get(item.id).timeline;
});

const artifactById = Object.fromEntries(artifacts.map((item) => [item.id, item]));
const state = {
  currentView: "map",
  currentArtifact: artifacts[0],
  currentRoute: artifacts[0],
  completed: new Set(JSON.parse(localStorage.getItem("henan-completed") || "[]")),
};

const views = [...document.querySelectorAll("[data-view]")];
const navButtons = [...document.querySelectorAll(".nav-button")];
const drawer = document.querySelector("#artifact-drawer");
const modal = document.querySelector("#modal-backdrop");
const interactionModal = document.querySelector(".interaction-modal");
const sceneTransition = document.querySelector("#scene-transition");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const audioControl = document.querySelector("#audio-control");
const audioMenu = document.querySelector("#audio-menu");
const audioSettingsToggle = document.querySelector("#audio-settings-toggle");
const masterVolume = document.querySelector("#master-volume");
const musicSwitch = document.querySelector("#music-switch");
const effectsSwitch = document.querySelector("#effects-switch");
const welcomeGate = document.querySelector("#welcome-gate");
const storedVolumeValue = localStorage.getItem("henan-master-volume");
const storedVolume = storedVolumeValue === null ? Number.NaN : Number(storedVolumeValue);
const audioState = {
  context: null,
  master: null,
  music: null,
  effects: null,
  limiter: null,
  musicEnabled: false,
  effectsEnabled: localStorage.getItem("henan-effects-enabled") !== "false",
  masterVolume: Number.isFinite(storedVolume) && storedVolume >= 0 && storedVolume <= 100 ? storedVolume / 100 : 0.8,
  musicTimer: 0,
  musicStep: 0,
};
let transitionToken = 0;
let artifactEntranceTimer;
let contentEntranceTimer;

function playArtifactEntrance() {
  const artifactView = document.querySelector("#artifact-view");
  window.clearTimeout(artifactEntranceTimer);
  artifactView.classList.remove("is-entering");
  void artifactView.offsetWidth;
  artifactView.classList.add("is-entering");
  artifactEntranceTimer = window.setTimeout(() => artifactView.classList.remove("is-entering"), 1250);
}

function playContentEntrance(name) {
  const activeView = views.find((view) => view.dataset.view === name);
  if (!activeView || name === "artifact" || reduceMotion.matches) return;
  window.clearTimeout(contentEntranceTimer);
  views.forEach((view) => view.classList.remove("is-content-entering"));
  void activeView.offsetWidth;
  activeView.classList.add("is-content-entering");
  contentEntranceTimer = window.setTimeout(() => activeView.classList.remove("is-content-entering"), 1100);
}

function applyView(name) {
  state.currentView = name;
  views.forEach((view) => view.classList.toggle("is-active", view.dataset.view === name));
  navButtons.forEach((button) => {
    const target = button.dataset.viewTarget;
    button.classList.toggle("is-active", target === name || (name === "artifact" && target === "map"));
  });
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  if (name === "journey") renderRoute(state.currentRoute || state.currentArtifact);
  if (name === "artifact") playArtifactEntrance();
  else playContentEntrance(name);
}

function setView(name) {
  if (name === state.currentView) {
    applyView(name);
    return;
  }

  if (reduceMotion.matches || !sceneTransition) {
    applyView(name);
    return;
  }

  const token = ++transitionToken;
  sceneTransition.classList.remove("is-revealing");
  sceneTransition.classList.add("is-active");
  sceneTransition.dataset.audioCue = name;
  document.body.classList.add("is-transitioning");
  playTransitionSound(name);

  window.setTimeout(() => {
    if (token !== transitionToken) return;
    applyView(name);
  }, 440);

  window.setTimeout(() => {
    if (token !== transitionToken) return;
    sceneTransition.classList.add("is-revealing");
  }, 520);

  window.setTimeout(() => {
    if (token !== transitionToken) return;
    sceneTransition.classList.remove("is-active", "is-revealing");
    document.body.classList.remove("is-transitioning");
  }, 1000);
}

function initMapMotion() {
  const stage = document.querySelector("#map-stage");
  if (!stage || reduceMotion.matches || !window.matchMedia("(pointer: fine)").matches) return;

  let animationFrame = 0;
  let nextX = 0;
  let nextY = 0;

  const paint = () => {
    animationFrame = 0;
    stage.style.setProperty("--map-bg-x", `${(-nextX * 3.2).toFixed(2)}px`);
    stage.style.setProperty("--map-bg-y", `${(-nextY * 2.6).toFixed(2)}px`);
    stage.style.setProperty("--map-ui-x", `${(nextX * 2.1).toFixed(2)}px`);
    stage.style.setProperty("--map-ui-y", `${(nextY * 1.7).toFixed(2)}px`);
    stage.style.setProperty("--map-hotspot-x", `${(nextX * 1.1).toFixed(2)}px`);
    stage.style.setProperty("--map-hotspot-y", `${(nextY * 0.9).toFixed(2)}px`);
  };

  const queuePaint = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(paint);
  };

  stage.addEventListener("pointermove", (event) => {
    const bounds = stage.getBoundingClientRect();
    nextX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    nextY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    queuePaint();
  });

  stage.addEventListener("pointerleave", () => {
    nextX = 0;
    nextY = 0;
    queuePaint();
  });
}

function initTiltEffects(root = document) {
  if (reduceMotion.matches || !window.matchMedia("(pointer: fine)").matches) return;

  const targets = root.querySelectorAll([
    ".collection-card",
    ".creative-hero",
    ".figure-strip button",
    ".creative-card-grid button",
    ".packaging-visual",
  ].join(","));

  targets.forEach((target) => {
    if (target.dataset.tiltReady === "true") return;
    target.dataset.tiltReady = "true";
    target.classList.add("motion-tilt");

    const shine = document.createElement("i");
    shine.className = "tilt-shine";
    shine.setAttribute("aria-hidden", "true");
    target.append(shine);

    target.addEventListener("pointermove", (event) => {
      const bounds = target.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      const intensity = target.classList.contains("collection-card") || target.closest(".creative-card-grid") ? 6 : 3.6;
      const rotateX = (0.5 - y) * intensity;
      const rotateY = (x - 0.5) * intensity;
      target.style.setProperty("--shine-x", `${(x * 100).toFixed(1)}%`);
      target.style.setProperty("--shine-y", `${(y * 100).toFixed(1)}%`);
      target.style.transform = `perspective(950px) translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.008)`;
      target.classList.add("is-tilting");
    });

    target.addEventListener("pointerleave", () => {
      target.style.removeProperty("transform");
      target.classList.remove("is-tilting");
    });
  });
}

function initArtifactDepth() {
  const visual = document.querySelector("#artifact-visual");
  if (!visual || reduceMotion.matches || !window.matchMedia("(pointer: fine)").matches) return;

  visual.addEventListener("pointermove", (event) => {
    const bounds = visual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    visual.style.setProperty("--poster-rotate-x", `${(-y * 1.8).toFixed(2)}deg`);
    visual.style.setProperty("--poster-rotate-y", `${(x * 2.2).toFixed(2)}deg`);
    visual.style.setProperty("--poster-bg-x", `${(x * -0.5).toFixed(2)}%`);
    visual.style.setProperty("--poster-bg-y", `${(y * -0.4).toFixed(2)}%`);
  });

  visual.addEventListener("pointerleave", () => {
    visual.style.setProperty("--poster-rotate-x", "0deg");
    visual.style.setProperty("--poster-rotate-y", "0deg");
    visual.style.setProperty("--poster-bg-x", "0%");
    visual.style.setProperty("--poster-bg-y", "0%");
  });
}

function initAmbientLight() {
  const light = document.querySelector("#ambient-light");
  if (!light || reduceMotion.matches || !window.matchMedia("(pointer: fine)").matches) return;
  let animationFrame = 0;
  let pointerX = window.innerWidth * 0.5;
  let pointerY = window.innerHeight * 0.42;

  document.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (animationFrame) return;
    animationFrame = requestAnimationFrame(() => {
      animationFrame = 0;
      document.body.style.setProperty("--ambient-x", `${pointerX}px`);
      document.body.style.setProperty("--ambient-y", `${pointerY}px`);
    });
  });
}

function ensureAudioEngine() {
  if (audioState.context) {
    if (audioState.context.state === "suspended") audioState.context.resume();
    return audioState;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  const context = new AudioContextClass();
  const master = context.createGain();
  const music = context.createGain();
  const effects = context.createGain();
  const limiter = context.createDynamicsCompressor();
  master.gain.value = audioState.masterVolume * 1.2;
  music.gain.value = 0.0001;
  effects.gain.value = audioState.effectsEnabled ? 1.55 : 0.0001;
  limiter.threshold.value = -16;
  limiter.knee.value = 12;
  limiter.ratio.value = 8;
  limiter.attack.value = 0.004;
  limiter.release.value = 0.22;
  music.connect(master);
  effects.connect(master);
  master.connect(limiter).connect(context.destination);
  audioState.context = context;
  audioState.master = master;
  audioState.music = music;
  audioState.effects = effects;
  audioState.limiter = limiter;
  return audioState;
}

function createTone(frequency, options = {}) {
  const engine = ensureAudioEngine();
  if (!engine) return;
  const {
    destination = engine.effects,
    duration = 0.18,
    volume = 0.055,
    type = "sine",
    delay = 0,
    endFrequency = frequency,
  } = options;
  const now = engine.context.currentTime + delay;
  const oscillator = engine.context.createOscillator();
  const gain = engine.context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(Math.max(40, endFrequency), now + duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + Math.min(0.025, duration * 0.18));
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain).connect(destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.04);
}

function playInterfaceSound(kind = "soft") {
  if (!audioState.effectsEnabled) return;
  if (kind === "map") {
    createTone(523.25, { duration: 0.34, volume: 0.05, type: "sine", endFrequency: 659.25 });
    createTone(783.99, { duration: 0.42, volume: 0.025, delay: 0.055, type: "triangle", endFrequency: 659.25 });
  } else if (kind === "nav") {
    createTone(330, { duration: 0.11, volume: 0.045, type: "triangle", endFrequency: 255 });
  } else if (kind === "action") {
    createTone(659.25, { duration: 0.22, volume: 0.04, type: "sine", endFrequency: 783.99 });
    createTone(987.77, { duration: 0.3, volume: 0.018, delay: 0.04, type: "sine", endFrequency: 880 });
  } else {
    createTone(460, { duration: 0.085, volume: 0.026, type: "triangle", endFrequency: 360 });
  }
}

function createNoiseSweep(options = {}) {
  if (!audioState.effectsEnabled) return;
  const engine = ensureAudioEngine();
  if (!engine) return;
  const {
    duration = 0.76,
    volume = 0.026,
    delay = 0,
  } = options;
  const now = engine.context.currentTime + delay;
  const frameCount = Math.ceil(engine.context.sampleRate * duration);
  const buffer = engine.context.createBuffer(1, frameCount, engine.context.sampleRate);
  const channel = buffer.getChannelData(0);
  let previous = 0;
  for (let index = 0; index < frameCount; index += 1) {
    const white = Math.random() * 2 - 1;
    previous = previous * 0.82 + white * 0.18;
    channel[index] = previous;
  }

  const source = engine.context.createBufferSource();
  const filter = engine.context.createBiquadFilter();
  const gain = engine.context.createGain();
  source.buffer = buffer;
  filter.type = "bandpass";
  filter.Q.value = 0.72;
  filter.frequency.setValueAtTime(360, now);
  filter.frequency.exponentialRampToValueAtTime(1800, now + duration * 0.42);
  filter.frequency.exponentialRampToValueAtTime(520, now + duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + duration * 0.16);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  source.connect(filter).connect(gain).connect(engine.effects);
  source.start(now);
  source.stop(now + duration + 0.03);
}

function playTransitionSound(targetView) {
  if (!audioState.effectsEnabled) return;
  const viewNotes = {
    map: 293.66,
    artifact: 329.63,
    journey: 392,
    collection: 440,
    derivatives: 523.25,
  };
  const note = viewNotes[targetView] || 349.23;
  createNoiseSweep();
  createTone(note, {
    duration: 0.5,
    volume: 0.028,
    delay: 0.1,
    type: "sine",
    endFrequency: note * 1.18,
  });
  createTone(note * 2, {
    duration: 0.36,
    volume: 0.014,
    delay: 0.42,
    type: "triangle",
    endFrequency: note * 1.5,
  });
}

const musicNotes = [293.66, 392, 440, 329.63, 392, 523.25, 440, 392, 329.63, 293.66];

function playMusicStep() {
  if (!audioState.musicEnabled) return;
  const engine = ensureAudioEngine();
  if (!engine) return;
  const frequency = musicNotes[audioState.musicStep % musicNotes.length];
  createTone(frequency, { destination: engine.music, duration: 2.4, volume: 0.042, type: "sine", endFrequency: frequency * 0.997 });
  createTone(frequency * 2, { destination: engine.music, duration: 1.65, volume: 0.011, delay: 0.035, type: "triangle", endFrequency: frequency * 1.994 });
  if (audioState.musicStep % 4 === 0) {
    createTone(146.83, { destination: engine.music, duration: 5.2, volume: 0.018, type: "sine", endFrequency: 146.2 });
  }
  audioState.musicStep += 1;
}

function updateAudioControl() {
  if (!audioControl) return;
  audioControl.classList.toggle("is-playing", audioState.musicEnabled);
  audioControl.setAttribute("aria-pressed", String(audioState.musicEnabled));
  audioControl.title = audioState.musicEnabled ? "关闭背景音乐" : "开启背景音乐";
  document.querySelector("#audio-label").textContent = audioState.musicEnabled ? "播放中" : "音乐";
  if (musicSwitch) {
    musicSwitch.setAttribute("aria-pressed", String(audioState.musicEnabled));
    document.querySelector("#music-status").textContent = audioState.musicEnabled ? "开启" : "关闭";
  }
}

function updateEffectsControl() {
  if (!effectsSwitch) return;
  effectsSwitch.setAttribute("aria-pressed", String(audioState.effectsEnabled));
  document.querySelector("#effects-status").textContent = audioState.effectsEnabled ? "开启" : "关闭";
}

function updateVolumeControl() {
  if (!masterVolume) return;
  const percentage = Math.round(audioState.masterVolume * 100);
  masterVolume.value = String(percentage);
  document.querySelector("#volume-output").textContent = `${percentage}%`;
}

function setMasterVolume(percentage, preview = false) {
  const numericValue = Number(percentage);
  audioState.masterVolume = Math.max(0, Math.min(1, Number.isFinite(numericValue) ? numericValue / 100 : 0.8));
  localStorage.setItem("henan-master-volume", String(Math.round(audioState.masterVolume * 100)));
  const engine = ensureAudioEngine();
  if (engine) {
    engine.master.gain.cancelScheduledValues(engine.context.currentTime);
    engine.master.gain.setTargetAtTime(audioState.masterVolume * 1.2, engine.context.currentTime, 0.08);
  }
  updateVolumeControl();
  if (preview && audioState.effectsEnabled) playInterfaceSound("soft");
}

function setEffectsEnabled(enabled, preview = false) {
  audioState.effectsEnabled = enabled;
  localStorage.setItem("henan-effects-enabled", String(enabled));
  const engine = ensureAudioEngine();
  if (engine) {
    engine.effects.gain.cancelScheduledValues(engine.context.currentTime);
    engine.effects.gain.setTargetAtTime(enabled ? 1.55 : 0.0001, engine.context.currentTime, 0.08);
  }
  updateEffectsControl();
  if (enabled && preview) window.setTimeout(() => playInterfaceSound("action"), 90);
}

function setMusicEnabled(enabled) {
  const engine = ensureAudioEngine();
  if (!engine) return;
  audioState.musicEnabled = enabled;
  window.clearInterval(audioState.musicTimer);
  engine.music.gain.cancelScheduledValues(engine.context.currentTime);
  engine.music.gain.setTargetAtTime(enabled ? 1.2 : 0.0001, engine.context.currentTime, enabled ? 0.35 : 0.18);
  if (enabled) {
    playMusicStep();
    audioState.musicTimer = window.setInterval(playMusicStep, 1750);
  }
  updateAudioControl();
}

function setAudioPanelOpen(open) {
  if (!audioMenu || !audioSettingsToggle) return;
  audioMenu.classList.toggle("is-open", open);
  audioSettingsToggle.setAttribute("aria-expanded", String(open));
  document.querySelector("#audio-panel")?.setAttribute("aria-hidden", String(!open));
}

function dismissWelcome(withSound) {
  localStorage.setItem("henan-welcome-seen", "true");
  if (withSound) {
    setEffectsEnabled(true);
    setMusicEnabled(true);
    playInterfaceSound("action");
  } else {
    setMusicEnabled(false);
    setEffectsEnabled(false);
  }
  welcomeGate?.classList.add("is-leaving");
  welcomeGate?.setAttribute("aria-hidden", "true");
  window.setTimeout(() => welcomeGate?.classList.add("is-hidden"), reduceMotion.matches ? 0 : 580);
}

function playAchievementBurst() {
  if (reduceMotion.matches) return;
  playInterfaceSound("action");
  createTone(1046.5, { duration: 0.55, volume: 0.035, delay: 0.11, type: "sine", endFrequency: 1318.5 });
  const burst = document.createElement("div");
  burst.className = "achievement-burst";
  burst.setAttribute("aria-hidden", "true");
  burst.innerHTML = '<span class="achievement-seal">文明印记</span>';

  const colors = ["#f3d28c", "#2fa8a0", "#fff0bd"];
  for (let index = 0; index < 16; index += 1) {
    const particle = document.createElement("i");
    particle.className = "achievement-particle";
    particle.style.setProperty("--particle-angle", `${index * 22.5}deg`);
    particle.style.setProperty("--particle-distance", `${105 + (index % 4) * 18}px`);
    particle.style.setProperty("--particle-delay", `${(index % 3) * 35}ms`);
    particle.style.setProperty("--particle-color", colors[index % colors.length]);
    burst.append(particle);
  }

  document.body.append(burst);
  requestAnimationFrame(() => burst.classList.add("is-active"));
  const progress = document.querySelector(".progress-pill");
  progress.classList.remove("is-celebrating");
  void progress.offsetWidth;
  progress.classList.add("is-celebrating");

  window.setTimeout(() => {
    progress.classList.remove("is-celebrating");
    burst.remove();
  }, 1250);
}

function showDrawer(id) {
  const item = artifactById[id];
  state.currentArtifact = item;
  document.querySelector("#drawer-index").textContent = `${item.number} / 05`;
  document.querySelector("#drawer-city").textContent = item.city;
  document.querySelector("#drawer-title").textContent = item.name;
  document.querySelector("#drawer-copy").textContent = item.drawer;
  document.querySelector("#drawer-period").textContent = item.period;
  document.querySelector("#drawer-theme").textContent = item.theme;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
}

function renderArtifact(item) {
  state.currentArtifact = item;
  const visual = document.querySelector("#artifact-visual");
  visual.style.backgroundImage = `url("${item.image}")`;
  visual.setAttribute("aria-label", `${item.name}IP角色互动页面`);
  document.querySelector("#poster-city").textContent = item.city;
  document.querySelector("#poster-title").textContent = item.name;
  document.querySelector("#artifact-number").textContent = `RELIC ${item.number}`;
  document.querySelector("#artifact-location").textContent = item.mapLabel;
  document.querySelector("#artifact-title").textContent = item.name;
  document.querySelector("#artifact-lead").textContent = item.lead;
  document.querySelector("#artifact-period").textContent = item.period;
  document.querySelector("#artifact-keyword").textContent = item.keyword;
  document.querySelector("#artifact-route").textContent = item.route;
  document.querySelector("#artifact-page-count").textContent = `${item.number} / 05`;
  document.querySelector("#artifact-route-button").dataset.artifact = item.id;

  const actionList = document.querySelector("#action-list");
  actionList.innerHTML = item.actions
    .map((label, index) => {
      const action = ["awakening", "pattern", "challenge"][index];
      const status = action === "challenge" && state.completed.has(item.id) ? " ✓" : "";
      return `<button type="button" data-action="${action}">${label}${status}</button>`;
    })
    .join("");

  actionList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => openInteraction(button.dataset.action));
  });
}

function renderRouteTabs() {
  const tabs = document.querySelector("#route-tabs");
  tabs.innerHTML = artifacts
    .map(
      (item) => `
        <button class="route-tab ${state.currentRoute.id === item.id ? "is-active" : ""}" type="button" data-route-artifact="${item.id}">
          <span>${item.number}</span>
          <span><strong>${item.city}</strong><small>${item.name}</small></span>
          <em>${state.completed.has(item.id) ? "已点亮" : "去探索"}</em>
        </button>
      `,
    )
    .join("");

  tabs.querySelectorAll(".route-tab").forEach((button) => {
    button.addEventListener("click", () => renderRoute(artifactById[button.dataset.routeArtifact]));
  });
}

function renderRoute(item) {
  state.currentRoute = item;
  document.querySelector("#route-detail-index").textContent = `ROUTE ${item.number}`;
  document.querySelector("#route-city").textContent = item.city;
  document.querySelector("#route-name").textContent = item.name;
  document.querySelector("#route-origin").textContent = item.origin;
  document.querySelector("#route-venue").textContent = item.venue;
  document.querySelector("#route-story").textContent = item.routeStory;
  document.querySelector("#route-detail-visual").style.backgroundImage = `url("${item.image}")`;
  document.querySelector("#route-enter-artifact").dataset.artifact = item.id;
  const officialLink = document.querySelector("#route-official-link");
  officialLink.href = item.officialUrl;
  officialLink.setAttribute("aria-label", `查看${item.venue}官方参观信息（新窗口打开）`);
  document.querySelector("#route-steps").innerHTML = item.routeSteps
    .map(
      (step, index) => `
        <div class="route-step">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <div><strong>${step[0]}</strong><small>${step[1]}</small></div>
        </div>
      `,
    )
    .join("");
  renderRouteTabs();
}

function openArtifactRoute(item) {
  state.currentRoute = item;
  setView("journey");
}

function enterArtifact(id) {
  renderArtifact(artifactById[id]);
  setView("artifact");
}

function setPatternResult(message, isComplete = false) {
  const result = document.querySelector("#pattern-result");
  result.textContent = message;
  result.classList.toggle("is-complete", isComplete);
}

function playBoneNote(frequency) {
  createTone(frequency, { duration: 0.58, volume: 0.16, type: "sine", endFrequency: frequency * 0.998 });
  createTone(frequency * 2, { duration: 0.4, volume: 0.025, type: "triangle", endFrequency: frequency * 1.996 });
}

function renderSequenceGame(modalBody, config) {
  let sequence = [];
  modalBody.innerHTML = `
    <p>${state.currentArtifact.pattern}</p>
    <div class="micro-game">
      <div class="micro-game-heading"><strong>${config.prompt}</strong><small>${config.hint}</small></div>
      <div class="assembly-stage" id="assembly-stage">
        ${config.correct.map((_, index) => `<span data-slot="${index}">第 ${index + 1} 层</span>`).join("")}
      </div>
      <div class="micro-options">
        ${config.options.map((option) => `<button type="button" data-piece="${option[0]}"><b>${option[1]}</b><small>${option[2]}</small></button>`).join("")}
      </div>
      <div class="micro-footer">
        <button class="micro-reset" type="button">重新组合</button>
        <div class="pattern-result" id="pattern-result">按正确顺序点击三个结构。</div>
      </div>
    </div>
  `;

  const reset = () => {
    sequence = [];
    modalBody.querySelectorAll("[data-piece]").forEach((button) => button.classList.remove("is-selected", "is-wrong"));
    modalBody.querySelectorAll("[data-slot]").forEach((slot, index) => {
      slot.textContent = `第 ${index + 1} 层`;
      slot.classList.remove("is-filled");
    });
    setPatternResult("按正确顺序点击三个结构。");
  };

  modalBody.querySelectorAll("[data-piece]").forEach((button) => {
    button.addEventListener("click", () => {
      if (sequence.length >= config.correct.length || button.classList.contains("is-selected")) return;
      const value = button.dataset.piece;
      sequence.push(value);
      button.classList.add("is-selected");
      const slot = modalBody.querySelector(`[data-slot="${sequence.length - 1}"]`);
      slot.textContent = button.querySelector("b").textContent;
      slot.classList.add("is-filled");
      if (sequence.length === config.correct.length) {
        const isCorrect = sequence.every((value, index) => value === config.correct[index]);
        if (isCorrect) {
          setPatternResult(config.success, true);
        } else {
          modalBody.querySelectorAll("[data-piece].is-selected").forEach((piece) => piece.classList.add("is-wrong"));
          setPatternResult("顺序还不对。观察器物从下到上、从握持端到锋刃的结构，再试一次。");
        }
      }
    });
  });
  modalBody.querySelector(".micro-reset").addEventListener("click", reset);
}

function renderFindGame(modalBody, config) {
  const found = new Set();
  modalBody.innerHTML = `
    <p>${state.currentArtifact.pattern}</p>
    <div class="micro-game">
      <div class="micro-game-heading"><strong>${config.prompt}</strong><small>找到 ${config.targets.length} 个正确线索</small></div>
      <div class="find-grid">
        ${config.options.map((option) => `<button type="button" data-find="${option[0]}" data-correct="${config.targets.includes(option[0])}"><span>${option[1]}</span><strong>${option[2]}</strong></button>`).join("")}
      </div>
      <div class="find-meter"><span id="find-meter-fill"></span></div>
      <div class="pattern-result" id="pattern-result">已找到 0 / ${config.targets.length}</div>
    </div>
  `;

  modalBody.querySelectorAll("[data-find]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.correct === "true") {
        found.add(button.dataset.find);
        button.classList.add("is-found");
        document.querySelector("#find-meter-fill").style.width = `${(found.size / config.targets.length) * 100}%`;
        setPatternResult(
          found.size === config.targets.length ? config.success : `已找到 ${found.size} / ${config.targets.length}，继续观察纹样。`,
          found.size === config.targets.length,
        );
      } else {
        button.classList.remove("is-wrong");
        requestAnimationFrame(() => button.classList.add("is-wrong"));
        setPatternResult(config.wrong);
      }
    });
  });
}

function renderFluteGame(modalBody) {
  const notes = [
    ["宫", 261.63], ["商", 293.66], ["角", 329.63], ["变徵", 369.99],
    ["徵", 392], ["羽", 440], ["变宫", 493.88],
  ];
  const target = [0, 2, 4];
  let played = [];
  modalBody.innerHTML = `
    <p>${state.currentArtifact.pattern}</p>
    <div class="micro-game flute-game">
      <div class="micro-game-heading"><strong>奏出“宫 → 角 → 徵”</strong><small>点击音孔会真实发声，请打开设备声音</small></div>
      <div class="flute-body">
        ${notes.map((note, index) => `<button type="button" data-note="${index}" aria-label="演奏${note[0]}音"><span></span><small>${note[0]}</small></button>`).join("")}
      </div>
      <div class="played-notes" id="played-notes">等待第一枚音符</div>
      <div class="pattern-result" id="pattern-result">目标旋律：宫 · 角 · 徵</div>
    </div>
  `;

  modalBody.querySelectorAll("[data-note]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.note);
      playBoneNote(notes[index][1]);
      played.push(index);
      if (played.length > target.length) played = played.slice(-target.length);
      button.classList.remove("is-playing");
      requestAnimationFrame(() => button.classList.add("is-playing"));
      document.querySelector("#played-notes").textContent = played.map((note) => notes[note][0]).join(" · ");
      const isComplete = played.length === target.length && played.every((note, noteIndex) => note === target[noteIndex]);
      setPatternResult(isComplete ? "旋律完成：水纹已经回应八千多年前的笛音。" : "继续演奏：目标为“宫 → 角 → 徵”。", isComplete);
    });
  });
}

function renderPatternExperience(item, modalBody) {
  if (item.id === "yubing") {
    renderSequenceGame(modalBody, {
      prompt: "从握持端到锋刃，拼合玉柄铁剑",
      hint: "先确定手握的位置",
      correct: ["handle", "guard", "blade"],
      options: [["blade", "铁质剑身", "锋刃"], ["handle", "玉质剑柄", "握持"], ["guard", "玉质护手", "衔接"]],
      success: "拼合完成：玉柄、护手与铁刃重新连成一柄古剑。",
    });
  } else if (item.id === "fuhao") {
    renderFindGame(modalBody, {
      prompt: "找出妇好鸮尊的三条身份线索",
      targets: ["owl", "bronze", "inscription"],
      options: [["owl", "鸮", "鸮鸟轮廓"], ["lotus", "莲", "莲瓣结构"], ["bronze", "铜", "青铜纹饰"], ["flute", "笛", "七孔音律"], ["inscription", "铭", "妇好铭文"], ["sword", "剑", "玉柄铁刃"]],
      success: "解谜完成：鸮鸟、青铜纹饰与铭文共同确认了文物身份。",
      wrong: "这条线索属于另一件文物，再从鸮尊的造型与铭文寻找答案。",
    });
  } else if (item.id === "yachang") {
    renderFindGame(modalBody, {
      prompt: "在牛尊的“动物世界”中找出四种纹样",
      targets: ["bull", "tiger", "bird", "fish"],
      options: [["bull", "牛", "器物造型"], ["tiger", "虎", "腹侧纹样"], ["crane", "鹤", "展翅仙鹤"], ["bird", "鸟", "鸟形纹样"], ["fish", "鱼", "鱼形纹样"], ["lotus", "莲", "层叠莲瓣"]],
      success: "百兽寻纹完成：牛、虎、鸟、鱼共同构成角色的动物纹样谱系。",
      wrong: "莲与鹤属于莲鹤方壶线索，继续寻找牛尊身上的动物。",
    });
  } else if (item.id === "lianhe") {
    renderSequenceGame(modalBody, {
      prompt: "从下到上重建莲鹤方壶的视觉层次",
      hint: "让仙鹤最后登上壶顶",
      correct: ["vessel", "lotus", "crane"],
      options: [["crane", "展翅仙鹤", "顶部"], ["vessel", "方壶器身", "基座"], ["lotus", "层叠莲瓣", "承托"]],
      success: "拼映完成：方壶、莲瓣与仙鹤形成向上生长的视觉结构。",
    });
  } else {
    renderFluteGame(modalBody);
  }
}

function openInteraction(action) {
  const item = state.currentArtifact;
  interactionModal.classList.remove("is-creative-preview");
  const modalTitle = document.querySelector("#modal-title");
  const modalKicker = document.querySelector("#modal-kicker");
  const modalBody = document.querySelector("#modal-body");

  if (action === "awakening") {
    modalKicker.textContent = "ARTIFACT AWAKENING";
    modalTitle.textContent = item.actions[0];
    modalBody.innerHTML = `
      <p>${item.awakening}</p>
      <div class="clue-explorer">
        <div class="clue-tabs">
          ${item.clues.map((clue, index) => `<button class="clue-tab ${index === 0 ? "is-active" : ""}" type="button" data-clue="${index}">${String(index + 1).padStart(2, "0")} ${clue[0]}</button>`).join("")}
        </div>
        <div class="clue-display">
          <span>设计线索</span>
          <strong id="clue-title">${item.clues[0][0]}</strong>
          <p id="clue-copy">${item.clues[0][1]}</p>
        </div>
      </div>
    `;
    modalBody.querySelectorAll(".clue-tab").forEach((button) => {
      button.addEventListener("click", () => {
        const clue = item.clues[Number(button.dataset.clue)];
        modalBody.querySelectorAll(".clue-tab").forEach((tab) => tab.classList.remove("is-active"));
        button.classList.add("is-active");
        document.querySelector("#clue-title").textContent = clue[0];
        document.querySelector("#clue-copy").textContent = clue[1];
        document.querySelector(".clue-display").classList.remove("is-revealed");
        requestAnimationFrame(() => document.querySelector(".clue-display").classList.add("is-revealed"));
      });
    });
  } else if (action === "pattern") {
    modalKicker.textContent = "PATTERN INTERACTION";
    modalTitle.textContent = item.actions[1];
    renderPatternExperience(item, modalBody);
  } else {
    modalKicker.textContent = "CIVILIZATION CHALLENGE";
    modalTitle.textContent = item.actions[2];
    modalBody.innerHTML = `
      <p>${item.question}</p>
      <div class="challenge-options">
        ${item.options.map((option, index) => `<button class="challenge-option" type="button" data-answer="${index}">${option}</button>`).join("")}
      </div>
      <div class="challenge-result" id="challenge-result"></div>
    `;
    modalBody.querySelectorAll(".challenge-option").forEach((button) => {
      button.addEventListener("click", () => checkAnswer(Number(button.dataset.answer)));
    });
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function checkAnswer(answerIndex) {
  const item = state.currentArtifact;
  const result = document.querySelector("#challenge-result");
  if (answerIndex === item.answer) {
    const isNewCompletion = !state.completed.has(item.id);
    state.completed.add(item.id);
    localStorage.setItem("henan-completed", JSON.stringify([...state.completed]));
    result.textContent = "回答正确，文明印记已点亮。";
    if (isNewCompletion) playAchievementBurst();
    updateProgress();
    renderCollection();
    renderArtifact(item);
  } else {
    result.textContent = "这条线索还没有对应上，再观察一次角色与文物元素。";
  }
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function updateProgress() {
  const count = state.completed.size;
  document.querySelector("#header-progress").textContent = `${count} / 5`;
  document.querySelector("#derivative-progress").textContent = `${count} / 5`;
  document.querySelector("#route-progress").textContent = `${count} / 5`;
  document.querySelector("#unlock-card").classList.toggle("is-unlocked", count === artifacts.length);
  const guide = document.querySelector("#map-guide");
  if (count === 0) {
    guide.innerHTML = "<span>点击发光坐标</span><strong>选择第一件文物</strong>";
  } else if (count < artifacts.length) {
    guide.innerHTML = `<span>已点亮 ${count} 枚印记</span><strong>继续探索 ${artifacts.length - count} 件文物</strong>`;
  } else {
    guide.innerHTML = "<span>五件文物已集齐</span><strong>文创工坊完整解锁</strong>";
  }
  document.querySelectorAll(".map-hotspot").forEach((hotspot) => {
    hotspot.classList.toggle("is-complete", state.completed.has(hotspot.dataset.artifact));
  });
  renderRouteTabs();
  renderPassportPanel();
}

function renderPassportPanel() {
  const stamps = document.querySelector("#passport-stamps");
  const button = document.querySelector("#passport-generate");
  stamps.innerHTML = artifacts
    .map(
      (item) => `<span class="passport-stamp ${state.completed.has(item.id) ? "is-complete" : ""}" title="${item.city}·${item.name}">${state.completed.has(item.id) ? "✓" : item.number}</span>`,
    )
    .join("");
  const count = state.completed.size;
  button.disabled = count === 0;
  button.textContent = count === 0 ? "至少点亮 1 枚印记" : `生成纪念卡 · ${count} / 5`;
}

function loadAssetImage(source) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = source;
  });
}

function roundedRectPath(context, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + width, y, x + width, y + height, r);
  context.arcTo(x + width, y + height, x, y + height, r);
  context.arcTo(x, y + height, x, y, r);
  context.arcTo(x, y, x + width, y, r);
  context.closePath();
}

function drawImageCover(context, image, x, y, width, height) {
  const scale = Math.max(width / image.width, height / image.height);
  const sourceWidth = width / scale;
  const sourceHeight = height / scale;
  const sourceX = (image.width - sourceWidth) / 2;
  const sourceY = Math.max(0, (image.height - sourceHeight) * 0.28);
  context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, x, y, width, height);
}

async function drawPassport(canvas) {
  const context = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const background = context.createLinearGradient(0, 0, width, height);
  background.addColorStop(0, "#041a20");
  background.addColorStop(0.55, "#0b3d40");
  background.addColorStop(1, "#06252b");
  context.fillStyle = background;
  context.fillRect(0, 0, width, height);

  const glow = context.createRadialGradient(920, 110, 0, 920, 110, 390);
  glow.addColorStop(0, "rgba(47,168,160,0.3)");
  glow.addColorStop(1, "rgba(47,168,160,0)");
  context.fillStyle = glow;
  context.fillRect(0, 0, width, height);

  context.strokeStyle = "#cfa86a";
  context.lineWidth = 2;
  roundedRectPath(context, 24, 24, width - 48, height - 48, 22);
  context.stroke();
  context.strokeStyle = "rgba(207,168,106,0.35)";
  context.lineWidth = 1;
  roundedRectPath(context, 36, 36, width - 72, height - 72, 16);
  context.stroke();

  context.fillStyle = "#f3d28c";
  context.font = '700 46px "Microsoft YaHei", sans-serif';
  context.fillText("豫见华夏 · 我的文明纪念卡", 72, 100);
  context.fillStyle = "rgba(245,239,226,0.62)";
  context.font = '18px Arial, "Microsoft YaHei", sans-serif';
  context.fillText("HENAN RELIC JOURNEY · DIGITAL MEMORY", 74, 134);

  context.textAlign = "right";
  context.fillStyle = "#f3d28c";
  context.font = '700 30px Arial, sans-serif';
  context.fillText(`${state.completed.size} / 5`, width - 76, 100);
  context.fillStyle = "rgba(245,239,226,0.55)";
  context.font = '15px "Microsoft YaHei", sans-serif';
  context.fillText("已点亮文明印记", width - 76, 130);
  context.textAlign = "left";

  const images = await Promise.all(
    artifacts.map((item) =>
      state.completed.has(item.id)
        ? loadAssetImage(window.PASSPORT_THUMBNAILS?.[item.id] || item.image)
        : null,
    ),
  );
  const cardWidth = 194;
  const cardHeight = 352;
  const gap = 18;
  const startX = (width - (cardWidth * 5 + gap * 4)) / 2;
  const cardY = 174;

  artifacts.forEach((item, index) => {
    const x = startX + index * (cardWidth + gap);
    context.save();
    roundedRectPath(context, x, cardY, cardWidth, cardHeight, 14);
    context.clip();
    if (images[index]) {
      drawImageCover(context, images[index], x, cardY, cardWidth, cardHeight);
      const shade = context.createLinearGradient(0, cardY + 170, 0, cardY + cardHeight);
      shade.addColorStop(0, "rgba(3,20,24,0)");
      shade.addColorStop(1, "rgba(3,20,24,0.97)");
      context.fillStyle = shade;
      context.fillRect(x, cardY, cardWidth, cardHeight);
    } else {
      context.fillStyle = "rgba(2,18,22,0.74)";
      context.fillRect(x, cardY, cardWidth, cardHeight);
      context.fillStyle = "rgba(207,168,106,0.15)";
      context.font = '700 84px Arial, sans-serif';
      context.textAlign = "center";
      context.fillText("?", x + cardWidth / 2, cardY + 190);
      context.textAlign = "left";
    }
    context.restore();

    context.strokeStyle = state.completed.has(item.id) ? "#f3d28c" : "rgba(207,168,106,0.28)";
    context.lineWidth = state.completed.has(item.id) ? 2 : 1;
    roundedRectPath(context, x, cardY, cardWidth, cardHeight, 14);
    context.stroke();

    context.fillStyle = state.completed.has(item.id) ? "#f3d28c" : "rgba(245,239,226,0.32)";
    context.font = '14px "Microsoft YaHei", sans-serif';
    context.fillText(`${item.number} · ${item.city}`, x + 15, cardY + cardHeight - 54);
    context.font = '700 21px "Microsoft YaHei", sans-serif';
    context.fillText(state.completed.has(item.id) ? item.name : "等待探索", x + 15, cardY + cardHeight - 22);
  });

  const unlocked = artifacts.filter((item) => state.completed.has(item.id));
  context.fillStyle = "rgba(245,239,226,0.72)";
  context.font = '17px "Microsoft YaHei", sans-serif';
  context.fillText(
    unlocked.length ? `文明足迹：${unlocked.map((item) => item.city).join(" · ")}` : "文明足迹：等待开启",
    74,
    584,
  );
  context.fillStyle = "rgba(245,239,226,0.42)";
  context.font = '14px "Microsoft YaHei", sans-serif';
  context.fillText("循着文物走进河南，让一次点击成为一段真实旅程。", 74, 618);
  context.textAlign = "right";
  context.fillText(new Date().toLocaleDateString("zh-CN"), width - 74, 618);
  context.textAlign = "left";
}

async function copyPassportText(status) {
  const unlocked = artifacts.filter((item) => state.completed.has(item.id));
  const text = `我在“豫见华夏”点亮了 ${unlocked.length}/5 枚文明印记：${unlocked.map((item) => `${item.city}·${item.name}`).join("、")}。循着文物，一起走进河南。`;
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }
  status.textContent = "分享文案已复制";
}

async function openPassport() {
  interactionModal.classList.remove("is-creative-preview");
  const modalTitle = document.querySelector("#modal-title");
  const modalKicker = document.querySelector("#modal-kicker");
  const modalBody = document.querySelector("#modal-body");
  modalKicker.textContent = "MY HENAN MEMORY";
  modalTitle.textContent = "我的文明纪念卡";
  modalBody.innerHTML = `
    <p>卡片会根据当前点亮进度自动更新；继续完成挑战后，可以再次生成完整版本。</p>
    <div class="passport-preview-wrap"><canvas id="passport-canvas" width="1200" height="675"></canvas></div>
    <div class="passport-modal-actions">
      <button class="primary-button" id="passport-download" type="button" disabled>正在生成…</button>
      <button class="passport-copy" id="passport-copy" type="button">复制分享文案</button>
      <span class="passport-copy-status" id="passport-copy-status"></span>
    </div>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  const canvas = document.querySelector("#passport-canvas");
  await drawPassport(canvas);
  const download = document.querySelector("#passport-download");
  if (!download) return;
  download.disabled = false;
  download.textContent = "下载 PNG 纪念卡";
  download.addEventListener("click", () => {
    canvas.toBlob((blob) => {
      if (!blob) return;
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "豫见华夏-文明纪念卡.png";
      link.click();
      URL.revokeObjectURL(link.href);
    }, "image/png");
  });
  document.querySelector("#passport-copy").addEventListener("click", () => copyPassportText(document.querySelector("#passport-copy-status")));
}

function renderCollection() {
  const grid = document.querySelector("#collection-grid");
  grid.innerHTML = artifacts
    .map(
      (item) => `
        <button
          class="collection-card ${state.completed.has(item.id) ? "is-complete" : ""}"
          type="button"
          data-artifact="${item.id}"
          style="background-image: url('${item.image}')"
        >
          <span class="collection-card-content">
            <small>${item.number} · ${item.city}</small>
            <h3>${item.name}</h3>
            <p>${item.timeline}<br />${item.keyword}</p>
            <span class="collection-status">${state.completed.has(item.id) ? "文明印记已点亮" : "等待探索"}</span>
          </span>
        </button>
      `,
    )
    .join("");

  grid.querySelectorAll(".collection-card").forEach((card) => {
    card.addEventListener("click", () => enterArtifact(card.dataset.artifact));
  });
  initTiltEffects(grid);
}

function changeArtifact(direction) {
  const currentIndex = artifacts.findIndex((item) => item.id === state.currentArtifact.id);
  const nextIndex = (currentIndex + direction + artifacts.length) % artifacts.length;
  renderArtifact(artifacts[nextIndex]);
  playArtifactEntrance();
}

function switchCreativePanel(target) {
  document.querySelectorAll(".derivative-tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.creativeTarget === target);
  });
  document.querySelectorAll("[data-creative-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.creativePanel === target);
  });
}

function openCreativePreview(source, title) {
  interactionModal.classList.add("is-creative-preview");
  document.querySelector("#modal-kicker").textContent = "CULTURAL CREATIVE PREVIEW";
  document.querySelector("#modal-title").textContent = title;
  document.querySelector("#modal-body").innerHTML = `<img class="creative-preview-image" src="${source}" alt="${title}" />`;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

document.querySelectorAll("[data-view-target]").forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.viewTarget));
});

document.querySelectorAll(".map-hotspot").forEach((hotspot) => {
  hotspot.addEventListener("click", () => showDrawer(hotspot.dataset.artifact));
});

document.querySelector("#start-journey").addEventListener("click", () => showDrawer(artifacts[0].id));
document.querySelector("#drawer-close").addEventListener("click", () => {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
});
document.querySelector("#drawer-enter").addEventListener("click", () => enterArtifact(state.currentArtifact.id));
document.querySelector("#artifact-route-button").addEventListener("click", () => openArtifactRoute(state.currentArtifact));
document.querySelector("#route-enter-artifact").addEventListener("click", (event) => enterArtifact(event.currentTarget.dataset.artifact));
document.querySelector("#passport-generate").addEventListener("click", openPassport);

document.querySelectorAll(".poster-action").forEach((button) => {
  button.addEventListener("click", () => openInteraction(button.dataset.action));
});

document.querySelector("#modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.querySelector("#previous-artifact").addEventListener("click", () => changeArtifact(-1));
document.querySelector("#next-artifact").addEventListener("click", () => changeArtifact(1));

document.querySelectorAll(".derivative-tab").forEach((button) => {
  button.addEventListener("click", () => switchCreativePanel(button.dataset.creativeTarget));
});

document.querySelectorAll("[data-creative-target-button]").forEach((button) => {
  button.addEventListener("click", () => switchCreativePanel(button.dataset.creativeTargetButton));
});

document.querySelectorAll("[data-creative-preview]").forEach((button) => {
  button.addEventListener("click", () => openCreativePreview(button.dataset.creativePreview, button.dataset.creativeTitle));
});

audioControl?.addEventListener("click", () => setMusicEnabled(!audioState.musicEnabled));
audioSettingsToggle?.addEventListener("click", () => setAudioPanelOpen(!audioMenu.classList.contains("is-open")));
musicSwitch?.addEventListener("click", () => setMusicEnabled(!audioState.musicEnabled));
effectsSwitch?.addEventListener("click", () => setEffectsEnabled(!audioState.effectsEnabled, !audioState.effectsEnabled));
masterVolume?.addEventListener("input", (event) => setMasterVolume(event.currentTarget.value));
masterVolume?.addEventListener("change", (event) => setMasterVolume(event.currentTarget.value, true));
document.querySelector("#welcome-sound")?.addEventListener("click", () => dismissWelcome(true));
document.querySelector("#welcome-silent")?.addEventListener("click", () => dismissWelcome(false));

function playButtonSound(button) {
  if (!button || button.disabled || button.matches("[data-note]")) return;
  if (button.closest("#welcome-gate") || button.matches("#music-switch, #effects-switch")) return;
  if (button.matches(".map-hotspot, #start-journey, #drawer-enter")) {
    playInterfaceSound("map");
  } else if (button.matches(".poster-action, .action-list button, .challenge-option, #audio-control")) {
    playInterfaceSound("action");
  } else if (button.matches(".nav-button, [data-view-target], .derivative-tab, .route-tab")) {
    playInterfaceSound("nav");
  } else {
    playInterfaceSound("soft");
  }
}

document.addEventListener("pointerdown", (event) => {
  playButtonSound(event.target.closest("button"));
}, { passive: true });

document.addEventListener("click", (event) => {
  if (event.detail === 0) playButtonSound(event.target.closest("button"));
  if (audioMenu && !audioMenu.contains(event.target)) setAudioPanelOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    setAudioPanelOpen(false);
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
  }
});

renderCollection();
renderArtifact(artifacts[0]);
renderRoute(artifacts[0]);
updateProgress();
updateAudioControl();
updateEffectsControl();
updateVolumeControl();
if (localStorage.getItem("henan-welcome-seen") === "true") {
  welcomeGate?.classList.add("is-hidden");
  welcomeGate?.setAttribute("aria-hidden", "true");
} else {
  window.setTimeout(() => document.querySelector("#welcome-sound")?.focus(), 120);
}
initMapMotion();
initTiltEffects();
initArtifactDepth();
initAmbientLight();
playContentEntrance("map");
