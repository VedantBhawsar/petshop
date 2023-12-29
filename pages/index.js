// import components
import Pets from "../components/Pets";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Adoption from "../components/Adoption";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    // max-w-[1440px]
    <div className="mx-auto overflow-hidden scroll-smooth">
      <Hero />
      <Pets />
      <Services />
      <Adoption />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
