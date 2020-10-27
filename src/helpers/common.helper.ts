export const getValueById = (datas: any[], id: string, key: string) => {
  let result: number = 0
  datas.some((data: object) => {
    const name = key as keyof typeof data
    const idkey = 'id' as keyof typeof data
    if (data[idkey] === id) {
      result = data[name]
      return true
    } else return false
  })
  return result
}

export const getTextById = (datas: any[], id: string) => {
  let result: string = ''
  datas.some((data: object) => {
    const idkey = 'id' as keyof typeof data
    const idText = 'text' as keyof typeof data
    if (data[idkey] === id) {
      result = data[idText]
      return true
    } else return false
  })
  return result
}
