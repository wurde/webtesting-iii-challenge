/**
 * Dependencies
 */

import React, { Component } from 'react'
import { Display, Controls } from './components/index'

/**
 * Import global styles
 */

import './index.scss'

/**
 * Define component
 */

class App extends Component {
  state = {
    locked: false,
    closed: false,
  }

  render() {
    const { closed, locked } = this.state

    return (
      <>
        <Display locked={locked} closed={closed} />
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
      </>
    )
  }

  toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.locked }))
  }

  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }))
  }
}

/**
 * Export component
 */

export default App
