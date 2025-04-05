import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navData = [
    { linkto: "/about", name: "About", icon: "fa-solid fa-user-group" },
    {
      linkto: "/pricing",
      name: "Pricing",
      icon: "fa-solid fa-hand-holding-dollar",
    },
    { linkto: "/portfolio", name: "Portfolio", icon: "fa-solid fa-briefcase" },
    { linkto: "/blog", name: "Blog", icon: "fa-solid fa-blog" },
    { linkto: "/contact", name: "Contact", icon: "fa-solid fa-phone" },
  ];
  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-around flex-wrap absolute w-full items-center  bg-white/20 backdrop-blur-[1px] top-10 py-4 px-[2rem] laptop:px-[1rem] laptop:justify-between phoneL:py-3 phoneP:py-2">
      <div className="logo_container ">
        <Link to="/">
          {" "}
          <h1 className="text-[24px] leading-[28px] text-white font-bold phoneL:text-[20px] phoneP:text-[15px] ">
            <span className="text-webpurple">Gem</span>amethystng
          </h1>
        </Link>
      </div>
      <ul className="nav_links flex gap-16 items-center  font-semibold laptop:gap-10 tablet:gap-7 phoneL:hidden phoneS:gap-5 phoneS:items-end">
        {navData.map((data, index) => {
          return (
            <li
              key={index}
              className="links text-[15px] leading-[27px] font-medium  laptop:text-[14px] tablet:text-[12px]"
            >
              <NavLink to={`${data.linkto}`}>{data.name}</NavLink>
            </li>
          );
        })}

        <button className="btn btn_shop cursor-pointer transition-all hover:scale-110 duration-300 ease-in-out  px-4 rounded-[.4rem] bg-webpurple tracking-[1px] font-medium text-[15px] uppercase  text-white py-2 laptop:text-[13px] tablet:text-[11px] ">
          GEMACADEMY
        </button>
      </ul>
      <div className="hamburger hidden phoneL:block" onClick={toggleNavBar}>
        <i className="fa-solid fa-bars  text-[1.4rem] text-lightwhite phoneL:text-[1.2rem] phoneP:text-[1rem] "></i>
      </div>
      {isOpen && (
        <div className=" hidden basis-full mt-6 phoneL:block phoneP:mt-4">
          <ul className="nav_links flex-col flex gap-2 items-center font-semibold  ">
            {navData.map((data, index) => {
              return (
                <div key={index} className=" w-[20%] flex items-center gap-3">
                  <i
                    className={` ${data.icon} text-white text-[14px] phoneP:text-[13px]`}
                  ></i>
                  <li className="links text-[15px] leading-[27px] font-medium  laptop:text-[14px] tablet:text-[12px] phoneL:text-[13px] phoneP:text-[12px]">
                    <NavLink to={`${data.linkto}`}>{data.name}</NavLink>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
