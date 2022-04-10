import { Card } from '@/models/card'
import { randomBool, randomNumber } from '@/helpers/random'
import { repeat } from '@/helpers/repeat'

export const card = () => new Card({
  id: '123123',
  alias: '123123',
  name: 'Card name',
  cleaners: [],

  likes: randomNumber(0, 999),
  liked: randomBool()
})

export const deck = repeat(card(), 15)

export const cards = (amount = 5) => repeat(card(), amount)
