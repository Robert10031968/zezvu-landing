import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <HeroSection />
      <HowItWorksSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
