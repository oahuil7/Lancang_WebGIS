import { useState } from 'react';
import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu';
import { SiderWrap } from './Styled'
import { GlobalOutlined, LineChartOutlined, CloudOutlined } from '@ant-design/icons';
import { SwitchRegion, SwitchStation, SwitchLanduse, SwitchSoil } from './Switch'
import withButtonHist from './HOC/withButtonHist'
import {
  LineChart,
  TableChart,
  TableChartChar,
  AnomalyChart,
  TimeTrendTable,
  AvgRunoffChart,
  SeasonRunoffTable,
  MonthRunoffHeatmap,
} from './Charts'
import {
  BcPanelButton,
  ScPanelButtonPr,
  ScPanelButtonTasmax,
  ScPanelButtonTasmin,
  StPanelButton,
} from './PanelButtons';

const ButtonHistLine = withButtonHist(LineChart)
const ButtonHistTable = withButtonHist(TableChart)
const ButtonHistTableChar = withButtonHist(TableChartChar)
const ButtonAnomalyChart = withButtonHist(AnomalyChart)
const ButtonTimeTrendTable = withButtonHist(TimeTrendTable)
const ButtonAvgRunoffChart = withButtonHist(AvgRunoffChart)
const ButtonSeasonRunoffTable = withButtonHist(SeasonRunoffTable)
const ButtonMonthRunoffHeatmap = withButtonHist(MonthRunoffHeatmap)

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

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
                modalWidth={700}
                varName="pr"
                min={700}
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-evap">
              历史蒸散发变化
              <ButtonHistLine
                modalTitle="历史蒸散发变化（mm）"
                modalWidth={700}
                varName="evap"
                min={900}
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-runoff">
              历史径流深变化
              <ButtonHistLine
                modalTitle="历史径流深变化（mm）"
                modalWidth={700}
                varName="runoff"
                min={200}
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-mk-trend">
              Mann-Kendall 趋势
              <ButtonHistTable 
                modalTitle="Mann-Kendall 趋势检验结果"
                modalWidth={1000}
                varName="raw"
              ></ButtonHistTable>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="group-mk-mutation" title="历史径流突变分析">
            <Menu.Item key="hist-mk_mutation">
              Mann-Kendall 突变
              <ButtonHistLine
                modalTitle="Mann-Kendall 突变检验结果"
                modalWidth={800}
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
                modalWidth={700}
                varName="epsilon_P"
                min={1.4}
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-elastic-evap">
              蒸散发弹性变化
              <ButtonHistLine
                modalTitle="径流的蒸散发弹性变化情况"
                modalWidth={700}
                varName="epsilon_E0"
                max={-0.3}
              ></ButtonHistLine>
            </Menu.Item>
            <Menu.Item key="hist-elastic-n">
              下垫面弹性变化
              <ButtonHistLine
                modalTitle="径流的下垫面弹性变化情况"
                modalWidth={700}
                varName="epsilon_n"
                max={-0.6}
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
        <SubMenu key="sub3" icon={<CloudOutlined />} title="未来气候变化下的澜沧江气候径流预估">
          <Menu.ItemGroup key="group-future-climate" title="未来气候变化分析">
            <Menu.Item key="bias-compare">
              偏差校正结果比较
              <BcPanelButton></BcPanelButton>
            </Menu.Item>
            <Menu.Item key="climate-anomaly">
              气候异常
              <ButtonAnomalyChart
                modalTitle="气候异常折线图（依次为降水、最高温、最低温）"
                modalWidth={1000}
              ></ButtonAnomalyChart>
            </Menu.Item>
            <SubMenu key="sub3-1" title="未来气候变化空间分布">
              <Menu.Item key="spatial-change-pr">
                降水
                <ScPanelButtonPr></ScPanelButtonPr>
              </Menu.Item>
              <Menu.Item key="spatial-change-tasmax">
                最高温
                <ScPanelButtonTasmax></ScPanelButtonTasmax>
              </Menu.Item>
              <Menu.Item key="spatial-change-tasmin">
                最低温
                <ScPanelButtonTasmin></ScPanelButtonTasmin>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="spatial-trend">
              未来气候变化趋势空间分布
              <StPanelButton></StPanelButton>
            </Menu.Item>
            <Menu.Item key="time-trend">
              未来气候变化时间趋势
              <ButtonTimeTrendTable
                modalTitle="2021-2100年澜沧江气候变化时间趋势"
                modalWidth={700}
              ></ButtonTimeTrendTable>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="group-future-runoff" title="未来径流预估">
            <Menu.Item key="avg-runoff">
              未来年平均流量变化
              <ButtonAvgRunoffChart
                modalTitle="未来平均流量及其变化率"
                modalWidth={800}
              ></ButtonAvgRunoffChart>
            </Menu.Item>
            <Menu.Item key="season-runoff">
              未来季节流量占比变化
              <ButtonSeasonRunoffTable
                modalTitle="未来季节流量占比变化表"
                modalWidth={700}
              ></ButtonSeasonRunoffTable>
            </Menu.Item>
            <Menu.Item key="month-runoff">
              未来月均流量占比变化
              <ButtonMonthRunoffHeatmap
                modalTitle="未来月均流量占比变化热力图"
                modalWidth={700}
              ></ButtonMonthRunoffHeatmap>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </SiderWrap>
  )
}

export default Sider