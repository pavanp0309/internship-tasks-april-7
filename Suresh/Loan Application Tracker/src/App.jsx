import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ApplicationDetail from "./pages/ApplicationDetail";
import Dashboard from "./pages/Dashboard";
import Applications from "./pages/Applications"
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div>
     <Dashboard/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/applicationDetail"  element={<ApplicationDetail />}  />
        <Route path="/applications"  element={<Applications />} />
        <Route path="/settings"  element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
     
    </div>
  );
};

export default App;
