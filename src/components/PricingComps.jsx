function PricingComps() {
  return (
    <section className="bg-[#F4F5F9] min-h-screen flex items-center phoneL:py-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 px-4 phoneL:items-start">
        {/* Logo */}
        <header>
          <h1
          data-aos="fade-up"
           className="leading-[38px] font-bold phoneS:text-3xl tablet:text-5xl wide:text-7xl">
            <span className="text-webpurple">Gem</span>
            <span className="text-black">Academy</span>
          </h1>
        </header>

        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold leading-tight phoneS:text-lg">
            Build skills from your comfort zone.
          </h2>
          <div className="flex laptop:flex-row phoneL:flex-col">
            <div>
              <p className="text-lg text-gray-700 max-w-xl phoneL:text-base">
                Be among the first to experience this, subscribe to our
                newsletter and get notified when we launch on the 1st of
                September, 2025.
              </p>
            </div>
            <div>
              <div class="loader"></div>
            </div>
          </div>
          <div className="relative overflow-hidden group w-fit">
            {/* Main button */}
            <button className="btn btn_view w-full rounded-md px-[12px] uppercase tracking-[1px] py-[14px] bg-webpurple text-white border-none cursor-pointer text-[13px] font-bold laptop:text-[11px] laptop:px-[11px] laptop:py-[12px] tablet:px-[15px] tablet:py-[15px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px]">
              Join the Waitlist
            </button>

            {/* Slide-in on hover */}
            <button className="btn btn_view absolute inset-0 w-full rounded-md px-[12px] uppercase tracking-[1px] py-[14px] bg-black text-white flex items-center justify-center -translate-x-full group-hover:translate-x-0 transition-transform duration-300 border-none cursor-pointer text-[13px] font-bold laptop:text-[11px] laptop:px-[11px] laptop:py-[12px] tablet:px-[10px] tablet:py-[11px] phoneL:px-[10px] phoneL:py-[10px] phoneL:text-[9px]">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingComps;

// import Prices from "./Prices";
// import img1 from "../assets/images/ximage_2.jpg.pagespeed.ic.fDt7QyzCfC.jpg";
// import img2 from "../assets/images/ximage_3.jpg.pagespeed.ic.CzImA-z_Ch.jpg";
// import img3 from "../assets/images/ximage_1.jpg.pagespeed.ic.2BInOJMs0v.jpg";

// function PricingComps() {
//   return (
//     <section className=" bg-[#F4F5F9] h-[130vh]   flex justify-center items-center phoneL:h-auto phoneL:py-8">
//       <div className="prices_content flex flex-col gap-8">
//         <header className="text-center ">
//           <h2 className="font-semibold text-webpurple leading-[23px] text-[14px] uppercase phoneP:text-[12px]">
//             Pricing
//           </h2>
//           <h1 className="font-bold leading-[48px]  text-[34px] tracking-[3px] uppercase tablet:text-[28px] tablet:tracking-[2px] tablet:leading-[35px] phoneL:text-[24px] phoneL:leading-[30px] phoneP:text-[20px] phoneP:leading-[25px]">
//             Price & Plans
//           </h1>
//         </header>
//         <div className="price_list flex gap-8 justify-center  laptop:gap-2 phoneL:flex-col phoneL:gap-8 phoneL:items-center">
//           <Prices delay="200" img={img1} number={"78"} currentindex={0} />
//           <Prices delay="400" img={img2} number={"88"} currentindex={1} />
//           <Prices delay="600" img={img3} number={"98"} currentindex={2} />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PricingComps;
