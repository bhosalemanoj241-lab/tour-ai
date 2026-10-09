import { Destination, UserPreferences } from '../types/travel';
import { INITIAL_DESTINATIONS } from '../data/destinations';

export interface RecommendationResult {
  destination: Destination;
  calculatedMatchPct: number;
  matchReasons: string[];
}

export function computeRecommendations(
  prefs: UserPreferences,
  destinations: Destination[] = INITIAL_DESTINATIONS
): RecommendationResult[] {
  return destinations
    .map((dest) => {
      let score = 25; // baseline
      const reasons: string[] = [];

      const destTags = dest.tags.map((t) => t.toLowerCase());
      const destRegion = dest.region.toLowerCase();
      const destName = dest.name.toLowerCase();

      // ================= 1. GEOGRAPHY & TERRAIN (Dominant Factor: +35 / -30) =================
      if (prefs.geography) {
        const geo = prefs.geography.toLowerCase();

        if (geo.includes('mountain') || geo.includes('snow') || geo.includes('himalaya')) {
          const isMountain =
            destTags.includes('mountains') ||
            destTags.includes('snow') ||
            destRegion.includes('himalayas') ||
            destRegion.includes('himachal') ||
            destRegion.includes('ladakh') ||
            destRegion.includes('kashmir') ||
            destRegion.includes('uttarakhand') ||
            destRegion.includes('sikkim') ||
            destRegion.includes('arunachal') ||
            destRegion.includes('nilgiris');

          if (isMountain) {
            score += 35;
            reasons.push('Majestic alpine peaks, high passes, and crisp Himalayan air');
          } else {
            score -= 30; // Heavy penalty if not mountain
          }
        } else if (geo.includes('beach') || geo.includes('coast') || geo.includes('island') || geo.includes('ocean')) {
          const isBeach =
            destTags.includes('beaches') ||
            destTags.includes('islands') ||
            destTags.includes('coastal') ||
            destName.includes('goa') ||
            destName.includes('gokarna') ||
            destName.includes('andaman') ||
            destName.includes('lakshadweep') ||
            destName.includes('varkala') ||
            destName.includes('kovalam') ||
            destName.includes('puducherry') ||
            destName.includes('alibaug') ||
            destName.includes('mahabalipuram') ||
            destName.includes('puri');

          if (isBeach) {
            score += 35;
            reasons.push('Turquoise waves, soft sand shores, and scenic tropical sea breezes');
          } else {
            score -= 30;
          }
        } else if (geo.includes('western ghats') || geo.includes('tea') || geo.includes('coffee') || geo.includes('hill')) {
          const isGhats =
            destTags.includes('western ghats') ||
            destTags.includes('tea gardens') ||
            destTags.includes('coffee') ||
            destName.includes('munnar') ||
            destName.includes('coorg') ||
            destName.includes('wayanad') ||
            destName.includes('ooty') ||
            destName.includes('chikmagalur') ||
            destName.includes('kodaikanal') ||
            destName.includes('mahabaleshwar') ||
            destName.includes('panchgani') ||
            destName.includes('araku');

          if (isGhats) {
            score += 35;
            reasons.push('Lush green emerald hills, cascading waterfalls, and aroma of tea/coffee');
          } else {
            score -= 25;
          }
        } else if (geo.includes('desert') || geo.includes('dune') || geo.includes('sand')) {
          const isDesert =
            destTags.includes('desert') ||
            destName.includes('jaisalmer') ||
            destName.includes('kutch') ||
            destName.includes('jodhpur') ||
            destName.includes('pushkar') ||
            destRegion.includes('thar');

          if (isDesert) {
            score += 35;
            reasons.push('Rippling golden desert dunes, starry night skies, and campfires');
          } else {
            score -= 30;
          }
        } else if (geo.includes('heritage') || geo.includes('fort') || geo.includes('palace')) {
          const isHeritage =
            destTags.includes('culture') ||
            destTags.includes('history') ||
            destTags.includes('palaces') ||
            destTags.includes('unesco heritage') ||
            destName.includes('jaipur') ||
            destName.includes('udaipur') ||
            destName.includes('hampi') ||
            destName.includes('khajuraho') ||
            destName.includes('ajanta') ||
            destName.includes('agra') ||
            destName.includes('mysore');

          if (isHeritage) {
            score += 35;
            reasons.push('UNESCO world heritage monuments, royal citadels, and centuries of history');
          } else {
            score -= 20;
          }
        } else if (geo.includes('wildlife') || geo.includes('safari') || geo.includes('tiger') || geo.includes('forest')) {
          const isWildlife =
            destTags.includes('wildlife') ||
            destTags.includes('safari') ||
            destTags.includes('tiger safari') ||
            destName.includes('corbett') ||
            destName.includes('ranthambore') ||
            destName.includes('gir') ||
            destName.includes('kanha') ||
            destName.includes('kaziranga') ||
            destName.includes('kabini');

          if (isWildlife) {
            score += 36;
            reasons.push('Premier wildlife sanctuaries, open tiger safaris, and dense jungle trails');
          } else {
            score -= 30;
          }
        } else if (geo.includes('spiritual') || geo.includes('sacred') || geo.includes('temple') || geo.includes('ghat')) {
          const isSpiritual =
            destTags.includes('temples') ||
            destTags.includes('ghats') ||
            destTags.includes('holy lake') ||
            destName.includes('varanasi') ||
            destName.includes('haridwar') ||
            destName.includes('rishikesh') ||
            destName.includes('tirupati') ||
            destName.includes('puri') ||
            destName.includes('mathura') ||
            destName.includes('ayodhya') ||
            destName.includes('madurai') ||
            destName.includes('rameswaram') ||
            destName.includes('amritsar');

          if (isSpiritual) {
            score += 36;
            reasons.push('Ancient sacred river ghats, temple bells, and transcendent spiritual peace');
          } else {
            score -= 25;
          }
        }
      }

      // ================= 2. MOOD / VIBE (Weight: up to 14 pts) =================
      const moodLower = (prefs.mood || '').toLowerCase();
      const moodHit = dest.moodMatches.some((m) =>
        m.toLowerCase().includes(moodLower) || moodLower.includes(m.toLowerCase())
      );
      if (moodHit) {
        score += 12;
        reasons.push(`Perfect match for your ${prefs.mood} mindset`);
      } else {
        if (moodLower.includes('peace') && (dest.crowdLevel === 'Low' || dest.scores.relaxation >= 88)) {
          score += 8;
          reasons.push('Tranquil environment free from chaotic city noise');
        } else if (moodLower.includes('adventur') && dest.scores.adventure >= 88) {
          score += 8;
          reasons.push('High-thrill outdoor experiences & untamed terrain');
        } else if (moodLower.includes('cultur') && dest.scores.culture >= 88) {
          score += 8;
          reasons.push('Deep immersion into regional folklore, architecture and art');
        } else if (moodLower.includes('relax') && dest.scores.relaxation >= 88) {
          score += 8;
          reasons.push('Unrushed sanctuary built for peaceful decompression');
        } else if (moodLower.includes('romantic') && (dest.tags.includes('Romantic') || dest.scores.relaxation >= 88)) {
          score += 8;
          reasons.push('Idyllic scenery for romantic memories and sunset strolls');
        }
      }

      // ================= 3. BUDGET TIER (Weight: up to 12 pts) =================
      let userBudgetCeiling = 50000;
      let userBudgetFloor = 0;
      if (prefs.budget.includes('5K–₹10K') || prefs.budget.includes('5k')) {
        userBudgetFloor = 0;
        userBudgetCeiling = 13500;
      } else if (prefs.budget.includes('10K–₹25K') || prefs.budget.includes('10K–₹20K') || prefs.budget.toLowerCase() === 'budget') {
        userBudgetFloor = 8000;
        userBudgetCeiling = 27000;
      } else if (prefs.budget.includes('25K–₹50K') || prefs.budget.includes('20K–₹50K') || prefs.budget.toLowerCase() === 'mid-range') {
        userBudgetFloor = 18000;
        userBudgetCeiling = 52000;
      } else if (prefs.budget.includes('50K+') || prefs.budget.toLowerCase() === 'luxury') {
        userBudgetFloor = 30000;
        userBudgetCeiling = 200000;
      }

      if (dest.baseBudgetInr <= userBudgetCeiling) {
        if (dest.baseBudgetInr >= userBudgetFloor) {
          score += 12;
          reasons.push(`Budget friendly at ₹${dest.baseBudgetInr.toLocaleString('en-IN')} (fits your tier comfortably)`);
        } else {
          score += 9;
          reasons.push(`High value: ₹${dest.baseBudgetInr.toLocaleString('en-IN')} well within your spending threshold`);
        }
      } else {
        const overPct = (dest.baseBudgetInr - userBudgetCeiling) / userBudgetCeiling;
        if (overPct > 0.4) {
          score -= 16;
        } else {
          score -= 8;
        }
      }

      // ================= 4. DURATION & PACING (Weight: up to 10 pts) =================
      const dur = (prefs.duration || '').toLowerCase();
      if (dur.includes('1–2') || dur.includes('weekend')) {
        if (dest.recommendedDays <= 3) {
          score += 10;
          reasons.push(`Ideal weekend escape (${dest.recommendedDays || 2} days recommended)`);
        } else if (dest.recommendedDays >= 5) {
          score -= 12;
        }
      } else if (dur.includes('3–5')) {
        if (dest.recommendedDays >= 3 && dest.recommendedDays <= 5) {
          score += 10;
          reasons.push(`Tailored perfectly for a ${dest.recommendedDays}-day itinerary`);
        }
      } else if (dur.includes('1 week') || dur.includes('2 weeks') || dur.includes('more')) {
        if (dest.recommendedDays >= 4) {
          score += 10;
          reasons.push(`Deep immersion destination with abundant hidden trails`);
        }
      }

      // Pace
      if (prefs.pace === 'Slow') {
        if (dest.crowdLevel === 'Low' || dest.scores.relaxation >= 88) {
          score += 4;
        }
      } else if (prefs.pace === 'Fast') {
        if (dest.scores.adventure >= 85 || dest.scores.culture >= 90) {
          score += 4;
        }
      }

      // ================= 5. COMPANION SUITABILITY (Weight: up to 8 pts) =================
      if (prefs.companions === 'Solo') {
        if (dest.crowdLevel === 'Low' || dest.tags.includes('Peaceful') || dest.scores.nature >= 88) {
          score += 8;
          reasons.push('Highly rated for solo travelers seeking calm and safety');
        }
      } else if (prefs.companions === 'Partner') {
        if (dest.tags.includes('Romantic') || dest.moodMatches.includes('Romantic') || dest.scores.relaxation >= 88) {
          score += 8;
          reasons.push('Charming couple getaways with intimate sunset viewpoints');
        }
      } else if (prefs.companions === 'Friends') {
        if (dest.tags.includes('Adventure') || dest.scores.adventure >= 88 || dest.tags.includes('Nightlife') || dest.tags.includes('Beaches')) {
          score += 8;
          reasons.push('Exciting group activities, vibrant stays, and road trip routes');
        }
      } else if (prefs.companions === 'Family') {
        if (dest.tags.includes('Family') || dest.tags.includes('Culture') || dest.scores.culture >= 86) {
          score += 8;
          reasons.push('Comfortable infrastructure and all-ages family accessibility');
        }
      }

      // ================= 6. CROWD TOLERANCE (Weight: up to 6 pts) =================
      if (prefs.crowdTolerance) {
        const crowdLower = prefs.crowdTolerance.toLowerCase();
        if (crowdLower.includes('hidden') || crowdLower.includes('offbeat') || crowdLower.includes('secluded') || crowdLower.includes('low')) {
          if (dest.crowdLevel === 'Low' || dest.crowdScore <= 35) {
            score += 6;
            reasons.push('Untouched by mass tourism — low crowd density');
          } else if (dest.crowdLevel === 'High') {
            score -= 5;
          }
        } else if (crowdLower.includes('vibrant') || crowdLower.includes('lively') || crowdLower.includes('social')) {
          if (dest.crowdLevel === 'Moderate' || dest.crowdLevel === 'High') {
            score += 6;
            reasons.push('Bustling social scene, artisan bazaars, and evening energy');
          }
        }
      }

      // ================= 7. FOOD & DINING PREFERENCE (Weight: up to 5 pts) =================
      if (prefs.foodStyle) {
        const foodLower = prefs.foodStyle.toLowerCase();
        if (foodLower.includes('street') && dest.scores.food >= 88) {
          score += 5;
          reasons.push('Famous for mouthwatering heritage street food stalls');
        } else if (foodLower.includes('thali') || foodLower.includes('regional')) {
          if (dest.scores.culture >= 88 || dest.scores.food >= 88) {
            score += 5;
            reasons.push('Legendary authentic regional feasts and heirloom recipes');
          }
        } else if (foodLower.includes('cafe')) {
          if (dest.tags.includes('Food') || destTags.includes('cafe') || dest.tags.includes('Beaches') || destTags.includes('colonial') || destName.includes('kasol') || destName.includes('goa') || destName.includes('pondicherry') || destName.includes('dharamshala')) {
            score += 5;
            reasons.push('Artisanal bakeries, slow brunches, and rooftop cafes');
          }
        }
      }

      // ================= 8. INTERESTS & ACTIVITIES (Weight: up to 10 pts) =================
      let hits = 0;
      (prefs.interests || []).forEach((interest) => {
        const lower = interest.toLowerCase();
        if ((lower.includes('mountain') || lower.includes('snow')) && (destTags.includes('mountains') || dest.scores.nature >= 90)) {
          hits++;
        }
        if ((lower.includes('beach') || lower.includes('water')) && (destTags.includes('beaches') || destTags.includes('islands'))) {
          hits++;
        }
        if (lower.includes('food') && dest.scores.food >= 85) {
          hits++;
        }
        if ((lower.includes('history') || lower.includes('temple') || lower.includes('fort') || lower.includes('palace')) && dest.scores.culture >= 85) {
          hits++;
        }
        if ((lower.includes('adventure') || lower.includes('trek') || lower.includes('rafting')) && dest.scores.adventure >= 85) {
          hits++;
          reasons.push(`Top-tier playground for ${interest}`);
        }
        if (lower.includes('wildlife') || lower.includes('safari')) {
          if (destTags.includes('wildlife') || destTags.includes('safari')) {
            hits++;
            reasons.push('Rich wildlife sightings and guided safari zones');
          }
        }
        if (lower.includes('photo') && (dest.scores.nature >= 92 || dest.scores.culture >= 92)) {
          hits++;
          reasons.push('Photographer’s dream vistas during golden hour');
        }
        if (lower.includes('stargazing') && dest.crowdScore <= 35) {
          hits++;
          reasons.push('Clear celestial skies with negligible light pollution');
        }
      });
      score += Math.min(10, hits * 2.5);

      // Ensure at least 3 compelling reasons
      if (reasons.length < 3 && dest.whyAiChose?.length) {
        dest.whyAiChose.forEach((r) => {
          if (reasons.length < 4 && !reasons.includes(r)) {
            reasons.push(r);
          }
        });
      }

      // Clamp between 50% and 98%
      const clampedScore = Math.min(98, Math.max(52, Math.round(score)));

      return {
        destination: {
          ...dest,
          aiMatchScore: clampedScore,
          matchScore: clampedScore,
        },
        calculatedMatchPct: clampedScore,
        matchReasons: reasons.slice(0, 4),
      };
    })
    .sort((a, b) => b.calculatedMatchPct - a.calculatedMatchPct);
}
