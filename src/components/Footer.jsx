import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { curve } from "../assets";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption flex flex-col justify-center items-center text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved by <span>"KMASPURIYA BRAND 🥴".</span> <br />Developed by <span className="inline-block relative bg-gradient-to-r from-yellow-300 to-teal-400 text-transparent bg-clip-text">
          BABAR HASSAN </span>
          <img
                src={curve}
                className="absolute top-[8.5rem] left-[7.6rem] lg:left-[10rem] lg:top-[4.9rem] w-[32%] lg:w-[10.4%] xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
