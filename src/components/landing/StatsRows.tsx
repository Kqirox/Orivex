import type { ICardProps } from '../landing/interfaces/ICard';
import { Clock, Star, TrendingUp, Users } from "lucide-react"


export const StatsRows = ({ cardProps }: { cardProps: ICardProps }) => {
  return (
    <div className="mt-2 flex justify-between flex-wrap items-center gap-8 text-sm text-gray-500">
      <span className="flex items-center gap-1">
        <Clock className="h-4 w-4 text-gray-400 self-start mt-1" />
        <span className="flex flex-col leading-none">
          <span className="font-medium">{cardProps.duration}</span>
          <span className="text-xs text-gray-400">min</span>
        </span>
      </span>

      <span className="inline-flex items-center gap-1">
        <Users className="h-4 w-4 text-gray-400" />
        {cardProps.students.toLocaleString()}
      </span>

      <span className="inline-flex items-center gap-1">
        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        {cardProps.rating}
      </span>

      <span className="inline-flex items-center gap-1">
        <TrendingUp className="h-4 w-4 text-gray-400" />
        {cardProps.level}
      </span>
    </div>
  )
}
