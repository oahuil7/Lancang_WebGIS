import { SearchOutlined } from "@ant-design/icons/lib/icons"
import { Button, Modal } from "antd"
import { useState } from "react";

const withButtonHist = (WrappedComponent) => {
  return (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };

    const handleOk = () => {
      setIsModalVisible(false);
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };
    
    return (
      <>
        <Button
          className="button"
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}
          onClick={showModal}
        >
        </Button>
        <Modal 
          title={props.modalTitle}
          width={props.modalWidth}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          centered={true}
        >
          <WrappedComponent varName={props.varName} multiLines={props.multiLines}></WrappedComponent>
        </Modal>
      </>
    )
  }
}

export default withButtonHist