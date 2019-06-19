/**
 * Dependencies
 */

import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import Controls from './Controls'

/**
 * Hooks
 */

afterEach(cleanup)

/**
 * Assertions
 */

describe('Controls.js', () => {
  test('it renders without errors', () => {
    render(<Controls />)
  })
})
