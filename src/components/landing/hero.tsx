import Image from "next/image";
import { Syne } from "next/font/google";
import { heroBg, heroPeople, people } from "../../../public/assets";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const Hero = () => {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f7f700]"
      style={{
        backgroundImage: `url(${heroBg.src}), url("/assets/hero-bg.svg")`,
        backgroundRepeat: "no-repeat, repeat",
        backgroundSize: "cover, 980px auto",
        backgroundPosition: "center, bottom center",
      }}
    >
      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,520px)_minmax(0,524px)] lg:justify-center lg:gap-12 lg:px-10 lg:py-12">
        <div className="order-2 max-w-xl space-y-5 lg:order-1 lg:justify-self-center lg:space-y-7">
          <h1
            className={`${syne.className} max-w-[450px] text-2xl leading-[1.02] font-bold text-[#1E1F24] sm:text-6xl`}
          >
            Build Your Skills & Earn.
          </h1>

          <p className="max-w-md text-sm sm:leading-7 text-[#565B63] sm:text-lg">
            Join the first decentralized learning protocol in the Stellar
            Ecosystem. Enhance your skills while earning XLM and obtaining
            verifiable credentials that will position you favorably with hiring
            managers.
          </p>

          <div className="grid grid-cols-2 items-center gap-3 sm:flex sm:mt-14 sm:flex-wrap sm:gap-4">
            <button
              type="button"
              className="rounded-full bg-[#F4B42A] px-4 py-3 text-sm font-bold text-[#1A1A1A] transition hover:bg-[#e6a81f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4B42A] sm:px-8"
            >
              Start Learning
            </button>
            <button
              type="button"
              className="rounded-full border border-[#D1D5DB] bg-[#F7F7F7] px-4 py-3 text-sm font-bold text-[#272A30] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4B42A] sm:px-8"
            >
              Explore Quests
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 sm:justify-start">
            <Image
              src={people}
              alt="Learners joined"
              width={45}
              height={24}
              className="h-6 w-auto"
            />
            <p className="text-sm font-medium text-[#23262C]">
              1k+ Learners already joined
            </p>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[360px] lg:order-2 lg:max-w-[524px] lg:justify-self-center">
          <Image
            src={heroPeople}
            alt="Learners on Learnault"
            width={524}
            height={619}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
