import Hero from "@/components/landing/hero";
import WhyLearnault from "@/components/landing/why-learnault";
import Testimonial from "@/components/landing/testimonial";
// 1. Add the import for your FAQ component
import FAQ from "@/components/landing/FAQ";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhyLearnault />
      <Testimonial />
      {/* 2. Add the FAQ component here (usually before the footer) */}
      <FAQ />
    </main>
  );
};

export default Home;
