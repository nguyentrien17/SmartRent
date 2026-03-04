import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, Edit, Trash2, MapPin, Building2, ChevronDown, ChevronUp, X, CheckSquare, Square, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LocationPicker from "@/components/LocationPicker";

export default function ManageRooms() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProperties, setExpandedProperties] = useState<string[]>(["p1", "p2"]);
  
  // Modal states
  const [isAddPropertyOpen, setIsAddPropertyOpen] = useState(false);
  const [isUpdatePriceOpen, setIsUpdatePriceOpen] = useState(false);
  const [isCreateLeaseOpen, setIsCreateLeaseOpen] = useState(false);
  const [selectedRoomForLease, setSelectedRoomForLease] = useState<string | null>(null);
  
  // Selection state
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  
  // Map state
  const [mapPosition, setMapPosition] = useState<[number, number]>([10.74, 106.70]);
  const [mapInput, setMapInput] = useState("10.74, 106.70");

  const handleMapInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setMapInput(val);
    
    // Parse coordinates
    const parts = val.split(',').map(p => p.trim());
    if (parts.length === 2) {
      const lat = parseFloat(parts[0]);
      const lng = parseFloat(parts[1]);
      if (!isNaN(lat) && !isNaN(lng)) {
        setMapPosition([lat, lng]);
      }
    }
  };

  const handleMapChange = (pos: [number, number]) => {
    setMapPosition(pos);
    setMapInput(`${pos[0].toFixed(6)}, ${pos[1].toFixed(6)}`);
  };

  const toggleProperty = (id: string) => {
    setExpandedProperties(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleRoomSelection = (roomId: string) => {
    setSelectedRooms(prev => 
      prev.includes(roomId) ? prev.filter(id => id !== roomId) : [...prev, roomId]
    );
  };

  const selectAllInProperty = (propertyId: string, roomIds: string[]) => {
    const allSelected = roomIds.every(id => selectedRooms.includes(id));
    if (allSelected) {
      setSelectedRooms(prev => prev.filter(id => !roomIds.includes(id)));
    } else {
      const newSelected = [...selectedRooms];
      roomIds.forEach(id => {
        if (!newSelected.includes(id)) newSelected.push(id);
      });
      setSelectedRooms(newSelected);
    }
  };

  const properties = [
    {
      id: "p1",
      name: "Khu A - Trọ Sinh Viên",
      address: "123 Nguyễn Hữu Thọ, Quận 7, TP.HCM",
      totalRooms: 15,
      availableRooms: 2,
      rooms: [
        { id: "101", type: "Phòng trọ", price: "3.500.000", area: "25m²", status: "Đang thuê", tenant: "Nguyễn Văn B" },
        { id: "102", type: "Phòng trọ", price: "3.500.000", area: "25m²", status: "Trống", tenant: "-" },
        { id: "103", type: "Phòng trọ", price: "3.500.000", area: "25m²", status: "Đang thuê", tenant: "Lê Thị D" },
      ]
    },
    {
      id: "p2",
      name: "Khu B - Căn Hộ Mini",
      address: "456 Lê Văn Lương, Quận 7, TP.HCM",
      totalRooms: 8,
      availableRooms: 0,
      rooms: [
        { id: "201", type: "Căn hộ mini", price: "5.500.000", area: "35m²", status: "Đang thuê", tenant: "Trần Thị C" },
        { id: "202", type: "Căn hộ mini", price: "5.500.000", area: "35m²", status: "Đang sửa chữa", tenant: "-" },
      ]
    }
  ];

  return (
    <div className="space-y-6 relative">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý khu trọ</h1>
          <p className="text-gray-500 mt-1">Quản lý danh sách các khu trọ và phòng trọ tương ứng.</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <Button variant="outline" className="bg-white" onClick={() => setIsAddPropertyOpen(true)}>
            <Building2 className="w-4 h-4 mr-2" />
            Thêm khu trọ
          </Button>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link to="/landlord/rooms/new">
              <Plus className="w-4 h-4 mr-2" />
              Thêm phòng trọ
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full sm:w-auto">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Tìm theo tên khu trọ, số phòng, tên người thuê..."
              className="pl-9 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select className="border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border bg-white">
              <option>Tất cả trạng thái</option>
              <option>Đang thuê</option>
              <option>Trống</option>
              <option>Đang sửa chữa</option>
            </select>
          </div>
        </div>
        
        {selectedRooms.length > 0 && (
          <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-200 animate-in fade-in slide-in-from-bottom-2">
            <span className="text-sm font-medium text-emerald-800">Đã chọn {selectedRooms.length} phòng</span>
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 h-8" onClick={() => setIsUpdatePriceOpen(true)}>
              Cập nhật giá
            </Button>
            <Button size="sm" variant="ghost" className="text-gray-500 hover:text-gray-700 h-8 px-2" onClick={() => setSelectedRooms([])}>
              Hủy chọn
            </Button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {properties.map((property) => {
          const isExpanded = expandedProperties.includes(property.id);
          const roomIds = property.rooms.map(r => r.id);
          const allSelected = roomIds.length > 0 && roomIds.every(id => selectedRooms.includes(id));
          const someSelected = roomIds.some(id => selectedRooms.includes(id));
          
          return (
            <Card key={property.id} className="overflow-hidden border-gray-200 shadow-sm">
              <div 
                className="bg-gray-50 border-b border-gray-200 p-4 sm:p-6 cursor-pointer hover:bg-gray-100 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                onClick={() => toggleProperty(property.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{property.name}</h2>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {property.address}
                    </p>
                    <div className="flex gap-3 mt-2">
                      <Badge variant="outline" className="bg-white text-gray-600 font-normal">
                        Tổng: <span className="font-semibold text-gray-900 ml-1">{property.totalRooms} phòng</span>
                      </Badge>
                      <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 font-normal">
                        Trống: <span className="font-semibold ml-1">{property.availableRooms} phòng</span>
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-emerald-600" onClick={(e) => e.stopPropagation()}>
                    <Edit className="w-4 h-4 mr-2" /> Sửa khu
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-400">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </Button>
                </div>
              </div>

              {isExpanded && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-white border-b">
                      <tr>
                        <th className="px-6 py-3 font-medium w-12">
                          <button 
                            onClick={() => selectAllInProperty(property.id, roomIds)}
                            className="text-gray-400 hover:text-emerald-600"
                          >
                            {allSelected ? <CheckSquare className="w-5 h-5 text-emerald-600" /> : 
                             someSelected ? <CheckSquare className="w-5 h-5 text-emerald-400 opacity-50" /> : 
                             <Square className="w-5 h-5" />}
                          </button>
                        </th>
                        <th className="px-6 py-3 font-medium">Phòng</th>
                        <th className="px-6 py-3 font-medium">Loại phòng</th>
                        <th className="px-6 py-3 font-medium">Giá thuê</th>
                        <th className="px-6 py-3 font-medium">Trạng thái</th>
                        <th className="px-6 py-3 font-medium">Người thuê</th>
                        <th className="px-6 py-3 font-medium text-right">Thao tác</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      {property.rooms.map((room) => {
                        const isSelected = selectedRooms.includes(room.id);
                        return (
                          <tr key={room.id} className={`hover:bg-gray-50 transition-colors ${isSelected ? 'bg-emerald-50/50' : ''}`}>
                            <td className="px-6 py-4">
                              <button 
                                onClick={() => toggleRoomSelection(room.id)}
                                className="text-gray-400 hover:text-emerald-600"
                              >
                                {isSelected ? <CheckSquare className="w-5 h-5 text-emerald-600" /> : <Square className="w-5 h-5" />}
                              </button>
                            </td>
                            <td className="px-6 py-4 font-semibold text-gray-900">{room.id}</td>
                            <td className="px-6 py-4 text-gray-600">{room.type}</td>
                            <td className="px-6 py-4 font-medium text-emerald-600">{room.price}đ</td>
                            <td className="px-6 py-4">
                              <Badge
                                variant={
                                  room.status === "Đang thuê"
                                    ? "default"
                                    : room.status === "Trống"
                                    ? "secondary"
                                    : "destructive"
                                }
                                className={
                                  room.status === "Trống"
                                    ? "bg-gray-100 text-gray-800"
                                    : room.status === "Đang sửa chữa"
                                    ? "bg-amber-100 text-amber-800"
                                    : ""
                                }
                              >
                                {room.status}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-gray-600">{room.tenant}</td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                {room.status === "Trống" && (
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="h-8 text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                                    onClick={() => {
                                      setSelectedRoomForLease(room.id);
                                      setIsCreateLeaseOpen(true);
                                    }}
                                  >
                                    <FileText className="w-3.5 h-3.5 mr-1.5" />
                                    Tạo phiếu thuê
                                  </Button>
                                )}
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-emerald-600" asChild>
                                  <Link to={`/landlord/rooms/${room.id}/edit`}>
                                    <Edit className="w-4 h-4" />
                                  </Link>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                    <Button variant="ghost" size="sm" className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50" asChild>
                      <Link to="/landlord/rooms/new">
                        <Plus className="w-4 h-4 mr-2" /> Thêm phòng vào khu này
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Add Property Modal */}
      {isAddPropertyOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg shadow-xl animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between border-b pb-4 shrink-0">
              <CardTitle className="text-xl">Thêm khu trọ mới</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2" onClick={() => setIsAddPropertyOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-6 space-y-4 overflow-y-auto">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Tên khu trọ <span className="text-red-500">*</span></label>
                <Input placeholder="VD: Khu A - Trọ Sinh Viên" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Địa chỉ <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <Input placeholder="VD: 123 Nguyễn Hữu Thọ, Quận 7" defaultValue="123 Nguyễn Hữu Thọ, Quận 7, TP.HCM" />
                  <Button variant="outline" type="button" className="shrink-0 bg-gray-50">
                    <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
                    Định vị
                  </Button>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Vị trí trên bản đồ</label>
                <div className="mb-3">
                  <Input 
                    placeholder="Dán tọa độ từ Google Maps (VD: 10.7412, 106.7034)" 
                    value={mapInput}
                    onChange={handleMapInputChange}
                  />
                  <p className="text-xs text-gray-500 mt-1.5">Bạn có thể copy tọa độ từ Google Maps và dán vào đây, hoặc kéo thả điểm đánh dấu trên bản đồ bên dưới.</p>
                </div>
                <div className="w-full h-[200px] bg-gray-100 rounded-md border border-gray-300 overflow-hidden relative">
                  <LocationPicker position={mapPosition} onChange={handleMapChange} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Mô tả thêm</label>
                <textarea 
                  className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-3 border min-h-[80px]"
                  placeholder="Ghi chú về khu trọ này..."
                ></textarea>
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setIsAddPropertyOpen(false)}>Hủy</Button>
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsAddPropertyOpen(false)}>Lưu khu trọ</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Update Price Modal */}
      {isUpdatePriceOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md shadow-xl animate-in fade-in zoom-in-95">
            <CardHeader className="flex flex-row items-center justify-between border-b pb-4">
              <CardTitle className="text-xl">Cập nhật giá hàng loạt</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2" onClick={() => setIsUpdatePriceOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg text-sm mb-4">
                Bạn đang cập nhật giá cho <strong>{selectedRooms.length} phòng</strong> đã chọn.
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1.5">Giá thuê mới (VNĐ/tháng) <span className="text-red-500">*</span></label>
                <Input type="number" placeholder="VD: 4000000" />
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setIsUpdatePriceOpen(false)}>Hủy</Button>
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" onClick={() => {
                  setIsUpdatePriceOpen(false);
                  setSelectedRooms([]);
                }}>Cập nhật giá</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Create Lease Modal */}
      {isCreateLeaseOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl shadow-xl animate-in fade-in zoom-in-95 max-h-[90vh] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between border-b pb-4 shrink-0">
              <CardTitle className="text-xl">Tạo phiếu thuê phòng {selectedRoomForLease}</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2" onClick={() => setIsCreateLeaseOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="p-6 space-y-6 overflow-y-auto">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 border-b pb-2">Thông tin người thuê</h3>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Họ và tên <span className="text-red-500">*</span></label>
                    <Input placeholder="VD: Nguyễn Văn A" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Số điện thoại <span className="text-red-500">*</span></label>
                    <Input placeholder="VD: 0901234567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">CCCD/CMND <span className="text-red-500">*</span></label>
                    <Input placeholder="VD: 079012345678" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 border-b pb-2">Thông tin hợp đồng</h3>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Ngày bắt đầu thuê <span className="text-red-500">*</span></label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Thời hạn thuê (tháng) <span className="text-red-500">*</span></label>
                    <Input type="number" placeholder="VD: 12" defaultValue="12" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Tiền cọc (VNĐ) <span className="text-red-500">*</span></label>
                    <Input type="number" placeholder="VD: 3500000" defaultValue="3500000" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900 border-b pb-2">Chỉ số điện nước ban đầu</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Chỉ số điện (kWh) <span className="text-red-500">*</span></label>
                    <Input type="number" placeholder="VD: 1250" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1.5">Chỉ số nước (khối) <span className="text-red-500">*</span></label>
                    <Input type="number" placeholder="VD: 120" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setIsCreateLeaseOpen(false)}>Hủy</Button>
                <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsCreateLeaseOpen(false)}>
                  <FileText className="w-4 h-4 mr-2" />
                  Tạo phiếu thuê
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
