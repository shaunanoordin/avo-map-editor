import React, { useEffect, useState } from 'react'
import { TILE_PALETTE, TILE_SIZE } from '@app/constants.js'
import MapTile from './MapTile.js'

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

  function paintTile(x, y) {
    const newTiles = structuredClone(mapTiles)
    newTiles[y][x] = 'red'
    setMapTiles(newTiles)
  }

  return (
    <main>
      <svg viewBox={`0 0 ${TILE_SIZE * 12} ${TILE_SIZE * 8}`}>
        {mapTiles.map((row, y) => (row.map((tile, x) => (
          <MapTile
            key={`tile-${y}-${x}`}
            x={x}
            y={y}
            tile={tile}
            onClick={paintTile}
          />
        ))))}
      </svg>
    </main>
  )
}

export default App