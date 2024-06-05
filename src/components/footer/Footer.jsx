import React from "react";
import logo from "@/assets/Group.png";
import email from "@/assets/email.png";
import phone from "@/assets/phone.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" text-black py-10 w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* First column */}
          <div className="max-w-md mb-2 ml-2">
            <Image
              src={logo}
              alt="Logo"
              width={100}
              height={50}
              className="cursor-pointer mb-2"
            />
            <p className="mb-2 flex items-center gap-2">
              {" "}
              <Image
                src={email}
                alt="email"
                width={20}
                height={20}
                className="cursor-pointer"
              />{" "}
              Help@Frybix.Com
            </p>
            <p className="mb-2 flex items-center gap-2">
              {" "}
              <Image
                src={phone}
                alt="phone"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              +1 234 456 678 89
            </p>
          </div>

          {/* Second column */}
          <div className="max-w-md ml-2">
            <h3 className=" mb-2 text-3xl ">Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Home</a>
              </li>
              <li className="mb-2">
                <a href="#">About us</a>
              </li>
              <li className="mb-2">
                <a href="#">Booking</a>
              </li>
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          {/* Third column */}
          <div className="max-w-md ml-2">
            <h3 className=" mb-2 text-3xl ">Legal</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Terms Of Use</a>
              </li>
              <li className="mb-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>

          {/* Fourth column */}
          <div className="max-w-md ml-2">
            <h3 className=" mb-2 text-3xl ">Product</h3>
            <ul>
              <li className="mb-2">
                <a href="#">Take Tour</a>
              </li>
              <li className="mb-2">
                <a href="#">Live Chat</a>
              </li>
              <li className="mb-2">
                <a href="#">Reviews</a>
              </li>
            </ul>
          </div>

          {/* Fifth column */}
          <div className="max-w-md ml-2">
            <h3 className=" mb-2 text-3xl ">Newsletter</h3>
            <p className="mb-2">Stay Up To Date</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className=" px-3 py-2"
              />
              <button className="bg-gray-600 px-4 py-2 text-white rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-8 border-gray-700" />
      <p className="text-center mt-8">
        Copyright 2022 Uifry.Com All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
