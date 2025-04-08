import React, { useState } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Input,
  Tooltip,
  Button,
  Dropdown,
  Badge,
} from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  MessageOutlined,
  ContactsOutlined,
  FileTextOutlined,
  CreditCardOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SearchOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "../styles/AdminLayout.css";

const { Header, Sider, Content } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin");
  };

  // User dropdown menu
  const userMenu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="admin-layout">
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        className="sidebar"
        width={230}
      >
        <div className="sidebar-logo">
          <img
            src="https://s3-alpha-sig.figma.com/img/f050/a83a/e31753cdfc55a452f9e80da2ef64a3b5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KFH2mv2I1IVUpnsHdtV7XRGi276THvB9yRmE6~6nOQ7qEUbFz1IvmUHNG40AF2mk8v~bGZdAa09~EASeDmsot8tzx7e4sbI75eh66wfhnIRPjOcKvEnyUYNaJzTyTUYZ9m69ylSktZn~DShj0Pcfak95cB8ugArYFpI19s-LlIUlP79bNNXShYbjNvZ~n0z0IF~tfTvvMbKa6WxdEP4fOOAWaiE4z16BAXPSueajx7FrYj7-bTB9gbcZs6DNE61ScSCS5SPbz4KPSeOU5H1xMYHo333S66zhrqK-xw8ZG5U7xua4OJ2ad~vblfFph5F2EDpDSZ14~Q1iDcvusRUmtA__"
            alt="Dejyle"
            className="logo"
          />
          {!collapsed && <span className="brand-name">Dejyle</span>}
        </div>

        <Menu theme="light" mode="vertical" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/admin/overview">Overview</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MessageOutlined />}>
            <Link to="/admin/sms">Messages</Link>{" "}
            {/* If "sms" is the actual route */}
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>
            <Link to="/admin/contacts">Contacts</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FileTextOutlined />}>
            <Link to="/admin/deliveryreport">Delivery Report</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<CreditCardOutlined />}>
            <Link to="/admin/paymentcard">Payment</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<SettingOutlined />}>
            <Link to="/admin/settings">Settings</Link>
          </Menu.Item>
        </Menu>

        {/* Logout at bottom */}
        <div className="sidebar-footer">
          <Button
            className="logout-btn"
            onClick={handleLogout}
            icon={<LogoutOutlined />}
          >
            {!collapsed && "Logout"}
          </Button>
        </div>
      </Sider>

      {/* Main Layout */}
      <Layout>
        {/* Header */}
        <Header className="admin-header">
          <Button
            className="menu-toggle"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />

          {/* Search Input */}
          <div className="search-container">
            <Input
              className={`search-bar ${searchActive ? "active" : ""}`}
              placeholder="Search..."
              prefix={<SearchOutlined />}
              onFocus={() => setSearchResults(true)}
              onBlur={() => setSearchResults(false)}
            />
            {searchResults && (
              <div className="search-dropdown">
                <div className="search-header">
                  <span>Recent</span>
                  <span className="clear-all">Clear all</span>
                </div>
                <ul>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Lorem ipsum dolor</li>
                </ul>
              </div>
            )}
          </div>

          <div className="header-icons">
            {/* Notifications */}
            <Tooltip title="Notifications">
              <Badge dot>
                <BellOutlined
                  className="icon"
                  onClick={() => setNotificationsOpen(!notificationsOpen)}
                />
              </Badge>
            </Tooltip>
            {notificationsOpen && (
              <div className="notifications-dropdown">
                <div className="notification-header">
                  <span>Notifications (6)</span>
                  <span
                    className="close-btn"
                    onClick={() => setNotificationsOpen(false)}
                  >
                    ×
                  </span>
                </div>
                <ul>
                  <li>
                    <span className="notif-icon">🔔</span>
                    <div className="notif-content">
                      <p>Lorem ipsum dolor sit amet.</p>
                      <small>Lorem ipsum dolor sit amet.</small>
                    </div>
                  </li>
                  <li>
                    <span className="notif-icon">🔔</span>
                    <div className="notif-content">
                      <p>Lorem ipsum dolor sit amet.</p>
                      <small>Lorem ipsum dolor sit amet.</small>
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {/* User Dropdown */}
            <Dropdown
              overlay={userMenu}
              trigger={["click"]}
              open={userMenuOpen}
              onOpenChange={setUserMenuOpen}
            >
              <Avatar
                className="user-avatar"
                src="https://img.icons8.com/?size=60&id=FZQamLEORsJ1&format=png"
              />
            </Dropdown>
          </div>
        </Header>

        {/* Page Content */}
        <Content className="admin-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
