import { Line } from '@ant-design/charts';
import { useState,useEffect, useCallback } from 'react'

const LineChart = ({varName, multiLines=0}) => {
  const [data, setData] = useState([])
  const asyncFetch = useCallback(() => {
    fetch(`http://localhost:5000/hist/${varName}`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => {
        console.log('fetch data failed', err)
      })
  },[varName])
  useEffect(() => {
    asyncFetch()
  }, [asyncFetch])

  const configSingle = {
    data,
    padding: 'auto',
    forceFit: true,
    xField: 'year',
    yField: 'value',
    smooth: true,
  };

  const configMulti = {
    data,
    padding: 'auto',
    forceFit: true,
    xField: 'year',
    yField: 'value',
    smooth: true,
    legend: {
      position: 'right-top',
    },
    seriesField: 'type',
    color: d => d.type === 'UF' ? '#ff6666' : '#0055cc',
    lineStyle: (d) => {
      if (d.type === 'UF') {
        return {
          lineDash: [3, 3],
        };
      }
    },
  }

  const config = multiLines ? configMulti : configSingle

  return <Line {...config} />;
};
export default LineChart;