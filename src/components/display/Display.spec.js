/**
 * Dependencies
 */

import React from 'react'
import { render } from '@testing-library/react';
import Display from './Display'

/**
 * Assertions
 */

describe('Display.js', () => {
  test('it renders without errors', () => {
    render(<Display />)
  })
})
