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
import adminLogo from "../assets/adminlogo.png";
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
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}
        className="sidebar"
        width={300}
      >
        {/* Top Logo and Toggle */}
        <div className="sidebar-logo">
          {!collapsed && (
            <>
              <img src={adminLogo} alt="Dejyle" className="logosss" />
            </>
          )}
          <Button
            className="menu-toggle"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
          />
        </div>

        {/* Sidebar Menu */}
        <Menu
          theme="light"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          className="custom-menu"
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/admin/overview">Overview</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<MessageOutlined />}>
            <Link to="/admin/sms">Messages</Link>
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

        {/* Fixed Logout Button */}
        <div className="sidebar-footer">
          <Button
            className="logout-btn"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
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
        <Content className={`admin-content ${collapsed ? "collapsed" : ""}`}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
