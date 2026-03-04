import { useState } from "react";
import { Plus, Search, Filter, CheckCircle2, AlertCircle, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Invoices() {
  const [searchTerm, setSearchTerm] = useState("");

  const invoices = [
    {
      id: "INV-2024-05-001",
      room: "P.101 - Khu A",
      tenant: "Nguyễn Văn A",
      month: "05/2024",
      amount: "4.250.000đ",
      dueDate: "05/05/2024",
      status: "Chưa thanh toán"
    },
    {
      id: "INV-2024-05-002",
      room: "P.205 - Khu B",
      tenant: "Trần Thị B",
      month: "05/2024",
      amount: "3.800.000đ",
      dueDate: "05/05/2024",
      status: "Đã thanh toán"
    },
    {
      id: "INV-2024-04-015",
      room: "P.102 - Khu A",
      tenant: "Lê Văn C",
      month: "04/2024",
      amount: "3.100.000đ",
      dueDate: "05/04/2024",
      status: "Quá hạn"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý thu tiền</h1>
          <p className="text-gray-500 mt-1">Lập hóa đơn điện nước, tiền nhà và theo dõi thanh toán.</p>
        </div>
        <Button className="shrink-0 bg-emerald-600 hover:bg-emerald-700">
          <Plus className="w-4 h-4 mr-2" />
          Lập hóa đơn mới
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Tìm kiếm mã hóa đơn, phòng, tên khách..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="shrink-0">
          <Filter className="w-4 h-4 mr-2" />
          Tháng: 05/2024
        </Button>
        <Button variant="outline" className="shrink-0">
          <Filter className="w-4 h-4 mr-2" />
          Trạng thái
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-3">Mã Hóa Đơn</th>
                <th className="px-4 py-3">Phòng / Khách</th>
                <th className="px-4 py-3">Kỳ thu</th>
                <th className="px-4 py-3">Tổng tiền</th>
                <th className="px-4 py-3">Hạn chót</th>
                <th className="px-4 py-3">Trạng thái</th>
                <th className="px-4 py-3 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-gray-900">{invoice.id}</td>
                  <td className="px-4 py-4">
                    <div className="font-medium text-gray-900">{invoice.room}</div>
                    <div className="text-xs text-gray-500">{invoice.tenant}</div>
                  </td>
                  <td className="px-4 py-4 text-gray-600">{invoice.month}</td>
                  <td className="px-4 py-4 font-bold text-emerald-600">{invoice.amount}</td>
                  <td className="px-4 py-4 text-gray-600">{invoice.dueDate}</td>
                  <td className="px-4 py-4">
                    <Badge 
                      variant={invoice.status === "Đã thanh toán" ? "default" : invoice.status === "Quá hạn" ? "destructive" : "secondary"}
                      className={invoice.status === "Đã thanh toán" ? "bg-emerald-100 text-emerald-800" : invoice.status === "Quá hạn" ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"}
                    >
                      {invoice.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {invoice.status !== "Đã thanh toán" && (
                        <>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50" title="Gửi nhắc nhở">
                            <Send className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50" title="Xác nhận đã thu">
                            <CheckCircle2 className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700 hover:bg-gray-100" title="Xem chi tiết">
                        <FileText className="w-4 h-4" />
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
