import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  iconClassName?: string;
  showText?: boolean;
}

export function StarRating({ 
  rating, 
  maxRating = 5, 
  className,
  iconClassName,
  showText = true 
}: StarRatingProps) {
  // Ensure rating is between 0 and maxRating
  const safeRating = Math.max(0, Math.min(rating, maxRating));
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className={cn("w-4 h-4 fill-amber-400 text-amber-400", iconClassName)} />
        ))}
        {hasHalfStar && (
          <StarHalf key="half" className={cn("w-4 h-4 fill-amber-400 text-amber-400", iconClassName)} />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className={cn("w-4 h-4 text-gray-300", iconClassName)} />
        ))}
      </div>
      {showText && (
        <span className="text-sm font-medium text-gray-700 ml-1.5">{safeRating.toFixed(1)}</span>
      )}
    </div>
  );
}
