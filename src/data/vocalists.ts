export interface Vocalist {
  id: string;
  name: string;
  badgeLabel: string;
  experienceYears: number;
  formats: string;
  mood: string;
  genres: string;
  posterImageUrl: string;
  avatarImageUrl: string;
}

export const vocalists: Vocalist[] = [
  {
    id: "vocalist-1",
    name: "Minh Anh",
    badgeLabel: "GIỌNG HÁT NHẸ, ẤM ÁP",
    experienceYears: 3,
    formats: "Café acoustic, US-UK acoustic night, Dinner set",
    mood: "Nhẹ nhàng, ấm áp, phù hợp không gian café, tiệc riêng tư",
    genres: "US/UK Pop, Indie Việt, Ballad, R&B",
    posterImageUrl: "https://placehold.co/600x800/123240/123240",
    avatarImageUrl: "https://placehold.co/80x80/123240/123240"
  },
  {
    id: "vocalist-2",
    name: "Thảo Vy",
    badgeLabel: "GIỌNG SÔI ĐỘNG, NĂNG LƯỢNG",
    experienceYears: 4,
    formats: "Sự kiện, Year End Party, Khai trương",
    mood: "Sôi động, cuốn hút, khuấy động không khí",
    genres: "V-Pop sôi động, Dance-Pop, Nhạc remix",
    posterImageUrl: "https://placehold.co/600x800/123240/123240",
    avatarImageUrl: "https://placehold.co/80x80/123240/123240"
  },
  {
    id: "vocalist-3",
    name: "Gia Bảo",
    badgeLabel: "GIỌNG TRẦM, SANG TRỌNG",
    experienceYears: 5,
    formats: "Tiệc cưới, sự kiện doanh nghiệp trang trọng",
    mood: "Sang trọng, tinh tế, phù hợp không gian lớn",
    genres: "Ballad, Jazz Lounge, Nhạc xưa",
    posterImageUrl: "https://placehold.co/600x800/123240/123240",
    avatarImageUrl: "https://placehold.co/80x80/123240/123240"
  },
  {
    id: "vocalist-4",
    name: "Hà My",
    badgeLabel: "GIỌNG TRONG, TRẺ TRUNG",
    experienceYears: 2,
    formats: "Sinh nhật, tiệc nhỏ, sự kiện trẻ",
    mood: "Trẻ trung, tươi mới, gần gũi",
    genres: "Indie Việt, Acoustic Cover, Pop nhẹ",
    posterImageUrl: "https://placehold.co/600x800/123240/123240",
    avatarImageUrl: "https://placehold.co/80x80/123240/123240"
  }
];
