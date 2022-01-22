import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import MiniMapControl from "./MiniMapControl";

import { MapContainerWrap } from "./Styled";
import { TDT_API_Par, Mapbox_API, OpenStreetMap_API } from "../untils/apis";

const Map = ({ setMap }) => {
  return (
    <MapContainerWrap>
      <MapContainer id='map-container' center={[24.43, 98.58]} zoom={5}  whenCreated={setMap}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="天地图地形底图">
          <TileLayer
            attribution='&copy; <a href="https://www.tianditu.gov.cn/">天地图</a>'
            url={TDT_API_Par('ter')}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="天地图矢量底图">
          <TileLayer
            attribution='&copy; <a href="https://www.tianditu.gov.cn/">天地图</a>'
            url={TDT_API_Par('vec')}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="天地图影像底图">
          <TileLayer
            attribution='&copy; <a href="https://www.tianditu.gov.cn/">天地图</a>'
            url={TDT_API_Par('img')}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Mapbox">
          <TileLayer
            attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            url={Mapbox_API}
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name = "Open Street Map">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url={OpenStreetMap_API}
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="天地图注记">
          <TileLayer 
            url={TDT_API_Par('cva')}
          />
        </LayersControl.Overlay>
        {/* <AnimatePanning /> */}
      </LayersControl>
      <MiniMapControl position="bottomleft"/>
    </MapContainer>
    </MapContainerWrap>
  )
}

export default Map