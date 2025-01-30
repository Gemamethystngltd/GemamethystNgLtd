import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import teamMemeber1 from "../../assets/images/team1.png";
import teamMemeber2 from "../../assets/images/team2.jpg";
import teamMemeber3 from "../../assets/images/team3.jpg";
import teamMemeber4 from "../../assets/images/team4.jpg";
import teamMemeber5 from "../../assets/images/team5.jpg";

function TeamMemebers() {
  const images = [
    teamMemeber1,
    teamMemeber2,
    teamMemeber3,
    teamMemeber4,
    teamMemeber5,
  ];
  let swiperInstance = null;

  const handleMouseEnter = () => {
    if (swiperInstance) swiperInstance.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperInstance) swiperInstance.autoplay.start();
  };
  return (
    <>
      <div className="slider-container  w-[80%] mx-auto md:w-[90%]">
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500 }}
          loop
          onSwiper={(swiper) => {
            swiperInstance = swiper;
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-[500px] lg:h-[400px] md:h-[350px] m:h-[200px]"
            >
              <img
                src={image}
                alt={`Team Member ${index + 1}`}
                className="slider-image w-full h-full object-cover rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default TeamMemebers;
