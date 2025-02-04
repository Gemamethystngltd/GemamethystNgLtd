import BlogPost from "./Home/BlogPost";
import ReactPaginate from "react-paginate";
import { blogspostlong } from "../constants";
import { useState } from "react";
function BlogList() {
  const [currentindex, setsurrentindex] = useState(0); // Pagination index
  const [searchQuery, setsearchQuery] = useState(""); // Search query
  const [filteredBlog, setfilteredBlog] = useState(blogspostlong); // Filtered blog posts
  // Handle search input changes
  const handlesearch = (e) => {
    const query = e.target.value.toLowerCase();
    setsearchQuery(query);

    if (query.trim() === "") {
      setfilteredBlog(blogspostlong); // Reset when empty
    } else {
      const result = blogspostlong
        .filter((blog) => blog.title.toLowerCase().includes(query))
        .sort((a, b) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();

          // Prioritize titles that start with the query
          const startsWithA = titleA.startsWith(query) ? -1 : 0;
          const startsWithB = titleB.startsWith(query) ? -1 : 0;

          return startsWithA - startsWithB; // Sort accordingly
        });

      setfilteredBlog(result);
    }

    setsurrentindex(0); // Reset pagination index
  };
  // Pagination settings
  const pagesize = 4;
  const totoalItem = filteredBlog.length;
  const pageCount = Math.ceil(totoalItem / pagesize);
  // Handle page clicks
  const handlePageClick = (data) => {
    setsurrentindex(data.selected);
  };
  const startIndex = currentindex * pagesize;
  const endIndex = startIndex + pagesize;
  const currentitems = filteredBlog.slice(startIndex, endIndex);

  return (
    <section className="">
      <div className="seach border-1 border m-4 border-black overflow-hidden rounded-md shadow-sm ">
        <input
          type="text"
          className="p-3 w-full"
          name="search"
          value={searchQuery}
          onChange={handlesearch}
          placeholder="Search..."
        />
      </div>
      <div className="grid grid-cols-2 gap-8  w-fit   ">
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
