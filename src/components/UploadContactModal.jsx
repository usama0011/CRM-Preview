import { Modal, Form, Input, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useState } from "react";

const UploadContactModal = ({ visible, onCancel, onUpload }) => {
  const [fileList, setFileList] = useState([]);

  const handleUpload = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <Modal
      title="Upload Contact"
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <Form layout="vertical">
        <Form.Item label="Group Name (optional)">
          <Input placeholder="Enter group name" />
        </Form.Item>

        <Form.Item label="Select file">
          <Upload
            fileList={fileList}
            beforeUpload={() => false}
            onChange={handleUpload}
            accept=".csv"
          >
            <Button icon={<UploadOutlined />}>Choose File</Button>
          </Upload>
          <small style={{ color: "#F58634" }}>support CSV file</small>
        </Form.Item>

        <div className="modal-footer">
          <Button onClick={onCancel} className="cancel-btn">
            Cancel
          </Button>
          <Button type="primary" className="upload-btn" onClick={onUpload}>
            Upload contact
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default UploadContactModal;
