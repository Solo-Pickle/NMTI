import { Role, RoleKey, Question } from './types';

export const roles: Record<RoleKey, Role> = {
  niugulu: {
    name: { zh: "牛钴禄", en: "NiuGulu" },
    type: { zh: "隐忍逆袭型", en: "Patient Strategist" },
    slogan: { zh: "你的福气在后头", en: "Your blessing is yet to come." },
    keywords: { zh: ["隐忍", "清醒", "分步反杀"], en: ["Patient", "Clear-headed", "Comeback"] },
    image: "/assets/role_niugulu.jpg",
    description: {
      zh: "你表面上是一个情绪稳定、很好说话的人，实际上内心已经开了八百集宫斗连续剧。别人以为你没反应，其实你只是暂时按按下静音键。你不喜欢当场发疯，因为你更擅长憋一口气，然后偷偷变强。",
      en: "On the surface, you seem stable and easy-going, but inside, you're playing out an 800-episode palace drama. You don't like to explode on the spot; you're better at holding your breath and quietly becoming stronger."
    },
    dailyState: {
      zh: [
        "表面：没事，都可以",
        "内心：这福气给你你要不要",
        "被催时微笑点后，转头开始冷静发疯"
      ],
      en: [
        "Surface: It's fine, whatever.",
        "Inside: Do you really want 'this blessing'?",
        "Smiling when rushed, then going calmly insane."
      ]
    },
    exclusiveStrength: {
      zh: "你最强的地方是能忍、能扛、能翻盘。别人情绪上头的时候，你还能冷静观察局势。你不是脾气好，你是战略性闭嘴。",
      en: "Your greatest strength is endurance and the ability to flip the script. While others get emotional, you observe. You don't have a good temper; you just have a 'strategic silence'."
    },
    dailyActionGuide: {
      zh: [
        "不爽可以先记下来，但别把自己憋成清宫遗恨。",
        "把“我要赢”拆成一个个小任务，不要只在脑内登基。"
      ],
      en: [
        "Note down your grievances, but don't hold them forever.",
        "Break 'winning' into small tasks; don't just 'rule' in your head."
      ]
    }
  },
  niuyork: {
    name: { zh: "牛约克", en: "NiuYorker" },
    type: { zh: "精致高效型", en: "Chic Achiever" },
    slogan: { zh: "Viva La Vida!", en: "Viva La Vida!" },
    keywords: { zh: ["精英", "审美", "效率感"], en: ["Elite", "Aesthetic", "Efficient"] },
    image: "/assets/role_niuyork.jpg",
    description: {
      zh: "你可能是那种人已经碎了，但穿搭不能碎的人。即使 ddl 已经追到门口，你还是想拿一杯咖啡，整理一下头发，假装自己是刚从纽约街头走出来的都市精英。",
      en: "You might be shattered inside, but your outfit remains intact. Even with deadlines at your door, you grab a coffee and fix your hair, pretending to be an elite freshly stepped off a New York street."
    },
    dailyState: {
      zh: [
        "嘴上：I’m fine",
        "心里：I’m finished",
        "一边赶任务，一边挑今天的咖啡"
      ],
      en: [
        "Out loud: I'm fine.",
        "Inside: I'm finished.",
        "Rushing tasks while picking today's coffee."
      ]
    },
    exclusiveStrength: {
      zh: "你的专属优势是自我管理、审美在线、效率感强。你很会用仪式感把你从崩溃边缘拎回来。",
      en: "Your advantages are self-management, aesthetic taste, and a sense of efficiency. You use rituals to pull yourself back from the brink of collapse."
    },
    dailyActionGuide: {
      zh: [
        "咖啡可以续命，但不能替你睡觉。",
        "任务多的时候先做最重要的三件事，不要试图优雅地燃烧自己。"
      ],
      en: [
        "Coffee sustains you, but it's no substitute for sleep.",
        "Do the top 3 tasks first; don't try to burn yourself out elegantly."
      ]
    }
  },
  sheniu: {
    name: { zh: "社牛", en: "Social Butterfly" },
    type: { zh: "社交能量型", en: "Social Powerhouse" },
    slogan: { zh: "E 高人胆大罢了", en: "Just a bold Extrovert." },
    keywords: { zh: ["沟通", "破冰", "气氛组"], en: ["Communication", "Ice-breaking", "Vibe-setter"] },
    image: "/assets/role_sheniu.jpg",
    description: {
      zh: "你不是普通 E 人，你是行走的人际路由器。只要你在，场子就不会冷；只要你开口，空气都开始有互动感。",
      en: "You're not just an extrovert; you're a walking social router. As long as you're there, the vibe never dies; as soon as you speak, interaction starts."
    },
    dailyState: {
      zh: [
        "群里没人说话，你先出来救命",
        "第一次见面就能聊到对方家猫叫什么",
        "只要场子冷，你的 DNA 就开始动了"
      ],
      en: [
        "If the group chat is silent, you're the first to speak.",
        "Learning someone's cat's name on the first meeting.",
        "If the room gets awkward, your DNA kicks in."
      ]
    },
    exclusiveStrength: {
      zh: "你的专属优势是沟通强、破冰快、气氛感强。你能把陌生人变成熟人，把死群变活群。",
      en: "Your advantages: strong communication, fast ice-breaking, and a great sense of atmosphere. You turn strangers into friends."
    },
    dailyActionGuide: {
      zh: [
        "你可以暖场，但不用包场。",
        "不是所有人的情绪都需要你来救，偶尔把麦克风还给世界。"
      ],
      en: [
        "You can warm up a room, but don't feel obligated to carry it alone.",
        "Not everyone's mood needs saving; give the world back the mic."
      ]
    }
  },
  quanzhiniu: {
    name: { zh: "全脂牛", en: "Full-Fat Bull" },
    type: { zh: "压力承载型", en: "Stress-Resistant" },
    slogan: { zh: "全脂上岸，生活有盼", en: "Stay 'full-fat' and keep hope alive." },
    keywords: { zh: ["生命力", "压力", "坚持"], en: ["Vitality", "Pressure", "Persistence"] },
    image: "/assets/role_quanzhiniu.jpg",
    description: {
      zh: "你不是不自律，你只是被生活腌入味了。层层压力下，你是一个成熟的压力承载体。你不是摆烂，你是在用有限的能量维持基本运转。",
      en: "It's not a lack of self-discipline; you've just been marinated by life. You're a mature stress carrier, using limited energy to keep basic operations running."
    },
    dailyState: {
      zh: [
        "想运动，但身体说你先别想",
        "不是爱躺，是电量真的只剩 2%",
        "一边说要健康，一边打开外卖软件"
      ],
      en: [
        "Want to exercise, but your body says 'forget it'.",
        "Not lazy, just at 2% battery life.",
        "Opened meituan while talking about health."
      ]
    },
    exclusiveStrength: {
      zh: "你的专属优势是承压能力强、生命力顽强。你可能看起来没在燃烧，但其实你一直在低电量模式下坚持开机。",
      en: "Persistence under pressure and strong vitality. You might not seem to be burning bright, but you're always 'on' even on low battery."
    },
    dailyActionGuide: {
      zh: [
        "不用一上来就健身逆袭，每天多走几步就很好。",
        "忙也要吃顿像样的饭，把自己当成重要的人对待。"
      ],
      en: [
        "No need for a full fitness makeover; just walk a few more steps.",
        "Eat a decent meal even when busy; treat yourself as someone important."
      ]
    }
  },
  huangama: {
    name: { zh: "皇阿马", en: "The Emperor" },
    type: { zh: "掌控担当型", en: "Master Controller" },
    slogan: { zh: "来日之路光明灿烂", en: "The road ahead is bright." },
    keywords: { zh: ["掌控", "负责", "推进"], en: ["Control", "Responsibility", "Progress"] },
    image: "/assets/role_huangama.jpg",
    description: {
      zh: "你是那种只要场面一乱，DNA 就开始喊“朕来安排”的人。拿不得事情烂在那里。你的人生信条大概是：只要我还活着，这个表格就不能乱。",
      en: "When things get messy, your DNA screams 'I'll handle this'. You can't stand to see things stuck. Your creed: as long as I'm alive, this spreadsheet won't fail."
    },
    dailyState: {
      zh: [
        "群里安静 3 分钟，你开始发布圣旨",
        "嘴上说大家随意，心里已经排好甘特图",
        "看别人拖延，比自己加班还难受"
      ],
      en: [
        "If the group is quiet for 3 mins, you start issuing 'decrees'.",
        "Saying 'as you wish' while already planning the Gantt chart.",
        "Watching others procrastinate is worse than working OT yourself."
      ]
    },
    exclusiveStrength: {
      zh: "你的专属优势是组织力强、责任感强、能把事情往前推。你适合混乱场面，因为你已经排好了优先级。",
      en: "Strong organizational skills and responsibility. You thrive in chaos by setting priorities and pushing through."
    },
    dailyActionGuide: {
      zh: [
        "分工前先问一句“你想做哪部分”，不要直接登基。",
        "别人做得慢时先深呼吸，不要立刻亲自上手。"
      ],
      en: [
        "Ask what others want to do before taking total command.",
        "Breathe deeply when others are slow; don't take over immediately."
      ]
    }
  },
  kajima: {
    name: { zh: "卡几马", en: "Kajima" },
    type: { zh: "敏感缓冲型", en: "Sensitive Reflector" },
    slogan: { zh: "别走好吗？跑起来", en: "Don't leave, okay? Let's run." },
    keywords: { zh: ["细腻", "共情", "思考者"], en: ["Delicate", "Empathy", "Thinker"] },
    image: "/assets/role_kajima.jpg",
    description: {
      zh: "你不是不行，你只是启动速度比较像老电脑。突然收到任务，你会先卡住几秒。但你不是废物，你是精密仪器，需要时间缓冲。",
      en: "It's not that you can't do it; you just boot up like an old PC. You freeze for a few seconds when tasks arrive. You're a precision instrument needing buffering."
    },
    dailyState: {
      zh: [
        "收到消息先愣住，再开始想怎么回",
        "别人一句“哦”，你能分析出八种含义",
        "嘴上说“我不行”，手上已经开始做了"
      ],
      en: [
        "Stunned by a message before thinking of how to reply.",
        "Analyzing 8 meanings from a simple 'K'.",
        "Saying 'I can't' while already working on it."
      ]
    },
    exclusiveStrength: {
      zh: "你的专属优势是敏感、细腻、共情力强、细节感好。你能捕捉到别人忽略的情绪和细节。",
      en: "Sensitivity, empathy, and an eye for detail. You catch the subtle emotions and facts others miss."
    },
    dailyActionGuide: {
      zh: [
        "卡住的时候，不要骂自己，先做最小的一步。",
        "别人的语气不一定都是针对你，慢一点没关系。"
      ],
      en: [
        "Don't blame yourself for freezing; just take the smallest first step.",
        "Others' tone isn't always about you; it's okay to be slow."
      ]
    }
  },
  elema: {
    name: { zh: "饿了马", en: "Hungry Horse" },
    type: { zh: "能量补给型", en: "Energy Seeker" },
    slogan: { zh: "做生活中的嚼嚼者", en: "Be a chewer of life." },
    keywords: { zh: ["干饭", "补能", "真实感"], en: ["Feasting", "Recharging", "Authentic"] },
    image: "/assets/role_elema.jpg",
    description: {
      zh: "你的人生系统很简单：吃饱了，世界还能谈；没吃饭，谁都别来烦。每一口咀嚼，都是在告诉自己：没关系，日子还能过。",
      en: "Life is simple: if you're full, the world is fine; if you're hungry, stay away. Every bite tells you: it's okay, life goes on."
    },
    dailyState: {
      zh: [
        "早上刚到公司，就开始想中午吃什么",
        "情绪不好时，第一反应：我是不是饿了",
        "饭点被打断，整个人瞬间失去人性"
      ],
      en: [
        "Thinking about lunch the moment you sit down in the morning.",
        "First thought when upset: Am I hungry?",
        "Losing your humanity when lunch is interrupted."
      ]
    },
    exclusiveStrength: {
      zh: "你的专属优势是真实、恢复快。你很懂自己的能量来源，只要补给到位，就能重新上线。",
      en: "Authenticity and fast recovery. You know your energy source; you're back online as soon as you're recharged."
    },
    dailyActionGuide: {
      zh: [
        "重要任务前先吃饭，不要让低血糖替你做决定。",
        "情绪崩溃前先判断：是人生完了，还是该吃饭了。"
      ],
      en: [
        "Eat before big tasks; don't let low blood sugar decide for you.",
        "Ask yourself: is life over, or do I just need food?"
      ]
    }
  },
  banma: {
    name: { zh: "班马", en: "Workhorse Zebra" },
    type: { zh: "稳定坚持型", en: "Reliable Mainstay" },
    slogan: { zh: "生而为班，我很能扛", en: "Born to work, born to endure." },
    keywords: { zh: ["稳定", "可靠", "持续供电"], en: ["Stable", "Reliable", "Consistent"] },
    image: "/assets/role_banma.jpg",
    description: {
      zh: "你是最典型的生存样本。没有主角光环，就是每天准时出现、稳定完成。你不是没有情绪，你只是崩溃也能边崩边做。",
      en: "A typical survival sample. No protagonist's luck, just showing up on time and being reliable. You have emotions, but you work through them."
    },
    dailyState: {
      zh: [
        "嘴上说要跑路，身体已经坐到工位",
        "不爱表现，但任务会按时交",
        "人生没有暂停键，只有“稍后提醒”"
      ],
      en: [
        "Saying you'll quit while already sitting at your desk.",
        "Not flashy, but tasks are always on time.",
        "Life has no pause button, only 'Remind me later'."
      ]
    },
    exclusiveStrength: {
      zh: "你的专属优势是稳定、可靠。你可能不是最会表达的人，但你是最能让人放心的人。",
      en: "Stability and reliability. You might not be a talker, but you're the one everyone trusts."
    },
    dailyActionGuide: {
      zh: [
        "不要总说“还行”，你可以承认自己真的很累。",
        "让别人看见你的付出，不要默默把自己用成公共设施。"
      ],
      en: [
        "Don't just say 'it's fine'; admit it when you're tired.",
        "Let others see your effort; don't be a silent 'utility' for everyone."
      ]
    }
  }
};

