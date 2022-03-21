import { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

// 1794.97

const AvgRunoffChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:5000/future_avg_runoff')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'name',
    color: ['#2ABD09', '#6495ED', '#FF5349'],
    yAxis: {
      min: 1500,
      label: {
        formatter: (v) => `${Number(v).toFixed(2)} m3/s / ${(((v - 1794.97)/ 1794.97)*100).toFixed(2)} %`,
      },
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

  return <Line {...config} />;
};

export default AvgRunoffChart