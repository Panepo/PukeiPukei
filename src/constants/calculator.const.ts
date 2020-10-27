import {
  StructData,
  StructDataValue,
  StructDataValue2,
  StructDataValue3
} from '../models/calculator.model'

export const weaponType: StructDataValue[] = [
  { id: '0', text: '大劍', value: 4.8 },
  { id: '1', text: '太刀', value: 3.3 },
  { id: '2', text: '片手剣', value: 1.4 },
  { id: '3', text: '双剣', value: 1.4 },
  { id: '4', text: 'ハンマー', value: 5.2 },
  { id: '5', text: '狩猟笛', value: 4.2 },
  { id: '6', text: 'ランス', value: 2.3 },
  { id: '7', text: 'ガンランス', value: 2.3 },
  { id: '8', text: 'スラッシュアックス', value: 3.5 },
  { id: '9', text: 'チャージアックス', value: 3.6 },
  { id: '10', text: '操虫棍', value: 3.1 },
  { id: '11', text: 'ライトボウガン', value: 1.3 },
  { id: '12', text: 'ヘビィボウガン', value: 1.5 },
  { id: '13', text: '弓', value: 1.2 }
]

export const eleType: StructData[] = [
  { id: '0', text: '無' },
  { id: '1', text: '火' },
  { id: '2', text: '冰' },
  { id: '3', text: '水' },
  { id: '4', text: '雷' },
  { id: '5', text: '龍' },
  { id: '6', text: '毒' },
  { id: '7', text: '眠' },
  { id: '8', text: '麻' },
  { id: '9', text: '爆' }
]

export const shaType: StructDataValue2[] = [
  { id: '0', text: '紫', value1: 1.39, value2: 1.25 },
  { id: '1', text: '白', value1: 1.32, value2: 1.15 },
  { id: '2', text: '青', value1: 1.2, value2: 1.0625 },
  { id: '3', text: '綠', value1: 1.05, value2: 1.0 },
  { id: '4', text: '黃', value1: 1.0, value2: 0.75 },
  { id: '5', text: '橙', value1: 0.75, value2: 0.5 },
  { id: '6', text: '赤', value1: 0.5, value2: 0.25 }
]

export const skillAgil: StructDataValue2[] = [
  { id: '0', text: '', value1: 0, value2: 0 },
  { id: '1', text: '挑戰者 Lv1', value1: 4, value2: 5 },
  { id: '2', text: '挑戰者 Lv2', value1: 8, value2: 5 },
  { id: '3', text: '挑戰者 Lv3', value1: 12, value2: 7 },
  { id: '4', text: '挑戰者 Lv4', value1: 16, value2: 7 },
  { id: '5', text: '挑戰者 Lv5', value1: 20, value2: 10 },
  { id: '6', text: '挑戰者 Lv6', value1: 24, value2: 15 },
  { id: '7', text: '挑戰者 Lv7', value1: 28, value2: 20 }
]

export const skillMaxp: StructDataValue[] = [
  { id: '0', text: '', value: 0 },
  { id: '1', text: '無傷 Lv1', value: 5 },
  { id: '2', text: '無傷 Lv2', value: 10 },
  { id: '3', text: '無傷 Lv3', value: 20 }
]

export const skillHate: StructDataValue[] = [
  { id: '0', text: '', value: 0 },
  { id: '1', text: '怨恨 Lv1', value: 5 },
  { id: '2', text: '怨恨 Lv2', value: 10 },
  { id: '3', text: '怨恨 Lv3', value: 15 },
  { id: '4', text: '怨恨 Lv4', value: 20 },
  { id: '5', text: '怨恨 Lv5', value: 25 }
]

export const skillWeak: StructDataValue2[] = [
  { id: '0', text: '', value1: 0, value2: 0 },
  { id: '1', text: '弱點特效 Lv1', value1: 10, value2: 15 },
  { id: '2', text: '弱點特效 Lv2', value1: 15, value2: 30 },
  { id: '3', text: '弱點特效 Lv3', value1: 30, value2: 50 }
]

export const skillMind: StructDataValue[] = [
  { id: '0', text: '', value: 0 },
  { id: '1', text: '渾身 Lv1', value: 10 },
  { id: '2', text: '渾身 Lv2', value: 20 },
  { id: '3', text: '渾身 Lv3', value: 30 },
  { id: '4', text: '渾身 Lv4', value: 40 },
  { id: '5', text: '渾身 Lv5', value: 40 }
]

export const skillReal: StructDataValue[] = [
  { id: '0', text: '', value: 0 },
  { id: '1', text: '力量解放 Lv1', value: 10 },
  { id: '2', text: '力量解放 Lv2', value: 20 },
  { id: '3', text: '力量解放 Lv3', value: 30 },
  { id: '4', text: '力量解放 Lv4', value: 40 },
  { id: '5', text: '力量解放 Lv5', value: 50 },
  { id: '6', text: '力量解放 Lv6', value: 50 },
  { id: '7', text: '力量解放 Lv7', value: 60 }
]

export const skillCrip: StructDataValue[] = [
  { id: '0', text: '', value: 0.25 },
  { id: '1', text: '超會心 Lv1', value: 0.3 },
  { id: '2', text: '超會心 Lv2', value: 0.35 },
  { id: '3', text: '超會心 Lv3', value: 0.4 }
]

export const skillEcri: StructDataValue2[] = [
  { id: '0', text: '', value1: 0, value2: 0 },
  { id: '1', text: '屬性會心', value1: 0.35, value2: 0.5 },
  { id: '2', text: '真屬性會心', value1: 0.5, value2: 0.7 }
]

export const skillEcriWeapon: string[] = ['0', '4', '5', '12']

export const skillScri: StructDataValue2[] = [
  { id: '0', text: '', value1: 0, value2: 0 },
  { id: '1', text: '特殊會心', value1: 0.2, value2: 0.4 },
  { id: '2', text: '真特殊會心', value1: 0.4, value2: 0.6 }
]

export const skillEadd: StructDataValue[] = [
  { id: '0', text: '', value: 0 },
  { id: '1', text: '屬性加速', value: 60 },
  { id: '2', text: '真屬性加速', value: 150 }
]

export const skillSafi: StructDataValue3[] = [
  { id: '0', text: '', value1: 0, value2: 0, value3: 0 },
  { id: '1', text: '龍脈覺醒', value1: 80, value2: 80, value3: 20 },
  { id: '2', text: '真龍脈覺醒', value1: 150, value2: 120, value3: 40 }
]
