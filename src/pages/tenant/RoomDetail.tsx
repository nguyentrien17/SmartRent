import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Maximize, Star, Heart, Share2, Phone, MessageCircle, Calendar, CheckCircle2, AlertTriangle, Zap, Droplets, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/StarRating";

export default function RoomDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  
  // Booking Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [bookingNote, setBookingNote] = useState("");
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsBookingSuccess(true);
      setTimeout(() => {
        setIsBookingModalOpen(false);
        setIsBookingSuccess(false);
        setBookingDate("");
        setBookingTime("");
        setBookingNote("");
      }, 2000);
    }, 500);
  };

  const room = {
    id: id,
    title: "Phòng trọ cao cấp full nội thất gần ĐH Tôn Đức Thắng",
    price: "3.500.000",
    deposit: "3.500.000",
    area: "25m²",
    location: "123 Nguyễn Hữu Thọ, Phường Tân Phong, Quận 7, TP.HCM",
    type: "Phòng trọ",
    rating: 4.8,
    reviews: 12,
    status: "Còn phòng",
    images: [
      "https://picsum.photos/seed/room1/800/600",
      "https://picsum.photos/seed/room1_2/800/600",
      "https://picsum.photos/seed/room1_3/800/600",
      "https://picsum.photos/seed/room1_4/800/600",
    ],
    description: `Phòng trọ mới xây, sạch sẽ, thoáng mát, an ninh tốt.
- Giờ giấc tự do, không chung chủ.
- Có chỗ để xe miễn phí rộng rãi.
- Khu vực an ninh, có camera giám sát 24/24.
- Gần chợ, siêu thị, trường đại học Tôn Đức Thắng, RMIT.`,
    amenities: ["WC riêng", "Có gác lửng", "Máy lạnh", "Tủ lạnh", "Máy giặt chung", "Chỗ để xe", "Wifi miễn phí"],
    costs: {
      electricity: "3.500đ/kwh",
      water: "100.000đ/người/tháng",
      internet: "Miễn phí",
      service: "50.000đ/phòng/tháng (Rác, vệ sinh chung)",
    },
    landlord: {
      name: "Nguyễn Văn A",
      phone: "0901234567",
      avatar: "https://picsum.photos/seed/user1/100/100",
      joined: "Tham gia 2 năm trước",
      responseRate: "98%",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-emerald-600">Trang chủ</Link>
        <span>/</span>
        <Link to="/search" className="hover:text-emerald-600">Hồ Chí Minh</Link>
        <span>/</span>
        <Link to="/search" className="hover:text-emerald-600">Quận 7</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium truncate">{room.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Images & Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] sm:aspect-[16/9] rounded-2xl overflow-hidden relative bg-gray-100">
              <img
                src={room.images[activeImage]}
                alt={`Room view ${activeImage + 1}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="secondary" size="icon" className="rounded-full bg-white/80 hover:bg-white backdrop-blur-sm">
                  <Share2 className="w-4 h-4 text-gray-700" />
                </Button>
                <Button variant="secondary" size="icon" className="rounded-full bg-white/80 hover:bg-white backdrop-blur-sm">
                  <Heart className="w-4 h-4 text-gray-700" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {room.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                    activeImage === idx ? "border-emerald-500 ring-2 ring-emerald-500 ring-offset-2" : "border-transparent hover:opacity-80"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Title & Basic Info */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                {room.title}
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <StarRating rating={room.rating} />
              <span className="text-gray-500">({room.reviews} đánh giá)</span>
              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {room.location}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <Badge variant="default" className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-sm py-1 px-3">
                {room.type}
              </Badge>
              <Badge variant="outline" className="text-sm py-1 px-3 border-gray-300">
                <Maximize className="w-4 h-4 mr-1" /> {room.area}
              </Badge>
              {room.status === "Còn phòng" ? (
                <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-200 text-sm py-1 px-3">
                  <CheckCircle2 className="w-4 h-4 mr-1" /> Còn phòng
                </Badge>
              ) : (
                <Badge variant="destructive" className="text-sm py-1 px-3">
                  Hết phòng
                </Badge>
              )}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Mô tả chi tiết</h2>
            <div className="prose prose-emerald max-w-none text-gray-600 whitespace-pre-line">
              {room.description}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Amenities */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tiện nghi</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {room.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Map */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Vị trí trên bản đồ</h2>
            <div className="aspect-[16/9] bg-gray-200 rounded-2xl overflow-hidden relative flex items-center justify-center">
              <span className="text-gray-500">Google Maps Integration Here</span>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Reviews */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Đánh giá từ người thuê</h2>
              <div className="flex items-center gap-2">
                <StarRating rating={room.rating} />
                <span className="text-gray-500">({room.reviews} đánh giá)</span>
              </div>
            </div>

            {/* Mock condition: Only show if user has rented */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-emerald-800 mb-2">Viết đánh giá của bạn</h3>
              <p className="text-sm text-emerald-600 mb-4">Bạn đang thuê hoặc đã từng thuê phòng này. Hãy chia sẻ trải nghiệm của bạn nhé!</p>
              <div className="flex gap-2 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button 
                    key={star} 
                    type="button"
                    onClick={() => setUserRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className={`transition-colors ${
                      star <= (hoverRating || userRating) 
                        ? "text-amber-400" 
                        : "text-gray-300 hover:text-amber-400"
                    }`}
                  >
                    <Star className={`w-6 h-6 ${star <= (hoverRating || userRating) ? "fill-current" : ""}`} />
                  </button>
                ))}
              </div>
              <textarea 
                className="w-full border-emerald-200 rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 text-sm p-3 border min-h-[80px] mb-3 bg-white"
                placeholder="Chia sẻ trải nghiệm của bạn về phòng trọ, chủ nhà, tiện ích xung quanh..."
              ></textarea>
              <Button size="sm">Gửi đánh giá</Button>
            </div>

            <div className="space-y-4">
              {/* Sample Review */}
              <div className="border-b border-gray-100 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">H</div>
                    <div>
                      <p className="font-medium text-gray-900">Hoàng Văn A</p>
                      <p className="text-xs text-gray-500">Đã thuê 6 tháng trước</p>
                    </div>
                  </div>
                  <StarRating rating={5} showText={false} />
                </div>
                <p className="text-gray-600 text-sm">Phòng rất sạch sẽ, chủ nhà thân thiện. Khu vực an ninh tốt, gần chợ nên rất tiện. Tuy nhiên chỗ để xe hơi chật vào buổi tối.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing & Contact */}
        <div className="space-y-6">
          {/* Pricing Card */}
          <Card className="sticky top-24 border-emerald-100 shadow-lg shadow-emerald-100/50">
            <CardContent className="p-6">
              <div className="mb-6">
                <span className="text-3xl font-bold text-emerald-600">{room.price}đ</span>
                <span className="text-gray-500">/tháng</span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tiền cọc</span>
                  <span className="font-medium text-gray-900">{room.deposit}đ</span>
                </div>
                <hr className="border-gray-100" />
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900">Chi phí dự kiến khác:</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2"><Zap className="w-4 h-4 text-amber-500" /> Điện</span>
                    <span className="font-medium text-gray-900">{room.costs.electricity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2"><Droplets className="w-4 h-4 text-blue-500" /> Nước</span>
                    <span className="font-medium text-gray-900">{room.costs.water}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2"><Wifi className="w-4 h-4 text-gray-400" /> Internet</span>
                    <span className="font-medium text-gray-900">{room.costs.internet}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full py-6 text-base" 
                  size="lg"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Đặt lịch xem phòng
                </Button>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                    <Phone className="w-4 h-4 mr-2" />
                    Gọi điện
                  </Button>
                  <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat ngay
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Landlord Info */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Thông tin chủ trọ</h3>
              <div className="flex items-center gap-4 mb-4">
                <img src={room.landlord.avatar} alt={room.landlord.name} className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-gray-900 text-lg">{room.landlord.name}</p>
                  <p className="text-sm text-gray-500">{room.landlord.joined}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                <span>Tỷ lệ phản hồi</span>
                <span className="font-bold text-emerald-600">{room.landlord.responseRate}</span>
              </div>
            </CardContent>
          </Card>

          {/* Smart Warning */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 text-amber-800">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold mb-1">Lưu ý an toàn</p>
              <p>Tuyệt đối không chuyển tiền cọc trước khi xem phòng và làm thủ tục thuê trực tiếp.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">Đặt lịch xem phòng</h3>
              <button 
                onClick={() => setIsBookingModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              {isBookingSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Đặt lịch thành công!</h4>
                  <p className="text-gray-600">Chủ phòng sẽ liên hệ với bạn sớm nhất để xác nhận lịch hẹn.</p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ngày xem phòng <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="date" 
                      required
                      value={bookingDate}
                      onChange={(e) => setBookingDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2.5 border"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Thời gian dự kiến <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="time" 
                      required
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2.5 border"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Lời nhắn cho chủ phòng (Tùy chọn)
                    </label>
                    <textarea 
                      rows={3}
                      value={bookingNote}
                      onChange={(e) => setBookingNote(e.target.value)}
                      placeholder="Ví dụ: Tôi muốn xem phòng vào buổi tối sau giờ làm..."
                      className="w-full border-gray-300 rounded-lg shadow-sm focus:border-emerald-500 focus:ring-emerald-500 p-2.5 border resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4 flex gap-3">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setIsBookingModalOpen(false)}
                    >
                      Hủy
                    </Button>
                    <Button type="submit" className="flex-1">
                      Xác nhận đặt lịch
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
