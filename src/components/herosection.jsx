const HeroSection = () => {
  return (
    <>
      <section className="hero_section flex items-center">
        <div className="hero_content ml-[16rem] flex flex-col">
          <h3 className="text-white leading-[23px] font-bold text-[13px] uppercase tracking-[5px] mb-[10px]">
            welcome To Gemamethystng
          </h3>
          <h1 className=" text-white text-[52px] w-[70%] font-bold uppercase tracking-[1px] mb-[20px] leading-[3.5rem]">
            Professinal & <br></br> Creative Design Solution
          </h1>
          <p className="text-lightwhite font-normal text-[16px] ">
            We listen , we act because we belive you are worth it{" "}
          </p>
          <div className="btn_container  gap-4 flex items-center mt-2 p-2">
            <button className="btn btn_get_started px-[12px] uppercase tracking-[1px] py-[14px] bg-webpurple text-white text-[13px] cursor-pointer font-bold rounded-md">
              Get Started
            </button>
            <button className="btn btn_view px-[12px] uppercase tracking-[1px] py-[14px] bg-white border-none cursor-pointer text-[13px] font-bold rounded-md">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
