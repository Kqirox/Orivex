import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
});

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const steps: Step[] = [
  {
    title: "Learn the Stellar Ecosystem",
    description:
      "Take bite-sized Stellar courses designed to build real-world skills.",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-text-primary"
      >
        {/* Open book */}
        <rect
          x="6"
          y="12"
          width="20"
          height="26"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="30"
          y="12"
          width="20"
          height="26"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="28"
          y1="12"
          x2="28"
          y2="38"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line x1="10" y1="19" x2="22" y2="19" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="29" x2="22" y2="29" stroke="currentColor" strokeWidth="1.5" />
        <line x1="34" y1="19" x2="46" y2="19" stroke="currentColor" strokeWidth="1.5" />
        <line x1="34" y1="24" x2="46" y2="24" stroke="currentColor" strokeWidth="1.5" />
        <line x1="34" y1="29" x2="46" y2="29" stroke="currentColor" strokeWidth="1.5" />

        {/* Gold star accent */}
        <circle cx="40" cy="40" r="8" fill="currentColor" className="text-primary" />
        <path
          d="M40 34.5l1.5 3 3.3.5-2.4 2.3.6 3.2L40 42l-3 1.5.6-3.2-2.4-2.3 3.3-.5z"
          fill="currentColor"
          className="text-text-primary"
        />
      </svg>
    ),
  },
  {
    title: "Two-way earning",
    description:
      "Two-way earning through course completion and taking quests.",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-text-primary"
      >
        {/* Money bag */}
        <path
          d="M28 10c-3 0-6 2-6 5 0 1.5.7 2.8 1.8 3.7C18.5 20.5 15 25 15 30c0 8.3 5.8 14 13 14s13-5.7 13-14c0-5-3.5-9.5-8.8-11.3C33.3 17.8 34 16.5 34 15c0-3-3-5-6-5z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M24 8l4-4 4 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Dollar sign */}
        <line
          x1="28"
          y1="24"
          x2="28"
          y2="38"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M24.5 27.5c0-1.7 1.6-3 3.5-3s3.5 1.3 3.5 3-1.6 3-3.5 3-3.5-1.3-3.5 3 1.6 3 3.5 3 3.5-1.3 3.5-3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Gold accent */}
        <circle cx="40" cy="40" r="8" fill="currentColor" className="text-primary" />
        <path
          d="M36 40l2.5 2.5L44 36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Verifiable track record",
    description:
      "As you learn, you can share and showcase your knowledge & badge.",
    icon: (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-text-primary"
      >
        {/* Shield / badge */}
        <path
          d="M28 8l-16 6v12c0 9 7 17 16 20 9-3 16-11 16-20V14L28 8z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M21 28l4.5 4.5L35 23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Gold accent circle */}
        <circle cx="40" cy="40" r="8" fill="currentColor" className="text-primary" />
        <path
          d="M37 40l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-background px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <h2
            className={`${syne.className} text-[28px] font-bold leading-[1.12] text-text-primary sm:text-5xl`}
          >
            How It Works
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-base">
            Your journey from learning to earning in three simple steps.
          </p>
        </div>

        {/* Card */}
        <div className="mt-12 rounded-2xl bg-surface px-6 py-12 shadow-sm ring-1 ring-border sm:px-10 sm:py-16 lg:px-16">
          <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={`flex flex-col items-center text-center ${
                  index < steps.length - 1
                    ? "sm:border-r sm:border-border sm:pr-8"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center">{step.icon}</div>

                {/* Step title */}
                <h3
                  className={`${syne.className} mt-6 text-base font-bold leading-snug text-text-primary sm:text-lg`}
                >
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="mt-3 text-sm leading-relaxed text-text-secondary sm:text-sm">
                  {step.description}
                </p>

export default HowItWorks;
