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

// Order rationale: the page reads top-to-bottom from a learner's first
// impression (Hero) through the gamified quest hooks (QuestPaths +
// HowItWorks), the platform's value proposition (WhyOrivex +
// LearningPaths), social proof (Testimonial), reduced-friction objection
// handling (FAQ + ValueProposition), and finally the persistent
// navigation footer.
