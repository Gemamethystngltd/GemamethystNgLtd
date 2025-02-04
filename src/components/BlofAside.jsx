import blog1 from "../assets/images/ximage_5.jpg.pagespeed.ic.xRa-Yrd6zy.jpg";
import blog2 from "../assets/images/ximage_4.jpg.pagespeed.ic.9VUxuBaVRa.jpg";
import blog3 from "../assets/images/ximage_3.jpg.pagespeed.ic.CzImA-z_Ch.jpg";
import Recentblogs from "./recentblogs";
function BlofAside() {
  const blogData = [
    {
      title: "Marketing Strategies for Digital Ecosystem",
      img: blog1,
    },
    {
      title: "Marketing Strategies for Digital Ecosystem",
      img: blog3,
    },
    {
      title: "Marketing Strategies for Digital Ecosystem",
      img: blog2,
    },
  ];
  return (
    <section className=" w-[30%] p-4 flex flex-col gap-[5rem]">
      <div className="seach border-1 border border-black overflow-hidden rounded-md shadow-sm ">
        <input type="text" className="p-3 w-full" placeholder="Search..." />
      </div>
      <div className="recebt_blog">
        <h1 className="uppercase font-bold leading-[30px] text-[20px]">
          recent blog
        </h1>
        <div className="blogs flex flex-col gap-3">
          {blogData.map((blog, index) => {
            return (
              <Recentblogs key={index} img={blog.img} title={blog.title} />
            );
          })}
        </div>
      </div>
      <div className="categories_tag flex w-[60%] gap-4 flex-col">
        <h1 className="font-bold  leading-[30px] text-[20px] uppercase">
          tag cloud
        </h1>
        <div className="flex gap-[.3rem]  flex-wrap">
          <h2 className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2 border-1 border border-[#E5E5E5] rounded-md">
            design
          </h2>
          <h2 className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2 border-1 border border-[#E5E5E5] rounded-md">
            learn
          </h2>
          <h2 className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2 border-1 border border-[#E5E5E5] rounded-md">
            bag
          </h2>
          <h2 className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2 border-1 border border-[#E5E5E5] rounded-md">
            pen
          </h2>
          <h2 className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2 border-1 border border-[#E5E5E5] rounded-md">
            education
          </h2>
          <h2 className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2 border-1 border border-[#E5E5E5] rounded-md">
            teacher
          </h2>
          <h2 className="uppercase leading-[20px] text-[11px] font-bold py-1 px-2 border-1 border border-[#E5E5E5] rounded-md">
            course
          </h2>
        </div>
      </div>
      <div className="paragrahn flex flex-col gap-4">
        <h1 className="font-bold text-[20px] leading-[30px] uppercase ">
          Paragraph
        </h1>
        <p className="text-[15px] leading-[27px] font-normal text-[#9D9D9D]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          itaque, autem necessitatibus voluptate quod mollitia delectus aut,
          sunt placeat nam vero culpa sapiente consectetur similique, inventore
          eos fugit cupiditate numquam!
        </p>
      </div>
    </section>
  );
}

export default BlofAside;
