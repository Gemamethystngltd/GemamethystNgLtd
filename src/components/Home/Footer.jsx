function Footer() {
  return (
    <footer className=" h-[70vh] flex bg-[#232429]  justify-center  items-center">
      <div className="w-[70%] flex justify-between">
        <div className="company_info w-[27%] flex flex-col gap-6">
          <h1 className="font-bold leading-[30px] text-white  text-[20px] uppercase">
            Gemamethystng
          </h1>
          <div className="flex flex-col gap-3">
            <p className=" text-[#BCBCBE] text-[16px] leading-[23px] font-normal ">
              Far far away, behind the word mountains, far from the
              countries,steady on the internet thats where our heart lies.
            </p>
            <div className="social_media flex gap-3 ">
              <i className="fa-brands fa-linkedin-in text-white bg-webpurple p-3 rounded-full text-[14px]"></i>
              <i className="fa-brands fa-tiktok  text-white bg-webpurple p-3 rounded-full text-[14px]"></i>
              <i className="fa-brands fa-facebook-f  text-white bg-webpurple p-3 rounded-full text-[14px]"></i>
              <i className="fa-brands fa-twitter  text-white bg-webpurple p-3 rounded-full text-[14px]"></i>
            </div>
          </div>
        </div>
        {/* explore */}
        <div className="explore  flex flex-col gap-6">
          <h1 className="uppercase text-[20px] text-white leading-[30px] font-bold">
            Explore
          </h1>
          <ul>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px]">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              About
            </li>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] ">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Contact
            </li>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] ">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Porfolio
            </li>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] ">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Blog
            </li>
          </ul>
        </div>
        {/* Info */}
        <div className="info  flex flex-col gap-6">
          <h1 className="uppercase text-[20px] text-white  leading-[30px] font-bold">
            Info
          </h1>
          <ul>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px]">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Join us
            </li>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] ">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Blog
            </li>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] ">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Privacy & Policy
            </li>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] ">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Term & Conditions
            </li>
          </ul>
        </div>
        {/* Company */}
        <div className="compasny  flex flex-col gap-6">
          <h1 className="uppercase text-white  text-[20px] leading-[30px] font-bold">
            Company
          </h1>
          <ul>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px]">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              About Us
            </li>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] ">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Blog
            </li>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] ">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Contact
            </li>
            <li className="text-[#BCBCBE] text-[16px] font-normal leading-[29px] ">
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              Careers
            </li>
          </ul>
        </div>
        {/* question */}
        <div className="question  flex flex-col gap-6">
          <h1 className="font-bold text-white uppercase leading-[30px] text-[20px]">
            Have a Question?
          </h1>
          <div className="flex flex-col gap-2">
            <div className="question_map flex gap-2 items-center">
              <i className="fa-solid fa-map text-webpurple"></i>
              <p className="text-[#BCBCBE]"> Omu-Aran, Kwara-State</p>
            </div>
            <div className="question_phone flex items-center gap-2">
              <i className="fa-solid fa-phone text-webpurple"></i>
              <p className="text-[#BCBCBE]">+234 815 9531 614</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
