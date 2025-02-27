const Porfoliobox = ({ bgImage, tiitle, description }) => {
  return (
    <div
      data-aos="fade-up"
      style={{
        background: `url(${bgImage}) `,
      }}
      className={` relative group project_wrap_image img d-flex align-items-end  h-[340px] rounded-md  shadow-lg  tablet:h-[300px] phoneL:h-[320px] phoneL:w-[90%] `}
    >
      <span className="bg-gradient-to-b from-black to-gray-800 absolute inset-0 opacity-65 origin-top scale-y-0 transition-all  duration-300 group-hover:scale-y-50 "></span>
      <span className="bg-gradient-to-t from-black to-gray-800 absolute inset-0 opacity-65 origin-bottom scale-y-0 transition-all  duration-[600ms] group-hover:scale-y-50 "></span>
      <div className="text">
        <span>{tiitle}</span>
        <h3>
          <a href="portfolio-single.html">{description}</a>
        </h3>
        <a
          href="portfolio-single.html"
          className="icon d-flex align-items-center justify-content-center"
        ></a>
      </div>
      <div className="absolute opacity-0 flex justify-between items-center w-full  bottom-0  p-4 transition-all duration-300 group-hover:opacity-100">
        <div className="flex flex-col gap-1 ">
          <h2 className="text-[12px] font-semibold leading-[22px] text-webpurple uppercase">
            Web Aplication
          </h2>
          <h1 className="text-[20px] font-bold leading-[30px] uppercase text-white ">
            interioir design
          </h1>
        </div>
        <div className="rounded-full px-4 py-2 bg-webpurple ">
          <i className="fa-solid fa-chevron-right text-[18px] text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default Porfoliobox;
