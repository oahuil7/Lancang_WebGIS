import styled from "styled-components";
import noto from "../assets/NotoSerifSC-Regular.otf"

const SiderWitdth = "350px"
const SiderHeight = "100vh - 46px"

const HeaderBarWrap = styled.div`
  @font-face {
    font-family: 'noto';
    src: url(${noto}) format('TrueType');
  }

  height: 47px;
  border-bottom: 1px solid #8080806e;

  .header-name {
    font-family: 'noto';
    color: #000;
    float: left;
    ${'' /* background-color: #001529; */}
    background-color: #fff;
    height: 46px;
    width: calc(100% - 100px);
    text-align: center;
    line-height: 46px;
    font-size: 30px;
  }

  .links {
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 47px;
    
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0 22px 0 22px;
    }
  }
`

const SiderWrap = styled.div`
  height: calc(${SiderHeight});
  width: ${SiderWitdth};
  position: absolute;
  overflow-y: auto;

  .switch {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .button {
    position: absolute;
    right: 10px;
    top: 4px;
  }
`
const MapContainerWrap = styled.div`
  #map-container {
    height: calc(${SiderHeight});
    width: calc(100% - ${SiderWitdth});
    position: absolute;
    left: ${SiderWitdth};
  }
`

const ResetButtonWrap = styled.div`
  button {
    position: absolute;
    left: calc(${SiderWitdth} + 54px);
    top: 56px;
    height: 64px;
    width: 34px;
    z-index: 999;
    background: #fff;
    border: 2px solid rgba(0,0,0,0.2);
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  button:hover {
    background: #f4f4f4;
  }
`

export {
  MapContainerWrap,
  HeaderBarWrap,
  SiderWrap,
  ResetButtonWrap
}