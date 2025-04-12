import React, { useEffect, useState } from "react";
import { Layout, Typography, Card, Button, Table } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/overview.css";
import api from "../components/api";
import RecentActivity from "../components/RecentActivity";

const { Content } = Layout;
const { Title, Text } = Typography;

const Overview = () => {
  const [balance, setBalance] = useState(0);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    failed: 0,
    success: 0,
  });

  const [chartData, setChartData] = useState([]);

  const fetchBalance = async () => {
    try {
      const res = await api.get("/transactions/getBalance");
      setBalance(res.data.balance);
    } catch (err) {
      console.error("Failed to fetch balance", err);
    }
  };

  const fetchGraphData = async () => {
    try {
      const res = await api.get("/sms/history");
      const rawData = res.data.data || [];
      const grouped = {};

      rawData.forEach((item) => {
        const day = new Date(item.date).toLocaleDateString("en-US", {
          weekday: "short",
        });
        if (!grouped[day]) {
          grouped[day] = { Success: 0, Failed: 0, Pending: 0 };
        }
        grouped[day][item.status] = (grouped[day][item.status] || 0) + 1;
      });

      const chart = Object.entries(grouped).map(([day, values]) => ({
        day,
        ...values,
      }));

      setChartData(chart);
    } catch (err) {
      console.error("Failed to fetch chart data", err);
    }
  };

  useEffect(() => {
    fetchBalance();
    fetchGraphData();
  }, []);

  return (
    <Layout className="overview-container">
      <Layout>
        <Content className="content-section">
          <Title level={3}>Welcome back, Joe</Title>

          <div className="stats-grid">
            <Card className="stat-card">
              <div className="card-header">
                <Text className="card-title">Total Messages Sent</Text>
                <span className="card-icon">📩</span>
              </div>
              <Title level={2} className="card-value">
                {stats.total}
              </Title>
              <Text className="card-subtext">(SMS, Email, WhatsApp)</Text>
            </Card>

            <Card className="stat-card">
              <div className="card-header">
                <Text className="card-title">Pending Messages</Text>
                <span className="card-icon">⏳</span>
              </div>
              <Title level={2} className="card-value">
                {stats.pending}
              </Title>
              <Text className="card-subtext">(SMS, Email, WhatsApp)</Text>
            </Card>

            <Card className="stat-card">
              <div className="card-header">
                <Text className="card-title">Delivery Success Rate</Text>
                <span className="card-icon">✅</span>
              </div>
              <Title level={2} className="card-value">
                {stats.success}%
              </Title>
              <Text className="card-subtext">(SMS, Email, WhatsApp)</Text>
            </Card>

            <Card className="stat-card">
              <div className="card-header">
                <Text className="card-title">Failed Messages</Text>
                <span className="card-icon">❌</span>
              </div>
              <Title level={2} className="card-value">
                {stats.failed}%
              </Title>
              <Text className="card-subtext">(SMS, Email, WhatsApp)</Text>
            </Card>
          </div>

          <div className="activity-section">
            <div className="activity-chart activity-chart-scroll">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Success" stroke="#20BF55" />
                  <Line type="monotone" dataKey="Pending" stroke="#FDC02B" />
                  <Line type="monotone" dataKey="Failed" stroke="#D12C2C" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="right-sidebar">
              <Card className="balance-card">
                <Text className="balance-title">Current Balance</Text>
                <Title level={3} className="balance-amount">
                  ₦{balance}
                </Title>
                <Button type="primary" className="top-up-btn">
                  Top up +
                </Button>
              </Card>

              <Card className="quick-links-card">
                <Text className="quick-links-title">Quick Links</Text>
                <div className="quick-link">
                  <span>📨</span> Send Messages
                </div>
                <div className="quick-link">
                  <span>📤</span> Upload Contacts
                </div>
              </Card>
            </div>
          </div>

          <RecentActivity />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Overview;
