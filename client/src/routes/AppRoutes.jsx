import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoute from './ProtectedRoute';

import Landing from '../pages/public/Landing';
import About from '../pages/public/About';
import Contact from '../pages/public/Contact';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';

import PatientDashboard from '../pages/patient/Dashboard';
import AddHealthData from '../pages/patient/AddHealthData';
import RiskReport from '../pages/patient/RiskReport';
import Trends from '../pages/patient/Trends';
import Recommendations from '../pages/patient/Recommendations';
import PatientAlerts from '../pages/patient/Alerts';
import Profile from '../pages/patient/Profile';

import WorkerDashboard from '../pages/worker/Dashboard';
import PatientList from '../pages/worker/PatientList';
import PatientDetails from '../pages/worker/PatientDetails';
import Monitoring from '../pages/worker/Monitoring';
import WorkerAlerts from '../pages/worker/Alerts';

import DoctorDashboard from '../pages/doctor/Dashboard';
import Reports from '../pages/doctor/Reports';
import Notes from '../pages/doctor/Notes';
import History from '../pages/doctor/History';

import AdminDashboard from '../pages/admin/Dashboard';
import Users from '../pages/admin/Users';
import Analytics from '../pages/admin/Analytics';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute allowedRoles={['patient']} />}>
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/patient/add-health-data" element={<AddHealthData />} />
          <Route path="/patient/risk-report" element={<RiskReport />} />
          <Route path="/patient/trends" element={<Trends />} />
          <Route path="/patient/recommendations" element={<Recommendations />} />
          <Route path="/patient/alerts" element={<PatientAlerts />} />
          <Route path="/patient/profile" element={<Profile />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['worker']} />}>
          <Route path="/worker" element={<WorkerDashboard />} />
          <Route path="/worker/patients" element={<PatientList />} />
          <Route path="/worker/patient/:id" element={<PatientDetails />} />
          <Route path="/worker/monitoring" element={<Monitoring />} />
          <Route path="/worker/alerts" element={<WorkerAlerts />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['doctor']} />}>
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/doctor/reports" element={<Reports />} />
          <Route path="/doctor/notes" element={<Notes />} />
          <Route path="/doctor/history" element={<History />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/analytics" element={<Analytics />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
