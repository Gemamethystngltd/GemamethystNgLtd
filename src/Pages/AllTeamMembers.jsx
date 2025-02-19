import img1 from "../assets/images/CEO.png";
import img2 from "../assets/images/daniel.jpg";
import img3 from "../assets/images/ella.jpg";
import img4 from "../assets/images/bgImg1.png";

import { Link } from "react-router-dom";

function AllTeamMembers() {
  const imageList = [
    { img: img1, alt: "Placeholder Image 1" },
    { img: img1, alt: "Placeholder Image 2" },
    { img: img1, alt: "Placeholder Image 3" },
    { img: img4, alt: "Placeholder Image 4" },
    { img: img1, alt: "Placeholder Image 5" },
    { img: img1, alt: "Placeholder Image 6" },
    { img: img1, alt: "Placeholder Image 7" },
    { img: img1, alt: "Placeholder Image 8" },
  ];

  return (
    <main className=" h-screen flex flex-col items-center">
      <Link to="/">
        <i className="fa-solid fa-circle-left text-[2rem] fixed top-[1rem] left-[1rem] text-webpurple animate-bounce"></i>
      </Link>
      <div className="flex flex-col items-center mt-[2rem]">
        <h1 className="font-bold text-[30px] leading-[16px]">
          OUR LEADERSHIP TEAM
        </h1>
        <h2 className="text-[18px] leading-[23px] text-center w-[100%] mt-4">
          With over 40 years of combined experience, we have got a well-seasoned
          team at the helm
        </h2>
      </div>

      <div className="team-members grid grid-cols-4 gap-4 mt-8  p-8">
        {imageList.map((item, index) => {
          return (
            <div key={index} className="team-member outline h-[80%]">
              <img
                src={item.img}
                alt={item.alt}
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default AllTeamMembers;
