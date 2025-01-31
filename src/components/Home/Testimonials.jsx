import TestimonialsCarousel from "./TestimonialsCarousel";
const Testimonails = () => {
  return (
    <section className="testimonail_section mt-[10rem] flex flex-col gap-9">
      <header className="team_header  flex justify-between items-center w-[70%] mx-auto   lg:w-[80%] md:w-[90%]  m:w-[95%]  ">
        <div className="header_team_text flex flex-col gap-2 m:gap-1">
          <h3 className=" text-[13px] text-webpurple leading-[23px] uppercase font-semibold lg:text-[11px] ">
            {" "}
            Testimonial
          </h3>
          <h1
            className={`font-bold leading-[48px] uppercase text-[34px] tracking-[3px] lg:tracking-[2px]  lg:leading-[38px] lg:text-[28px] m:text-[18px] m:leading-[30px] m:tracking-[1px]`}
          >
            People Say <br></br> About Our Works
          </h1>
        </div>
      </header>

      <div className=" overflow-hidden h-[35vh]">
        <TestimonialsCarousel />
      </div>
    </section>
  );
};

export default Testimonails;
