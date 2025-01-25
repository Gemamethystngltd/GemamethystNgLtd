const SolutionBox = ({ text, icon }) => {
  return (
    <div className="Solutions_box w-[250px] min-h-[240px] box pt-6 px-4 flex  flex-col bg-vantablack gap-6 rounded-lg">
      <div className="box_header flex justify-end pr-4">
        {/* <i className={`${icon} text-[4.5rem]   text-webpurple`}></i> */}
        <img src={icon} alt="icon" className="w-[5rem] h-[4.8rem]" />
      </div>
      <div className="box_content">
        <h2 className="text-white uppercase w-[70%] text-[18px] tracking-[1px] leading-[27px] font-[700]">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default SolutionBox;
