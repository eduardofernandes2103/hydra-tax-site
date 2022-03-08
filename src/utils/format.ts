export const currencyFormat = (value: any) => {
  if (value !== undefined) {
    let result = value!.replaceAll('.', '').replaceAll(',', '')
    return result
  }
}

export const currencyToString = (value: number) => {
  const convertNumber = `${value}`
  const newValue = value > 1 ? `${convertNumber.slice(0, -2)},${convertNumber.slice(-2)}` : "0,00"

  return newValue
}
