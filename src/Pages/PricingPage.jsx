import Subhero from "../components/headinghero";
import NavBar from "../components/Home/NavBar";
import PricingComps from "../components/PricingComps";
import PricingAbout from "../components/PricingAbout";
import PricingServices from "../components/PricingServices";
import Newslettersection from "../components/newsletter";
import Footer from "../components/Home/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ToTopBtn from "../components/toTopBtn";
function PricingPage() {
  return (
    <main>
      <ToTopBtn />
      <ScrollToTop />
      <Subhero page={"GemAcademy"} />
      <NavBar />
      <PricingComps />
      <PricingAbout />
      <PricingServices />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default PricingPage;
