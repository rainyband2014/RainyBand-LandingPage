import type { MediaVideo } from './types';

export interface Vocalist {
  id: string;
  slug: string;
  name: string;
  gender: 'nam' | 'nu';
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
  // ===== VOCAL NAM =====
  {
    id: "vocalist-1",
    slug: "zyzy",
    name: "ZyZy",
    gender: "nam",
    badgeLabel: "GIỌNG NAM SÔI ĐỘNG, PHÁ CÁCH",
    experienceYears: 3,
    formats: "Sự kiện giới trẻ, Khai trương, Tiệc âm nhạc",
    mood: "Sôi động, phá cách, tạo không khí bùng nổ",
    genres: "Dance-Pop, EDM Cover, Nhạc trẻ, Nhạc remix",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "ZyZy là gương mặt trẻ mang phong cách trình diễn hiện đại, phá cách của đội ngũ Vocal Nam Rainy Band. Với năng lượng dồi dào trên sân khấu, ZyZy thường đảm nhận các set nhạc cần sự bùng nổ như khai trương, sự kiện giới trẻ hoặc các chương trình có yếu tố tương tác cao.\n\nKhả năng làm chủ sân khấu cùng gu thẩm mỹ âm nhạc bắt kịp xu hướng giúp ZyZy luôn mang đến những phần trình diễn mới mẻ, phù hợp với các thương hiệu và sự kiện muốn tạo dấu ấn trẻ trung.",
    posterImageUrl: "/images/vocalists/nam_zyzy.jpg",
    avatarImageUrl: "/images/vocalists/nam_zyzy.jpg",
    videos: [
      {
        id: "v1-vid1",
        title: "Dance-Pop Mashup Live",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v1-vid2",
        title: "EDM Cover - Khai trương",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-2",
    slug: "minh-phu",
    name: "Minh Phú",
    gender: "nam",
    badgeLabel: "GIỌNG NAM ẤM, TRUYỀN CẢM",
    experienceYears: 5,
    formats: "Tiệc cưới, sự kiện doanh nghiệp, đêm nhạc acoustic",
    mood: "Ấm áp, chỉn chu, phù hợp không gian trang trọng",
    genres: "Pop Ballad, Nhạc xưa, Acoustic, US-UK Ballad",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Minh Phú là giọng ca nam có kinh nghiệm dày dặn trong các chương trình mang tính trang trọng như tiệc cưới và sự kiện doanh nghiệp. Chất giọng ấm, kỹ thuật xử lý bài hát chắc chắn giúp anh luôn giữ được sự ổn định trong mọi buổi biểu diễn.\n\nVới 5 năm gắn bó cùng nghề, Minh Phú hiểu rõ cách phối hợp cùng ban nhạc để tạo nên một chương trình mạch lạc, phù hợp với không khí và câu chuyện mà khách hàng mong muốn truyền tải.",
    posterImageUrl: "/images/vocalists/nam_minh_phu.jpg",
    avatarImageUrl: "/images/vocalists/nam_minh_phu.jpg",
    videos: [
      {
        id: "v2-vid1",
        title: "Pop Ballad Cover - Tiệc cưới",
        thumbnailUrl: "https://placehold.co/600x400/1a4655/1a4655",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v2-vid2",
        title: "Acoustic Session",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-3",
    slug: "dai-duong",
    name: "Đại Dương",
    gender: "nam",
    badgeLabel: "GIỌNG NAM TRẦM ẤM, TRUYỀN CẢM",
    experienceYears: 6,
    formats: "Tiệc cưới, sự kiện doanh nghiệp, đêm nhạc acoustic",
    mood: "Ấm áp, sâu lắng, dễ chạm đến cảm xúc người nghe",
    genres: "Ballad, Bolero hiện đại, Nhạc Trịnh, Acoustic Pop",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Đại Dương là một trong những giọng ca nam kỳ cựu của Rainy Band, sở hữu chất giọng trầm ấm và lối hát tự sự, chân thành. Anh thường đảm nhận các set nhạc cần sự lắng đọng như tiệc cưới, dinner acoustic hoặc những chương trình mang tính chất tri ân, tưởng nhớ.\n\nVới 6 năm gắn bó cùng band, Đại Dương có khả năng dẫn dắt không khí sân khấu một cách tinh tế, biết cách tiết chế cảm xúc để mỗi ca khúc chạm đúng vào câu chuyện mà chương trình muốn kể.",
    posterImageUrl: "/images/vocalists/nam_dai_duong.jpg",
    avatarImageUrl: "/images/vocalists/nam_dai_duong.jpg",
    videos: [
      {
        id: "v3-vid1",
        title: "Nhạc Trịnh Live Session",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v3-vid2",
        title: "Bolero Cover - Tiệc cưới",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-4",
    slug: "kyo-duc-anh",
    name: "Kyo Đức Anh",
    gender: "nam",
    badgeLabel: "GIỌNG NAM CÁ TÍNH, PHONG CÁCH RIÊNG",
    experienceYears: 5,
    formats: "Sự kiện âm nhạc, Bar/Lounge, Sân khấu ngoài trời",
    mood: "Cá tính, phóng khoáng, tạo điểm nhấn riêng cho chương trình",
    genres: "Rock ballad, Nhạc trẻ, Acoustic phá cách, US-UK",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Kyo Đức Anh là gương mặt mang màu sắc cá tính trong đội ngũ vocal của Rainy Band, với lối xử lý bài hát phóng khoáng và không ngại thử nghiệm những bản phối mới lạ. Anh thường được lựa chọn cho các sân khấu cần một dấu ấn riêng biệt.\n\nKinh nghiệm biểu diễn tại nhiều không gian từ bar, lounge đến sân khấu ngoài trời giúp Kyo Đức Anh xử lý tốt các tình huống kỹ thuật đa dạng, luôn giữ được phong độ ổn định trên sân khấu.",
    posterImageUrl: "/images/vocalists/nam_kyo_duc_anh.jpg",
    avatarImageUrl: "/images/vocalists/nam_kyo_duc_anh.jpg",
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
    slug: "bao-huy",
    name: "Bảo Huy",
    gender: "nam",
    badgeLabel: "GIỌNG NAM MẠNH MẼ, CUỐN HÚT",
    experienceYears: 4,
    formats: "Sự kiện doanh nghiệp, Sân khấu ngoài trời, Festival",
    mood: "Mạnh mẽ, cuốn hút, phù hợp sân khấu lớn",
    genres: "Rock Ballad, Pop-Rock, Nhạc trẻ, Acoustic mạnh",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Bảo Huy sở hữu chất giọng nội lực cùng phong cách trình diễn mạnh mẽ, thường được lựa chọn cho các sân khấu lớn như sự kiện doanh nghiệp quy mô hoặc chương trình ngoài trời. Khả năng kiểm soát tốt âm lượng và cảm xúc giúp anh giữ vững phong độ dù biểu diễn trong thời gian dài.\n\nBảo Huy đặc biệt yêu thích dòng nhạc rock ballad và pop-rock, mang đến những tiết mục có chiều sâu nhưng vẫn đủ năng lượng để kết nối với đông đảo khán giả.",
    posterImageUrl: "https://placehold.co/600x800/0a1720/0a1720",
    avatarImageUrl: "https://placehold.co/80x80/0a1720/0a1720",
    videos: [
      {
        id: "v5-vid1",
        title: "Pop-Rock Live tại Festival",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v5-vid2",
        title: "Rock Ballad Cover",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  // ===== VOCAL NỮ =====
  {
    id: "vocalist-6",
    slug: "linh-chi",
    name: "Linh Chi",
    gender: "nu",
    badgeLabel: "GIỌNG NỮ NĂNG LƯỢNG, ĐA SẮC",
    experienceYears: 3,
    formats: "Sự kiện giới trẻ, Khai trương, Tiệc sinh nhật",
    mood: "Tươi mới, năng động, dễ kết nối với nhiều đối tượng khán giả",
    genres: "V-Pop, Dance-Pop, Nhạc trẻ, Nhạc remix",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Linh Chi mang đến năng lượng tươi mới cho đội hình vocal của Rainy Band, với khả năng thích nghi nhanh với nhiều thể loại từ V-Pop, Dance-Pop đến các bản remix sôi động. Cô đặc biệt phù hợp với những chương trình hướng đến đối tượng khán giả trẻ.\n\nPhong cách trình diễn linh hoạt, luôn chủ động tương tác với khán giả giúp Linh Chi trở thành lựa chọn phù hợp cho các sự kiện cần sự bùng nổ và kết nối nhanh.",
    posterImageUrl: "/images/vocalists/nu_linh_chi.jpg",
    avatarImageUrl: "/images/vocalists/nu_linh_chi.jpg",
    videos: [
      {
        id: "v6-vid1",
        title: "Dance-Pop Mashup - Khai trương",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v6-vid2",
        title: "V-Pop Hits Cover",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-7",
    slug: "hoang-ha",
    name: "Hoàng Hà",
    gender: "nu",
    badgeLabel: "GIỌNG NỮ NGỌT NGÀO, GẦN GŨI",
    experienceYears: 2,
    formats: "Café acoustic, Tiệc riêng tư, Sự kiện quy mô nhỏ",
    mood: "Ngọt ngào, nhẹ nhàng, tạo cảm giác gần gũi",
    genres: "Acoustic, Indie Việt, Pop nhẹ, Nhạc xưa",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Hoàng Hà là thành viên trẻ của đội ngũ vocal, mang chất giọng ngọt ngào và cách hát mộc mạc, gần gũi. Cô thường đảm nhận các set acoustic tại café hoặc những buổi tiệc riêng tư cần không khí ấm cúng.\n\nDù mới gia nhập Rainy Band, Hoàng Hà đã nhanh chóng khẳng định phong cách riêng qua những bản acoustic cover đầy cảm xúc, được nhiều khách hàng yêu thích lựa chọn cho các chương trình quy mô nhỏ.",
    posterImageUrl: "/images/vocalists/nu_hoang_ha.jpg",
    avatarImageUrl: "/images/vocalists/nu_hoang_ha.jpg",
    videos: [
      {
        id: "v7-vid1",
        title: "Acoustic Cover - Café Session",
        thumbnailUrl: "https://placehold.co/600x400/235a6d/235a6d",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v7-vid2",
        title: "Indie Việt Live",
        thumbnailUrl: "https://placehold.co/600x400/123240/123240",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-8",
    slug: "thao-linh",
    name: "Thảo Linh",
    gender: "nu",
    badgeLabel: "GIỌNG NỮ NHẸ NHÀNG, SÂU LẮNG",
    experienceYears: 3,
    formats: "Café acoustic, Private event, Tiệc riêng tư",
    mood: "Nhẹ nhàng, sâu lắng, giàu cảm xúc",
    genres: "Indie Việt, Acoustic, Ballad nhẹ, Nhạc xưa",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Thảo Linh mang đến chất giọng nhẹ nhàng, giàu cảm xúc, phù hợp với những không gian cần sự tĩnh lặng và kết nối sâu như café acoustic hay private event. Lối hát tự nhiên, không cầu kỳ giúp Thảo Linh dễ dàng chạm đến người nghe.\n\nVới thế mạnh ở dòng indie Việt và acoustic, Thảo Linh thường được lựa chọn cho các chương trình mang tính chất tâm tình, gần gũi giữa nghệ sĩ và khán giả.",
    posterImageUrl: "/images/vocalists/nu_thao_linh.jpg",
    avatarImageUrl: "/images/vocalists/nu_thao_linh.jpg",
    videos: [
      {
        id: "v8-vid1",
        title: "Indie Việt Acoustic Cover",
        thumbnailUrl: "https://placehold.co/600x400/1a4655/1a4655",
        videoUrl: "" // TODO: thay link thật
      },
      {
        id: "v8-vid2",
        title: "Private Event Session",
        thumbnailUrl: "https://placehold.co/600x400/0a1720/0a1720",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  },
  {
    id: "vocalist-9",
    slug: "pham-phuong",
    name: "Phạm Phương",
    gender: "nu",
    badgeLabel: "GIỌNG NỮ TRẺ TRUNG, NĂNG ĐỘNG",
    experienceYears: 2,
    formats: "Tiệc sinh nhật, Sự kiện giới trẻ, Public event",
    mood: "Trẻ trung, năng động, dễ tạo thiện cảm",
    genres: "V-Pop, Pop nhẹ, Nhạc trẻ, Acoustic Cover",
    // TODO: thay fullBio bằng nội dung thật
    fullBio: "Phạm Phương là thành viên trẻ của đội ngũ Vocal Nữ, mang đến sự tươi mới và năng động cho các chương trình hướng đến đối tượng khán giả trẻ. Chất giọng trong sáng cùng phong cách trình diễn gần gũi giúp cô dễ dàng tạo thiện cảm với khán giả.\n\nDù mới bắt đầu hành trình biểu diễn chuyên nghiệp, Phạm Phương đã nhanh chóng khẳng định được sự tự tin và cảm nhạc tốt qua nhiều chương trình tiệc sinh nhật và sự kiện giới trẻ.",
    posterImageUrl: "/images/vocalists/nu_pham_phuong.jpg",
    avatarImageUrl: "/images/vocalists/nu_pham_phuong.jpg",
    videos: [
      {
        id: "v9-vid1",
        title: "V-Pop Acoustic Cover",
        thumbnailUrl: "https://placehold.co/600x400/2f7288/2f7288",
        videoUrl: "" // TODO: thay link thật
      }
    ]
  }
];

export interface VocalGroupIntro {
  gender: 'nam' | 'nu';
  title: string;
  intro: string;
  closingNote: string;
}

export const vocalGroupIntros: VocalGroupIntro[] = [
  {
    gender: "nam",
    title: "Vocal Nam",
    intro: "Sở hữu màu sắc giọng hát và phong cách trình diễn đa dạng, đội ngũ Vocal Nam của Rainy Band có khả năng đáp ứng linh hoạt nhiều dòng nhạc, từ acoustic nhẹ nhàng, pop ballad sâu lắng đến những tiết mục sôi động dành cho sân khấu sự kiện.",
    closingNote: "Tùy theo concept chương trình, đối tượng khách mời và phong cách âm nhạc mong muốn, Rainy Band sẽ tư vấn giọng ca phù hợp để mang đến phần trình diễn hài hòa và trọn vẹn nhất."
  },
  {
    gender: "nu",
    title: "Vocal Nữ",
    intro: "Đội ngũ Vocal Nữ của Rainy Band mang đến nhiều màu sắc âm nhạc khác nhau, từ giọng hát nhẹ nhàng, sâu lắng đến phong cách trẻ trung, sôi động và giàu năng lượng trên sân khấu.",
    closingNote: "Mỗi giọng ca sở hữu phong cách và thế mạnh riêng, giúp Rainy Band linh hoạt lựa chọn nhân sự phù hợp với tiệc cưới, sự kiện doanh nghiệp, private event, sân khấu acoustic và các chương trình giải trí công cộng."
  }
];