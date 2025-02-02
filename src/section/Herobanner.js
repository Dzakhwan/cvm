import { iHeroBanner } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Herobanner() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1920px] w-full px-[116px] pt-[64px]">
        <div className="flex">
          <div className="w-1/2">
            <div className="text-[64px] text-[#8BAC3E] pr-[80px] leading-[64px]">
              Good Food Us Good Mood
            </div>
            <div className="text-[18px] leading-[29px] pr-[100px] pt-[32px]">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </div>
            <div className="pt-[32px]">
              <Link href="/about">
                <button className="px-6 py-3 bg-[#8BAC3E] text-white rounded-lg shadow-md hover:bg-[#6e8f31] transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 h-[663px] w-[651px]">
            <Image alt="iHeroBanner" src={iHeroBanner} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herobanner;
