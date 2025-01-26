import "./App.css";
import HeroSection from "./components/herosection";
import NavBar from "./components/NavBar";
import Solutions from "./components/solutions";
import Ftco from "./components/Ftco";
import Overlay from "./components/overlay";
import Faq from "./components/Faq";
import TeamMembers from "./components/TeamMembers";

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
        <TeamMembers />
      </main>
    </>
  );
}

export default App;
