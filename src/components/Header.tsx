import React from "react";
import headerimg from "../assets/banner-image.svg";
import profilepic from "../assets/profilepic.svg";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-[457px] bg-white shadow-custom my-[16px] lg:my-[32px] rounded-[8px]">
      <div>
        <img src={headerimg} alt="" />
      </div>
      <div className="flex flex-col lg:flex-row gap-[28px] pl-[48px]">
        <div className="flex mt-[-54px]">
          <div className="shadow-custom rounded-[100%] border-[4px] border-white">
            <img src={profilepic} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-[12px] text-start mt-[24px]">
          <div>
            <h1 className="font-greatmango font-bold text-[#1B1B1B] text-[24px] leading-[32px]">
              Hi, I’m Oluwatobi Adebola (Tobi Allen)
            </h1>
            <p className="font-neuemachina uppercase font-bold text-[#333333] text-[12px] tracking-[2px]">Product Design | Front End | BackEnd</p>
          </div>
          <p>me@tobiallen.com</p>
          <div className="flex flex-row gap-2">
            <a href="">Resume</a> | <a href="">LinkedIn</a> | <a href="">Github</a> | <a href="">Dribbble</a> | <a href="">X (Twitter)</a> | <a href="">Instagram</a> | <a href="">Contact</a></div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col lg:w-[1280px] w-full mx-auto gap-8 mb-[80px]">
    //   <div className="flex flex-col items-center w-[100%] lg:w-[1280px] mx-auto gap-[10px] px-4 lg:px-0">
    //     <p className="text-[28px] leading-[36px] lg:text-[40px] text-[#101828] lg:max-w-[1280px] lg:leading-[44px] font-semibold text-start lg:text-center">
    //     Our Impact in the Community
    //     </p>
    //     <p className="text-start lg:text-center max-w-[100%] lg:max-w-[670px] text-[#667085]">
    //     Thousands of items reunited, countless smiles created. Explore our impressive stats and see how our community-driven platform has made a significant difference in reuniting people with their lost treasures.
    //     </p>
    //   </div>
    //   <div className="flex flex-col gap-8">
    //     <hr className="bg-[#E4E7EC] lg:w-[100%] w-[90%] h-[1px] mx-auto" />
    //     <div className="w-full overflow-x-auto flex flex-row gap-4 lg:gap-4 lg:w-[1280px] mx-auto">
    //       <div className="flex flex-wrap gap-y-4 lg:gap-0 px-4 lg:px-0 w-full mx-auto">
    //       </div>
    //     </div>
    //     <hr className="bg-[#E4E7EC] lg:w-[100%] w-[90%] h-[1px] mx-auto" />
    //   </div>
    // </div>
  );
};

export default Header;
