import { FC, useMemo, CSSProperties } from 'react'
import { JSX } from 'react/jsx-runtime'
import './DecorativeBackground.scss'

// PRNG determinista (mulberry32): misma distribución en cada render/recarga, sin recalcular al hacer resize
function mulberry32(seed: number) {
	return function (): number {
		seed |= 0
		seed = (seed + 0x6D2B79F5) | 0
		let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296
	}
}

const SEED = 1928374650
const RECT_COUNT = 12
const DOT_COUNT = 26
const ACCENT_DOT_RATIO = 0.15
const ANIMATED_DOT_RATIO = 0.4

interface RectItem {
	id: number
	top: number
	left: number
	width: number
	height: number
	opacity: number
}

interface DotItem {
	id: number
	top: number
	left: number
	size: number
	accent: boolean
	animated: boolean
	opacity: number
	duration: number
	delay: number
}

const range = (rand: () => number, min: number, max: number): number => min + rand() * (max - min)

// los rectángulos pueden nacer parcialmente fuera del viewport (-8% a 92%) para que no se vean "encajonados"
const generateRects = (rand: () => number): RectItem[] =>
	Array.from({ length: RECT_COUNT }, (_, id) => ({
		id,
		top: range(rand, -8, 92),
		left: range(rand, -8, 92),
		width: range(rand, 80, 260),
		height: range(rand, 60, 220),
		opacity: range(rand, 0.02, 0.06)
	}))

const generateDots = (rand: () => number): DotItem[] =>
	Array.from({ length: DOT_COUNT }, (_, id) => {
		const accent = rand() < ACCENT_DOT_RATIO
		return {
			id,
			top: range(rand, 0, 100),
			left: range(rand, 0, 100),
			size: range(rand, 2, 5),
			accent,
			animated: rand() < ANIMATED_DOT_RATIO,
			opacity: accent ? range(rand, 0.45, 0.75) : range(rand, 0.15, 0.4),
			duration: range(rand, 6, 12),
			delay: range(rand, 0, 8)
		}
	})

const DecorativeBackground: FC = (): JSX.Element => {
	// useMemo con deps vacías: se genera una sola vez por montaje, nunca en cada render
	const { rects, dots } = useMemo(() => {
		const rand = mulberry32(SEED)
		return { rects: generateRects(rand), dots: generateDots(rand) }
	}, [])

	return (
		<div className='decorative-background' aria-hidden='true'>
			<div className='decorative-background__rects'>
				{rects.map(rect => {
					const style: CSSProperties = {
						top: `${rect.top}%`,
						left: `${rect.left}%`,
						width: `${rect.width}px`,
						height: `${rect.height}px`,
						opacity: rect.opacity
					}
					return <span key={rect.id} className='decorative-background__rect' style={style} />
				})}
			</div>
			<div className='decorative-background__dots'>
				{dots.map(dot => {
					const className = [
						'decorative-background__dot',
						dot.accent && 'decorative-background__dot--accent',
						dot.animated && 'decorative-background__dot--animated'
					].filter((c): c is string => Boolean(c)).join(' ')

					const style: CSSProperties = {
						top: `${dot.top}%`,
						left: `${dot.left}%`,
						width: `${dot.size}px`,
						height: `${dot.size}px`,
						opacity: dot.animated ? undefined : dot.opacity,
						animationDuration: dot.animated ? `${dot.duration}s` : undefined,
						animationDelay: dot.animated ? `${dot.delay}s` : undefined,
						'--dot-min-opacity': dot.animated ? dot.opacity : undefined,
						'--dot-max-opacity': dot.animated ? Math.min(dot.opacity + 0.3, dot.accent ? 0.85 : 0.55) : undefined
					} as CSSProperties

					return <span key={dot.id} className={className} style={style} />
				})}
			</div>
		</div>
	)
}

export default DecorativeBackground
