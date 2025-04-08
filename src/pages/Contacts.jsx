import React, { useEffect, useState } from "react";
import { Layout, Typography, Button, Table, Spin, message } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import "../styles/Contacts.css";
import AddContactModal from "../components/AddContactModal";
import UploadContactModal from "../components/UploadContactModal";

const { Content } = Layout;
const { Title } = Typography;

const contactsColumns = [
  { title: "S/N", dataIndex: "sn", key: "sn" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Phone Number", dataIndex: "phoneNumber", key: "phoneNumber" },
  { title: "Email", dataIndex: "email", key: "email" },
  { title: "Address", dataIndex: "address", key: "address" },
  { title: "Description", dataIndex: "description", key: "description" },
  { title: "Total Due", dataIndex: "totalDue", key: "totalDue" },
  {
    title: "Action",
    key: "action",
    render: () => <span style={{ color: "#999" }}>...</span>,
  },
];

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUploadModalVisible, setIsUploadModalVisible] = useState(false);

  // Fetch contacts from API
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://54.243.4.152:3000/api/contacts/getContacts"
      );
      const data = response.data.data || [];

      // Map contacts for table
      const mappedContacts = data.map((item, index) => ({
        key: item._id,
        sn: index + 1,
        name: item.name,
        phoneNumber: item.phoneNumber,
        email: item.email,
        address: item.address,
        description: item.description,
        totalDue: item.totalDue,
      }));

      setContacts(mappedContacts);
    } catch (error) {
      console.error("Failed to load contacts:", error);
      message.error("Failed to load contacts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);
  const showUploadModal = () => setIsUploadModalVisible(true);
  const hideUploadModal = () => setIsUploadModalVisible(false);

  const handleUploadContact = () => {
    console.log("Contact file uploaded!");
    hideUploadModal();
  };

  const handleAddContact = () => {
    console.log("Contact added!");
    hideModal();
  };

  return (
    <Layout className="contacts-container">
      <Layout>
        <Content className="content-section">
          <div className="contacts-header">
            <Title level={3}>Contacts</Title>
            <div className="contacts-actions">
              <Button
                icon={<PlusOutlined />}
                onClick={showModal}
                className="add-contact-btn"
              >
                Add Contact
              </Button>
              <Button
                icon={<UploadOutlined />}
                onClick={showUploadModal}
                className="upload-contact-btn"
              >
                Upload Contact
              </Button>
            </div>
          </div>

          {/* Contacts Table */}
          {loading ? (
            <div style={{ textAlign: "center", margin: "2rem 0" }}>
              <Spin size="large" />
            </div>
          ) : (
            <Table
              columns={contactsColumns}
              dataSource={contacts}
              pagination={{ pageSize: 15 }}
            />
          )}

          <AddContactModal
            visible={isModalVisible}
            onCancel={hideModal}
            onSubmit={handleAddContact}
          />
          <UploadContactModal
            visible={isUploadModalVisible}
            onCancel={hideUploadModal}
            onUpload={handleUploadContact}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Contacts;
