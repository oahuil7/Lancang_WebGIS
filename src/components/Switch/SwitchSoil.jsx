import { tileLayer, control, DomUtil } from 'leaflet'
import { GS_WMS } from '../../utils/apis'
import { useCallback, useContext, useState } from 'react'
import { MapContext } from '../Context/ContextManager'
import { Switch } from 'antd'

const SwitchSoil = () => {
  const [legendControl, setLegendControl] = useState(null)

  function getColor(d) {
    return d === "Haplic Luvisols1" ? "#ed586a" : 
    d === "Eutric Cambisols1" ? "#aeeb82" : 
    d === "Eutric Cambisols2" ? "#efc364" : 
    d === "Calcaric Cambisols" ? "#382dd8" : 
    d === "Calcic Luvisols" ? "#2ecc8d" : 
    d === "Haplic Greyzems" ? "#eaa03f" : 
    d === "Luvic Chernozems" ? "#82e2d2" : 
    d === "Calcic Chernozems" ? "#68cb77" : 
    d === "Haplic Calcisols" ? "#7845ef" : 
    d === "Calcaric Fluvisols" ? "#3a19c8" : 
    d === "Ferric Lixisols" ? "#45afd8" : 
    d === "Rendzic Leptosols" ? "#ca59b4" : 
    d === "Haplic Luvisols2" ? "#9d0ecd" : 
    d === "Chromic Luvisols" ? "#e6d733" : 
    d === "Umbric Andosols" ? "#e281da" : 
    d === "Dystric Cambisols" ? "#e281da" : 
    d === "Calcaric Regosols" ? "#ef734d" : 
    d === "LEPTOSOLS" ? "#7acada" : 
    d === "Eutric Regosols" ? "#ec67a5" : 
    d === "Haplic Phaeozems" ? "#de2a13" : 
    d === "Calcaric Phaeozems" ? "#d765e8" : 
    d === "Gleyic Phaeozems" ? "#b7cd73" : 
    d === "Mollic Gleysols1" ? "#cd2799" : 
    d === "Mollic Gleysols2" ? "#dc0f0f" : 
    d === "Terric Histosols" ? "#9245d9" : 
    d === "Cumulic Anthrosols" ? "#78d4a4" : 
    d === "Eutric Gleysols" ? "#ce8444" : 
    d === "Gelic Leptosols" ? "#3345ca" : 
    d === "Gelic Cambisols" ? "#92ee2f" : 
    d === "Gelic Gleysols" ? "#a678e7" : 
    d === "Mollic Leptosols" ? "#a678e7" : 
    d === "Eutric Leptosols" ? "#44e021" : 
    d === "Haplic Ferralsols1" ? "#ce3cd3" : 
    d === "Haplic Ferralsols2" ? "#ce3068" : 
    d === "Xanthic Ferralsols" ? "#4780dc" : 
    d === "Humic Nitisols" ? "#47dc4c" : 
    d === "Ferric Acrisols1" ? "#bccf3c" : 
    d === "Ferric Acrisols2" ? "#1eef56" : 
    d === "Humic Acrisols1" ? "#e1976e" : 
    d === "Humic Acrisols2" ? "#e76180" : 
    d === "Ferralic Cambisols1" ? "#73e2e7" : 
    d === "Ferralic Cambisols2" ? "#4298d1" : 
    d === "Haplic Acrisols1" ? "#63e5df" : 
    d === "Haplic Acrisols2" ? "#6cca90" : 
    d === "Humic Acrisols3" ? "#69c962" : 
    d === "Chromic Cambisols1" ? "#a546db" : 
    d === "Chromic Cambisols2" ? "#2127df" : 
    d === "Haplic Alisols1" ? "#d22688" : 
    d === "Haplic Alisols2" ? "#3951d9" : 
    d === "Haplic Luvisols3" ? "#c7c93c" : 
    d === "Dystric Podzoluvisols" ? "#739ec9" : 
    d === "Water bodies" ? "#92d376" : 
    d === "Glaciers" ? "#2ccc9f" : null
  }

  const legend = control({position: 'bottomright'})
  legend.onAdd = () => {
    const div = DomUtil.create('div', 'info legend')
    const categories = ["Haplic Luvisols1",	"Eutric Cambisols1", "Eutric Cambisols2", 
                        "Calcaric Cambisols",	"Calcic Luvisols", "Haplic Greyzems",	
                        "Luvic Chernozems",	"Calcic Chernozems", "Haplic Calcisols", 
                        "Calcaric Fluvisols", "Ferric Lixisols",	"Rendzic Leptosols",
                        "Haplic Luvisols2", "Chromic Luvisols", "Umbric Andosols",
                        "Dystric Cambisols", "Calcaric Regosols",	"LEPTOSOLS", 
                        "Eutric Regosols", "Haplic Phaeozems", "Calcaric Phaeozems", 
                        "Gleyic Phaeozems", "Mollic Gleysols1", "Mollic Gleysols2",
                        "Terric Histosols",	"Cumulic Anthrosols",	"Eutric Gleysols",
                        "Gelic Leptosols", "Gelic Cambisols",	"Gelic Gleysols",
                        "Mollic Leptosols",	"Eutric Leptosols",	"Haplic Ferralsols1",
                        "Haplic Ferralsols2",	"Xanthic Ferralsols",	"Humic Nitisols",
                        "Ferric Acrisols1",	"Ferric Acrisols2",	"Humic Acrisols1",
                        "Humic Acrisols2", "Ferralic Cambisols1",	"Ferralic Cambisols2",
                        "Haplic Acrisols1",	"Haplic Acrisols2",	"Humic Acrisols3",
                        "Chromic Cambisols1",	"Chromic Cambisols2",	"Haplic Alisols1",
                        "Haplic Alisols2", "Haplic Luvisols3", "Dystric Podzoluvisols",
                        "Water bodies",	"Glaciers"]

    let divContent = '<strong style="margin-left: 110px; font-size: 15px">土壤分类</strong><br>'
    for (let i = 0; i < categories.length; i++) {
      divContent += ('<span class="dot" style="display: inline-block; margin-left: 5px;height: 10px; width: 10px; background-color:'
                      + getColor(categories[i]) + '; border-radius: 50%"></span> '
                    + '<span style="display: inline-block; width: 120px">' + categories[i] + '</span>')
      if((i + 1) % 2 === 0) {
        divContent += '<br>'
      }
    }
    div.innerHTML = divContent
    div.style = "background-color: rgba(255,255,255,0.9); border-radius: 5px; height: 510px; width: 280px;"
    return div
  }

  const map = useContext(MapContext)
  const [layer, setLayer] = useState(null);

  const onChange = useCallback(checked => {
    const loadLayer = async () => {
      const newLayer = await tileLayer.wms(GS_WMS, {
        layers: 'Lancang:lancang_soil_84',
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

export default SwitchSoil