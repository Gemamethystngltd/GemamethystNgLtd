import Aos from "aos";
import { useEffect } from "react";
function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  const exploreData = [
    { explore: "About", info: "Join us", company: "About us" },
    { explore: " Contact", info: "Blog", company: "Blog" },
    { explore: " Porfolio", info: "Privacy & Policy", company: "Contact" },
    { explore: "  Blog", info: "Term & Conditions", company: "Careers" },
  ];
  return (
    <footer className=" h-[70vh] flex bg-[#232429]  justify-center  items-center tablet:px-4 phoneP:px-2">
      <div className="w-[70%] flex gap-4  justify-between laptop:w-[90%] tablet:w-[100%]  phoneL:flex-col phoneL:gap-6">
        <div className="company_info flex-1 flex flex-col gap-6 laptop:w-[30%] laptop:gap-4 phoneL:w-[90%] ">
          <h1 className="font-bold leading-[30px] text-white  text-[20px] uppercase laptop:text-[18px] tablet:text-[16px] tablet:leading-[20px]">
            Gemamethystng
          </h1>
          <div className="flex flex-col gap-3">
            <p className=" text-[#BCBCBE] text-[16px] leading-[23px] font-normal laptop:text-[14px] laptop:leading-[20px] tablet:text-[12px] tablet:leading-[15px]">
              Far far away, behind the word mountains, far from the
              countries,steady on the internet thats where our heart lies.
            </p>
            <div className="social_media flex gap-3 tablet:items-center ">
              <i
                data-aos="fade-up"
                className="fa-brands fa-linkedin-in text-white bg-webpurple p-3 rounded-full text-[14px] tablet:p-[.6rem] tablet:text-[12px] phoneP:p-[.5rem] phoneP:text-[11px]"
              ></i>
              <i
                data-aos="fade-up"
                data-aos-delay="100"
                className="fa-brands fa-tiktok  text-white bg-webpurple p-3 rounded-full text-[14px] tablet:p-[.6rem] tablet:text-[12px] phoneP:p-[.5rem] phoneP:text-[11px]"
              ></i>
              <i
                data-aos="fade-up"
                data-aos-delay="200"
                className="fa-brands fa-facebook-f  text-white bg-webpurple p-3 rounded-full text-[14px] tablet:p-[.6rem] tablet:text-[12px] phoneP:p-[.5rem] phoneP:text-[11px]"
              ></i>
              <i
                data-aos="fade-up"
                data-aos-delay="300"
                className="fa-brands fa-twitter  text-white bg-webpurple p-3 rounded-full text-[14px] tablet:p-[.6rem] tablet:text-[12px] phoneP:p-[.5rem] phoneP:text-[11px]"
              ></i>
            </div>
          </div>
        </div>

        {/* quick links */}
        <div className="flex w-[70%] justify-between laptop:w-[65%] phoneL:w-[100%] ">
          {/* explore */}
          <div className="explore  flex flex-col gap-6 laptop:gap-3">
            <h1 className="uppercase text-[20px] text-white leading-[30px] font-bold laptop:text-[18px] tablet:text-[16px] tablet:leading-[20px] phoneL:text-[13px] phoneL:leading-[15px] phoneP:text-[10px] phoneP:leading[13px-]">
              Explore
            </h1>
            <ul className="laptop:flex laptop:flex-col laptop:gap-1 ">
              {exploreData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] laptop:text-[14px] laptop:leading-[20px] tablet:text-[12px] tablet:leading-[15px] phoneL:text-[10px] phoneL:leading-[12px] phoneP:text-[9px] phoneP:leading-[10px]"
                  >
                    <span>
                      <i className="fa-solid fa-angle-right pr-1 phoneP:pr-0"></i>
                    </span>
                    {item.explore}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Info */}
          <div className="info  flex flex-col gap-6 laptop:gap-3 ">
            <h1 className="uppercase text-[20px] text-white  leading-[30px] font-bold laptop:text-[18px] tablet:text-[16px] tablet:leading-[20px] phoneL:text-[13px] phoneL:leading-[15px] phoneP:text-[10px] phoneP:leading[13px-] phoneP:pl-[.7rem]">
              Info
            </h1>
            <ul className="laptop:flex laptop:flex-col laptop:gap-1  ">
              {exploreData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] laptop:text-[14px] laptop:leading-[20px] tablet:text-[12px] tablet:leading-[15px] phoneL:text-[10px] phoneL:leading-[12px] phoneP:text-[9px] phoneP:leading-[10px] phoneP:w-"
                  >
                    <span>
                      <i className="fa-solid fa-angle-right pr-1"></i>
                    </span>
                    {item.info}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Company */}
          <div className="compasny  flex flex-col gap-6 laptop:gap-3">
            <h1 className="uppercase text-white  text-[20px] leading-[30px] font-bold laptop:text-[18px] tablet:text-[16px] tablet:leading-[20px] phoneL:text-[13px] phoneL:leading-[15px] phoneP:text-[10px] phoneP:leading[13px-]">
              Company
            </h1>
            <ul className="laptop:flex laptop:flex-col laptop:gap-1 ">
              {exploreData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] laptop:text-[14px] laptop:leading-[20px] tablet:text-[12px] tablet:leading-[15px] phoneL:text-[10px] phoneL:leading-[12px] phoneP:text-[9px] phoneP:leading-[10px] "
                  >
                    <span>
                      <i className="fa-solid fa-angle-right pr-1"></i>
                    </span>
                    {item.company}
                  </li>
                );
              })}
            </ul>
          </div>
          {/* question */}
          <div className="question  flex flex-col gap-6 laptop:gap-3">
            <h1 className="font-bold text-white uppercase leading-[30px] text-[20px] laptop:text-[18px] tablet:text-[16px] tablet:leading-[20px] phoneL:text-[13px] phoneL:leading-[15px] phoneP:text-[10px] phoneP:leading[13px-] phoneP:pl-4">
              Have a Question?
            </h1>
            <div className="flex flex-col gap-2 laptop:gap-1">
              <div className="question_map flex gap-2 items-center">
                <i className="fa-solid fa-map text-webpurple tablet:text-[.9rem] phoneL:text-[.7rem] phoneP:text-[.6rem] "></i>
                <p className="text-[#BCBCBE] laptop:text-[14px] tablet:text-[12px] phoneL:text-[10px] phoneP:text-[9px]">
                  {" "}
                  Omu-Aran, Kwara-State
                </p>
              </div>
              <div className="question_phone flex items-center gap-2">
                <i className="fa-solid fa-phone text-webpurple text-[.9rem] phoneL:text-[.7rem]  phoneP:text-[.6rem]"></i>
                <p className="text-[#BCBCBE]  laptop:text-[14px] tablet:text-[12px] phoneL:text-[10px] phoneP:text-[9px]">
                  +234 815 9531 614
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
