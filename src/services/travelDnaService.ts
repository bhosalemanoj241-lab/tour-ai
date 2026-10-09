import { TravelDNA, UserPreferences } from '../types/travel';

export function calculateTravelDNA(prefs?: UserPreferences): TravelDNA {
  if (!prefs) {
    return {
      scores: {
        explorer: 88,
        cultureSeeker: 82,
        foodLover: 74,
        natureLover: 94,
        luxury: 38,
        adventure: 91,
        spontaneity: 76,
      },
      archetype: 'The Mindful Wilderness Explorer',
      title: 'High-Elevation Pioneer',
      description: 'You seek profound immersion in untamed landscapes and remote traditional cultures, intentionally bypassing commercial tourist circuits.',
      badge: 'Uncharted Alchemist',
      matchingDestinations: ['Tirthan Valley', 'Ladakh', 'Ziro Valley'],
    };
  }

  let explorer = 70;
  let cultureSeeker = 60;
  let foodLover = 60;
  let natureLover = 70;
  let luxury = 30;
  let adventure = 60;
  let spontaneity = 60;

  if (prefs.mood === 'Adventurous') adventure += 25;
  if (prefs.mood === 'Peaceful') { natureLover += 20; explorer += 10; }
  if (prefs.mood === 'Romantic') luxury += 20;
  if (prefs.mood === 'Curious') { cultureSeeker += 25; explorer += 15; }
  if (prefs.mood === 'Food') foodLover += 30;
  if (prefs.mood === 'Spontaneous') spontaneity += 25;

  if (prefs.budget === 'Luxury') luxury += 35;
  if (prefs.budget === 'Budget') { explorer += 10; spontaneity += 10; }

  prefs.interests.forEach((i) => {
    const l = i.toLowerCase();
    if (l.includes('nature') || l.includes('mountains')) natureLover += 12;
    if (l.includes('adventure')) adventure += 15;
    if (l.includes('culture') || l.includes('history') || l.includes('spirituality')) cultureSeeker += 14;
    if (l.includes('food')) foodLover += 15;
    if (l.includes('photography')) explorer += 10;
  });

  if (prefs.priority === 'Hidden places') { explorer += 15; natureLover += 10; }
  if (prefs.priority === 'Luxury') luxury += 25;
  if (prefs.priority === 'Adventure') adventure += 15;

  const clamp = (n: number) => Math.min(99, Math.max(25, Math.round(n)));

  const scores = {
    explorer: clamp(explorer),
    cultureSeeker: clamp(cultureSeeker),
    foodLover: clamp(foodLover),
    natureLover: clamp(natureLover),
    luxury: clamp(luxury),
    adventure: clamp(adventure),
    spontaneity: clamp(spontaneity),
  };

  let archetype = 'The Mindful Explorer';
  let title = 'Solitary Trail Seeker';
  let description = 'You thrive where trails end and untouched nature begins, seeking authenticity over comfort.';

  if (scores.adventure >= 88 && scores.natureLover >= 85) {
    archetype = 'The High-Altitude Nomad';
    title = 'Alpine Vanguard';
    description = 'Drawn toward dramatic mountain passes, deep glacial valleys, and the silence of pristine wilderness.';
  } else if (scores.foodLover >= 85 && scores.cultureSeeker >= 80) {
    archetype = 'The Epicurean Pioneer';
    title = 'Artisanal Forager';
    description = 'Believes every culture is best understood through its traditional kitchens, spice trails, and heirloom recipes.';
  } else if (scores.cultureSeeker >= 88) {
    archetype = 'The Living Historian';
    title = 'Ancient Soul';
    description = 'Fascinated by living heritage, sacred architecture, and deep-rooted community traditions.';
  } else if (scores.luxury >= 80) {
    archetype = 'The Curated Connoisseur';
    title = 'Serene Hedonist';
    description = 'Prefers private, high-touch retreats where exquisite comfort meets breathtaking geography.';
  }

  return {
    scores,
    archetype,
    title,
    description,
    badge: 'Verified Travel DNA',
    matchingDestinations: ['Tirthan Valley', 'Ladakh', 'South Goa', 'Kyoto Outskirts'],
  };
}
