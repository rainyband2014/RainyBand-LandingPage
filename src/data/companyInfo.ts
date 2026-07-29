export interface CompanyInfo {
  foundedYear: number;
  foundedStory: string;
  milestones: { year: number; description: string }[];
}

export const companyInfo: CompanyInfo = {
  foundedYear: 2014,
  foundedStory: "Rainy Band được thành lập năm 2014 bởi Đăng Khoa, xuất phát từ đam mê biểu diễn acoustic tại các quán café nhỏ ở TP.HCM. Qua nhiều năm, đội ngũ dần mở rộng với các vocal và nhạc công chuyên nghiệp, phục vụ đa dạng loại hình sự kiện từ tiệc riêng tư đến sân khấu doanh nghiệp.",
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
