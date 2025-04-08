import React, { useState } from "react";
import {
  Layout,
  Menu,
  Typography,
  Avatar,
  Input,
  Tabs,
  Form,
  Select,
  Button,
  Table,
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
} from "@ant-design/icons";
import "../styles/sms.css";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

// SMS Form Component
const SMSForm = () => (
  <Form layout="vertical" className="sms-form">
    <div className="form-row">
      <Form.Item label="Sender Name" className="form-item">
        <Input disabled placeholder="Doe Joe" />
      </Form.Item>
      <Form.Item label="SMS Type" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="form-row">
      <Form.Item label="Add Recipient Contact" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Message Template" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
    </div>

    <Form.Item label="Write Message">
      <Input.TextArea rows={4} placeholder="Type Message" />
    </Form.Item>

    <Button type="primary" className="send-btn">
      Send
    </Button>
  </Form>
);

const EmailForm = () => (
  <Form layout="vertical" className="email-form">
    <div className="form-row">
      <Form.Item label="Sender ID" className="form-item">
        <Input disabled placeholder="Doe Joe" />
      </Form.Item>
      <Form.Item label="Sender Email Address" className="form-item">
        <Input disabled placeholder="email@example.com" />
      </Form.Item>
    </div>

    <div className="form-row">
      <Form.Item label="Subject" className="form-item">
        <Input placeholder="Enter subject" />
      </Form.Item>
      <Form.Item label="Email Type" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="form-row">
      <Form.Item label="Add Recipient Contact" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Message Template" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
    </div>

    <Form.Item label="Write Message">
      <Input.TextArea rows={4} placeholder="Type Message" />
    </Form.Item>

    <Button type="primary" className="send-btn">
      Send
    </Button>
  </Form>
);
const WhatsAppForm = () => (
  <Form layout="vertical" className="whatsapp-form">
    <div className="form-row">
      <Form.Item label="Sender ID" className="form-item">
        <Input disabled placeholder="Doe Joe" />
      </Form.Item>
      <Form.Item label="Sender WhatsApp Number" className="form-item">
        <Input disabled placeholder="234 000 0000" />
      </Form.Item>
    </div>

    <div className="form-row">
      <Form.Item label="WhatsApp Type" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Add Recipient Contact" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
    </div>

    <div className="form-row">
      <Form.Item label="Message Format" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Message Template" className="form-item">
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
        </Select>
      </Form.Item>
    </div>

    <Form.Item label="Write Message">
      <Input.TextArea rows={4} placeholder="Type message" />
    </Form.Item>

    <Button type="primary" className="send-btn">
      Send
    </Button>
  </Form>
);

// SMS History Table Component
const SMSHistory = ({ onBack }) => {
  const columns = [
    { title: "S/N", dataIndex: "sn", key: "sn" },
    { title: "Recipient Contact", dataIndex: "contact", key: "contact" },
    { title: "Message Content", dataIndex: "message", key: "message" },
    { title: "Sent Date", dataIndex: "date", key: "date" },
    { title: "Send Time", dataIndex: "time", key: "time" },
    { title: "Volume", dataIndex: "volume", key: "volume" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => "...",
    },
  ];

  const data = [
    {
      key: "1",
      sn: "1",
      contact: "+080 000 458 7282",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "2",
      sn: "2",
      contact: "+080 000 458 7282",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "3",
      sn: "3",
      contact: "Clients",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "45",
    },
    {
      key: "4",
      sn: "4",
      contact: "+080 000 458 7282",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "5",
      sn: "5",
      contact: "Customers",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "300",
    },
  ];

  const whattcolumns = [
    { title: "S/N", dataIndex: "sn", key: "sn" },
    { title: "Recipient Number", dataIndex: "number", key: "number" },
    { title: "Message Content", dataIndex: "message", key: "message" },
    { title: "Sent Date", dataIndex: "date", key: "date" },
    { title: "Sent Time", dataIndex: "time", key: "time" },
    { title: "Volume", dataIndex: "volume", key: "volume" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => "...",
    },
  ];

  const Whattdata = [
    {
      key: "1",
      sn: "1",
      number: "234 843 651 7352",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "2",
      sn: "2",
      number: "234 843 651 7352",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "3",
      sn: "3",
      number: "234 843 651 7352",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "4",
      sn: "4",
      number: "Clients",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "45",
    },
    {
      key: "5",
      sn: "5",
      number: "234 843 651 7352",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "6",
      sn: "6",
      number: "234 843 651 7352",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "7",
      sn: "7",
      number: "Customers",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "300",
    },
    {
      key: "8",
      sn: "8",
      number: "234 843 651 7352",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
  ];
  const Emailcolumns = [
    { title: "S/N", dataIndex: "sn", key: "sn" },
    { title: "Recipient Email", dataIndex: "email", key: "email" },
    { title: "Message Content", dataIndex: "message", key: "message" },
    { title: "Sent Date", dataIndex: "date", key: "date" },
    { title: "Send Time", dataIndex: "time", key: "time" },
    { title: "Volume", dataIndex: "volume", key: "volume" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: () => "...",
    },
  ];

  const Emaildata = [
    {
      key: "1",
      sn: "1",
      email: "example@mail",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "2",
      sn: "2",
      email: "example@mail",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "3",
      sn: "3",
      email: "example@mail",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "4",
      sn: "4",
      email: "Clients",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "45",
    },
    {
      key: "5",
      sn: "5",
      email: "example@mail",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "6",
      sn: "6",
      email: "example@mail",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
    {
      key: "7",
      sn: "7",
      email: "Customers",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "300",
    },
    {
      key: "8",
      sn: "8",
      email: "example@mail",
      message: "Lorem",
      date: "Jun 9, 2024",
      time: "2:55am",
      volume: "1",
    },
  ];
  return (
    <div>
      <div className="sms-header">
        <Title level={3}>SMS History</Title>
        <Button className="send-new-btn" onClick={onBack}>
          Send New SMS
        </Button>
      </div>
      <Tabs defaultActiveKey="SMS" className="sms-tabs">
        <Tabs.TabPane tab="SMS" key="SMS">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{ pageSize: 10 }}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Email" key="Email">
          <Table
            columns={Emailcolumns}
            dataSource={Emaildata}
            pagination={{ pageSize: 10 }}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="WhatsApp" key="WhatsApp">
          <Table
            columns={whattcolumns}
            dataSource={Whattdata}
            pagination={{ pageSize: 10 }}
          />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

const SMS = () => {
  const [activeTab, setActiveTab] = useState("SMS");
  const [showHistory, setShowHistory] = useState(false);

  return (
    <Layout className="sms-container">
      {/* Sidebar */}

      {/* Main Content */}
      <Layout>
        <Content className="content-section">
          {showHistory ? (
            <SMSHistory onBack={() => setShowHistory(false)} />
          ) : (
            <>
              <div className="sms-header">
                <Title level={3}>SMS</Title>
                <Button
                  className="sms-history-btn"
                  onClick={() => setShowHistory(true)}
                >
                  📜 SMS History
                </Button>
              </div>
              <Tabs
                activeKey={activeTab}
                onChange={setActiveTab}
                className="sms-tabs"
              >
                <Tabs.TabPane tab="SMS" key="SMS">
                  <SMSForm />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Email" key="Email">
                  <EmailForm />
                </Tabs.TabPane>
                <Tabs.TabPane tab="WhatsApp" key="WhatsApp">
                  <WhatsAppForm />
                </Tabs.TabPane>
              </Tabs>
            </>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SMS;
