import BlogPost from "./Home/BlogPost";
import ReactPaginate from "react-paginate";
import { blogspostlong } from "../constants";
import { useState } from "react";
function BlogList() {
  const [currentindex, setsurrentindex] = useState(0);
  const pagesize = 4;
  const totoalItem = blogspostlong.length;

  const pageCount = Math.ceil(totoalItem / pagesize);
  const handlePageClick = (data) => {
    setsurrentindex(data.selected);
  };
  const startIndex = currentindex * pagesize;
  const endIndex = startIndex + pagesize;
  const currentitems = blogspostlong.slice(startIndex, endIndex);

  return (
    <section className="">
      <div className="grid grid-cols-2 gap-7  w-fit   ">
        {currentitems.map((blog, index) => {
          return (
            <div key={index} className=" flex justify-between ">
              <BlogPost
                key={index}
                title={blog.title}
                img={blog.img}
                des={blog.description}
              />
            </div>
          );
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

export default BlogList;
