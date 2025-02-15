import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathway } = useLocation;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathway]);
  return null;
}

export default ScrollToTop;
