import { Card } from '@/models/card'

export const card = () => new Card({
  id: '123123',
  alias: '123123',
  name: 'Card name',
  likes: 250,
  liked: false
})

export const cards = [card(), card(), card()]
