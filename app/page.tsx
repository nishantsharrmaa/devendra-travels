import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import { faqs } from "@/lib/faq-data";
import SeasonalBanner from "@/components/SeasonalBanner";
import IndiaMapExplorer from "@/components/IndiaMapExplorer";
import TripPlannerSection from "@/components/TripPlannerSection";
import BookingFormSection from "@/components/BookingFormSection";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SeasonalBanner />
      <Hero />
      <Stats />
      <HowItWorks />
      <IndiaMapExplorer />
      <TripPlannerSection />
      <BookingFormSection />
      <FeaturedTours />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  );
}
