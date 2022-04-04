import type { StatIndicator } from '../../env'

export type FeatureType = 'positive' | 'negative'

export interface FeatureProps {
  type?: FeatureType,
  statIndicator?: StatIndicator,
  description?: string,
  isTeam?: boolean
}

export class Feature {
  public type: FeatureType
  public statIndicator: StatIndicator
  public description: string | null
  public isTeam: boolean

  constructor (props: FeatureProps) {
    this.type = props.type || 'positive'
    this.statIndicator = props.statIndicator || 'offence'
    this.description = props.description || null
    this.isTeam = props.isTeam || false
  }

}
