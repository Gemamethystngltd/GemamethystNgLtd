import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/NavBar";
import PorfoliopagesSections from "../components/PorfoliopagesSections";
import Subhero from "../components/headinghero";
import ScrollToTop from "../components/ScrollToTop";
import Newslettersection from "../components/newsletter";
import ToTopBtn from "../components/toTopBtn";
function PorfolioPage() {
  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"Portfolio"} />
      <NavBar />
      <PorfoliopagesSections />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default PorfolioPage;
