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
    thumbnailUrl: "/images/services/cafe/cafe-2.jpg"
  },
  {
    id: "sc-2",
    type: 'video',
    category: 'acoustic-live',
    title: "Mashup Ballad Nhẹ Nhàng",
    thumbnailUrl: "/images/services/cafe/cafe-3.jpg",
    videoUrl: "" // TODO: thay link thật
  },
  {
    id: "sc-3",
    type: 'image',
    category: 'corporate',
    title: "Sự kiện khai trương cửa hàng mới",
    thumbnailUrl: "/images/services/event/event-3.jpg"
  },
  {
    id: "sc-4",
    type: 'video',
    category: 'corporate',
    title: "Tiết mục sôi động tại Year End Party",
    thumbnailUrl: "/images/services/event/event-4.jpg",
    videoUrl: "" // TODO: thay link thật
  },
  {
    id: "sc-5",
    type: 'image',
    category: 'wedding',
    title: "Không gian tiệc cưới lãng mạn",
    thumbnailUrl: "/images/services/nha-hang/nha-hang-1.jpg"
  },
  {
    id: "sc-6",
    type: 'image',
    category: 'electric-full-band',
    title: "Hậu trường buổi tập của ban nhạc",
    thumbnailUrl: "/images/services/event/event-5.jpg"
  },
  {
    id: "sc-7",
    type: 'video',
    category: 'nhac-quoc-te',
    title: "Cover nhạc US-UK Pop",
    thumbnailUrl: "/images/services/event/event-6.jpg",
    videoUrl: "" // TODO: thay link thật
  },
  {
    id: "sc-8",
    type: 'image',
    category: 'corporate',
    title: "Biểu diễn tại sự kiện doanh nghiệp",
    thumbnailUrl: "/images/services/event/event-7.jpg"
  },
  {
    id: "sc-9",
    type: 'video',
    category: 'acoustic-live',
    title: "Live Band Acoustic Session",
    thumbnailUrl: "/images/services/cafe/cafe-4.jpg",
    videoUrl: "" // TODO: thay link thật
  }
];
