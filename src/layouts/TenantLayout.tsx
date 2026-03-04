import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, Search, Heart, User, Building, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TenantLayout() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Trang chủ", path: "/" },
    { icon: Search, label: "Tìm phòng", path: "/search" },
    { icon: Heart, label: "Đã lưu", path: "/saved" },
    { icon: User, label: "Cá nhân", path: "/profile" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SmartRent</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-600",
                  location.pathname === item.path
                    ? "text-emerald-600"
                    : "text-gray-600"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/landlord"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 hidden md:block"
            >
              Dành cho chủ trọ
            </Link>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <User className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 z-50 pb-safe">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1",
                isActive ? "text-emerald-600" : "text-gray-500"
              )}
            >
              <Icon className="w-6 h-6" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
