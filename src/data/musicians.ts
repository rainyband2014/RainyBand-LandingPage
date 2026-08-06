import type { MediaVideo } from './types';

export interface Musician {
  id: string;
  slug: string;
  name: string;
  instrument: string;
  instrumentGroup: string;
  team: 'team-1' | 'team-2';
  experienceYears: number;
  bio: string;
  fullBio: string;
  imageUrl: string;
  videos: MediaVideo[];
}

export const musicians: Musician[] = [
  // ===== TEAM 1 =====
  {
    id: "musician-1",
    slug: "sang-le",
    name: "Sang Lê",
    instrument: "Bass",
    instrumentGroup: "BASSIST",
    team: "team-1",
    experienceYears: 4,
    bio: "Bassist Team 1, giữ nhịp điệu ổn định và kết nối chặt chẽ với trống trong từng set nhạc.",
    fullBio: "Với hơn 4 năm kinh nghiệm biểu diễn, Sang Lê là bassist mang đến nền groove chắc chắn cùng khả năng giữ nhịp ổn định trong nhiều thể loại âm nhạc. Từng góp mặt tại nhiều sân khấu lớn nhỏ, từ acoustic, cà phê đến các sự kiện và chương trình biểu diễn, Sang luôn thể hiện sự chỉn chu, tinh thần làm việc chuyên nghiệp và khả năng phối hợp ăn ý với các thành viên trong ban nhạc. Sự linh hoạt trong cách chơi cùng nguồn năng lượng tích cực trên sân khấu giúp Sang trở thành một mắt xích quan trọng, góp phần tạo nên những màn trình diễn trọn vẹn và giàu cảm xúc.",
    imageUrl: "/images/musicians/team-1/bass_sang_le.jpg",
    videos: []
  },
  {
    id: "musician-2",
    slug: "lu-thien",
    name: "Lữ Thiện",
    instrument: "Guitar",
    instrumentGroup: "GUITARIST",
    team: "team-1",
    experienceYears: 6,
    bio: "Guitarist Team 1, mang màu sắc linh hoạt và điểm nhấn tinh tế cho từng tiết mục.",
    fullBio: "Với hơn 6 năm kinh nghiệm biểu diễn tại nhiều sân khấu lớn nhỏ, Lữ Thiện là guitarist sở hữu phong cách biểu diễn linh hoạt và khả năng thích nghi với đa dạng thể loại âm nhạc. Bên cạnh vị trí line-up chính Guitar, Lữ Thiện còn có thể đảm nhiệm các vai trò khác như Keyboard, Bass, Cajon,… giúp ban nhạc dễ dàng đáp ứng nhiều mô hình biểu diễn khác nhau. Không chỉ là một nhạc công, anh còn có thế mạnh trong việc chiêu mộ nhân sự, xây dựng đội hình và quản lý show, góp phần đảm bảo sự chuyên nghiệp và vận hành hiệu quả cho mỗi chương trình.",
    imageUrl: "/images/musicians/team-1/guitar_lu_thien.jpg",
    videos: []
  },
  {
    id: "musician-3",
    slug: "truong-zang",
    name: "Trường Zang",
    instrument: "Keyboard",
    instrumentGroup: "KEYBOARD/PIANO",
    team: "team-1",
    experienceYears: 8,
    bio: "Keyboardist Team 1, tạo chiều sâu và màu sắc hòa âm cho từng set nhạc.",
    fullBio: "Với hơn 8 năm kinh nghiệm biểu diễn tại các sân khấu lớn nhỏ, Trường Giang là Keyboardist/Pianist sở hữu nền tảng âm nhạc vững chắc cùng khả năng xử lý linh hoạt trong nhiều phong cách biểu diễn. Bên cạnh vị trí line-up chính Keyboard/Piano, Trường Giang còn có thể đảm nhiệm nhiều nhạc cụ khác như Guitar, Bass và Drum, mang đến sự linh hoạt trong việc xây dựng đội hình và đáp ứng đa dạng yêu cầu sân khấu. Với tư duy hòa âm tốt, khả năng cảm nhạc nhạy bén cùng kinh nghiệm biểu diễn dày dặn, Trường Giang luôn góp phần tạo nên những màn trình diễn chuyên nghiệp, chỉn chu và giàu cảm xúc trong từng tiết mục.",
    imageUrl: "/images/musicians/team-1/key_truong_zang.jpg",
    videos: []
  },
  {
    id: "musician-4",
    slug: "nhat-khoi",
    name: "Nhật Khôi",
    instrument: "SPD (Sample Pad)",
    instrumentGroup: "SPD/DRUMMER",
    team: "team-1",
    experienceYears: 5,
    bio: "SPD/Drummer Team 1, giữ nhịp chắc chắn với thiết bị sample pad hiện đại.",
    fullBio: "Có người tạo nên giai điệu, còn Nhật Khôi là người thổi nhịp tim cho sân khấu. Với hơn 5 năm kinh nghiệm biểu diễn, Nhật Khôi linh hoạt giữa trống Jazz, SPD và Cajon, luôn biết cách biến từng nhịp đánh thành nguồn năng lượng lan tỏa đến cả ban nhạc lẫn khán giả. Dù ở sân khấu acoustic, sự kiện hay chương trình lớn, Khôi luôn mang đến tinh thần máu lửa, khả năng làm chủ nhịp điệu và một màn trình diễn để lại dấu ấn cho khán giả sau mỗi lần hạ dùi.",
    imageUrl: "/images/musicians/team-1/spd_nhat_khoi.jpg",
    videos: []
  },

  // ===== TEAM 2 =====
  {
    id: "musician-5",
    slug: "ngoc-thien",
    name: "Ngọc Thiện",
    instrument: "Bass",
    instrumentGroup: "BASSIST",
    team: "team-2",
    experienceYears: 4,
    bio: "Bassist Team 2, giữ nền tiết tấu vững chắc cho toàn bộ đội hình.",
    fullBio: "Không quá phô trương, nhưng luôn là người giữ vững “xương sống” của ban nhạc, Ngọc Thiện mang theo hơn 4 năm kinh nghiệm biểu diễn trên nhiều sân khấu lớn nhỏ. Với lối chơi chắc tay, cảm nhịp tốt và khả năng hòa quyện cùng các thành viên, Thiện luôn tạo nên một nền bass ổn định và đầy chiều sâu. Sự bình tĩnh trên sân khấu cùng tinh thần làm việc chuyên nghiệp giúp mỗi tiết mục trở nên liền mạch, giàu năng lượng và cảm xúc.",
    imageUrl: "/images/musicians/team-2/bass_ngoc_thien.jpg",
    videos: []
  },
  {
    id: "musician-6",
    slug: "nguyen-loc",
    name: "Nguyễn Lộc",
    instrument: "Guitar",
    instrumentGroup: "GUITARIST",
    team: "team-2",
    experienceYears: 5,
    bio: "Guitarist Team 2, giàu kinh nghiệm với khả năng biến hoá linh hoạt qua nhiều thể loại.",
    fullBio: "Với hơn 5 năm kinh nghiệm đồng hành cùng nhiều sân khấu lớn nhỏ, Nguyễn Lộc là guitarist sở hữu lối chơi chắc chắn, tinh tế và giàu cảm xúc. Khả năng xử lý linh hoạt trong nhiều dòng nhạc giúp Lộc luôn tạo nên những giai điệu hài hòa, góp phần nâng tầm mỗi tiết mục biểu diễn. Không chỉ chú trọng kỹ thuật, Lộc còn đề cao sự kết nối với các thành viên trong ban nhạc để mang đến những màn trình diễn đồng đều và chuyên nghiệp. Sự nhiệt huyết, chỉn chu và tinh thần không ngừng học hỏi chính là những yếu tố giúp Nguyễn Lộc luôn để lại dấu ấn trên mỗi sân khấu.",
    imageUrl: "/images/musicians/team-2/guitar_nguyen_loc.jpg",
    videos: []
  },
  {
    id: "musician-7",
    slug: "thanh-an",
    name: "Thành An",
    instrument: "Keyboard",
    instrumentGroup: "KEYBOARD/PIANO",
    team: "team-2",
    experienceYears: 5,
    bio: "Keyboardist Team 2, mang đến hòa âm phong phú và điểm nhấn tinh tế.",
    fullBio: "Có những giai điệu không cần quá nổi bật nhưng lại là chất keo kết nối cả ban nhạc — và đó chính là vai trò mà Thành An đảm nhiệm suốt hơn 5 năm biểu diễn. Với khả năng tạo không gian âm nhạc, xử lý hòa âm linh hoạt và bắt nhịp nhanh cùng đồng đội, An luôn góp phần thổi hồn vào từng tiết mục. Mỗi lần chạm phím là một lần mang đến chiều sâu, cảm xúc và màu sắc riêng cho sân khấu.",
    imageUrl: "/images/musicians/team-2/key_thanh_an.jpg",
    videos: []
  },
  {
    id: "musician-8",
    slug: "ngoc-lam",
    name: "Ngọc Lâm",
    instrument: "SPD (Sample Pad)",
    instrumentGroup: "SPD/DRUMMER",
    team: "team-2",
    experienceYears: 4,
    bio: "SPD/Drummer Team 2, giữ nhịp ổn định với thiết bị sample pad hiện đại.",
    fullBio: "Đằng sau mỗi tiết mục bùng nổ là một nhịp trống vững vàng, và Ngọc Lâm đã làm điều đó suốt hơn 4 năm trên nhiều sân khấu khác nhau. Với lối chơi chắc tay, cảm nhịp tốt và khả năng khuấy động không khí đúng lúc, Lâm luôn mang đến nguồn năng lượng tích cực cho ban nhạc. Sự máu lửa trên sân khấu cùng tinh thần làm việc chuyên nghiệp giúp mỗi màn trình diễn trở nên trọn vẹn và đáng nhớ.",
    imageUrl: "/images/musicians/team-2/spd_ngoc_lam.jpg",
    videos: []
  }
];

export const instrumentToneMap: Record<string, 'amber' | 'teal' | 'violet' | 'rose'> = {
  'BASSIST': 'amber',
  'GUITARIST': 'teal',
  'KEYBOARD/PIANO': 'violet',
  'SPD/DRUMMER': 'rose',
};

// Gradient overlay nhẹ, chỉ ánh màu ở đáy ảnh — tránh phủ mảng màu lớn (đã giảm so với bản trước)
export const instrumentGradientMap: Record<string, string> = {
  'BASSIST': 'from-amber-950/90 via-black/50 to-transparent',
  'GUITARIST': 'from-brand-950/90 via-black/50 to-transparent',
  'KEYBOARD/PIANO': 'from-violet-950/90 via-black/50 to-transparent',
  'SPD/DRUMMER': 'from-rose-950/90 via-black/50 to-transparent',
};