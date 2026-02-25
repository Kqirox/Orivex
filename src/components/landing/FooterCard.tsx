import type { ICardProps } from '../landing/interfaces/ICard';

export const FooterCard = ({ cardProps }: { cardProps: ICardProps }) => {
    return (
        <p className="mt-2 text-sm text-gray-500">
            By{' '}
            <span className="font-semibold text-gray-900">{cardProps.author}</span>
        </p>
    )
}
