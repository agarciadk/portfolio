import hashLanguages from './utils/hashLanguages'

export type Language = keyof typeof hashLanguages

export interface Project {
	title: string
	description: string
	image: string
	languages: Language[]
}

export interface Experience {
	company: string
	position: string
	sector: string
	business: 'B2C' | 'B2B'
	beginning: string
	ending: string
	location: string
	responsibilities: Array<{ title: string, description?: string[]}>
	keys: Array<{ title: string, description?: string[]}>
}
