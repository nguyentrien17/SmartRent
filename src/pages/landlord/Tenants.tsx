import { useState } from "react";
import { Search, Filter, MoreVertical, Eye, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Tenants() {
  const [searchTerm, setSearchTerm] = useState("");

  const tenants = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      phone: "0901234567",
      room: "P.101 - Khu A",
      moveInDate: "01/01/2024",
      status: "Đang thuê",
      avatar: "https://picsum.photos/seed/t1/100/100"
    },
    {
      id: 2,
      name: "Trần Thị B",
      phone: "0912345678",
      room: "P.205 - Khu B",
      moveInDate: "15/03/2024",
      status: "Đang thuê",
      avatar: "https://picsum.photos/seed/t2/100/100"
    },
    {
      id: 3,
      name: "Lê Văn C",
      phone: "0923456789",
      room: "P.102 - Khu A",
      moveInDate: "01/06/2023",
      status: "Sắp hết hạn",
      avatar: "https://picsum.photos/seed/t3/100/100"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Người thuê</h1>
          <p className="text-gray-500 mt-1">Quản lý thông tin khách đang thuê phòng.</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Tìm kiếm theo tên, số điện thoại, phòng..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="shrink-0">
          <Filter className="w-4 h-4 mr-2" />
          Bộ lọc
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Người thuê</th>
                <th className="px-4 py-3">Phòng</th>
                <th className="px-4 py-3">Ngày vào ở</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tenants.map((tenant) => (
                <tr key={tenant.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <img src={tenant.avatar} alt={tenant.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <p className="font-medium text-gray-900">{tenant.name}</p>
                        <p className="text-xs text-gray-500">{tenant.phone}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-600 font-medium">{tenant.room}</td>
                  <td className="px-4 py-4 text-gray-600">{tenant.moveInDate}</td>
                  <td className="px-4 py-4">
                    <Badge variant={tenant.status === "Đang thuê" ? "default" : "destructive"} className={tenant.status === "Đang thuê" ? "bg-emerald-100 text-emerald-800" : ""}>
                      {tenant.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500">
                        <MoreVertical className="w-4 h-4" />
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
