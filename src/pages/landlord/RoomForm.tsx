import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Upload, Plus, X, Save, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RoomForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [amenities, setAmenities] = useState(["WC riêng", "Máy lạnh"]);
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
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {isEditing ? "Chỉnh sửa phòng" : "Thêm phòng mới"}
          </h1>
          <p className="text-gray-500 mt-1">
            {isEditing ? "Cập nhật thông tin phòng trọ của bạn." : "Điền thông tin chi tiết để đăng phòng."}
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
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Tiêu đề bài đăng <span className="text-red-500">*</span></label>
                <Input placeholder="VD: Phòng trọ cao cấp full nội thất..." defaultValue={isEditing ? "Phòng trọ cao cấp full nội thất" : ""} />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Loại phòng <span className="text-red-500">*</span></label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border h-10">
                    <option>Phòng trọ</option>
                    <option>Căn hộ mini</option>
                    <option>Studio</option>
                    <option>Ở ghép</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Khu trọ <span className="text-red-500">*</span></label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border h-10">
                    <option>Khu A - 123 Nguyễn Hữu Thọ</option>
                    <option>Khu B - 456 Lê Văn Lương</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Giá thuê (VNĐ/tháng) <span className="text-red-500">*</span></label>
                  <Input type="number" placeholder="VD: 3500000" defaultValue={isEditing ? "3500000" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Diện tích (m²) <span className="text-red-500">*</span></label>
                  <Input type="number" placeholder="VD: 25" defaultValue={isEditing ? "25" : ""} />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Mô tả chi tiết</label>
                <textarea 
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-3 border min-h-[120px]"
                  placeholder="Mô tả về phòng trọ, tiện ích xung quanh, giờ giấc..."
                  defaultValue={isEditing ? "Phòng trọ mới xây, sạch sẽ, thoáng mát, an ninh tốt.\n- Giờ giấc tự do, không chung chủ." : ""}
                ></textarea>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Chi phí khác</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Tiền cọc (VNĐ)</label>
                  <Input type="number" placeholder="VD: 3500000" defaultValue={isEditing ? "3500000" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Tiền điện</label>
                  <Input placeholder="VD: 3.500đ/kwh" defaultValue={isEditing ? "3.500đ/kwh" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Tiền nước</label>
                  <Input placeholder="VD: 100.000đ/người" defaultValue={isEditing ? "100.000đ/người/tháng" : ""} />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1.5">Internet/Wifi</label>
                  <Input placeholder="VD: Miễn phí hoặc 100k/phòng" defaultValue={isEditing ? "Miễn phí" : ""} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hình ảnh</CardTitle>
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
              <CardTitle className="text-lg">Tiện nghi</CardTitle>
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
                  placeholder="Thêm tiện nghi..." 
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
                <Button className="w-full" size="lg">
                  <Save className="w-4 h-4 mr-2" />
                  Lưu thông tin
                </Button>
                <Button variant="outline" className="w-full text-emerald-600 border-emerald-200 hover:bg-emerald-50" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Đăng bài ngay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
