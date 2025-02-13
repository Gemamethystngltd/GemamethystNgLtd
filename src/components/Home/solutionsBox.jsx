const SolutionBox = ({ text, icon }) => {
  return (
    <div
      data-aos="fade-up-right"
      className="Solutions_box w-[250px] h-[240px] box pt-6 px-4 flex   flex-col bg-vantablack gap-6 rounded-lg   laptop:w-[200px] laptop:h-[200px] tablet:w-[150px] tablet:h-[150px] phoneL:w-[180px] phoneL:h-[180px] phoneP:w-[130px] phoneP:h-[130px] "
    >
      <div className="box_header flex justify-end pr-4 phoneP:pr-2">
        {/* <i className={`${icon} text-[4.5rem]   text-webpurple`}></i> */}
        <img
          src={icon}
          data-aos="zoom-in"
          data-aos-delay="600"
          alt="icon"
          className="w-[5rem] h-[4.8rem] laptop:h-[4rem] laptop:w-[4rem] tablet:w-[3rem] tablet:h-[3rem] phoneL:w-[3.4rem] phoneL:h-[3.4rem] phoneP:w-[2.3rem] phoneP:h-[2.3rem]"
        />
      </div>
      <div className="box_content">
        <h2 className="text-white uppercase w-[70%] text-[18px] tracking-[1px] leading-[27px] font-[700] laptop:text-[16px] laptop:leading-[18px]  tablet:text-[14px] tablet:leading-[16px] phoneP:text-[11px] phoneP:leading-[12px]">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default SolutionBox;
