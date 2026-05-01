import Image from "next/image";

const HowItWorks = () => {
  return (
    <section className="bg-[#F4F6F8] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1120px]">
        <Image
          src="/assets/how-it-works/frame-23.png"
          alt="How It Works"
          width={1000}
          height={499}
          priority
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
