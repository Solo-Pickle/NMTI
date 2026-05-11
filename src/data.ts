import { Role, RoleKey, Question } from './types';

export const roles: Record<RoleKey, Role> = {
  niugulu: {
    name: "牛钴禄",
    type: "隐忍逆袭型",
    slogan: "你的福气在后头",
    keywords: ["隐忍", "清醒", "分步反杀"],
    image: "/assets/role_niugulu.jpg",
    description: "你表面上是一个情绪稳定、很好说话的人，实际上内心已经开了八百集宫斗连续剧。别人以为你没反应，其实你只是暂时按下了静音键。你不喜欢当场发疯，因为你更擅长憋一口气，然后偷偷变强。在工作和学习里，你属于那种被安排任务时嘴上说“好的”，心里已经开始截图、记账、复盘、规划反杀路线的人。你不是不争，你只是觉得现在争没意思，等结果出来才比较有杀伤力。",
    dailyState: [
      "表面：没事，都可以",
      "内心：这福气给你你要不要",
      "被催时微笑点头，转头开始冷静发疯",
      "不轻易爆炸，但一旦爆发就是剧情大结局"
    ],
    exclusiveStrength: "你最强的地方是能忍、能扛、能翻盘。别人情绪上头的时候，你还能冷静观察局势。你不是脾气好，你是战略性闭嘴。",
    dailyActionGuide: [
      "不爽可以先记下来，但别把自己憋成清宫遗恨。",
      "把“我要赢”拆成一个个小任务，不要只在脑内登基。",
      "该表达边界的时候要说，不然别人真以为你是免费劳动力。"
    ]
  },
  niuyork: {
    name: "牛约克",
    type: "精致高效型",
    slogan: "Viva La Vida!",
    keywords: ["精英", "审美", "效率感"],
    image: "/assets/role_niuyork.jpg",
    description: "你是那种人已经碎了，但穿搭不能碎的人。即使 ddl 已经追到门口、KPI 已经骑脸输出，你还是想拿一杯咖啡，整理一下头发，假装自己是刚从纽约街头走出来的都市精英。你的精神状态可能是：外表 Viva La Vida，内心 Help Me Please。你不是不累，你只是觉得生活已经这么苦了，至少要苦得有质感。别人崩溃是直接瘫倒，你崩溃前还要先找个好看的角度。",
    dailyState: [
      "嘴上：I’m fine",
      "心里：I’m finished",
      "一边赶任务，一边挑今天的咖啡",
      "再穷再累，也要维持一点都市幻觉"
    ],
    exclusiveStrength: "你的专属优势是自我管理、审美在线、效率感强。你很会用仪式感把你从崩溃边缘拎回来。哪怕生活乱成一锅粥，你也能给它摆个盘。",
    dailyActionGuide: [
      "咖啡可以续命，但不能替你睡觉。",
      "不用每天都像 LinkedIn 精英，偶尔像人类也可以。",
      "任务多的时候先做最重要的三件事，不要试图优雅地燃烧自己。"
    ]
  },
  sheniu: {
    name: "社牛",
    type: "社交能量型",
    slogan: "E 高人胆大罢了",
    keywords: ["沟通", "破冰", "气氛组"],
    image: "/assets/role_sheniu.jpg",
    description: "你不是普通 E 人，你是行走的人际路由器。只要你在，场子就不会冷；只要你开口，空气都开始有互动感。别人还在尴尬地低头看手机，你已经和旁边人聊到人生规划了。在小组作业、实习、上班、社团活动里，你经常承担一种神秘职责：让所有人不要尬死。你不是话多，你是在救场。你不是社交悍匪，你只是 E 高人胆大罢了。",
    dailyState: [
      "群里没人说话，你先出来救命",
      "第一次见面就能聊到对方家猫叫什么",
      "老师/同事/老板都能被你自然接住话",
      "只要场子冷，你的 DNA 就开始动了"
    ],
    exclusiveStrength: "你的专属优势是沟通强、破冰快、气氛感强。你能把陌生人变成熟人，把死群变活群，把尴尬变成“哈哈哈哈哈”。",
    dailyActionGuide: [
      "你可以暖场，但不用包场。",
      "不想说话时可以安静，不会因此被开除 E 人族谱。",
      "不是所有人的情绪都需要你来救，偶尔把麦克风还给世界。"
    ]
  },
  quanzhiniu: {
    name: "全脂牛",
    type: "压力承载型",
    slogan: "全脂上岸，生活有盼",
    keywords: ["生命力", "压力", "坚持"],
    image: "/assets/role_quanzhiniu.jpg",
    description: "你不是不自律，你只是被生活腌入味了。上课、上班、ddl、通勤、外卖、奶茶、熬夜，层层叠加，最后形成了一个成熟的压力承载体。别人健身是练核心，你的核心是：今天还能不能活着完成任务。你经常想着“明天开始运动”“下周开始健康生活”“这个月一定调整作息”，然后明天又被新的任务一脚踹回现实。你不是摆烂，你是在用有限的能量维持基本运转。",
    dailyState: [
      "想运动，但身体说你先别想",
      "不是爱躺，是电量真的只剩 2%",
      "一边说要健康，一边打开外卖软件",
      "不是胖，是生活给你加了缓冲垫"
    ],
    exclusiveStrength: "你的专属优势是承压能力强、生命力顽强、能在混乱中继续运转。你可能看起来没在燃烧，但其实你一直在低电量模式下坚持开机。",
    dailyActionGuide: [
      "不用一上来就健身逆袭，先每天多走几步就很好。",
      "忙也要吃顿像样的饭，不要把自己当临时工使用。",
      "偶尔早睡不是认输，是给系统打补丁。"
    ]
  },
  huangama: {
    name: "皇阿马",
    type: "掌控担当型",
    slogan: "来日之路光明灿烂",
    keywords: ["掌控", "负责", "推进"],
    image: "/assets/role_huangama.jpg",   
    description: "你是那种只要场面一乱，DNA 就开始喊“朕来安排”的人。小组作业没人说话，你来分工；项目没人推进，你来催进度；别人做得慢，你表面微笑，内心已经想亲自上手。你不是控制欲强，你拿不得事情烂在那里。当然，有时候你也确实有一点点爹位发言，比如：“我不是管你，我是为了这个项目好。”你的人生信条大概是：只要我还活着，这个表格就不能乱。",
    dailyState: [
      "群里安静 3 分钟，你开始发布圣旨",
      "嘴上说大家随意，心里已经排好甘特图",
      "看别人拖延，比自己加班还难受",
      "不是想当领导，是你们真的没人管啊"
    ],
    exclusiveStrength: "你的专属优势是组织力强、责任感强、能把事情往前推。你适合混乱场面，因为别人还在愣神，你已经开始拆任务、排优先级、控风险。",
    dailyActionGuide: [
      "分工前先问一句“你想做哪部分”，不要直接登基。",
      "别人做得慢时先深呼吸，不要立刻御驾亲征。",
      "你可以负责，但不用负责到长出龙袍。"
    ]
  },
  kajima: {
    name: "卡几马",
    type: "敏感缓冲型",
    slogan: "别走好吗？跑起来",
    keywords: ["细腻", "共情", "思考者"],
    image: "/assets/role_kajima.jpg",
    description: "你不是不行，你只是启动速度比较像老电脑。突然收到任务，你会先卡住几秒；别人语气一变，你的大脑就开始自动生成 3000 字阅读理解；计划一变，你整个人就像网页加载失败。但你不是脆弱废物，你是精密仪器。你需要一点时间缓冲，一点情绪预热，一点安全感加载。只要给你时间，你也能慢慢跑起来。你的精神状态大概是：“别走好吗？跑起来。”听起来矛盾，但很真实：一边想被等等，一边又在努力追上。",
    dailyState: [
      "收到消息先愣住，再开始想怎么回",
      "别人一句“哦”，你能分析出八种含义",
      "嘴上说“我不行”，手上已经开始做了",
      "不是拖延，是加载条还没满"
    ],
    exclusiveStrength: "你的专属优势是敏感、细腻、共情力强、细节感好。你能捕捉到别人忽略的情绪和细节，很适合内容、设计、用户体验、服务沟通这类需要感知力的事情。",
    dailyActionGuide: [
      "卡住的时候，不要骂自己，先做最小的一步。",
      "别人的语气不一定都是针对你，大脑不要自动开庭。",
      "慢一点没关系，只要还在往前走，你就没有掉线。"
    ]
  },
  elema: {
    name: "饿了马",
    type: "能量补给型",
    slogan: "做生活中的嚼嚼者",
    keywords: ["干饭", "补能", "真实感"],
    image: "/assets/role_elema.jpg",
    description: "你的人生系统很简单：吃饱了，世界还能谈；没吃饭，谁都别来烦。对你来说，吃饭不是普通生理需求，而是情绪管理、人生续航、灵魂重启和生产力恢复的综合解决方案。别人靠理想支撑，你靠饭点复活。你不是贪吃，你是做生活中的嚼嚼者。每一次咀嚼，都是在告诉自己：没关系，日子还能过。",
    dailyState: [
      "早上刚到工位/教室，就开始想中午吃什么",
      "情绪不好时，第一反应：我是不是饿了",
      "饭点被打断，整个人瞬间失去人性",
      "一顿好吃的，可以让你重新相信世界"
    ],
    exclusiveStrength: "你的专属优势是真实、恢复快、知道怎么给自己充电。你很懂自己的能量来源，也不会假装自己不需要照顾。你是那种只要补给到位，就能重新上线的人。",
    dailyActionGuide: [
      "重要任务前先吃饭，不要让低血糖替你做决定。",
      "情绪崩溃前先判断：是人生完了，还是该吃饭了。",
      "除了吃，也可以开发其他回血技能，比如睡觉、散步、听歌。"
    ]
  },
  banma: {
    name: "班马",
    type: "稳定坚持型",
    slogan: "生而为班，我很能扛",
    keywords: ["稳定", "可靠", "持续供电"],
    image: "/assets/role_banma.jpg",
    description: "你是最典型的打工人/学生党生存样本。没有华丽招式，没有主角光环，没有夸张剧情，就是每天准时出现、稳定完成、默默消耗，然后第二天继续上线。你的精神状态大概是：“不想干了。”然后第二天：“算了，还是先干吧。”你不是没有情绪，你只是太熟练了。熟练到崩溃也能边崩边做，发疯也不影响交付。",
    dailyState: [
      "嘴上说要跑路，身体已经坐到工位/教室",
      "不爱表现，但任务会按时交",
      "累到麻木，但还能继续",
      "人生没有暂停键，只有“稍后提醒”"
    ],
    exclusiveStrength: "你的专属优势是稳定、可靠、能坚持、掉链子概率低。你可能不是最会表达的人，但你是最能让人放心的人。别人是灵光一现，你是持续供电。",
    dailyActionGuide: [
      "不要总说“还行”，你可以承认自己真的很累。",
      "稳定不是无限续航，记得给自己充电。",
      "让别人看见你的付出，不要默默把自己用成公共设施。"
    ]
  }
};

