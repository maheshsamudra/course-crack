import React from "react";
import Image from "next/image";
import Logo from "./cc-10.png";
import AppleStore from "./apple.png";
import PlayStore from "./android.png";

const HeroSection = () => {
  return (
    <div
      className={
        "container max-w-[1200px] bg-black mx-auto py-10 px-5  md:bg-[url('/bg-image.png')] bg-[length:400px] lg:bg-[length:500px] xl:bg-[length:600px] bg-no-repeat bg-right-top"
      }
    >
      <div className={"w-full md:w-2/3 lg:w-1/2"}>
        <Image
          src={Logo}
          alt={"Logo"}
          className={"invert w-[200px] md:w-[340px] inline-block md:mb-14"}
        />
        <h1 className={"mt-14 text-5xl md:text-7xl"}>Launching soon</h1>
        <h2 className={"my-10 text-3xl md:text-4xl text-[#8C52FF]"}>
          See it here in April.
        </h2>
        <p className={"text-2l md:text-2xl mb-8 text-white font-[400]"}>
          CourseCrack is a brand new way to view course information and feedback
          from real students. We will launch to the world this spring.
        </p>
      </div>

      <div className="md:flex mt-14">
        <a
          href="#"
          target="_blank"
          className={
            "border-[1px] w-[200px] md:w-[250px] h-[50px] md:h-[60px] mx-auto text-center border-white m-8 flex items-center justify-center text-xl md:text-2xl"
          }
        >
          Get in touch.
        </a>

        <a
          href="#"
          target="_blank"
          className={
            "border-[1px] w-[200px] md:w-[250px] h-[50px] md:h-[60px] mx-auto text-center border-white m-8 flex items-center justify-center"
          }
        >
          <Image src={AppleStore} alt={"AppleStore"} />
        </a>

        <a
          href="#"
          target="_blank"
          className={
            "border-[1px] w-[200px] md:w-[250px] h-[50px] md:h-[60px] mx-auto text-center border-white m-8 flex items-center justify-center"
          }
        >
          <Image src={PlayStore} alt={"PlayStore"} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
