import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Tổng người dùng",
      value: "12,450",
      subtitle: "+120 tuần này",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Bài đăng chờ duyệt",
      value: "45",
      subtitle: "Cần xử lý ngay",
      icon: FileText,
      color: "text-amber-600",
      bgColor: "bg-amber-100",
    },
    {
      title: "Báo cáo vi phạm",
      value: "12",
      subtitle: "3 báo cáo lừa đảo",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ];

  const pendingPosts = [
    { id: 1, title: "Phòng trọ cao cấp quận 7", landlord: "Nguyễn Văn A", time: "10 phút trước", status: "Chờ duyệt" },
    { id: 2, title: "Căn hộ mini giá rẻ Tân Bình", landlord: "Trần Thị B", time: "30 phút trước", status: "Chờ duyệt" },
    { id: 3, title: "Ký túc xá sinh viên Bình Thạnh", landlord: "Lê Văn C", time: "1 giờ trước", status: "Chờ duyệt" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tổng quan hệ thống</h1>
        <p className="text-gray-500 mt-1">Quản lý và giám sát hoạt động của nền tảng.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Posts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Bài đăng chờ duyệt</CardTitle>
            <Button variant="outline" size="sm">Xem tất cả</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                  <div>
                    <h4 className="font-medium text-gray-900">{post.title}</h4>
                    <p className="text-sm text-gray-500">Đăng bởi: {post.landlord} • {post.time}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 hover:text-red-700">Từ chối</Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <CheckCircle2 className="w-4 h-4 mr-1" /> Duyệt
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Báo cáo vi phạm mới nhất</CardTitle>
            <Button variant="outline" size="sm">Xem tất cả</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border border-red-100 bg-red-50 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-gray-900">Nghi ngờ lừa đảo cọc</h4>
                    <Badge variant="destructive">Nghiêm trọng</Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Người dùng báo cáo chủ trọ yêu cầu chuyển khoản 100% tiền cọc trước khi xem phòng.</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-white">Khóa tài khoản</Button>
                    <Button variant="outline" size="sm" className="bg-white">Xem chi tiết</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
