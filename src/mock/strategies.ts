import { Strategy } from '@/models/strategy'

export const strategy = () => new Strategy({
  id: '123123',
  name: 'Name',
  likes: 250,
  liked: false,
  author: 'author_id',
  roles: ['battle', 'explore'],
  subroles: ['tank', 'damage', 'engineer'],
  ammo: ['smg', 'free'],
  cleaners: ['doc', 'mom'],
  difficulty: ['nightmare', 'any']
})

export const strategies = [strategy(), strategy(), strategy()]

export default strategy()
