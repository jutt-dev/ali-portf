import { aliPic, curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[6rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative lg:flex lg:justify-evenly z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:my-[5.25rem]">
          <h1 className="h1 lg:w-1/3 mb-6 lg:mb-0">
            Explore the Possibilities of&nbsp;AI&nbsp;with {` `}
            <span className="inline-block relative bg-gradient-to-r from-yellow-300 to-teal-400 text-transparent bg-clip-text">
              Hunain Ali{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
            <p className=" hidden body-1 max-w-3xl mx-auto mt-16 text-n-2 lg:block lg:mb-8">
              Unleash the power of New Era. Upgrade your productivity and Ability to explore the AI and its features
            </p>
          </h1>
          {/* <div className="relative"> */}
            <div className="relative h-[26rem] lg:w-[40%] lg:h-[28.5rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
              <div className="absolute top-0 left-0 w-full h-full  pointer-events-none md:w-3/5 xl:w-auto">
                <img
                    className="w-full h-full  lg:object-contain origin-bottom lg:origin-center lg:translate-x-[5rem] lg:translate-y-[-1.5rem] lg:scale-x-[1.8] lg:scale-y-[2.2] scale-x-[1.05] scale-y-[1.2] md:object-right"
                    width={800}
                    alt="Smartest AI"
                    height={730}
                    src={aliPic}
                />
                {/* <img
                    className="w-full h-full object-cover scale-x-[1.1] scale-y-[1] md:object-right"
                    width={800}
                    alt="Smartest AI"
                    height={730}
                    src={aliPic}
                /> */}
              </div>
            </div>
          {/* </div> */}
          {/* <Button href="" white>
            Get started
            </Button> */}
        </div>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:hidden lg:mb-[6.25rem]">
            <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
              Unleash the power of New Era. Upgrade your productivity and Ability to explore the AI and its features
            </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[3.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl lg:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[3.5rem] bottom-[11rem] w-[18rem] lg:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
