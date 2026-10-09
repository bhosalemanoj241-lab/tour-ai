import React from 'react';
import { DestinationSnapshot } from '../../services/globalTourismAI';
import { Calendar, Wallet, ShieldCheck, MapPin, Sparkles, Compass, Bookmark, ExternalLink } from 'lucide-react';

interface DestinationSnapshotCardProps {
  snapshot: DestinationSnapshot;
  onActionClick: (prompt: string) => void;
  onSaveTrip?: (destName: string) => void;
  isSaved?: boolean;
}

export const DestinationSnapshotCard: React.FC<DestinationSnapshotCardProps> = ({
  snapshot,
  onActionClick,
  onSaveTrip,
  isSaved = false,
}) => {
  return (
    <div className="my-3 rounded-2xl bg-gradient-to-br from-white via-slate-50/50 to-travel-50/30 border border-travel-200/70 p-3.5 sm:p-4 shadow-sm text-xs space-y-3">
      {/* Top Banner */}
      <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{snapshot.flag}</span>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-display font-bold text-sm sm:text-base text-slate-900">
                {snapshot.name}
              </h4>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-travel-100 text-travel-800">
                {snapshot.continent}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 italic line-clamp-1">{snapshot.tagline}</p>
          </div>
        </div>

        {onSaveTrip && (
          <button
            onClick={() => onSaveTrip(snapshot.name)}
            className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1 text-[11px] font-medium ${
              isSaved
                ? 'bg-coral text-white border-coral'
                : 'bg-white text-slate-600 border-slate-200 hover:border-travel-400 hover:text-travel-700'
            }`}
            title={isSaved ? 'Saved in My Trips' : 'Save to My Trips'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-white' : ''}`} />
            <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        )}
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
        <div className="p-2 rounded-xl bg-white border border-slate-100 flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5 text-travel-600 shrink-0" />
          <div className="overflow-hidden">
            <span className="text-[10px] text-slate-400 block font-medium">Best Season</span>
            <span className="font-semibold text-slate-800 truncate block">{snapshot.bestSeason.split(' ')[0]}</span>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-white border border-slate-100 flex items-center gap-2">
          <Wallet className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <div className="overflow-hidden">
            <span className="text-[10px] text-slate-400 block font-medium">Daily Cost</span>
            <span className="font-semibold text-slate-800 truncate block">{snapshot.dailyBudget.midRange.split('/')[0]}</span>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-white border border-slate-100 flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">Safety Score</span>
            <span className="font-bold text-slate-800">{snapshot.safetyRating}/100</span>
          </div>
        </div>

        <div className="p-2 rounded-xl bg-white border border-slate-100 flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-coral shrink-0" />
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">Ideal Trip</span>
            <span className="font-bold text-slate-800">{snapshot.idealDays} Days</span>
          </div>
        </div>
      </div>

      {/* Highlights & Gems */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-[11px]">
          <MapPin className="w-3 h-3 text-travel-600" />
          <span>Must-See Icons:</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {snapshot.topAttractions.slice(0, 3).map((a, idx) => (
            <span
              key={idx}
              className="text-[10px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
            >
              {a}
            </span>
          ))}
        </div>
      </div>

      {/* Action Chips */}
      <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
        <button
          onClick={() => onActionClick(`Generate a detailed ${snapshot.idealDays}-day itinerary for ${snapshot.name}`)}
          className="px-2.5 py-1 rounded-full bg-travel-600 text-white font-medium text-[10px] hover:bg-travel-700 transition-colors flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3" />
          <span>Generate {snapshot.idealDays}-Day Plan</span>
        </button>

        <button
          onClick={() => onActionClick(`Detailed budget breakdown for ${snapshot.name} for 2 travelers`)}
          className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-travel-400 text-slate-700 font-medium text-[10px] transition-colors"
        >
          💰 Budget Estimator
        </button>

        <button
          onClick={() => onActionClick(`What are the secret hidden gems and uncrowded spots in ${snapshot.name}?`)}
          className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-travel-400 text-slate-700 font-medium text-[10px] transition-colors"
        >
          💎 Secret Gems
        </button>

        <button
          onClick={() => onActionClick(`Visa requirements and entry documents for ${snapshot.name}`)}
          className="px-2.5 py-1 rounded-full bg-white border border-slate-200 hover:border-travel-400 text-slate-700 font-medium text-[10px] transition-colors"
        >
          🛂 Visa Guide
        </button>
      </div>
    </div>
  );
};
