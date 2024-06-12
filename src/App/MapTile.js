import React from 'react'
import { TILE_PALETTE, TILE_SIZE } from '@app/constants.js'

function MapTile ({ x, y, tile, onClick }) {

  function _onClick () {
    onClick(x, y)
  }

  return (
    <rect
      x={x * TILE_SIZE} y={y * TILE_SIZE}
      width={TILE_SIZE} height={TILE_SIZE}
      fill={TILE_PALETTE[tile]}
      onClick={_onClick}
    />
  )
}

export default MapTile