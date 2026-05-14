import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import ExperimentsPage from '../pages/ExperimentsPage';
import MaterialsPage from '../pages/MaterialsPage';
import AlertsPage from '../pages/AlertsPage';
import SettingsPage from '../pages/SettingsPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/experiments' element={<ExperimentsPage />} />
        <Route path='/materials' element={<MaterialsPage />} />
        <Route path='/alerts' element={<AlertsPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;