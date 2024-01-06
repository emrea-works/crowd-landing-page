// declare module "*.json" {
//   const value: any;
//   export default value;
// }

import collages from "./collages.json";

export type BannerData = {
  id: string;
  collage: string[];
  title: string;
};

export const banners: BannerData[] = [
  {
    id: "buy_build",
    collage: collages['buy_build'],
    title: "We deliver the Future"
  },
  {
    id: "circular_economy",
    collage: collages['circular_economy'],
    title: "We believe in Circularity",
  },
  {
    id: "design_thinking",
    collage: collages['design_thinking'],
    title: "We deliver the Solutions",
  },
  {
    id: "smart-city",
    collage: collages['smart_city'],
    title: "We believe in Smart City",
  },
];
