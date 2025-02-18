import { Link } from "react-router-dom";
const Header = ({ text, title, btnText, textColor, linkto }) => {
  return (
    <header
      data-aos="fade-up"
      className="team_header  flex justify-between items-center w-[70%] mx-auto   laptop:w-[80%] phoneL:w-[90%]  phoneP:w-[95%]  "
    >
      <div className="header_team_text flex flex-col gap-4 ">
        <h3 className=" text-[13px] text-webpurple leading-[23px] uppercase font-semibold laptop:text-[11px] ">
          {text}
        </h3>
        <h1
          className={`font-bold leading-[48px] uppercase text-[34px] tracking-[3px] laptop:tracking-[2px] ${textColor} laptop:leading-[38px] laptop:text-[28px] phoneL:text-[18px] phoneL:leading-[30px] phoneL:tracking-[1px] phoneP:text-[14px] phoneP:leading-[20px]`}
        >
          {title}
        </h1>
      </div>
      <div className="team_btn">
        <Link to={linkto}>
          <button className=" border-2  border-webpurple p-2 text-webpurple text-[12px] leading-[22px] font-bold uppercase laptop:text-[10px] laptop:p-1 phoneL:text-[8px] ">
            {btnText}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
