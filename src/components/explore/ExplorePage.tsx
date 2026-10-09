import React, { useState, Suspense, lazy } from 'react';
import {
  Search,
  Filter,
  Globe,
  LayoutGrid,
  Bookmark,
  MapPin,
  Compass,
  ArrowRight,
  Sparkles,
  SlidersHorizontal,
  X,
  Sun,
} from 'lucide-react';
import { Destination } from '../../types/travel';
import { DestinationImage } from '../common/DestinationImage';

const Globe3D = lazy(() =>
  import('../globe/Globe3D').then((module) => ({ default: module.Globe3D }))
);

interface ExplorePageProps {
  destinations: Destination[];
  onSelectDestination: (dest: Destination) => void;
  onSaveTrip: (dest: Destination) => void;
  savedTrips: Destination[];
  onNavigateToAI?: () => void;
}

export const ExplorePage: React.FC<ExplorePageProps> = ({
  destinations,
  onSelectDestination,
  onSaveTrip,
  savedTrips = [],
  onNavigateToAI,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [budgetFilter, setBudgetFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'match' | 'budget_asc' | 'budget_desc' | 'rating'>('match');
  const [viewMode, setViewMode] = useState<'grid' | 'globe'>('grid');

  const categories = [
    'All',
    'Mountains',
    'Beaches',
    'Western Ghats',
    'Wildlife',
    'Spiritual',
    'Heritage',
    'Adventure',
    'Food',
  ];

  const filteredDestinations = destinations
    .filter((dest) => {
      // Category filter
      const categoryMatches =
        activeCategory === 'All' ||
        dest.tags.some((t) => t.toLowerCase() === activeCategory.toLowerCase()) ||
        dest.moodMatches.some((m) => m.toLowerCase() === activeCategory.toLowerCase()) ||
        (activeCategory === 'Mountains' &&
          (dest.region.includes('Himalayas') ||
            dest.tags.includes('Mountains') ||
            dest.tags.includes('Adventure'))) ||
        (activeCategory === 'Beaches' &&
          (dest.region.includes('Goa') ||
            dest.tags.includes('Beaches') ||
            dest.tags.includes('Islands'))) ||
        (activeCategory === 'Western Ghats' &&
          (dest.tags.includes('Western Ghats') ||
            dest.tags.includes('Tea Gardens') ||
            dest.tags.includes('Coffee') ||
            dest.name.includes('Munnar') ||
            dest.name.includes('Coorg') ||
            dest.name.includes('Wayanad') ||
            dest.name.includes('Ooty') ||
            dest.name.includes('Chikmagalur'))) ||
        (activeCategory === 'Wildlife' &&
          (dest.tags.includes('Wildlife') ||
            dest.tags.includes('Safari') ||
            dest.name.includes('Corbett') ||
            dest.name.includes('Ranthambore') ||
            dest.name.includes('Gir') ||
            dest.name.includes('Kanha') ||
            dest.name.includes('Kaziranga') ||
            dest.name.includes('Kabini'))) ||
        (activeCategory === 'Spiritual' &&
          (dest.tags.includes('Spirituality') ||
            dest.tags.includes('Temples') ||
            dest.tags.includes('Ghats') ||
            dest.name.includes('Varanasi') ||
            dest.name.includes('Rishikesh') ||
            dest.name.includes('Haridwar') ||
            dest.name.includes('Tirupati') ||
            dest.name.includes('Puri') ||
            dest.name.includes('Mathura') ||
            dest.name.includes('Ayodhya') ||
            dest.name.includes('Madurai') ||
            dest.name.includes('Amritsar'))) ||
        (activeCategory === 'Heritage' &&
          (dest.scores.culture >= 85 ||
            dest.tags.includes('Culture') ||
            dest.tags.includes('History') ||
            dest.tags.includes('Palaces'))) ||
        (activeCategory === 'Adventure' &&
          (dest.scores.adventure >= 85 ||
            dest.tags.includes('Adventure')));

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      const queryMatches =
        !query ||
        dest.name.toLowerCase().includes(query) ||
        dest.country.toLowerCase().includes(query) ||
        dest.region.toLowerCase().includes(query) ||
        dest.description.toLowerCase().includes(query) ||
        dest.tagline.toLowerCase().includes(query) ||
        dest.tags.some((t) => t.toLowerCase().includes(query));

      // Budget filter
      let budgetMatches = true;
      if (budgetFilter === 'under15k') {
        budgetMatches = dest.baseBudgetInr <= 15000;
      } else if (budgetFilter === '15k-30k') {
        budgetMatches = dest.baseBudgetInr > 15000 && dest.baseBudgetInr <= 30000;
      } else if (budgetFilter === 'above30k') {
        budgetMatches = dest.baseBudgetInr > 30000;
      }

      return categoryMatches && queryMatches && budgetMatches;
    })
    .sort((a, b) => {
      if (sortBy === 'budget_asc') return a.baseBudgetInr - b.baseBudgetInr;
      if (sortBy === 'budget_desc') return b.baseBudgetInr - a.baseBudgetInr;
      if (sortBy === 'rating') return (b.experienceScore || 90) - (a.experienceScore || 90);
      return (b.aiMatchScore || b.matchScore || 90) - (a.aiMatchScore || a.matchScore || 90);
    });

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
      {/* 1. Header & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-cyan-950/80 border border-sky-200 dark:border-cyan-500/40 text-sky-800 dark:text-cyan-300 text-xs font-bold tracking-wide shadow-xs">
            <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
            <span>ALL 69 INDIAN DESTINATIONS • DIRECTORY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white tracking-tight">
            Explore All Destinations
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            Discover verified travel destinations across India with authentic culture, real-time weather, crowd scores, and transparent budgets.
          </p>
        </div>

        {/* View Switcher: Card Grid vs 3D Globe */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900/90 backdrop-blur-xl p-1 rounded-2xl border border-slate-200 dark:border-white/10 shadow-xs self-start sm:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'grid'
                ? 'bg-gradient-to-r from-sky-600 to-blue-600 dark:from-cyan-500 dark:to-sky-600 text-white dark:text-slate-950 font-black shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Card Grid</span>
          </button>
          <button
            onClick={() => setViewMode('globe')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'globe'
                ? 'bg-gradient-to-r from-sky-600 to-blue-600 dark:from-cyan-500 dark:to-sky-600 text-white dark:text-slate-950 font-black shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>3D Interactive Globe</span>
          </button>
        </div>
      </div>

      {/* AI Recommendation Matcher Banner */}
      {onNavigateToAI && (
        <div className="rounded-3xl p-4 sm:p-5 bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 dark:from-cyan-950/80 dark:via-blue-950/70 dark:to-slate-900 border border-sky-200 dark:border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 dark:bg-cyan-500/20 border border-sky-500/30 dark:border-cyan-400/40 text-sky-600 dark:text-cyan-300 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-sky-600 dark:text-cyan-400" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-display font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Want personalized recommendations based on your preferences?</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-300 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-400/30 font-bold">
                  AI Matcher
                </span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                Tell AI your preferred terrain, budget, companions & mood to get the best-matched destination with synergy breakdown.
              </p>
            </div>
          </div>
          <button
            onClick={onNavigateToAI}
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-400 dark:hover:to-blue-500 text-white dark:text-slate-950 font-display font-black text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center gap-2 shrink-0 active:scale-95 self-stretch sm:self-auto justify-center"
          >
            <Sparkles className="w-4 h-4 stroke-[2.5]" />
            <span>Launch AI Recommender</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      )}

      {/* 2. Interactive Search & Filter Bar */}
      <div className="web3-glass-card bg-white/95 dark:bg-slate-900/90 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-white/10 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-sky-600 dark:text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by destination name, region, tags, or vibe..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-sky-500/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Budget & Sort Filters - side by side 2 columns on mobile */}
          <div className="grid grid-cols-2 md:flex items-center gap-2">
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="w-full md:w-auto px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
              aria-label="Filter by budget"
            >
              <option value="all">All Budgets</option>
              <option value="under15k">Under ₹15,000</option>
              <option value="15k-30k">₹15,000 – ₹30,000</option>
              <option value="above30k">₹30,000+</option>
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full md:w-auto px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-sky-500"
              aria-label="Sort destinations"
            >
              <option value="match">Sort: Highest Match</option>
              <option value="budget_asc">Sort: Budget Low to High</option>
              <option value="budget_desc">Sort: Budget High to Low</option>
              <option value="rating">Sort: Top Experience Score</option>
            </select>
          </div>
        </div>

        {/* Category Pills - smooth edge-to-edge swipe on mobile */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-sky-600 to-blue-600 dark:from-cyan-500 dark:to-sky-600 text-white dark:text-slate-950 font-black shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3D GLOBE VIEW MODE */}
      {viewMode === 'globe' && (
        <div className="relative w-full h-[360px] sm:h-[460px] lg:h-[520px] rounded-3xl overflow-hidden bg-slate-950 border border-sky-400/30 dark:border-cyan-500/30 shadow-[0_0_30px_rgba(2,132,199,0.15)] flex items-center justify-center animate-fadeIn">
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center gap-2 text-slate-400">
                <Compass className="w-8 h-8 animate-spin text-sky-500" />
                <span className="text-xs font-mono">Loading 3D Travel Globe...</span>
              </div>
            }
          >
            <Globe3D
              destinations={filteredDestinations}
              selectedDestination={null}
              onSelectDestination={onSelectDestination}
            />
          </Suspense>

          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-300 text-xs font-mono border border-cyan-500/30 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Interactive 3D View • Click markers to view destination</span>
          </div>
        </div>
      )}

      {/* 3. CARD GRID VIEW MODE */}
      {viewMode === 'grid' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span>
              Showing <strong className="text-sky-700 dark:text-cyan-400 font-bold">{filteredDestinations.length}</strong> destinations
            </span>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                  setBudgetFilter('all');
                }}
                className="text-sky-600 dark:text-cyan-400 hover:underline font-semibold"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredDestinations.length === 0 ? (
            <div className="py-16 text-center web3-glass-card bg-white/95 dark:bg-slate-900/90 rounded-3xl p-8 space-y-3 border border-slate-200 dark:border-white/10 shadow-md">
              <Compass className="w-12 h-12 text-sky-600 dark:text-cyan-400 mx-auto animate-pulse" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                No Destinations Found
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                No destinations matched your search query. Try removing filters or searching for another term.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                  setBudgetFilter('all');
                }}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 dark:from-cyan-500 dark:to-sky-600 text-white dark:text-slate-950 font-bold text-xs transition-all shadow-md"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((dest) => {
                const isSaved = savedTrips.some((d) => d.id === dest.id);
                const matchPct = dest.aiMatchScore || dest.matchScore || 90;

                return (
                  <div
                    key={dest.id}
                    onClick={() => onSelectDestination(dest)}
                    className="web3-glass-card bg-white/95 dark:bg-slate-900/90 border border-slate-200 dark:border-white/10 shadow-md group rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    {/* Top Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <DestinationImage
                        src={dest.heroImage || dest.image}
                        alt={dest.name}
                        destinationName={dest.name}
                        aspectRatio="aspect-[16/10]"
                      />

                      {/* Bookmark Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSaveTrip(dest);
                        }}
                        className={`absolute top-3 right-3 z-20 p-2 rounded-full backdrop-blur-md transition-all shadow-md active:scale-90 ${
                          isSaved
                            ? 'bg-rose-500 text-white'
                            : 'bg-black/60 text-white hover:bg-black/80'
                        }`}
                        title={isSaved ? 'Remove from saved' : 'Save destination'}
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                      </button>

                      {/* Region Tag */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-cyan-300 text-[11px] font-semibold flex items-center gap-1 border border-white/10">
                          <MapPin className="w-3 h-3 text-cyan-400" />
                          <span>{dest.region}</span>
                        </span>
                      </div>

                      {/* Bottom Image Strip */}
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex items-end justify-between z-10">
                        <span className="text-white text-xs font-semibold">
                          {dest.currentTemp} • {dest.weatherCondition}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold">
                          {matchPct}% Match
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-sky-600 dark:text-white dark:group-hover:text-cyan-400 line-clamp-1 transition-colors">
                            {dest.name}
                          </h3>
                          <span className="text-xs font-bold font-mono text-sky-700 bg-sky-50 border border-sky-200 dark:text-cyan-300 dark:bg-slate-800/80 dark:border-white/10 px-2 py-0.5 rounded-lg">
                            ₹{dest.baseBudgetInr.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mt-1 leading-relaxed">
                          {dest.tagline || dest.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                          {dest.tags.slice(0, 3).map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 dark:bg-slate-800/80 dark:border-white/5 text-slate-700 dark:text-slate-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Footer Action */}
                      <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-500 dark:text-slate-400">
                          {dest.recommendedDays || 4} Days • {dest.crowdLevel}
                        </span>
                        <span className="text-sky-600 dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
