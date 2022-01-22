import { useEventHandlers } from "@react-leaflet/core"
import { useCallback, useMemo, useState } from "react"
import { MapContainer, Rectangle, TileLayer, useMap, useMapEvent } from "react-leaflet"

const POSITION_CLASS = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
}

const BOUNDS_STYLE = { weight: 1 }

const MiniMapBounds = ({ parentMap, zoom }) => {
  const miniMap = useMap()

  const onClick = useCallback(e => {
    parentMap.setView(e.latlng, parentMap.getZoom())
  }, [parentMap])
  useMapEvent('click', onClick)

  const [bounds, setBounds] = useState(parentMap.getBounds())
  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds())
    miniMap.setView(parentMap.getCenter(), zoom)
  }, [miniMap, parentMap, zoom])

  const handlers = useMemo(() => ({move: onChange, zoom: onChange}), [onChange])
  useEventHandlers({ instance: parentMap }, handlers)

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />
}

const MiniMapControl = ({ position, zoom }) => {
  const parentMap = useMap()
  const mapZoom = zoom || 0

  const miniMap = useMemo(() => (
    <MapContainer
      style={{height: "10vh", width: "10vh"}}
      center={parentMap.getCenter()}
      zoom={mapZoom}
      dragging={false}
      doubleClickZoom={false}
      scrollWheelZoom={false}
      attributionControl={false}
      zoomControl={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <MiniMapBounds parentMap={parentMap} zoom={mapZoom}/>
    </MapContainer>
  ), [mapZoom, parentMap])

  const positionClass = (position && POSITION_CLASS[position]) || POSITION_CLASS.bottomleft
  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">{miniMap}</div>
    </div>
  )
}

export default MiniMapControl