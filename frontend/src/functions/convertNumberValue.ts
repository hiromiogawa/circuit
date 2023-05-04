// inputに登録されたnumberにしたい値を変換する
const convertNumberValue = (value: string): number | string => {
  const convertedValue = Number(value)
  return Number.isNaN(convertedValue) ? value : convertedValue
}

export default convertNumberValue
