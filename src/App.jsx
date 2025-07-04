// App.js
import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserSignup from "./components/UserSignup";
import ViewUserData from "./components/ViewUserData";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserCircle } from "react-icons/fa";

const App = () => {
  const [user, setUser] = useState({});
  const [editId, setEditId] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  const { users } = useSelector((state) => state.users);

  const updateUser = (user) => {
    setUser(user);
    setEditId(user.id);
    setActiveTab("add");
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      <div
        className="bg-white shadow-sm p-3 position-fixed"
        style={{ width: "220px", height: "100vh", top: 0, left: 0 }}
      >
        <h5 className="fw-bold mb-4">User Dashboard</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`nav-link btn btn-link text-start w-100 ${activeTab === "dashboard" ? "text-primary fw-bold" : "text-dark"
                }`}
            >
              Dashboard
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              onClick={() => setActiveTab("add")}
              className={`nav-link btn btn-link text-start w-100 ${activeTab === "add" ? "text-primary fw-bold" : "text-dark"
                }`}
            >
              Add User
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={() => setActiveTab("view")}
              className={`nav-link btn btn-link text-start w-100 ${activeTab === "view" ? "text-primary fw-bold" : "text-dark"
                }`}
            >
              View Users
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 bg-light p-4"
        style={{ marginLeft: "220px", width: "100%" }}
      >
        {/* Top Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Admin Panel</h4>
          <div className="d-flex align-items-center">
            <FaUserCircle size={45} className="me-2" />
            <span className="fw-bold">Jainam Pokal</span>
          </div>
        </div>

        {/* Tabs */}
        {activeTab === "dashboard" && <Dashboard users={users} />}
        {activeTab === "add" && (
          <UserSignup
            user={user}
            setUser={setUser}
            editId={editId}
            setEditId={setEditId}
          />
        )}
        {activeTab === "view" && <ViewUserData updateUser={updateUser} />}

        {/* ✅ Toast Container */}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default App;
