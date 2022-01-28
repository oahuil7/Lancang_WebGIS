import styled from "styled-components";
const SiderWitdth = "300px"
const SiderHeight = "100vh - 46px"

const HeaderBarWrap = styled.div`
  .header-name {
    color: #fff;
    float: left;
    background-color: #001529;
    height: 46px;
    width: calc(100% - 200px);
    text-align: center;
    line-height: 46px;
    font-size: 20px;
  }
`

const SiderWrap = styled.div`
  height: calc(${SiderHeight});
  width: ${SiderWitdth};
  position: absolute;

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