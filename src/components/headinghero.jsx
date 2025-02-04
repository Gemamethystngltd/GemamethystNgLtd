const Subhero = ({ page }) => {
  return (
    <>
      <section className="sub_hero_section relative flex items-end h-[85vh] p-8 ">
        <div className="inset-0 bg-[#232429] opacity-50 absolute "></div>
        <div className="sub_hero_content flex flex-col gap-4 ml-[10%] z-10 ">
          <header>
            <h1 className="text-[#D9D9DA] flex gap-1">
              Home
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
              {page}
              <span>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </h1>
          </header>
          <h2 className="uppercase text-[50px] leading-[60px] font-bold text-white">
            {page}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Subhero;
