export interface CompanyInfo {
  foundedYear: number;
  foundedStory: string;
  milestones: { year: number; description: string }[];
}

export const companyInfo: CompanyInfo = {
  foundedYear: 2014,
  foundedStory: "Rainy Band được thành lập năm 2014 bởi Founder Phan Trung Nghĩa, với mong muốn xây dựng một ban nhạc biểu diễn chuyên nghiệp, linh hoạt và luôn đặt trải nghiệm của khách hàng lên hàng đầu.",
  milestones: [
    {
      year: 2014,
      description: "Thành lập Rainy Band, biểu diễn tại các quán café acoustic đầu tiên."
    },
    {
      year: 2018,
      description: "Mở rộng đội hình, bắt đầu nhận booking sự kiện doanh nghiệp và tiệc cưới."
    },
    {
      year: 2022,
      description: "Xây dựng đội ngũ nhạc công và vocal chuyên biệt theo từng thể loại show."
    }
  ]
};