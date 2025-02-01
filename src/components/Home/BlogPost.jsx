import BlogDetails from "./BlogDetails";
function BlogPost({ title, img, des }) {
  return (
    <div className="blog_post  flex flex-col gap-4  overflow-hidden w-[20rem] relative shadow-[0px_4px_24px_-16px_rgba(0,0,0,0.15)] rounded-md">
      <BlogDetails />
      <div className="blog_post_img ">
        <img src={img} alt="blog_post_img" className="w-full" />
      </div>
      <div className="blog_post_content flex flex-col gap-5 py-9">
        <header>
          <h1 className=" font-bold text-[20px] leading-[30px] text-webpurple text-center uppercase">
            {title}
          </h1>
        </header>
        <p className="text-[16px] leading-[28.8px] font-normal text-[#999999] text-center">
          {des}
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
