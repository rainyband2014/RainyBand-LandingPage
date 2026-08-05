import type { MediaVideo } from './types';

export interface Vocalist {
  id: string;
  slug: string;
  name: string;
  badgeLabel: string;
  experienceYears: number;
  formats: string;
  mood: string;
  genres: string;
  fullBio: string;
  posterImageUrl: string;
  avatarImageUrl: string;
  videos: MediaVideo[];
}

export const vocalists: Vocalist[] = [
  {
    id: "vocalist-1",
    slug: "dai-duong",
    name: "Đại Dương",
    badgeLabel: "GIỌNG NAM TRẦM ẤM, TRUYỀN CẢM",
    experienceYears: 6,
    formats: "Tiệc cưới, sự kiện doanh nghiệp, đêm nhạc acoustic",
    mood: "Ấm áp, sâu lắng, dễ chạm đến cảm xúc người nghe",
    genres: "Ballad, Bolero hiện đại, Nhạc Trịnh, Acoustic Pop",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Đại Dương là một trong những giọng ca nam kỳ cựu của Rainy Band, sở hữu chất giọng trầm ấm và lối hát tự sự, chân thành. Anh thường đảm nhận các set nhạc cần sự lắng đọng như tiệc cưới, dinner acoustic hoặc những chương trình mang tính chất tri ân, tưởng nhớ.\n\nVới 6 năm gắn bó cùng band, Đại Dương có khả năng dẫn dắt không khí sân khấu một cách tinh tế, biết cách tiết chế cảm xúc để mỗi ca khúc chạm đúng vào câu chuyện mà chương trình muốn kể.",
    posterImageUrl: "https://placehold.co/600x800/123240/123240",
    avatarImageUrl: "https://placehold.co/80x80/123240/123240",
    videos: [
      {
        id: "v1-vid1",
        title: "Nhạc Trịnh Live Session",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v1-vid2",
        title: "Bolero Cover - Tiệc cưới",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-2",
    slug: "tra-my",
    name: "Trà My",
    badgeLabel: "GIỌNG NỮ TRONG, GIÀU CẢM XÚC",
    experienceYears: 4,
    formats: "Sự kiện doanh nghiệp, Gala Dinner, Tiệc cưới",
    mood: "Tinh tế, cảm xúc, phù hợp không gian trang trọng",
    genres: "Ballad, Pop Ballad, Nhạc phim, US-UK Ballad",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Trà My được biết đến với chất giọng trong trẻo nhưng giàu nội lực, đặc biệt phù hợp với các ca khúc ballad mang chiều sâu cảm xúc. Cô thường xuyên đảm nhận vai trò vocal chính trong các chương trình gala dinner và sự kiện doanh nghiệp quy mô lớn.\n\nKhả năng kiểm soát hơi thở và xử lý tinh tế các đoạn cao trào giúp Trà My luôn để lại dấu ấn riêng trong lòng khán giả, dù là sân khấu nhỏ hay không gian hội trường lớn.",
    posterImageUrl: "https://placehold.co/600x800/1a4655/1a4655",
    avatarImageUrl: "https://placehold.co/80x80/1a4655/1a4655",
    videos: [
      {
        id: "v2-vid1",
        title: "Ballad Cover - Gala Dinner",
        thumbnailUrl: "https://placehold.co/600x400/1a4655/1a4655",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v2-vid2",
        title: "Nhạc phim Hoa ngữ - Minishow",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-3",
    slug: "linh-chi",
    name: "Linh Chi",
    badgeLabel: "GIỌNG NỮ NĂNG LƯỢNG, ĐA SẮC",
    experienceYears: 3,
    formats: "Sự kiện giới trẻ, Khai trương, Tiệc sinh nhật",
    mood: "Tươi mới, năng động, dễ kết nối với nhiều đối tượng khán giả",
    genres: "V-Pop, Dance-Pop, Nhạc trẻ, Nhạc remix",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Linh Chi mang đến năng lượng tươi mới cho đội hình vocal của Rainy Band, với khả năng thích nghi nhanh với nhiều thể loại từ V-Pop, Dance-Pop đến các bản remix sôi động. Cô đặc biệt phù hợp với những chương trình hướng đến đối tượng khán giả trẻ.\n\nPhong cách trình diễn linh hoạt, luôn chủ động tương tác với khán giả giúp Linh Chi trở thành lựa chọn phù hợp cho các sự kiện cần sự bùng nổ và kết nối nhanh.",
    posterImageUrl: "https://placehold.co/600x800/0a1720/0a1720",
    avatarImageUrl: "https://placehold.co/80x80/0a1720/0a1720",
    videos: [
      {
        id: "v3-vid1",
        title: "Dance-Pop Mashup - Khai trương",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v3-vid2",
        title: "V-Pop Hits Cover",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-4",
    slug: "kyo-duc-anh",
    name: "Kyo Đức Anh",
    badgeLabel: "GIỌNG NAM CÁ TÍNH, PHONG CÁCH RIÊNG",
    experienceYears: 5,
    formats: "Sự kiện âm nhạc, Bar/Lounge, Sân khấu ngoài trời",
    mood: "Cá tính, phóng khoáng, tạo điểm nhấn riêng cho chương trình",
    genres: "Rock ballad, Nhạc trẻ, Acoustic phá cách, US-UK",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Kyo Đức Anh là gương mặt mang màu sắc cá tính trong đội ngũ vocal của Rainy Band, với lối xử lý bài hát phóng khoáng và không ngại thử nghiệm những bản phối mới lạ. Anh thường được lựa chọn cho các sân khấu cần một dấu ấn riêng biệt.\n\nKinh nghiệm biểu diễn tại nhiều không gian từ bar, lounge đến sân khấu ngoài trời giúp Kyo Đức Anh xử lý tốt các tình huống kỹ thuật đa dạng, luôn giữ được phong độ ổn định trên sân khấu.",
    posterImageUrl: "https://placehold.co/600x800/2f7288/2f7288",
    avatarImageUrl: "https://placehold.co/80x80/2f7288/2f7288",
    videos: [
      {
        id: "v4-vid1",
        title: "Rock Ballad Acoustic Version",
        thumbnailUrl: "https://placehold.co/600x400/2f7288/2f7288",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v4-vid2",
        title: "Live tại Sân khấu ngoài trời",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-5",
    slug: "hoang-ha",
    name: "Hoàng Hà",
    badgeLabel: "GIỌNG NỮ NGỌT NGÀO, GẦN GŨI",
    experienceYears: 2,
    formats: "Café acoustic, Tiệc riêng tư, Sự kiện quy mô nhỏ",
    mood: "Ngọt ngào, nhẹ nhàng, tạo cảm giác gần gũi",
    genres: "Acoustic, Indie Việt, Pop nhẹ, Nhạc xưa",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Hoàng Hà là thành viên trẻ của đội ngũ vocal, mang chất giọng ngọt ngào và cách hát mộc mạc, gần gũi. Cô thường đảm nhận các set acoustic tại café hoặc những buổi tiệc riêng tư cần không khí ấm cúng.\n\nDù mới gia nhập Rainy Band, Hoàng Hà đã nhanh chóng khẳng định phong cách riêng qua những bản acoustic cover đầy cảm xúc, được nhiều khách hàng yêu thích lựa chọn cho các chương trình quy mô nhỏ.",
    posterImageUrl: "https://placehold.co/600x800/235a6d/235a6d",
    avatarImageUrl: "https://placehold.co/80x80/235a6d/235a6d",
    videos: [
      {
        id: "v5-vid1",
        title: "Acoustic Cover - Café Session",
        thumbnailUrl: "https://placehold.co/600x400/235a6d/235a6d",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v5-vid2",
        title: "Indie Việt Live",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  }
];