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
    id: "banner-about_crowd",
    collage: collages.about_crowd,
    title: "",
  },
  {
    id: "banner-buy_build",
    collage: collages.buy_build,
    title: "",
  },
  {
    id: "banner-circular_economy",
    collage: collages.circular_economy,
    title: "",
  },
  {
    id: "banner-design_thinking",
    collage: collages.design_thinking,
    title: "",
  },
  {
    id: "banner-smart_city",
    collage: collages.smart_city,
    title: "We believein <br>Smart City",
  },
  {
    id: "banner-solutions",
    collage: collages.solutions,
    title: "",
  },
  {
    id: "banner-vision",
    collage: collages.vision,
    title: "",
  },
];
