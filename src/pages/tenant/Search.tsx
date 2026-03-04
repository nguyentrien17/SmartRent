import { useState } from "react";
import { Filter, MapPin, Maximize, Star, Heart, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function Search() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const searchResults = [
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
      status: "Hết phòng",
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
      status: "Còn phòng",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Kết quả tìm kiếm</h1>
          <Button variant="outline" onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Bộ lọc
          </Button>
        </div>

        {/* Sidebar Filters */}
        <aside
          className={`lg:w-64 flex-shrink-0 ${
            isFilterOpen ? "block" : "hidden"
          } lg:block`}
        >
          <div className="bg-white p-6 rounded-2xl border border-gray-200 sticky top-24">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-bold text-gray-900">Bộ lọc tìm kiếm</h2>
            </div>

            <div className="space-y-6">
              {/* Location */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Khu vực</label>
                <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border">
                  <option>Tất cả quận/huyện</option>
                  <option>Quận 1</option>
                  <option>Quận 7</option>
                  <option>Quận 8</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Khoảng giá</label>
                <div className="flex items-center gap-2">
                  <Input type="number" placeholder="Từ" className="text-sm" />
                  <span className="text-gray-500">-</span>
                  <Input type="number" placeholder="Đến" className="text-sm" />
                </div>
              </div>

              {/* Room Type */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Loại phòng</label>
                <div className="space-y-2">
                  {["Phòng trọ", "Căn hộ mini", "Ở ghép", "Studio"].map((type) => (
                    <label key={type} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-sm text-gray-600">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Tiện nghi</label>
                <div className="space-y-2">
                  {["WC riêng", "Có gác lửng", "Máy lạnh", "Chỗ để xe", "Cho nuôi pet"].map((amenity) => (
                    <label key={amenity} className="flex items-center gap-2">
                      <input type="checkbox" className="rounded text-emerald-600 focus:ring-emerald-500" />
                      <span className="text-sm text-gray-600">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="w-full">Áp dụng bộ lọc</Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="hidden lg:flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Tìm thấy {searchResults.length} phòng trọ
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sắp xếp theo:</span>
              <select className="border-gray-300 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-2 border">
                <option>Mới nhất</option>
                <option>Giá: Thấp đến cao</option>
                <option>Giá: Cao đến thấp</option>
                <option>Gần tôi nhất</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {searchResults.map((room) => (
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
                      {room.status === "Hết phòng" && (
                        <Badge variant="destructive" className="shadow-sm">
                          Hết phòng
                        </Badge>
                      )}
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

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" disabled>
                &lt;
              </Button>
              <Button variant="default" size="icon" className="bg-emerald-600">
                1
              </Button>
              <Button variant="outline" size="icon">
                2
              </Button>
              <Button variant="outline" size="icon">
                3
              </Button>
              <Button variant="outline" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
