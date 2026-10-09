import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Compass,
  Users,
  Mountain,
  Palmtree,
  Trees,
  Landmark,
  Sun,
  DollarSign,
  Coffee,
  Utensils,
  Camera,
  RotateCcw,
  ShieldCheck,
  Flame,
  Heart,
  Crown,
  Zap,
} from 'lucide-react';
import { UserPreferences, TravelPace } from '../../types/travel';

interface AIStepWizardProps {
  initialPreferences: UserPreferences;
  onComplete: (prefs: UserPreferences) => void;
  onCancel?: () => void;
}

export const AIStepWizard: React.FC<AIStepWizardProps> = ({
  initialPreferences,
  onComplete,
  onCancel,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 6;

  // Step 1: Companions & Vibe
  const [companions, setCompanions] = useState<string>(initialPreferences.companions || 'Solo');
  const [mood, setMood] = useState<string>(initialPreferences.mood || 'Peaceful');

  // Step 2: Landscape & Climate
  const [geography, setGeography] = useState<string>(initialPreferences.geography || 'Cold Mountains & Snow');

  // Step 3: Duration & Pace
  const [duration, setDuration] = useState<string>(initialPreferences.duration || '3–5 days');
  const [pace, setPace] = useState<TravelPace>(initialPreferences.pace || 'Balanced');

  // Step 4: Budget Tier
  const [budget, setBudget] = useState<string>(initialPreferences.budget || '₹10K–₹25K');

  // Step 5: Crowd Tolerance & Dining
  const [crowdTolerance, setCrowdTolerance] = useState<string>(initialPreferences.crowdTolerance || 'Secluded & Offbeat');
  const [foodStyle, setFoodStyle] = useState<string>(initialPreferences.foodStyle || 'Authentic Regional Thali');

  // Step 6: Detailed Interests
  const [interests, setInterests] = useState<string[]>(
    initialPreferences.interests?.length ? initialPreferences.interests : ['Mountains', 'Nature', 'Photography']
  );

  const toggleInterest = (item: string) => {
    setInterests((prev) =>
      prev.includes(item)
        ? prev.length > 1
          ? prev.filter((i) => i !== item)
          : prev
        : [...prev, item]
    );
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } else {
      handleFinalSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  const handleFinalSubmit = () => {
    const preferences: UserPreferences = {
      mood,
      companions,
      geography,
      duration,
      pace,
      budget,
      crowdTolerance,
      foodStyle,
      interests,
      priority: 'Balanced',
    };
    onComplete(preferences);
  };

  // Step Labels for Header
  const stepTitles = [
    { step: 1, title: 'Companions & Travel Vibe', subtitle: 'Who is traveling and what energy are you craving?' },
    { step: 2, title: 'Landscape & Terrains', subtitle: 'What type of geography and climate excites you?' },
    { step: 3, title: 'Duration & Travel Pace', subtitle: 'How long is your journey and at what speed?' },
    { step: 4, title: 'Budget & Accommodation', subtitle: 'What is your comfortable spending tier?' },
    { step: 5, title: 'Crowds & Dining Style', subtitle: 'Secluded peace or lively bazaars? Plus your food taste.' },
    { step: 6, title: 'Must-Have Activities & Interests', subtitle: 'Pick the experiences that make your trip unforgettable.' },
  ];

  const currentMeta = stepTitles[currentStep - 1];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 animate-fadeIn">
      {/* 1. Wizard Progress Header */}
      <div className="web3-glass-card bg-white/95 dark:bg-slate-900/90 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-2xl bg-sky-50 dark:bg-cyan-500/20 text-sky-700 dark:text-cyan-300 border border-sky-200 dark:border-cyan-500/40 flex items-center justify-center font-mono font-bold text-xs">
              {currentStep}/{totalSteps}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-400 font-mono">
              Step-by-Step AI Questionnaire
            </span>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold text-sky-700 dark:text-cyan-400 font-mono">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 transition-all duration-300 ease-out shadow-[0_0_12px_rgba(2,132,199,0.4)]"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Current Step Title & Subtitle */}
        <div className="pt-1">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-600 dark:text-cyan-400 uppercase font-bold">
            <span>Step {currentStep} of {totalSteps}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white mt-0.5">
            {currentMeta.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5">
            {currentMeta.subtitle}
          </p>
        </div>
      </div>

      {/* 2. Step Questionnaire Body */}
      <div className="web3-glass-card bg-white/95 dark:bg-slate-900/90 rounded-3xl p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-7">
        {/* ================= STEP 1: COMPANIONS & VIBE ================= */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-mono mb-3">
                1. Who is traveling with you?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'Solo', label: 'Solo Traveler', icon: '🎒', desc: 'Freedom & soul searching' },
                  { id: 'Partner', label: 'Two of Us (Couple)', icon: '🥂', desc: 'Romance & sunsets' },
                  { id: 'Friends', label: 'The Squad (Friends)', icon: '⛺', desc: 'Shared road trips & fun' },
                  { id: 'Family', label: 'The Tribe (Family)', icon: '🏡', desc: 'Comfort & accessibility' },
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCompanions(c.id)}
                    className={`p-4 rounded-2xl text-left border transition-all hover:scale-[1.02] active:scale-95 ${
                      companions === c.id
                        ? 'border-sky-500 bg-sky-50/90 ring-2 ring-sky-400/40 text-slate-900 font-bold shadow-md dark:border-cyan-400 dark:bg-cyan-950/80 dark:text-white'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="text-2xl block mb-1.5">{c.icon}</span>
                    <span className="text-xs sm:text-sm font-bold block">{c.label}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">{c.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-mono mb-3">
                2. What primary travel vibe or mood do you want?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'Peaceful', label: 'Mountain Solitude', icon: '🏔️', desc: 'Misty trails & quiet reflection' },
                  { id: 'Relaxing', label: 'Coastal Euphoria', icon: '🌊', desc: 'Barefoot ocean chill & sunsets' },
                  { id: 'Adventure', label: 'Wild Adrenaline', icon: '🔥', desc: 'River rapids, treks & thrill' },
                  { id: 'Cultural', label: 'Heritage & Roots', icon: '🏛️', desc: 'Ancient forts & sacred rituals' },
                  { id: 'Food', label: 'Food Odyssey', icon: '🍲', desc: 'Regional heirloom feasts & spices' },
                  { id: 'Romantic', label: 'Romantic Hideaway', icon: '✨', desc: 'Intimate candlelit stays' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMood(m.id)}
                    className={`p-4 rounded-2xl text-left border transition-all hover:scale-[1.02] active:scale-95 ${
                      mood === m.id
                        ? 'border-sky-500 bg-sky-50/90 ring-2 ring-sky-400/40 text-slate-900 font-bold shadow-md dark:border-cyan-400 dark:bg-cyan-950/80 dark:text-white'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="text-2xl block mb-1.5">{m.icon}</span>
                    <span className="text-xs sm:text-sm font-bold block">{m.label}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 2: LANDSCAPE & TERRAIN ================= */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <label className="block text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-mono">
              Select Your Preferred Landscape & Terrain
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                {
                  id: 'Cold Mountains & Snow',
                  title: 'Snowy Himalayas & High Valleys',
                  icon: '🏔️',
                  desc: 'Crisp alpine air, turquoise lakes, passes and monastic silence.',
                  regions: 'Ladakh, Spiti, Kashmir, Manali',
                },
                {
                  id: 'Tropical Beaches & Ocean',
                  title: 'Tropical Coasts & Islands',
                  icon: '🌴',
                  desc: 'Warm turquoise waves, white sand, swaying palms & fresh seafood.',
                  regions: 'Goa, Andaman, Gokarna, Kerala',
                },
                {
                  id: 'Western Ghats & Tea Hills',
                  title: 'Lush Ghats & Tea Plantations',
                  icon: '🍃',
                  desc: 'Emerald cloud forests, spice gardens, waterfalls and tea estates.',
                  regions: 'Munnar, Wayanad, Coorg, Ooty',
                },
                {
                  id: 'UNESCO Heritage & Forts',
                  title: 'Imperial Forts & Heritage Palaces',
                  icon: '🏰',
                  desc: 'Royal dynasties, living sandstone citadels, ghats and temples.',
                  regions: 'Jaipur, Udaipur, Varanasi, Hampi',
                },
                {
                  id: 'Royal Desert & Dunes',
                  title: 'Golden Desert Dunes & Stargazing',
                  icon: '🐪',
                  desc: 'Rippling desert sands, folk music by campfires and starry skies.',
                  regions: 'Jaisalmer, Thar Desert, Kutch',
                },
                {
                  id: 'Wild Tiger Reserves & Forests',
                  title: 'Wild Tiger Reserves & Jungles',
                  icon: '🐅',
                  desc: 'Dense jungle canopies, open-jeep tiger safaris, and raw biodiversity.',
                  regions: 'Jim Corbett, Ranthambore, Gir',
                },
                {
                  id: 'Sacred Ghats & Spiritual Sanctuaries',
                  title: 'Sacred Rivers & Spiritual Ghats',
                  icon: '🛕',
                  desc: 'Timeless river aartis, ancient stone shrines, and inner peace.',
                  regions: 'Varanasi, Rishikesh, Haridwar, Puri',
                },
              ].map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGeography(g.id)}
                  className={`p-4 rounded-2xl text-left border transition-all hover:scale-[1.01] active:scale-95 flex gap-3.5 ${
                    geography === g.id
                      ? 'border-sky-500 bg-sky-50/90 ring-2 ring-sky-400/40 text-slate-900 font-bold shadow-md dark:border-cyan-400 dark:bg-cyan-950/80 dark:text-white'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span className="text-3xl shrink-0">{g.icon}</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold block">{g.title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{g.desc}</p>
                    <span className="inline-block mt-2 text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-sky-700 border border-slate-200 dark:bg-slate-800 dark:text-cyan-300 dark:border-slate-700">
                      {g.regions}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 3: DURATION & PACE ================= */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-mono mb-3">
                1. How long is your journey?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: '1–2 days', title: '1–2 Days', label: 'Weekend Trip', icon: '⚡' },
                  { id: '3–5 days', title: '3–5 Days', label: 'Ideal Escape', icon: '🗓️' },
                  { id: '1 week', title: '1 Week', label: 'Complete Immersion', icon: '✈️' },
                  { id: '2 weeks+', title: '2+ Weeks', label: 'Grand Expedition', icon: '🗺️' },
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDuration(d.id)}
                    className={`p-4 rounded-2xl text-left border transition-all hover:scale-[1.02] active:scale-95 ${
                      duration === d.id
                        ? 'border-sky-500 bg-sky-50/90 ring-2 ring-sky-400/40 text-slate-900 font-bold shadow-md dark:border-cyan-400 dark:bg-cyan-950/80 dark:text-white'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{d.icon}</span>
                    <span className="text-sm font-extrabold block">{d.title}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">{d.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-mono mb-3">
                2. What travel pace do you prefer?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'Slow',
                    title: 'Slow & Mindful',
                    desc: '1 activity per day, lazy breakfasts, time to read and rest.',
                    icon: '☕',
                  },
                  {
                    id: 'Balanced',
                    title: 'Balanced Explorer',
                    desc: 'Morning sightseeing, relaxed afternoons, sunset dinners.',
                    icon: '⚖️',
                  },
                  {
                    id: 'Fast',
                    title: 'Action-Packed',
                    desc: 'Full day itineraries, hitting every landmark and viewpoint.',
                    icon: '🚀',
                  },
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPace(p.id as TravelPace)}
                    className={`p-4 rounded-2xl text-left border transition-all hover:scale-[1.02] active:scale-95 ${
                      pace === p.id
                        ? 'border-sky-500 bg-sky-50/90 ring-2 ring-sky-400/40 text-slate-900 font-bold shadow-md dark:border-cyan-400 dark:bg-cyan-950/80 dark:text-white'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{p.icon}</span>
                    <span className="text-xs sm:text-sm font-bold block">{p.title}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1 leading-relaxed">{p.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 4: BUDGET & STAYS ================= */}
        {currentStep === 4 && (
          <div className="space-y-4 animate-fadeIn">
            <label className="block text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-mono">
              Select Your Ideal Budget Tier (Per Person)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                {
                  id: '₹5K–₹10K',
                  title: 'Budget Explorer',
                  range: '₹5,000 – ₹10,000',
                  icon: '🪙',
                  stays: 'Homestays, youth hostels, clean budget guesthouses & scenic local transport.',
                },
                {
                  id: '₹10K–₹25K',
                  title: 'Comfort Traveler',
                  range: '₹10,000 – ₹25,000',
                  icon: '💳',
                  stays: '3-star boutique hotels, cozy mountain chalets, private cabs and guided tours.',
                },
                {
                  id: '₹25K–₹50K',
                  title: 'Premium Escapes',
                  range: '₹25,000 – ₹50,000',
                  icon: '💎',
                  stays: '4-star heritage stays, luxury treehouses, curated experiences & private drivers.',
                },
                {
                  id: '₹50K+',
                  title: 'Royal Luxury',
                  range: '₹50,000+',
                  icon: '👑',
                  stays: '5-star royal palaces, private pool villas, chartered safaris & bespoke dining.',
                },
              ].map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBudget(b.id)}
                  className={`p-4 rounded-2xl text-left border transition-all hover:scale-[1.01] active:scale-95 flex gap-3.5 ${
                    budget === b.id
                      ? 'border-sky-500 bg-sky-50/90 ring-2 ring-sky-400/40 text-slate-900 font-bold shadow-md dark:border-cyan-400 dark:bg-cyan-950/80 dark:text-white'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                  }`}
                >
                  <span className="text-3xl shrink-0">{b.icon}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">{b.title}</h4>
                      <span className="text-xs font-bold text-sky-700 dark:text-cyan-400 font-mono">({b.range})</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{b.stays}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ================= STEP 5: CROWD & DINING ================= */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-mono mb-3">
                1. Crowd Tolerance & Atmosphere
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'Secluded & Offbeat',
                    title: 'Secluded & Offbeat',
                    icon: '🌲',
                    desc: 'Far away from tourist crowds, peaceful silence.',
                  },
                  {
                    id: 'Balanced Explorer',
                    title: 'Balanced & Moderate',
                    icon: '⚖️',
                    desc: 'Enjoy landmarks without extreme congestion.',
                  },
                  {
                    id: 'Vibrant & Lively',
                    title: 'Vibrant & Social',
                    icon: '🎉',
                    desc: 'Night markets, bustling cafes, lively street energy.',
                  },
                ].map((ct) => (
                  <button
                    key={ct.id}
                    type="button"
                    onClick={() => setCrowdTolerance(ct.id)}
                    className={`p-4 rounded-2xl text-left border transition-all hover:scale-[1.02] active:scale-95 ${
                      crowdTolerance === ct.id
                        ? 'border-sky-500 bg-sky-50/90 ring-2 ring-sky-400/40 text-slate-900 font-bold shadow-md dark:border-cyan-400 dark:bg-cyan-950/80 dark:text-white'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{ct.icon}</span>
                    <span className="text-xs sm:text-sm font-bold block text-slate-900 dark:text-white">{ct.title}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-relaxed">{ct.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-mono mb-3">
                2. Preferred Culinary & Dining Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'Authentic Regional Thali', title: 'Regional Thali', icon: '🍛', desc: 'Authentic local heirloom recipes' },
                  { id: 'Local Street Food & Bazaars', title: 'Street Food Feasts', icon: '🍢', desc: 'Bazaars, chaat & food stalls' },
                  { id: 'Cafe Culture & Slow Brunches', title: 'Cafe Culture', icon: '☕', desc: 'Artisanal cafes & slow brunches' },
                  { id: 'Fine Dining & Luxury', title: 'Fine Dining', icon: '🍷', desc: 'Gourmet curated restaurants' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFoodStyle(f.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all hover:scale-[1.02] active:scale-95 ${
                      foodStyle === f.id
                        ? 'border-sky-500 bg-sky-50/90 ring-2 ring-sky-400/40 text-slate-900 font-bold shadow-md dark:border-cyan-400 dark:bg-cyan-950/80 dark:text-white'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{f.icon}</span>
                    <span className="text-xs font-bold block text-slate-900 dark:text-white">{f.title}</span>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-0.5 leading-tight">{f.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 6: MUST-HAVE ACTIVITIES ================= */}
        {currentStep === 6 && (
          <div className="space-y-4 animate-fadeIn">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-cyan-300 font-mono">
                Select Your Favorite Activities & Interests (Choose multiple)
              </label>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                TourAI will prioritize destinations that offer these experiences.
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {[
                { id: 'Mountains', title: 'High Mountain Vistas', icon: '🏔️' },
                { id: 'Photography', title: 'Golden Hour Photography', icon: '📸' },
                { id: 'Trekking', title: 'Trekking & Hiking', icon: '🥾' },
                { id: 'Beaches', title: 'Beach Walks & Ocean Swims', icon: '🏄' },
                { id: 'Nature', title: 'Waterfalls & Rainforests', icon: '🌿' },
                { id: 'Wildlife Safari', title: 'Wildlife & Tiger Safaris', icon: '🐅' },
                { id: 'Culture', title: 'Heritage Forts & Palaces', icon: '🏰' },
                { id: 'History', title: 'Historic Temples & Sacred Ghats', icon: '🛕' },
                { id: 'Tea & Coffee', title: 'Tea & Coffee Plantations', icon: '☕' },
                { id: 'Food', title: 'Regional Thalis & Street Eats', icon: '🍲' },
                { id: 'Stargazing', title: 'Celestial Stargazing', icon: '🌌' },
                { id: 'Rafting', title: 'River Rafting & Adventure', icon: '⚡' },
              ].map((item) => {
                const isSelected = interests.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleInterest(item.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all flex items-center justify-between gap-2 active:scale-95 ${
                      isSelected
                        ? 'border-sky-500 bg-sky-50/90 text-slate-900 font-bold ring-2 ring-sky-400/40 shadow-sm dark:border-cyan-400 dark:bg-cyan-950/90 dark:text-white'
                        : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-xs font-bold">{item.title}</span>
                    </div>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-sky-600 text-white dark:bg-cyan-500 dark:text-slate-950 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Summary preview */}
            <div className="mt-4 p-4 rounded-2xl bg-sky-50/90 dark:bg-cyan-950/60 border border-sky-200 dark:border-cyan-500/40 text-xs text-sky-900 dark:text-cyan-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0" />
              <span>
                All 6 preference categories ready! Click below to synthesize and reveal your ideal Indian destination match.
              </span>
            </div>
          </div>
        )}

        {/* 3. Wizard Footer Navigation (Back / Next) */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2.5 sm:gap-4">
          <div>
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 shrink-0"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : onCancel ? (
              <button
                type="button"
                onClick={onCancel}
                className="px-3.5 sm:px-4 py-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white text-xs font-semibold shrink-0"
              >
                Cancel
              </button>
            ) : (
              <div />
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleNext}
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-display font-black text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-sky-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 text-center"
            >
              <span className="hidden sm:inline">
                {currentStep === totalSteps ? 'Synthesize & Recommend Best Destination' : 'Continue to Next Step'}
              </span>
              <span className="sm:hidden font-bold">
                {currentStep === totalSteps ? 'Synthesize & Match' : 'Continue'}
              </span>
              {currentStep === totalSteps ? (
                <Sparkles className="w-4 h-4 stroke-[2.5] shrink-0" />
              ) : (
                <ArrowRight className="w-4 h-4 stroke-[2.5] shrink-0" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
