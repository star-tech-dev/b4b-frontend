import { Strategy } from '@/models/strategy'
import { randomBool, randomNumber } from '@/helpers/random'
import { deck } from '@/mock/card'

export const strategy = () => new Strategy({
  id: '123123',
  name: 'Strategy name',
  likes: randomNumber(0, 999),
  liked: randomBool(),
  author: 'author_id',
  roles: ['attack', 'agility'],
  subroles: ['tank', 'damage', 'engineer', 'runner'],
  ammo: ['smg', 'free'],
  cleaners: ['doc', 'mom'],
  difficulty: ['nightmare', 'any'],
  deck
})

export const strategies = [strategy(), strategy(), strategy()]

export default strategy()
