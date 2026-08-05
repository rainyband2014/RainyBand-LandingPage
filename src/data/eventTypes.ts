export interface EventType {
  id: string;
  title: string;
  description: string;
}

export const eventTypes: EventType[] = [
  {
    id: "doanh-nghiep",
    title: "Sự kiện doanh nghiệp",
    description: "Biểu diễn trong các chương trình khai trương, ra mắt sản phẩm, hội nghị khách hàng, gala dinner, year-end party, tiệc nội bộ và các hoạt động truyền thông thương hiệu."
  },
  {
    id: "private",
    title: "Private Event",
    description: "Đội hình được thiết kế riêng cho tiệc sinh nhật, lễ kỷ niệm, cầu hôn, tiệc gia đình hoặc những buổi gặp gỡ thân mật."
  },
  {
    id: "public",
    title: "Public Event",
    description: "Biểu diễn tại lễ hội, sân khấu cộng đồng, chương trình giải trí, activation, triển lãm và những sự kiện có quy mô lớn."
  },
  {
    id: "nha-hang-tiec-cuoi",
    title: "Nhà hàng và tiệc cưới",
    description: "Mang đến không gian âm nhạc lãng mạn, sang trọng hoặc sôi động tùy theo từng thời điểm trong chương trình."
  },
  {
    id: "cafe-acoustic",
    title: "Cafe Acoustic",
    description: "Cung cấp đội hình biểu diễn định kỳ hoặc theo từng đêm nhạc chủ đề dành cho quán cafe, lounge, nhà hàng và địa điểm giải trí."
  }
];
