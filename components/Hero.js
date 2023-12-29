import React from "react";
import Image from "next/image";
import pretitleImg from "../public/img/hero/pretitle-img.svg";
import Header from "../components/Header";

const Hero = () => {
  return (
    <section
      id="#"
      className="bg-cream lg:bg-hero lg:bg-cover lg:bg-no-repeat min-h-[400px] lg:min-h-[805px]"
    >
      <Header />
      <div className="container mx-auto flex justify-start items-center min-h-[400px] lg:h-[805px]">
        <div className="lg:max-w-[650px] text-center mx-auto lg:mx-0">
          <div className="hidden xl:flex mb-6 ml-5">
            <Image
              src={pretitleImg}
              width={"100%"}
              height={"auto"}
              draggable="false"
            />
          </div>
          <h1 className="text-5xl lg:text-7xl   font-bold uppercase -tracking--[0.05em] mb-10">
            A pet first <br />{" "}
            <span className="font-normal text-orange">approch to</span> <br />{" "}
            wellness
          </h1>
          <button className="btn btn-orange mx-auto lg:mx-0">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
