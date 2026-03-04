import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AdminDashboard from "./pages/admin/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Tenant Routes */}
        <Route path="/" element={<TenantLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="room/:id" element={<RoomDetail />} />
          <Route path="saved" element={<SavedRooms />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Landlord Routes */}
        <Route path="/landlord" element={<LandlordLayout />}>
          <Route index element={<LandlordDashboard />} />
          <Route path="rooms" element={<ManageRooms />} />
          <Route path="rooms/new" element={<RoomForm />} />
          <Route path="rooms/:id/edit" element={<RoomForm />} />
          {/* Placeholder for other landlord routes */}
          <Route path="tenants" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
          <Route path="contracts" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
          <Route path="invoices" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
          <Route path="reports" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
          <Route path="settings" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          {/* Placeholder for other admin routes */}
          <Route path="users" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
          <Route path="posts" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
          <Route path="reports" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
          <Route path="settings" element={<div className="p-8 text-center">Tính năng đang phát triển</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
