import { Link } from "react-router-dom";
import { MapPin, Maximize, Star, Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SavedRooms() {
  const savedRooms = [
    {
      id: 1,
      title: "Phòng trọ cao cấp full nội thất",
      price: "3.500.000",
      area: "25m²",
      location: "Quận 7, TP.HCM",
      image: "https://picsum.photos/seed/room1/400/300",
      type: "Phòng trọ",
      rating: 4.8,
      status: "Còn phòng",
    },
    {
      id: 2,
      title: "Căn hộ mini gần đại học Tôn Đức Thắng",
      price: "4.200.000",
      area: "30m²",
      location: "Quận 7, TP.HCM",
      image: "https://picsum.photos/seed/room2/400/300",
      type: "Căn hộ mini",
      rating: 4.9,
      status: "Còn phòng",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Phòng đã lưu ({savedRooms.length})</h1>
      </div>

      {savedRooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow border-gray-200 group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge variant="default" className="bg-emerald-500 hover:bg-emerald-600 shadow-sm">
                    {room.type}
                  </Badge>
                </div>
                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-red-500 hover:bg-red-50 transition-colors shadow-sm z-10">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <CardContent className="p-4 flex-1 flex flex-col">
                <Link to={`/room/${room.id}`} className="flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-bold text-emerald-600">{room.price}đ/tháng</span>
                    <div className="flex items-center text-sm font-medium text-amber-500">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      {room.rating}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 line-clamp-2 mb-3 group-hover:text-emerald-600 transition-colors">
                    {room.title}
                  </h3>
                  <div className="mt-auto space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4" />
                      <span>{room.area}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{room.location}</span>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-gray-900 mb-2">Chưa có phòng nào được lưu</h2>
          <p className="text-gray-500 mb-6">Hãy tìm và lưu lại những căn phòng bạn yêu thích nhé.</p>
          <Button asChild>
            <Link to="/search">Khám phá ngay</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
