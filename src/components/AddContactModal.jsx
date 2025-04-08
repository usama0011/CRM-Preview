import { Modal, Form, Input, Button } from "antd";
import { useState } from "react";

const AddContactModal = ({ visible, onCancel, onSubmit }) => {
  return (
    <Modal
      title="Add Contact"
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <Form layout="vertical">
        <Form.Item label="Name">
          <Input placeholder="Doe Joe" disabled />
        </Form.Item>

        <Form.Item label="Email address">
          <Input placeholder="email@example.com" />
        </Form.Item>

        <Form.Item label="Mobile Number">
          <Input placeholder="234 000 0000" />
        </Form.Item>

        <Form.Item label="WhatsApp Number">
          <Input placeholder="234 000 0000" />
        </Form.Item>

        <Form.Item label="Group name (optional)">
          <Input placeholder="Enter group name" />
        </Form.Item>

        <div className="modal-footer">
          <Button onClick={onCancel} className="cancel-btn">
            Cancel
          </Button>
          <Button type="primary" className="add-btn" onClick={onSubmit}>
            Add group
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddContactModal;
