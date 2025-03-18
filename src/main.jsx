import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import SignIn from "./pages/SignIn.jsx"; // Ensure correct import
import "./index.css";
import ResetPassword from "./pages/ResetPassword.jsx";
import Overview from "./pages/Ovewview.jsx";

const themeConfig = {
  token: {
    colorPrimary: "#F58634", // Primary button & link color
    colorSecondary: "#247BA0", // Secondary color
    colorSuccess: "#20BF55", // Success (Green)
    colorWarning: "#FDC02B", // Warning (Yellow)
    colorError: "#D12C2C", // Error (Red)
    colorTextBase: "#242325", // Default text color
    colorTextLabel: "#B6B6B6", // Label text
    colorTextPlaceholder: "#CACAC9", // Placeholder text
    colorBgContainer: "#F9F9F9", // Background color
    colorBorder: "#B0AFAF", // Default border color
    colorBorderError: "#D12C2C", // Error border color
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={themeConfig}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
        </Routes>
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);
