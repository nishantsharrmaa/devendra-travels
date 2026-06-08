import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}
