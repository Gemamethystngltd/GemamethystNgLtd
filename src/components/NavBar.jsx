function NavBar() {
  return (
    <nav className="flex justify-around absolute w-full items-center  bg-white/20 backdrop-blur-[1px] top-10 py-7 px-[2rem]">
      <div className="logo_container ">
        <h1 className="text-[24px] leading-[28px] text-white font-bold">
          <span className="text-webpurple">Gem</span>amethystng
        </h1>
      </div>
      <ul className="nav_links flex gap-16 items-center text-[1.05rem] font-semibold">
        <li className="links text-[18px] leading-[27px] font-medium ">Home</li>
        <li className="links text-[18px] leading-[27px] font-medium ">About</li>
        <li className="links text-[18px] leading-[27px] font-medium ">
          Pricing
        </li>
        <li className="links text-[18px] leading-[27px] font-medium ">
          Porfoio
        </li>

        <button className="btn btn_shop cursor-pointer transition-all hover:scale-110 duration-300 ease-in-out  px-4 rounded-[.4rem] bg-webpurple tracking-[1px] font-medium text-[15px] uppercase  text-white py-2 ">
          AMETHSHOP
        </button>
      </ul>
    </nav>
  );
}

export default NavBar;
