import React from 'react';
import { Bookmark, Sparkles, ArrowRight, Trash2, MapPin, DollarSign, Calendar, ShieldCheck } from 'lucide-react';
import { Destination } from '../../types/travel';
import { DestinationImage } from '../common/DestinationImage';

interface MyTripsViewProps {
  savedTrips: Destination[];
  onSelectDestination: (dest: Destination) => void;
  onRemoveTrip: (destId: string) => void;
  onStartPlanning: () => void;
}

export const MyTripsView: React.FC<MyTripsViewProps> = ({
  savedTrips,
  onSelectDestination,
  onRemoveTrip,
  onStartPlanning,
}) => {
  const totalBudget = savedTrips.reduce(
    (acc, d) => acc + (d.estimatedBudget || d.baseBudgetInr || 0),
    0
  );

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
      {/* Header & Budget Accumulator */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-cyan-950/70 border border-sky-200 dark:border-cyan-500/30 text-sky-800 dark:text-cyan-400 text-xs font-bold tracking-wide shadow-xs">
            <Bookmark className="w-3.5 h-3.5 fill-sky-600 dark:fill-cyan-400 text-sky-600 dark:text-cyan-400" />
            <span>SAVED ITINERARIES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Saved Trips
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Your saved destinations, estimated trip budgets, and custom day-by-day itineraries.
          </p>
        </div>

        {savedTrips.length > 0 && (
          <div className="p-3.5 rounded-2xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex items-center justify-between sm:justify-start gap-4 shrink-0 shadow-md self-stretch sm:self-auto">
            <div>
              <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">Total Estimated Cost</span>
              <span className="font-mono font-bold text-lg text-emerald-600 dark:text-emerald-400">
                ₹{totalBudget.toLocaleString('en-IN')}
              </span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
            <div>
              <span className="text-[10px] uppercase font-mono font-bold text-slate-500 dark:text-slate-400 block">Trips Saved</span>
              <span className="font-bold text-lg text-sky-700 dark:text-cyan-300">{savedTrips.length}</span>
            </div>
          </div>
        )}
      </div>

      {/* Saved Trips Grid */}
      {savedTrips.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedTrips.map((dest) => {
            const cost = dest.estimatedBudget || dest.baseBudgetInr || 15000;
            const days = dest.duration || dest.recommendedDays || 4;

            return (
              <div
                key={dest.id}
                className="web3-glass-card bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer shadow-md hover:shadow-xl hover:border-sky-400 dark:hover:border-cyan-500/40 transition-all"
                onClick={() => onSelectDestination(dest)}
              >
                <div>
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <DestinationImage
                      src={dest.heroImage || dest.image}
                      alt={dest.name}
                      destinationName={dest.name}
                      country={dest.country}
                      aspectRatio="aspect-[16/10]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveTrip(dest.id);
                      }}
                      title="Remove from saved"
                      className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/70 hover:bg-rose-500 text-slate-300 hover:text-white backdrop-blur-md shadow-xs transition-all active:scale-95"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-cyan-300 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{dest.region}</span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors">
                      {dest.name}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                      "{dest.tagline}"
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                    ₹{cost.toLocaleString('en-IN')}
                    <span className="text-slate-500 dark:text-slate-400 font-normal font-sans text-[11px] block">
                      {days} Days Stay
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectDestination(dest);
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 dark:from-cyan-500 dark:to-sky-600 text-white dark:text-slate-950 font-bold text-xs transition-all flex items-center gap-1.5 shadow-md active:scale-95"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-white/95 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-200 dark:border-white/10 p-8 space-y-4 max-w-md mx-auto shadow-md">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-50 dark:bg-cyan-950/60 text-sky-600 dark:text-cyan-400 flex items-center justify-center border border-sky-200 dark:border-cyan-500/30">
            <Bookmark className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No Saved Trips Yet</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Bookmark any destination while exploring to save its complete itinerary and budget calculations here.
            </p>
          </div>
          <button
            onClick={onStartPlanning}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs transition-all shadow-md active:scale-95"
          >
            Start Planning with AI
          </button>
        </div>
      )}
    </div>
  );
};

