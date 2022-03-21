import { Table } from "antd";

const columns = [
  {
    title: '变量',
    dataIndex: 'varName',
    align: 'center',
  },
  {
    title: 'SSP1-2.6',
    children: [
      {
        title: '趋势',
        dataIndex: 'trend1',
        align: 'center',
      },
      {
        title: 'Z值',
        dataIndex: 'z1',
        align: 'center',
      },
      {
        title: '泰尔-森估算',
        dataIndex: 'slope1',
        align: 'center',
      }
    ]
  },
  {
    title: 'SSP2-4.5',
    children: [
      {
        title: '趋势',
        dataIndex: 'trend2',
        align: 'center',
      },
      {
        title: 'Z值',
        dataIndex: 'z2',
        align: 'center',
      },
      {
        title: '泰尔-森估算',
        dataIndex: 'slope2',
        align: 'center',
      }
    ]
  },
  {
    title: 'SSP5-8.5',
    children: [
      {
        title: '趋势',
        dataIndex: 'trend5',
        align: 'center',
      },
      {
        title: 'Z值',
        dataIndex: 'z5',
        align: 'center',
      },
      {
        title: '泰尔-森估算',
        dataIndex: 'slope5',
        align: 'center',
      }
    ]
  }
]

const data = [
  {
    varName: '降水',
    trend1: '增长',
    z1: 5.58,
    slope1: 9.43,
    trend2: '增长',
    z2: 8.55,
    slope2: 14.57,
    trend5: '增长',
    z5: 9.90,
    slope5: 32.98,
  },
  {
    varName: '最高温',
    trend1: '增长',
    z1: 6.48,
    slope1: 0.07,
    trend2: '增长',
    z2: 11.65,
    slope2: 0.24,
    trend5: '增长',
    z5: 12.59,
    slope5: 0.59,
  },
  {
    varName: '最低温',
    trend1: '增长',
    z1: 4.37,
    slope1: 0.05,
    trend2: '增长',
    z2: 11.73,
    slope2: 0.26,
    trend5: '增长',
    z5: 12.56,
    slope5: 0.64,
  }
]

const TimeTrendTable = () => {
  return <Table
          size="middle"
          columns={columns}
          dataSource={data}
          bordered
        ></Table>
}

export default TimeTrendTable