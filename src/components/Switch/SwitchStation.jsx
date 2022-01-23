import { geoJSON, Icon } from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { GS_station } from "../../utils/apis";
import withLoadOff from "../HOC/withLoadOff";

const SwitchStation = () => {
  const makeStationLayer = data => {
    const defaultIcon = new Icon({
      iconUrl: markerIconPng,
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    })
    const newLayer = geoJSON(data, { 
      onEachFeature: function(feature, layer) {
        layer.setIcon(defaultIcon)
        const prop = feature.properties
        const content = `
          <table>
            <caption>站点信息</caption>
            <tr><th>站点号:</th>&nbsp;&nbsp;<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;${prop.no}</td></tr>
            <tr><th>站点名:</th>&nbsp;&nbsp;<td align="left">&nbsp;&nbsp;&nbsp;&nbsp;${prop.station}</td></tr>
            <tr><th>纬&nbsp;&nbsp;&nbsp;&nbsp;度:</th><td align="left">&nbsp;&nbsp;&nbsp;&nbsp;${prop.lat}</td></tr>
            <tr><th>经&nbsp;&nbsp;&nbsp;&nbsp;度:</th><td align="left">&nbsp;&nbsp;&nbsp;&nbsp;${prop.lon}</td></tr>
            <tr><th>省&nbsp;&nbsp;&nbsp;&nbsp;份:</th><td align="left">&nbsp;&nbsp;&nbsp;&nbsp;${prop.province}</td></tr>
            <tr><th>城&nbsp;&nbsp;&nbsp;&nbsp;市:</th><td align="left">&nbsp;&nbsp;&nbsp;&nbsp;${prop.city}</td></tr>
          </table>
        `
        layer.bindPopup(content)
      }
    })
    return newLayer
  }

  const SwitchStationWithLoadOff = withLoadOff(GS_station, makeStationLayer)

  return (
    <SwitchStationWithLoadOff></SwitchStationWithLoadOff>
  )
}

export default SwitchStation