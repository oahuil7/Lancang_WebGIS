import { HeaderBarWrap } from './Styled';
import { Menu } from 'antd';
import { QuestionCircleOutlined, GithubOutlined } from '@ant-design/icons/lib/icons';

const HeaderBar = () => {

  return (
    <HeaderBarWrap>
      <div className="header-name">澜沧江流域 WebGIS 系统</div>
      <Menu id="header-menu" theme="dark" mode="horizontal">
        <Menu.Item key="about" icon={<QuestionCircleOutlined />}>关于</Menu.Item>
        <Menu.Item key="github" icon={<GithubOutlined />}>
          <a href='https://github.com/oahuil7/Lancang_WebGIS' target="_blank" rel="noreferrer">GitHub</a>
        </Menu.Item>
      </Menu>
    </HeaderBarWrap>
  )
}

export default HeaderBar