export const buildParam = (param: any): any => {
  if (!param) {
    return {}
  }
  const keys = Object.keys(param).filter(
    (key) => param[key] != null && param[key] != undefined && param[key] != '' || param[key] == 0
  )
  const result: any = {}
  keys.forEach((key) => {
    result[key] = param[key]
  })

  return result
}
