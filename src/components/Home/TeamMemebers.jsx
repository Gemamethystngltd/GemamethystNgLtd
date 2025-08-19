import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import { useRef, useState } from "react";
import "yet-another-react-lightbox/styles.css";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { teamData } from "../../constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


function TeamMemebers() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const swiperRef = useRef(null);
  

  const handleMouseEnter = () => {
    if (swiperRef.current) swiperRef.current.autoplay.stop();
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) swiperRef.current.autoplay.start();
  };
  return (
    <>
      <div className="slider-container w-[80%] mx-auto phoneL:w-[90%]">
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
          {teamData.map((team, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="!h-[500px] relative laptop:h-[400px] phoneL:h-[500px] group phoneP:h-[400px]"
            >
              {/* gradient hover overlays */}
              <span
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                className="bg-gradient-to-b from-white to-webpurple absolute inset-0 opacity-65 origin-top scale-y-0 transition-all duration-300 group-hover:scale-y-50"
              ></span>
              <span
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                className="bg-gradient-to-t from-white to-webpurple absolute inset-0 opacity-65 origin-bottom scale-y-0 transition-all duration-[600ms] group-hover:scale-y-50"
              ></span>

              {/* team image */}
              <img
                src={team.image}
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                alt={`Team Member ${index + 1}`}
                className="slider-image w-full h-full object-cover rounded-md cursor-pointer"
              />

              {/* team info */}
              <div
                onClick={() => {
                  swiperRef.current?.autoplay.stop();
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
                className="absolute z-30 opacity-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 transition-all duration-[600ms] group-hover:opacity-100 cursor-pointer"
              >
                <header className="flex flex-col justify-center items-center gap-2">
                  <h2 className="text-white uppercase text-[25px] font-bold text-center">
                    {team.name}
                  </h2>
                  <h3 className="font-normal text-white uppercase">
                    {team.role}
                  </h3>
                </header>

                <div className="social_media flex gap-3 justify-center items-center">
                  {team.socialMedia.map((social, i) => (
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={i}
                    >
                      <i
                        className={`fa-brands ${social.icon} text-white bg-webpurple p-3 cursor-pointer rounded-full text-[14px] tablet:p-[.6rem] tablet:text-[12px] phoneP:p-[.5rem] phoneP:text-[11px]`}
                      ></i>
                    </a>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={teamData.map((member) => ({ src: member.image }))}
            index={photoIndex}
            on={{
              clickPrev: () =>
                setPhotoIndex(
                  (photoIndex - 1 + teamData.length) % teamData.length
                ),
              clickNext: () =>
                setPhotoIndex((photoIndex + 1) % teamData.length),
            }}
          />
        )}
      </div>
    </>
  );
}

export default TeamMemebers;
