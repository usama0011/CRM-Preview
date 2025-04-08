import React, { useState } from "react";
import {
  Layout,
  Menu,
  Typography,
  Avatar,
  Input,
  Tabs,
  Table,
  Button,
} from "antd";
import {
  HomeOutlined,
  MessageOutlined,
  ContactsOutlined,
  FileTextOutlined,
  CreditCardOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuOutlined,
  SearchOutlined,
  DownloadOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "../styles/DeliveryReport.css";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const columns = [
  { title: "S/N", dataIndex: "sn", key: "sn" },
  { title: "Recipient Contact", dataIndex: "recipient", key: "recipient" },
  { title: "Sent Date & Time", dataIndex: "sentDate", key: "sentDate" },
  {
    title: "Delivery Date & Time",
    dataIndex: "deliveryDate",
    key: "deliveryDate",
  },
  { title: "Volume", dataIndex: "volume", key: "volume" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => <DeleteOutlined className="delete-icon" />,
  },
];

const data = [
  {
    key: "1",
    sn: "1",
    recipient: "+080 000 458 7282",
    sentDate: "Jun 9, 2024, 11:45pm",
    deliveryDate: "Jun 9, 2024, 11:45pm",
    volume: "1",
    status: "Delivered",
  },
  {
    key: "2",
    sn: "2",
    recipient: "+080 000 458 7282",
    sentDate: "Jun 9, 2024, 11:45pm",
    deliveryDate: "Jun 9, 2024, 11:45pm",
    volume: "1",
    status: "Failed",
  },
  {
    key: "3",
    sn: "3",
    recipient: "+080 000 458 7282",
    sentDate: "Jun 9, 2024, 11:45pm",
    deliveryDate: "Jun 9, 2024, 11:45pm",
    volume: "1",
    status: "Delivered",
  },
  {
    key: "4",
    sn: "4",
    recipient: "Clients",
    sentDate: "Jun 9, 2024, 11:45pm",
    deliveryDate: "Jun 9, 2024, 11:45pm",
    volume: "45",
    status: "40 Delivered, 5 Failed",
  },
  {
    key: "5",
    sn: "5",
    recipient: "+080 000 458 7282",
    sentDate: "Jun 9, 2024, 11:45pm",
    deliveryDate: "Jun 9, 2024, 11:45pm",
    volume: "1",
    status: "Delivered",
  },
  {
    key: "6",
    sn: "6",
    recipient: "Customers",
    sentDate: "Jun 9, 2024, 11:45pm",
    deliveryDate: "Jun 9, 2024, 11:45pm",
    volume: "300",
    status: "Delivered",
  },
];

const DeliveryReport = () => {
  const [activeTab, setActiveTab] = useState("SMS");

  return (
    <Layout className="delivery-report-container">
      {/* Sidebar */}

      {/* Main Content */}
      <Layout>
        <Content className="content-section">
          <div className="delivery-header">
            <Title level={3}>Delivery Report</Title>
            <Button className="download-report-btn">
              <DownloadOutlined /> Download Report
            </Button>
          </div>

          {/* Tabs */}
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            className="delivery-tabs"
          >
            <Tabs.TabPane tab="SMS" key="SMS">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Email" key="Email">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="WhatsApp" key="WhatsApp">
              <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 10 }}
              />
            </Tabs.TabPane>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DeliveryReport;
