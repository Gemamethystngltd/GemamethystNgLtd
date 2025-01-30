import "./App.css";
import HeroSection from "./components/herosection";
import NavBar from "./components/NavBar";
import Solutions from "./components/solutions";
import Ftco from "./components/Ftco";
import Overlay from "./components/overlay";
import Faq from "./components/Faq";
import TeamComponents from "./components/TeamComponents";
import PorfolioComp from "./components/portfolio";
import Testimonails from "./components/Testimonials";
import Blog from "./components/Blog";

function App() {
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
      </main>
    </>
  );
}

export default App;
