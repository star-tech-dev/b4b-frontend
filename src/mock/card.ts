import { Card } from '@/models/card'
import { randomBool, randomNumber } from '@/helpers/random'

export const card = () => new Card({
  id: '123123',
  alias: '123123',
  name: 'Card name',
  likes: randomNumber(0, 999),
  liked: randomBool()
})

export const cards = [card(), card(), card()]
