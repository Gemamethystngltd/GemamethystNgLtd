import Header from "./compheader";

import PorfolioList from "./PorfolioList";

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
          <PorfolioList />
        </div>
      </section>
    </>
  );
};

export default PorfolioComp;
