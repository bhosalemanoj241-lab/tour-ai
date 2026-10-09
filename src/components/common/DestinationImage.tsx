import React, { useState } from 'react';
import { Compass, MapPin } from 'lucide-react';

interface DestinationImageProps {
  src?: string;
  alt: string;
  className?: string;
  destinationName?: string;
  country?: string;
  aspectRatio?: string; // e.g. 'aspect-[16/10]' or 'h-64'
  priority?: boolean;
}

export const DestinationImage: React.FC<DestinationImageProps> = ({
  src,
  alt,
  className = '',
  destinationName,
  country,
  aspectRatio = 'aspect-[16/10]',
  priority = false,
}) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // If no source or error occurred, show clean travel placeholder
  if (!src || hasError) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-gradient-to-br from-slate-100 via-sky-50 to-slate-200 flex flex-col items-center justify-center text-slate-500 p-6 select-none ${aspectRatio} ${className}`}
        role="img"
        aria-label={alt || destinationName || 'Destination'}
      >
        <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm border border-slate-200/80 flex items-center justify-center text-travel-600 mb-2">
          <Compass className="w-6 h-6 animate-pulse" />
        </div>
        <span className="font-display font-bold text-slate-800 text-base text-center line-clamp-1">
          {destinationName || alt || 'Explore Destination'}
        </span>
        {country && (
          <span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-travel-500" />
            {country}
          </span>
        )}
        <span className="mt-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/70 border border-slate-200 text-slate-500">
          Travelora Curated
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden bg-slate-100 ${aspectRatio} ${className}`}>
      {/* Skeleton loader while fetching */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse z-10" />
      )}

      <img
        src={src}
        alt={alt || destinationName || 'Destination'}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};
