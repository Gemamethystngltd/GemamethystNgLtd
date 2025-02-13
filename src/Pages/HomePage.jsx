import HeroSection from "../components/Home/herosection";
import NavBar from "../components/Home/NavBar";
import Solutions from "../components/Home/solutions";
import Ftco from "../components/Home/Ftco";
import Overlay from "../components/Home/overlay";
import Faq from "../components/Home/Faq";
import TeamComponents from "../components/Home/TeamComponents";
import PorfolioComp from "../components/Home/portfolio";
import Testimonails from "../components/Home/Testimonials";
import Blog from "../components/Home/Blog";
import Aos from "aos";
import { useEffect } from "react";
import Footer from "../components/Home/Footer";
function HomePage() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 100,
    });
  }, []);
  return (
    <>
      <main className="relative">
        <NavBar />
        <HeroSection />
        <Solutions />
        <Ftco />
        <Overlay />
        <Faq />
        <TeamComponents />
        <PorfolioComp />
        <Testimonails />
        <Blog />
        <Footer />
      </main>
    </>
  );
}

export default HomePage;
