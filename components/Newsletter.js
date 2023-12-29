import Image from "next/image";
import React from "react";
import DogImg from "../public/img/newsletter/dog.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Newsletter = () => {
  return (
    <section id="blog">
      <div className="h-[800px] flex flex-1 flex-col lg:h-[324px] lg:flex-row-reverse">
        <div className="bg-newsletterOrange bg-center bg-cover bg-no-repeat flex-1 flex flex-col items-center px-8 lg:px-16 justify-center h-full ">
          <h1 className="h2">Subscribe & Get Pet Updatenews</h1>
          <div className="flex items-center border-b-2 text-cream w-full justify-between p-5 cursor-pointer ">
            <p>Mail</p>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
        <div className="flex bg-newsletterYellow h-full bg-center bg-no-repeat bg-cover flex-1 justify-center items-end ">
          <Image src={DogImg} alt="dog img" draggable="false" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
