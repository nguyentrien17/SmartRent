import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import TenantLayout from "./layouts/TenantLayout";
import LandlordLayout from "./layouts/LandlordLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/tenant/Home";
import Search from "./pages/tenant/Search";
import RoomDetail from "./pages/tenant/RoomDetail";
import SavedRooms from "./pages/tenant/SavedRooms";
import Profile from "./pages/tenant/Profile";
import LandlordDashboard from "./pages/landlord/Dashboard";
import ManageRooms from "./pages/landlord/ManageRooms";
import RoomForm from "./pages/landlord/RoomForm";
import Tenants from "./pages/landlord/Tenants";
import Contracts from "./pages/landlord/Contracts";
import Invoices from "./pages/landlord/Invoices";
import Reports from "./pages/landlord/Reports";
import Notifications from "./pages/landlord/Notifications";
import AdminDashboard from "./pages/admin/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Tenant Routes */}
          <Route path="/" element={<TenantLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="room/:id" element={<RoomDetail />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            
            {/* Protected Tenant Routes */}
            <Route element={<ProtectedRoute allowedRoles={['tenant', 'landlord', 'admin']} />}>
              <Route path="saved" element={<SavedRooms />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Landlord Routes */}
          <Route path="/landlord" element={<ProtectedRoute allowedRoles={['landlord', 'admin']} />}>
            <Route element={<LandlordLayout />}>
              <Route index element={<LandlordDashboard />} />
              <Route path="rooms" element={<ManageRooms />} />
              <Route path="rooms/new" element={<RoomForm />} />
              <Route path="rooms/:id/edit" element={<RoomForm />} />
              <Route path="tenants" element={<Tenants />} />
              <Route path="contracts" element={<Contracts />} />
              <Route path="invoices" element={<Invoices />} />
              <Route path="reports" element={<Reports />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="settings" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
            </Route>
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              {/* Placeholder for other admin routes */}
              <Route path="users" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
              <Route path="posts" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
              <Route path="reports" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
              <Route path="settings" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
