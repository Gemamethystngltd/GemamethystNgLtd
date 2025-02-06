const Porfoliobox = ({ bgImage, tiitle, description }) => {
  return (
    <div
      style={{
        background: `url(${bgImage}) `,
      }}
      className={`project_wrap_image img d-flex align-items-end  h-[340px] rounded-md  shadow-lg  tablet:h-[300px] phoneL:h-[320px] phoneL:w-[90%] `}
    >
      <div className="text">
        <span>{tiitle}</span>
        <h3>
          <a href="portfolio-single.html">{description}</a>
        </h3>
        <a
          href="portfolio-single.html"
          className="icon d-flex align-items-center justify-content-center"
        >
          {/* <span className="fa fa-chevron-right"></span> */}
        </a>
      </div>
    </div>
  );
};

export default Porfoliobox;
