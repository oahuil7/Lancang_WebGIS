import { Line } from "@ant-design/charts";
import { useState, useEffect } from "react";

const TempAnomalyChart = ({ varName }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/climate_anomaly_${varName}`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => {
        console.log('fetch data failed', err)
      })
  }, [varName])

  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => varName === 'pr' ? `${Number(v).toFixed(2)} %` : `${Number(v).toFixed(2)} °C`,
      },
    },
    color: ['#2ABD09', '#6495ED', '#FF5349'],
    legend: {
      position: 'top',
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 6000,
      },
    },
  };

  return <Line {...config}/>
}

const AnomalyChart = () => {
  let varList = ['pr', 'tasmax', 'tasmin']

  return (
    <>
      {varList.map(varName => <TempAnomalyChart key={varName} varName={varName}></TempAnomalyChart>)}
    </>
  )
}

export default AnomalyChart