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

  test('it shows the controls and display', () => {
    const { container } = render(<App />)
    const controls = container.getElementsByClassName('controls')
    const display = container.getElementsByClassName('display')

    expect(controls.length).toBe(1)
    expect(display.length).toBe(1)
  })

  describe('<Display />', () => {
    test('it defaults to `unlocked` and `open`', () => {
      const { container, getByText } = render(<App />)
      getByText(/Unlocked/)
      getByText(/Open/)
    })
  })
})
