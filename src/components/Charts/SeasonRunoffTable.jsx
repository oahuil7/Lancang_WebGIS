import { Table } from 'antd';
import { useState,useEffect, useCallback } from 'react'

const SeasonRunoffTable = () => {
  const [data, setData] = useState(null)
  const asyncFetch = useCallback(() => {
    fetch(`http://localhost:5000/future_season_runoff`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => {
        console.log('fetch data failed', err)
      })
  },[])
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

 
  return data && <Table
                  size="small"
                  columns={columns}
                  dataSource={data}
                  bordered
                />;
};
export default SeasonRunoffTable;