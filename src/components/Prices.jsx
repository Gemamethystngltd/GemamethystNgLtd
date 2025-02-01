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
    <div className="prices w-[23%] shadow-lg rounded-md overflow-hidden ">
      <header>
        <img src={img} className="w-full h-full" />
      </header>
      <ul className="price_benefits py-8 px-6 flex bg-white flex-col gap-4">
        {pricedata[currentindex].map((price, index) => {
          return (
            <li
              key={index}
              className="flex gap-3 font-normal terxt-[16px] leading-[29px] "
            >
              <span>
                <i className="fa-solid fa-circle-check text-webpurple"></i>
              </span>
              {price}
            </li>
          );
        })}
      </ul>
      <footer className="flex items-center pt-4 gap-4 bg-[#F3F4F8]  justify-between px-10">
        <div className="amount">
          <sup className="text-[24px] font-normal">$</sup>
          <span className="text-[40px] font-bold">{number}</span>
          <sub className="text-[16px] font-normal">/mon</sub>
        </div>
        <button className="font-semibold leading-[20px] text-[13px uppercase] outline py-4 px-6 rounded-[4px] bg-webpurple text-white">
          Get Started
        </button>
      </footer>
    </div>
  );
}

export default Prices;
