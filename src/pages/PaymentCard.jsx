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
  Radio,
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
import "../styles/PaymentCard.css";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const PaymentCard = () => {
  const [activeTab, setActiveTab] = useState("Card");

  const columns = [
    { title: "S/N", dataIndex: "sn", key: "sn" },
    { title: "Payment Method", dataIndex: "method", key: "method" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  const paymentHistory = [
    {
      sn: 1,
      method: "Card",
      amount: "₦10,000",
      date: "12/05/2024",
      status: "Successful",
    },
    {
      sn: 2,
      method: "Bank Transfer",
      amount: "₦5,000",
      date: "10/05/2024",
      status: "Pending",
    },
  ];

  return (
    <Layout className="payment-container">
      {/* Sidebar */}

      {/* Main Content */}
      <Layout>
        <Content className="content-section">
          <div className="payment-header">
            <Title level={3}>Payment</Title>
            <Button className="payment-history-btn">📜 Payment History</Button>
          </div>

          {/* Tabs */}
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            className="payment-tabs"
          >
            <Tabs.TabPane tab="Card" key="Card">
              <Form layout="vertical" className="payment-form">
                <Title level={5}>Payment Method</Title>
                <Radio.Group value="Card">
                  <Radio.Button value="Card" className="active-tab">
                    💳 Card
                  </Radio.Button>
                  <Radio.Button value="Bank Transfer">
                    🏦 Bank Transfer
                  </Radio.Button>
                </Radio.Group>

                <Form.Item label="Amount">
                  <Input placeholder="₦0.00" />
                </Form.Item>

                <Form.Item label="Card Number">
                  <Input placeholder="XXXX XXXX XXXX XXXX" />
                </Form.Item>

                <div className="form-row">
                  <Form.Item label="Expiration Date" className="form-item">
                    <Input placeholder="MM/YY" />
                  </Form.Item>
                  <Form.Item label="CVC" className="form-item">
                    <Input placeholder="XXX" />
                  </Form.Item>
                </div>

                <Text className="disclaimer-text">
                  By proceeding, you confirm that all details are correct and
                  agree to the terms.
                </Text>

                <div className="modal-footer">
                  <Button className="cancel-btn">Cancel</Button>
                  <Button type="primary" className="pay-btn">
                    Pay
                  </Button>
                </div>
              </Form>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Bank Transfer" key="Bank Transfer">
              <Form layout="vertical" className="payment-form">
                <Title level={5}>Payment Method</Title>
                <Radio.Group value="Bank Transfer">
                  <Radio.Button value="Card">💳 Card</Radio.Button>
                  <Radio.Button value="Bank Transfer" className="active-tab">
                    🏦 Bank Transfer
                  </Radio.Button>
                </Radio.Group>

                <Form.Item label="Amount">
                  <Input placeholder="₦0.00" />
                </Form.Item>

                <Form.Item label="Bank Name">
                  <Input placeholder="Enter bank name" />
                </Form.Item>

                <Form.Item label="Account Number">
                  <Input placeholder="234 000 0000" />
                </Form.Item>

                <div className="modal-footer">
                  <Button className="cancel-btn">Cancel</Button>
                  <Button type="primary" className="confirm-btn">
                    I have paid
                  </Button>
                </div>
              </Form>
            </Tabs.TabPane>
          </Tabs>

          {/* Payment History Table */}
          <Title level={4}>Payment History</Title>
          <Table
            columns={columns}
            dataSource={paymentHistory}
            pagination={false}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PaymentCard;
