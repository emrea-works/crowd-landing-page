import "WelcomingBanner.scss";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import banners from "/banners.js";

const WelcomingBanner = () => {
  return (
    <section className="container">
      <div class="welcoming-banner">
        {banners.map((banner) => (
          <div key={banner.id} class="banner" id={banner.id}>
            <div class="relative-wrapper">
              <div class="collage-wrapper">
                <div class="collage">
                  <div class="stamp"></div>
                  {banner.collage.map((pieceSrc) => (
                    <div key={pieceSrc}>
                      <img src={pieceSrc} alt="CRUWD Smart City" />
                    </div>
                  ))}
                </div>
              </div>
              <div class="crowd-paragraph">
                <div class="wrapper">
                  <h1>{banner.title}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WelcomingBanner;
