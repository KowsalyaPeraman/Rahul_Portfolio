import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";

import HireMe from "../components/HireMe";
import ContactSection from "../components/ContactSection";

const Home = () => {

  const openContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white">

      <Navbar openContact={openContact} />

      <div id="home">
        <Hero openContact={openContact} />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="hire">
        <HireMe openContact={openContact} />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

    </div>
  );
};

export default Home;
