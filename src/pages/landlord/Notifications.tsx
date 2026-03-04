import { Bell, CheckCircle2, AlertTriangle, Info, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Thanh toán thành công",
      message: "Khách thuê Nguyễn Văn A (P.101) đã thanh toán hóa đơn tháng 5.",
      time: "10 phút trước",
      read: false,
      icon: CheckCircle2,
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    },
    {
      id: 2,
      type: "warning",
      title: "Hợp đồng sắp hết hạn",
      message: "Hợp đồng của Trần Thị B (P.205) sẽ hết hạn trong 15 ngày tới.",
      time: "2 giờ trước",
      read: false,
      icon: AlertTriangle,
      color: "text-amber-600",
      bgColor: "bg-amber-100"
    },
    {
      id: 3,
      type: "info",
      title: "Yêu cầu sửa chữa",
      message: "Khách thuê Lê Văn C (P.102) vừa gửi yêu cầu sửa chữa máy lạnh.",
      time: "Hôm qua",
      read: true,
      icon: Info,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      id: 4,
      type: "alert",
      title: "Hóa đơn quá hạn",
      message: "Hóa đơn tháng 4 của phòng 301 đã quá hạn 5 ngày.",
      time: "2 ngày trước",
      read: true,
      icon: Clock,
      color: "text-red-600",
      bgColor: "bg-red-100"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Bell className="w-6 h-6" />
            Thông báo
          </h1>
          <p className="text-gray-500 mt-1">Cập nhật các hoạt động mới nhất từ hệ thống và người thuê.</p>
        </div>
        <Button variant="outline" size="sm" className="text-gray-600">
          <Check className="w-4 h-4 mr-2" />
          Đánh dấu tất cả đã đọc
        </Button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="divide-y divide-gray-100">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div 
                key={notification.id} 
                className={`p-4 sm:p-6 flex gap-4 hover:bg-gray-50 transition-colors ${!notification.read ? 'bg-blue-50/30' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notification.bgColor}`}>
                  <Icon className={`w-5 h-5 ${notification.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className={`font-semibold ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                  </div>
                  <p className={`text-sm ${!notification.read ? 'text-gray-700' : 'text-gray-500'}`}>
                    {notification.message}
                  </p>
                </div>
                {!notification.read && (
                  <div className="flex items-center justify-center w-3 shrink-0">
                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
