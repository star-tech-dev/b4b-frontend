export const repeat = (input: any, times: number) => {
  const res = []
  for (let i = 0; i < times; i++) {
    res.push(typeof input === 'function' ? input() : input)
  }
  return res
}
