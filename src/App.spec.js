/**
 * Dependencies
 */

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import App from './App'

/**
 * Hooks
 */

afterEach(cleanup)

/**
 * Assertions
 */

describe('App.js', () => {
  test('it renders without errors', () => {
    render(<App />)
  })

  describe('<Display />', () => {
    test('it defaults to `unlocked` and `open`', () => {
      const { container, getByText } = render(<App />)
      getByText(/Unlocked/)
      getByText(/Open/)
    })
  })
})
