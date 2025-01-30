function Newsletter() {
  return (
    <div className="absolute overlay overflow-hidden rounded-lg w-[70%] bottom-[-13%] left-[50%] flex flex-col  justify-center items-center translate-x-[-50%] h-[30%]">
      <div className=" inset-0 bg-[#662d91]/50 absolute -z-20  backdrop-blur-[10px]"></div>
      <div className="new_content flex items-center flex-col">
        <h1 className="text-[32px] text-white leading-[48px] font-semibold uppercase">
          join us newslettter{" "}
        </h1>
        <p className="text-[16px] text-white font-normal leading-[24px]">
          Sign Up to our Newsletter and get our latest news update
        </p>
        <div className="input_feild mt-4 flex w-[100%] rounded-lg overflow-hidden">
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className=" p-2 w-[70%]"
          />
          <button className="text-[16px] leading-[29px] px-3 py-2 font-normal text-white bg-[#662d91]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
