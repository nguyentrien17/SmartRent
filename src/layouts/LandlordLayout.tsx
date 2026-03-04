import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Building2, Users, FileText, Receipt, BarChart3, Bell, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";

export default function LandlordLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Tổng quan", path: "/landlord" },
    { icon: Building2, label: "Quản lý phòng", path: "/landlord/rooms" },
    { icon: Users, label: "Người thuê", path: "/landlord/tenants" },
    { icon: FileText, label: "Hợp đồng", path: "/landlord/contracts" },
    { icon: Receipt, label: "Thu tiền", path: "/landlord/invoices" },
    { icon: BarChart3, label: "Báo cáo", path: "/landlord/reports" },
    { icon: Bell, label: "Thông báo", path: "/landlord/notifications" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col fixed h-full z-10">
        <div className="h-16 flex items-center px-6 border-b">
          <Link to="/landlord" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Landlord</span>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    )}
                  >
                    <Icon className={cn("w-5 h-5", isActive ? "text-emerald-600" : "text-gray-400")} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t space-y-1">
          <Link
            to="/landlord/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-400" />
            Cài đặt
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 sm:px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/landlord" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
            </Link>
          </div>

          <div className="flex-1" />

          <div className="flex items-center gap-4">
            <Link to="/landlord/notifications" className="p-2 text-gray-400 hover:text-gray-500 relative">
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              <Bell className="w-6 h-6" />
            </Link>
            <div className="flex items-center gap-3 pl-4 border-l">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-medium">
                {user?.name?.charAt(0).toUpperCase() || 'AD'}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-700">{user?.name || 'Chủ trọ'}</p>
                <p className="text-xs text-gray-500">Chủ trọ</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
