import { useState } from "react";
import img2 from "../assets/images/xabout-2.jpg.pagespeed.ic.GABFWe5WUO.jpg";
import { faqs } from "../constants";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section className="flex bg-[#f4f5f9] ">
        <div className="faq_text_container flex flex-col  justify-center p-4 w-1/2">
          <div className="fa_text_content w-[70%] self-end mt-16">
            <header className="faq_header flex flex-col gap-8 ">
              <h2 className=" font-semibold leading-[23px] text-[13px] text-webpurple uppercase">
                Frequently Asked Questions
              </h2>
              <h1 className="text-[34px] leading-[48px] font-bold text-[black] uppercase tracking-[3px]">
                Frequently
                <br /> Asked Questions?
              </h1>
            </header>

            <div className="flex gap-3 flex-col mt-10 ">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="faq_container_box w-full   max-w-2xl   h-auto "
                >
                  <button
                    className={`fa_btn w-full  border border-1 shadow-md text-left py-5 px-4   ${
                      activeIndex === index ? "bg-webpurple" : "bg-[#ffff]"
                    } `}
                    onClick={() => handleToggle(index)}
                  >
                    <div className="flex justify-between items-center overflow-hidden">
                      <span
                        className={`faq-question text-[18px] leading-[27px] font-normal ${
                          activeIndex === index ? "text-white" : "text-black"
                        }  uppercase`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={` ${
                          activeIndex === index
                            ? "text-white"
                            : "text-[#B2B2B2]"
                        }   font-semibold text-[18px]   py-1 pr-1`}
                      >
                        {activeIndex === index ? (
                          <i className="fa-solid fa-chevron-down"></i>
                        ) : (
                          <i className="fa-solid fa-chevron-up"></i>
                        )}
                      </span>
                    </div>
                  </button>
                  <div
                    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                      activeIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {activeIndex === index && (
                      <div className="py-2 px-3 faq_answer  text-gray-600 bg-white h-auto rounded-b-lg ">
                        <ol className="list-decimal p-2">
                          {faq.answer.map((ans, i) => {
                            return (
                              <li
                                className="py-2 text-[16px] text-black leading-[29px] font-normal"
                                key={i}
                              >
                                {ans}
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="faq_img_container p-8 w-1/2">
          <div className="faq_img_content w-[70%] flex flex-col gap-10">
            <hewader>
              <img src={img2} alt="img" className="object-cover" />
            </hewader>
            <div className="faq_img_text flex flex-col gap-16">
              <h1 className="text-[32px] leading-[48px] font-bold text-[black] uppercase tracking-[1px]">
                We Are Very <br />
                Experienced & Professionals
              </h1>
              <div className="faq_progress flex flex-col gap-8">
                {/* individual sections */}
                <div className="faq_progress_bar_container flex  flex-col gap-2 w-full">
                  <div className="faq_progress_bar_header flex justify-between ">
                    <h2 className="font-bold uppercase text-[14px] leading-[21px] ">
                      Creative Design
                    </h2>
                    <h2 className="text-[16px] pr-[5%] font-bold leading-[19px] text-webpurple ">
                      95%
                    </h2>
                  </div>
                  <progress
                    className="w-full h-[5px] bg-[#E6E6E6] rounded-lg"
                    value="95"
                    max="100"
                  ></progress>
                </div>
                <div className="faq_progress_bar_container flex  flex-col gap-2 w-full">
                  <div className="faq_progress_bar_header flex justify-between ">
                    <h2 className="font-bold uppercase text-[14px] leading-[21px] ">
                      Product Engineering
                    </h2>
                    <h2 className="text-[16px] pr-[15%] font-bold leading-[19px] text-webpurple ">
                      85%
                    </h2>
                  </div>
                  <progress
                    className="w-full h-[5px] bg-[#E6E6E6] rounded-lg"
                    value="85"
                    max="100"
                  ></progress>
                </div>
                <div className="faq_progress_bar_container flex  flex-col gap-2 w-full">
                  <div className="faq_progress_bar_header flex justify-between ">
                    <h2 className="font-bold uppercase text-[14px] leading-[21px] ">
                      Marketing Strategy
                    </h2>
                    <h2 className="text-[16px] pr-[5%] font-bold leading-[19px] text-webpurple ">
                      95%
                    </h2>
                  </div>
                  <progress
                    className="w-full h-[5px] bg-[#E6E6E6] rounded-lg"
                    value="95"
                    max="100"
                  ></progress>
                </div>

                <div className="faq_progress_bar_container flex  flex-col gap-2 w-full">
                  <div className="faq_progress_bar_header flex justify-between ">
                    <h2 className="font-bold uppercase text-[14px] leading-[21px] ">
                      Support Tips
                    </h2>
                    <h2 className="text-[16px] pr-[10%] font-bold leading-[19px] text-webpurple ">
                      90%
                    </h2>
                  </div>
                  <progress
                    className="w-full h-[5px] bg-[#E6E6E6] rounded-lg"
                    value="90"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
