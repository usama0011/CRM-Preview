import React, { useState } from "react";
import { Input, Button, Alert, message } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  GoogleOutlined,
} from "@ant-design/icons";
import axios from "../components/api";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpPage.css";
import Logo from "../assets/signuplogocredentials.png";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setError(null);

    const {
      firstname,
      lastname,
      email,
      mobileNumber,
      password,
      confirmPassword,
    } = formData;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !mobileNumber ||
      !password ||
      !confirmPassword
    ) {
      return setError("Please fill in all required fields.");
    }

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      setLoading(true);

      const response = await axios.post("/auth/signup", {
        firstname,
        lastname,
        email,
        mobileNumber,
        password,
        confirmPassword,
      });
      if (response.data?.message === "Signup successful") {
        localStorage.setItem("tenantId", response.data.tenantId);

        // Update Axios instance header dynamically
        axios.defaults.headers["x-tenant-id"] = response.data.tenantId;

        message.success("Signup successful! Redirecting to login...");
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {/* Left */}
      <div className="signup-left">
        <div className="signup-overlay-content">
          <div className="signup-left-text">
            <h2>Get Started with Dejyle</h2>
            <p>
              Effortlessly send bulk messages and connect with your audience in
              just a few clicks.
            </p>
          </div>
          <img src={Logo} alt="logo" className="signup-logo" />
        </div>
      </div>

      {/* Right */}
      <div className="signup-right">
        <div className="signup-top-text">
          Already have an account? <a href="/signin">Sign in</a>
        </div>
        <div className="signup-form-box">
          <h2 style={{ textAlign: "center" }}>Create an Account</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Habitaese po.</p>

          {error && (
            <Alert
              message={error}
              type="error"
              showIcon
              style={{ marginBottom: "1rem" }}
            />
          )}

          <div className="signup-row">
            <Input
              placeholder="First name"
              className="signup-input"
              value={formData.firstname}
              onChange={(e) => handleChange("firstname", e.target.value)}
            />
            <Input
              placeholder="Last name"
              className="signup-input"
              value={formData.lastname}
              onChange={(e) => handleChange("lastname", e.target.value)}
            />
          </div>
          <div className="signup-row">
            <Input
              placeholder="Email address"
              className="signup-input"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <Input
              placeholder="Mobile number"
              className="signup-input"
              value={formData.mobileNumber}
              onChange={(e) => handleChange("mobileNumber", e.target.value)}
            />
          </div>
          <div className="signup-row">
            <Input.Password
              placeholder="Enter password"
              className="signup-input"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
            <Input.Password
              placeholder="Re-enter password"
              className="signup-input"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
          </div>

          <Button
            type="primary"
            className="signup-button"
            onClick={handleSubmit}
            loading={loading}
          >
            Sign up
          </Button>

          <p className="signup-policy">
            By creating an account, I accept the{" "}
            <a href="/">Terms & Conditions</a> of dejyle and confirmed that I
            have read the <a href="/">Privacy Policy</a>
          </p>

          <div className="signup-divider">or sign in with</div>

          <Button icon={<GoogleOutlined />} className="signup-google-button">
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
