import { HeaderBarWrap } from './Styled';
import { Menu } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons/lib/icons';

const HeaderBar = () => {

  return (
    <HeaderBarWrap>
      <div className="header-name">澜沧江流域 WebGIS 系统</div>
      <Menu id="header-menu" theme="dark" mode="horizontal">
        <Menu.Item key="about" icon={<QuestionCircleOutlined />}>关于</Menu.Item>
        <Menu.Item key="github" icon={<QuestionCircleOutlined />}>GitHub</Menu.Item>
      </Menu>
    </HeaderBarWrap>
  )
}

export default HeaderBar