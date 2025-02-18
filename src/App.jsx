import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PricingPage from "./Pages/PricingPage";
import PorfolioPage from "./Pages/PorfolioPage";
import BlogPage from "./Pages/BlogPage";
import TeamMembers from "./Pages/TeamMembers";
import ContactPage from "./Pages/ContactPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/portfolio" element={<PorfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
