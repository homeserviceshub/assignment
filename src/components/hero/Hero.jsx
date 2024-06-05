import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import image1 from "@/assets/Group 35924.png";
import heroImage from "@/assets/heroImg.png";
import background from "@/assets/background.png";
import playbtn from "@/assets/Group 3.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between container mx-auto py-16 px-4 md:px-8 ">
      <div className="md:w-1/2 md:mr-auto flex flex-col items-start relative">
        <Image
          src={background}
          alt="Hero Image"
          width={500}
          height={500}
          className="h-auto absolute md:-top-1/4 md:left-1/4 -z-10 rotate-180"
        />
        <h1 className="text-7xl font-bold  mb-4 tracking-tight">
          Make The Best Financial Decisions
        </h1>
        <p className="text-gray-600 mb-6">
          Cum Ct Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
        <div className="flex space-x-4 mb-6">
          <button className="bg-black text-white px-6 py-3 rounded flex items-center space-x-2 hover:bg-gray-800">
            <span>Get Started</span>
            <FaArrowRight />
          </button>
          <button className="bg-white text-black px-6 py-3 rounded border  hover:bg-gray-100">
            <span className="flex items-center justify-between gap-2">
              <Image
                src={playbtn}
                alt="Hero Image"
                width={20}
                height={20}
                className="h-auto"
              />
              Watch Video
            </span>
          </button>
        </div>
        <Image
          src={image1}
          alt="Hero Image"
          width={500}
          height={500}
          className="h-auto"
        />
      </div>
      <div className="md:w-1/2 flex-grow md:ml-auto">
        <Image
          src={heroImage}
          alt="Hero Image"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
