import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const ValueProposition = () => {
  return (
    <section
      className="relative flex min-h-125 items-center justify-center overflow-hidden py-16 sm:min-h-150 sm:py-24 before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-0"
      style={{
        backgroundImage: ` url("/assets/hero-preposition.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <svg
        className="absolute top-0 right-0 h-full w-auto opacity-30"
        viewBox="0 0 558 625"
        preserveAspectRatio="xMaxYMin meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M185.211 515.789V693.5H7.5V515.789H185.211ZM402.522 -11.5V298.478H712.5V693.457C621.485 692.499 531.472 674.113 447.338 639.264C360.894 603.457 282.348 550.975 216.187 484.813C150.025 418.652 97.5419 340.107 61.7354 253.662C26.8859 169.528 8.50003 79.5148 7.54199 -11.5H402.522Z"
          stroke="white"
          strokeWidth="15"
        />
      </svg>

      {/* Decorative dots */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="100" r="3" fill="white" />
        <circle cx="300" cy="150" r="2.5" fill="white" />
        <circle cx="450" cy="80" r="2" fill="white" />
        <circle cx="600" cy="200" r="3" fill="white" />
        <circle cx="800" cy="120" r="2" fill="white" />
        <circle cx="950" cy="180" r="2.5" fill="white" />
        <circle cx="1050" cy="90" r="2" fill="white" />
        
        <circle cx="200" cy="500" r="2.5" fill="white" />
        <circle cx="400" cy="550" r="2" fill="white" />
        <circle cx="650" cy="600" r="3" fill="white" />
        <circle cx="850" cy="520" r="2" fill="white" />
        <circle cx="1000" cy="580" r="2.5" fill="white" />
        
        <circle cx="100" cy="350" r="2" fill="white" />
        <circle cx="350" cy="400" r="2.5" fill="white" />
        <circle cx="700" cy="350" r="2" fill="white" />
        <circle cx="1050" cy="420" r="3" fill="white" />
      </svg>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-10">
        <div className="text-white mb-9 md:max-w-125">
          <h2
            className={`${syne.className} text-3xl font-bold sm:text-5xl lg:text-6xl`}
          >
            Start Learning.
          </h2>

          <h2
            className={`${syne.className} pb-4 pt-3 text-3xl font-bold  sm:text-5xl lg:text-6xl`}
          >
            Start Earning.
          </h2>
          <p>
            Join the decentralized education revolution. Build your skills, earn
            real rewards, and connect with global opportunities today.
          </p>
        </div>

        <button
          type="button"
          className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0F172A] transition hover:bg-transparent sm:px-10 md:mt-8 mt-2  border border-transparent cursor-pointer hover:border-white"
        >
          Start Learning
        </button>
      </div>
    </section>
  );
};

export default ValueProposition;