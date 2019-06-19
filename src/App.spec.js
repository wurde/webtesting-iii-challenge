/**
 * Dependencies
 */

import React from 'react'
import { render } from '@testing-library/react';
import App from './App'

/**
 * Assertions
 */

describe('App.js', () => {
  test('it renders without errors', () => {
    render(<App />)
  })
})