export const questions: Question[] = [
  {
    id: 1,
    question: "早八闹钟响了第三遍，你的第一反应是？",
    isCore: false,
    options: [
      { text: "弹射起步，开始精致护肤穿搭", mainType: "niuyork", subType: "huangama" },
      { text: "痛苦哀嚎，但还是准时踩点出现", mainType: "banma", subType: "quanzhiniu" },
      { text: "在被窝里盘算今天能不能摸鱼", mainType: "niugulu", subType: "kajima" },
      { text: "先点个外卖早饭续命再说", mainType: "elema", subType: "sheniu" }
    ]
  },
  {
    id: 2,
    question: "面对一个 DDL 就在明早的重要任务，你会？",
    isCore: true,
    options: [
      { text: "立刻列出拆解步骤，稳步推进", mainType: "huangama", subType: "niuyork" },
      { text: "感到极度焦虑，卡在那里迟迟不动", mainType: "kajima", subType: "quanzhiniu" },
      { text: "默默加班加点，哪怕熬透也完成", mainType: "banma", subType: "niugulu" },
      { text: "先发个朋友圈吐槽，然后找人求助", mainType: "sheniu", subType: "elema" }
    ]
  },
  {
    id: 3,
    question: "小组作业中，如果大家都在保持沉默，你会？",
    isCore: false,
    options: [
      { text: "主动开口打破尴尬，活跃气氛", mainType: "sheniu", subType: "niuyork" },
      { text: "忍无可忍，直接上手开始安排分工", mainType: "huangama", subType: "banma" },
      { text: "躲在角落，祈祷千万别点到我", mainType: "kajima", subType: "niugulu" },
      { text: "一边吃零食一边看戏，等大佬发号施令", mainType: "elema", subType: "quanzhiniu" }
    ]
  },
  {
    id: 4,
    question: "被拉进一个陌生的社交场合，你的状态是？",
    isCore: false,
    options: [
      { text: "全场穿梭，迅速和陌生人打成一片", mainType: "sheniu", subType: "huangama" },
      { text: "保持礼貌微笑，但心里在想什么时候走", mainType: "niugulu", subType: "niuyork" },
      { text: "社恐爆发，找个角落疯狂刷手机", mainType: "kajima", subType: "banma" },
      { text: "直奔餐点区，把昂贵的自助餐吃回来", mainType: "elema", subType: "quanzhiniu" }
    ]
  },
  {
    id: 5,
    question: "午饭时间到了，你通常会怎么决定？",
    isCore: false,
    options: [
      { text: "精心研究大众点评，选一家有调性的", mainType: "niuyork", subType: "sheniu" },
      { text: "吃什么无所谓，能填饱肚子就行", mainType: "banma", subType: "quanzhiniu" },
      { text: "必须要吃顿好的，这可是我唯一的慰藉", mainType: "elema", subType: "kajima" },
      { text: "边吃边处理刚才没做完的事", mainType: "huangama", subType: "niugulu" }
    ]
  },
  {
    id: 6,
    question: "当你感觉到很大的压力时，你的第一反应是？",
    isCore: false,
    options: [
      { text: "暴饮暴食或点很多奶茶", mainType: "elema", subType: "quanzhiniu" },
      { text: "静静待着，不回消息，自我隔离", mainType: "kajima", subType: "niugulu" },
      { text: "把情绪藏起来，更认真地去解决问题", mainType: "niugulu", subType: "banma" },
      { text: "去健身房或通过买买买发泄", mainType: "niuyork", subType: "sheniu" }
    ]
  },
  {
    id: 7,
    question: "对于你未来的正式职业/学业规划，你觉得？",
    isCore: true,
    options: [
      { text: "已经有清晰的长线目标和进阶路径", mainType: "huangama", subType: "niugulu" },
      { text: "走一步看一步，只要活得自在就行", mainType: "elema", subType: "sheniu" },
      { text: "想要体面且高薪，并为此牺牲休息时间", mainType: "niuyork", subType: "banma" },
      { text: "感到迷茫且累，只想找个地方躺平", mainType: "quanzhiniu", subType: "kajima" }
    ]
  },
  {
    id: 8,
    question: "朋友圈里的你，通常呈现什么样的画风？",
    isCore: false,
    options: [
      { text: "精致的滤镜摄影、打卡和 OOTD", mainType: "niuyork", subType: "sheniu" },
      { text: "转发干货、成就清单或自律日常", mainType: "huangama", subType: "niugulu" },
      { text: "发很多疯，全是表情包和梗", mainType: "sheniu", subType: "elema" },
      { text: "基本不发，像是个僵尸号", mainType: "banma", subType: "kajima" }
    ]
  },
  {
    id: 9,
    question: "当别人突然催促你提交结果时，你会？",
    isCore: false,
    options: [
      { text: "瞬间炸毛，但手上动作加快", mainType: "huangama", subType: "banma" },
      { text: "极度恐慌，脑子在那一刻空白了", mainType: "kajima", subType: "quanzhiniu" },
      { text: "面无表情地说“在做了”，其实刚新建文档", mainType: "niugulu", subType: "sheniu" },
      { text: "直接回复“等一下，我还在吃饭”", mainType: "elema", subType: "niuyork" }
    ]
  },
  {
    id: 10,
    question: "原本计划好的假期突然被任务打断，你会？",
    isCore: true,
    options: [
      { text: "虽然很气，但还是能高效处理完继续玩", mainType: "niuyork", subType: "huangama" },
      { text: "心态崩了，剩下的时间都在抱怨中度过", mainType: "kajima", subType: "elema" },
      { text: "默默接受，习惯了，这种事见怪不怪", mainType: "banma", subType: "quanzhiniu" },
      { text: "表面服从，内心已经把对方拉黑一万次", mainType: "niugulu", subType: "sheniu" }
    ]
  },
  {
    id: 11,
    question: "周末你最理想的状态是？",
    isCore: false,
    options: [
      { text: "在家昏睡 20 小时，彻底断联", mainType: "quanzhiniu", subType: "banma" },
      { text: "去最火的店，拍最美的照，见最多的人", mainType: "sheniu", subType: "niuyork" },
      { text: "把下周的计划整理得井井有条", mainType: "huangama", subType: "niugulu" },
      { text: "寻找城市里最好吃的隐藏老铺", mainType: "elema", subType: "kajima" }
    ]
  },
  {
    id: 12,
    question: "在一个沉闷的会议/课堂上，你通常在做什么？",
    isCore: false,
    options: [
      { text: "疯狂记笔记，或者装作在记笔记", mainType: "niugulu", subType: "banma" },
      { text: "控制不住地在下面偷偷跟人聊天", mainType: "sheniu", subType: "huangama" },
      { text: "盯着窗外神游，思考晚上吃什么", mainType: "elema", subType: "kajima" },
      { text: "强撑着不睡着，感觉灵魂已经出窍", mainType: "quanzhiniu", subType: "niuyork" }
    ]
  },
  {
    id: 13,
    question: "如果你不小心犯了一个低级错误，你会？",
    isCore: false,
    options: [
      { text: "第一时间道歉并立刻想补救措施", mainType: "huangama", subType: "niuyork" },
      { text: "陷入深度的自我怀疑和情绪内耗", mainType: "kajima", subType: "quanzhiniu" },
      { text: "默默处理掉，尽量让任何人发现不了", mainType: "niugulu", subType: "banma" },
      { text: "用幽默化解尴尬，顺便甩个完美的锅", mainType: "sheniu", subType: "elema" }
    ]
  },
  {
    id: 14,
    question: "当你达成了一个小小的成就，你会？",
    isCore: false,
    options: [
      { text: "低调路过，继续向下一个目标挺进", mainType: "banma", subType: "niugulu" },
      { text: "必须买样心仪已久的东西奖励自己", mainType: "niuyork", subType: "elema" },
      { text: "发朋友圈接受全方位的赞誉", mainType: "sheniu", subType: "huangama" },
      { text: "长舒一口气，终于可以名正言顺躺着了", mainType: "quanzhiniu", subType: "kajima" }
    ]
  },
  {
    id: 15,
    question: "被扔到一个全新的环境或接手全新业务，你会？",
    isCore: true,
    options: [
      { text: "感到兴奋，立刻去结交新的人脉", mainType: "sheniu", subType: "niuyork" },
      { text: "迅速调研环境，掌握核心主导权", mainType: "huangama", subType: "niugulu" },
      { text: "慢热且谨慎，观察很久才开始行动", mainType: "kajima", subType: "banma" },
      { text: "压力山大，感觉自己的配置带不动新系统", mainType: "quanzhiniu", subType: "elema" }
    ]
  },
  {
    id: 16,
    question: "深夜临睡前，你通常会处于什么心境？",
    isCore: false,
    options: [
      { text: "还在复盘一天的得失，思考明天的应对", mainType: "niugulu", subType: "huangama" },
      { text: "刷手机到完全拿不住，被迫关机", mainType: "quanzhiniu", subType: "elema" },
      { text: "做着关于脱离牛马生活的白日梦", mainType: "kajima", subType: "sheniu" },
      { text: "倒头就睡，毕竟明天还要准时打工", mainType: "banma", subType: "niuyork" }
    ]
  }
];
