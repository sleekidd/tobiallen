import React from "react";
import Header from "../components/Header";
import logotest from "../assets/logo-test.svg";
import zerobanner from "../assets/zero-banner.svg";
import zeroec from "../assets/zeroec-logo.svg";
import fcmblogo from "../assets/fcmb-logo.svg";
import fcmbbanner from "../assets/fcmb-banner.svg";
import logoorange from '../assets/logo-orange.svg'
import InfiniteScrollSkills from "../components/InfiniteScrollSkills";

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-[1092px] bg-[#F9F9F9] px-[16px]">
      {/* Header Section */}
      <Header />

      <section className="my-[56px]">
        <div className="flex flex-col lg:flex-row gap-[32px]">
          <div className="flex flex-col w-full bg-white rounded-[8px] px-[32px] py-[48px] gap-[24px] items-start shadow-custom">
            <div className="flex flex-col items-start">
              <h1 className="font-greatmango font-bold text-[#1B1B1B] text-[24px] leading-[32px]">
                About Me
              </h1>
              <h4 className="font-bold uppercase text-[15px] text-[#333333] leading-[24px] text-start">
                Tech Practitioner{" "}
                <span className="font-bold uppercase text-[12px] text-[#878787] leading-[24px]">
                  (Product Design | Front End | BackEnd)
                </span>{" "}
              </h4>
            </div>
            <div className="flex flex-col items-start gap-[24px]">
              <p className="text-start text-[16px] leading-[28px] text-[#333333]">
                I am a Digital Product Designer with Web Development Background
                based in Lagos, Nigeria. I am a Digital Product Designer with
                Web Development Background based in Lagos, NigeriaI am a Digital
                Product Designer with Web Development Background based in Lagos,
                NigeriaI am a Digital Product Designer with Web Development
                Background based in Lagos, Nigeria
              </p>
              <a href="">Read More</a>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white rounded-[8px] px-[32px] py-[48px] gap-[24px] items-start shadow-custom">
            <div className="flex flex-col items-start">
              <h1 className="font-greatmango font-bold text-[#1B1B1B] text-[24px] leading-[32px]">
                Work Experience
              </h1>
            </div>
            <div className="flex flex-col items-start gap-[24px]">
              <div className="flex flex-row items-start gap-[12px]">
                <img src={logotest} alt="" />
                <div className="flex flex-col items-start">
                  <h4 className="uppercase text-[#333333] text-[16px] leading-[24px] font-bold">
                    UI/UX & Front End
                  </h4>
                  <h5 className="text-start uppercase text-[#878787] text-[12px] leading-[24px] font-bold">
                    Hoski Media | Remote | Canada
                  </h5>
                  <p className="text-[14px] text-[#333333] leading-[22px]">
                    February 2024 - Present
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-start gap-[12px]">
                <img src={logotest} alt="" />
                <div className="flex flex-col items-start">
                  <h4 className="uppercase text-[#333333] text-[16px] leading-[24px] font-bold">
                    Product Designer
                  </h4>
                  <h5 className="text-start uppercase text-[#878787] text-[12px] leading-[24px] font-bold">
                    Mintyn Online Bank | Remote | Nigeria
                  </h5>
                  <p className="text-[14px] text-[#333333] leading-[22px]">
                    June 2023 - July 2024
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-start gap-[12px]">
                <img src={logotest} alt="" />
                <div className="flex flex-col items-start">
                  <h4 className="uppercase text-[#333333] text-[16px] leading-[24px] font-bold">
                    UI/UX Designer
                  </h4>
                  <h5 className="text-start uppercase text-[#878787] text-[12px] leading-[24px] font-bold">
                    sbsc | Hybrid | Nigeria
                  </h5>
                  <p className="text-[14px] text-[#333333] leading-[22px]">
                    April 2022 - April 2024
                  </p>
                </div>
              </div>

              <a href="">View All</a>
            </div>
          </div>
        </div>
      </section>

      <InfiniteScrollSkills />

      {/* Portfolio Section */}
      <section className="container mx-auto mb-[56px]">
        <div className="flex flex-col gap-[8px]">
          <div className="flex flex-col lg:flex-row py-[8px] gap-[24px] lg:gap-0">
            <div className="flex flex-col w-full items-start gap-[4px]">
              <h2 className="font-greatmango font-bold text-[#1B1B1B] text-[24px] leading-[32px] text-start">
                My Project Portfolio
              </h2>
              <p className="text-[#333333] text-[16px] leading-[24px] text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing.
              </p>
            </div>
            <div className="flex flex-row lg:justify-end w-full items-end">
              <a href="">View All Projects</a>
            </div>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-col lg:flex-row pl-[32px] pt-[48px] bg-white shadow-custom rounded-[8px] gap-[16px] lg:gap-[32px]">
              <div className="flex flex-col w-full max-w-[453px] gap-[16px] lg:pb-[44px] pr-[32px] lg:pr-[0]">
                <div className="flex flex-col gap-[8px] items-start">
                  <img src={zeroec} alt="" />
                  <p className="text-start">Zero Efforts Creatives</p>
                </div>
                <div>
                  <h1 className="font-greatmango font-bold text-[#1B1B1B] text-[24px] leading-[24px] text-start">
                    Front End Development
                  </h1>
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start">
                  <p className="text-start text-[18px] leading-[26px] text-[#333333]">
                    Lorem ipsum dolor sit amet consectetur libero nisi aenean.
                    Lorem ipsum dolor sit amet consectetur libero nisi
                    aenean.Lorem ipsum dolor sit amet consectetur libero nisi
                    aenean.Lorem ipsum dolor sit amet consectetur libero nisi
                    aenean.
                  </p>
                  <a href="">View Project</a>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <img src={zerobanner} alt="" />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-[32px]">
              <div className="flex flex-col pl-[32px] pt-[48px] bg-white shadow-custom rounded-[8px] gap-[16px]">
                <div className="flex flex-col w-full max-w-[453px] gap-[16px] pr-[32px] lg:pr-[0]">
                  <div className="flex flex-col gap-[8px] items-start">
                    <img src={fcmblogo} alt="" />
                    <p className="text-start">FCMB</p>
                  </div>
                  <div>
                    <h1 className="font-greatmango font-bold text-[#1B1B1B] text-[24px] leading-[24px] text-start">
                    UI/UX Design
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start">
                    <p className="text-start text-[18px] leading-[26px] text-[#333333]">
                    Lorem ipsum dolor sit amet consectetur libero nisi aenean. Lorem ipsum dolor sit amet consectetur libero nisi aenean.
                    </p>
                    <a href="">View Project</a>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <img src={fcmbbanner} alt="" />
                </div>
              </div>
              <div className="flex flex-col pl-[32px] pt-[48px] bg-white shadow-custom rounded-[8px] gap-[16px]">
                <div className="flex flex-col w-full max-w-[453px] gap-[16px] pr-[32px] lg:pr-[0]">
                  <div className="flex flex-col gap-[8px] items-start">
                    <img src={logoorange} alt="" />
                    <p className="text-start">Kaloscare</p>
                  </div>
                  <div>
                    <h1 className="font-greatmango font-bold text-[#1B1B1B] text-[24px] leading-[24px] text-start">
                    Product Design
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[24px] items-start justify-start">
                    <p className="text-start text-[18px] leading-[26px] text-[#333333]">
                    Lorem ipsum dolor sit amet consectetur libero nisi aenean. Lorem ipsum dolor sit amet consectetur libero nisi aenean.
                    </p>
                    <a href="">View Project</a>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <img src={fcmbbanner} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-gray-800 py-6">
        <div className="container mx-auto text-center">
          <p>© 2024 The Tobi Allen. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
