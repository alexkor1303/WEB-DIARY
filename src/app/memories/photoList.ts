import { StaticImageData } from "next/image";
import photo1 from "./memoriesPhoto/memOne.jpeg";
import photo2 from "./memoriesPhoto/memTwo.jpeg";
import photo3 from "./memoriesPhoto/memThree.jpeg";
import photo4 from "./memoriesPhoto/memFour.jpeg";
import photo5 from "./memoriesPhoto/memFive.jpeg";
import photo6 from "./memoriesPhoto/memSix.jpeg";
import photo7 from "./memoriesPhoto/memSeven.jpeg";
import photo8 from "./memoriesPhoto/memEight.jpeg";
import photo9 from "./memoriesPhoto/memNine.jpeg";
import photo10 from "./memoriesPhoto/memTen.jpeg";
import photo11 from "./memoriesPhoto/memEleven.jpeg";

export type MemoryImage = {
  id: string;
  name: string;
  src: StaticImageData;
  location: string;
  data: number;
};

const MemoriesImage: MemoryImage[] = [
  {
    id: "1",
    name: "River under mountain",
    src: photo1,
    location: "yakutia",
    data: 2022,
  },
  {
    id: "2",
    name: "Dad boat",
    src: photo2,
    location: "yakutia",
    data: 2022,
  },
  {
    id: "3",
    name: "Dad jeep",
    src: photo3,
    location: "yakutia",
    data: 2022,
  },
  {
    id: "4",
    name: "Dombay cheese cave",
    src: photo4,
    location: "Mineral water",
    data: 2022,
  },
  {
    id: "5",
    name: "My best friend",
    src: photo5,
    location: "Siberia",
    data: 2022,
  },
  {
    id: "6",
    name: "Beautiful me",
    src: photo6,
    location: "Moscow",
    data: 2023,
  },
  {
    id: "7",
    name: "<3",
    src: photo7,
    location: "Moscow",
    data: 2023,
  },
  {
    id: "8",
    name: "Cathedral",
    src: photo8,
    location: "Saint-Petersburg",
    data: 2023,
  },
  {
    id: "9",
    name: "Our summer",
    src: photo9,
    location: "Moscow",
    data: 2023,
  },
  {
    id: "10",
    name: "Bless",
    src: photo10,
    location: "Moscow",
    data: 2024,
  },
  {
    id: "11",
    name: "Summer light's",
    src: photo11,
    location: "Moscow",
    data: 2024,
  },
];

export default MemoriesImage;
