import { HeaderBarWrap } from './Styled';
import { QuestionCircleOutlined, GithubOutlined } from '@ant-design/icons/lib/icons';

const HeaderBar = () => {

  return (
    <HeaderBarWrap>
      <div className="header-name">澜沧江流域 WebGIS 系统</div>
      <div className='links'>
        <a href='https://github.com/oahuil7/Lancang_WebGIS' target="_blank" rel="noreferrer">
          <GithubOutlined style={{fontSize: "30px", color: "grey"}}/>
        </a>
        <a href='https://github.com/oahuil7/Lancang_WebGIS/blob/main/README.md' target="_blank" rel="noreferrer">
          <QuestionCircleOutlined style={{fontSize: "30px", color: "grey"}}/>
        </a>
      </div>
    </HeaderBarWrap>
  )
}

export default HeaderBar