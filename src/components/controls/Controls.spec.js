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

  test('it cannot be closed if it is locked', () => {
    const { getByText } = render(<Controls locked={true} closed={false} />)
    const btn_close = getByText('Close Gate')
    expect(btn_close.disabled).toBeTruthy()
  })

  test('it cannot be opened if it is locked', () => {
    const { getByText } = render(<Controls locked={true} closed={true} />)
    const btn_open = getByText('Open Gate')
    expect(btn_open.disabled).toBeTruthy()
  })
})
