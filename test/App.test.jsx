import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
// eslint-disable-next-line no-unused-vars
import App from '../src/App'

describe('App', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<App />)
  })

  it('should render title correctly', () => {
    render(<App />)

    screen.getByText('Hello World')
  })
})
