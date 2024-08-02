
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header active={1} />
      <div >
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
}
