/**
 * Dependencies
 */

import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Display from './Display'

/**
 * Hooks
 */

afterEach(cleanup)

/**
 * Assertions
 */

describe('Display.js', () => {
  test('it renders without errors', () => {
    render(<Display />)
  })
})
