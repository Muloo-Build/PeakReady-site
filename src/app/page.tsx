import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import InsideTheApp from "@/components/sections/InsideTheApp"
import Features from "@/components/sections/Features"
import HowItWorks from "@/components/sections/HowItWorks"
import SmartLogic from "@/components/sections/SmartLogic"
import HowItThinksScenario from "@/components/sections/HowItThinksScenario"
import Pricing from "@/components/sections/Pricing"
import BetaTesterSection from "@/components/sections/BetaTesterSection"
import Roadmap from "@/components/sections/Roadmap"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import TargetAudience from "@/components/sections/TargetAudience"
import AppStoreLaunch from "@/components/sections/AppStoreLaunch"
import FinalCTA from "@/components/sections/FinalCTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <InsideTheApp />
        <Features />
        <HowItWorks />
        <SmartLogic />
        <HowItThinksScenario />
        <Pricing />
        <BetaTesterSection />
        <Roadmap />
        <Testimonials />
        <FAQ />
        <TargetAudience />
        <AppStoreLaunch />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
