import { Strategy } from '@/models/strategy'
import { randomBool, randomNumber } from '@/helpers/random'

export const strategy = () => new Strategy({
  id: '123123',
  name: 'Strategy name',
  likes: randomNumber(0, 999),
  liked: randomBool(),
  author: 'author_id',
  roles: ['battle', 'explore'],
  subroles: ['tank', 'damage', 'engineer'],
  ammo: ['smg', 'free'],
  cleaners: ['doc', 'mom'],
  difficulty: ['nightmare', 'any']
})

export const strategies = [strategy(), strategy(), strategy()]

export default strategy()
