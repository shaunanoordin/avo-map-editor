import React, { useEffect, useState } from 'react'

const TILE_SIZE = 32
const TILE_PALETTE = {
  'default': '#e0e0e0',
  'red': '#c04040',
  'blue': '#4040c0',
  'green': '#40c040',
}

function App () {
  const [ mapWidth, setMapWidth ] = useState(5)
  const [ mapHeight, setMapHeight ] = useState(5)
  const [ mapTiles, setMapTiles ] = useState([])

  useEffect(function setupTiles () {
    const newTiles = []
    for (let y = 0; y < mapHeight; y++) {
      newTiles[y] = []
      for (let x = 0; x < mapWidth; x++) {
        const tile = mapTiles?.[y]?.[x]
        newTiles[y][x] = tile || 'default'
      }
    }
    setMapTiles(newTiles)
  }, [mapWidth, mapHeight])

  return (
    <main>
      <svg viewBox={`0 0 ${TILE_SIZE * 12} ${TILE_SIZE * 8}`}>
        {mapTiles.map((row, y) => (row.map((tile, x) => (
          <rect
            key={`tile-${y}-${x}`}
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