import { useState, useMemo } from "react";
import Map from './Map';
import HeaderBar from "./HeaderBar";
import Sider from "./Sider";
import { MapContext } from "./Context/ContextManager";
import ResetButton from "./ResetButton";

const Container = () => {
  const [map, setMap] = useState(null);

  const displayMap = useMemo(
    () => (
      <Map setMap={setMap}></Map>
    )
  , [])

  return (
    <MapContext.Provider value={map}>
      <div>
        <HeaderBar />
        {map ? <Sider/> : null}
        {displayMap}
        <ResetButton></ResetButton>
      </div>
    </MapContext.Provider>
  )
}

export default Container