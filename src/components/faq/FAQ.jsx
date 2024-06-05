import React from "react";
import FAQ from "@/assets/Frame.png";
import background from "@/assets/background.png";
import Image from "next/image";

const FAQSection = () => {
  const faqItems = [1, 2, 3, 4, 5, 6];

  return (
    <section className="container mx-auto py-16 px-4 md:px-8">
      <p className="text-[#FF5555] tracking-widest text-left">FAQ</p>
      <h2 className="text-4xl font-bold mb-4 text-left">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row mb-16">
        <div className="flex-1 flex flex-col space-y-4 gap-4">
          {faqItems.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-[#FF5555] text-white"
                  : "bg-white text-black"
              } rounded-lg p-4`}
            >
              <h3 className="text-lg font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h3>
              <p>
                “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col space-y-4 gap-4">
          {faqItems.slice(3, 6).map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 !== 0
                  ? "bg-[#FF5555] text-white"
                  : "bg-white text-black"
              } rounded-lg p-4`}
            >
              <h3 className="text-lg font-bold mb-2">
                The Best Financial Accounting App Ever!
              </h3>
              <p>
                “Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
                Ultricies. In Ultrices Malesuada Elit Mauris.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative md:mt-40">
        <Image
          src={background}
          alt="background Image"
          width={500}
          height={500}
          className="h-auto absolute rotate-180 md:-top-1/4  md:-left-52 -z-10 "
        />
        <Image src={FAQ} alt="Testimonial" className="rounded-lg  w-full" />
      </div>
    </section>
  );
};

export default FAQSection;
