export type TravelMood =
  | 'Adventure'
  | 'Relaxing'
  | 'Romantic'
  | 'Cultural'
  | 'Food'
  | 'Nature'
  | 'Peaceful'
  | 'Adventurous'
  | 'Curious'
  | 'Social'
  | 'Spontaneous';

export type CompanionType = 'Solo' | 'Friends' | 'Family' | 'Partner' | 'Business';

export type BudgetTier = '₹5K–₹10K' | '₹10K–₹20K' | '₹20K–₹50K' | '₹50K+' | 'Budget' | 'Mid-range' | 'Premium' | 'Luxury';

export type TravelDuration = '1–2 days' | '3–5 days' | '1 week' | 'More' | 'Weekend' | '2 weeks' | '1 month+';

export type TravelPace = 'Slow' | 'Balanced' | 'Fast';

export interface UserPreferences {
  mood: string;
  companions: string;
  budget: string;
  duration: string;
  interests: string[];
  geography?: string;
  crowdTolerance?: string;
  foodStyle?: string;
  pace?: TravelPace;
  priority?: string;
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  category: 'culture' | 'food' | 'nature' | 'adventure' | 'relaxation' | 'transit';
  duration: string;
  costInr: number;
  isOutdoor: boolean;
  weatherWarning?: string;
  crowdLevel?: 'Low' | 'Moderate' | 'Peak';
  optimized?: boolean;
}

export interface DayPlan {
  day: number;
  title: string;
  dateStr?: string;
  weather: {
    temp: string;
    condition: 'Sunny' | 'Partly Cloudy' | 'Rain' | 'Misty' | 'Clear Night';
    icon: string;
    aiNotice?: string;
  };
  activities: Activity[];
}

export interface HiddenGem {
  name: string;
  description: string;
  crowdReductionPct: number;
  savingsInr: number;
  authenticityScore: number;
  experienceScore: number;
  popularAlternativeName: string;
  image?: string;
}

export interface Destination {
  id: string;
  name: string;
  region: string;
  country: string;
  tagline: string;
  description: string;
  heroImage: string;
  image?: string; // Standard image field conforming to Real Image Architecture
  galleryImages: string[];
  lat: number;
  lng: number;
  baseBudgetInr: number;
  estimatedBudget?: number; // Alias for baseBudgetInr
  recommendedDays: number;
  duration?: number; // Alias for recommendedDays
  tags: string[]; // e.g. ["Adventure", "Nature", "Photography"]
  bestSeason: string;
  currentTemp: string;
  weatherCondition: string;
  crowdLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  crowdScore: number; // 0 - 100 (lower means fewer crowds)
  experienceScore: number; // 0 - 100
  aiMatchScore: number; // dynamically computed or base
  matchScore?: number; // Alias for aiMatchScore
  scores: {
    adventure: number;
    culture: number;
    food: number;
    nature: number;
    relaxation: number;
    luxury: number;
    spontaneity: number;
  };
  whyAiChose: string[];
  travelDnaFit: string;
  hiddenGems: HiddenGem[];
  popularCounterpart?: {
    name: string;
    crowdLevel: string;
    avgCostInr: number;
    whyAvoid: string;
    image?: string;
  };
  itinerary: DayPlan[];
  optimalVisitingHours: {
    peakHours: string;
    recommendedHours: string;
    reason: string;
    aiConfidence: number;
  };
  budgetBreakdown: {
    flights: number;
    accommodation: number;
    food: number;
    transport: number;
    activities: number;
    shopping?: number;
    emergency?: number;
  };
  moodMatches: (TravelMood | string)[];
}

export interface TravelDNA {
  scores: {
    explorer: number;
    cultureSeeker: number;
    foodLover: number;
    natureLover: number;
    luxury: number;
    adventure: number;
    spontaneity: number;
  };
  archetype: string;
  title: string;
  description: string;
  badge: string;
  matchingDestinations: string[];
}

export interface TravelStory {
  id: string;
  title: string;
  author: string;
  authorLocation: string;
  avatar: string;
  destination: string;
  duration: string;
  image: string;
  stats: {
    distanceKm: number;
    placesVisited: number;
    hiddenGemsFound: number;
    savedInr: number;
  };
  quote: string;
  likes: number;
  isLiked?: boolean;
}

export interface AIAnalysisStep {
  id: string;
  label: string;
  detail: string;
  completed: boolean;
}
