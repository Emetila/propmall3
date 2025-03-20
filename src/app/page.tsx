import CalculatorSection from "@/components/calculatesection/main";
import Header from "@/components/header/homeheader";
import HeroSection from "@/components/hero";
import IntroSection from "@/components/intro";
import PortfolioSection from "@/components/portfolio/main";
import TestimonialSection from "@/components/testimonial/testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <IntroSection />
      <PortfolioSection />
      <CalculatorSection />
      <TestimonialSection />
    </div>
  );
}
