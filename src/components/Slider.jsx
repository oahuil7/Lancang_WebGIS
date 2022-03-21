import { useState, useContext, useCallback, useEffect } from 'react'
import { MapContext } from './Context/ContextManager'
import { Switch } from 'antd'
import { map, tileLayer} from 'leaflet'
import { GS_WMS } from '../utils/apis'
import $ from 'jquery'
import '../utils/beforeafter-map'


const Slider = () => {
  const beforeMap = useContext(MapContext)
  // const logLayer = useCallback(() => {
  //   console.log(beforeMap)
  //   beforeMap.eachLayer(layer => {
  //     // if(layer.options.layers && layer.options.layers.includes('lancang')) {
  //       // console.log(layer.options.layers)
  //     // }
  //     console.log(layer)
  //   })
  // },[beforeMap])

  const [basemap, setBasemap] = useState(null)
  const [tempBeforeLayer, setTempBeforeLayer] = useState(null)
  const [tempAfterMap, setTempAfterMap] = useState(null)
  const classifyLayers = useCallback(() => {
    const temp_basemap = []
    beforeMap.eachLayer(layer => {
      if(layer._url.includes('tianditu')) {
        temp_basemap.push(layer)
      }
    })
    setBasemap(temp_basemap)
  },[beforeMap])

  // const loadScript = src => {
  //   const script = document.createElement('script')
  //   const body = document.getElementsByTagName('body')[0]
  //   script.src = src
  //   body.appendChild(script)
  // }

  useEffect(() => {
    classifyLayers()
    // loadScript('../utils/beforeafter-map.js')
  },[classifyLayers])

  const onChange= useCallback((checked) => {
    const loadLayer = () => {
      const beforeLayer = tileLayer.wms(GS_WMS, {
        layers: 'Lancang:lancang_soil_84',
        format: 'image/png',
        transparent: true,
        zIndex:999
      })
      const afterLayer = tileLayer.wms(GS_WMS, {
        layers: 'Lancang:lancang_lu',
        format: 'image/png',
        transparent: true,
        zIndex:999
      })
      const afterMap = map('after')
      for(let layer of basemap) {
        afterMap.addLayer(layer)
      }
      beforeMap.addLayer(beforeLayer)
      afterMap.addLayer(afterLayer)
      setTempBeforeLayer(beforeLayer)
      setTempAfterMap(afterMap)
      $('#container').beforeAfter(beforeMap, afterMap)
    }

    const removeLayer = () => {
      if(beforeMap.hasLayer(tempBeforeLayer)) {
        beforeMap.removeLayer(tempBeforeLayer)
      }
      tempAfterMap.remove()
    }

    if(checked) {
      loadLayer()
    } else {
      removeLayer()
    }
  },[basemap, beforeMap, tempAfterMap, tempBeforeLayer])

  return <Switch className="switch" onChange={onChange}></Switch>
}

export default Slider