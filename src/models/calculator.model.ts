export interface CalcInput {
  type: string // 武器別
  atk: string
  cri: string
  etype: string
  ele: string
  sha: string // 斬味
  agil: string // 挑戰者
  maxp: string // 無傷
  hate: string // 怨恨
  weak: string // 弱點特效
  mind: string // 渾身
  real: string // 力量解放
  crip: string // 超會心
  ecri: string // 屬性會心
  scri: string // 特殊會心
  eadd: string // 屬性加速
  safi: string // 龍脈覺醒
  bane: string // 災禍轉福
}

export interface CalcOutput {
  cri: string
  atk: string
  ele: string
}

export interface StructData {
  id: string
  text: string
}

export interface StructDataValue {
  id: string
  text: string
  value: number
}

export interface StructDataValue2 {
  id: string
  text: string
  value1: number
  value2: number
}

export interface StructDataValue3 {
  id: string
  text: string
  value1: number
  value2: number
  value3: number
}
