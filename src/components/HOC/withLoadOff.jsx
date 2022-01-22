import { Switch } from "antd";
import { useState, useCallback, useContext } from "react";
import cachedFetch from '../../untils/cachedFetch';
import { MapContext } from "../Context/ContextManager";

function withLoadOff(url, fn) {
  return function SwitchView() {
    const map = useContext(MapContext)
    const [layer, setLayer] = useState(null);
  
    const onChange = useCallback(checked => {
      const loadLayer = async () => {
        const data = await cachedFetch(url)
          .then(res => res.json())
        const newLayer = fn(data)
        map.addLayer(newLayer)
        setLayer(newLayer)
      }
  
      const removeLayer = () => {
        if(map.hasLayer(layer)) {
          map.removeLayer(layer)
        }
      }
  
      if(checked) {
        loadLayer()
      } else {
        removeLayer()
      }
    }, [map, layer])
  
    return (
      <Switch className="switch" onChange={onChange}></Switch>
    )
  }
}

export default withLoadOff