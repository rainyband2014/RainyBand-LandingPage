export interface Musician {
  id: string;
  slug: string;
  name: string;
  instrument: string;
  instrumentGroup: string;
  experienceYears: number;
  bio: string;
  fullBio: string;
  imageUrl: string;
}

export const musicians: Musician[] = [
  {
    id: "musician-1",
    slug: "quoc-huy",
    name: "Quốc Huy",
    instrument: "Piano / Keys",
    instrumentGroup: "KEYBOARD/PIANO",
    experienceYears: 5,
    bio: "Pianist chủ lực, chuyên phối khí và dẫn dắt tiết tấu cho toàn bộ ban nhạc.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Quốc Huy đảm nhận vị trí pianist chủ lực của Rainy Band từ những ngày đầu mở rộng đội hình nhạc công. Với nền tảng piano cổ điển kết hợp khả năng chơi keys điện tử linh hoạt, anh là người phối khí chính cho hầu hết các set nhạc của band.\n\nNgoài biểu diễn, Quốc Huy còn phụ trách hòa âm và dẫn dắt tiết tấu trên sân khấu, giúp các thành viên khác giữ vững nhịp và tạo nên màu sắc âm nhạc đặc trưng của Rainy Band.",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/400x520/123240/123240"
  },
  {
    id: "musician-2",
    slug: "anh-tuan",
    name: "Anh Tuấn",
    instrument: "Cajon/SPD",
    instrumentGroup: "DRUMMER",
    experienceYears: 3,
    bio: "Tay trống đa năng, giữ nhịp chắc tay từ cajon acoustic đến SPD điện tử.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Anh Tuấn là drummer trẻ nhất trong đội hình nhạc công của Rainy Band, nhưng khả năng giữ nhịp và cảm nhạc không hề thua kém. Anh thành thạo cả cajon truyền thống lẫn SPD điện tử, linh hoạt chuyển đổi tuỳ theo yêu cầu của từng show.\n\nSở trường của Anh Tuấn là các thể loại Pop, R&B và Latin, mang đến năng lượng sôi động nhưng vẫn kiểm soát tốt âm lượng cho những không gian nhỏ.",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/400x520/1a4655/1a4655"
  },
  {
    id: "musician-3",
    slug: "bao-trung",
    name: "Bảo Trung",
    instrument: "Acoustic/E-Guitar/Bass",
    instrumentGroup: "GUITARIST",
    experienceYears: 6,
    bio: "Guitarist đa năng nhất đội hình, chơi được cả acoustic, electric và bass.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Bảo Trung là thành viên có thâm niên cao nhất trong đội ngũ nhạc công, gắn bó với Rainy Band từ năm 2018. Điểm mạnh lớn nhất của anh là khả năng chơi đa nhạc cụ — từ acoustic guitar cho set café nhẹ nhàng, electric guitar cho sự kiện sôi động, đến bass guitar khi cần bổ sung tuyến trầm.\n\nVới 6 năm kinh nghiệm biểu diễn liên tục, Bảo Trung có khả năng ứng biến nhanh trên sân khấu và hỗ trợ các thành viên mới hoà nhập với phong cách chơi của band.",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/400x520/0a1720/0a1720"
  },
  {
    id: "musician-4",
    slug: "huu-phat",
    name: "Hữu Phát",
    instrument: "E-Guitar",
    instrumentGroup: "GUITARIST",
    experienceYears: 4,
    bio: "Lead guitarist chuyên electric, tạo điểm nhấn cho các set nhạc sôi động.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Hữu Phát đảm nhận vị trí lead electric guitar, là người tạo điểm nhấn âm thanh cho các set nhạc cần năng lượng cao như sự kiện khai trương, Year End Party hay tiệc ngoài trời. Phong cách chơi của anh thiên về clean tone và overdrive nhẹ, phù hợp với định hướng acoustic-pop đặc trưng của Rainy Band.\n\nNgoài biểu diễn với band, Hữu Phát còn tham gia hỗ trợ các buổi thu âm demo và sáng tác nhạc nền cho các dự án nội bộ.",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/400x520/2f7288/2f7288"
  }
];
