import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import SignIn from "./pages/SignIn.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import Overview from "./pages/Ovewview.jsx";
import SMS from "./pages/SMS.jsx";
import Contacts from "./pages/Contacts.jsx";
import PaymentCard from "./pages/PaymentCard.jsx";
import Settings from "./pages/Settings.jsx";
import DeliveryReport from "./pages/DeliveryReport.jsx";
import AdminLayout from "./components/AdminLayout.jsx"; // Import Admin Layout
import Signup from "./pages/Signup.jsx";

const themeConfig = {
  token: {
    colorPrimary: "#F58634",
    colorSecondary: "#247BA0",
    colorSuccess: "#20BF55",
    colorWarning: "#FDC02B",
    colorError: "#D12C2C",
    colorTextBase: "#242325",
    colorTextLabel: "#B6B6B6",
    colorTextPlaceholder: "#CACAC9",
    colorBgContainer: "#F9F9F9",
    colorBorder: "#B0AFAF",
    colorBorderError: "#D12C2C",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={themeConfig}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          {/* Admin Routes with Sidebar & Header */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="overview" index element={<Overview />} />
            <Route path="sms" element={<SMS />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="paymentcard" element={<PaymentCard />} />
            <Route path="settings" element={<Settings />} />
            <Route path="deliveryreport" element={<DeliveryReport />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  </React.StrictMode>
);
