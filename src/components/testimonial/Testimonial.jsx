"use client";
import React from "react";
import Image from "next/image";
import TestimonialImage from "@/assets/Group 1000002332.png";
import group from "@/assets/Group-photos.png";
import background from "@/assets/background.png";

const Testimonial = () => {
  return (
    <section className="container mx-auto py-16 px-4 md:px-8 text-center">
      <h2 className="text-1xl  mb-4">Testimonials</h2>
      <h3 className="text-4xl font-bold mb-8">What Our Users Say About Us?</h3>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
        <div className="md:w-1/2 relative">
          <Image
            src={background}
            alt="background Image"
            width={500}
            height={500}
            className="h-auto absolute rotate-180 md:top-24  left-0 -z-10 "
          />
          <Image
            src={TestimonialImage}
            alt="Testimonial"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Best Financial Accounting App Ever
            </h3>
            <p className="text-gray-600 text-left">
              Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
              Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
              Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis
              Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget
              Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
            </p>
            <div className="my-4 relative">
              <Image
                src={group}
                alt="Testimonial"
                width={250}
                height={250}
                className="rounded-lg"
              />
            </div>
            <p className="text-left font-bold">Nick Jonas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
