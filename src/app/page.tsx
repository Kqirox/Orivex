import Hero from "@/components/landing/hero";
import WhyLearnault from "@/components/landing/why-learnault";
import Testimonial from "@/components/landing/testimonial";
import Footer from "@/components/landing/footer";
import ValueProposition from "@/components/landing/value-preposition";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhyLearnault />
      <Testimonial />
      <ValueProposition/>
       <Footer/>
    </main>
  );
};

export default Home;
