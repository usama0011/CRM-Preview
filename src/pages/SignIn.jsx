import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import "../styles/SignIn.css";

const { Title, Text } = Typography;

const SignIn = () => {
  return (
    <div className="signIn-container">
      <div className="signIn-left">
        <div className="signIn-logo">Dejyle</div>
        <Title level={2} className="signIn-title">
          Messaging Made Effortless
        </Title>
        <Text className="signIn-description">
          Reach your audience with precision, speed, and reliability
        </Text>
        <div className="signIn-illustration"></div>
      </div>

      <div className="signIn-right">
        <div className="signIn-form-container">
          <Title level={2} className="signIn-welcome">
            Welcome Back
          </Title>
          <Text className="signIn-subtext">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </Text>
          <Form layout="vertical" className="signIn-form">
            <Form.Item label="Email address" name="email">
              <Input placeholder="email@example.com" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
            <div className="signIn-forgot">
              <a href="#">Forgot Password?</a>
            </div>
            <Form.Item>
              <Button type="primary" block className="signIn-button">
                Sign in
              </Button>
            </Form.Item>
          </Form>
          <div className="signIn-divider">or sign in with</div>
          <Button icon={<GoogleOutlined />} block className="signIn-google">
            Continue with Google
          </Button>
          <div className="signIn-footer">
            Don’t have an account? <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
