export const randomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const randomBool = (): boolean => {
  return !!randomNumber(0, 1)
}
