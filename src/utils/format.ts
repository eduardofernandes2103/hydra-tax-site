export const currencyFormat = (value: any) => {
  if(value !== undefined) {
    let result = value!.replaceAll('.', '').replaceAll(',','')
    return result
  }
}
