import { useState } from "react";
import teamMemeber1 from "../assets/images/team1.png";
import teamMemeber2 from "../assets/images/team2.jpg";
import teamMemeber3 from "../assets/images/team3.jpg";
import teamMemeber4 from "../assets/images/team4.jpg";
import teamMemeber5 from "../assets/images/team5.jpg";

function TeamMemebers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    teamMemeber1,
    teamMemeber2,
    teamMemeber3,
    teamMemeber4,
    teamMemeber5,
  ];
  const handlenext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const handleprev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  return (
    <>
      {" "}
      <div className="slider-container">
        <div className="slider_container flex gap-3">
          {/* Display the current image */}
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="slider-image w-[20%]"
          />
          <img
            src={images[currentIndex + 1]}
            alt={`Slide ${currentIndex}`}
            className="slider-image w-[20%]"
          />
          <img
            src={images[currentIndex + 2]}
            alt={`Slide ${currentIndex}`}
            className="slider-image w-[20%]"
          />
        </div>

        {/* Navigation buttons */}
        <button onClick={handleprev} className="slider-button">
          Previous
        </button>
        <button onClick={handlenext} className="slider-button">
          Next
        </button>

        {/* Optional: Dots for navigation */}
        <div className="slider-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default TeamMemebers;
