/// <reference types="vite/client" />

export type GameRole = 'attack' | 'agility' | 'support'
export type GameSubrole = 'tank' | 'medic' | 'runner' | 'shooter' | 'damage' | 'engineer' | 'generalist'
export type GameDifficulty = 'recruit' | 'veteran' | 'nightmare'

export type CleanerID = 'evan' | 'walker' | 'holly' | 'mom' | 'doc' | 'hoffman' | 'jim' | 'karlee'

export type WeaponAmmo = 'sr' | 'ar' | 'smg' | 'shotgun'

/**
 * Область оценки на графике
 */
export type StatIndicator = 'offence' | 'defence' | 'utility' | 'mobility' | 'economics'
