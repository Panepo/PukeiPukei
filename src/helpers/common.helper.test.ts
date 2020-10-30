import * as common from './common.helper'
import { weaponType } from '../constants/calculator.const'

describe('Helpere >> common helper test', () => {
  test('helper functions', () => {
    expect(common.getTextById(weaponType, '1')).toBe('太刀')
    expect(common.getValueById(weaponType, '1', 'value')).toBe(3.3)
  })
})
