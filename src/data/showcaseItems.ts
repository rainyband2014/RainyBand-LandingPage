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
  },
  {
    id: "sc-10",
    type: 'image',
    category: 'cafe-acoustic',
    title: "Không gian acoustic ấm cúng tại quán café",
    thumbnailUrl: "/images/services/cafe/cafe-1.jpg"
  },
  {
    id: "sc-11",
    type: 'image',
    category: 'acoustic-live',
    title: "Trình diễn acoustic đầy cảm xúc",
    thumbnailUrl: "/images/services/cafe/cafe-5.jpg"
  },
  {
    id: "sc-12",
    type: 'image',
    category: 'corporate',
    title: "Sự kiện ra mắt sản phẩm doanh nghiệp",
    thumbnailUrl: "/images/services/event/event-1.jpg"
  },
  {
    id: "sc-13",
    type: 'image',
    category: 'private-party',
    title: "Tiệc riêng tư ấm cúng",
    thumbnailUrl: "/images/services/event/event-2.jpg"
  },
  {
    id: "sc-14",
    type: 'image',
    category: 'wedding',
    title: "Khoảnh khắc lễ cưới tại nhà hàng",
    thumbnailUrl: "/images/services/nha-hang/nha-hang-2.jpg"
  },
  {
    id: "sc-15",
    type: 'image',
    category: 'wedding',
    title: "Tiệc cưới sang trọng",
    thumbnailUrl: "/images/services/nha-hang/nha-hang-3.jpg"
  },
  {
    id: "sc-16",
    type: 'image',
    category: 'private-party',
    title: "Không gian tiệc gia đình ấm áp",
    thumbnailUrl: "/images/services/nha-hang/nha-hang-4.jpg"
  },
  {
    id: "sc-17",
    type: 'image',
    category: 'wedding',
    title: "Sân khấu tiệc cưới lung linh",
    thumbnailUrl: "/images/services/nha-hang/nha-hang-5.jpg"
  },
  {
    id: "sc-18",
    type: 'image',
    category: 'electric-full-band',
    title: "Ban nhạc điện tử biểu diễn tại nhà hàng",
    thumbnailUrl: "/images/services/nha-hang/nha-hang-6.jpg"
  },
  {
    id: "sc-19",
    type: 'image',
    category: 'nhac-viet',
    title: "Đêm nhạc Việt tại nhà hàng",
    thumbnailUrl: "/images/services/nha-hang/nha-hang-7.jpg"
  },
  {
    id: "sc-20",
    type: 'image',
    category: 'wedding',
    title: "Khoảnh khắc đáng nhớ trong đêm tiệc cưới",
    thumbnailUrl: "/images/services/nha-hang/nha-hang-8.jpg"
  }
];