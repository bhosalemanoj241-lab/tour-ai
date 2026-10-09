import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Check,
  Compass,
  SlidersHorizontal,
  Flame,
  Heart,
  Mountain,
  Users,
  User,
  ShieldCheck,
  Palmtree,
  Coffee,
  Trees,
  Sun,
  Camera,
  Calendar,
  RotateCcw,
} from 'lucide-react';
import { UserPreferences } from '../../types/travel';

interface AITripPlannerViewProps {
  initialPreferences?: UserPreferences | null;
  onSubmitPreferences: (prefs: UserPreferences) => void;
  onCancel?: () => void;
}

export const AITripPlannerView: React.FC<AITripPlannerViewProps> = ({
  initialPreferences,
  onSubmitPreferences,
  onCancel,
}) => {
  // Preference States
  const [mood, setMood] = useState<string>(initialPreferences?.mood || 'Peaceful');
  const [companions, setCompanions] = useState<string>(initialPreferences?.companions || 'Solo');
  const [budget, setBudget] = useState<string>(initialPreferences?.budget || '₹10K–₹25K');
  const [duration, setDuration] = useState<string>(initialPreferences?.duration || '3–5 days');
  const [geography, setGeography] = useState<string>(initialPreferences?.geography || 'Cold Mountains & Snow');
  const [crowdTolerance, setCrowdTolerance] = useState<string>(initialPreferences?.crowdTolerance || 'Secluded & Offbeat');
  const [foodStyle, setFoodStyle] = useState<string>(initialPreferences?.foodStyle || 'Authentic Regional Thali');
  const [interests, setInterests] = useState<string[]>(
    initialPreferences?.interests || ['Mountains', 'Nature', 'Photography']
  );

  const [inputMode, setInputMode] = useState<'matrix' | 'prompt'>('matrix');
  const [customPrompt, setCustomPrompt] = useState<string>('');

  const toggleInterest = (item: string) => {
    setInterests((prev) =>
      prev.includes(item) ? (prev.length > 1 ? prev.filter((i) => i !== item) : prev) : [...prev, item]
    );
  };

  const handleFinish = () => {
    const preferences: UserPreferences = {
      mood,
      companions,
      budget,
      duration,
      geography,
      crowdTolerance,
      foodStyle,
      interests,
      pace: 'Balanced',
      priority: 'Balanced',
    };
    onSubmitPreferences(preferences);
  };

  const curatedPromptPresets = [
    {
      title: 'Himalayan Mountain Solitude',
      prompt: '4 days solo in peaceful misty Himalayas with hot tea & reading under ₹15,000',
      icon: '🏔️',
      tag: 'Solo • Mountains • ₹10K–₹25K',
      prefs: {
        mood: 'Peaceful',
        companions: 'Solo',
        budget: '₹10K–₹25K',
        duration: '3–5 days',
        geography: 'Cold Mountains & Snow',
        crowdTolerance: 'Secluded & Offbeat',
        foodStyle: 'Authentic Regional Thali',
        interests: ['Mountains', 'Nature', 'Photography'],
      },
    },
    {
      title: 'Romantic Cliffside Ocean Hideaway',
      prompt: 'Romantic ocean villa with candlelight seafood & private sunsets in South Goa under ₹35,000',
      icon: '🌴',
      tag: 'Partner • Beaches • ₹25K–₹50K',
      prefs: {
        mood: 'Romantic',
        companions: 'Partner',
        budget: '₹25K–₹50K',
        duration: '3–5 days',
        geography: 'Tropical Beaches & Ocean',
        crowdTolerance: 'Secluded & Offbeat',
        foodStyle: 'Cafe Culture & Slow Brunches',
        interests: ['Beaches', 'Food', 'Photography'],
      },
    },
    {
      title: 'Wild River Rapids & Camping',
      prompt: 'Weekend river rafting, cliff jumping & camping with college friends in Rishikesh under ₹10,000',
      icon: '🔥',
      tag: 'Friends • Adventure • ₹5K–₹10K',
      prefs: {
        mood: 'Adventure',
        companions: 'Friends',
        budget: '₹5K–₹10K',
        duration: '1–2 days',
        geography: 'Cold Mountains & Snow',
        crowdTolerance: 'Balanced Explorer',
        foodStyle: 'Local Street Food & Bazaars',
        interests: ['Adventure', 'Rivers', 'Nature'],
      },
    },
    {
      title: 'Royal Heritage & Desert Dunes',
      prompt: 'Living sandstone forts, palaces, and camel safari in Rajasthan with family under ₹30,000',
      icon: '🏛️',
      tag: 'Family • Heritage • ₹25K–₹50K',
      prefs: {
        mood: 'Cultural',
        companions: 'Family',
        budget: '₹25K–₹50K',
        duration: '1 week',
        geography: 'Royal Desert & Dunes',
        crowdTolerance: 'Balanced Explorer',
        foodStyle: 'Authentic Regional Thali',
        interests: ['History', 'Culture', 'Food'],
      },
    },
  ];

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
      {/* Page Title & Breadcrumb */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-travel-50 border border-travel-200 text-travel-700 text-xs font-bold tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-travel-600 animate-pulse" />
          <span>STEP 1 OF 3 • ENTER YOUR PREFERENCES</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
          AI Trip Planner
        </h1>
        <p className="text-xs sm:text-sm text-slate-600">
          Calibrate your journey across India. TourAI analyzes your preferences and recommends the best matching destinations.
        </p>
      </div>

      {/* Main Intake Box */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
        {/* Top Header Mode Toggle */}
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-travel-600 text-white flex items-center justify-center">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Trip Preferences Matrix
            </span>
          </div>

          <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setInputMode('matrix')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                inputMode === 'matrix' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Interactive Dials
            </button>
            <button
              type="button"
              onClick={() => setInputMode('prompt')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                inputMode === 'prompt' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
              }`}
            >
              Prompt Whisperer
            </button>
          </div>
        </div>

        {/* MODE 1: INTERACTIVE DIALS */}
        {inputMode === 'matrix' && (
          <div className="p-6 sm:p-8 space-y-7">
            {/* 1. Mood */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-travel-100 text-travel-700 flex items-center justify-center text-[11px] font-bold">1</span>
                  <span>Travel Mood & Energy</span>
                </label>
                <span className="text-xs font-bold text-travel-600">{mood}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'Peaceful', label: 'Mountain Solitude', icon: '🏔️', desc: 'Misty trails & quiet reflection' },
                  { id: 'Relaxing', label: 'Coastal Euphoria', icon: '🌊', desc: 'Turquoise sea & barefoot chill' },
                  { id: 'Adventure', label: 'Wild Adrenaline', icon: '🔥', desc: 'Peaks, river rapids & thrill' },
                  { id: 'Cultural', label: 'Heritage & Roots', icon: '🏛️', desc: 'Ancient forts, temples & palaces' },
                  { id: 'Food', label: 'Food Odyssey', icon: '🍜', desc: 'Street food feasts & spices' },
                  { id: 'Romantic', label: 'Romantic Escapes', icon: '✨', desc: 'Intimate stays & starlit sunsets' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMood(m.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      mood === m.id
                        ? 'border-travel-600 bg-travel-50/80 text-travel-950 font-bold shadow-xs ring-2 ring-travel-200'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="text-xl block mb-1">{m.icon}</span>
                    <span className="text-xs font-bold block">{m.label}</span>
                    <span className="text-[10px] text-slate-500 block leading-tight mt-0.5 line-clamp-1">{m.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Companions & Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3 border-t border-slate-100">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-travel-100 text-travel-700 flex items-center justify-center text-[11px] font-bold">2</span>
                  <span>Travel Companions</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'Solo', label: 'Solo Wanderer', icon: '🎒' },
                    { id: 'Partner', label: 'Two of Us (Couple)', icon: '🥂' },
                    { id: 'Friends', label: 'The Squad (Friends)', icon: '⛺' },
                    { id: 'Family', label: 'The Tribe (Family)', icon: '🏡' },
                  ].map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCompanions(c.id)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all ${
                        companions === c.id
                          ? 'border-travel-600 bg-travel-50 text-travel-900 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span className="text-base">{c.icon}</span>
                      <span className="truncate">{c.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-travel-100 text-travel-700 flex items-center justify-center text-[11px] font-bold">3</span>
                  <span>Estimated Budget per Person</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { tier: '₹5K–₹10K', label: 'Budget Friendly' },
                    { tier: '₹10K–₹25K', label: 'Comfort Standard' },
                    { tier: '₹25K–₹50K', label: 'Premium Boutique' },
                    { tier: '₹50K+', label: 'Luxury Escapes' },
                  ].map((b) => (
                    <button
                      key={b.tier}
                      type="button"
                      onClick={() => setBudget(b.tier)}
                      className={`p-2.5 rounded-xl border text-xs text-left transition-all ${
                        budget === b.tier
                          ? 'border-travel-600 bg-travel-50 text-travel-900 font-bold shadow-xs'
                          : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <span className="font-mono font-bold block">{b.tier}</span>
                      <span className="text-[10px] text-slate-500 block">{b.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Landscape & Duration */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-travel-100 text-travel-700 flex items-center justify-center text-[11px] font-bold">4</span>
                  <span>Preferred Landscape & Climate</span>
                </label>
                <span className="text-xs font-bold text-travel-600">{geography}</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {[
                  { id: 'Cold Mountains & Snow', label: 'Snow & Mountains', icon: '❄️' },
                  { id: 'Tropical Beaches & Ocean', label: 'Sunny Beaches', icon: '🌴' },
                  { id: 'Lush Western Ghats & Forests', label: 'Western Ghats', icon: '🌿' },
                  { id: 'Royal Desert & Dunes', label: 'Thar Desert', icon: '🐪' },
                  { id: 'Heritage & Sacred River Towns', label: 'Ancient Heritage', icon: '🛕' },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setGeography(g.id)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      geography === g.id
                        ? 'border-travel-600 bg-travel-50 text-travel-900 font-bold shadow-xs ring-1 ring-travel-300'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    <span className="text-xl block mb-1">{g.icon}</span>
                    <span className="text-[11px] font-semibold block leading-tight">{g.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Duration & Activities */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-travel-100 text-travel-700 flex items-center justify-center text-[11px] font-bold">5</span>
                  <span>Trip Duration</span>
                </label>
                <div className="flex items-center gap-1.5">
                  {['1–2 days', '3–5 days', '1 week', 'More'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDuration(d)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        duration === d ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  6. Must-Have Experiences (Select all you like)
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Mountains',
                    'Beaches',
                    'Food',
                    'History',
                    'Adventure',
                    'Nature',
                    'Photography',
                    'Spirituality',
                    'Shopping',
                  ].map((item) => {
                    const isSelected = interests.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleInterest(item)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-travel-600 border-travel-600 text-white shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        <span>{item}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>AI searches across 65+ verified destinations in India</span>
              </div>

              <button
                type="button"
                onClick={handleFinish}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-travel-600 to-sky-500 hover:from-travel-700 hover:to-sky-600 text-white font-display font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate AI Recommendations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* MODE 2: PROMPT WHISPERER */}
        {inputMode === 'prompt' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                Type your dream travel craving in natural language
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="e.g. 4 days solo in peaceful misty mountains with tea & reading under ₹15,000..."
                  className="w-full bg-slate-50 text-slate-900 text-sm pl-4 pr-32 py-3.5 rounded-2xl border border-slate-200 focus:outline-none focus:border-travel-600 focus:ring-2 focus:ring-travel-100"
                />
                <button
                  type="button"
                  onClick={handleFinish}
                  className="absolute right-2 px-4 py-2 rounded-xl bg-travel-600 text-white text-xs font-bold"
                >
                  Generate
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Or pick a 1-tap curated trip
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {curatedPromptPresets.map((item) => (
                  <div
                    key={item.title}
                    onClick={() => {
                      setMood(item.prefs.mood);
                      setCompanions(item.prefs.companions);
                      setBudget(item.prefs.budget);
                      setDuration(item.prefs.duration);
                      setGeography(item.prefs.geography);
                      setInterests(item.prefs.interests);
                      onSubmitPreferences({
                        ...item.prefs,
                        pace: 'Balanced',
                        priority: 'Balanced',
                      });
                    }}
                    className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-travel-400 hover:bg-travel-50/40 cursor-pointer transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-travel-50 text-travel-700 border border-travel-200">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">"{item.prompt}"</p>
                    </div>
                    <div className="pt-2 mt-2 border-t border-slate-100 text-xs text-travel-600 font-bold flex items-center justify-between">
                      <span>Launch with AI</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
