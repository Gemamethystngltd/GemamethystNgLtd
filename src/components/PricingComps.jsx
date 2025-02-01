import Prices from "./Prices";
import img1 from "../assets/images/ximage_2.jpg.pagespeed.ic.fDt7QyzCfC.jpg";
import img2 from "../assets/images/ximage_3.jpg.pagespeed.ic.CzImA-z_Ch.jpg";
import img3 from "../assets/images/ximage_1.jpg.pagespeed.ic.2BInOJMs0v.jpg";

function PricingComps() {
  return (
    <section className=" bg-[#F4F5F9] h-[130vh]   flex justify-center items-center">
      <div className="prices_content">
        <header className="text-center">
          <h2 className="font-semibold text-webpurple leading-[23px] text-[14px] uppercase">
            Pricing
          </h2>
          <h1 className="font-bold leading-[48px]  text-[34px] tracking-[3px] uppercase">
            Price & Plans
          </h1>
        </header>
        <div className="price_list flex gap-8 justify-center">
          <Prices img={img1} number={"78"} currentindex={0} />
          <Prices img={img2} number={"88"} currentindex={1} />
          <Prices img={img3} number={"98"} currentindex={2} />
        </div>
      </div>
    </section>
  );
}

export default PricingComps;
