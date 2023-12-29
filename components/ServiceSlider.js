import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";

import Service1Icon from "../public/img/services/service-icon1.svg";
import Service2Icon from "../public/img/services/service-icon2.svg";
import Service3Icon from "../public/img/services/service-icon3.svg";

const services = [
  {
    id: 1,
    image: Service1Icon,
    name: "Pharmacy",
    description:
      "Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation",
  },
  {
    id: 2,
    image: Service2Icon,
    name: "Breed-specific Haircuts",
    description:
      "Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting.",
    btnText: "Explore",
  },
  {
    id: 3,
    image: Service3Icon,
    name: "Cloths",
    description:
      "Is your dog at the top of his/her fashion game? Don't forget a dog bikini or swim trunks for your pet's next vacation! Whether poolside, at the beach, or on the yacht, your pooch will look summer-ready",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      modules={[Navigation]}
      autoplay
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="serviceSlider min-h-[680px]"
    >
      {services.map((service) => {
        return (
          <SwiperSlide
            className="border border-primary/20 bg-cream min-h-[560px] rounded-[66px] py-16 px-8"
            key={service.id}
          >
            <Image
              src={service.image}
              className="w-1/4 mb-9"
              draggable="false"
            />
            <h1 className="text-[26px] font-medium mb-4">{service.name}</h1>
            <p className="text-[20px] mb-8">{service.description}</p>
            <button className="btn btn-primary">Explore</button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
