import { Menu } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { SiderWrap } from './Styled'
import { GlobalOutlined } from '@ant-design/icons/lib/icons';
import SwitchRegion from './Switch/SwitchRegion';
import SwitchStation from './Switch/SwitchStation';


const Sider = () => {
  return (
    <SiderWrap>
      <Menu mode='inline'>
        <SubMenu key="sub1" icon={<GlobalOutlined />} title="澜沧江基础地理信息">
          <Menu.Item key="loadRegion">
            流域范围
            <SwitchRegion></SwitchRegion>
          </Menu.Item>
          <Menu.Item key="loadStaton">
            水文气象站点
            <SwitchStation></SwitchStation>
          </Menu.Item>
          <Menu.Item key="k3">option3</Menu.Item>
        </SubMenu>
      </Menu>
    </SiderWrap>
  )
}

export default Sider