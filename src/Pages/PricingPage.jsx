import Subhero from "../components/headinghero";
import NavBar from "../components/Home/NavBar";
import PricingComps from "../components/PricingComps";
import Solutions from "../components/Home/solutions";
import Newslettersection from "../components/newsletter";
import Footer from "../components/Home/Footer";
function PricingPage() {
  return (
    <main>
      <Subhero page={"Pricing"} />
      <NavBar />
      <PricingComps />
      <Solutions />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default PricingPage;
