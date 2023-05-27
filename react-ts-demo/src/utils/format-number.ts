export function tranNumber(num: number, point: number) {
  const numStr = num.toString().split('.')[0]
  if (numStr.length < 6) {
    return numStr
  } else if (numStr.length >= 6 && numStr.length <= 8) {
    return Math.ceil(num / 10000) + '万'
  } else if (numStr.length > 8) {
    return Math.ceil(num / 100000000) + '亿'
  }
}
