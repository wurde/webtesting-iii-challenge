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

  test('it displays "Locked" if the `locked` prop is `true`', () => {
    const { getByText } = render(<Display locked={true} closed={false} />)
    getByText('Locked')
  })

  test('it displays "Unlocked" if the `locked` prop is `false`', () => {
    const { getByText } = render(<Display locked={false} closed={false} />)
    getByText('Unlocked')
  })
})
