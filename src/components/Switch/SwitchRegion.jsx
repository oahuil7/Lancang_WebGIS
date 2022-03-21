import { geoJSON } from "leaflet";
import MySwitch from "./MySwitch";

const SwitchRegion = () => {
  const makeRegionLayer = data => {
    return geoJSON(data)
  }

  return (
    <MySwitch dataName="lancang_region84" fn={makeRegionLayer} />
  )
}

export default SwitchRegion