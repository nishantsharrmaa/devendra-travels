import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import SeasonalBanner from "@/components/SeasonalBanner";

export default function Home() {
  return (
    <>
      <SeasonalBanner />
      <Hero />
      <Stats />
      <HowItWorks />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  );
}
