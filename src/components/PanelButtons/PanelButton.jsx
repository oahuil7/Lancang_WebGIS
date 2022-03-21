import { useState, useContext } from "react";
import { Button, Modal, Radio } from "antd";
import { MapContext } from "../Context/ContextManager";
import { tileLayer } from "leaflet";
import { GS_WMS } from "../../utils/apis";

const PanelButton = ({ Opts, width }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [radioVal, setRadioVal] = useState(Opts[0].value)
  const [curLayer, setCurLayer] = useState(null)
  const map = useContext(MapContext)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const layer = await tileLayer.wms(GS_WMS, {
      layers: "Lancang:" + radioVal,
      format: 'image/png',
      transparent: true,
      zIndex:999,
      opacity:0.8,
    })
    if(curLayer) {
      map.removeLayer(curLayer)
    }
    map.addLayer(layer)
    setCurLayer(layer)
    setIsModalVisible(false)
  };

  const handleCancel = () => {
    if(curLayer) map.removeLayer(curLayer)
    setIsModalVisible(false);
  };

  const onRadioChange = (e) => {
    setRadioVal(e.target.value)
  }

  return (
    <>
      <Button
        className="button"
        // type="primary"
        shape="round"
        onClick={showModal}
      >查询面板</Button>
      <Modal
        title="选择图层"
        visible={isModalVisible}
        onOk={handleOk}
        okText="查询"
        onCancel={handleCancel}
        cancelText="清除图层"
        mask={false}
        width={width}
      >
        <Radio.Group defaultValue={Opts[0].value} buttonStyle="solid" onChange={onRadioChange}>
          {Opts.map(item => {
            return <Radio.Button value={item.value} key={item.value}>{item.label}</Radio.Button>
          })}
        </Radio.Group>
      </Modal>
    </>
  )
}

export default PanelButton