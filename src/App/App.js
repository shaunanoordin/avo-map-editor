import React from 'react'

const TILE_SIZE = 32
const TILE_PALETTE = {
  'white': '#e0e0e0',
  'red': '#c04040',
  'blue': '#4040c0',
  'green': '#40c040',
}

function App () {

  const mapData = {
    width: 5,
    height: 5,
    tiles: [],
  }

  for (let y = 0; y < mapData.height; y++) {
    mapData.tiles[y] = []
    for (let x = 0; x < mapData.width; x++) {
      mapData.tiles[y][x] = 'white'
    }
  }

  return (
    <main>
      <svg viewBox={`0 0 ${TILE_SIZE * 12} ${TILE_SIZE * 8}`}>
        {mapData.tiles.map((row, y) => (row.map((tile, x) => (
          <rect
            x={x * TILE_SIZE} y={y * TILE_SIZE}
            width={TILE_SIZE} height={TILE_SIZE}
            fill={TILE_PALETTE[tile]}
          />
        ))))}
      </svg>
    </main>
  )
}

export default App