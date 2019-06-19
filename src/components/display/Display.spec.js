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

  test('when `locked` use the `red-led` class', () => {
    const { container } = render(<Display locked={true} closed={false} />)

    const divs = container.getElementsByClassName('red-led')
    expect(divs.length).toBe(1)
  })

  test('when `closed` use the `red-led` class', () => {
    const { container } = render(<Display locked={false} closed={true} />)

    const divs = container.getElementsByClassName('red-led')
    expect(divs.length).toBe(1)
  })

  test('when `locked` or `closed` use the `red-led` class', () => {
    const { container } = render(<Display locked={true} closed={true} />)

    const divs = container.getElementsByClassName('red-led')
    expect(divs.length).toBe(2)
  })

  test('when `unlocked` use the `green-led` class', () => {
    const { container } = render(<Display locked={false} closed={true} />)

    const divs = container.getElementsByClassName('green-led')
    expect(divs.length).toBe(1)
  })

  test('when `open` use the `green-led` class', () => {
    const { container } = render(<Display locked={true} closed={false} />)

    const divs = container.getElementsByClassName('green-led')
    expect(divs.length).toBe(1)
  })

  test('when `unlocked` or `open` use the `green-led` class', () => {
    const { container } = render(<Display locked={false} closed={false} />)

    const divs = container.getElementsByClassName('green-led')
    expect(divs.length).toBe(2)
  })
})
