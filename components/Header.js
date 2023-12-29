import React from "react";
import Image from "next/image";
import Logo from "../public/img/header/logo.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container mx-auto flex flex-col lg:flex-row gap-y-6 items-center lg:justify-around">
        <a href="#">
          <Image src={Logo} alt="logo" draggable="false" />
        </a>
        <nav className="text-xl lg:text-lg flex gap-x-5 lg:gap-x-12">
          <a href="#service">Services</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#">Contact</a>
        </nav>
        <button className="btn btn-primary">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
