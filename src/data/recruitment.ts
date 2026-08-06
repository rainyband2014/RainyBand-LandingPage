// Nội dung trang "Tuyển dụng thành viên" (/tuyen-dung)
// Sửa nội dung ở đây, KHÔNG đổi tên field — trang sẽ tự cập nhật.

export interface RecruitmentContentBlock {
  /** "paragraph": đoạn văn (có thể có heading riêng) | "list": heading + danh sách gạch đầu dòng | "image": ảnh full-width xen giữa nội dung */
  type: "paragraph" | "list" | "image";
  heading?: string;
  text?: string;
  items?: string[];
  imageUrl?: string;
  imageAlt?: string;
}

export interface RecruitmentContact {
  email: string;
  hotlineLabel: string;
  hotlinePhone: string; // dùng cho href="tel:"
  contactPerson: string;
  emailSubjectTemplate: string;
}

export interface RecruitmentInfo {
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  heroImageUrl: string;
  heroImageAlt: string;
  positions: string[];
  content: RecruitmentContentBlock[];
  contact: RecruitmentContact;
  closingTitle: string;
  closingText: string;
}

export const recruitment: RecruitmentInfo = {
  badge: "TUYỂN DỤNG",
  title: "Tuyển dụng thành viên Rainy Band",
  subtitle: "Cùng Rainy Band tạo nên những sân khấu đáng nhớ",
  intro:
    "Rainy Band luôn chào đón những ca sĩ và nhạc công có năng lực, đam mê biểu diễn và mong muốn phát triển lâu dài trong môi trường âm nhạc chuyên nghiệp.",
  heroImageUrl: "/images/tuyen-dung/tuyen_dung_1.jpg",
  heroImageAlt: "Rainy Band biểu diễn trên sân khấu sự kiện",

  positions: [
    "Ca sĩ nam",
    "Ca sĩ nữ",
    "Nhạc công guitar",
    "Nhạc công bass",
    "Nhạc công keyboard",
    "Nhạc công trống",
    "Nhạc công thuộc các bộ môn khác phù hợp với đội hình biểu diễn",
  ],

  content: [
    {
      type: "list",
      heading: "Yêu cầu chung",
      items: [
        "Có từ 1–2 năm kinh nghiệm biểu diễn thực tế trên thị trường.",
        "Có kỹ năng chuyên môn tốt, chủ động tập luyện và chuẩn bị tiết mục.",
        "Có tinh thần trách nhiệm, đúng giờ và nghiêm túc trong quá trình làm việc.",
        "Có khả năng phối hợp tốt với ca sĩ, nhạc công và các bộ phận liên quan.",
        "Linh hoạt với nhiều không gian biểu diễn như sự kiện doanh nghiệp, tiệc cưới, private event, nhà hàng, cafe acoustic và sân khấu công cộng.",
        "Có mong muốn đồng hành và phát triển lâu dài cùng Rainy Band.",
      ],
    },
    {
      type: "image",
      imageUrl: "/images/tuyen-dung/tuyen_dung_2.jpg",
      imageAlt: "Nhạc công Rainy Band biểu diễn trên sân khấu",
    },
    {
      type: "list",
      heading: "Yêu cầu dành cho ca sĩ",
      text: "Bên cạnh kỹ năng thanh nhạc và kinh nghiệm sân khấu, Rainy Band ưu tiên các ứng viên:",
      items: [
        "Có khả năng giao lưu, dẫn dắt không khí và tương tác tự nhiên với khán giả.",
        "Giao tiếp tốt, biết cách xử lý tình huống trên sân khấu.",
        "Có phong thái biểu diễn tự tin và nguồn năng lượng tích cực.",
        "Có gu thẩm mỹ, biết lựa chọn trang phục phù hợp với từng concept và tính chất sự kiện.",
        "Có khả năng thể hiện đa dạng các dòng nhạc Việt Nam và quốc tế là một lợi thế.",
      ],
    },
    {
      type: "image",
      imageUrl: "/images/tuyen-dung/tuyen_dung_3.jpg",
      imageAlt: "Ca sĩ Rainy Band biểu diễn trên sân khấu",
    },
    {
      type: "list",
      heading: "Hồ sơ ứng tuyển",
      text: "Ứng viên vui lòng chuẩn bị profile gồm:",
      items: [
        "Thông tin cá nhân và kinh nghiệm biểu diễn.",
        "Vị trí mong muốn ứng tuyển.",
        "Một số hình ảnh biểu diễn hoặc hình ảnh chân dung.",
        "Video biểu diễn trực tiếp hoặc đường dẫn đến các sản phẩm âm nhạc.",
        "Thông tin liên hệ.",
        "Lịch trình có thể tham gia tập luyện và biểu diễn.",
      ],
    },
    {
      type: "image",
      imageUrl: "/images/tuyen-dung/tuyen_dung_4.jpg",
      imageAlt: "Ban nhạc Rainy Band biểu diễn sự kiện",
    },
    {
      type: "paragraph",
      heading: "Cách thức ứng tuyển",
      text: "Ứng viên vui lòng gửi profile, hình ảnh và video biểu diễn về thông tin liên hệ bên dưới. Rainy Band sẽ chủ động liên hệ với những hồ sơ phù hợp để trao đổi thêm về lịch thử giọng, thử nhạc và cơ hội hợp tác.",
    },
    {
      type: "image",
      imageUrl: "/images/tuyen-dung/tuyen_dung_5.jpg",
      imageAlt: "Rainy Band biểu diễn trên sân khấu",
    },
  ],

  contact: {
    email: "rainyband2014@gmail.com",
    hotlineLabel: "Hotline / Zalo",
    hotlinePhone: "0332552700",
    contactPerson: "Founder Phan Trung Nghĩa",
    emailSubjectTemplate: "Ứng tuyển Rainy Band – [Vị trí] – [Họ và tên]",
  },

  closingTitle: "Gia nhập Rainy Band",
  closingText:
    "Nếu bạn yêu âm nhạc, nghiêm túc với nghề và mong muốn được biểu diễn trong một đội ngũ trẻ trung, chuyên nghiệp, Rainy Band rất mong có cơ hội được gặp gỡ và đồng hành cùng bạn trên những sân khấu sắp tới.",
};