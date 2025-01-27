import Header from "./compheader";
import Porfoliobox from "./porfolioBox";
import { porfolio } from "../constants";

const PorfolioComp = () => {
  return (
    <>
      {" "}
      <section className="ftco-section ftco-portfolio bg-light mt-[4rem]  relative">
        <div className=" bg-[#232429] h-[70vh] absolute w-full -z-10"></div>
        <div className="container pt-[6rem]">
          <Header
            text={" Recent Portfolio"}
            title={
              <>
                We Have Done <br />
                Many Latest Projects
              </>
            }
            textColor={"text-white"}
            btnText={" View All Projects"}
          />
          <div className="portfolio_sections w-[70%] mx-auto grid grid-cols-3 gap-6  mt-16 p-1">
            {porfolio.map((item, index) => {
              return <Porfoliobox key={index} bgImage={item.bgImage} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PorfolioComp;
