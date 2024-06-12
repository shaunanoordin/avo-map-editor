import React from 'react'
import { TILE_PALETTE } from '@app/constants.js'

function BrushControls({ brush, setBrush }) {
  return (
    <ul id="brush-controls">
      {TILE_PALETTE.map((colour, index) => (
        <li
          key={`brush-controls-item-${index}`}
          className={brush === index ? 'selected' : ''}
        >
          <button
            style={{ background: colour }}
            onClick={() => { setBrush(index) }}
          />
        </li>
      ))}
    </ul>
  )
}

export default BrushControls