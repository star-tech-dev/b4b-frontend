export const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomString = () => {
  return Math.random().toFixed(10).slice(2)
}

export const randomBool = (): boolean => {
  return !!randomNumber(0, 1)
}
