import { collectedMaterials } from './materials'

export const navItems = [
  { label: '首页', path: '/' },
  { label: '蓝印纹库', path: '/library' },
  { label: '她与蓝', path: '/heritage' },
  { label: '寻找你的蓝', path: '/find-blue' },
  { label: '纹脉工坊', path: '/patternx' },
]

export const patternCategories = [
  { key: 'plant', name: '植物纹', title: '草木有灵', description: '缠枝莲、牡丹、梅兰竹菊，取法自然', patternClass: 'pattern-floral', image: '/assets/categories/plant.jpg' },
  { key: 'animal', name: '动物纹', title: '瑞兽祥禽', description: '龙凤呈祥、蝶恋花、鱼跃龙门', patternClass: 'pattern-wing', image: '/assets/categories/animal.jpg' },
  { key: 'auspicious', name: '吉祥纹', title: '福禄寿喜', description: '福字、寿字、八宝、暗八仙', patternClass: 'pattern-coin', image: '/assets/categories/auspicious.jpg' },
  { key: 'geometry', name: '几何纹', title: '方圆之道', description: '回纹、万字纹、方胜纹、盘长纹', patternClass: 'pattern-grid', image: '/assets/categories/geometry.jpg' },
]

export const craftSteps = [
  { title: '刻版', short: '牛皮纸上刻出纹样', text: '将画稿覆在牛皮纸版上，用刻刀一点点镂刻出花纹轮廓。刀要稳，手要准，纹样的精神从这里开始。' },
  { title: '刮浆', short: '黄豆粉与石灰调成防染浆', text: '将黄豆粉、石灰调成防染浆，均匀刮在布面与花版之间。这层浆，是蓝与白之间最重要的界线。' },
  { title: '染色', short: '浸入靛蓝染缸，氧化显色', text: '布料浸入植物靛蓝染缸，出缸后与空气接触慢慢氧化，颜色由浅变深，靛蓝的生命从水中醒来。' },
  { title: '刮白', short: '刮去防染浆，露出白花', text: '待染色稳定后刮去防染浆，原本被保护的白色花纹显现出来，蓝白对比在这一刻最动人。' },
  { title: '清洗', short: '流水洗净浮色', text: '用清水洗去浮色和残浆，让纹样更清朗、布面更柔和。布料在水里舒展开来，像呼吸一样。' },
  { title: '晾晒', short: '阳光下晾干，靛蓝定格', text: '将布料悬挂晾晒，让风与阳光慢慢带走湿气，靛蓝与素白由此定格成日常生活里的美。' },
]

const technique = craftSteps.map((step) => step.short)

