import { Table } from 'antd';
import { useState,useEffect, useCallback } from 'react'

const columns = [
  {
    title: '时期',
    dataIndex: 'period',
    align: 'center',
  },
  {
    title: 'P/mm',
    dataIndex: 'P/mm',
    align: 'center',
  },
  {
    title: 'E0/mm',
    dataIndex: 'E0/mm',
    align: 'center',
  },
  {
    title: 'R/mm',
    dataIndex: 'R/mm',
    align: 'center',
  },
  {
    title: 'n',
    dataIndex: 'n',
    align: 'center',
  },
  {
    title: 'R/P',
    dataIndex: 'R/P',
    align: 'center',
  },
  {
    title: 'E0/P',
    dataIndex: 'E0/P',
    align: 'center',
  },
  {
    title: '径流弹性系数',
    children: [
      {
        title: 'epsilon_P',
        dataIndex: 'epsilon_P',
        align: 'center',
      },
      {
        title: 'epsilon_E0',
        dataIndex: 'epsilon_E0',
        align: 'center',
      },
      {
        title: 'epsilon_n',
        dataIndex: 'epsilon_n',
        align: 'center',
      },
    ]
  },
]

const TableChartChar = () => {
  const [data, setData] = useState(null)
  const asyncFetch = useCallback(() => {
    fetch(`http://localhost:5000/hist/char`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => {
        console.log('fetch data failed', err)
      })
  },[])
  useEffect(() => {
    asyncFetch()
  }, [asyncFetch])

  return data && <Table
                  size="small"
                  columns={columns}
                  dataSource={data}
                  bordered
                />;
};
export default TableChartChar;