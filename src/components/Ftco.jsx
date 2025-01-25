import img1 from "../assets/images/xabout-1.jpg.pagespeed.ic.akjHwrNTaM.jpg";
import lightBuld from "../assets/icons/light-bulb.png";
function Ftco() {
  return (
    <>
      <section className="ftco_section flex relative">
        <div className="img_container flex  w-[50%]">
          <img
            className="w-1/2 ml-auto mr-[4rem] h-full"
            src={img1}
            alt="about"
          />
        </div>

        <div className="ftco_text_container w-1/2 flex flex-col p-8 justify-center  gap-4">
          <h3 className="uppercase font-semibold leading-[23px] text-[13px] text-webpurple">
            Welcome to Gemamethystng
          </h3>
          <h1 className="font-bold uppercase tracking-[3px] text-[34px] leading-[48px]">
            Highest
            <br /> Creative Standards
          </h1>
          <p className="text-[16px] w-[70%] font-normal leading-[25px] text-[#999999]">
            To revolutionize project management and operational efficiency for
            SMEs by delivering AI-powered and data-driven tools, while
            empowering students and startups in the AEC and Oil & Gas industries
            through world-class training, practical guidance, and innovative
            resources, fostering sustainable growth and impactful careers.
          </p>
        </div>

        <div className="absolute bg-webpurple bottom-[1rem] right-[45%] translate-x-[50%] w-[20%] p-4 flex gap-6">
          <div className="ftco_icon ">
            <div className="bg-black rounded-full  p-4">
              <img className="w-[50px] " src={lightBuld} alt="lightbulb" />
            </div>

            {/* <i className="fa-regular text-[30px] fa-lightbulb bg-black text-white rounded-full  p-5"></i> */}
          </div>
          <div className="ftco_text flex flex-col gap-1">
            <h2 className="font-bold leading-[32px] text-[32px] text-white ">
              3
            </h2>
            <h3 className="text-[12px] leading-[14px] font-bold text-white uppercase">
              Years <br />
              of Experience
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ftco;
