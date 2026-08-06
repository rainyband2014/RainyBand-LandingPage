export interface Service {
  id: string;
  slug: string;
  title: string;
  intro: string;
  detailsIntro: string;
  detailsList: string[];
  suitableForIntro: string;
  suitableFor: string[];
  closingNote?: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "service-1",
    slug: "acoustic-band",
    title: "Acoustic Band",
    intro: "Đội hình acoustic phù hợp với những không gian cần sự gần gũi, nhẹ nhàng và giàu cảm xúc.",
    detailsIntro: "Có thể lựa chọn đội hình từ tối giản đến đầy đủ gồm:",
    detailsList: ["Ca sĩ", "Guitar", "Keyboard", "Cajon", "Violin hoặc nhạc cụ bổ sung theo yêu cầu"],
    suitableForIntro: "Phù hợp cho:",
    suitableFor: ["Cafe acoustic", "Tiệc sinh nhật", "Tiệc kỷ niệm", "Private party", "Tiệc cưới", "Sự kiện có không gian ấm cúng"],
    imageUrl: "/images/services/cafe/cafe-1.jpg"
  },
  {
    id: "service-2",
    slug: "electric-band",
    title: "Electric Band",
    intro: "Đội hình ban nhạc điện tử mang đến không khí sôi động, hiện đại và mạnh mẽ cho chương trình.",
    detailsIntro: "Rainy Band có thể xây dựng đội hình gồm:",
    detailsList: ["Ca sĩ", "Guitar điện", "Bass", "Keyboard", "Drum", "Các nhạc cụ hoặc nghệ sĩ bổ sung theo concept"],
    suitableForIntro: "Phù hợp cho:",
    suitableFor: ["Sự kiện doanh nghiệp", "Tiệc cuối năm", "Khai trương", "Lễ ra mắt sản phẩm", "Festival", "Sân khấu ngoài trời", "Chương trình giải trí công cộng"],
    imageUrl: "/images/services/event/event-7.jpg"
  },
  {
    id: "service-3",
    slug: "ca-si-bieu-dien",
    title: "Ca sĩ biểu diễn",
    intro: "Rainy Band cung cấp ca sĩ phù hợp với nhiều phong cách âm nhạc và loại hình chương trình.",
    detailsIntro: "Các ca sĩ có khả năng trình diễn đa dạng:",
    detailsList: ["Nhạc Việt", "Nhạc ngoại", "Pop", "Ballad", "Acoustic", "Dance", "Rock", "Nhạc trẻ", "Nhạc trữ tình", "Các dòng nhạc theo yêu cầu của chương trình"],
    suitableForIntro: "",
    suitableFor: [],
    closingNote: "Rainy Band sẽ tư vấn lựa chọn giọng ca dựa trên concept, danh sách bài hát, đối tượng khách mời và không khí mà khách hàng mong muốn.",
    imageUrl: "/images/services/nha-hang/nha-hang-7.jpg"
  }
];
