function BlogDetails() {
  return (
    <div className="blog_details flex items-centerg gap-2 shadow-lg rounded-lg w-fit bg-white p-2 absolute top-[43%] left-[15%]">
      <div className="date flex gap-2 items-center">
        <i className="fa-solid fa-calendar-days text-webpurple"></i>
        <p className="uppercase  font-medium text-[12px] leading-[22px]">
          sept. 23, 2020
        </p>
      </div>
      <div className="admin flex gap-2 items-center text-webpurple">
        <i className="fa-solid fa-user"></i>
        <p className="uppercase  font-medium text-[12px] leading-[22px]">
          Admin
        </p>
      </div>
      <div className="chat_bubble flex gap-2 items-center text-webpurple">
        <i className="fa-solid fa-comment"></i>
        <p className="uppercase  font-medium text-[12px] leading-[22px]">3</p>
      </div>
    </div>
  );
}

export default BlogDetails;
