import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, MoreVertical, Edit, Trash2, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ManageRooms() {
  const [searchQuery, setSearchQuery] = useState("");

  const rooms = [
    {
      id: "101",
      building: "Khu A",
      type: "Phòng trọ",
      price: "3.500.000",
      area: "25m²",
      status: "Đang thuê",
      tenant: "Nguyễn Văn B",
      lastPayment: "05/06/2023",
    },
    {
      id: "102",
      building: "Khu A",
      type: "Phòng trọ",
      price: "3.500.000",
      area: "25m²",
      status: "Trống",
      tenant: "-",
      lastPayment: "-",
    },
    {
      id: "201",
      building: "Khu B",
      type: "Căn hộ mini",
      price: "5.500.000",
      area: "35m²",
      status: "Đang thuê",
      tenant: "Trần Thị C",
      lastPayment: "01/06/2023",
    },
    {
      id: "202",
      building: "Khu B",
      type: "Căn hộ mini",
      price: "5.500.000",
      area: "35m²",
      status: "Đang sửa chữa",
      tenant: "-",
      lastPayment: "-",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý phòng</h1>
          <p className="text-gray-500 mt-1">Quản lý danh sách phòng và tình trạng thuê.</p>
        </div>
        <Button className="shrink-0" asChild>
          <Link to="/landlord/rooms/new">
            <Plus className="w-4 h-4 mr-2" />
            Thêm phòng mới
          </Link>
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Tìm theo số phòng, tên người thuê..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <select className="border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border">
                <option>Tất cả khu trọ</option>
                <option>Khu A</option>
                <option>Khu B</option>
              </select>
              <select className="border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border">
                <option>Tất cả trạng thái</option>
                <option>Đang thuê</option>
                <option>Trống</option>
                <option>Đang sửa chữa</option>
              </select>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                <tr>
                  <th className="px-4 py-3 font-medium">Phòng</th>
                  <th className="px-4 py-3 font-medium">Khu trọ</th>
                  <th className="px-4 py-3 font-medium">Loại phòng</th>
                  <th className="px-4 py-3 font-medium">Giá thuê</th>
                  <th className="px-4 py-3 font-medium">Trạng thái</th>
                  <th className="px-4 py-3 font-medium">Người thuê</th>
                  <th className="px-4 py-3 font-medium text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-4 font-medium text-gray-900">{room.id}</td>
                    <td className="px-4 py-4 text-gray-600">{room.building}</td>
                    <td className="px-4 py-4 text-gray-600">{room.type}</td>
                    <td className="px-4 py-4 font-medium text-emerald-600">{room.price}đ</td>
                    <td className="px-4 py-4">
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
                    <td className="px-4 py-4 text-gray-600">{room.tenant}</td>
                    <td className="px-4 py-4 text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-emerald-600" asChild>
                        <Link to={`/landlord/rooms/${room.id}/edit`}>
                          <Edit className="w-4 h-4" />
                        </Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm text-gray-500">Hiển thị 1-4 của 45 phòng</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Trước</Button>
              <Button variant="outline" size="sm">Sau</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
