import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Reports() {
  const revenueData = [
    { name: 'T1', revenue: 45000000, expense: 5000000 },
    { name: 'T2', revenue: 48000000, expense: 4500000 },
    { name: 'T3', revenue: 52000000, expense: 6000000 },
    { name: 'T4', revenue: 50000000, expense: 5500000 },
    { name: 'T5', revenue: 55000000, expense: 4000000 },
    { name: 'T6', revenue: 58000000, expense: 7000000 },
  ];

  const occupancyData = [
    { name: 'T1', rate: 85 },
    { name: 'T2', rate: 88 },
    { name: 'T3', rate: 92 },
    { name: 'T4', rate: 90 },
    { name: 'T5', rate: 95 },
    { name: 'T6', rate: 98 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Báo cáo thống kê</h1>
          <p className="text-gray-500 mt-1">Phân tích doanh thu, chi phí và tỷ lệ lấp đầy.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="shrink-0">
            <Calendar className="w-4 h-4 mr-2" />
            Năm 2024
          </Button>
          <Button className="shrink-0 bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Xuất báo cáo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500 mb-1">Tổng doanh thu (YTD)</p>
            <h3 className="text-3xl font-bold text-gray-900">308.000.000đ</h3>
            <p className="text-sm text-emerald-600 mt-2 flex items-center">
              +12.5% so với cùng kỳ
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500 mb-1">Tổng chi phí (YTD)</p>
            <h3 className="text-3xl font-bold text-gray-900">32.000.000đ</h3>
            <p className="text-sm text-red-600 mt-2 flex items-center">
              +5.2% so với cùng kỳ
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm font-medium text-gray-500 mb-1">Lợi nhuận ròng (YTD)</p>
            <h3 className="text-3xl font-bold text-emerald-600">276.000.000đ</h3>
            <p className="text-sm text-emerald-600 mt-2 flex items-center">
              +14.1% so với cùng kỳ
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Doanh thu & Chi phí</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(value) => `${value / 1000000}M`} />
                  <Tooltip formatter={(value: number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value)} />
                  <Bar dataKey="revenue" name="Doanh thu" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="expense" name="Chi phí" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tỷ lệ lấp đầy (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={occupancyData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Line type="monotone" dataKey="rate" name="Tỷ lệ lấp đầy" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
