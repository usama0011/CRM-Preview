import React, { useState } from "react";
import { Form, Input, Button, Typography, Alert, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/SignIn.css";
import api from "../components/api"; // adjust path if needed

const { Title, Text } = Typography;

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const tenantId = localStorage.getItem("tenantId");

  const onFinish = async (values) => {
    setError(null);
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        email: values.email,
        password: values.password,
      });

      // Handle token or user data here (optional)
      message.success("Login successful!");
      navigate("/admin/overview"); // or your protected route
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

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

          {error && (
            <Alert
              message={error}
              type="error"
              showIcon
              style={{ marginBottom: "1rem" }}
            />
          )}

          <Form
            requiredMark={false}
            layout="vertical"
            className="signIn-form"
            onFinish={onFinish}
          >
            <Form.Item
              label="Email address"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="email@example.com" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
            <div className="signIn-forgot">
              <a href="#">Forgot Password?</a>
            </div>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                className="signIn-button"
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>

          <div className="signIn-divider">or sign in with</div>

          <Button icon={<GoogleOutlined />} block className="signIn-google">
            Continue with Google
          </Button>

          <div className="signIn-footer">
            Don’t have an account? <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
