import { Layout } from '../models/common.model'
import * as Data from './calculator.const'

export const skillAttack: Layout[] = [
  { text: '挑戰者', id: 'agil', data: Data.skillAgil },
  { text: '無傷', id: 'maxp', data: Data.skillMaxp },
  { text: '怨恨', id: 'hate', data: Data.skillHate }
]

export const skillCrit: Layout[] = [
  { text: '弱點特效', id: 'weak', data: Data.skillWeak },
  { text: '渾身', id: 'mind', data: Data.skillMind },
  { text: '力量解放', id: 'real', data: Data.skillReal }
]

export const skillCrip: Layout[] = [
  { text: '災禍轉福', id: 'bane', data: Data.skillBane },
  { text: '超會心', id: 'crip', data: Data.skillCrip },
  { text: '屬性會心', id: 'ecri', data: Data.skillEcri },
  { text: '特殊會心', id: 'scri', data: Data.skillScri },
  { text: '屬性加速', id: 'eadd', data: Data.skillEadd },
  { text: '龍脈覺醒', id: 'safi', data: Data.skillSafi }
]

export const skillItem: Layout[] = [
  { text: '貓飯', id: 'cat', data: Data.itemCat },
  { text: '飲品', id: 'drink', data: Data.itemDrink },
  { text: '食品', id: 'food', data: Data.itemFood },
  { text: '粉塵', id: 'dust', data: Data.itemDust },
  { text: '力量之符', id: 'slot1', data: Data.itemSlot1 },
  { text: '力量之爪', id: 'slot2', data: Data.itemSlot2 }
]
