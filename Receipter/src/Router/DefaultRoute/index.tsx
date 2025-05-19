import Login from '@/Auth/Login';
// import Logout from '@/Auth/LogOut';
import Dashboard from '@/Pages/Dashborad';
import { Routes, Route } from 'react-router-dom';

const DefaultRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default DefaultRouter;
