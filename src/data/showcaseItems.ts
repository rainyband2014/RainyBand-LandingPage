export interface ShowcaseItem {
  id: string;
  type: 'image' | 'video';
  category: 'acoustic-live' | 'electric-full-band' | 'nhac-viet' | 'nhac-quoc-te' | 'wedding' | 'corporate' | 'private-party' | 'cafe-acoustic';
  title: string;
  thumbnailUrl: string;
  videoUrl?: string;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "sc-1",
    type: 'image',
    category: 'cafe-acoustic',
    title: "Acoustic night tại café X",
    thumbnailUrl: "https://placehold.co/600x750/123240/123240"
  },
  {
    id: "sc-2",
    type: 'video',
    category: 'acoustic-live',
    title: "Mashup Ballad Nhẹ Nhàng",
    thumbnailUrl: "https://placehold.co/600x750/0a1720/0a1720",
    videoUrl: "" // TODO: thay link thật
  },
  {
    id: "sc-3",
    type: 'image',
    category: 'corporate',
    title: "Sự kiện khai trương cửa hàng mới",
    thumbnailUrl: "https://placehold.co/600x750/1a4655/1a4655"
  },
  {
    id: "sc-4",
    type: 'video',
    category: 'corporate',
    title: "Tiết mục sôi động tại Year End Party",
    thumbnailUrl: "https://placehold.co/600x750/0e222c/0e222c",
    videoUrl: "" // TODO: thay link thật
  },
  {
    id: "sc-5",
    type: 'image',
    category: 'wedding',
    title: "Không gian tiệc cưới lãng mạn",
    thumbnailUrl: "https://placehold.co/600x750/2f7288/2f7288"
  },
  {
    id: "sc-6",
    type: 'image',
    category: 'electric-full-band',
    title: "Hậu trường buổi tập của ban nhạc",
    thumbnailUrl: "https://placehold.co/600x750/235a6d/235a6d"
  },
  {
    id: "sc-7",
    type: 'video',
    category: 'nhac-quoc-te',
    title: "Cover nhạc US-UK Pop",
    thumbnailUrl: "https://placehold.co/600x750/4a8fa3/4a8fa3",
    videoUrl: "" // TODO: thay link thật
  },
  {
    id: "sc-8",
    type: 'image',
    category: 'corporate',
    title: "Biểu diễn tại sự kiện doanh nghiệp",
    thumbnailUrl: "https://placehold.co/600x750/123240/123240"
  },
  {
    id: "sc-9",
    type: 'video',
    category: 'acoustic-live',
    title: "Live Band Acoustic Session",
    thumbnailUrl: "https://placehold.co/600x750/0a1720/0a1720",
    videoUrl: "" // TODO: thay link thật
  }
];
