export type Listing = {
  id: number;
  title: string;
  school: string;
  schoolShort: string;
  price: number; // per week
  suburb: string;
  amenities: string[];
  images: string[];
};
