import Porfoliobox from "../components/Home/porfolioBox";
import ReactPaginate from "react-paginate";
import { porfoliolong } from "../constants";
import { useState, useEffect } from "react";
function PorfoliopagesSections() {
  const totalItems = porfoliolong.length;
  const [currentPage, setCurrentPage] = useState(0);
  const [pageItems, setPageItems] = useState(6);

  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setPageItems(6);
    } else if (window.innerWidth >= 768) {
      setPageItems(3);
    } else {
      setPageItems(2);
    }
  };
  useEffect(() => {
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
  }, []);

  const pageCount = Math.ceil(totalItems / pageItems);
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const startIndex = currentPage * pageItems;
  const endIndex = startIndex + pageItems;
  const currentItems = porfoliolong.slice(startIndex, endIndex);

  return (
    <>
      <section className="portList h-auto py-[4rem] flex flex-col gap-8">
        <div className="portfolio_sections w-[70%] mx-auto grid grid-cols-3 gap-6  mt-16 p-1  laptop:w-[90%] tablet:w-[98%] phoneL:grid-cols-1 phoneL:w-[95%] phoneL:gap-2 phoneL:place-items-center phoneL:mt-10">
          {currentItems.map((item, index) => {
            return <Porfoliobox key={index} bgImage={item.bgImage} />;
          })}
        </div>
      </section>
      <div className="text-center w-full">
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={", ..."}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName="flex justify-center space-x-2 mt-6 
                      phoneL:space-x-1 phoneL:text-sm 
                      phoneP:flex-wrap phoneP:gap-2 phoneP:text-xs"
          pageClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200 
                 phoneL:px-3 phoneL:py-1 
                 phoneP:px-2 phoneP:py-1"
          activeClassName="bg-webpurple text-white border-blue-600"
          previousClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200
                     phoneL:px-3 phoneL:py-1
                     phoneP:px-2 phoneP:py-1"
          nextClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-200
                 phoneL:px-3 phoneL:py-1
                 phoneP:px-2 phoneP:py-1"
          breakClassName="px-4 py-2 border border-gray-300 rounded-md cursor-pointer
                  phoneL:px-3 phoneL:py-1 
                  phoneP:px-2 phoneP:py-1"
          disabledClassName="opacity-50 cursor-not-allowed"
        />
      </div>
    </>
  );
}

export default PorfoliopagesSections;
