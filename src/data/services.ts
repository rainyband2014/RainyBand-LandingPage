export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  suitableFor: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "service-1",
    slug: "acoustic-quan-bar",
    title: "Booking Acoustic cho Quán/Bar",
    shortDescription: "Set nhạc acoustic linh hoạt, phù hợp mọi không gian quán từ café yên tĩnh đến rooftop sôi động.",
    longDescription: "Rainy Band mang đến trải nghiệm âm nhạc sống tại quán với set acoustic được chọn lọc riêng theo không khí và phong cách của từng địa điểm. Đội ngũ có thể biểu diễn từ solo vocal + guitar đến full band tuỳ theo diện tích và nhu cầu.\n\nChúng tôi hỗ trợ tư vấn thể loại nhạc, thời lượng biểu diễn và setup thiết bị phù hợp, đảm bảo âm lượng vừa đủ để tạo không khí mà không ảnh hưởng đến trải nghiệm của khách.",
    suitableFor: "Café, rooftop, bar, lounge cần không gian nhạc sống nhẹ nhàng",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/800x600/123240/123240"
  },
  {
    id: "service-2",
    slug: "tiec-cuoi-su-kien",
    title: "Biểu diễn Tiệc cưới & Sự kiện doanh nghiệp",
    shortDescription: "Trọn gói biểu diễn cho tiệc cưới và sự kiện trang trọng, bao gồm MC song ngữ nếu cần.",
    longDescription: "Dịch vụ biểu diễn trọn gói dành cho tiệc cưới và sự kiện doanh nghiệp, bao gồm ban nhạc acoustic/full band, vocal theo yêu cầu, và tuỳ chọn MC song ngữ Việt-Anh. Rainy Band phối hợp chặt chẽ với wedding planner hoặc ban tổ chức để đảm bảo kịch bản chương trình chạy mượt mà.\n\nĐội ngũ có kinh nghiệm biểu diễn tại nhiều nhà hàng tiệc cưới và trung tâm hội nghị lớn tại TP.HCM, luôn đúng giờ và chuyên nghiệp trong trang phục cũng như phong thái trình diễn.",
    suitableFor: "Đám cưới, Year End Party, lễ khai trương, gala công ty",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/800x600/1a4655/1a4655"
  },
  {
    id: "service-3",
    slug: "vocal-nhac-cong-le",
    title: "Cung cấp Vocal/Nhạc công lẻ",
    shortDescription: "Bổ sung vocal hoặc nhạc công chuyên nghiệp cho ban nhạc hoặc chương trình đã có sẵn.",
    longDescription: "Nếu bạn đã có ban nhạc hoặc chương trình nhưng cần bổ sung thêm nhân sự chất lượng, Rainy Band cung cấp vocal và nhạc công lẻ theo yêu cầu. Mỗi nghệ sĩ đều được tuyển chọn kỹ, có kinh nghiệm biểu diễn thực tế và khả năng hoà nhập nhanh với đội hình mới.\n\nChúng tôi hỗ trợ tập luyện trước show nếu cần, đảm bảo phối hợp ăn ý với ban nhạc hiện có của bạn.",
    suitableFor: "Ban tổ chức cần bổ sung nhân sự cho ban nhạc sẵn có",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/800x600/0e222c/0e222c"
  },
  {
    id: "service-4",
    slug: "am-thanh-anh-sang",
    title: "Cho thuê Âm thanh & Ánh sáng sự kiện",
    shortDescription: "Trọn gói thiết bị âm thanh, ánh sáng kèm kỹ thuật viên vận hành tại hiện trường.",
    longDescription: "Rainy Band cung cấp dịch vụ cho thuê hệ thống âm thanh và ánh sáng chuyên nghiệp cho các sự kiện từ quy mô nhỏ đến lớn. Gói dịch vụ bao gồm thiết bị chất lượng cao và kỹ thuật viên có kinh nghiệm trực tiếp setup, vận hành và xử lý sự cố tại hiện trường.\n\nĐội ngũ kỹ thuật của chúng tôi sẽ khảo sát địa điểm trước sự kiện để đề xuất cấu hình phù hợp nhất, đảm bảo chất lượng thu phát ổn định trong suốt chương trình.",
    suitableFor: "Sự kiện cần trọn gói thiết bị kèm kỹ thuật viên",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/800x600/2f7288/2f7288"
  }
];
