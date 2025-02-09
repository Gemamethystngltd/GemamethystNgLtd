function ContactContent() {
  const contacData = [
    {
      icon: "fa-solid fa-location-dot",
      title: "Address",
      description: "Omu-Aran",
    },
    {
      icon: "fa-solid fa-phone",
      title: "Phone",
      description: "+234 815 9531 614",
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      description: "amethystngltd@gmail.com",
    },
    {
      icon: "fa-solid fa-earth-americas",
      title: "Website",
      description: "Omu-Aran",
    },
  ];
  return (
    <section className="contact-content overflow-hidden flex  shadow-lg rounded-md tablet:flex-col ">
      <div className="get0n_TOUCH flex flex-col w-[50%]  p-[3rem] gap-4 laptop:w-[60%] tablet:w-full">
        <h1 className="font-bold text-[28px] leading-[42px] uppercase laptop:text-[20px]">
          Get in Touch
        </h1>
        <form action="£" className=" flex flex-col h-full gap-6 ">
          <div className="name_heaeder flex justify-between">
            <input
              type="text"
              className="border-[2px] border-webpurple p-2 w-[45%]"
              placeholder="Name"
              required
              name="Name"
            />
            <input
              type="email"
              className="border-[2px] border-webpurple p-2 w-[45%]"
              placeholder="Email"
              required
              name="Email"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border-[2px] border-webpurple p-2 w-[100%]"
            required
            name="Subject"
          />
          <textarea
            placeholder="Message"
            required
            name="Message"
            className="border-[2px] border-webpurple p-2 w-full h-[9rem] resize-none"
          ></textarea>
          <button type="submit" className="p-2 w-fit bg-webpurple text-white">
            Send Message
          </button>
        </form>
      </div>

      <div className="contact-info  flex flex-col  items-center w-[50%]  p-[3rem] gap-8 bg-[#232429] laptop:w-[45%] tablet:w-full">
        <h1 className="font-bold text-[28px] leading-[42px] uppercase text-white laptop:text-[20px]">
          Contact us
        </h1>
        <div className="contact-info-box  flex flex-col gap-8 laptop:gap-5">
          {contacData.map((item, index) => {
            return (
              <div
                key={index}
                className="contact-info-box-item  flex gap-4 items-center"
              >
                <div className="contact-info-box-icon">
                  <i
                    className={`${item.icon} text-[20px]  p-3 rounded-full text-white bg-[#393A3F] laptop:text-[16px] `}
                  ></i>
                </div>
                <div className="contact-info-box-text flex gap-2">
                  <h1 className="text-[16px] leading-[29px] text-webpurple font-bold capitalize laptop:text-[14px]">
                    {item.title} :
                  </h1>
                  <p className="text-[16px] font-normal leading-[29px] text-white laptop:text-[14px] ">
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
