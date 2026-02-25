import type { ICardProps } from '../landing/interfaces/ICard';
import { FeatureCard } from './FeatureCard';

export const FeaturesGrid = ({ cardProps }: { cardProps: ICardProps[] }) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      role="list"
    >
      {cardProps.map((mod) => (
        <div key={mod.id} role="listitem">
          <FeatureCard cardProps={mod} />
        </div>
      ))}
    </div>
  );
};
