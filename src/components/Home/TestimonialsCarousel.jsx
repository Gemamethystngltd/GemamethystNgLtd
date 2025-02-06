import Slider from "react-slick";
import { testimonials } from "../../constants";

function TestimonialsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: "150px",
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Adjust for smaller screens
        settings: {
          centerPadding: "120px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800, // Mobile adjustments
        settings: {
          slidesToShow: 1.2,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 500, // Mobile adjustments
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="rounded-lg  flex gap-2 p-2  h-auto ">
            <div className="flex flex-col rounded-lg w-[550px] justify-between   h-[215px] px-4 ml-4 mb-2  bg-[#ffff]  shadow-lg laptop:h-[160px] laptop:w-[100%] phoneP:h-[120px]    laptop:shadow-md ">
              <div className="quote_section">
                <p className="text-gray-700 text-base  block mt-8   text-wrap laptop:leading-4  laptop:text-[.7rem] laptop:mt-4 tablet:text-[.65rem] phoneP:text-[.5rem] phoneP:leading-3 ">
                  {testimonial.quote}
                </p>
              </div>
              <div className="testimonail_content mt-4 ml-4 flex items-center laptop:mt-2 laptop:ml-2">
                <div className="Testimonail_img_container">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 mt-4 ml-4 overflow-clip laptop:w-12 laptop:h-12 laptop:mt-2 laptop:ml-2 phoneP:w-10 phoneP:h-10 phoneP:mt-1 phoneP:ml-1"
                  />
                </div>
                <div className="testimonail_text flex flex-col justify-between gap-3 laptop:gap-1 phoneP:gap-0 ">
                  <div className="flex flex-col ">
                    <div className="star_container">
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px] laptop:text-[10px] laptop:leading-[10px] phoneP:text-[7px]"></i>
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px] laptop:text-[10px] laptop:leading-[10px] phoneP:text-[7px]"></i>
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px] laptop:text-[10px] laptop:leading-[10px] phoneP:text-[7px]"></i>
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px] laptop:text-[10px] laptop:leading-[10px] phoneP:text-[7px]"></i>
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px] laptop:text-[10px] laptop:leading-[10px] phoneP:text-[7px]"></i>
                    </div>
                    <h3 className="leading-[32px] text-[18px] font-semibold laptop:text-[15px] laptop:leading-[18px] phoneL:text-[14px] phoneL:leading-[24px] phoneP:text-[10px] phoneP:leading-[10px]">
                      {testimonial.name}
                    </h3>
                  </div>

                  <p className="font-semibold text-[12px] leading-[22px] text-webpurple laptop:text-[10px] laptop:leading-[20px] phoneP:text-[8px] phoneP:leading-[16px]">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default TestimonialsCarousel;
