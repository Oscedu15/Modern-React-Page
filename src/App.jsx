import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import CompaniesSection from "./components/companiesSection/CompaniesSection"
import FeaturesSection from "./components/featuresSection/FeaturesSection"
import HabitsSection from "./components/habitsSection/HabitsSection"
import BuildSection from "./components/buildSection/BuildSection"
import PriceSection from "./components/priceSection/PriceSection"
import Testimonials from "./components/testimonials/Testimonials"
import Footer from "./components/footer/Footer"


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <CompaniesSection/>
    <FeaturesSection/>
    <HabitsSection/>
    <BuildSection/>
    <PriceSection/>
    <Testimonials/>
    <Footer/>
    </>
  )
}

export default App
