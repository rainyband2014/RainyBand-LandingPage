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
  imageUrl: string;
}

export const coreTeam: CoreTeamMember[] = [
  {
    id: "founder",
    slug: "dang-khoa",
    name: "Đăng Khoa",
    role: "founder",
    roleLabel: "Founder",
    bio: "Sáng lập và định hướng phong cách âm nhạc, trực tiếp giám sát chất lượng mọi buổi diễn.",
    fullBio: "Đăng Khoa là người sáng lập Rainy Band từ năm 2014, khi còn là sinh viên đam mê guitar acoustic và biểu diễn tại các quán café nhỏ ở TP.HCM. Với tầm nhìn xây dựng một đội nhóm biểu diễn chuyên nghiệp nhưng vẫn giữ được chất riêng, anh từng bước mở rộng đội hình và đa dạng hoá dịch vụ.\n\nHiện tại, Đăng Khoa trực tiếp giám sát chất lượng âm nhạc và phong cách trình diễn của toàn bộ đội ngũ, đảm bảo mỗi buổi diễn đều mang đến trải nghiệm xứng đáng cho khách hàng.",
    // TODO: thay số điện thoại/email thật
    phone: "0900 000 001",
    email: "khoa@rainyband.vn",
    joinedYear: 2014,
    imageUrl: "https://placehold.co/500x600/0a1720/0a1720"
  },
  {
    id: "manager-vocal",
    slug: "ngoc-han",
    name: "Ngọc Hân",
    role: "manager-vocal",
    roleLabel: "Quản lý Vocal",
    bio: "Phụ trách tuyển chọn, đào tạo và sắp xếp lịch diễn cho đội ngũ vocal.",
    fullBio: "Ngọc Hân gia nhập Rainy Band từ năm 2018 với vai trò vocal chính, sau đó nhanh chóng đảm nhận thêm trách nhiệm quản lý toàn bộ đội ngũ vocal. Cô phụ trách tuyển chọn giọng hát mới, huấn luyện phong cách trình diễn và sắp xếp lịch diễn sao cho phù hợp với từng loại sự kiện.\n\nVới kinh nghiệm biểu diễn đa dạng từ café acoustic đến sân khấu sự kiện lớn, Ngọc Hân hiểu rõ yêu cầu của từng format show và luôn đảm bảo vocal phù hợp nhất được bố trí cho mỗi booking.",
    // TODO: thay số điện thoại/email thật
    phone: "0900 000 002",
    email: "han@rainyband.vn",
    joinedYear: 2018,
    imageUrl: "https://placehold.co/500x600/123240/123240"
  },
  {
    id: "manager-musician",
    slug: "thanh-long",
    name: "Thành Long",
    role: "manager-musician",
    roleLabel: "Quản lý Nhạc công",
    bio: "Phụ trách phối khí, sắp xếp ban nhạc và đảm bảo chất lượng âm thanh từng show.",
    fullBio: "Thành Long là trụ cột về mặt nhạc cụ của Rainy Band từ năm 2016, chuyên chơi guitar acoustic và keyboard. Anh phụ trách phối khí cho các set nhạc, lựa chọn và sắp xếp đội hình nhạc công phù hợp theo yêu cầu từng sự kiện.\n\nNgoài khả năng biểu diễn, Thành Long còn đảm nhận giám sát kỹ thuật âm thanh tại hiện trường, đảm bảo chất lượng thu phát ổn định và trải nghiệm nghe tốt nhất cho khán giả.",
    // TODO: thay số điện thoại/email thật
    phone: "0900 000 003",
    email: "long@rainyband.vn",
    joinedYear: 2016,
    imageUrl: "https://placehold.co/500x600/1a4655/1a4655"
  }
];
