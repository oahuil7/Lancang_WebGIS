import { useState } from 'react';
import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu';
import { SiderWrap } from './Styled'
import { GlobalOutlined, LineChartOutlined } from '@ant-design/icons';
import { SwitchRegion, SwitchStation, SwitchLanduse, SwitchSoil } from './Switch'
import withButtonHist from './HOC/withButtonHist'
import { LineChart, TableChart, TableChartChar,  } from './Charts'

const rootSubmenuKeys = ['sub1', 'sub2'];

const Sider = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const ButtonHistLine = withButtonHist(LineChart)
  const ButtonHistTable = withButtonHist(TableChart)
  const ButtonHistTableChar = withButtonHist(TableChartChar)

  return (
    <SiderWrap>
      <Menu mode='inline' openKeys={openKeys} onOpenChange={onOpenChange}>
        <SubMenu key="sub1" icon={<GlobalOutlined />} title="澜沧江基础地理信息">
          <Menu.Item key="loadRegion">
            流域范围
            <SwitchRegion></SwitchRegion>
          </Menu.Item>
          <Menu.Item key="loadStaton">
            水文气象站点
            <SwitchStation></SwitchStation>
          </Menu.Item>
          <Menu.Item key="loadLanduse">
            土地利用数据
            <SwitchLanduse></SwitchLanduse>
          </Menu.Item>
          <Menu.Item key="loadSoil">
            土壤数据
            <SwitchSoil></SwitchSoil>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LineChartOutlined />} title="历史时期气象水文变化情况">
          <Menu.ItemGroup key="group-hist" title="历史变化（1961-2015）">
            <Menu.Item key="hist-pr">
              历史降水变化
              <ButtonHistLine
                modalTitle="历史降水变化（mm）"
                varName="pr"
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-evap">
              历史蒸散发变化
              <ButtonHistLine
                modalTitle="历史蒸散发变化（mm）"
                varName="evap"
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-runoff">
              历史径流深变化
              <ButtonHistLine
                modalTitle="历史径流深变化（mm）"
                varName="runoff"
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-mk-trend">
              Mann-Kendall 趋势
              <ButtonHistTable 
                modalTitle="Mann-Kendall 趋势检验结果"
                modalWidth={{width: '500px'}}
                varName="raw"
              ></ButtonHistTable>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="group-mk-mutation" title="历史径流突变分析">
            <Menu.Item key="hist-mk_mutation">
              Mann-Kendall 突变
              <ButtonHistLine
                modalTitle="Mann-Kendall 突变检验结果"
                varName="mk_mutation"
                multiLines={1}
              ></ButtonHistLine>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="group-elastic" title="径流的弹性系数">
            <Menu.Item key="hist-elastic-table">
              突变前后对比
              <ButtonHistTableChar
                modalTitle="突变前后水文气象要素概况"
                modalWidth={{width: '600px'}}
              ></ButtonHistTableChar>
            </Menu.Item>
            <Menu.Item key="hist-elastic-pr">
              降水弹性变化
              <ButtonHistLine
                modalTitle="径流的降水弹性变化情况"
                varName="epsilon_P"
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-elastic-evap">
              蒸散发弹性变化
              <ButtonHistLine
                modalTitle="径流的蒸散发弹性变化情况"
                varName="epsilon_E0"
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-elastic-n">
              下垫面弹性变化
              <ButtonHistLine
                modalTitle="径流的下垫面弹性变化情况"
                varName="epsilon_n"
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-mk-trend_elastic">
              Mann-Kendall 趋势
              <ButtonHistTable 
                modalTitle="Mann-Kendall 趋势检验结果"
                modalWidth={{width: '500px'}}
                varName="elastic"
              ></ButtonHistTable>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </SiderWrap>
  )
}

export default Sider