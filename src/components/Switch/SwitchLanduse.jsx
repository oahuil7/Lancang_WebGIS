import {tileLayer, control, DomUtil} from 'leaflet'
import { GS_WMS } from '../../utils/apis'
import { useCallback, useContext, useState } from 'react'
import { MapContext } from '../Context/ContextManager'
import { Switch } from 'antd'

const SwitchLanduse = () => {
  const [legendControl, setLegendControl] = useState(null)

  function getColor(d) {
    return d === "耕地" ? "#8f4f2f" :
          d === "林地" ? "#216721" :
          d === "草地" ? "#baf141" :
          d === "水域" ? "#1381ff" :
          d === "建设用地" ? "#e71c1c" :
          d === "裸地" ? "#a2a2a2" : null;
  }

  const legend = control({position: 'bottomright'})
  legend.onAdd = () => {
    const div = DomUtil.create('div', 'info legend')
    const labels = ['<strong style="margin-left: 2px">土地利用分类</strong>']
    const categories = ['耕地', '林地', '草地', '水域', '建设用地', '裸地']

    for (let i = 0; i < categories.length; i++) {
        labels.push('<span class="dot" style="display: inline-block; margin-left: 5px;height: 10px; width: 10px; background-color:'
                    + getColor(categories[i]) + '; border-radius: 50%"></span> '
                    + categories[i])
    }
    div.innerHTML = labels.join('<br>')
    div.style = "background-color: rgba(255,255,255,0.9); border-radius: 5px; height: 160px; width: 95px; font-size: 15px"
    return div
  }

  const map = useContext(MapContext)
  const [layer, setLayer] = useState(null);

  const onChange = useCallback(checked => {
    const loadLayer = async () => {
      const newLayer = await tileLayer.wms(GS_WMS, {
        layers: 'Lancang:lancang_lu',
        format: 'image/png',
        transparent: true,
        zIndex:999
      })
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
      legend.addTo(map)
      setLegendControl(legend)
    } else {
      removeLayer()
      legendControl.remove()
    }
  }, [map, layer, legend, legendControl])

  return (
    <Switch className="switch" onChange={onChange}></Switch>
  )
}

export default SwitchLanduse