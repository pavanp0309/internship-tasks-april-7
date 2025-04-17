import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Applications from "../pages/Applications";
import ApplicationDetail from "../pages/ApplicationDetail";
import PrivateRoute from "./PrivateRoute";
import { lazy, Suspense } from "react";

const Settings = lazy(() => import("../pages/Settings"));

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={
      <PrivateRoute><Dashboard /></PrivateRoute>
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
);

export default AppRoutes;
