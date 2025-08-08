import { Listing } from "@/types/listing";

export const mockListings: Listing[] = [
  {
    id: 1,
    title: "Cozy Homestay near UNSW",
    school: "University of New South Wales",
    schoolShort: "UNSW",
    price: 280,
    suburb: "Kensington",
    amenities: ["Wi-Fi", "Private bathroom", "Air-conditioning"],
    images: ["/img/l1.jpg"],
  },
  {
    id: 2,
    title: "Sunny room in terrace",
    school: "The University of Sydney",
    schoolShort: "USYD",
    price: 310,
    suburb: "Newtown",
    amenities: ["Wi-Fi", "Laundry", "Heating"],
    images: ["/img/l2.jpg"],
  },
  {
    id: 3,
    title: "Quiet room near UTS",
    school: "University of Technology Sydney",
    schoolShort: "UTS",
    price: 300,
    suburb: "Ultimo",
    amenities: ["Wi-Fi", "Heating", "Desk"],
    images: ["/img/l3.jpg"],
  },
];
