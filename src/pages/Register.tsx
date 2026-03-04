import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';

export default function Register() {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('male');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('tenant');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock register logic
    login({ id: Date.now().toString(), name, role: role as 'tenant' | 'landlord' });
    if (role === 'landlord') {
      navigate('/landlord');
    } else {
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

      <div className="max-w-2xl w-full space-y-8 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Đăng ký tài khoản</h2>
          <p className="mt-2 text-sm text-gray-600">
            Đã có tài khoản?{' '}
            <Link to="/login" className="font-medium text-emerald-600 hover:text-emerald-500 transition-colors">
              Đăng nhập ngay
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <Input 
                type="text" 
                required 
                placeholder="Nhập họ và tên" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/50 focus:bg-white transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ngày sinh <span className="text-red-500">*</span>
                </label>
                <Input 
                  type="date" 
                  required 
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="bg-white/50 focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Giới tính <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border h-10 bg-white/50 focus:bg-white transition-colors"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <Input 
                  type="tel" 
                  required 
                  placeholder="Nhập số điện thoại" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/50 focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bạn là ai? <span className="text-red-500">*</span>
                </label>
                <select 
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border h-10 bg-white/50 focus:bg-white transition-colors"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="tenant">Người đi thuê trọ</option>
                  <option value="landlord">Chủ nhà / Quản lý trọ</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Địa chỉ <span className="text-red-500">*</span>
              </label>
              <Input 
                type="text" 
                required 
                placeholder="Nhập địa chỉ hiện tại" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="bg-white/50 focus:bg-white transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input 
                  type="email" 
                  required 
                  placeholder="Nhập email" 
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
                  placeholder="Tạo mật khẩu" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/50 focus:bg-white transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-11 text-base rounded-xl shadow-md hover:shadow-lg transition-all">
              Đăng ký
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
