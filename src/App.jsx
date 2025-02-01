import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PricingPage from "./Pages/PricingPage";
import PorfolioPage from "./Pages/PorfolioPage";
import BlogPage from "./Pages/BlogPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/portfolio" element={<PorfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}

export default App;
