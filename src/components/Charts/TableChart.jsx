import { Table } from 'antd';
import { useState,useEffect, useCallback } from 'react'

const TableChart = ({varName=''}) => {
  const [data, setData] = useState(null)
  const asyncFetch = useCallback(() => {
    fetch(`http://localhost:5000/hist/mk_trend/${varName}`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => {
        console.log('fetch data failed', err)
      })
  },[varName])
  useEffect(() => {
    asyncFetch()
  }, [asyncFetch])

  const buildColumns = data => {
    const header = Object.keys(data[0])
    const colums = []
    for(let key of header) {
      if(key === 'key') continue
      colums.push(
        {
          title: key,
          dataIndex: key,
          align: 'center',
        }
      )
    }
    return colums
  }

  let columns
  data && (columns = buildColumns(data))
  data && data.forEach(obj => {
    obj['h'] = obj['h'].toString()
  })

 
  return data && <Table
                  size="small"
                  columns={columns}
                  dataSource={data}
                  bordered
                />;
};
export default TableChart;