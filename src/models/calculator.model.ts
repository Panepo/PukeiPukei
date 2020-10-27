export interface CalcInput {
  type: number // 武器別
  atk: number
  cri: number
  etype: number
  ele: number
  sha: number // 斬味
  agil: number // 挑戰者
  maxp: number // 無傷
  hate: number // 怨恨
  weak: number // 弱點特效
  mind: number // 渾身
  real: number // 力量解放
  crip: number // 超會心
  ecri: number // 屬性會心
  eadd: number // 屬性加速
  safi: number // 龍脈覺醒
}

export interface StructData {
  id: number
  text: string
}

export interface StructDataValue {
  id: number
  text: string
  value: number
}

export interface StructDataValue2 {
  id: number
  text: string
  value1: number
  value2: number
}

export interface StructDataValue3 {
  id: number
  text: string
  value1: number
  value2: number
  value3: number
}
