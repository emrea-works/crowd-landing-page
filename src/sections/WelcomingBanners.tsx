import type { BannerData } from "../banners.ts";
// import "./WelcomingBanners.scss";
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { banners } from "../banners.ts";

const WelcomingBanners = () => {
  console.log("Banners:", JSON.stringify(banners, null, 4));

  return (
    <section className="container" id="Welcoming_Banner">
      <div className="welcoming-banner">
        {banners.map((banner: BannerData) => (
          <div key={banner.id} className="banner" id={`banner-${banner.id}`}>
            <div className="relative-wrapper">
              <div className="collage-wrapper">
                <div className="collage">
                  <div className="stamp"></div>
                  {banner.collage.map((pieceSrc: string, index: number) => (
                    <div key={index+pieceSrc}>
                      <img
                        src={"/src/assets/collage-" + banner.id + "/" + pieceSrc}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="crowd-paragraph">
                <div className="wrapper">
                  <h1 style={{width: '280px', textWrap: 'wrap'}}
                  >{banner.title}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WelcomingBanners;
