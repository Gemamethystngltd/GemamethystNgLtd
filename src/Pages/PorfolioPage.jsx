import Footer from "../components/Home/Footer";
import NavBar from "../components/Home/NavBar";
import PorfoliopagesSections from "../components/PorfoliopagesSections";
import Subhero from "../components/headinghero";
import Newslettersection from "../components/newsletter";
function PorfolioPage() {
  return (
    <main>
      <Subhero page={"Portfolio"} />
      <NavBar />
      <PorfoliopagesSections />
      <Newslettersection />
      <Footer />
    </main>
  );
}

export default PorfolioPage;
