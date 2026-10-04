import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Resources from "@/components/Resources";
import FeatureSection from "@/components/FeatureSection";
import BottomSec  from "@/components/BottomSec";
import Footer from "@/components/Footer";



const Home = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Resources />
      <FeatureSection />
      <BottomSec />
      <Footer/>

    </div>
  )
}

export default Home

