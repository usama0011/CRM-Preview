import React, { useState, useEffect } from "react";
import { Layout, Typography, Tabs, Table, Button, message } from "antd";
import { DownloadOutlined, DeleteOutlined } from "@ant-design/icons";
import "../styles/DeliveryReport.css";
import api from "../components/api"; // ✅ Make sure this path is correct

const { Content } = Layout;
const { Title } = Typography;

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

const DeliveryReport = () => {
  const [activeTab, setActiveTab] = useState("SMS");
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDeliveryReport = async () => {
      try {
        setLoading(true);
        const response = await api.get("/transactions/getDeliveryReport");

        const mappedData = response.data.data.map((item, index) => ({
          key: item._id || index,
          sn: index + 1,
          recipient: item.recipient || "N/A",
          sentDate: item.sentDate || "N/A",
          deliveryDate: item.deliveryDate || "N/A",
          volume: item.volume || 1,
          status: item.status || "Pending",
        }));

        setReportData(mappedData);
      } catch (err) {
        console.error("Error fetching delivery report", err);
        message.error("Failed to load delivery report.");
      } finally {
        setLoading(false);
      }
    };

    fetchDeliveryReport();
  }, []);

  return (
    <Layout className="delivery-report-container">
      <Layout>
        <Content className="content-section">
          <div className="delivery-header">
            <Title level={3}>Delivery Report</Title>
            <Button className="download-report-btn">
              <DownloadOutlined /> Download Report
            </Button>
          </div>

          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            className="delivery-tabs"
          >
            <Tabs.TabPane tab="SMS" key="SMS">
              <Table
                columns={columns}
                dataSource={reportData}
                loading={loading}
                pagination={{ pageSize: 10 }}
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Email" key="Email">
              <Table
                columns={columns}
                dataSource={reportData}
                loading={loading}
                pagination={{ pageSize: 10 }}
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="WhatsApp" key="WhatsApp">
              <Table
                columns={columns}
                dataSource={reportData}
                loading={loading}
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
