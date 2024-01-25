import React from "react";
import Link from "next/link";

const BetaTesting = () => {
  return (
    <div className={"bg-[#F6E258] py-8"}>
      <div className={"container text-center mx-auto max-w-[800px] py-14 px-5"}>
        <p className={"text-2xl md:text-3xl mb-8 text-[#000414]"}>
          We were graduate students just like you and we felt there was a lack
          of real course information to help us decide which courses were best
          fit for our busy lifestyles. Many online reviews were unfair, biased
          and simply not accurate so we decided to change the game a bit.
        </p>
        <p className={"text-2xl md:text-3xl mb-8 text-[#000414]"}>
          Meanwhile, we are still working out the kinks. Want to help us get
          ready for the big day? Sign up for the private beta and we will email
          you an invite code in the coming weeks.
        </p>

        <Link
          href={"#"}
          className={
            "bg-black font-bold text-[20px] md:text-[26px] px-12 py-4 rounded-[12px] mt-8 inline-block"
          }
        >
          Join Beta Testing
        </Link>
      </div>
    </div>
  );
};

export default BetaTesting;
