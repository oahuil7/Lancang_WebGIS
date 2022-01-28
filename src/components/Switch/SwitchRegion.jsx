import { geoJSON } from "leaflet";
import withLoadOff from "../HOC/withLoadOff";

const SwitchRegion = () => {
  const makeRegionLayer = data => {
    return geoJSON(data)
  }
  const SwitchRegionWithLoadOff = withLoadOff("lancang_region84", makeRegionLayer)

  return (
    <SwitchRegionWithLoadOff></SwitchRegionWithLoadOff>
  )
}

export default SwitchRegion