import React from "react";
import {
  Layout,
  Menu,
  Card,
  Typography,
  Avatar,
  Table,
  Button,
  Space,
  Input,
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

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

const data = [
  { day: "Mon", Success: 900, Pending: 300, Failed: 200 },
  { day: "Tue", Success: 1200, Pending: 500, Failed: 400 },
  { day: "Wed", Success: 800, Pending: 200, Failed: 300 },
  { day: "Thu", Success: 1100, Pending: 400, Failed: 500 },
  { day: "Fri", Success: 1400, Pending: 600, Failed: 700 },
  { day: "Sat", Success: 1000, Pending: 500, Failed: 600 },
  { day: "Sun", Success: 950, Pending: 450, Failed: 550 },
];

const columns = [
  { title: "S/N", dataIndex: "sn", key: "sn" },
  { title: "Task", dataIndex: "task", key: "task" },
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Time", dataIndex: "time", key: "time" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
    ),
  },
];

const tableData = [
  {
    key: "1",
    sn: "1",
    task: "Contact upload",
    date: "8/8/2024",
    time: "6:45pm",
    status: "Successful",
  },
  {
    key: "2",
    sn: "2",
    task: "Email sent",
    date: "9/10/2024",
    time: "10:00am",
    status: "Failed",
  },
  {
    key: "3",
    sn: "3",
    task: "Account setting",
    date: "12/12/2024",
    time: "8:50am",
    status: "Successful",
  },
  {
    key: "4",
    sn: "4",
    task: "Sms sent",
    date: "1/1/2025",
    time: "12:00pm",
    status: "Pending",
  },
];

const Overview = () => {
  return (
    <Layout className="overview-container">
      {/* Sidebar */}
      <Sider width={230} className="sidebar">
        <div className="logo">
          <img
            className="logo-image"
            src="https://s3-alpha-sig.figma.com/img/f050/a83a/e31753cdfc55a452f9e80da2ef64a3b5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KFH2mv2I1IVUpnsHdtV7XRGi276THvB9yRmE6~6nOQ7qEUbFz1IvmUHNG40AF2mk8v~bGZdAa09~EASeDmsot8tzx7e4sbI75eh66wfhnIRPjOcKvEnyUYNaJzTyTUYZ9m69ylSktZn~DShj0Pcfak95cB8ugArYFpI19s-LlIUlP79bNNXShYbjNvZ~n0z0IF~tfTvvMbKa6WxdEP4fOOAWaiE4z16BAXPSueajx7FrYj7-bTB9gbcZs6DNE61ScSCS5SPbz4KPSeOU5H1xMYHo333S66zhrqK-xw8ZG5U7xua4OJ2ad~vblfFph5F2EDpDSZ14~Q1iDcvusRUmtA__"
            alt="Dejyle"
          />
          <span className="brand-name">Dejyle</span>
        </div>

        <Menu
          theme="light"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          className="custom-menu"
        >
          <Menu.Item key="1" icon={<HomeOutlined />} className="menu-item">
            Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<MessageOutlined />} className="menu-item">
            Messages
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />} className="menu-item">
            Contacts
          </Menu.Item>
          <Menu.Item key="4" icon={<FileTextOutlined />} className="menu-item">
            Delivery Report
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<CreditCardOutlined />}
            className="menu-item"
          >
            Payment
          </Menu.Item>
          <Menu.Item key="6" icon={<SettingOutlined />} className="menu-item">
            Settings
          </Menu.Item>
          <Menu.Item
            key="7"
            icon={<LogoutOutlined />}
            className="menu-item logout"
          >
            Logout
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout>
        <Header className="header">
          <MenuOutlined className="menu-icon" />
          <Input
            className="search-bar"
            prefix={<SearchOutlined />}
            placeholder="Search"
          />
          <div className="user-infso">
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&s" />
            <Text>Joe Doe</Text>
          </div>
        </Header>
        <Content className="content-section">
          <Title level={3}>Welcome back, Joe</Title>

          <div className="stats-grid">
            <Card className="stat-card">
              <div className="card-header">
                <Text className="card-title">Total Messages Sent</Text>
                <span className="card-icon">📩</span>{" "}
                {/* Replace with actual icon */}
              </div>
              <Title level={2} className="card-value">
                12,000
              </Title>
              <Text className="card-subtext">(SMS, Email, WhatsApp)</Text>
            </Card>

            <Card className="stat-card">
              <div className="card-header">
                <Text className="card-title">Pending Messages</Text>
                <span className="card-icon">⏳</span>
              </div>
              <Title level={2} className="card-value">
                150
              </Title>
              <Text className="card-subtext">(SMS, Email, WhatsApp)</Text>
            </Card>

            <Card className="stat-card">
              <div className="card-header">
                <Text className="card-title">Delivery Success Rate</Text>
                <span className="card-icon">✅</span>
              </div>
              <Title level={2} className="card-value">
                85%
              </Title>
              <Text className="card-subtext">(SMS, Email, WhatsApp)</Text>
            </Card>

            <Card className="stat-card">
              <div className="card-header">
                <Text className="card-title">Failed Messages</Text>
                <span className="card-icon">❌</span>
              </div>
              <Title level={2} className="card-value">
                15%
              </Title>
              <Text className="card-subtext">(SMS, Email, WhatsApp)</Text>
            </Card>
          </div>

          <div className="activity-section">
            {/* Graph */}
            <div className="activity-chart">
              <Title level={4}>Activity Trends</Title>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
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

            {/* Right Side - Balance & Quick Links */}
            <div className="right-sidebar">
              {/* Current Balance Card */}
              <Card className="balance-card">
                <Text className="balance-title">Current Balance</Text>
                <Title level={3} className="balance-amount">
                  ₦2000
                </Title>
                <Button type="primary" className="top-up-btn">
                  Top up +
                </Button>
              </Card>

              {/* Quick Links */}
              <Card className="quick-links-card" style={{ textAlign: "left" }}>
                <Text
                  className="quick-links-title"
                  style={{ textAlign: "left" }}
                >
                  Quick Links
                </Text>
                <div className="quick-link">
                  <span>📨</span> Send Messages
                </div>
                <div className="quick-link">
                  <span>📤</span> Upload Contacts
                </div>
              </Card>
            </div>
          </div>

          {/* Recent Activity Table */}
          <Title level={4}>Recent Activity</Title>
          <Table columns={columns} dataSource={tableData} pagination={false} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Overview;
