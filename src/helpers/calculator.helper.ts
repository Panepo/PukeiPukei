import * as Data from '../constants/calculator.const'
import {
  CalcInput,
  SpecOutput,
  StructDataValue
} from '../models/calculator.model'
import { getValueById } from './common.helper'

export const calcCritical = (input: CalcInput) => {
  let result: number = parseInt(input.cri, 0)
  const criAgil = getValueById(Data.skillAgil, input.agil, 'value2')
  const criWeak = getValueById(Data.skillWeak, input.weak, 'value2')
  const criMind = getValueById(Data.skillMind, input.mind, 'value')
  const criReal = getValueById(Data.skillReal, input.real, 'value')
  const criSafi = getValueById(Data.skillSafi, input.safi, 'value3')
  result = result + criAgil + criWeak + criMind + criReal + criSafi
  return result > 100 ? 100 : result
}

export const calcAttack = (input: CalcInput, crit: number) => {
  const mul = getValueById(Data.weaponType, input.type, 'value')
  let atk = Math.round(parseInt(input.atk, 0) / mul)
  const atkAgil = getValueById(Data.skillAgil, input.agil, 'value1')
  const atkMaxp = getValueById(Data.skillMaxp, input.maxp, 'value')
  const atkHate = getValueById(Data.skillHate, input.hate, 'value')
  const atkBane = getValueById(Data.skillBane, input.bane, 'value1')
  atk = atk + atkAgil + atkMaxp + atkHate + atkBane

  const sha = getValueById(Data.shaType, input.sha, 'value1')
  atk = atk * sha

  const crip = getValueById(Data.skillCrip, input.crip, 'value')
  atk = atk * (1 + (crit / 100) * crip)
  return atk
}

export const calcElement = (input: CalcInput, crit: number) => {
  const etype = parseInt(input.etype, 0)

  if (etype === 0) {
    return 0
  } else if (etype <= 5) {
    let ele: number = parseInt(input.ele, 0)
    const eleEadd = getValueById(Data.skillEadd, input.eadd, 'value')
    const eleSafi = getValueById(Data.skillSafi, input.safi, 'value1')
    const eleBane = getValueById(Data.skillBane, input.bane, 'value2')
    ele = ele + eleEadd + eleSafi + eleBane

    const sha = getValueById(Data.shaType, input.sha, 'value2')
    ele = ele * sha

    const keyCri =
      Data.skillEcriWeapon.indexOf(input.type) >= 0 ? 'value2' : 'value1'
    const crip = getValueById(Data.skillEcri, input.ecri, keyCri)
    ele = ele * (1 + (crit / 100) * crip)
    return ele
  } else {
    let sta: number = parseInt(input.ele, 0)
    const staSafi = getValueById(Data.skillSafi, input.safi, 'value2')
    sta = sta + staSafi

    const staBane = getValueById(Data.skillBane, input.bane, 'value3')
    sta = sta * staBane

    const keyCri =
      Data.skillEcriWeapon.indexOf(input.type) >= 0 ? 'value2' : 'value1'
    const crip = getValueById(Data.skillScri, input.scri, keyCri)
    sta = sta * (1 + (crit / 100) * crip)
    return sta
  }
}

export const calcSpecOutput = (
  type: string,
  atk: number,
  ele: number
): SpecOutput[] => {
  switch (type) {
    case '1':
      return Data.outLong.reduce((output: any[], data: StructDataValue) => {
        output.push({ text: data.text, value: Math.round(atk * data.value) })
        return output
      }, [])
    case '4':
      return Data.outHammer.reduce((output: any[], data: StructDataValue) => {
        output.push({ text: data.text, value: Math.round(atk * data.value) })
        return output
      }, [])
    case '10':
      return Data.outRod.reduce((output: any[], data: StructDataValue) => {
        output.push({ text: data.text, value: Math.round(atk * data.value) })
        return output
      }, [])
    case '13':
      return Data.outBow.reduce((output: any[], data: StructDataValue) => {
        output.push({ text: data.text, value: Math.round(atk * data.value) })
        return output
      }, [])
    case '8':
      return [
        {
          text: Data.outSlash[0].text,
          value: Math.round(atk * Data.outSlash[0].value)
        },
        {
          text: Data.outSlash[1].text,
          value: Math.round(ele * Data.outSlash[1].value)
        }
      ]
    default:
      return []
  }
}