const patternDefinitions = [
  { id: 'chanzhi-lian', name: '缠枝莲纹', category: 'plant', categoryName: '植物纹', patternClass: 'pattern-floral', meaning: '生生不息，连绵不断', meaningDetail: '缠枝莲纹以莲花为主体，藤蔓缠绕连绵，寓意生生不息。在蓝印花布中，它寄托了江南人家对家族兴旺、绵延不绝的美好祈愿。', story: '相传大临村的缠枝莲纹源于宋元以来的民间布样。每逢婚嫁，母亲常以莲花与藤蔓入纹，祝愿女儿的新家清正和美、根脉相连。', era: '明清', usage: '被面、包袱布、帐檐', technique, modernUse: ['丝巾图案', '文创包装', '展陈导视'], relatedIds: ['mudan', 'shiliu', 'huiwen'], tags: ['莲花', '缠枝', '植物', '智慧', '清雅'] },
  { id: 'mudan', name: '牡丹团花纹', category: 'plant', categoryName: '植物纹', patternClass: 'pattern-rosette', meaning: '花开富贵，圆满安康', meaningDetail: '牡丹团花构图饱满，常用于节庆和婚嫁布品，表达富贵、圆满与热闹的生活愿望。', story: '大临村老布样中，牡丹常与蝴蝶、团寿、回纹组合，既有喜庆气，也有民间礼俗中的祝福秩序。', era: '明清', usage: '婚嫁被面、桌围、礼布', technique, modernUse: ['伴手礼包装', '抱枕面料', '节庆海报'], relatedIds: ['chanzhi-lian', 'shuangxi', 'hudie'], tags: ['牡丹', '富贵', '团花', '喜庆'] },
  { id: 'shiliu', name: '石榴团圆纹', category: 'plant', categoryName: '植物纹', patternClass: 'pattern-seed', meaning: '多子多福，家族团圆', meaningDetail: '石榴籽粒繁多，寓意家族兴旺、团圆丰足，是礼俗布样中常见的祝福纹样。', story: '旧时嫁妆布中常见石榴与卷草相伴，既好看，也把长辈对新家庭的祝愿藏进一针一线。', era: '清代', usage: '嫁妆布、包袱布、礼盒布', technique, modernUse: ['礼盒内衬', '桌旗', '节日贴纸'], relatedIds: ['mudan', 'chanzhi-lian', 'shouzi'], tags: ['石榴', '团圆', '多福', '植物'] },
  { id: 'hudie', name: '蝶恋花纹', category: 'animal', categoryName: '动物纹', patternClass: 'pattern-wing', meaning: '破茧成蝶，自由美好', meaningDetail: '蝴蝶轻盈灵动，常与花草相伴，寓意爱情、美好与生命转化。', story: '蝶恋花在民间布样中很受欢迎，轻巧的蝶形可以让沉静的靛蓝布面有一种活泼的呼吸感。', era: '清代', usage: '丝巾、发带、衣饰边纹', technique, modernUse: ['服饰印花', '手机壁纸', '明信片'], relatedIds: ['mudan', 'yu-lian', 'longfeng'], tags: ['蝴蝶', '自由', '爱情', '动物'] },
  { id: 'yu-lian', name: '鱼跃莲纹', category: 'animal', categoryName: '动物纹', patternClass: 'pattern-wave', meaning: '年年有余，生机流动', meaningDetail: '鱼与莲组合，谐音连年有余，表达生活丰足与生命流动。', story: '江南水乡的鱼、莲、波纹常常同框出现，既来自眼前生活，也沉淀成民间祝福。', era: '明清', usage: '儿童布品、方巾、挂布', technique, modernUse: ['儿童文创', '帆布袋', '互动纹样背景'], relatedIds: ['chanzhi-lian', 'hudie', 'huiwen'], tags: ['鱼', '莲', '有余', '动物'] },
  { id: 'longfeng', name: '龙凤呈祥纹', category: 'animal', categoryName: '动物纹', patternClass: 'pattern-cloud', meaning: '祥瑞圆满，喜庆成双', meaningDetail: '龙凤是礼俗纹样中的重要符号，常用于婚庆、祝福与大型陈设。', story: '龙凤纹在蓝印花布中会被简化成更适合刻版的线条，保留气势，也适合反复印染。', era: '清代', usage: '婚礼布置、门帘、挂幛', technique, modernUse: ['展览主视觉', '礼品包装', '屏风纹样'], relatedIds: ['shuangxi', 'mudan', 'shouzi'], tags: ['龙凤', '祥瑞', '婚庆', '动物'] },
  { id: 'shouzi', name: '团寿字纹', category: 'auspicious', categoryName: '吉祥纹', patternClass: 'pattern-shou', meaning: '福寿双全，圆满长久', meaningDetail: '寿字经过团形化处理，构图稳定，寓意健康长寿与家宅圆满。', story: '祝寿布、厅堂陈设中常见团寿字，蓝底白字庄重清朗，很适合做中心纹。', era: '明清', usage: '祝寿布、被面、厅堂挂布', technique, modernUse: ['茶礼包装', '挂画', '长辈礼品'], relatedIds: ['huiwen', 'wufu', 'mudan'], tags: ['寿', '长寿', '吉祥', '团形'] },
  { id: 'shuangxi', name: '双喜团花纹', category: 'auspicious', categoryName: '吉祥纹', patternClass: 'pattern-doublehappy', meaning: '喜事成双，良缘圆满', meaningDetail: '双喜纹是婚嫁礼俗中最直观的祝福符号，常与牡丹、莲花、蝴蝶搭配。', story: '在旧时婚嫁布置中，双喜纹既是装饰，也是仪式语言，让喜庆被看见、被记住。', era: '清代', usage: '婚嫁布、红包封、礼布', technique, modernUse: ['婚礼伴手礼', '红包封套', '节庆海报'], relatedIds: ['mudan', 'hudie', 'longfeng'], tags: ['双喜', '喜庆', '婚嫁', '吉祥'] },
  { id: 'wufu', name: '五福蝠纹', category: 'auspicious', categoryName: '吉祥纹', patternClass: 'pattern-wing', meaning: '五福临门，福气绵延', meaningDetail: '蝙蝠取福的谐音，五蝠围合表达长寿、富贵、康宁、好德、善终的传统祝愿。', story: '民间图像常用谐音讲祝福，五福纹就是把语言、图案和愿望压进一块布里的例子。', era: '明清', usage: '门帘、礼品布、垫布', technique, modernUse: ['家居软装', '新年礼盒', '导视图标'], relatedIds: ['shouzi', 'huiwen', 'shuangxi'], tags: ['五福', '蝙蝠', '平安', '吉祥'] },
  { id: 'huiwen', name: '回纹', category: 'geometry', categoryName: '几何纹', patternClass: 'pattern-grid', meaning: '回环不断，平安长久', meaningDetail: '回纹以连续折线构成循环结构，寓意周而复始、平安绵长。', story: '回纹常作为边饰出现，像给一块布加上秩序清晰的边界，也让主纹样更有仪式感。', era: '明清', usage: '边饰、帐檐、器物装饰', technique, modernUse: ['网页边框', '包装腰封', '导视系统'], relatedIds: ['shouzi', 'fangsheng', 'yu-lian'], tags: ['回纹', '平安', '几何', '边饰'] },
  { id: 'fangsheng', name: '方胜纹', category: 'geometry', categoryName: '几何纹', patternClass: 'pattern-diamond', meaning: '同心相连，方正有序', meaningDetail: '方胜纹由菱形或方形连续组合，象征连接、守护与稳定。', story: '几何纹在蓝印花布中很适合大面积铺陈，蓝白节奏明确，也方便今天转译成数字图形。', era: '明清', usage: '包袱布、桌布、服饰底纹', technique, modernUse: ['品牌辅助纹样', '桌垫', '网页背景'], relatedIds: ['huiwen', 'pan-chang', 'chanzhi-lian'], tags: ['方胜', '几何', '秩序', '现代'] },
  { id: 'pan-chang', name: '盘长纹', category: 'geometry', categoryName: '几何纹', patternClass: 'pattern-knot', meaning: '连绵不绝，福运长久', meaningDetail: '盘长纹线条回环不断，是传统吉祥符号中关于延续和连接的表达。', story: '盘长纹很像一条不断回到自身的路，适合表达家族、手艺和地方记忆的延续。', era: '明清', usage: '边框、礼布、门帘', technique, modernUse: ['纪念票券', '包装纹样', '交互背景'], relatedIds: ['huiwen', 'fangsheng', 'wufu'], tags: ['盘长', '几何', '延续', '福运'] },
]

