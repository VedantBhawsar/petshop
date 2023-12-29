import React from "react";
import Image from "next/image";

import Img1 from "../public/img/adoption/img1.png";

const Adoption = () => {
  return (
    <section
      id="about"
      className="bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex  "
    >
      <div className="container mx-auto flex flex-col lg:flex-row ">
        {/* Image */}
        <div className="flex-1 flex justify-center items-center">
          <Image src={Img1} width={542} height={560} alt="" draggable="false" />
        </div>
        {/* Text */}
        <div className="text-cream flex-1 flex flex-col justify-center gap-5 lg:ml-16">
          <h2 className="h2">Making pe pareting easy for everyone</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem consequuntur ab dolorum obcaecati facilis nesciunt
            quasi illum totam reprehenderit vitae. Repellendus saepe mollitia
            corporis magni! Perferendis, officiis porro! Quisquam, nesciunt!
          </p>
          <ul className="mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-14">
            <li className="">Adoption</li>
            <li className="">Frozen Raw</li>
            <li className="">Next day delivery</li>
          </ul>
          <button className="btn btn-primary mx-auto lg:mx-0">Explore</button>
        </div>
      </div>
    </section>
  );
};

export default Adoption;
