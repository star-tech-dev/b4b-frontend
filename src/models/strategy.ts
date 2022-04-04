import type { CleanerID, GameDifficulty, GameRole, GameSubrole, WeaponAmmo } from '../../env'
import type { CardProps } from './card'
import { Card } from './card'

export type DeckAmmo = WeaponAmmo | 'free'
export type DeckDifficulty = GameDifficulty | 'any'

export interface StrategyProps {
  id?: string,
  name?: string,
  likes?: number,
  liked?: boolean,
  author?: string,
  roles?: GameRole[],
  subroles?: GameSubrole[],
  ammo?: DeckAmmo[],
  cleaners?: CleanerID[]
  difficulty?: DeckDifficulty[],
  cards?: Card[]
}

export class Strategy {
  public id: string
  public name: string
  public author: string | null
  public roles: GameRole[]
  public subroles: GameSubrole[]
  public ammo: DeckAmmo[]
  public cleaners: CleanerID[]
  public difficulty: DeckDifficulty[]
  public cards: Card[]

  public likes: number
  public liked: boolean

  constructor (props: StrategyProps = {}) {
    this.id = props.id || Math.random().toFixed(10).slice(2)
    this.name = props.name || 'Unnamed Strategy'
    this.author = props.author || null
    this.roles = props.roles || []
    this.subroles = props.subroles || []
    this.ammo = props.ammo || []
    this.cleaners = props.cleaners || []
    this.difficulty = props.difficulty || []
    this.cards = props.cards ? props.cards.map(i => new Card(i as CardProps)) : []

    this.likes = props.likes || 0
    this.liked = props.liked || false
  }

}
