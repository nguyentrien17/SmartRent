import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (email.includes('landlord')) {
      login({ id: '2', name: 'Chủ trọ', role: 'landlord' });
      navigate('/landlord');
    } else if (email.includes('admin')) {
      login({ id: '3', name: 'Admin', role: 'admin' });
      navigate('/admin');
    } else {
      login({ id: '1', name: 'Người thuê', role: 'tenant' });
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-4rem)] relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-md w-full space-y-8 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Đăng nhập</h2>
          <p className="mt-2 text-sm text-gray-600">
            Hoặc{' '}
            <Link to="/register" className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
              đăng ký tài khoản mới
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <Input 
                type="email" 
                required 
                placeholder="Nhập email của bạn" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/50 focus:bg-white transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mật khẩu <span className="text-red-500">*</span>
              </label>
              <Input 
                type="password" 
                required 
                placeholder="Nhập mật khẩu" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/50 focus:bg-white transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Ghi nhớ đăng nhập
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
                Quên mật khẩu?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-11 text-base rounded-xl shadow-md hover:shadow-lg transition-all">
              Đăng nhập
            </Button>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500 text-center space-y-1">
            <p className="font-medium text-gray-700 mb-2">Mẹo đăng nhập nhanh (Mock):</p>
            <p>- Nhập email chứa <span className="font-mono bg-gray-100 px-1 rounded">landlord</span> để vào trang Chủ trọ</p>
            <p>- Nhập email chứa <span className="font-mono bg-gray-100 px-1 rounded">admin</span> để vào trang Admin</p>
            <p>- Các email khác sẽ vào trang Người thuê</p>
          </div>
        </form>
      </div>
    </div>
  );
}
