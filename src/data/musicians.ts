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
    // TODO: xác nhận lại số năm kinh nghiệm thật
    experienceYears: 4,
    bio: "Bassist Team 1, giữ nhịp điệu ổn định và kết nối chặt chẽ với trống trong từng set nhạc.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Sang Lê đảm nhận vị trí bassist của Team 1 tại Rainy Band, phụ trách giữ nền tiết tấu và tạo sự gắn kết vững chắc giữa các nhạc cụ trong ban nhạc. Phong cách chơi ổn định, tinh tế và luôn ưu tiên sự hài hòa cho tổng thể tiết mục.\n\nVới kinh nghiệm biểu diễn đa dạng thể loại, Sang Lê có thể linh hoạt xử lý từ những set nhạc acoustic nhẹ nhàng đến các chương trình sôi động, đảm bảo nền nhạc luôn chắc chắn xuyên suốt chương trình.",
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
    experienceYears: 5,
    bio: "Guitarist Team 1, mang màu sắc linh hoạt và điểm nhấn tinh tế cho từng tiết mục.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Lữ Thiện đảm nhận vị trí guitarist của Team 1 tại Rainy Band, phụ trách phần đệm và tạo điểm nhấn giai điệu cho các tiết mục biểu diễn. Với khả năng xử lý đa dạng thể loại, anh linh hoạt điều chỉnh phong cách chơi phù hợp theo yêu cầu từng chương trình.\n\nVới 5 năm kinh nghiệm biểu diễn, Lữ Thiện tự tin đảm nhận nhiều format từ acoustic nhẹ nhàng đến các set nhạc sôi động, luôn đảm bảo chất lượng âm thanh ổn định trong từng buổi diễn.",
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
    experienceYears: 4,
    bio: "Keyboardist Team 1, tạo chiều sâu và màu sắc hòa âm cho từng set nhạc.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Trường Zang phụ trách keyboard trong đội hình Team 1 của Rainy Band, mang đến phần đệm nền và hòa âm phong phú cho các tiết mục biểu diễn. Anh đặc biệt chú trọng vào việc tạo chiều sâu âm thanh, giúp tổng thể ban nhạc thêm trọn vẹn.\n\nVới 4 năm kinh nghiệm, Trường Zang linh hoạt xử lý nhiều thể loại nhạc khác nhau, từ những bản ballad nhẹ nhàng đến các tiết mục sôi động đòi hỏi kỹ thuật cao.",
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
    // TODO: xác nhận lại số năm kinh nghiệm thật
    experienceYears: 3,
    bio: "SPD/Drummer Team 1, giữ nhịp chắc chắn với thiết bị sample pad hiện đại.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Nhật Khôi đảm nhận vị trí SPD (Sample Pad) của Team 1 tại Rainy Band, kết hợp giữa yếu tố điện tử hiện đại và nhịp điệu sống động cho từng tiết mục. Anh phụ trách giữ nhịp chính, đảm bảo tiết tấu ổn định xuyên suốt chương trình.\n\nVới kinh nghiệm biểu diễn tại nhiều loại hình sân khấu, Nhật Khôi có thể linh hoạt điều chỉnh âm thanh và hiệu ứng sample pad phù hợp với từng không gian, từ sự kiện nhỏ đến sân khấu lớn.",
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
    // TODO: xác nhận lại số năm kinh nghiệm thật
    experienceYears: 3,
    bio: "Bassist Team 2, giữ nền tiết tấu vững chắc cho toàn bộ đội hình.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Ngọc Thiện đảm nhận vị trí bassist của Team 2 tại Rainy Band, chịu trách nhiệm giữ vững nền nhịp điệu và kết nối các nhạc cụ trong ban nhạc. Phong cách chơi chắc chắn, tập trung vào sự ổn định cho tổng thể tiết mục.\n\nVới kinh nghiệm biểu diễn đa dạng, Ngọc Thiện linh hoạt xử lý nhiều thể loại nhạc, đảm bảo nền tảng âm thanh luôn vững vàng trong mọi chương trình.",
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
    experienceYears: 6,
    bio: "Guitarist Team 2, giàu kinh nghiệm với khả năng biến hoá linh hoạt qua nhiều thể loại.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Nguyễn Lộc đảm nhận vị trí guitarist của Team 2 tại Rainy Band, mang đến phần đệm và giai điệu tinh tế cho các tiết mục biểu diễn. Với nhiều năm gắn bó, anh am hiểu sâu sắc cách phối hợp cùng ban nhạc để tạo nên tổng thể hài hòa.\n\nVới 6 năm kinh nghiệm biểu diễn tại nhiều loại hình sân khấu, Nguyễn Lộc có thể linh hoạt điều chỉnh phong cách chơi guitar tuỳ theo quy mô không gian, từ café acoustic nhỏ đến sân khấu sự kiện lớn.",
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
    // TODO: xác nhận lại số năm kinh nghiệm thật
    experienceYears: 3,
    bio: "Keyboardist Team 2, mang đến hòa âm phong phú và điểm nhấn tinh tế.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Thanh An phụ trách keyboard trong đội hình Team 2 của Rainy Band, đảm nhận phần đệm nền và hòa âm cho các tiết mục biểu diễn. Phong cách chơi tinh tế, chú trọng sự hài hòa giữa các nhạc cụ trong ban nhạc.\n\nVới kinh nghiệm biểu diễn đa dạng thể loại, Thanh An linh hoạt xử lý từ những bản acoustic nhẹ nhàng đến các set nhạc sôi động, góp phần tạo nên chất lượng âm thanh ổn định cho chương trình.",
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
    // TODO: xác nhận lại số năm kinh nghiệm thật
    experienceYears: 3,
    bio: "SPD/Drummer Team 2, giữ nhịp ổn định với thiết bị sample pad hiện đại.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Ngọc Lâm đảm nhận vị trí SPD (Sample Pad) của Team 2 tại Rainy Band, kết hợp yếu tố điện tử hiện đại với nhịp điệu sống động cho từng tiết mục. Anh phụ trách giữ nhịp chính, đảm bảo tiết tấu ổn định xuyên suốt chương trình.\n\nVới kinh nghiệm biểu diễn tại nhiều sân khấu khác nhau, Ngọc Lâm linh hoạt điều chỉnh âm thanh và hiệu ứng sample pad phù hợp với từng không gian biểu diễn.",
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