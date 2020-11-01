import * as calculator from './calculator.helper'
import { CalcInput } from '../models/calculator.model'

describe('Helpere >> calculator helper test', () => {
  test('helper functions', () => {
    const input1: CalcInput = {
      type: '1', // 武器別
      atk: '330',
      cri: '10',
      etype: '1',
      ele: '100',
      sha: '0', // 斬味
      agil: '1', // 挑戰者
      maxp: '1', // 無傷
      hate: '1', // 怨恨
      weak: '1', // 弱點特效
      mind: '1', // 渾身
      real: '1', // 力量解放
      crip: '1', // 超會心
      ecri: '1', // 屬性會心
      scri: '1', // 特殊會心
      eadd: '1', // 屬性加速
      safi: '1', // 龍脈覺醒
      bane: '1', // 災禍轉福
      cat: '0',
      drink: '0',
      food: '0',
      dust: '0',
      slot1: '0',
      slot2: '0'
    }

    expect(calculator.calcCritical(input1)).toBe(70)
    expect(Math.round(calculator.calcAttack(input1, 70))).toBe(212)
    expect(Math.round(calculator.calcElement(input1, 70))).toBe(420)

    const input2: CalcInput = {
      type: '1', // 武器別
      atk: '330',
      cri: '100',
      etype: '0',
      ele: '100',
      sha: '0', // 斬味
      agil: '1', // 挑戰者
      maxp: '1', // 無傷
      hate: '1', // 怨恨
      weak: '1', // 弱點特效
      mind: '1', // 渾身
      real: '1', // 力量解放
      crip: '1', // 超會心
      ecri: '1', // 屬性會心
      scri: '1', // 特殊會心
      eadd: '1', // 屬性加速
      safi: '1', // 龍脈覺醒
      bane: '1', // 災禍轉福
      cat: '0',
      drink: '0',
      food: '0',
      dust: '0',
      slot1: '0',
      slot2: '0'
    }

    expect(calculator.calcCritical(input2)).toBe(100)
    expect(Math.round(calculator.calcElement(input2, 70))).toBe(0)

    const input3: CalcInput = {
      type: '1', // 武器別
      atk: '330',
      cri: '10',
      etype: '9',
      ele: '100',
      sha: '0', // 斬味
      agil: '1', // 挑戰者
      maxp: '1', // 無傷
      hate: '1', // 怨恨
      weak: '1', // 弱點特效
      mind: '1', // 渾身
      real: '1', // 力量解放
      crip: '1', // 超會心
      ecri: '1', // 屬性會心
      scri: '1', // 特殊會心
      eadd: '1', // 屬性加速
      safi: '1', // 龍脈覺醒
      bane: '1', // 災禍轉福
      cat: '0',
      drink: '0',
      food: '0',
      dust: '0',
      slot1: '0',
      slot2: '0'
    }

    expect(Math.round(calculator.calcElement(input3, 70))).toBe(215)
  })
})
