import { useState, useEffect } from 'react';
import { Heatmap } from '@ant-design/plots';

const MonthRunoffHeatmap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('http://localhost:5000/future_month_runoff')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    width: 650,
    height: 500,
    autoFit: false,
    data,
    xField: 'month',
    yField: 'time',
    colorField: 'percent',
    color: ['#083a7a', '#1e6db2', '#6fb0d7', '#c8dcf0', '#e8f1fa'],
  };

  return <Heatmap {...config} />;
};

export default MonthRunoffHeatmap