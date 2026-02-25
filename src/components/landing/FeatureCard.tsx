import type { ICardProps } from '../landing/interfaces/ICard';
import { FooterCard } from './FooterCard';
import { HeaderCard } from './HeaderCard';
import { StatsRows } from './StatsRows';

export const FeatureCard = ({ cardProps }: { cardProps: ICardProps }) => {
  return (
    <article
      className={`group bg-white rounded-2xl shadow-md overflow-hidden
                 hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300 ease-in-out
                 flex flex-col h-full cursor-pointer w-${cardProps.size || 'full'}`}
    >
      {/* image + badge */}
      <div className="relative overflow-hidden">
        <img
          src={cardProps.imageUrl}
          alt={cardProps.title}
          className="w-full h-48 object-cover
                     group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span
          className="absolute top-3 right-3 bg-primary text-white
                     text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
        >
          +{cardProps.learnReward} LEARN
        </span>
      </div>

      <HeaderCard cardProps={cardProps} />

      {/* content */}
      <div className="p-5 flex flex-col flex-1 gap-2">
        <StatsRows cardProps={cardProps} />

        {/* author */}
        <FooterCard cardProps={cardProps} />
      </div>
    </article>
  );
};
