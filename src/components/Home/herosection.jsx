const HeroSection = () => {
  return (
    <>
      <section className="hero_section flex items-center">
        <div className="hero_content ml-[16rem] flex flex-col  laptop:ml-[6rem] tablet:ml-[3rem] phoneL:ml-5 phoneP:ml-4">
          <h3 className="text-white leading-[23px] font-bold text-[13px] uppercase tracking-[5px] mb-[10px] tablet:text-[11px] phoneL:text-[10px] phoneL:tracking-[2px] phoneL:mb-[8px]  phoneP:text-[10px] phonep:mb-[6px] phoneP:tracking-[1px] ">
            welcome To Gemamethystng
          </h3>
          <h1 className=" text-white text-[52px] w-[50%] font-bold uppercase tracking-[1px] mb-[20px] leading-[3.5rem] laptop:text-[40px] laptop:w-[60%] laptop:leading-[2.5rem] laptop:mb-[10px] tablet:text-[35px]  tablet:w-[70%] tablet:leading-[2.4rem] tablet:mb-[8px] phoneL:w-[90%] phoneL:text-[25px] phoneL:leading-[1.8rem] phoneL:mb-[6px] phoneP:text-[20px] phoneP:leading-[1.6rem] phoneP:w-full phoneP:mb-[3px]">
            Professinal & Creative Design Solution
          </h1>
          <p className="text-lightwhite font-normal text-[16px] laptop:text-[13px] tablet:text-[12px] phoneL:text-[11px] phoneP:text-[10px] ">
            We listen , we act because we belive you are worth it{" "}
          </p>
          <div className="btn_container  gap-4 flex items-center mt-2 p-2 tablet:gap-2 tablet:p-1 tablet:mt-3 phoneL:mt-2">
            <button className="btn btn_get_started px-[12px] uppercase tracking-[1px] py-[14px] bg-webpurple text-white text-[13px] cursor-pointer font-bold rounded-md laptop:text-[11px] laptop:px-[11px] laptop:py-[12px] tablet:px-[10px] tablet:py-[11px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px] phoneP:text-[8px] phoneP:px-[8px] phoneP:py-[8px]">
              Get Started
            </button>
            <button className="btn btn_view px-[12px] uppercase tracking-[1px] py-[14px] bg-white border-none cursor-pointer text-[13px] font-bold rounded-md  laptop:text-[11px] laptop:px-[11px] laptop:py-[12px]  tablet:px-[10px] tablet:py-[11px]  phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px] phoneP:text-[8px] phoneP:px-[8px] phoneP:py-[8px]">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
