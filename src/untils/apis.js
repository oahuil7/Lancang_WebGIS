const TDT_API_Par = type => {
  const tdtToken = '7adb38f6d774414fb1022b540e8e29fe'
  const tdtUrl = 'http://t1.tianditu.com/'
                  + type + '_w/wmts?layer='
                  + type + '&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk='
                  + tdtToken
  return tdtUrl
}

const Mapbox_API = 'https://api.mapbox.com/styles/v1/takahashilau/ck2wy3s9c13bb1cpg90q7aorw/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidGFrYWhhc2hpbGF1IiwiYSI6ImNrd3VvbGI4NDFxZG8yeHA0NGRhNXU3c2UifQ.fUxw0BfxbEA_RA69A6cCPQ'

const OpenStreetMap_API = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

const GS_region = "http://localhost:8082/geoserver/Lancang/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Lancang%3Alancang_region84&maxFeatures=50&outputFormat=application%2Fjson"

const GS_station = "http://localhost:8082/geoserver/Lancang/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Lancang%3Astation&maxFeatures=50&outputFormat=application%2Fjson"

export {
  TDT_API_Par,
  Mapbox_API,
  OpenStreetMap_API,
  GS_region,
  GS_station
}