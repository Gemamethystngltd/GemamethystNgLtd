import { contacData } from "../constants";
function ContactContent() {
  return (
    <section className="contact-content  flex  overflow-hidden shadow-lg rounded-md tablet:flex-col phoneP:gap-7">
      <div className="get0n_TOUCH flex flex-col w-[50%]  p-[3rem] gap-4 laptop:w-[60%] tablet:w-full phoneL:p-4 phoneP:p-1">
        <h1 className="font-bold text-[28px] leading-[42px] uppercase laptop:text-[20px] phoneL:text-[18px] phoneL:leading-[20px] phoneP:text-[16px] phoneP:leading-[18px]">
          Get in Touch
        </h1>
        <form
          action="£"
          className=" flex flex-col h-full gap-6  phoneL:w-[100%]"
        >
          <div className="name_heaeder flex justify-between">
            <input
              type="text"
              className="border-[2px] border-webpurple p-2 w-[45%] phoneL:placeholder:text-[.8rem] phoneL:h-[2.5rem] phoneP:h-8 phoneP:w-[48%]"
              placeholder="Name"
              required
              name="Name"
            />
            <input
              type="email"
              className="border-[2px] border-webpurple p-2 w-[45%]  phoneL:placeholder:text-[.8rem] phoneL:h-[2.5rem]  phoneP:h-8 phoneP:w-[48%]"
              placeholder="Email"
              required
              name="Email"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border-[2px] border-webpurple p-2 w-[100%]  phoneL:placeholder:text-[.8rem] phoneL:h-[2.5rem]  phoneP:h-8"
            required
            name="Subject"
          />
          <textarea
            placeholder="Message"
            required
            name="Message"
            className="border-[2px] border-webpurple p-2 w-full h-[9rem] phoneL:placeholder:text-[.8rem] resize-none phoneL:h-[7rem] phoneP:h-[6rem]"
          ></textarea>
          <button
            type="submit"
            className="p-2 w-fit bg-webpurple text-white phoneL:text-[.8rem] phoneL:p-2.5 rounded-sm"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-info  flex flex-col  items-center w-[50%]  p-[3rem] gap-8 bg-[#232429] laptop:w-[45%] tablet:w-full phoneP:gap-5">
        <h1 className="font-bold text-[28px] leading-[42px] uppercase text-white laptop:text-[20px] phoneL:text-[18px] phoneL:leading-[20px] phoneP:text-[16px] phoneP:leading-[18px] ">
          Contact us
        </h1>
        <div className="contact-info-box  flex flex-col gap-8 laptop:gap-5 phoneP:gap-3">
          {contacData.map((item, index) => {
            return (
              <div
                key={index}
                className="contact-info-box-item  flex gap-4 items-center phoneL:gap-2"
              >
                <div className="contact-info-box-icon">
                  <i
                    className={`${item.icon} text-[20px]  p-3 rounded-full text-white bg-[#393A3F] laptop:text-[16px] phoneP:text-[13px] phoneP:p-2.5 `}
                  ></i>
                </div>
                <div className="contact-info-box-text flex gap-2">
                  <h1 className="text-[16px] leading-[29px] text-webpurple font-bold capitalize laptop:text-[14px] phoneP:text-[13px]">
                    {item.title} :
                  </h1>
                  <p className="text-[16px] font-normal leading-[29px] text-white laptop:text-[14px] phoneP:text-[13px] ">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContactContent;
