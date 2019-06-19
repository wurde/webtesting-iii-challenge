/**
 * Dependencies
 */

import React from 'react'
import { render } from '@testing-library/react';
import Controls from './Controls'

/**
 * Assertions
 */

describe('Controls.js', () => {
  test('it renders without errors', () => {
    render(<Controls />)
  })
})
