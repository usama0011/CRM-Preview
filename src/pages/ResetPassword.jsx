import React from "react";
import { Form, Input, Button, Typography } from "antd";
import "../styles/resetPassword.css";

const { Title, Text } = Typography;

const ResetPassword = () => {
  return (
    <div className="reset-container">
      {/* Left Section with Background Image */}
      <div className="reset-left">
        <img
          src="https://s3-alpha-sig.figma.com/img/f050/a83a/e31753cdfc55a452f9e80da2ef64a3b5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KFH2mv2I1IVUpnsHdtV7XRGi276THvB9yRmE6~6nOQ7qEUbFz1IvmUHNG40AF2mk8v~bGZdAa09~EASeDmsot8tzx7e4sbI75eh66wfhnIRPjOcKvEnyUYNaJzTyTUYZ9m69ylSktZn~DShj0Pcfak95cB8ugArYFpI19s-LlIUlP79bNNXShYbjNvZ~n0z0IF~tfTvvMbKa6WxdEP4fOOAWaiE4z16BAXPSueajx7FrYj7-bTB9gbcZs6DNE61ScSCS5SPbz4KPSeOU5H1xMYHo333S66zhrqK-xw8ZG5U7xua4OJ2ad~vblfFph5F2EDpDSZ14~Q1iDcvusRUmtA__"
          alt="Dejyle"
          className="reset-logo"
        />
        <Title className="reset-title">Secure your Dejyle</Title>
        <Text className="reset-subtext">
          Protect your communications and regain access in just a few steps.
        </Text>
        <div className="reset-image">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/concept-of-reset-lost-password-in-mobile-illustration-download-svg-png-gif-file-formats--set-forgot-pin-flat-modern-pack-miscellaneous-illustrations-1598238.png"
            alt="Reset Password"
          />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="reset-right">
        <div className="reset-box">
          <Title level={2} className="reset-heading">
            Reset Password
          </Title>
          <Text className="reset-description">
            Lorem ipsum dolor sit amet consectetur. Habitasse po.
          </Text>
          <Form layout="vertical">
            <Form.Item label="Email address" name="email">
              <Input placeholder="email@example.com" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block className="reset-button">
                Continue
              </Button>
            </Form.Item>
          </Form>
          <div className="reset-footer">
            Already have an account? <a href="/signin">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
