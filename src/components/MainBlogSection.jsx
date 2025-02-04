import BlogList from "./BlogList";
import BlofAside from "./BlofAside";

function MainBlogSection() {
  return (
    <div className="flex py-[8rem] gap-[3rem] w-[80%]  mx-auto">
      <BlogList />
      <BlofAside />
    </div>
  );
}

export default MainBlogSection;
