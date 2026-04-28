import { Award, Globe2, ShieldCheck } from "lucide-react";

const valueCards = [
  {
    title: "Earn real rewards",
    description:
      "Complete learning quests and earn tokens that can be redeemed or withdrawn on Stellar.",
    icon: Award,
  },
  {
    title: "Verify your skills on-chain",
    description:
      "Receive verifiable credentials that employers can validate instantly.",
    icon: ShieldCheck,
  },
  {
    title: "Access global opportunities",
    description:
      "Get matched with employers and collaborators across borders with fast settlement.",
    icon: Globe2,
  },
];

const ValuePreposition = () => {
  return (
    <section className="bg-[#F8FAFB] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F4B42A]">
            Value Proposition
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Why Learnault is the best way to learn, earn, and grow.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#51607F] sm:text-lg">
            Learnault combines skills training, blockchain credentials, and rewards in one modern learning platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {valueCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-[32px] border border-[#E8EDF3] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#FEF0C7] text-[#B47611]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-[#0F172A]">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#5F6368]">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePreposition;
