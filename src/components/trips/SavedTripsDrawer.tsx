import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, MapPin, DollarSign, Compass } from 'lucide-react';
import { Destination } from '../../types/travel';
import { DestinationImage } from '../common/DestinationImage';

interface SavedTripsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedTrips: Destination[];
  onSelectDestination: (dest: Destination) => void;
  onRemoveTrip: (destId: string) => void;
  onNavigateExplore: () => void;
}

export const SavedTripsDrawer: React.FC<SavedTripsDrawerProps> = ({
  isOpen,
  onClose,
  savedTrips,
  onSelectDestination,
  onRemoveTrip,
  onNavigateExplore,
}) => {
  if (!isOpen) return null;

  const totalBudget = savedTrips.reduce((acc, d) => acc + (d.baseBudgetInr || 0), 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div
        className="relative w-full max-w-full sm:max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl h-full flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 pt-safe">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
              <Bookmark className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                Saved Destinations
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {savedTrips.length} {savedTrips.length === 1 ? 'place' : 'places'} bookmarked
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
          {savedTrips.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <Compass className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto animate-pulse" />
              <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">
                No Bookmarked Destinations Yet
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs mx-auto">
                Click the bookmark icon on any recommended destination to save it here for quick reference.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNavigateExplore();
                }}
                className="px-4 py-2 rounded-xl bg-sky-600 text-white font-semibold text-xs shadow-xs"
              >
                Explore Destinations
              </button>
            </div>
          ) : (
            savedTrips.map((dest) => (
              <div
                key={dest.id}
                onClick={() => {
                  onSelectDestination(dest);
                  onClose();
                }}
                className="group p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-800 flex gap-3 cursor-pointer transition-all"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 relative">
                  <DestinationImage
                    src={dest.heroImage || dest.image}
                    alt={dest.name}
                    destinationName={dest.name}
                    aspectRatio="h-full w-full"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {dest.name}
                      </h4>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveTrip(dest.id);
                        }}
                        className="p-1 rounded-md text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                        title="Remove bookmark"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-sky-500" />
                      {dest.region}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                    <span className="font-bold text-slate-900 dark:text-white">
                      ₹{dest.baseBudgetInr.toLocaleString('en-IN')}
                    </span>
                    <span className="text-sky-600 dark:text-sky-400 font-semibold flex items-center gap-1 text-[11px]">
                      <span>View</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer with Safe-area padding */}
        {savedTrips.length > 0 && (
          <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 space-y-3 shrink-0 pb-safe">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 dark:text-slate-400">Total Estimated Stash:</span>
              <span className="font-display font-extrabold text-sm text-slate-900 dark:text-white">
                ₹{totalBudget.toLocaleString('en-IN')}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-display font-bold text-xs shadow-xs"
            >
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
