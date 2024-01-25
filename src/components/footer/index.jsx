import React from "react";
import Image from "next/image";
import Logo from "./cc-03.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const social = [
  { Icon: FaFacebookF, link: "#" },
  { Icon: FaTwitter, link: "#" },
  { Icon: FaInstagram, link: "#" },
  { Icon: FaTiktok, link: "#" },
];

const Footer = () => {
  return (
    <div className={"bg-black container mx-auto py-14 px-5"}>
      <div className="md:flex items-center justify-center">
        <div className={"text-center md:me-14"}>
          <Image
            src={Logo}
            alt={"Logo"}
            className={
              "invert opacity-95 inline-block md:w-[240px] w-[130px] m-14"
            }
          />
        </div>
        <div className={"md:ms-14"}>
          <h5
            className={
              "uppercase opacity-60 text-[18px] md:text-[20px] mb-3 font-bold"
            }
          >
            Contact us
          </h5>
          <a
            href="mailto:hi@coursecrack.com"
            className={"mb-10 inline-block text-2xl"}
          >
            hi@coursecrack.com
          </a>
          <h5
            className={
              "uppercase opacity-60 text-[18px] md:text-[20px] mb-3 font-bold"
            }
          >
            Follow us
          </h5>
          <ul className={"flex"}>
            {social.map(({ Icon, link }, idx) => (
              <li key={idx} className={"me-5"}>
                <a
                  href={link}
                  target={"_blank"}
                  className={"text-3xl md:text-4xl"}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={"text-left md:text-center text-lg md:text-xl mt-12"}>
        &copy; {new Date().getFullYear()} CourseCrack. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
