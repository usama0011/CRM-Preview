import React from "react";
import "../styles/RecentActivity.css";

const activityData = [
  {
    key: 1,
    task: "Contact upload",
    date: "8/8/2024",
    time: "6:45pm",
    status: "Successful",
  },
  {
    key: 2,
    task: "Email sent",
    date: "9/10/2024",
    time: "10:00am",
    status: "Failed",
  },
  {
    key: 3,
    task: "Account setting",
    date: "12/12/2024",
    time: "9:50am",
    status: "Successful",
  },
  {
    key: 4,
    task: "Sms sent",
    date: "1/1/2025",
    time: "12:40pm",
    status: "Pending",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Successful":
      return "recent-status success";
    case "Failed":
      return "recent-status failed";
    case "Pending":
      return "recent-status pending";
    default:
      return "recent-status";
  }
};

const RecentActivity = () => {
  return (
    <div className="recent-container">
      <h3 className="recent-title">Recent Activity</h3>
      <table className="recent-table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Task</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activityData.map((item, index) => (
            <tr key={item.key}>
              <td data-label="S/N">{index + 1}</td>
              <td data-label="Task">{item.task}</td>
              <td data-label="Date">{item.date}</td>
              <td data-label="Time">{item.time}</td>
              <td data-label="Status">
                <span className={getStatusClass(item.status)}>
                  {item.status}
                </span>
              </td>
              <td data-label="Action">⋯</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivity;