const patternImageOverrides = {
  hudie: {
    previewImage: '/assets/collected/e051e2c5b0e1bf5cf8d2a00f59f5bd70.jpg',
    texturePolarity: 'light',
  },
  'yu-lian': {
    previewImage: '/assets/collected/adb0e449f63cd23d42acd0cdace235ed.jpg',
    texturePolarity: 'dark',
    textureCrop: 0.105,
  },
  longfeng: {
    previewImage: '/assets/collected/17c2bbe479aaa0a10a14425a3f40c241.png',
    texturePolarity: 'dark',
  },
}

// Use one image source across the archive, details, and 3D workshop.
export const patterns = patternDefinitions.map((pattern, index) => ({
  ...pattern,
  ...patternImageOverrides[pattern.id],
  previewImage: patternImageOverrides[pattern.id]?.previewImage
    || collectedMaterials[index % collectedMaterials.length]?.src,
}))

export const keywordMap = [
  { keyword: '平安', patternId: 'huiwen', blessing: '岁岁平安' },
  { keyword: '富贵', patternId: 'mudan', blessing: '年年富贵' },
  { keyword: '长寿', patternId: 'shouzi', blessing: '福寿绵长' },
  { keyword: '喜庆', patternId: 'shuangxi', blessing: '喜事成双' },
  { keyword: '自由', patternId: 'hudie', blessing: '自在生长' },
  { keyword: '坚韧', patternId: 'chanzhi-lian', blessing: '清正坚韧' },
  { keyword: '智慧', patternId: 'chanzhi-lian', blessing: '心有清明' },
  { keyword: '团圆', patternId: 'shiliu', blessing: '家人团圆' },
]
