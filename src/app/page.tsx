import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import HowItWorks from "@/components/sections/HowItWorks"
import TargetAudience from "@/components/sections/TargetAudience"
import SmartLogic from "@/components/sections/SmartLogic"
import HowItThinksScenario from "@/components/sections/HowItThinksScenario"
import Pricing from "@/components/sections/Pricing"
import AppStoreLaunch from "@/components/sections/AppStoreLaunch"
import Roadmap from "@/components/sections/Roadmap"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import BetaTesterSection from "@/components/sections/BetaTesterSection"
import FinalCTA from "@/components/sections/FinalCTA"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <TargetAudience />
        <SmartLogic />
        <HowItThinksScenario />
        <Pricing />
        <AppStoreLaunch />
        <Roadmap />
        <Testimonials />
        <FAQ />
        <BetaTesterSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

