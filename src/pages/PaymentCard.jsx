import React, { useEffect, useState } from "react";
import {
  Layout,
  Typography,
  Tabs,
  Form,
  Input,
  Button,
  Table,
  Radio,
  message,
} from "antd";
import "../styles/PaymentCard.css";
import api from "../components/api";
// ✅ Make sure this is your central axios config

const { Content } = Layout;
const { Title, Text } = Typography;

const PaymentCard = () => {
  const [activeTab, setActiveTab] = useState("Card");
  const [form] = Form.useForm();
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Table Columns
  const columns = [
    { title: "S/N", dataIndex: "sn", key: "sn" },
    { title: "Payment Method", dataIndex: "method", key: "method" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Status", dataIndex: "status", key: "status" },
  ];

  // Fetch Payment History
  const fetchPaymentHistory = async () => {
    try {
      setLoading(true);
      const response = await api.get("/payments/history");
      const mapped = response.data.data.map((item, index) => ({
        sn: index + 1,
        method: item.paymentMethod || "N/A",
        amount: `₦${item.amount}`,
        date: item.date || "N/A",
        status: item.status || "Pending",
      }));
      setPaymentHistory(mapped);
    } catch (err) {
      message.error("Failed to load payment history");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentHistory();
  }, []);

  // Handle Payment
  const handlePayment = async (method) => {
    try {
      const values = await form.validateFields();
      const payload = {
        amount: parseFloat(values.amount),
        paymentMethod: method,
      };

      await api.post("/payments/initiate", payload);
      message.success("Payment initiated successfully!");
      fetchPaymentHistory();
      form.resetFields();
    } catch (err) {
      console.error("Payment error:", err);
      message.error(err?.response?.data?.message || "Payment failed");
    }
  };

  return (
    <Layout className="payment-container">
      <Layout>
        <Content className="content-section">
          <div className="payment-header">
            <Title level={3}>Payment</Title>
            <Button
              onClick={fetchPaymentHistory}
              className="payment-history-btn"
            >
              📜 Refresh History
            </Button>
          </div>

          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            className="payment-tabs"
          >
            <Tabs.TabPane tab="Card" key="Card">
              <Form layout="vertical" form={form} className="payment-form">
                <Title level={5}>Payment Method</Title>
                <Radio.Group value="Card">
                  <Radio.Button value="Card" className="active-tab">
                    💳 Card
                  </Radio.Button>
                  <Radio.Button value="Bank Transfer">
                    🏦 Bank Transfer
                  </Radio.Button>
                </Radio.Group>

                <Form.Item
                  name="amount"
                  label="Amount"
                  rules={[{ required: true, message: "Please enter amount" }]}
                >
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
                  <Button
                    className="cancel-btn"
                    onClick={() => form.resetFields()}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    className="pay-btn"
                    onClick={() => handlePayment("Card")}
                  >
                    Pay
                  </Button>
                </div>
              </Form>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Bank Transfer" key="Bank Transfer">
              <Form layout="vertical" form={form} className="payment-form">
                <Title level={5}>Payment Method</Title>
                <Radio.Group value="Bank Transfer">
                  <Radio.Button value="Card">💳 Card</Radio.Button>
                  <Radio.Button value="Bank Transfer" className="active-tab">
                    🏦 Bank Transfer
                  </Radio.Button>
                </Radio.Group>

                <Form.Item
                  name="amount"
                  label="Amount"
                  rules={[{ required: true, message: "Please enter amount" }]}
                >
                  <Input placeholder="₦0.00" />
                </Form.Item>

                <Form.Item label="Bank Name">
                  <Input placeholder="Enter bank name" />
                </Form.Item>

                <Form.Item label="Account Number">
                  <Input placeholder="234 000 0000" />
                </Form.Item>

                <div className="modal-footer">
                  <Button
                    className="cancel-btn"
                    onClick={() => form.resetFields()}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="primary"
                    className="confirm-btn"
                    onClick={() => handlePayment("Bank Transfer")}
                  >
                    I have paid
                  </Button>
                </div>
              </Form>
            </Tabs.TabPane>
          </Tabs>

          <Title level={4}>Payment History</Title>
          <Table
            columns={columns}
            dataSource={paymentHistory}
            loading={loading}
            pagination={false}
            rowKey="sn"
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PaymentCard;
