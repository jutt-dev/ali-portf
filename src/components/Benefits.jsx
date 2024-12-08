import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import card1 from "../assets/benefits/card-1.svg";

import { roboEdit } from "../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


const Benefits = () => {

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <Section id="features"  >
      <div className="h-dvh w-screen z-50 " id="clip">
        <div className="mask-clip-path about-image z-50">
          <video autoPlay controls className='absolute origin-center top-0 left-0 object-fill w-screen h-screen ' src={roboEdit}></video>
        </div>
      </div>
      <div className="container top-[6.5rem] relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Work Smarter, Not Harder with Artificial Intelligence"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className={`block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] bg-gradient-to-r from-purple-500 via-pink-400 to-red-400`}
              key={item.id}
              style={{ clipPath: "url(#benefits)" }}
            >
              {/* style={{ backgroundImage: `url(${card1})` }} */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow /> */}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-10 lg:opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
