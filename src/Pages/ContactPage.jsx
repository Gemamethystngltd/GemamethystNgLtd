import NavBar from "../components/Home/NavBar";
import MainContact from "../components/mainconatactSection";
import Subhero from "../components/headinghero";
import Footer from "../components/Home/Footer";
function ContactPage() {
  return (
    <main>
      <Subhero page={"Contact"} />
      <NavBar />
      <MainContact />
      <Footer />
    </main>
  );
}

export default ContactPage;
