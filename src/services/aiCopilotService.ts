export interface CopilotMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  destinationLink?: string;
  recommendationCard?: {
    name: string;
    region: string;
    matchPct: number;
    estimatedCost: string;
    keyPoints: string[];
  };
}

export function queryCopilot(userInput: string): CopilotMessage {
  const query = userInput.toLowerCase();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 1. Specific mountain budget query
  if (query.includes('15,000') || (query.includes('mountains') && (query.includes('crowd') || query.includes('quiet') || query.includes('budget')))) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: "Based on your ₹15,000 budget and 4-day window seeking uncrowded mountains, I strongly recommend Tirthan Valley over Manali.",
      timestamp: time,
      destinationLink: 'tirthan-valley',
      recommendationCard: {
        name: 'Tirthan Valley',
        region: 'Himachal Pradesh, India',
        matchPct: 96,
        estimatedCost: '₹13,800 total trip',
        keyPoints: [
          '74% lower crowd density than Manali/Kasol',
          'Trout river cedar stays at ~₹1,200/night',
          'Ancient 1500-yr wooden fortresses hidden in apple orchards',
          'Crystal-clear Great Himalayan National Park eco-trails'
        ]
      }
    };
  }

  // 2. Pune / Western Ghats / quiet escapes
  if (query.includes('pune') || query.includes('maharashtra') || query.includes('western ghats')) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: "For a quiet escape near Pune away from commercial Lonavala traps, consider Kaas Plateau outskirts & Bamnoli lakeside, or Velhe remote forts.",
      timestamp: time,
      recommendationCard: {
        name: 'Bamnoli & Vasota Backwaters',
        region: 'Satara / Koyna Sanctuary',
        matchPct: 93,
        estimatedCost: '₹8,500 for 3 days',
        keyPoints: [
          'Silent boat crossing across emerald Koyna backwaters',
          'Dense evergreen forest trek with zero mobile network',
          'Authentic rustic Maharashtrian pithla-bhakri at lakeside homestays'
        ]
      }
    };
  }

  // 3. Romance / Beaches without crowds
  if (query.includes('romance') || query.includes('romantic') || query.includes('couple') || query.includes('beach')) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: "Skip North Goa tourist crowds. South Goa Secret Coves (Agonda & Cola) offer secluded lagoons and heritage Portuguese estates.",
      timestamp: time,
      destinationLink: 'south-goa',
      recommendationCard: {
        name: 'South Goa Secret Coves',
        region: 'Canacona & Quepem',
        matchPct: 95,
        estimatedCost: '₹18,400 for 4 days',
        keyPoints: [
          'Private beach lagoon where freshwater river meets the sea',
          'Candlelit beachside dining with coconut-shell lighting',
          'Heritage Indo-Portuguese plantation cottages'
        ]
      }
    };
  }

  // 4. Food lovers
  if (query.includes('food') || query.includes('eat') || query.includes('cuisine') || query.includes('culinary')) {
    return {
      id: Math.random().toString(),
      sender: 'assistant',
      text: "For true culinary depth, Travelora suggests an artisanal spice journey through South Goa's coastal backwaters or Kyoto's tea-cultivation outskirts in Uji.",
      timestamp: time,
      recommendationCard: {
        name: 'South Goa Artisanal Kitchens',
        region: 'Goa Coastal Hinterland',
        matchPct: 97,
        estimatedCost: '₹16,500',
        keyPoints: [
          'Stone-ground coconut curries and fresh crab poi',
          '400-year-old woodfire bakeries and cashew feni cellars',
          'Organic spice farm foraging with master local chefs'
        ]
      }
    };
  }

  // 5. General / Fallback smart conversational travel advice
  return {
    id: Math.random().toString(),
    sender: 'assistant',
    text: `Travelora AI analyzed your query: "${userInput}". I've matched your criteria with our real-time database of low-density, high-authenticity destinations.`,
    timestamp: time,
    destinationLink: 'tirthan-valley',
    recommendationCard: {
      name: 'Tirthan Valley & Great Himalayan Gateway',
      region: 'Himachal Pradesh',
      matchPct: 94,
      estimatedCost: '₹14,200',
      keyPoints: [
        'Optimal weather window right now (16°C)',
        'Crowd score: 18/100 (Extremely quiet)',
        'AI adaptive schedule ready to explore'
      ]
    }
  };
}
