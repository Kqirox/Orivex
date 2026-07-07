import Hero from "@/components/landing/hero";
import WhyOrivex from "@/components/landing/why-orivex";
import LearningPaths from "@/components/landing/learning-paths";
import Testimonial from "@/components/landing/testimonial";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/footer";
import ValueProposition from "@/components/landing/value-preposition";
import QuestPaths from "@/components/landing/quest-paths";

const Home = () => {
  return (
    <main aria-labelledby="orivex-home">
      <h1 id="orivex-home" className="sr-only">
        Orivex - Learn. Earn. Verify.
      </h1>
      <Hero />
      <QuestPaths />
      <HowItWorks />
      <WhyOrivex />
      <LearningPaths />
      <Testimonial />
      <FAQ />
      <ValueProposition />
      <Footer />
    </main>
  );
};

export default Home;
