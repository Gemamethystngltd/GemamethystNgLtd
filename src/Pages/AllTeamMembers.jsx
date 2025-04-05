import img1 from "../assets/images/CEO.png";
import img2 from "../assets/images/amarachi.jpg";
import { Link } from "react-router-dom";

function AllTeamMembers() {
  const imageList = [
    { img: img1, alt: "Placeholder Image 1" },
    { img: img2, alt: "Placeholder Image 2" },
  ];

  return (
    <main className="h-screen bg-gradient-to-b from-[#2a2a2a] to-[#f7f7f7] flex flex-col items-center px-6 py-10">
      <Link to="/">
        <i className="fa-solid fa-circle-left text-[2rem] fixed top-[1rem] left-[1rem] text-white hover:text-webpurple transition-colors"></i>
      </Link>

      <div className="text-center mt-[3rem] mb-8">
        <h1
          className="font-extrabold text-[32px] text-white leading-tight mb-3"
          data-aos="fade-up"
        >
          OUR LEADERSHIP TEAM
        </h1>
        <h2
          className="text-[18px] text-white opacity-80 w-[85%] mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          With over 40 years of combined experience, we have a well-seasoned
          team at the helm.
        </h2>
      </div>

      <div className="team-members grid place-items-center grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-full">
        {imageList.map((item, index) => (
          <div
            key={index}
            className="team-member w-[30rem] h-[30rem] relative overflow-hidden rounded-lg shadow-xl transform hover:scale-110 transition-all duration-500 ease-in-out"
          >
            <img
              src={item.img}
              alt={item.alt}
              className="object-cover  w-full h-full transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white z-10 text-sm font-semibold">
              {item.alt}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AllTeamMembers;
