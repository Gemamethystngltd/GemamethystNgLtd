const Header = ({ text, title, btnText, textColor }) => {
  return (
    <header className="team_header  flex justify-between items-center w-[70%] mx-auto   lg:w-[80%] md:w-[90%]  m:w-[95%]  ">
      <div className="header_team_text flex flex-col gap-4 m:gap-2">
        <h3 className=" text-[13px] text-webpurple leading-[23px] uppercase font-semibold lg:text-[11px] ">
          {text}
        </h3>
        <h1
          className={`font-bold leading-[48px] uppercase text-[34px] tracking-[3px] lg:tracking-[2px] ${textColor} lg:leading-[38px] lg:text-[28px] m:text-[18px] m:leading-[30px] m:tracking-[1px]`}
        >
          {title}
        </h1>
      </div>
      <div className="team_btn">
        <button className=" border-2  border-webpurple p-2 text-webpurple text-[12px] leading-[22px] font-bold uppercase lg:text-[10px] lg:p-1 m:text-[8px] ">
          {btnText}
        </button>
      </div>
    </header>
  );
};

export default Header;
