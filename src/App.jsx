import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PricingPage from "./Pages/PricingPage";
import AllFaqsPage from "./Pages/AllFaqsPage";
import PorfolioPage from "./Pages/PorfolioPage";
import BlogPage from "./Pages/BlogPage";
import TeamMembers from "./Pages/TeamMembers";
import ContactPage from "./Pages/ContactPage";
import AllTeamMembers from "./Pages/AllTeamMembers";
import SpecificBlogPost from "./components/selectedBlog/SpecificBlogPsot";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/portfolio" element={<PorfolioPage />} />
        <Route path="/Faqs" element={<AllFaqsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/teammembers" element={<AllTeamMembers />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/:id" element={<SpecificBlogPost />} />
      </Routes>
    </>
  );
}

export default App;
