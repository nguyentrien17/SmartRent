import { useState } from "react";
import { Search, MapPin, DollarSign, Maximize, Home as HomeIcon, Filter, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  const featuredRooms = [
    {
      id: 1,
      title: "Phòng trọ cao cấp full nội thất",
      price: "3.500.000",
      area: "25m²",
      location: "Quận 7, TP.HCM",
      image: "https://picsum.photos/seed/room1/400/300",
      type: "Phòng trọ",
      rating: 4.8,
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
    },
    {
      id: 3,
      title: "Phòng trọ giá rẻ có gác lửng",
      price: "2.800.000",
      area: "20m²",
      location: "Quận 8, TP.HCM",
      image: "https://picsum.photos/seed/room3/400/300",
      type: "Phòng trọ",
      rating: 4.5,
    },
    {
      id: 4,
      title: "Studio full tiện nghi ngay trung tâm",
      price: "5.500.000",
      area: "35m²",
      location: "Quận 1, TP.HCM",
      image: "https://picsum.photos/seed/room4/400/300",
      type: "Studio",
      rating: 5.0,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://picsum.photos/seed/hero/1920/1080?blur=2"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Tìm phòng trọ ưng ý <br className="hidden sm:block" />
            <span className="text-emerald-400">nhanh chóng & dễ dàng</span>
          </h1>
          <p className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto">
            Hàng ngàn phòng trọ, căn hộ mini được xác thực đang chờ bạn khám phá.
          </p>

          {/* Search Bar */}
          <div className="bg-white p-2 rounded-2xl shadow-xl max-w-3xl mx-auto mt-8">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 flex items-center bg-gray-50 rounded-xl px-4 py-3 border border-gray-100">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Nhập quận/huyện, tên đường..."
                  className="bg-transparent border-none outline-none w-full text-gray-900 placeholder:text-gray-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button type="submit" size="lg" className="h-auto py-3 px-8 rounded-xl text-base">
                <Search className="w-5 h-5 mr-2" />
                Tìm kiếm
              </Button>
            </form>
          </div>

          {/* Popular Searches */}
          <div className="pt-6 flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-emerald-200">Gợi ý:</span>
            {["Quận 7", "Gần ĐH Tôn Đức Thắng", "Căn hộ mini", "Dưới 3 triệu"].map((tag) => (
              <button
                key={tag}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
                onClick={() => setSearchQuery(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Phòng trọ nổi bật</h2>
            <p className="text-gray-500 mt-1">Những phòng trọ được đánh giá cao nhất</p>
          </div>
          <Link to="/search" className="text-emerald-600 font-medium hover:underline hidden sm:block">
            Xem tất cả
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRooms.map((room) => (
            <Link key={room.id} to={`/room/${room.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow border-gray-200 group cursor-pointer h-full flex flex-col">
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
                  <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors backdrop-blur-sm">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
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
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/search">Xem tất cả phòng</Link>
          </Button>
        </div>
      </section>

      {/* Smart Features Banner */}
      <section className="bg-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                Tính năng thông minh
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900">
                Gợi ý phòng trọ bằng AI
              </h2>
              <p className="text-lg text-gray-600">
                Hệ thống tự động học hỏi sở thích, vị trí và ngân sách của bạn để đề xuất những căn phòng phù hợp nhất. Không còn phải lướt tìm mỏi mắt.
              </p>
              <ul className="space-y-3">
                {[
                  "Phân tích hành vi tìm kiếm",
                  "Gợi ý theo khoảng cách di chuyển",
                  "Cảnh báo giá thuê bất thường",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button size="lg" className="mt-4">
                Trải nghiệm ngay
              </Button>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-teal-100 rounded-full blur-3xl opacity-50"></div>
                <img
                  src="https://picsum.photos/seed/ai/600/600"
                  alt="AI Suggestion"
                  className="relative z-10 rounded-2xl shadow-2xl object-cover w-full h-full border-4 border-white"
                  referrerPolicy="no-referrer"
                />
                {/* Floating elements */}
                <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Độ phù hợp</p>
                      <p className="text-sm font-bold text-gray-900">98% Match</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
