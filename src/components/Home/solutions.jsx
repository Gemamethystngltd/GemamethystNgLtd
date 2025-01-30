import SolutionBox from "./solutionsBox";
import { services } from "../../constants";
const Solutions = () => {
  return (
    <>
      <setion className="solutions_sections flex ">
        <div className="Solutions_content grid mx-auto w-[70%] gap-4 place-items-center grid-cols-4 py-[7rem]    ">
          <div className="solutions_header col-span-2">
            <h2 className="text-white tracking-[1px] uppercase text-[34px] leading-[48px] font-bold ">
              We Shape <br /> The Perfect Solutions
            </h2>
            <p className="text-[#999999] font-normal text-[16px] leading-[29px]">
              By driving innovation and efficiency at the intersection of
              technology and the AEC & Oil & Gas industries, we aim to create a
              future where every project succeeds, and every individual thrives.
            </p>
          </div>
          {services.map((service, index) => {
            return (
              <SolutionBox
                key={index}
                text={service.text}
                icon={service.serviceicon}
              />
            );
          })}
        </div>
      </setion>
    </>
  );
};

export default Solutions;
