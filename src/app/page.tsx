import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { Sqwiggle } from "@/components/landing/sqwiggle";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <div className="relative isolate overflow-hidden">
          <div className="grid-background absolute inset-0 -z-10" />
          <Sqwiggle />
          <HeroSection />
          <ServicesSection />
          <TestimonialsSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
