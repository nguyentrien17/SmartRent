import { useState } from "react";
import { Plus, Search, Filter, FileText, Download, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Contracts() {
  const [searchTerm, setSearchTerm] = useState("");

  const contracts = [
    {
      id: "PT-2024-001",
      tenant: "Nguyễn Văn A",
      room: "P.101 - Khu A",
      startDate: "01/01/2024",
      endDate: "31/12/2024",
      deposit: "3.500.000đ",
      status: "Đang lưu trú"
    },
    {
      id: "PT-2024-002",
      tenant: "Trần Thị B",
      room: "P.205 - Khu B",
      startDate: "15/03/2024",
      endDate: "15/09/2024",
      deposit: "4.000.000đ",
      status: "Sắp trả phòng"
    },
    {
      id: "PT-2023-015",
      tenant: "Lê Văn C",
      room: "P.102 - Khu A",
      startDate: "01/06/2023",
      endDate: "31/05/2024",
      deposit: "3.000.000đ",
      status: "Đã trả phòng"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý phiếu thuê phòng</h1>
          <p className="text-gray-500 mt-1">Theo dõi thông tin lưu trú và tiền cọc của khách thuê.</p>
        </div>
        <Button className="shrink-0 bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Tạo phiếu thuê mới
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Tìm kiếm mã phiếu, tên khách, phòng..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="shrink-0">
          <Filter className="w-4 h-4 mr-2" />
          Lọc theo trạng thái
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Mã phiếu</th>
                <th className="px-4 py-3">Khách thuê</th>
                <th className="px-4 py-3">Phòng</th>
                <th className="px-4 py-3">Thời gian ở</th>
                <th className="px-4 py-3">Tiền cọc</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {contracts.map((contract) => (
                <tr key={contract.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-blue-600">{contract.id}</td>
                  <td className="px-4 py-4 text-gray-900 font-medium">{contract.tenant}</td>
                  <td className="px-4 py-4 text-gray-600">{contract.room}</td>
                  <td className="px-4 py-4 text-gray-600">
                    <div className="text-xs">{contract.startDate}</div>
                    <div className="text-xs text-gray-400">đến {contract.endDate}</div>
                  </td>
                  <td className="px-4 py-4 text-gray-900 font-medium">{contract.deposit}</td>
                  <td className="px-4 py-4">
                    <Badge 
                      variant={contract.status === "Đang lưu trú" ? "default" : contract.status === "Sắp trả phòng" ? "destructive" : "secondary"}
                      className={contract.status === "Đang lưu trú" ? "bg-emerald-100 text-emerald-800" : contract.status === "Sắp trả phòng" ? "bg-amber-100 text-amber-800" : ""}
                    >
                      {contract.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-blue-600" title="Xem chi tiết">
                        <FileText className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-emerald-600" title="Tải xuống PDF">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-amber-600" title="Sửa">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
