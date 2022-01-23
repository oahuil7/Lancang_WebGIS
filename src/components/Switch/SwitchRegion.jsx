import { geoJSON } from "leaflet";
import { GS_region } from "../../utils/apis";
import withLoadOff from "../HOC/withLoadOff";

const SwitchRegion = () => {
  const makeRegionLayer = data => {
    return geoJSON(data)
  }
  const SwitchRegionWithLoadOff = withLoadOff(GS_region, makeRegionLayer)

  return (
    <SwitchRegionWithLoadOff></SwitchRegionWithLoadOff>
  )
}

export default SwitchRegion