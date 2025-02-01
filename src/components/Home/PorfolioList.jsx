import Porfoliobox from "./porfolioBox";
import { porfolio } from "../../constants";
function PorfolioList() {
  return (
    <div className="portfolio_sections w-[70%] mx-auto grid grid-cols-3 gap-6  mt-16 p-1">
      {porfolio.map((item, index) => {
        return <Porfoliobox key={index} bgImage={item.bgImage} />;
      })}
    </div>
  );
}

export default PorfolioList;
