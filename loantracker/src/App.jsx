import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import Applications from "./pages/Applications";
import ApplicationDetail from "./pages/ApplicationDetail";
import PrivateRoute from "./routes/PrivateRoute";
import NotFound from "./pages/NotFound";

const Settings = lazy(() => import("./pages/Settings"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from "/" to "/login" */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }>
          <Route path="applications" element={<Applications />} />
          <Route path="applications/:id" element={<ApplicationDetail />} />
          <Route path="settings" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Settings />
            </Suspense>
          } />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
