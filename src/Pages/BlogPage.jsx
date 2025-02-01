import Subhero from "../components/headinghero";
import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/NavBar";
import Newslettersection from "../components/newsletter";
import MainBlogSection from "../components/MainBlogSection";
function BlogPage() {
  return (
    <main>
      <Subhero page={"Blog"} />
      <NavBar />
      <MainBlogSection />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default BlogPage;
