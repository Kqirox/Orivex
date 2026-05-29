import Hero from "@/components/landing/hero";
import WhyLearnault from "@/components/landing/why-learnault";
import LearningPaths from "@/components/landing/learning-paths";
import Testimonial from "@/components/landing/testimonial";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/footer";
import ValueProposition from "@/components/landing/value-preposition";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhyLearnault />
      <LearningPaths />
      <Testimonial />
      <FAQ />
      <ValueProposition/>
       <Footer/>
    </main>
  );
};

export default Home;
