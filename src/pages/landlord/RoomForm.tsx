import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Upload, Plus, X, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RoomForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [amenities, setAmenities] = useState(["WC riêng", "Máy lạnh", "Giường", "Tủ quần áo"]);
  const [newAmenity, setNewAmenity] = useState("");

  const addAmenity = () => {
    if (newAmenity.trim() && !amenities.includes(newAmenity.trim())) {
      setAmenities([...amenities, newAmenity.trim()]);
      setNewAmenity("");
    }
  };

  const removeAmenity = (item: string) => {
    setAmenities(amenities.filter(a => a !== item));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditing ? "Chỉnh sửa thông tin phòng" : "Thêm phòng mới"}
          </h1>
          <p className="text-gray-500 mt-1">
            {isEditing ? "Cập nhật thông tin chi tiết của phòng." : "Điền thông tin chi tiết để tạo phòng mới trong hệ thống."}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Thông tin cơ bản</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Tên / Số phòng <span className="text-red-500">*</span></label>
                  <Input placeholder="VD: P.101, Phòng 1..." defaultValue={isEditing ? "101" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Khu trọ / Tòa nhà <span className="text-red-500">*</span></label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border h-10">
                    <option>Khu A - 123 Nguyễn Hữu Thọ</option>
                    <option>Khu B - 456 Lê Văn Lương</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Loại phòng <span className="text-red-500">*</span></label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border h-10">
                    <option>Phòng trọ tiêu chuẩn</option>
                    <option>Căn hộ dịch vụ (Studio)</option>
                    <option>Ký túc xá (Giường tầng)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Trạng thái <span className="text-red-500">*</span></label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border h-10">
                    <option>Trống</option>
                    <option>Đang thuê</option>
                    <option>Đang sửa chữa</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Diện tích (m²) <span className="text-red-500">*</span></label>
                  <Input type="number" placeholder="VD: 25" defaultValue={isEditing ? "25" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Số người ở tối đa</label>
                  <Input type="number" placeholder="VD: 2" defaultValue={isEditing ? "2" : ""} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Ghi chú / Mô tả</label>
                <textarea 
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-3 border min-h-[100px]"
                  placeholder="Ghi chú nội bộ hoặc mô tả thêm về phòng..."
                  defaultValue={isEditing ? "Phòng có cửa sổ lớn, view mặt tiền." : ""}
                ></textarea>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chi phí định kỳ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Giá thuê (VNĐ/tháng) <span className="text-red-500">*</span></label>
                  <Input type="number" placeholder="VD: 3500000" defaultValue={isEditing ? "3500000" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Tiền cọc yêu cầu (VNĐ)</label>
                  <Input type="number" placeholder="VD: 3500000" defaultValue={isEditing ? "3500000" : ""} />
                </div>
              </div>
              <hr className="border-gray-100 my-2" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Đơn giá điện (VNĐ/kWh)</label>
                  <Input type="number" placeholder="VD: 3500" defaultValue={isEditing ? "3500" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Đơn giá nước (VNĐ/khối hoặc người)</label>
                  <Input placeholder="VD: 100000" defaultValue={isEditing ? "100000" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Phí rác/Vệ sinh (VNĐ/tháng)</label>
                  <Input type="number" placeholder="VD: 50000" defaultValue={isEditing ? "50000" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Phí Internet (VNĐ/tháng)</label>
                  <Input type="number" placeholder="VD: 100000" defaultValue={isEditing ? "100000" : ""} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hình ảnh phòng</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-900">Nhấn để tải ảnh lên</p>
                <p className="text-xs text-gray-500 mt-1">PNG, JPG tối đa 5MB</p>
              </div>
              
              {isEditing && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden group">
                    <img src="https://picsum.photos/seed/room1/200/200" alt="Room" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    <button className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Trang thiết bị / Nội thất</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {amenities.map((item, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm border border-emerald-200">
                    {item}
                    <button onClick={() => removeAmenity(item)} className="hover:text-emerald-900"><X className="w-3 h-3" /></button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder="Thêm trang thiết bị..." 
                  value={newAmenity} 
                  onChange={(e) => setNewAmenity(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addAmenity())}
                />
                <Button type="button" variant="outline" onClick={addAmenity}><Plus className="w-4 h-4" /></Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-3">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                  <Save className="w-4 h-4 mr-2" />
                  Lưu thông tin phòng
                </Button>
                <Button variant="outline" className="w-full" size="lg" onClick={() => navigate(-1)}>
                  Hủy bỏ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
