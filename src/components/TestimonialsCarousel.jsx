import Slider from "react-slick";
import { testimonials } from "../constants";

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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile adjustments
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-lg  flex gap-2  overflow-hidden h-auto"
          >
            <div className="flex flex-col rounded-lg w-[550px]   h-[215px] px-4 ml-4 mb-2  bg-[#ffff]  shadow-lg">
              <div className="quote_section">
                <p className="text-gray-700 text-base md:text-lg  block sm:mt-8 mt-8  mr-6 text-wrap lg:leading-8 overflow-hidden">
                  {testimonial.quote}
                </p>
              </div>
              <div className="testimonail_content mt-4 ml-4 flex items-center">
                <div className="Testimonail_img_container">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 mt-4 ml-4 overflow-clip"
                  />
                </div>
                <div className="testimonail_text flex flex-col justify-between gap-3 ">
                  <div className="flex flex-col ">
                    <div className="star_container">
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px]"></i>
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px]"></i>
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px]"></i>
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px]"></i>
                      <i className="fa-solid fa-star text-webpurple text-[12px] leading-[12px]"></i>
                    </div>
                    <h3 className="leading-[32px]text-[18px] font-semibold">
                      {testimonial.name}
                    </h3>
                  </div>

                  <p className="font-semibold text-[12px] leading-[22px] text-webpurple">
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