export const questions: Question[] = [
  {
    id: 1,
    question: { zh: "早八闹钟响了第三遍，你的第一反应是？", en: "Your alarm for 8 AM rings for the third time. Your first thought?" },
    isCore: false,
    options: [
      { text: { zh: "弹射起步，开始精致护肤穿搭", en: "Launch out of bed and start an elite skincare routine." }, mainType: "niuyork", subType: "huangama" },
      { text: { zh: "痛苦哀嚎，但还是准时踩点出现", en: "Moan in pain, but show up exactly on time anyway." }, mainType: "banma", subType: "quanzhiniu" },
      { text: { zh: "在被窝里盘算今天能不能摸鱼", en: "Lying in bed calculating if I can slack off today." }, mainType: "niugulu", subType: "kajima" },
      { text: { zh: "先点个外卖早饭续命再说", en: "Order breakfast delivery first to sustain my life." }, mainType: "elema", subType: "sheniu" }
    ]
  },
  {
    id: 2,
    question: { zh: "面对一个 DDL 就在明早的重要任务，你会？", en: "Facing an important task due tomorrow morning, you will...?" },
    isCore: true,
    options: [
      { text: { zh: "立刻列出拆解步骤，稳步推进", en: "Immediately list the steps and push forward steadily." }, mainType: "huangama", subType: "niuyork" },
      { text: { zh: "感到极度焦虑，卡在那里迟迟不动", en: "Feel extreme anxiety and freeze, unable to start." }, mainType: "kajima", subType: "quanzhiniu" },
      { text: { zh: "默默加班加点，哪怕熬透也完成", en: "Quietly work overtime until it's finished, no matter what." }, mainType: "banma", subType: "niugulu" },
      { text: { zh: "先发个朋友圈吐槽，然后找人求助", en: "Post a complaint on social media, then ask for help." }, mainType: "sheniu", subType: "elema" }
    ]
  },
  {
    id: 3,
    question: { zh: "小组作业中，如果大家都在保持沉默，你会？", en: "In group work, if everyone is staying silent, you will...?" },
    isCore: false,
    options: [
      { text: { zh: "主动开口打破尴尬，活跃气氛", en: "Take the lead to break the ice and liven up the room." }, mainType: "sheniu", subType: "niuyork" },
      { text: { zh: "忍无可忍，直接上手开始安排分工", en: "Can't stand it, so I start assigning tasks directly." }, mainType: "huangama", subType: "banma" },
      { text: { zh: "躲在角落，祈祷千万别点到我", en: "Hide in a corner, praying no one calls on me." }, mainType: "kajima", subType: "niugulu" },
      { text: { zh: "一边吃零食一边看戏，等大佬发号施令", en: "Eat snacks and watch, waiting for a 'boss' to take charge." }, mainType: "elema", subType: "quanzhiniu" }
    ]
  },
  {
    id: 4,
    question: { zh: "被拉进一个陌生的社交场合，你的状态是？", en: "When dragged into an unfamiliar social setting, what is your state?" },
    isCore: false,
    options: [
      { text: { zh: "全场穿梭，迅速和陌生人打成一片", en: "Mingle through the crowd and quickly blend in." }, mainType: "sheniu", subType: "huangama" },
      { text: { zh: "保持礼貌微笑，但心里在想什么时候走", en: "Keep a polite smile while thinking about when to leave." }, mainType: "niugulu", subType: "niuyork" },
      { text: { zh: "社恐爆发，找个角落疯狂刷手机", en: "Social anxiety peak; find a corner and scroll through phone." }, mainType: "kajima", subType: "banma" },
      { text: { zh: "直奔餐点区，把昂贵的自助餐吃回来", en: "Head straight for the food to get my money's worth." }, mainType: "elema", subType: "quanzhiniu" }
    ]
  },
  {
    id: 5,
    question: { zh: "午饭时间到了，你通常会怎么决定？", en: "It's lunch time. How do you usually decide what to eat?" },
    isCore: false,
    options: [
      { text: { zh: "精心研究大众点评，选一家有调性的", en: "Meticulously research reviews and pick a chic place." }, mainType: "niuyork", subType: "sheniu" },
      { text: { zh: "吃什么无所谓，能填饱肚子就行", en: "It doesn't matter, as long as it fills my stomach." }, mainType: "banma", subType: "quanzhiniu" },
      { text: { zh: "必须要吃顿好的，这可是我唯一的慰藉", en: "I must have a great meal; it's my only consolation." }, mainType: "elema", subType: "kajima" },
      { text: { zh: "边吃边处理刚才没做完的事", en: "Eat while handling unfinished tasks." }, mainType: "huangama", subType: "niugulu" }
    ]
  },
  {
    id: 6,
    question: { zh: "当你感觉到很大的压力时，你的第一反应是？", en: "When you feel huge pressure, what's your first reaction?" },
    isCore: false,
    options: [
      { text: { zh: "暴饮暴食或点很多奶茶", en: "Binge eating or ordering a lot of milk tea." }, mainType: "elema", subType: "quanzhiniu" },
      { text: { zh: "静静待着，不回消息，自我隔离", en: "Stay quiet, don't reply, self-isolate." }, mainType: "kajima", subType: "niugulu" },
      { text: { zh: "把情绪藏起来，更认真地去解决问题", en: "Hide emotions and work harder to solve the problem." }, mainType: "niugulu", subType: "banma" },
      { text: { zh: "去健身房或通过买买买发泄", en: "Go to the gym or vent through shopping." }, mainType: "niuyork", subType: "sheniu" }
    ]
  },
  {
    id: 7,
    question: { zh: "对于你未来的正式职业/学业规划，你觉得？", en: "Regarding your future professional/academic plan, you think...?" },
    isCore: true,
    options: [
      { text: { zh: "已经有清晰的长线目标和进阶路径", en: "I already have clear long-term goals and a path." }, mainType: "huangama", subType: "niugulu" },
      { text: { zh: "走一步看一步，只要活得自在就行", en: "Take it step by step; living freely is enough." }, mainType: "elema", subType: "sheniu" },
      { text: { zh: "想要体面且高薪，并为此牺牲休息时间", en: "Want dignity and high pay, even at the cost of rest." }, mainType: "niuyork", subType: "banma" },
      { text: { zh: "感到迷茫且累，只想找个地方躺平", en: "Feel lost and tired; I just want to find a place to lie down." }, mainType: "quanzhiniu", subType: "kajima" }
    ]
  },
  {
    id: 8,
    question: { zh: "朋友圈里的你，通常呈现什么样的画风？", en: "What's the 'style' of your social media posts?" },
    isCore: false,
    options: [
      { text: { zh: "精致的滤镜摄影、打卡和 OOTD", en: "Elegant filtered photos, check-ins, and OOTDs." }, mainType: "niuyork", subType: "sheniu" },
      { text: { zh: "转发干货、成就清单或自律日常", en: "Sharing insights, achievement lists, or disciplined routines." }, mainType: "huangama", subType: "niugulu" },
      { text: { zh: "发很多疯，全是表情包和梗", en: "Posting 'insanity', full of emojis and memes." }, mainType: "sheniu", subType: "elema" },
      { text: { zh: "基本不发，像是个僵尸号", en: "Barely post anything, like a ghost account." }, mainType: "banma", subType: "kajima" }
    ]
  },
  {
    id: 9,
    question: { zh: "当别人突然催促你提交结果时，你会？", en: "When someone suddenly rushes you to submit results, you will...?" },
    isCore: false,
    options: [
      { text: { zh: "瞬间炸毛，但手上动作加快", en: "Instantly get annoyed but speed up my work." }, mainType: "huangama", subType: "banma" },
      { text: { zh: "极度恐慌，脑子在那一刻空白了", en: "Panick and my brain goes blank for a moment." }, mainType: "kajima", subType: "quanzhiniu" },
      { text: { zh: "面无表情地说“在做了”，其实刚新建文档", en: "Say 'working on it' coldly, while actually just starting." }, mainType: "niugulu", subType: "sheniu" },
      { text: { zh: "直接回复“等一下，我还在吃饭”", en: "Reply directly with 'Wait, I'm still eating'." }, mainType: "elema", subType: "niuyork" }
    ]
  },
  {
    id: 10,
    question: { zh: "原本计划好的假期突然被任务打断，你会？", en: "A planned vacation is suddenly interrupted by tasks. You...?" },
    isCore: true,
    options: [
      { text: { zh: "虽然很气，但还是能高效处理完继续玩", en: "Angry, but handle it efficiently then resume playing." }, mainType: "niuyork", subType: "huangama" },
      { text: { zh: "心态崩了，剩下的时间都在抱怨中度过", en: "Mental breakdown; spend the rest of the time complaining." }, mainType: "kajima", subType: "elema" },
      { text: { zh: "默默接受，习惯了，这种事见怪不怪", en: "Accept it quietly; I'm used to this kind of thing." }, mainType: "banma", subType: "quanzhiniu" },
      { text: { zh: "表面服从，内心已经把对方拉黑一万次", en: "Obey on the surface, but block them in my heart 10k times." }, mainType: "niugulu", subType: "sheniu" }
    ]
  },
  {
    id: 11,
    question: { zh: "周末你最理想的状态是？", en: "What's your ideal weekend state?" },
    isCore: false,
    options: [
      { text: { zh: "在家昏睡 20 小时，彻底断联", en: "Sleep for 20 hours at home, completely offline." }, mainType: "quanzhiniu", subType: "banma" },
      { text: { zh: "去最火的店，拍最美的照，见最多的人", en: "Go to popular shops, take photos, meet people." }, mainType: "sheniu", subType: "niuyork" },
      { text: { zh: "把下周的计划整理得井井有条", en: "Organize next week's plan perfectly." }, mainType: "huangama", subType: "niugulu" },
      { text: { zh: "寻找城市里最好吃的隐藏老铺", en: "Search for the best hidden food spots in the city." }, mainType: "elema", subType: "kajima" }
    ]
  },
  {
    id: 12,
    question: { zh: "在一个沉闷的会议/课堂上，你通常在做什么？", en: "In a boring meeting or class, what are you usually doing?" },
    isCore: false,
    options: [
      { text: { zh: "疯狂记笔记，或者装作在记笔记", en: "Take massive notes, or pretend to take them." }, mainType: "niugulu", subType: "banma" },
      { text: { zh: "控制不住地在下面偷偷跟人聊天", en: "Can't stop whispering or chatting with people." }, mainType: "sheniu", subType: "huangama" },
      { text: { zh: "盯着窗外神游，思考晚上吃什么", en: "Staring out the window, thinking about dinner." }, mainType: "elema", subType: "kajima" },
      { text: { zh: "强撑着不睡着，感觉灵魂已经出窍", en: "Struggling to stay awake; soul has left the body." }, mainType: "quanzhiniu", subType: "niuyork" }
    ]
  },
  {
    id: 13,
    question: { zh: "如果你不小心犯了一个低级错误，你会？", en: "If you accidentally make a stupid mistake, what will you do?" },
    isCore: false,
    options: [
      { text: { zh: "第一时间道歉并立刻想补救措施", en: "Apologize instantly and find a remedy." }, mainType: "huangama", subType: "niuyork" },
      { text: { zh: "陷入深度的自我怀疑和情绪内耗", en: "Fall into deep self-doubt and emotional exhaustion." }, mainType: "kajima", subType: "quanzhiniu" },
      { text: { zh: "默默处理掉，尽量让任何人发现不了", en: "Quietly fix it; try not to let anyone find out." }, mainType: "niugulu", subType: "banma" },
      { text: { zh: "用幽默化解尴尬，顺便甩个完美的锅", en: "Use humor to clear the air, and maybe shift the blame." }, mainType: "sheniu", subType: "elema" }
    ]
  },
  {
    id: 14,
    question: { zh: "当你达成了一个小小的成就，你会？", en: "When you achieve a small success, what will you do?" },
    isCore: false,
    options: [
      { text: { zh: "低调路过，继续向下一个目标挺进", en: "Keep a low profile and move to the next goal." }, mainType: "banma", subType: "niugulu" },
      { text: { zh: "必须买样心仪已久的东西奖励自己", en: "Must buy something I've wanted for a long time as a reward." }, mainType: "niuyork", subType: "elema" },
      { text: { zh: "发朋友圈接受全方位的赞誉", en: "Post to get all-round praise and likes." }, mainType: "sheniu", subType: "huangama" },
      { text: { zh: "长舒一口气，终于可以名正言顺躺着了", en: "Sigh with relief; finally justified to just lie down." }, mainType: "quanzhiniu", subType: "kajima" }
    ]
  },
  {
    id: 15,
    question: { zh: "被扔到一个全新的环境或接手全新业务，你会？", en: "Thrown into a new environment or business, you will...?" },
    isCore: true,
    options: [
      { text: { zh: "感到兴奋，立刻去结交新的人脉", en: "Feel excited and immediately start making connections." }, mainType: "sheniu", subType: "niuyork" },
      { text: { zh: "迅速调研环境，掌握核心主导权", en: "Quickly research and take control of the situation." }, mainType: "huangama", subType: "niugulu" },
      { text: { zh: "慢热且谨慎，观察很久才开始行动", en: "Slow to warm up; observer for a long time before acting." }, mainType: "kajima", subType: "banma" },
      { text: { zh: "压力山大，感觉自己的配置带不动新系统", en: "Huge pressure; feel my hardware can't run this new system." }, mainType: "quanzhiniu", subType: "elema" }
    ]
  },
  {
    id: 16,
    question: { zh: "深夜临睡前，你通常会处于什么心境？", en: "Before sleeping late at night, what is your typical mindset?" },
    isCore: false,
    options: [
      { text: { zh: "还在复盘一天的得失，思考明天的应对", en: "Still reviewing the day's wins/losses and planning for tomorrow." }, mainType: "niugulu", subType: "huangama" },
      { text: { zh: "刷手机到完全拿不住，被迫关机", en: "Scrolling until the phone falls; forced to shut down." }, mainType: "quanzhiniu", subType: "elema" },
      { text: { zh: "做着关于脱离牛马生活的白日梦", en: "Daydreaming about escaping this workhorse life." }, mainType: "kajima", subType: "sheniu" },
      { text: { zh: "倒头就睡，毕竟明天还要准时打工", en: "Fall asleep immediately; after all, work starts on time tomorrow." }, mainType: "banma", subType: "niuyork" }
    ]
  }
];
