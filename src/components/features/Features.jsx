import React from "react";
import Image from "next/image";
import featureImage from "@/assets/Group 35933.png";
import background from "@/assets/background.png";
import star from "@/assets/star-05.png";
import cube1 from "@/assets/cube-02.png";
import cube2 from "@/assets/cube-04.png";

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between container mx-auto py-4 px-4 md:px-8">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0 relative">
        <Image
          src={background}
          alt="Hero Image"
          width={500}
          height={500}
          className="h-auto absolute top-8  left-0 -z-10 "
        />
        <Image
          src={featureImage}
          alt="Feature Image"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2 flex flex-col items-start relative ">
        <Image
          src={background}
          alt="Hero Image"
          width={500}
          height={500}
          className="h-auto absolute -top-1/4  -right-1/2 -z-10 "
        />
        <p className="text-[#FF5555] tracking-widest">FEATURES</p>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Uifry Premium</h2>
        <div>
          <h4 className="font-bold flex items-center gap-2 ">
            {" "}
            <Image
              src={star}
              alt="Star Image"
              width={20}
              height={20}
              className=""
            />{" "}
            Budgeting Intervals
          </h4>
          <p className="text-gray-600 mb-6">
            Cum Ct Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
        <div>
          <h4 className="font-bold flex items-center gap-2">
            {" "}
            <Image
              src={cube1}
              alt="Star Image"
              width={20}
              height={20}
              className=" "
            />
            Budgeting Intervals
          </h4>
          <p className="text-gray-600 mb-6">
            Cum Ct Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
        <div>
          <h4 className="font-bold flex items-center gap-2">
            {" "}
            <Image
              src={cube2}
              alt="Star Image"
              width={20}
              height={20}
              className="  "
            />{" "}
            Budgeting Intervals
          </h4>
          <p className="text-gray-600 mb-6">
            Cum Ct Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
            Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
