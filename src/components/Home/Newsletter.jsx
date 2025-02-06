function Newsletter() {
  return (
    <div className="absolute overlay overflow-hidden rounded-lg h-[35vh] w-[70%] bottom-[-6rem] left-[50%] flex flex-col  justify-center items-center translate-x-[-50%]  laptop:w-[80%] laptop:h-[30vh] tablet:w-[85%] phoneL:w-[90%] phoneL:h-[25vh] phoneL:bottom-[-3rem] phoneP:h-[20vh]">
      <div className=" inset-0 bg-[#662d91]/50 absolute -z-20  backdrop-blur-[10px]"></div>
      <div className="new_content flex items-center flex-col">
        <h1 className="text-[32px] text-white leading-[48px] font-semibold uppercase laptop:text-[30px] laptop:leading-[40px] tablet:text-[25px] tablet:leading-[30px] phoneL:text-[17px] phoneL:leading-[20px] phoneP:text-[15px] phoneP:leading-[20px]">
          join us newslettter{" "}
        </h1>
        <p className="text-[16px] text-white font-normal leading-[24px] laptop:text-[14px] laptop:leading-[20px] text-center tablet:text-[13px] tablet:leading-[18px] phoneL:text-[10px] phoneL:leading-[14px] phoneP:text-[9px]">
          Sign Up to our Newsletter and get our latest news update
        </p>
        <div className="input_feild mt-4 flex w-[100%] rounded-lg overflow-hidden laptop:w-[90%] laptop:mt-3 tablet:mt-2 phoneL:rounded-md phoneL:mt-3">
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className=" p-2 w-[70%] laptop:p-1 laptop:placeholder:text-[13px] laptop:placeholder:pl-2 tablet:p-[.2rem] phoneL:p-[.03rem]  phoneL:placeholder:text-[11px] phoneP:p-[.05rem] phoneP:placeholder:text-[10px]"
          />
          <button className="text-[16px] leading-[29px] px-3 py-2 font-normal text-white bg-[#662d91] laptop:text-[14px] laptop:leading-[20px] laptop:px-2 laptop:py- tablet:text-[13px] tablet:leading-[18px] tablet:px-2 tablet:py-[.2rem] phoneL:text-[11px] phoneL:leading-[14px] phoneL:px-1 phoneL:py-[.1rem] phoneP:text-[10px] phoneP:leading-[14px] phoneP:px-1 phoneP:py-[.03rem]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
