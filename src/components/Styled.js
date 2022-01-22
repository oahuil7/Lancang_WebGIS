import styled from "styled-components";
const SiderWitdth = "225px"
const SiderHeight = "100vh - 46px"

const HeaderBarWrap = styled.div`
  .header-name {
    color: #fff;
    float: left;
    background-color: #001529;
    height: 46px;
    width: calc(100% - 203.68px);
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
`
const MapContainerWrap = styled.div`
  #map-container {
    height: calc(${SiderHeight});
    width: calc(100% - ${SiderWitdth});
    position: absolute;
    left: ${SiderWitdth};
  }
`

export {
  MapContainerWrap,
  HeaderBarWrap,
  SiderWrap
}