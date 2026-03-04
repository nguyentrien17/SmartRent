import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Home, Search, Heart, User, Building, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function TenantLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav if scrolling up or at the very top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setShowBottomNav(true);
      } 
      // Hide nav if scrolling down and past a certain threshold
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowBottomNav(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { icon: Home, label: "Trang chủ", path: "/" },
    { icon: Search, label: "Tìm phòng", path: "/search" },
    { icon: Heart, label: "Đã lưu", path: "/saved", requireAuth: true },
    { icon: User, label: "Cá nhân", path: "/profile", requireAuth: true },
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
            {navItems.map((item) => {
              if (item.requireAuth && !user) return null;
              return (
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
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <>
                {user.role === 'landlord' && (
                  <Link
                    to="/landlord"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700 hidden md:block"
                  >
                    Vào trang quản lý
                  </Link>
                )}
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700 hidden md:block"
                  >
                    Trang Admin
                  </Link>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-medium overflow-hidden">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <Button variant="ghost" size="icon" onClick={handleLogout} title="Đăng xuất">
                    <LogOut className="w-5 h-5 text-gray-600" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Đăng nhập</Link>
                </Button>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <Link to="/register">Đăng ký</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav 
        className={cn(
          "md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 z-50 pb-safe transition-transform duration-300 ease-in-out",
          showBottomNav ? "translate-y-0" : "translate-y-full"
        )}
      >
        {navItems.map((item) => {
          if (item.requireAuth && !user) return null;
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
