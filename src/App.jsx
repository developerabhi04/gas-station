import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import ChildrenOutlet from "./Components/ChildrenOutlet";
import AdminRouteGuard from "./Auth/AdminRouteGuard"
import ProtectedAdminRoute from "./Auth/ProtectedAdminRoute";
import { lazy } from "react";
import ProtectedURL from "./Auth/ProtectedURL";


// Code-Spliting
const Home = lazy(() => import("./Components/Pages/Home"));
const Login = lazy(() => import("./Components/Pages/Login"));
const Form = lazy(() => import("./Components/Pages/Form"));
const NeedHelp = lazy(() => import("./Components/Pages/NeedHelp"));
const Register = lazy(() => import("./Components/Pages/Register"));
const FormSubmitedSucessfully = lazy(() => import("./Components/Pages/FormSubmitedSucessfully"));

// Admin
const AdminLogin = lazy(() => import("./Components/admin/AdminLogin"));
const Dashboard = lazy(() => import("./Components/admin/Dashboard"));
const UserManagement = lazy(() => import("./Components/admin/UsersManagment"));
const ExportData = lazy(() => import("./Components/admin/ExportData"));
const FormManagement = lazy(() => import("./Components/admin/FormManagement"));
const FormManagementView = lazy(() => import("./Components/admin/FormManagementView"));
const NotFound = lazy(() => import("./Components/NotFound"));



const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ChildrenOutlet />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ProtectedURL><Login /></ProtectedURL>} />
          <Route path="/apply-dealership" element={<ProtectedURL><Register /></ProtectedURL>} />
          <Route path="/need-a-help" element={<ProtectedURL><NeedHelp /></ProtectedURL>} />
          <Route path="/apply-dealership" element={<ProtectedURL><Register /></ProtectedURL>} />
          <Route path="/submit-form" element={<ProtectedURL><Form /></ProtectedURL>} />
          <Route path="/form-Submited-Sucessfully" element={<ProtectedURL><FormSubmitedSucessfully /></ProtectedURL>} />
        </Route>

        {/* Admin-dashboard */}
        <Route path="/admin" element={
          <AdminRouteGuard>
            <AdminLogin />
          </AdminRouteGuard>
        } />

        <Route path="/admin/dashboard" element={
          <ProtectedAdminRoute>
            <Dashboard />
          </ProtectedAdminRoute>
        } />

        <Route path="/admin/form-data" element={
          <ProtectedAdminRoute>
            <FormManagement />
          </ProtectedAdminRoute>
        } />

        <Route path="/admin/form-data/:id" element={
          <ProtectedAdminRoute>
            <FormManagementView />
          </ProtectedAdminRoute>
        } />

        <Route path="/admin/users-management" element={
          <ProtectedAdminRoute>
            <UserManagement />
          </ProtectedAdminRoute>
        } />

        <Route path="/admin/export-data" element={
          <ProtectedAdminRoute>
            <ExportData />
          </ProtectedAdminRoute>
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App