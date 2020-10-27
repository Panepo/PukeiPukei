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
  { text: '超會心', id: 'crip', data: Data.skillCrip },
  { text: '屬性會心', id: 'ecri', data: Data.skillEcri },
  { text: '屬性加速', id: 'eadd', data: Data.skillEadd },
  { text: '龍脈覺醒', id: 'safi', data: Data.skillSafi }
]
