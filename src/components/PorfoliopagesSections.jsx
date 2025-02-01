import Porfoliobox from "../components/Home/porfolioBox";
import ReactPaginate from "react-paginate";
import { porfoliolong } from "../constants";
import { useState } from "react";
function PorfoliopagesSections() {
  const itemsPerPage = 6;
  const totalItems = porfoliolong.length;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = porfoliolong.slice(startIndex, endIndex);
  return (
    <section className="portList h-[120vh] py-[4rem] flex flex-col gap-8">
      <div className="portfolio_sections w-[70%] mx-auto grid grid-cols-3 gap-6  mt-16 p-1">
        {currentItems.map((item, index) => {
          return <Porfoliobox key={index} bgImage={item.bgImage} />;
        })}
      </div>
      <div className="text-center w-full">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center space-x-2 mt-6"
          pageClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
          activeClassName={"bg-webpurple text-white border-blue-600"}
          previousClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
          nextClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200"
          breakClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </section>
  );
}

export default PorfoliopagesSections;
