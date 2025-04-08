import React, { useState } from "react";
import {
  Layout,
  Menu,
  Typography,
  Avatar,
  Input,
  Tabs,
  Form,
  Button,
  Select,
  Switch,
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
import "../styles/Settings.css";

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <Layout className="settings-container">
      <Layout>
        <Content className="content-section">
          <Title level={3}>Settings</Title>

          {/* Tabs */}
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            className="settings-tabs"
          >
            <Tabs.TabPane tab="Profile" key="Profile">
              <div className="profile-section">
                <Avatar
                  size={80}
                  icon={<SettingOutlined />}
                  className="profile-avatar"
                />
                <Text className="profile-name">Joe Doe</Text>
                <Text className="profile-role">Admin</Text>

                <Form layout="vertical" className="settings-form">
                  <div className="form-row">
                    <Form.Item label="First name" className="form-item">
                      <Input placeholder="First name" />
                    </Form.Item>
                    <Form.Item label="Last name" className="form-item">
                      <Input placeholder="Last name" />
                    </Form.Item>
                  </div>

                  <div className="form-row">
                    <Form.Item label="Email address" className="form-item">
                      <Input disabled placeholder="email@example.com" />
                    </Form.Item>
                    <Form.Item label="Mobile number" className="form-item">
                      <Input placeholder="234 000 0000" />
                    </Form.Item>
                  </div>

                  <div className="form-row">
                    <Form.Item label="Account Type" className="form-item">
                      <Input disabled placeholder="Admin" />
                    </Form.Item>
                    <Form.Item label="Theme" className="form-item">
                      <Select defaultValue="Light mode">
                        <Option value="Light mode">Light mode</Option>
                        <Option value="Dark mode">Dark mode</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="modal-footer">
                    <Button className="cancel-btn">Cancel</Button>
                    <Button type="primary" className="save-btn">
                      Save Changes
                    </Button>
                  </div>
                </Form>
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Security" key="Security">
              <Form layout="vertical" className="security-form">
                <Title level={4}>Password</Title>
                <div className="form-row">
                  <Form.Item label="Current Password" className="form-item">
                    <Input.Password placeholder="Enter new password" />
                  </Form.Item>
                  <Form.Item label="New Password" className="form-item">
                    <Input.Password placeholder="Enter new password" />
                  </Form.Item>
                </div>

                <Form.Item label="Confirm New Password">
                  <Input.Password placeholder="Enter new password" />
                </Form.Item>

                <Title level={4}>Notifications</Title>
                <Text>Email Notification</Text>
                <Switch defaultChecked />

                <Text>SMS Notification</Text>
                <Switch />

                <Text>WhatsApp Notification</Text>
                <Switch defaultChecked />

                <div className="modal-footer">
                  <Button className="cancel-btn">Cancel</Button>
                  <Button type="primary" className="save-btn">
                    Save Changes
                  </Button>
                </div>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Settings;
