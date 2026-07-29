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
}

export const vocalists: Vocalist[] = [
  {
    id: "vocalist-1",
    slug: "minh-anh",
    name: "Minh Anh",
    badgeLabel: "GIỌNG HÁT NHẸ, ẤM ÁP",
    experienceYears: 3,
    formats: "Café acoustic, US-UK acoustic night, Dinner set",
    mood: "Nhẹ nhàng, ấm áp, phù hợp không gian café, tiệc riêng tư",
    genres: "US/UK Pop, Indie Việt, Ballad, R&B",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Minh Anh là giọng hát chủ lực của Rainy Band cho các set acoustic nhẹ nhàng tại quán café và tiệc riêng tư. Với chất giọng ấm áp tự nhiên, cô đặc biệt phù hợp với những không gian cần sự gần gũi và cảm xúc sâu lắng.\n\nNgoài biểu diễn, Minh Anh còn tham gia chọn lọc và sắp xếp set nhạc cho các buổi dinner acoustic, đảm bảo mỗi bài hát đều phù hợp với không khí buổi tối.",
    posterImageUrl: "https://placehold.co/600x800/123240/123240",
    avatarImageUrl: "https://placehold.co/80x80/123240/123240"
  },
  {
    id: "vocalist-2",
    slug: "thao-vy",
    name: "Thảo Vy",
    badgeLabel: "GIỌNG SÔI ĐỘNG, NĂNG LƯỢNG",
    experienceYears: 4,
    formats: "Sự kiện, Year End Party, Khai trương",
    mood: "Sôi động, cuốn hút, khuấy động không khí",
    genres: "V-Pop sôi động, Dance-Pop, Nhạc remix",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Thảo Vy là lựa chọn hàng đầu của Rainy Band cho các sự kiện cần năng lượng cao và không khí sôi động. Với khả năng tương tác tốt cùng khán giả và phong cách trình diễn cuốn hút, cô thường xuyên đảm nhận các show Year End Party, khai trương và sự kiện ngoài trời.\n\nThảo Vy có thể hát song ngữ Việt-Anh và linh hoạt chuyển đổi giữa các thể loại trong cùng một set nhạc, giúp chương trình luôn giữ được nhịp và không khí.",
    posterImageUrl: "https://placehold.co/600x800/123240/123240",
    avatarImageUrl: "https://placehold.co/80x80/123240/123240"
  },
  {
    id: "vocalist-3",
    slug: "gia-bao",
    name: "Gia Bảo",
    badgeLabel: "GIỌNG TRẦM, SANG TRỌNG",
    experienceYears: 5,
    formats: "Tiệc cưới, sự kiện doanh nghiệp trang trọng",
    mood: "Sang trọng, tinh tế, phù hợp không gian lớn",
    genres: "Ballad, Jazz Lounge, Nhạc xưa",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Gia Bảo sở hữu chất giọng trầm ấm đặc trưng, là vocal được yêu cầu nhiều nhất cho các sự kiện trang trọng như tiệc cưới và gala doanh nghiệp. Với 5 năm kinh nghiệm, anh có khả năng kiểm soát sân khấu tốt và mang đến cảm giác chuyên nghiệp cho mỗi buổi biểu diễn.\n\nPhong cách của Gia Bảo thiên về jazz lounge và ballad cổ điển, kết hợp với nhạc xưa Việt Nam, tạo nên một không gian âm nhạc vừa sang trọng vừa gần gũi.",
    posterImageUrl: "https://placehold.co/600x800/123240/123240",
    avatarImageUrl: "https://placehold.co/80x80/123240/123240"
  },
  {
    id: "vocalist-4",
    slug: "ha-my",
    name: "Hà My",
    badgeLabel: "GIỌNG TRONG, TRẺ TRUNG",
    experienceYears: 2,
    formats: "Sinh nhật, tiệc nhỏ, sự kiện trẻ",
    mood: "Trẻ trung, tươi mới, gần gũi",
    genres: "Indie Việt, Acoustic Cover, Pop nhẹ",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Hà My là thành viên trẻ nhất trong đội ngũ vocal, mang đến làn gió tươi mới cho các buổi tiệc sinh nhật, tiệc nhỏ và sự kiện hướng đến đối tượng trẻ. Chất giọng trong trẻo và phong cách biểu diễn gần gũi giúp cô nhanh chóng kết nối với khán giả.\n\nHà My đặc biệt mạnh ở thể loại Indie Việt và acoustic cover, những bài hát mang cảm xúc nhẹ nhàng nhưng đủ sâu để tạo ấn tượng cho người nghe.",
    posterImageUrl: "https://placehold.co/600x800/123240/123240",
    avatarImageUrl: "https://placehold.co/80x80/123240/123240"
  }
];
