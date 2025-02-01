import BlogList from "./BlogList";
import BlofAside from "./BlofAside";
import Footer from "./Home/Footer";

function MainBlogSection() {
  return (
    <div className="flex py-[8rem]  w-[80%] mx-auto">
      <BlogList />
      <BlofAside />
    </div>
  );
}

export default MainBlogSection;
