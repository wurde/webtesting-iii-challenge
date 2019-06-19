/**
 * Dependencies
 */

import React from 'react'

/**
 * Define component
 */

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props

  return (
    <div className="controls panel">
      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn">
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  )
}

/**
 * Export component
 */

export default Controls
