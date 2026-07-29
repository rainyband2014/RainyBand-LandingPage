export interface CoreTeamMember {
  id: string;
  name: string;
  role: 'founder' | 'manager-vocal' | 'manager-musician';
  roleLabel: string;
  bio: string;
  imageUrl: string;
}

export const coreTeam: CoreTeamMember[] = [
  {
    id: "founder",
    name: "Đăng Khoa",
    role: "founder",
    roleLabel: "Founder",
    bio: "Sáng lập và định hướng phong cách âm nhạc, trực tiếp giám sát chất lượng mọi buổi diễn.",
    imageUrl: "https://placehold.co/500x600/0a1720/0a1720"
  },
  {
    id: "manager-vocal",
    name: "Ngọc Hân",
    role: "manager-vocal",
    roleLabel: "Quản lý Vocal",
    bio: "Phụ trách tuyển chọn, đào tạo và sắp xếp lịch diễn cho đội ngũ vocal.",
    imageUrl: "https://placehold.co/500x600/123240/123240"
  },
  {
    id: "manager-musician",
    name: "Thành Long",
    role: "manager-musician",
    roleLabel: "Quản lý Nhạc công",
    bio: "Phụ trách phối khí, sắp xếp ban nhạc và đảm bảo chất lượng âm thanh từng show.",
    imageUrl: "https://placehold.co/500x600/1a4655/1a4655"
  }
];
