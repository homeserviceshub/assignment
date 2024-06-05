import React from "react";
import Image from "next/image";
import featureImage from "@/assets/Group 35933.png";
import background from "@/assets/background.png";
import bell from "@/assets/bell.png";
import star from "@/assets/starwithbg.png";

const Advantages = () => {
  return (
    <div>
      <section className="flex flex-col flex-col-reverse md:flex-row items-center justify-between container mx-auto py-4 px-4 md:px-8">
        <div className="md:w-1/2 flex flex-col items-start">
          <p className="text-[#FF5555] tracking-widest">ADVANTAGES</p>
          <h2 className="text-4xl font-bold mb-4">Why Choose Uifry?</h2>

          <h3 className="font-bold text-2xl flex items-center gap-2 mb-4">
            {" "}
            <Image
              src={bell}
              alt="bell Image"
              width={50}
              height={50}
              className=""
            />{" "}
            Clever Notification
          </h3>
          <p className="text-gray-600 mb-6">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
          <Image
            src={background}
            alt="Hero Image"
            width={500}
            height={500}
            className="h-auto absolute rotate-180 top-1/3  left-0 -z-10 "
          />
          <Image
            src={featureImage}
            alt="Feature Image"
            width={600}
            height={600}
            className="w-full h-auto"
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center justify-between container mx-auto py-4 px-4 md:px-8">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
          <Image
            src={featureImage}
            alt="Feature Image"
            width={600}
            height={600}
            className="w-full h-auto"
          />
          <Image
            src={background}
            alt="Hero Image"
            width={500}
            height={500}
            className="h-auto absolute md:top-32  md:left-24 -z-10 "
          />
          <Image
            src={background}
            alt="Hero Image"
            width={500}
            height={500}
            className="h-auto absolute md:top-1/4  md:left-1/4 -z-10 "
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-start">
          <h3 className="font-bold text-2xl flex items-center gap-2 mb-4">
            {" "}
            <Image
              src={star}
              alt="star Image"
              width={50}
              height={50}
              className=""
            />{" "}
            Fully Customizable
          </h3>
          <p className="text-gray-600 mb-6">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Advantages;
