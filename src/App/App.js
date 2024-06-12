import React, { useEffect, useState } from 'react'
import { TILE_SIZE } from '@app/constants.js'
import MapTile from './MapTile.js'
import BrushControls from './BrushControls.js'

function App () {
  const [ mapWidth, setMapWidth ] = useState(12)
  const [ mapHeight, setMapHeight ] = useState(8)
  const [ mapTiles, setMapTiles ] = useState([])
  const [ brush, setBrush] = useState(1)

  useEffect(function setupTiles () {
    const newTiles = []
    for (let y = 0; y < mapHeight; y++) {
      newTiles[y] = []
      for (let x = 0; x < mapWidth; x++) {
        const tile = mapTiles?.[y]?.[x]
        newTiles[y][x] = tile ?? 0
      }
    }
    setMapTiles(newTiles)
  }, [mapWidth, mapHeight])

  function paintTile(x, y) {
    const newTiles = structuredClone(mapTiles)
    newTiles[y][x] = brush
    setMapTiles(newTiles)
  }

  return (
    <main>
      <svg id="map" viewBox={`0 0 ${TILE_SIZE * 12} ${TILE_SIZE * 8}`}>
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
      <BrushControls
        brush={brush}
        setBrush={setBrush}
      />
    </main>
  )
}

export default App