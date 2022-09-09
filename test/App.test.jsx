import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import App from '../src/App'

describe('App', () => {
	afterEach(cleanup)

	it('should render', () => {
		render(<App />)
	})
})
