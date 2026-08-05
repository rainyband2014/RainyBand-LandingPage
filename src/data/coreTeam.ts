export interface CoreTeamMember {
  id: string;
  slug: string;
  name: string;
  role: 'founder' | 'manager-vocal' | 'manager-musician';
  roleLabel: string;
  bio: string;
  fullBio: string;
  phone: string;
  email: string;
  joinedYear: number;
  images: string[];
}

export const coreTeam: CoreTeamMember[] = [
  {
    id: "founder",
    slug: "phan-trung-nghia",
    name: "Phan Trung Nghĩa",
    role: "founder",
    roleLabel: "Leader – Founder",
    bio: "Người sáng lập và định hướng phát triển của Rainy Band từ năm 2014.",
    fullBio: "Với kinh nghiệm biểu diễn và tổ chức đội hình cho nhiều loại hình chương trình, Phan Trung Nghĩa trực tiếp tham gia tư vấn phong cách âm nhạc, lựa chọn nhân sự và xây dựng nội dung biểu diễn phù hợp cho từng sự kiện.\n\nHiện tại, Phan Trung Nghĩa trực tiếp giám sát chất lượng âm nhạc và phong cách trình diễn của toàn bộ đội ngũ, đảm bảo mỗi buổi diễn đều mang đến trải nghiệm xứng đáng cho khách hàng.",
    // TODO: thay số điện thoại/email thật
    phone: "0900 000 001",
    email: "nghia@rainyband.vn",
    joinedYear: 2014,
    images: [
      "/images/core-team/founder_phan_trung_nghia_1.jpg",
      "/images/core-team/founder_phan_trung_nghia_2.jpg"
    ]
  },
  {
    id: "manager-vocal",
    slug: "zyzy",
    name: "ZyZy",
    role: "manager-vocal",
    roleLabel: "Quản lý Vocal",
    bio: "Phụ trách tuyển chọn, đào tạo và sắp xếp lịch diễn cho đội ngũ vocal.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "ZyZy gia nhập Rainy Band với vai trò vocal chính, mang phong cách trình diễn trẻ trung, hiện đại, sau đó đảm nhận thêm trách nhiệm quản lý toàn bộ đội ngũ vocal. ZyZy phụ trách tuyển chọn giọng hát mới, huấn luyện phong cách trình diễn và sắp xếp lịch diễn sao cho phù hợp với từng loại sự kiện.\n\nVới góc nhìn cập nhật xu hướng và kinh nghiệm biểu diễn tại nhiều sân khấu khác nhau, ZyZy hiểu rõ yêu cầu của từng format show và luôn đảm bảo vocal phù hợp nhất được bố trí cho mỗi booking.",
    // TODO: thay số điện thoại/email thật
    phone: "0900 000 002",
    email: "zyzy@rainyband.vn",
    joinedYear: 2023,
    images: [
      "/images/vocalists/nam_zyzy.jpg",
      "https://placehold.co/500x600/1a4655/1a4655"
    ]
  },
  {
    id: "manager-musician",
    slug: "lu-thien",
    name: "Lữ Thiện",
    role: "manager-musician",
    roleLabel: "Quản lý Nhạc công",
    bio: "Phụ trách phối khí, sắp xếp ban nhạc và đảm bảo chất lượng âm thanh từng show.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Lữ Thiện là trụ cột về mặt nhạc cụ của Rainy Band, đảm nhận vị trí bassist chính và chịu trách nhiệm giữ vững nền tiết tấu cho toàn bộ ban nhạc. Anh phụ trách phối khí cho các set nhạc, lựa chọn và sắp xếp đội hình nhạc công phù hợp theo yêu cầu từng sự kiện.\n\nNgoài khả năng biểu diễn, Lữ Thiện còn đảm nhận giám sát kỹ thuật âm thanh tại hiện trường, đảm bảo chất lượng thu phát ổn định và trải nghiệm nghe tốt nhất cho khán giả.",
    // TODO: thay số điện thoại/email thật
    phone: "0900 000 003",
    email: "luthien@rainyband.vn",
    joinedYear: 2021,
    images: [
      "https://placehold.co/500x600/1a4655/1a4655",
      "https://placehold.co/500x600/235a6d/235a6d",
      "https://placehold.co/500x600/0a1720/0a1720"
    ]
  }
];