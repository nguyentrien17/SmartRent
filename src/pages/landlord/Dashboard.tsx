import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Receipt, AlertCircle, TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function LandlordDashboard() {
  const stats = [
    {
      title: "Tổng số phòng",
      value: "45",
      subtitle: "3 khu trọ",
      icon: Building2,
      trend: "up",
      trendValue: "+2",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Phòng đang thuê",
      value: "42",
      subtitle: "Tỷ lệ lấp đầy 93%",
      icon: Users,
      trend: "up",
      trendValue: "+5%",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
    },
    {
      title: "Doanh thu tháng này",
      value: "125.5M",
      subtitle: "Đã thu 110M",
      icon: Receipt,
      trend: "up",
      trendValue: "+12%",
      color: "text-violet-600",
      bgColor: "bg-violet-100",
    },
    {
      title: "Công nợ chưa thu",
      value: "15.5M",
      subtitle: "Từ 5 phòng",
      icon: AlertCircle,
      trend: "down",
      trendValue: "-3%",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];

  const revenueData = [
    { name: "T1", total: 110 },
    { name: "T2", total: 115 },
    { name: "T3", total: 105 },
    { name: "T4", total: 120 },
    { name: "T5", total: 125 },
    { name: "T6", total: 125.5 },
  ];

  const recentActivities = [
    { id: 1, type: "payment", text: "Phòng 101 - Khu A đã thanh toán tiền nhà tháng 6", time: "2 giờ trước" },
    { id: 2, type: "contract", text: "Hợp đồng phòng 205 - Khu B sắp hết hạn (còn 15 ngày)", time: "5 giờ trước" },
    { id: 3, type: "maintenance", text: "Phòng 302 - Khu A báo hỏng máy lạnh", time: "1 ngày trước" },
    { id: 4, type: "new_tenant", text: "Người thuê mới nhận phòng 105 - Khu C", time: "2 ngày trước" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tổng quan</h1>
        <p className="text-gray-500 mt-1">Theo dõi tình hình kinh doanh khu trọ của bạn.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    {stat.trendValue}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-sm font-medium text-gray-500 mt-1">{stat.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Doanh thu 6 tháng gần nhất</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} tickFormatter={(value) => `${value}M`} />
                  <Tooltip
                    cursor={{ fill: '#F3F4F6' }}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="total" fill="#059669" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Hoạt động gần đây</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-900">{activity.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
