import type { MediaVideo } from './types';

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
  videos: MediaVideo[];
}

export const musicians: Musician[] = [
  {
    id: "musician-1",
    slug: "lu-thien",
    name: "Lữ Thiện",
    instrument: "Bass",
    instrumentGroup: "BASSIST",
    experienceYears: 5,
    bio: "Bassist chủ lực, giữ nền tiết tấu vững chắc cho toàn bộ ban nhạc.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Lữ Thiện đảm nhận vai trò bassist chính của Rainy Band, chịu trách nhiệm giữ vững nền tiết tấu và kết nối giữa trống với các nhạc cụ giai điệu. Phong cách chơi chắc chắn, không phô trương nhưng luôn đảm bảo tổng thể ban nhạc chặt chẽ.\n\nVới 5 năm kinh nghiệm, Lữ Thiện có khả năng xử lý tốt nhiều thể loại từ acoustic nhẹ nhàng đến các set nhạc sôi động, linh hoạt điều chỉnh theo yêu cầu của từng chương trình.",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/400x520/123240/123240",
    videos: [
      {
        id: "m1-vid1",
        title: "Bass Groove Session",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "m1-vid2",
        title: "Live Band - Electric Set",
        thumbnailUrl: "https://placehold.co/600x400/1a4655/1a4655",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "musician-2",
    slug: "truong-zang",
    name: "Trường Zang",
    instrument: "Electric Guitar",
    instrumentGroup: "GUITARIST",
    experienceYears: 4,
    bio: "Guitarist điện, mang màu sắc hiện đại và điểm nhấn cho các set nhạc sôi động.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Trường Zang phụ trách guitar điện trong đội hình Electric Band của Rainy Band, nổi bật với lối chơi hiện đại và khả năng tạo điểm nhấn ấn tượng cho các tiết mục sôi động. Anh đặc biệt phù hợp với các chương trình cần chất nhạc trẻ trung, mạnh mẽ.\n\nNgoài biểu diễn, Trường Zang còn tham gia sáng tạo các đoạn solo và phối lại một số bản cover theo phong cách riêng, góp phần tạo nên dấu ấn âm nhạc đặc trưng cho từng chương trình.",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/400x520/1a4655/1a4655",
    videos: [
      {
        id: "m2-vid1",
        title: "Electric Guitar Solo - Year End Party",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "m2-vid2",
        title: "Guitar Cover Rock Ballad",
        thumbnailUrl: "https://placehold.co/600x400/2f7288/2f7288",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "musician-3",
    slug: "nguyen-loc",
    name: "Nguyễn Lộc",
    instrument: "Drum/Cajon",
    instrumentGroup: "DRUMMER",
    experienceYears: 6,
    bio: "Tay trống kỳ cựu, giữ nhịp ổn định từ không gian nhỏ đến sân khấu lớn.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Nguyễn Lộc là một trong những nhạc công gắn bó lâu năm nhất với Rainy Band, thành thạo cả bộ trống điện tử lẫn cajon acoustic. Khả năng giữ nhịp ổn định của anh là nền tảng quan trọng giúp ban nhạc duy trì phong độ xuyên suốt chương trình.\n\nVới 6 năm kinh nghiệm biểu diễn tại nhiều loại hình sân khấu, Nguyễn Lộc có thể linh hoạt điều chỉnh cường độ và phong cách chơi trống tuỳ theo quy mô không gian, từ café acoustic nhỏ đến sân khấu sự kiện lớn.",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/400x520/0a1720/0a1720",
    videos: [
      {
        id: "m3-vid1",
        title: "Drum Cover - Live Band",
        thumbnailUrl: "https://placehold.co/600x400/2f7288/2f7288",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "m3-vid2",
        title: "Cajon Acoustic Session",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "musician-4",
    slug: "tuan-kiet",
    name: "Tuấn Kiệt",
    instrument: "Keyboard/Violin",
    instrumentGroup: "KEYBOARD/PIANO",
    experienceYears: 3,
    bio: "Nhạc công đa năng, kết hợp keyboard và violin tạo chiều sâu cho set nhạc.",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Tuấn Kiệt là nhạc công trẻ với khả năng chơi cả keyboard và violin, mang đến chiều sâu và sự tinh tế cho các set nhạc của Rainy Band. Anh thường đảm nhận phần đệm nền và bè phụ, giúp tổng thể âm thanh thêm phong phú.\n\nSự kết hợp giữa keyboard hiện đại và violin cổ điển giúp Tuấn Kiệt tạo ra những mảng màu âm nhạc đa dạng, đặc biệt phù hợp với các set acoustic cần điểm nhấn khác biệt.",
    // TODO: thay bằng ảnh thật
    imageUrl: "https://placehold.co/400x520/2f7288/2f7288",
    videos: [
      {
        id: "m4-vid1",
        title: "Keyboard & Violin Duo",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  }
];