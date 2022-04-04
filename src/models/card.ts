import type { StatIndicator } from '../../env'
import type { FeatureProps } from './feature'
import { Feature } from './feature'

export type CardClass = 'reflex' | 'discipline' | 'brawn' | 'fortune'
export type CardType = 'offence' | 'defence' | 'utility' | 'mobility'

export interface CardProps {
  id?: string,
  alias?: string,
  name?: string,
  class?: CardClass,
  type?: CardType,
  statIndicator?: StatIndicator,
  features?: Feature[],
  affects?: Feature[],
  likes?: number,
  liked?: boolean
}

export class Card {
  public id: string
  public alias: string
  public name: string
  public class: CardClass
  public type: CardType
  public statIndicator: StatIndicator
  public features: Feature[]
  public affects: Feature[]

  public likes: number
  public liked: boolean

  constructor (props: CardProps = {}) {
    this.id = props.id || Math.random().toFixed(10).slice(2)
    this.alias = props.alias || 'unnamed_card'
    this.name = props.name || 'Unnamed Card'
    this.class = props.class || 'reflex'
    this.type = props.type || 'offence'
    this.statIndicator = props.statIndicator || 'offence'
    this.features = props.features ? props.features.map(i => new Feature(i as FeatureProps)) : []
    this.affects = props.affects ? props.affects.map(i => new Feature(i as FeatureProps)) : []
    this.likes = props.likes || 0
    this.liked = props.liked || false
  }

}
