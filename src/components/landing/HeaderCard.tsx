import { ICardProps } from "./interfaces/ICard";

/* category to label mapping */
const categoryLabel: Record<string, string> = {
  TECHNOLOGY: 'label-information',
  BUSINESS: 'label-information',
  DESIGN: 'label-information',
  SCIENCE: 'label-information',
  FINANCE: 'label-information',
};

export const HeaderCard = ({ cardProps }: { cardProps: ICardProps }) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white">
    {/* category */}
        <span className={`${categoryLabel[cardProps.category] ?? 'label-default'} text-xs font-semibold leading-4 uppercase tracking-wide text-`}>
          {cardProps.category}
        </span>

        {/* title */}
        <h3 className="text-lg font-bold text-gray-900 leading-7">
          {cardProps.title}
        </h3>

        {/* description */}
        <p className="text-sm font-normal text-gray-500 leading-5 flex-1">
          {cardProps.description}
        </p>

    </div>
  )
}
