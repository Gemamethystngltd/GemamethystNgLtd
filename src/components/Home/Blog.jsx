import BlogPost from "./BlogPost";
import { blogspost } from "../../constants";
import Newsletter from "./Newsletter";
function Blog() {
  return (
    <section className="blog_section relative    h-[130vh] pt-20 flex flex-col gap-16">
      <header className=" flex flex-col   gap-2 items-center">
        <h3 className=" text-[13px] leading-[23px] text-webpurple font-semibold uppercase">
          Our Blog
        </h3>
        <h1 className="text-[34px] leading-[47.5px] tracking-[3px] uppercase font-bold">
          RECENT POST
        </h1>
      </header>
      <div className="blog_section component flex items-center justify-between w-[70%]  mx-auto">
        {blogspost.map((blog, index) => {
          return (
            <BlogPost
              key={index}
              title={blog.title}
              img={blog.img}
              des={blog.description}
            />
          );
        })}
      </div>
      <Newsletter />
    </section>
  );
}

export default Blog;
