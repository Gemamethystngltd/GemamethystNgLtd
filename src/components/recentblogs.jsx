const Recentblogs = ({ img, title }) => {
  return (
    <>
      <div className="flex gap-4">
        <div className="w-[11rem] h-[5rem] ">
          <img src={img} alt="image" className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[16px] font-bold leading-[22px] uppercase">
            {title}
          </h1>
          <div className="flex  gap-4 ">
            <span className="text-[11px] text-webpurple">
              <i className="fa-solid fa-calendar-days"></i> Sept. 30, 2020{" "}
            </span>
            <span className="text-[11px] text-webpurple">
              <i className="fa-solid fa-comment"></i>19
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recentblogs;
