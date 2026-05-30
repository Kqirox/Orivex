import Hero from "@/components/landing/hero";
import WhyLearnault from "@/components/landing/why-learnault";
import Testimonial from "@/components/landing/testimonial";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/footer";
import ValueProposition from "@/components/landing/value-preposition";
import QuestPaths from "@/components/landing/quest-paths";

const Home = () => {
  return (
    <main>
      <Hero />
      <QuestPaths />
      <WhyLearnault />
      <Testimonial />
      <FAQ />
      <ValueProposition/>
       <Footer/>
    </main>
  );
};

export default Home;
