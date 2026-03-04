import { User, Phone, Mail, MapPin, FileText, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Quản lý cá nhân</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: User Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                T
              </div>
              <h2 className="text-xl font-bold text-gray-900">Trần Văn Thuê</h2>
              <p className="text-gray-500 text-sm mb-4">Thành viên từ Thg 1, 2023</p>
              <Button variant="outline" className="w-full">Chỉnh sửa hồ sơ</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Thông tin liên hệ</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>0909 123 456</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>thue.tran@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>Quận 7, TP.HCM</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Col: Rented Room & Activities */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Rented Room */}
          <Card className="border-emerald-200 shadow-sm">
            <CardHeader className="bg-emerald-50 border-b border-emerald-100 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-emerald-800">Phòng đang thuê</CardTitle>
                <Badge className="bg-emerald-500 hover:bg-emerald-600">Đang hiệu lực</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <img 
                  src="https://picsum.photos/seed/room1/200/150" 
                  alt="Room" 
                  className="w-full sm:w-40 h-32 object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 space-y-2">
                  <h3 className="font-bold text-lg text-gray-900">Phòng 201 - Khu trọ cao cấp</h3>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> 123 Nguyễn Hữu Thọ, Quận 7
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-gray-500">Giá thuê</p>
                      <p className="font-semibold text-gray-900">3.500.000đ/tháng</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Kỳ thanh toán tiếp theo</p>
                      <p className="font-semibold text-red-600">05/07/2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6 pt-6 border-t">
                <Button variant="outline" className="flex-1"><FileText className="w-4 h-4 mr-2"/> Xem hợp đồng</Button>
                <Button className="flex-1"><CreditCard className="w-4 h-4 mr-2"/> Thanh toán ngay</Button>
              </div>
            </CardContent>
          </Card>

          {/* Appointments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Lịch hẹn xem phòng</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border rounded-lg bg-gray-50">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold">T7</span>
                    <span className="text-lg font-bold leading-none">15</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">Studio full tiện nghi ngay trung tâm</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                      <Clock className="w-4 h-4" /> 09:00 Sáng
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                      <User className="w-4 h-4" /> Chủ trọ: Lê Văn C (0912345678)
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Sắp tới</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
