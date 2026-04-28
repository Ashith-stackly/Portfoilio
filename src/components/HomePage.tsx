import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <Footer />
    </div>
  );
};

export default HomePage;
