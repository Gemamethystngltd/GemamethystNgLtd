function Prices({ currentindex, img, number }) {
  const pricedata = [
    [
      "Planning Solution",
      "10 Construction Drawings",
      "Selection Materials",
      " Unlimited Revision",
    ],
    [
      "Complete Interior Design",
      "3D Architectural Rendering",
      "Personalized Color Consultation",
      "Project Budget Estimation",
    ],
    [
      "Home Automation Setup",
      "Energy-Efficient Lighting Installation",
      "Smart Security System Integration",
      "Voice-Controlled Devices",
    ],
  ];
  return (
    <div className="prices w-[23%] shadow-lg rounded-md overflow-hidden laptop:w-[30%] tablet:w-[35%] phoneL:w-[80%] phoneP:w-[85%]">
      <header>
        <img src={img} className="w-full h-full" />
      </header>
      <ul className="price_benefits py-8 px-6 flex bg-white flex-col gap-4 laptop:gap-2 laptop:py-7 laptop:px-4 tablet:gap-1 tablet:py-4 tablet:px-3 phoneP:gap-1 phoneP:py-4 phoneP:px-2">
        {pricedata[currentindex].map((price, index) => {
          return (
            <li
              key={index}
              className="flex gap-3 font-normal text-[16px] leading-[29px] laptop:text-[14px] tablet:text-[12px] phoneL:leading-[20px] phoneL:text-[11px] "
            >
              <span>
                <i className="fa-solid fa-circle-check text-webpurple"></i>
              </span>
              {price}
            </li>
          );
        })}
      </ul>
      <footer className="flex items-center pt-4 gap-4 bg-[#F3F4F8]  justify-between px-10 tablet:px-6 laptop:px-4 phoneL:pb-2">
        <div className="amount">
          <sup className="text-[24px] font-normal tablet:text-[20px] ">$</sup>
          <span className="text-[40px] font-bold laptop:text-[35px] tablet:text-[28px] phoneP:text-[25px]">
            {number}
          </span>
          <sub className="text-[16px] font-normal laptop:text-[14px] tablet:text-[12px]">
            /mon
          </sub>
        </div>
        <button className="font-semibold leading-[20px] text-[13px] uppercase outline py-4 px-6 rounded-[4px] bg-webpurple text-white laptop:text-[12px] laptop:py-3 laptop:px-4 tablet:text-[10px]  tablet:py-2 tablet:px-4 phoneL:text-[9px] phoneP:py-2 phoneP:px-3">
          Get Started
        </button>
      </footer>
    </div>
  );
}

export default Prices;
