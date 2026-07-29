export interface Musician {
  id: string;
  name: string;
  instrument: string;
  instrumentGroup: string;
  experienceYears: number;
  imageUrl: string;
}

export const musicians: Musician[] = [
  {
    id: "musician-1",
    name: "Quốc Huy",
    instrument: "Piano / Keys",
    instrumentGroup: "KEYBOARD/PIANO",
    experienceYears: 5,
    imageUrl: "https://placehold.co/400x520/123240/123240"
  },
  {
    id: "musician-2",
    name: "Anh Tuấn",
    instrument: "Cajon/SPD",
    instrumentGroup: "DRUMMER",
    experienceYears: 3,
    imageUrl: "https://placehold.co/400x520/1a4655/1a4655"
  },
  {
    id: "musician-3",
    name: "Bảo Trung",
    instrument: "Acoustic/E-Guitar/Bass",
    instrumentGroup: "GUITARIST",
    experienceYears: 6,
    imageUrl: "https://placehold.co/400x520/0a1720/0a1720"
  },
  {
    id: "musician-4",
    name: "Hữu Phát",
    instrument: "E-Guitar",
    instrumentGroup: "GUITARIST",
    experienceYears: 4,
    imageUrl: "https://placehold.co/400x520/2f7288/2f7288"
  }
];
