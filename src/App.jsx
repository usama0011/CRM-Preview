import React from "react";
import "./App.css";
import { Button, Typography } from "antd";

const { Title, Text } = Typography;
import LanidngImage from "./assets/landing.png";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/admin/overview");
  };
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
        <div className="logo">
          <img
            className="logo-image"
            src="https://s3-alpha-sig.figma.com/img/f050/a83a/e31753cdfc55a452f9e80da2ef64a3b5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KFH2mv2I1IVUpnsHdtV7XRGi276THvB9yRmE6~6nOQ7qEUbFz1IvmUHNG40AF2mk8v~bGZdAa09~EASeDmsot8tzx7e4sbI75eh66wfhnIRPjOcKvEnyUYNaJzTyTUYZ9m69ylSktZn~DShj0Pcfak95cB8ugArYFpI19s-LlIUlP79bNNXShYbjNvZ~n0z0IF~tfTvvMbKa6WxdEP4fOOAWaiE4z16BAXPSueajx7FrYj7-bTB9gbcZs6DNE61ScSCS5SPbz4KPSeOU5H1xMYHo333S66zhrqK-xw8ZG5U7xua4OJ2ad~vblfFph5F2EDpDSZ14~Q1iDcvusRUmtA__"
            alt="Dejyle"
          />
          <span className="brand-name">Dejyle</span>
        </div>
        <div>
          <Button onClick={handleSignIn} className="sign-in-btn">
            Sign in
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            onClick={() => navigate("/signup")}
            className="sign-in-btn"
          >
            Sign Up
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <Title level={2} className="hero-title">
          Reach Your Audience Instantly with Bulk SMS, Email, and WhatsApp!
        </Title>
        <Text className="hero-subtext">
          Send messages at scale, track results, and engage your customers — all
          from one powerful platform.
        </Text>
        <Button type="primary" className="cta-button">
          Get started
        </Button>
      </section>

      {/* Dashboard Preview */}
      <section className="dashboard-preview">
        <img
          className="dashboard-image"
          src={LanidngImage}
          alt="Dashboard Preview"
        />
      </section>
    </div>
  );
};

export default App;
