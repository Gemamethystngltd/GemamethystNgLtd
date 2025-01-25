import file from "../assets/icons/documents.png";
import waiter from "../assets/icons/waiter.png";
import service from "../assets/icons/customer-service.png";
import satisfaction from "../assets/icons/customer-satisfaction.png";

const Overlay = () => {
  const data = [
    {
      num: 2,
      text: "Project Completed",
      img: file,
    },
    {
      num: 50,
      text: "our staff",
      img: waiter,
    },
    {
      num: 2,
      text: "Services Provided",
      img: satisfaction,
    },
    {
      num: 1000,
      text: "Happy Customers",
      img: service,
    },
  ];
  return (
    <>
      <section className="overlay relative h-[40vh] mb-[20vh] flex justify-center items-center">
        <div className="black_screen absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="overlay_conatent flex gap-[4rem] z-10 ">
          {data.map((item, index) => {
            return (
              <div key={index} className="overlay_box flex gap-3">
                <div className="box_img_container p-2 w-[5rem] text-center bg-webpurple ">
                  <img src={item.img} />
                </div>
                <div className="box_text">
                  <h2 className="font-bold leading-[58px] text-[32px] text-white ">
                    {item.num}
                  </h2>
                  <h3 className="font-semibold leading-[14px] text-[14px] text-white uppercase">
                    {item.text}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Overlay;
