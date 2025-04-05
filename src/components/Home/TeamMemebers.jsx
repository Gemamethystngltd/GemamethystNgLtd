import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import { useRef, useState } from "react";
import "yet-another-react-lightbox/styles.css";
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
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const swiperRef = useRef(null);
  const images = [
    teamMemeber1,
    teamMemeber2,
    teamMemeber3,
    teamMemeber4,
    teamMemeber5,
  ];

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };
  const teamData = [
    {
      name: "Ohore Emmaneul",
      role: "Frontend Developer",
      socialMedia: [
        "fa-linkedin-in",
        "fa-google",
        "fa-facebook-f , fa-x-twitter",
        "fa-instagram",
      ],
    },
    {
      name: "Ohore Emmaneul",
      role: "Frontend Developer",
      socialMedia: [
        "fa-linkedin-in",
        "fa-google",
        "fa-facebook-f , fa-x-twitter",
        "fa-instagram",
      ],
    },
    {
      name: "Ohore Emmaneul",
      role: "Frontend Developer",
      socialMedia: [
        "fa-linkedin-in",
        "fa-google",
        "fa-facebook-f , fa-x-twitter",
        "fa-instagram",
      ],
    },
    {
      name: "Ohore Emmaneul",
      role: "Frontend Developer",
      socialMedia: [
        "fa-linkedin-in",
        "fa-google",
        "fa-facebook-f , fa-x-twitter",
        "fa-instagram",
      ],
    },
    {
      name: "Ohore Emmaneul",
      role: "Frontend Developer",
      socialMedia: [
        "fa-linkedin-in",
        "fa-google",
        "fa-facebook-f , fa-x-twitter",
        "fa-instagram",
      ],
    },
  ];
  return (
    <>
      <div className="slider-container  w-[80%] mx-auto phoneL:w-[90%]">
        <Swiper
          modules={[Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500 }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            500: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="!h-[500px] relative laptop:h-[400px] phoneL:h-[500px] group  phoneP:h-[400px]"
            >
              <span
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                className="bg-gradient-to-b from-white  to-webpurple absolute inset-0 opacity-65 origin-top scale-y-0 transition-all  duration-300 group-hover:scale-y-50 "
              ></span>
              <span
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                className="bg-gradient-to-t from-white  to-webpurple absolute inset-0 opacity-65 origin-bottom scale-y-0 transition-all  duration-[600ms] group-hover:scale-y-50 "
              ></span>

              <img
                src={image}
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                alt={`Team Member ${index + 1}`}
                className="slider-image  w-full h-full object-cover rounded-md cursor-pointer"
              />
              {/* team member information */}
              {teamData.map((team, index) => {
                return (
                  <div
                    onClick={() => {
                      swiperRef.current?.autoplay.stop();
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                    key={index}
                    className="absolute z-30 opacity-0  left-[50%] cursor-pointer translate-x-[-50%] top-[50%] translate-y-[-50%] flex flex-col gap-4 transition-all duration-[600ms] group-hover:opacity-100  "
                  >
                    <header className="flex flex-col justify-center items-center gap-2 ">
                      <h2 className="text-[white]  uppercase text-[25px] font-bold text-center">
                        {team.name}
                      </h2>
                      <h3 className="font-normal text-[white] uppercase">
                        {team.role}
                      </h3>
                    </header>

                    <div className="social_media flex gap-3 justify-center items-center ">
                      {team.socialMedia.map((icon, index) => {
                        return (
                          <i
                            key={index}
                            className={`fa-brands ${icon} text-white bg-webpurple p-3 cursor-pointer rounded-full text-[14px] tablet:p-[.6rem] tablet:text-[12px] phoneP:p-[.5rem] phoneP:text-[11px]`}
                          ></i>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </SwiperSlide>
          ))}
        </Swiper>
        {isOpen && (
          <div>
            <Lightbox
              open={isOpen}
              close={() => setIsOpen(false)}
              slides={images.map((src) => ({ src }))}
              index={photoIndex}
              on={{
                clickPrev: () =>
                  setPhotoIndex(
                    (photoIndex - 1 + images.length) % images.length
                  ),
                clickNext: () =>
                  setPhotoIndex((photoIndex + 1) % images.length),
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default TeamMemebers;
