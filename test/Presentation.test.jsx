import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import { Presentation } from '../src/components'

describe('Presentation', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<Presentation />)
	})
})
