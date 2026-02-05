// The 64 Hexagrams of the I Ching
const hexagrams = [
  {
    number: 1,
    name: "The Creative",
    chinese: "乾 Qián",
    description: "Pure yang energy, creative force, heaven",
    judgment: "The Creative works sublime success, furthering through perseverance."
  },
  {
    number: 2,
    name: "The Receptive",
    chinese: "坤 Kūn",
    description: "Pure yin energy, receptive force, earth",
    judgment: "The Receptive brings about sublime success, furthering through the perseverance of a mare."
  },
  {
    number: 3,
    name: "Difficulty at the Beginning",
    chinese: "屯 Zhūn",
    description: "Initial difficulties, chaos seeking order",
    judgment: "Difficulty at the Beginning works supreme success, furthering through perseverance."
  },
  {
    number: 4,
    name: "Youthful Folly",
    chinese: "蒙 Méng",
    description: "Inexperience, need for teaching and learning",
    judgment: "Youthful Folly has success. It is not I who seek the young fool; the young fool seeks me."
  },
  {
    number: 5,
    name: "Waiting",
    chinese: "需 Xū",
    description: "Patient waiting, nourishment",
    judgment: "Waiting. If you are sincere, you have light and success. Perseverance brings good fortune."
  },
  {
    number: 6,
    name: "Conflict",
    chinese: "訟 Sòng",
    description: "Dispute, inner tension",
    judgment: "Conflict. You are sincere and are being obstructed. A cautious halt halfway brings good fortune."
  },
  {
    number: 7,
    name: "The Army",
    chinese: "師 Shī",
    description: "Collective force, discipline",
    judgment: "The Army. The army needs perseverance and a strong man. Good fortune without blame."
  },
  {
    number: 8,
    name: "Holding Together",
    chinese: "比 Bǐ",
    description: "Union, seeking harmony",
    judgment: "Holding Together brings good fortune. Inquire of the oracle once again whether you possess sublimity, constancy, and perseverance."
  },
  {
    number: 9,
    name: "Small Taming",
    chinese: "小畜 Xiǎo Chù",
    description: "Gentle restraint, small accumulation",
    judgment: "The Taming Power of the Small has success. Dense clouds, no rain from our western region."
  },
  {
    number: 10,
    name: "Treading",
    chinese: "履 Lǚ",
    description: "Correct conduct, treading carefully",
    judgment: "Treading. Treading upon the tail of the tiger. It does not bite the man. Success."
  },
  {
    number: 11,
    name: "Peace",
    chinese: "泰 Tài",
    description: "Harmony, prosperity",
    judgment: "Peace. The small departs, the great approaches. Good fortune. Success."
  },
  {
    number: 12,
    name: "Standstill",
    chinese: "否 Pǐ",
    description: "Stagnation, obstruction",
    judgment: "Standstill. Evil people do not further the perseverance of the superior man. The great departs; the small approaches."
  },
  {
    number: 13,
    name: "Fellowship",
    chinese: "同人 Tóng Rén",
    description: "Community, fellowship with others",
    judgment: "Fellowship with men in the open. Success. It furthers one to cross the great water."
  },
  {
    number: 14,
    name: "Great Possession",
    chinese: "大有 Dà Yǒu",
    description: "Abundance, great wealth",
    judgment: "Possession in Great Measure. Supreme success."
  },
  {
    number: 15,
    name: "Modesty",
    chinese: "謙 Qiān",
    description: "Humility, moderation",
    judgment: "Modesty creates success. The superior man carries things through."
  },
  {
    number: 16,
    name: "Enthusiasm",
    chinese: "豫 Yù",
    description: "Joy, enthusiasm",
    judgment: "Enthusiasm. It furthers one to install helpers and to set armies marching."
  },
  {
    number: 17,
    name: "Following",
    chinese: "隨 Suí",
    description: "Adaptability, following",
    judgment: "Following has supreme success. Perseverance furthers. No blame."
  },
  {
    number: 18,
    name: "Work on the Decayed",
    chinese: "蠱 Gǔ",
    description: "Decay, correcting errors",
    judgment: "Work on what has been spoiled has supreme success. It furthers one to cross the great water."
  },
  {
    number: 19,
    name: "Approach",
    chinese: "臨 Lín",
    description: "Advance, nearing",
    judgment: "Approach has supreme success. Perseverance furthers."
  },
  {
    number: 20,
    name: "Contemplation",
    chinese: "觀 Guān",
    description: "Observation, viewing",
    judgment: "Contemplation. The ablution has been made, but not yet the offering. Full of trust they look up to him."
  },
  {
    number: 21,
    name: "Biting Through",
    chinese: "噬嗑 Shì Kè",
    description: "Deciding, biting through obstacles",
    judgment: "Biting Through has success. It is favorable to let justice be administered."
  },
  {
    number: 22,
    name: "Grace",
    chinese: "賁 Bì",
    description: "Beauty, elegance",
    judgment: "Grace has success. In small matters it is favorable to undertake something."
  },
  {
    number: 23,
    name: "Splitting Apart",
    chinese: "剝 Bō",
    description: "Disintegration, splitting",
    judgment: "Splitting Apart. It does not further one to go anywhere."
  },
  {
    number: 24,
    name: "Return",
    chinese: "復 Fù",
    description: "Turning point, renewal",
    judgment: "Return. Success. Going out and coming in without error. Friends come without blame."
  },
  {
    number: 25,
    name: "Innocence",
    chinese: "無妄 Wú Wàng",
    description: "The unexpected, natural spontaneity",
    judgment: "Innocence. Supreme success. Perseverance furthers. If someone is not as he should be, he has misfortune."
  },
  {
    number: 26,
    name: "Great Taming",
    chinese: "大畜 Dà Chù",
    description: "Great accumulation, restraint",
    judgment: "The Taming Power of the Great. Perseverance furthers. Not eating at home brings good fortune."
  },
  {
    number: 27,
    name: "Nourishment",
    chinese: "頤 Yí",
    description: "Providing nourishment, sustenance",
    judgment: "The Corners of the Mouth. Perseverance brings good fortune. Pay heed to the providing of nourishment."
  },
  {
    number: 28,
    name: "Great Excess",
    chinese: "大過 Dà Guò",
    description: "Extraordinary measures, preponderance",
    judgment: "Preponderance of the Great. The ridgepole sags to the breaking point. It furthers one to have somewhere to go."
  },
  {
    number: 29,
    name: "The Abysmal Water",
    chinese: "坎 Kǎn",
    description: "Danger, the abyss",
    judgment: "The Abysmal repeated. If you are sincere, you have success in your heart, and whatever you do succeeds."
  },
  {
    number: 30,
    name: "The Clinging Fire",
    chinese: "離 Lí",
    description: "Light, fire, clarity",
    judgment: "The Clinging. Perseverance furthers. It brings success. Care of the cow brings good fortune."
  },
  {
    number: 31,
    name: "Influence",
    chinese: "咸 Xián",
    description: "Mutual attraction, courtship",
    judgment: "Influence. Success. Perseverance furthers. To take a maiden to wife brings good fortune."
  },
  {
    number: 32,
    name: "Duration",
    chinese: "恆 Héng",
    description: "Continuity, endurance",
    judgment: "Duration. Success. No blame. Perseverance furthers. It furthers one to have somewhere to go."
  },
  {
    number: 33,
    name: "Retreat",
    chinese: "遯 Dùn",
    description: "Withdrawal, yielding",
    judgment: "Retreat. Success. In what is small, perseverance furthers."
  },
  {
    number: 34,
    name: "Great Power",
    chinese: "大壯 Dà Zhuàng",
    description: "Great vigor, power",
    judgment: "The Power of the Great. Perseverance furthers."
  },
  {
    number: 35,
    name: "Progress",
    chinese: "晉 Jìn",
    description: "Advancement, progress",
    judgment: "Progress. The powerful prince is honored with horses in large numbers. In a single day he is granted audience three times."
  },
  {
    number: 36,
    name: "Darkening of the Light",
    chinese: "明夷 Míng Yí",
    description: "Censorship, concealment",
    judgment: "Darkening of the light. In adversity it furthers one to be persevering."
  },
  {
    number: 37,
    name: "The Family",
    chinese: "家人 Jiā Rén",
    description: "The clan, family life",
    judgment: "The Family. The perseverance of the woman furthers."
  },
  {
    number: 38,
    name: "Opposition",
    chinese: "睽 Kuí",
    description: "Contradiction, disunion",
    judgment: "Opposition. In small matters, good fortune."
  },
  {
    number: 39,
    name: "Obstruction",
    chinese: "蹇 Jiǎn",
    description: "Difficulty, obstacles",
    judgment: "Obstruction. The southwest furthers. The northeast does not further. It furthers one to see the great man."
  },
  {
    number: 40,
    name: "Deliverance",
    chinese: "解 Xiè",
    description: "Release, liberation",
    judgment: "Deliverance. The southwest furthers. If there is no longer anything where one has to go, return brings good fortune."
  },
  {
    number: 41,
    name: "Decrease",
    chinese: "損 Sǔn",
    description: "Diminishing, loss",
    judgment: "Decrease combined with sincerity brings about supreme good fortune without blame."
  },
  {
    number: 42,
    name: "Increase",
    chinese: "益 Yì",
    description: "Expansion, gain",
    judgment: "Increase. It furthers one to undertake something. It furthers one to cross the great water."
  },
  {
    number: 43,
    name: "Breakthrough",
    chinese: "夬 Guài",
    description: "Resoluteness, determination",
    judgment: "Breakthrough. One must resolutely make the matter known at the court of the king."
  },
  {
    number: 44,
    name: "Coming to Meet",
    chinese: "姤 Gòu",
    description: "Encountering, temptation",
    judgment: "Coming to Meet. The maiden is powerful. One should not marry such a maiden."
  },
  {
    number: 45,
    name: "Gathering Together",
    chinese: "萃 Cuì",
    description: "Collecting, assembly",
    judgment: "Gathering Together. Success. The king approaches his temple. It furthers one to see the great man."
  },
  {
    number: 46,
    name: "Pushing Upward",
    chinese: "升 Shēng",
    description: "Ascending, growth",
    judgment: "Pushing Upward has supreme success. One must see the great man. Fear not. Departure toward the south brings good fortune."
  },
  {
    number: 47,
    name: "Oppression",
    chinese: "困 Kùn",
    description: "Exhaustion, adversity",
    judgment: "Oppression. Success. Perseverance. The great man brings about good fortune. No blame."
  },
  {
    number: 48,
    name: "The Well",
    chinese: "井 Jǐng",
    description: "The source, nourishment",
    judgment: "The Well. The town may be changed, but the well cannot be changed. It neither decreases nor increases."
  },
  {
    number: 49,
    name: "Revolution",
    chinese: "革 Gé",
    description: "Change, transformation",
    judgment: "Revolution. On your own day you are believed. Supreme success, furthering through perseverance."
  },
  {
    number: 50,
    name: "The Cauldron",
    chinese: "鼎 Dǐng",
    description: "The vessel, nourishment",
    judgment: "The Cauldron. Supreme good fortune. Success."
  },
  {
    number: 51,
    name: "The Arousing",
    chinese: "震 Zhèn",
    description: "Thunder, shock",
    judgment: "Shock brings success. Shock comes—oh, oh! Laughing words—ha, ha!"
  },
  {
    number: 52,
    name: "Keeping Still",
    chinese: "艮 Gèn",
    description: "Mountain, stillness",
    judgment: "Keeping Still. Keeping his back still so that he no longer feels his body."
  },
  {
    number: 53,
    name: "Development",
    chinese: "漸 Jiàn",
    description: "Gradual progress, advancement",
    judgment: "Development. The maiden is given in marriage. Good fortune. Perseverance furthers."
  },
  {
    number: 54,
    name: "The Marrying Maiden",
    chinese: "歸妹 Guī Mèi",
    description: "The younger sister, propriety",
    judgment: "The Marrying Maiden. Undertakings bring misfortune. Nothing that would further."
  },
  {
    number: 55,
    name: "Abundance",
    chinese: "豐 Fēng",
    description: "Fullness, prosperity",
    judgment: "Abundance has success. The king attains abundance. Be not sad. Be like the sun at midday."
  },
  {
    number: 56,
    name: "The Wanderer",
    chinese: "旅 Lǚ",
    description: "The stranger, travel",
    judgment: "The Wanderer. Success through smallness. Perseverance brings good fortune to the wanderer."
  },
  {
    number: 57,
    name: "The Gentle",
    chinese: "巽 Xùn",
    description: "Wind, penetration",
    judgment: "The Gentle. Success through what is small. It furthers one to have somewhere to go."
  },
  {
    number: 58,
    name: "The Joyous",
    chinese: "兌 Duì",
    description: "Lake, joy",
    judgment: "The Joyous. Success. Perseverance is favorable."
  },
  {
    number: 59,
    name: "Dispersion",
    chinese: "渙 Huàn",
    description: "Dissolution, dispersal",
    judgment: "Dispersion. Success. The king approaches his temple. It furthers one to cross the great water."
  },
  {
    number: 60,
    name: "Limitation",
    chinese: "節 Jié",
    description: "Boundaries, regulation",
    judgment: "Limitation. Success. Galling limitation must not be persevered in."
  },
  {
    number: 61,
    name: "Inner Truth",
    chinese: "中孚 Zhōng Fú",
    description: "Sincerity, inner confidence",
    judgment: "Inner Truth. Pigs and fishes. Good fortune. It furthers one to cross the great water."
  },
  {
    number: 62,
    name: "Small Exceeding",
    chinese: "小過 Xiǎo Guò",
    description: "Small surpassing, minor excess",
    judgment: "Preponderance of the Small. Success. Perseverance furthers. Small things may be done; great things should not be done."
  },
  {
    number: 63,
    name: "After Completion",
    chinese: "既濟 Jì Jì",
    description: "Order, completion",
    judgment: "After Completion. Success in small matters. Perseverance furthers. At the beginning good fortune, at the end disorder."
  },
  {
    number: 64,
    name: "Before Completion",
    chinese: "未濟 Wèi Jì",
    description: "Transition, not yet complete",
    judgment: "Before Completion. Success. But if the little fox, after nearly completing the crossing, gets his tail in the water, there is nothing that would further."
  }
];

module.exports = hexagrams;
