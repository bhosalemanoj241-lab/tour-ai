// Global Tourism AI Engine - Comprehensive Worldwide Tourism Knowledge & Reasoning
// Supports built-in encyclopedic tourism intelligence + optional live Gemini / OpenAI API integration

export interface DestinationSnapshot {
  name: string;
  country: string;
  continent: string;
  flag: string;
  tagline: string;
  bestSeason: string;
  idealDays: number;
  dailyBudget: {
    backpacker: string;
    midRange: string;
    luxury: string;
  };
  visaSummary: string;
  topAttractions: string[];
  hiddenGems: string[];
  localFood: string[];
  safetyRating: number; // 0-100
  scamsToAvoid: string[];
  transportTips: string;
  currency: string;
  cultureTips: string[];
  itinerarySummary: {
    day1: string;
    day2: string;
    day3: string;
  };
}

export interface AIChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  snapshot?: DestinationSnapshot;
  comparison?: {
    dest1: DestinationSnapshot;
    dest2: DestinationSnapshot;
    verdict: string;
  };
  quickSuggestions?: string[];
  category?: 'itinerary' | 'budget' | 'visa' | 'gems' | 'food' | 'weather' | 'general' | 'comparison';
}

// Global Knowledge Base: Covering key destinations worldwide
export const GLOBAL_TOURISM_DATABASE: Record<string, DestinationSnapshot> = {
  japan: {
    name: 'Japan (Tokyo, Kyoto, Osaka)',
    country: 'Japan',
    continent: 'Asia',
    flag: '🇯🇵',
    tagline: 'Hyper-futuristic neon metropolises blended with ancient zen temples and culinary perfection',
    bestSeason: 'March–May (Cherry Blossoms) & October–November (Autumn Foliage)',
    idealDays: 7,
    dailyBudget: {
      backpacker: '$50–$70 / ¥8,000 / ₹5,500',
      midRange: '$120–$200 / ¥25,000 / ₹13,000',
      luxury: '$350+ / ¥55,000+ / ₹30,000+',
    },
    visaSummary: 'eVisa / Visa-free for 70+ countries (USA, UK, EU, Australia). Indian passport holders can apply for simplified tourist eVisas.',
    topAttractions: ['Fushimi Inari Shrine (Kyoto)', 'Mount Fuji & Lake Kawaguchiko', 'Shibuya Crossing & Shinjuku (Tokyo)', 'Dotonbori Neon District (Osaka)', 'Arashiyama Bamboo Grove', 'Senso-ji Temple (Asakusa)'],
    hiddenGems: ['Kinosaki Onsen (classic hot-spring canal town)', 'Nakasendo Trail (Edo-era walking path between Magome & Tsumago)', 'Naoshima Art Island', 'Todoroki Ravine (hidden green gorge in Tokyo)'],
    localFood: ['Authentic Tonkotsu Ramen', 'Edomae Nigiri Sushi at Tsukiji', 'Takoyaki & Okonomiyaki in Osaka', 'Matcha Parfaits in Uji', 'A5 Wagyu Beef in Kobe'],
    safetyRating: 98,
    scamsToAvoid: ['Touts in Roppongi/Kabukicho bars offering cheap drinks with hidden cover charges', 'Fake Buddhist monk bracelet scams in Asakusa'],
    transportTips: 'Buy a digital Suica/Pasmo IC card for metro, use regional JR passes or high-speed Shinkansen bullet trains, download Japan Travel by NAVITIME.',
    currency: 'Japanese Yen (JPY ¥)',
    cultureTips: [
      'No tipping—it is considered confusing or disrespectful',
      'Slurping noodles shows appreciation to the chef',
      'Walk on the left side of escalators in Tokyo (right in Osaka)',
      'Keep voice down in trains and never speak loudly on cellphones'
    ],
    itinerarySummary: {
      day1: 'Tokyo: Asakusa Senso-ji, Akihabara electronics, Ueno park, twilight views from Shibuya Sky.',
      day2: 'Hakone / Mt. Fuji: Pirate boat cruise on Lake Ashi, Open Air Museum, sulphur hot springs.',
      day3: 'Kyoto: Early morning 10,000 vermilion Torii gates at Fushimi Inari, Gion Geisha district.',
    }
  },
  france: {
    name: 'France (Paris, Provence, French Riviera)',
    country: 'France',
    continent: 'Europe',
    flag: '🇫🇷',
    tagline: 'Haute couture, world-renowned vineyards, gothic cathedrals, and sun-soaked Mediterranean coasts',
    bestSeason: 'April–June & September–October (mild weather, lower queues)',
    idealDays: 6,
    dailyBudget: {
      backpacker: '$65–$90 / €60–€80 / ₹6,500',
      midRange: '$160–$250 / €150–€230 / ₹16,000',
      luxury: '$450+ / €400+ / ₹38,000+',
    },
    visaSummary: 'Schengen Visa required for non-EU/EEA citizens (apply 2-3 months prior). 90 days visa-free for USA/UK/Canada/Australia.',
    topAttractions: ['Eiffel Tower & Champ de Mars', 'The Louvre & Musée d’Orsay', 'Palace of Versailles', 'Mont-Saint-Michel', 'Promenade des Anglais (Nice)', 'Lavender Fields of Valensole (Provence)'],
    hiddenGems: ['Canal Saint-Martin (hip Parisian cafe spot)', 'Rocamadour cliffside medieval village', 'Colmar & Alsace fairy-tale wine villages', 'Calanques National Park near Marseille'],
    localFood: ['Freshly baked butter croissants & baguettes', 'Boeuf Bourguignon', 'Duck Confit', 'Artisanal goat cheeses & Bordeaux wine', 'Crème Brûlée'],
    safetyRating: 88,
    scamsToAvoid: ['"Petition" clipboards around Eiffel Tower (pickpocket distraction)', 'String bracelet trick at Sacré-Cœur steps', 'Unmetered rogue taxis at CDG airport'],
    transportTips: 'Use RATP Navigo Easy pass in Paris, SNCF TGV high-speed trains between cities, book train tickets 60 days ahead on Trainline or SNCF Connect.',
    currency: 'Euro (EUR €)',
    cultureTips: [
      'Always greet shopkeepers with "Bonjour Madame/Monsieur" upon entering',
      'Dinner typically starts after 8:00 PM',
      'Bread is placed directly on the table, not on your plate'
    ],
    itinerarySummary: {
      day1: 'Paris: Eiffel Tower sunrise, Seine river cruise, Latin Quarter stroll, sunset at Montmartre.',
      day2: 'Paris: Louvre museum masterpieces, Tuileries gardens, Le Marais boutique shopping & wine bars.',
      day3: 'Versailles / French Riviera: Royal Hall of Mirrors and grand gardens, evening train to Nice.',
    }
  },
  italy: {
    name: 'Italy (Rome, Florence, Venice, Amalfi)',
    country: 'Italy',
    continent: 'Europe',
    flag: '🇮🇹',
    tagline: 'Colosseum ruins, Renaissance masterpieces, cliffside coastal lemons, and culinary bliss',
    bestSeason: 'April–May & September–October (glorious sunshine without suffocating summer heat)',
    idealDays: 7,
    dailyBudget: {
      backpacker: '$60–$85 / €55–€75 / ₹6,000',
      midRange: '$150–$230 / €140–€210 / ₹15,000',
      luxury: '$400+ / €380+ / ₹35,000+',
    },
    visaSummary: 'Schengen Visa (Italy / VFS Global). 90 days visa-free for US, UK, Canada, Australia.',
    topAttractions: ['Colosseum & Roman Forum (Rome)', 'Vatican Museums & Sistine Chapel', 'Uffizi Gallery & Duomo (Florence)', 'Grand Canal & St. Mark’s Square (Venice)', 'Positano & Amalfi Coast cliffs'],
    hiddenGems: ['Civita di Bagnoregio (dying hill city accessed by footbridge)', 'Bergamo Alta (walled medieval crown)', 'Procida island (colorful alternative to Capri)', 'Dolomites Val di Funes'],
    localFood: ['Authentic Cacio e Pepe & Carbonara in Rome', 'Florentine T-Bone Steak (Bistecca alla Fiorentina)', 'Neapolitan Woodfired Pizza', 'Artisanal Pistachio Gelato', 'Aperol Spritz with cicchetti'],
    safetyRating: 86,
    scamsToAvoid: ['Gladiator actors outside Colosseum charging €50 for selfies', 'Pickpockets on Rome Metro Line A and Termini station', 'Restaurants with aggressive outdoor hawkers'],
    transportTips: 'Frecciarossa and Italo high-speed trains link Rome-Florence-Venice in 1.5–2 hours. Vaporetto water buses in Venice.',
    currency: 'Euro (EUR €)',
    cultureTips: [
      'Never order a Cappuccino after 11:00 AM (only espresso)',
      'Never ask for pineapple on pizza or chicken in pasta',
      'Cover shoulders and knees when entering any church or basilica'
    ],
    itinerarySummary: {
      day1: 'Rome: Colosseum, Roman Forum, Trevi Fountain, Pantheon, dinner in lively Trastevere.',
      day2: 'Rome to Florence: Vatican St. Peter’s Basilica, high-speed train to Florence, sunset at Piazzale Michelangelo.',
      day3: 'Florence to Venice: Uffizi masterpieces, Ponte Vecchio, afternoon train to Venice Grand Canal.',
    }
  },
  switzerland: {
    name: 'Switzerland (Interlaken, Zermatt, Zurich)',
    country: 'Switzerland',
    continent: 'Europe',
    flag: '🇨🇭',
    tagline: 'Turquoise glacial lakes, snow-capped Matterhorn peaks, scenic alpine trains, and chocolate havens',
    bestSeason: 'June–September (hiking and wild alpine meadows) & December–March (skiing and winter wonderland)',
    idealDays: 5,
    dailyBudget: {
      backpacker: '$90–$130 / CHF 80–CHF 115 / ₹9,000',
      midRange: '$220–$350 / CHF 200–CHF 310 / ₹22,000',
      luxury: '$600+ / CHF 550+ / ₹55,000+',
    },
    visaSummary: 'Schengen Visa. Swiss border follows standard Schengen 90-day rules.',
    topAttractions: ['Matterhorn & Gornergrat railway (Zermatt)', 'Jungfraujoch - Top of Europe (Interlaken)', 'Lake Geneva & Chillon Castle', 'Lucerne Chapel Bridge & Mount Pilatus', 'Glacier Express Scenic Train'],
    hiddenGems: ['Lauterbrunnen 72 waterfalls valley', 'Oeschinensee alpine mountain lake (gorgeous turquoise water)', 'Murren & Gimmelwald car-free mountain villages', 'Verzasca Valley stone bridge in Ticino'],
    localFood: ['Swiss Cheese Fondue & Raclette', 'Rösti with fried egg', 'Zürcher Geschnetzeltes (veal in mushroom cream sauce)', 'Artisanal Lindt & Sprüngli Swiss chocolates'],
    safetyRating: 99,
    scamsToAvoid: ['Virtually zero crime. Watch out for high restaurant prices—save money by shopping at Coop and Migros supermarkets!'],
    transportTips: 'The Swiss Travel Pass provides unlimited rides on all trains, panoramic routes, boats, and city buses. Unmatched punctuality.',
    currency: 'Swiss Franc (CHF)',
    cultureTips: [
      'Sundays are quiet days: shops are closed, avoid making loud noises',
      'Always greet hikers on trails with "Grüezi" or "Bonjour"',
      'Tap water from every public fountain is alpine fresh and 100% safe'
    ],
    itinerarySummary: {
      day1: 'Zurich to Lucerne: Stroll Chapel Bridge, lake cruise, scenic cogwheel train up Mount Pilatus.',
      day2: 'Interlaken & Lauterbrunnen: Walk valley of 72 waterfalls, cable car to Schilthorn / Murren.',
      day3: 'Zermatt: Cogwheel train to Gornergrat for iconic reflection of the Matterhorn, alpine fondue dinner.',
    }
  },
  thailand: {
    name: 'Thailand (Bangkok, Chiang Mai, Phuket, Krabi)',
    country: 'Thailand',
    continent: 'Asia',
    flag: '🇹🇭',
    tagline: 'Gilded Buddhist temples, emerald island lagoons, bustling night markets, and world-class street food',
    bestSeason: 'November–February (Cool, dry, and sunny season)',
    idealDays: 6,
    dailyBudget: {
      backpacker: '$25–$40 / ฿900–฿1,400 / ₹2,500',
      midRange: '$60–$120 / ฿2,200–฿4,300 / ₹6,000',
      luxury: '$220+ / ฿8,000+ / ₹18,000+',
    },
    visaSummary: 'Visa-free for 93 countries (including India, EU, USA, UK, Australia) for 30–60 days tourism.',
    topAttractions: ['Grand Palace & Wat Pho (Bangkok)', 'Phi Phi Islands & Maya Bay', 'Chiang Mai Old Town & Elephant Nature Park', 'Railay Beach limestone cliffs (Krabi)', 'Ayutthaya Ancient Ruins'],
    hiddenGems: ['Koh Kood (untouched pristine island paradise)', 'Pai mountain town in Mae Hong Son', 'Erawan 7-tiered emerald waterfalls in Kanchanaburi', 'Chiang Rai Blue & White Temples'],
    localFood: ['Pad Thai Kung with fresh prawns', 'Tom Yum Goong (spicy lemongrass soup)', 'Green Curry (Gaeng Keow Wan)', 'Mango Sticky Rice with coconut cream', 'Crispy Pork Belly (Moo Krob)'],
    safetyRating: 85,
    scamsToAvoid: ['"The Palace is closed today" tuk-tuk driver scam redirecting you to tailor or gem shops', 'Jet ski damage scam in Pattaya and Phuket beaches'],
    transportTips: 'Use Grab or Bolt apps for cabs, BTS Skytrain and MRT in Bangkok, negotiate tuk-tuk fares before boarding, use Lomprayah catamarans for island transfers.',
    currency: 'Thai Baht (THB ฿)',
    cultureTips: [
      'Never touch anyone’s head or point your feet at people or Buddha statues',
      'Dress respectfully with covered knees and shoulders at all temples',
      'The Wai greeting (palms together at chest) is the respectful gesture'
    ],
    itinerarySummary: {
      day1: 'Bangkok: Grand Palace, Wat Arun at sunset, Chao Phraya riverboat, Chinatown street food feast.',
      day2: 'Chiang Mai: Ethical elephant sanctuary, Wat Phra That Doi Suthep mountain temple, Sunday walking street.',
      day3: 'Krabi / Phuket: Longtail boat to Railay Beach, rock climbing or kayaking through limestone caves.',
    }
  },
  indonesia: {
    name: 'Bali & Indonesia (Ubud, Seminyak, Nusa Penida, Komodo)',
    country: 'Indonesia',
    continent: 'Asia',
    flag: '🇮🇩',
    tagline: 'Terraced emerald rice paddies, volcanic surf breaks, sacred cliff temples, and dragon islands',
    bestSeason: 'April–October (Dry season with sunny skies and breezy evenings)',
    idealDays: 6,
    dailyBudget: {
      backpacker: '$25–$45 / Rp 400k–700k / ₹2,800',
      midRange: '$60–$130 / Rp 1m–2m / ₹6,500',
      luxury: '$250+ / Rp 4m+ / ₹22,000+',
    },
    visaSummary: 'Visa on Arrival (VoA) / e-VoA for 97 nationalities (~$35 USD for 30 days, extendable). Tourist levy of Rp 150,000.',
    topAttractions: ['Tegallalang Rice Terraces (Ubud)', 'Uluwatu Sunset Cliff Temple & Kecak Dance', 'Kelingking "T-Rex" Beach (Nusa Penida)', 'Komodo National Park & Pink Beach', 'Mount Batur Sunrise Volcano Trek'],
    hiddenGems: ['Munduk mountain waterfalls & clove plantations', 'Sidemen Valley (peaceful, authentic Bali like 30 years ago)', 'Amed black sand beach & coral reefs', 'Gili Air car-free turtle sanctuary'],
    localFood: ['Nasi Goreng & Mie Goreng with fried egg', 'Babi Guling (crispy suckling roast pork)', 'Ayam Betutu (slow-cooked spiced chicken)', 'Sate Lilit (spiced fish satay on lemongrass stalks)', 'Pisang Goreng (crispy banana fritters)'],
    safetyRating: 87,
    scamsToAvoid: ['Unauthorized money changers with rigged calculators in Kuta', 'Aggressive temple monkeys snatching sunglasses and phones in Uluwatu'],
    transportTips: 'Download Grab and Gojek apps for rides and food, rent an automatic scooter if experienced, or hire private drivers for $35–$45/full day.',
    currency: 'Indonesian Rupiah (IDR Rp)',
    cultureTips: [
      'Do not step on Canang Sari (daily woven flower offerings on sidewalks)',
      'Wear a sarong and sash when entering any Hindu temple',
      'Use only the right hand for giving and receiving money'
    ],
    itinerarySummary: {
      day1: 'Ubud: Sacred Monkey Forest, Tegallalang rice terraces, jungle swing, traditional Balinese spa.',
      day2: 'Nusa Penida Day Trip: Speedboat from Sanur, iconic Kelingking cliff, Broken Beach, Angel’s Billabong.',
      day3: 'South Bali: Surfing in Canggu, sunset seafood feast on Jimbaran beach, Uluwatu Kecak fire dance.',
    }
  },
  uae: {
    name: 'Dubai & UAE (Abu Dhabi, Desert Safari)',
    country: 'United Arab Emirates',
    continent: 'Middle East',
    flag: '🇦🇪',
    tagline: 'Record-shattering skyscrapers, gold souks, luxury desert safaris, and Arabian hospitality',
    bestSeason: 'November–March (warm winter sunshine, 24°C–28°C)',
    idealDays: 4,
    dailyBudget: {
      backpacker: '$60–$90 / AED 220–330 / ₹6,000',
      midRange: '$150–$280 / AED 550–1,000 / ₹15,000',
      luxury: '$500+ / AED 1,800+ / ₹45,000+',
    },
    visaSummary: '30-day Visa-on-Arrival for US, UK, EU, Australia. Easy 14/30-day tourist eVisa for Indian passport holders (or VoA if holding US/UK visa).',
    topAttractions: ['Burj Khalifa (124th & 148th floor observatories)', 'Sheikh Zayed Grand Mosque (Abu Dhabi)', 'The Dubai Mall & Dancing Fountains', 'Museum of the Future', 'Red Dune Desert Safari & BBQ Camp', 'Palm Jumeirah & Atlantis Aquaventure'],
    hiddenGems: ['Al Fahidi Historic District & Coffee Museum in Old Dubai', 'Hatta Dam mountain kayaking & glamping', 'Louvre Abu Dhabi rain of light dome', 'Al Qudra Desert Love Lakes'],
    localFood: ['Chicken / Lamb Shawarma from Al Mallah', 'Traditional Mandi / Biryani with saffron rice', 'Luqaimat (warm date-syrup dumplings)', 'Fresh Kunafa with melted sweet cheese', 'Camel milk gelato & Arabic Qahwa coffee'],
    safetyRating: 99,
    scamsToAvoid: ['Extremely safe city with strict laws. Avoid unlicensed street perfumes and unofficial tour vendors outside malls.'],
    transportTips: 'Dubai Metro is ultra-clean and connects DXB airport directly to Downtown and Marina. Careem and taxi apps are very reliable.',
    currency: 'UAE Dirham (AED)',
    cultureTips: [
      'Dress modestly in government buildings, cultural sites, and malls',
      'Public displays of intense affection are frowned upon',
      'Alcohol is served in licensed hotels and lounges'
    ],
    itinerarySummary: {
      day1: 'Downtown Dubai: Burj Khalifa observation deck, Dubai Mall, Dubai Fountain show, Dubai Frame.',
      day2: 'Desert & Old Dubai: Abra boat ride on Dubai Creek, Gold & Spice Souks, afternoon 4x4 desert dune bashing.',
      day3: 'Abu Dhabi Day Trip: Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, Yas Island Ferrari World.',
    }
  },
  usa: {
    name: 'USA (New York City, California, National Parks)',
    country: 'United States',
    continent: 'North America',
    flag: '🇺🇸',
    tagline: 'Iconic skylines, boundless highway road trips, Hollywood glam, and awe-inspiring National Parks',
    bestSeason: 'September–November (Autumn colors) & April–June (Spring wildflowers)',
    idealDays: 7,
    dailyBudget: {
      backpacker: '$80–$120 / ₹8,000',
      midRange: '$200–$350 / ₹20,000',
      luxury: '$600+ / ₹55,000+',
    },
    visaSummary: 'ESTA (for 41 Visa Waiver Program countries). B1/B2 Tourist Visa for others (requires consular interview).',
    topAttractions: ['New York: Times Square, Central Park, Statue of Liberty, Empire State Building', 'Grand Canyon National Park (Arizona)', 'Golden Gate Bridge & Alcatraz (San Francisco)', 'Yellowstone & Yosemite National Parks', 'Miami South Beach & Florida Keys'],
    hiddenGems: ['Sedona Red Rocks (Arizona vortex trails)', 'Antelope Canyon & Horseshoe Bend (Navajo Nation)', 'Big Sur Coastline highway 1', 'Savannah historic district (Georgia)'],
    localFood: ['New York Style Thin-Crust Pizza & Bagels', 'Texas Slow-Smoked Brisket Barbecue', 'New England Clam Chowder & Maine Lobster Roll', 'California In-N-Out Burger & Baja Fish Tacos'],
    safetyRating: 84,
    scamsToAvoid: ['CD mixtape handers in NYC Times Square demanding money', 'Unofficial taxi dispatchers at airport exits (use Uber/Lyft or taxi stand)'],
    transportTips: 'Subway is king in NYC. For California and National Parks, renting a car or campervan is essential. Domestic flights on Delta/United/Southwest.',
    currency: 'US Dollar (USD $)',
    cultureTips: [
      'Tipping is standard: 18% to 22% at restaurants, $1–$2 per drink at bars',
      'Sales tax is added at checkout, not shown on the price tag',
      'Pedestrians have right of way at crosswalks'
    ],
    itinerarySummary: {
      day1: 'NYC Highlights: Central Park morning walk, Met Museum, Fifth Avenue, Top of the Rock sunset.',
      day2: 'NYC Downtown: Statue of Liberty ferry, 9/11 Memorial, Brooklyn Bridge walk, DUMBO pizza.',
      day3: 'California / West Coast: Golden Gate Bridge, Fisherman’s Wharf, cable car ride, sunset at Twin Peaks.',
    }
  },
  greece: {
    name: 'Greece (Santorini, Athens, Mykonos, Crete)',
    country: 'Greece',
    continent: 'Europe',
    flag: '🇬🇷',
    tagline: 'Whitewashed cliffside cubist villages, ancient Parthenon temples, and sapphire Aegean waters',
    bestSeason: 'May–June & September–October (warm sea swimming without the suffocating July/August crowds)',
    idealDays: 6,
    dailyBudget: {
      backpacker: '$55–$80 / €50–€75 / ₹5,500',
      midRange: '$140–$220 / €130–€200 / ₹14,000',
      luxury: '$380+ / €350+ / ₹34,000+',
    },
    visaSummary: 'Schengen Visa. 90-day visa-free for USA, Canada, UK, Australia, etc.',
    topAttractions: ['The Acropolis & Parthenon (Athens)', 'Oia Sunset & Blue Dome Churches (Santorini)', 'Mykonos Windmills & Little Venice', 'Meteora Hanging Monasteries', 'Navagio Shipwreck Beach (Zakynthos)'],
    hiddenGems: ['Naxos Island (authentic food, empty sandy beaches)', 'Milos (lunar white volcanic rock beaches at Sarakiniko)', 'Hydra (peaceful car-free island near Athens)', 'Pelion Peninsula mountain villages'],
    localFood: ['Greek Gyros with Tzatziki and fries inside pita', 'Authentic Greek Salad with block of feta and Kalamata olives', 'Moussaka (baked eggplant, spiced beef, bechamel)', 'Fresh grilled octopus by the seaside', 'Warm Loukoumades honey donuts'],
    safetyRating: 90,
    scamsToAvoid: ['Overpriced seafood restaurants in Mykonos charging €800 for king crab legs without showing prices beforehand (always ask for price per kg!)', 'Athens Monastiraki pickpockets'],
    transportTips: 'Use Blue Star Ferries or Seajets for island hopping, book domestic flights with Aegean/Olympic Air for long distances, rent an ATV or small car on islands.',
    currency: 'Euro (EUR €)',
    cultureTips: [
      'Meals are leisurely social rituals lasting 2+ hours',
      'Do not flush toilet paper down the toilet on Greek islands (use the bin)',
      'Locals nod their head up slightly to say "No"'
    ],
    itinerarySummary: {
      day1: 'Athens: Early morning Acropolis and Parthenon, Plaka cobblestone alleys, Monastiraki flea market dinner.',
      day2: 'Santorini: Ferry arrival, hike along caldera cliff from Fira to Imerovigli, wine tasting at Santo Wines.',
      day3: 'Santorini: Red Beach, boat tour to volcanic hot springs, world-famous golden sunset in Oia.',
    }
  },
  spain: {
    name: 'Spain (Barcelona, Madrid, Seville, Andalusia)',
    country: 'Spain',
    continent: 'Europe',
    flag: '🇪🇸',
    tagline: 'Gaudí’s surreal architecture, fiery Flamenco passions, sunlit plazas, and endless tapas crawls',
    bestSeason: 'April–June & September–October (pleasant sunny days, lively outdoor terrace culture)',
    idealDays: 6,
    dailyBudget: {
      backpacker: '$50–$75 / €45–€70 / ₹5,000',
      midRange: '$130–$200 / €120–€185 / ₹13,000',
      luxury: '$350+ / €320+ / ₹30,000+',
    },
    visaSummary: 'Schengen Visa (Spain BLS International). 90 days visa-free for Western passports.',
    topAttractions: ['Sagrada Família & Park Güell (Barcelona)', 'Prado Museum & Royal Palace (Madrid)', 'Alhambra Palace & Generalife Gardens (Granada)', 'Seville Cathedral & Plaza de España', 'Costa del Sol beaches'],
    hiddenGems: ['Ronda cliffside gorge & bridge in Andalusia', 'Girona medieval Jewish quarter', 'San Sebastián pintxos culinary capital', 'Toledo ancient three-cultures fortress city'],
    localFood: ['Authentic Valencian Paella with saffron', 'Jamón Ibérico de Bellota (cured acorn-fed ham)', 'Crispy Churros con Chocolate', 'Patatas Bravas & Tortilla Española', 'Refreshing Sangria and Tinto de Verano'],
    safetyRating: 87,
    scamsToAvoid: ['Pickpockets on Barcelona’s La Rambla and Metro line 3', 'Card trick and rosemary sprig ladies around Sagrada Família demanding money'],
    transportTips: 'Renfe AVE and low-cost Ouigo/Iryo bullet trains link Madrid to Barcelona in 2.5 hours. Excellent city metro networks.',
    currency: 'Euro (EUR €)',
    cultureTips: [
      'Siesta culture: small shops close 2 PM to 5 PM',
      'Dinner is very late: Spaniards rarely eat before 9:00 PM or 10:00 PM',
      'Tipping is optional; rounding up small change is customary'
    ],
    itinerarySummary: {
      day1: 'Barcelona: Sagrada Família tour, Park Güell views, stroll Gothic Quarter, sunset at Barceloneta beach.',
      day2: 'Madrid: Royal Palace, Retiro Park crystal palace, Prado museum art, evening tapas crawl in La Latina.',
      day3: 'Seville / Granada: Marvel at the Moorish Alhambra Palace or Plaza de España and watch live flamenco.',
    }
  },
  india: {
    name: 'India (Ladakh, Kashmir, Rajasthan, Goa, Kerala)',
    country: 'India',
    continent: 'Asia',
    flag: '🇮🇳',
    tagline: 'Vibrant kaleidoscope of royal desert palaces, Himalayan peaks, serene backwaters, and sensory spice markets',
    bestSeason: 'October–March (Plains/South/Desert) & May–September (Himalayas & Ladakh)',
    idealDays: 7,
    dailyBudget: {
      backpacker: '$20–$35 / ₹1,500–₹3,000',
      midRange: '$50–$100 / ₹4,000–₹8,000',
      luxury: '$200+ / ₹18,000+',
    },
    visaSummary: 'Indian e-Tourist Visa available online for 160+ countries (30-day, 1-year, or 5-year multi-entry).',
    topAttractions: ['Taj Mahal (Agra)', 'Pangong Lake & Khardung La (Ladakh)', 'Amber Fort & Hawa Mahal (Jaipur)', 'Dal Lake Shikara & Gulmarg (Kashmir)', 'Alleppey Houseboat Backwaters (Kerala)', 'Varanasi Ganga Ghats at Aarti'],
    hiddenGems: ['Tirthan Valley & Great Himalayan National Park', 'Mawlynnong & Living Root Bridges (Meghalaya)', 'Ziro Valley (Arunachal Pradesh)', 'Gokarna secluded Om & Half Moon beaches', 'Orchha cenotaphs & palaces (Madhya Pradesh)'],
    localFood: ['Butter Chicken with garlic butter naan', 'Hyderabadi Dum Biryani', 'Crispy Masala Dosa with coconut chutney & sambar', 'Rajasthani Dal Baati Churma', 'Goan Prawn Curry with poi', 'Delhi Street Chaat & Pani Puri'],
    safetyRating: 82,
    scamsToAvoid: ['Touts outside New Delhi train station claiming your train is cancelled and directing to fake tourist offices', 'Overpriced gem shops in Jaipur', 'Always agree on rickshaw meter or use Uber/Ola'],
    transportTips: 'Use Uber and Ola apps in major cities, IRCTC for scenic train journeys (book 2AC/3AC classes), domestic flights on IndiGo/Air India.',
    currency: 'Indian Rupee (INR ₹)',
    cultureTips: [
      'Remove shoes before entering homes and places of worship',
      'Dress modestly covering shoulders and knees when visiting monuments and temples',
      'Drink bottled or purified water only'
    ],
    itinerarySummary: {
      day1: 'Golden Triangle / Heritage: Old Delhi Chandni Chowk rickshaw ride, Humayun’s Tomb, drive to Agra.',
      day2: 'Agra to Jaipur: Sunrise at Taj Mahal, Agra Fort, travel to pink city Jaipur for evening Chokhi Dhani.',
      day3: 'Jaipur: Amber Fort elephant views, City Palace, Hawa Mahal photography, artisanal textile bazaars.',
    }
  },
  vietnam: {
    name: 'Vietnam (Hanoi, Ha Long Bay, Da Nang, Hoi An)',
    country: 'Vietnam',
    continent: 'Asia',
    flag: '🇻🇳',
    tagline: 'Emerald karst seascapes, ancient lantern-lit river towns, French colonial boulevards, and rich coffee culture',
    bestSeason: 'February–April (Spring warmth) & October–November (Autumn tranquility)',
    idealDays: 6,
    dailyBudget: {
      backpacker: '$25–$40 / 600k–1m VND / ₹2,400',
      midRange: '$55–$110 / 1.4m–2.7m VND / ₹5,500',
      luxury: '$200+ / 5m+ VND / ₹16,000+',
    },
    visaSummary: '90-day online eVisa for all nationalities. Easy to obtain in 3 business days for $25.',
    topAttractions: ['Ha Long Bay & Lan Ha Bay overnight cruise', 'Hoi An Ancient Lantern Town', 'Hanoi Old Quarter & Train Street', 'Golden Hands Bridge at Ba Na Hills (Da Nang)', 'Ninh Binh limestone river caves (Tam Coc)'],
    hiddenGems: ['Ha Giang Motorcycle Loop (dramatic high mountain passes)', 'Phong Nha-Ke Bang colossal underground caves', 'Pu Luong nature reserve stilt houses', 'Con Dao untouched archipelago'],
    localFood: ['Pho Bo (aromatic beef noodle soup with fresh herbs)', 'Banh Mi (crispy baguette stuffed with pate and pickled carrots)', 'Bun Cha (grilled pork patties in tangy broth - Obama favorite)', 'Egg Coffee (Ca Phe Trung) in Hanoi', 'Fresh rice spring rolls (Goi Cuon)'],
    safetyRating: 91,
    scamsToAvoid: ['Motorbike bag snatching in Ho Chi Minh City streets (keep phones away from curbs)', 'Rogue fake metered taxis (stick to Grab, Mai Linh, or Vinasun)'],
    transportTips: 'Grab is extremely cheap and works for cars and scooters. Domestic flights with Vietnam Airlines and Bamboo Airways. Luxury sleeper buses for intercity travel.',
    currency: 'Vietnamese Dong (VND ₫)',
    cultureTips: [
      'Take off shoes before entering Vietnamese homes and pagodas',
      'Always accept things with both hands as a gesture of courtesy',
      'Never stick your chopsticks vertically in your rice bowl'
    ],
    itinerarySummary: {
      day1: 'Hanoi: Stroll Hoan Kiem Lake, Egg Coffee at Cafe Giang, Temple of Literature, evening puppet theatre.',
      day2: 'Ha Long Bay: 5-star cruise through towering limestone islands, sea kayaking through Sung Sot cave.',
      day3: 'Hoi An: Tailor-made suits, bicycle tour through herb gardens, nighttime river boat releasing lanterns.',
    }
  },
  iceland: {
    name: 'Iceland (Reykjavik, Golden Circle, Ring Road)',
    country: 'Iceland',
    continent: 'Europe',
    flag: '🇮🇸',
    tagline: 'Land of fire and ice: geothermal geysers, thundering glacial waterfalls, volcanic black sands, and Aurora Borealis',
    bestSeason: 'June–August (Midnight sun & 24h daylight) & September–March (Northern Lights Aurora)',
    idealDays: 5,
    dailyBudget: {
      backpacker: '$90–$130 / ₹8,500',
      midRange: '$220–$380 / ₹22,000',
      luxury: '$600+ / ₹55,000+',
    },
    visaSummary: 'Schengen Visa. Iceland is part of the Schengen agreement.',
    topAttractions: ['Blue Lagoon & Sky Lagoon Geothermal Spas', 'Golden Circle (Thingvellir, Geysir, Gullfoss Waterfall)', 'Reynisfjara Black Sand Beach & Basalt Columns', 'Jökulsárlón Glacier Lagoon with floating icebergs', 'Seljalandsfoss & Skógafoss Waterfalls'],
    hiddenGems: ['Stuðlagil Canyon basalt columns', 'Westfjords remote dramatic fjords', 'Fjaðrárgljúfur serpentine river canyon', 'Kerlingarfjöll geothermal highland mountains'],
    localFood: ['Icelandic Lamb Soup (Kjötsúpa)', 'Fresh Atlantic Arctic Char & Cod', 'Skyr (high-protein cultured dairy)', 'Bæjarins Beztu Pylsur (famous Reykjavik hot dog)'],
    safetyRating: 99,
    scamsToAvoid: ['Safest country on earth with near zero crime. The only danger is unpredictable arctic weather—never step too close to sneaker waves at Reynisfjara black beach!'],
    transportTips: 'Renting a 4x4 campervan or SUV is the best way to experience Iceland. Monitor Vedur.is and SafeTravel.is daily for road conditions.',
    currency: 'Icelandic Króna (ISK kr)',
    cultureTips: [
      'Shower naked with soap before entering any geothermal pool (strictly enforced hygiene)',
      'Tipping is not expected or required in Iceland',
      'Never drive off-road—it destroys delicate moss that takes decades to recover'
    ],
    itinerarySummary: {
      day1: 'Reykjavik & Blue Lagoon: Soak in silica thermal waters, explore Hallgrimskirkja church and Harpa hall.',
      day2: 'Golden Circle: Continental divide at Thingvellir, exploding Strokkur geyser, Gullfoss golden falls.',
      day3: 'South Coast: Walk behind Seljalandsfoss waterfall, climb Skógafoss, black sands of Reynisfjara.',
    }
  },
  australia: {
    name: 'Australia (Sydney, Melbourne, Great Barrier Reef)',
    country: 'Australia',
    continent: 'Oceania',
    flag: '🇦🇺',
    tagline: 'Sun-drenched surf beaches, kaleidoscopic coral reefs, untamed red outback, and coffee-loving coastal cities',
    bestSeason: 'September–November (Spring) & March–May (Autumn)',
    idealDays: 7,
    dailyBudget: {
      backpacker: '$70–$100 / A$100–150 / ₹6,500',
      midRange: '$180–$280 / A$270–420 / ₹17,000',
      luxury: '$500+ / A$750+ / ₹45,000+',
    },
    visaSummary: 'eVisitor (Subclass 651) or ETA (Subclass 601) for eligible passports; Visitor Visa (Subclass 600) for others.',
    topAttractions: ['Sydney Opera House & Harbour Bridge Climb', 'Great Barrier Reef (Cairns & Whitsundays)', 'Bondi to Coogee Coastal Walk', 'Great Ocean Road & Twelve Apostles', 'Uluru / Ayers Rock Sacred Red Monolith'],
    hiddenGems: ['Rottnest Island quokka selfies (Western Australia)', 'Lord Howe Island restricted eco-paradise', 'Kangaroo Island wildlife sanctuaries', 'Blue Mountains hidden Wentworth Falls trail'],
    localFood: ['Avocado Smash on sourdough with flat white coffee', 'Barramundi and fresh Queensland tiger prawns', 'Aussie meat pies with tomato sauce', 'Lamingtons and Pavlova with passionfruit'],
    safetyRating: 94,
    scamsToAvoid: ['Low crime. Watch out for dangerous ocean rips (always swim between the red and yellow flags) and use SPF 50+ sunscreen!'],
    transportTips: 'Opal card for Sydney transit, myki card in Melbourne. Domestic airlines Qantas, Virgin Australia, and Jetstar for interstate travel.',
    currency: 'Australian Dollar (AUD A$)',
    cultureTips: [
      'Say "G’day" or "No worries"—laid-back friendly attitude is universal',
      'Tipping is not customary or expected in Australia (staff are paid high minimum wages)',
      'Slip, Slop, Slap: Sun protection is taken very seriously'
    ],
    itinerarySummary: {
      day1: 'Sydney Icons: Circular Quay, Opera House tour, ferry to Manly Beach, sunset drinks by Harbour Bridge.',
      day2: 'Sydney Coast: Bondi beach morning surf lesson, Bondi to Bronte coastal cliff walk, dining in Surry Hills.',
      day3: 'Great Barrier Reef / Cairns: Snorkeling catamaran cruise to outer reef coral gardens, marine life encounter.',
    }
  },
  turkey: {
    name: 'Turkey (Istanbul, Cappadocia, Antalya)',
    country: 'Turkey',
    continent: 'Europe/Asia',
    flag: '🇹🇷',
    tagline: 'Hot air balloons dancing over fairy chimneys, Ottoman imperial palaces, and aromatic grand bazaars',
    bestSeason: 'April–May & September–October (mild Mediterranean weather without high summer crowds)',
    idealDays: 6,
    dailyBudget: {
      backpacker: '$35–$55 / 1,200–1,800 TRY / ₹3,500',
      midRange: '$90–$160 / 3,000–5,500 TRY / ₹9,000',
      luxury: '$300+ / 10,000+ TRY / ₹28,000+',
    },
    visaSummary: 'Official Turkish eVisa available online in minutes for $50 for most nationalities.',
    topAttractions: ['Hagia Sophia & Blue Mosque (Istanbul)', 'Hot Air Balloon Flight at Sunrise (Cappadocia)', 'Topkapi Palace & Basilica Cistern', 'Pamukkale white travertine thermal terraces', 'Ancient Ephesus Greco-Roman ruins'],
    hiddenGems: ['Goreme Open-Air Museum secluded cave churches', 'Kas coastal turquoise diving town', 'Sumela cliff-hanging monastery in Trabzon', 'Lake Van and Akdamar Armenian church'],
    localFood: ['Authentic Adana & Urfa Kebabs', 'Turkish Meze platter with warm lavash bread', 'Crispy Pistachio Baklava with dondurma ice cream', 'Simit (sesame bread rings) from street carts', 'Turkish coffee brewed in hot sand & apple tea'],
    safetyRating: 86,
    scamsToAvoid: ['"Let’s have a drink" bar scam in Istanbul where friendly locals bring you to a club with extortionate bills', 'Shoeshine brush drop trick (they drop it, you hand it over, they insist on cleaning shoes for high fee)'],
    transportTips: 'Istanbulkart works on all trams, metros, and Bosphorus ferries. Domestic flights with Turkish Airlines and Pegasus are very economical.',
    currency: 'Turkish Lira (TRY ₺)',
    cultureTips: [
      'Take off shoes and dress modestly at all mosques (headscarves for women)',
      'Haggling is polite tradition in the Grand Bazaar (counter-offer 50–60% of first price)',
      'Accepting tea (çay) is a sign of hospitality and friendship'
    ],
    itinerarySummary: {
      day1: 'Istanbul Historic: Hagia Sophia, Blue Mosque, underground Basilica Cistern, Grand Bazaar shopping.',
      day2: 'Istanbul Bosphorus: Bosphorus sunset cruise between Europe and Asia, Galata Tower, Karakoy cafes.',
      day3: 'Cappadocia: Sunrise hot air balloon flight over fairy chimneys, Derinkuyu underground city, cave hotel stay.',
    }
  }
};

// Helper: check if user provided custom API Key
export function getSavedApiKey(): { provider: 'gemini' | 'openai'; key: string } | null {
  try {
    const raw = localStorage.getItem('TRAVELORA_AI_CONFIG');
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveApiKey(provider: 'gemini' | 'openai', key: string): void {
  localStorage.setItem('TRAVELORA_AI_CONFIG', JSON.stringify({ provider, key: key.trim() }));
}

export function clearApiKey(): void {
  localStorage.removeItem('TRAVELORA_AI_CONFIG');
}

// Extract matching destination key from prompt
export function detectDestination(query: string): string | null {
  const q = query.toLowerCase();
  
  if (q.includes('japan') || q.includes('tokyo') || q.includes('kyoto') || q.includes('osaka') || q.includes('fuji') || q.includes('shibuya')) return 'japan';
  if (q.includes('france') || q.includes('paris') || q.includes('provence') || q.includes('nice') || q.includes('riviera') || q.includes('louvre')) return 'france';
  if (q.includes('italy') || q.includes('rome') || q.includes('florence') || q.includes('venice') || q.includes('amalfi') || q.includes('colosseum')) return 'italy';
  if (q.includes('swiss') || q.includes('switzerland') || q.includes('interlaken') || q.includes('zermatt') || q.includes('alps') || q.includes('matterhorn')) return 'switzerland';
  if (q.includes('thailand') || q.includes('bangkok') || q.includes('phuket') || q.includes('krabi') || q.includes('chiang mai') || q.includes('phi phi')) return 'thailand';
  if (q.includes('bali') || q.includes('indonesia') || q.includes('ubud') || q.includes('komodo') || q.includes('nusa penida')) return 'indonesia';
  if (q.includes('dubai') || q.includes('uae') || q.includes('abu dhabi') || q.includes('emirates') || q.includes('burj khalifa')) return 'uae';
  if (q.includes('usa') || q.includes('america') || q.includes('new york') || q.includes('california') || q.includes('grand canyon') || q.includes('vegas')) return 'usa';
  if (q.includes('greece') || q.includes('santorini') || q.includes('athens') || q.includes('mykonos') || q.includes('acropolis')) return 'greece';
  if (q.includes('spain') || q.includes('barcelona') || q.includes('madrid') || q.includes('seville') || q.includes('alhambra')) return 'spain';
  if (q.includes('india') || q.includes('ladakh') || q.includes('kashmir') || q.includes('goa') || q.includes('kerala') || q.includes('jaipur') || q.includes('taj mahal')) return 'india';
  if (q.includes('vietnam') || q.includes('hanoi') || q.includes('ha long') || q.includes('hoi an') || q.includes('da nang')) return 'vietnam';
  if (q.includes('iceland') || q.includes('reykjavik') || q.includes('northern lights') || q.includes('aurora') || q.includes('golden circle')) return 'iceland';
  if (q.includes('australia') || q.includes('sydney') || q.includes('melbourne') || q.includes('barrier reef')) return 'australia';
  if (q.includes('turkey') || q.includes('istanbul') || q.includes('cappadocia') || q.includes('antalya') || q.includes('hagia sophia')) return 'turkey';

  return null;
}

// Detect comparison between two destinations
export function detectComparison(query: string): [string, string] | null {
  const q = query.toLowerCase();
  if (!q.includes(' vs ') && !q.includes(' versus ') && !q.includes(' compare ') && !q.includes(' or ')) {
    return null;
  }

  const allKeys = Object.keys(GLOBAL_TOURISM_DATABASE);
  const matchedKeys: string[] = [];

  for (const k of allKeys) {
    const dest = GLOBAL_TOURISM_DATABASE[k];
    const nameWords = dest.name.toLowerCase().split(/[\s,()]+/);
    if (q.includes(k) || nameWords.some(w => w.length > 3 && q.includes(w))) {
      if (!matchedKeys.includes(k)) matchedKeys.push(k);
    }
  }

  if (matchedKeys.length >= 2) {
    return [matchedKeys[0], matchedKeys[1]];
  }

  return null;
}

// Call live Gemini API if key is configured
async function callGeminiLive(apiKey: string, userPrompt: string, history: AIChatMessage[]): Promise<string> {
  const systemInstruction = `You are Travelora AI, the world's most capable, elegant, and encyclopedic global tourism copilot.
You have comprehensive knowledge of all 195+ countries, thousands of cities, monuments, hiking trails, secret beaches, hidden villages, visas, budgets, and cultures.
Provide rich, engaging, structured travel advice with markdown headings, bullet points, emoji tags, realistic budgets (USD, EUR, INR), and safety tips.
Avoid generic boilerplate. Give crisp, insider, actionable travel intelligence.`;

  const contents = [
    { role: 'user', parts: [{ text: systemInstruction }] },
    ...history.slice(-4).map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    })),
    { role: 'user', parts: [{ text: userPrompt }] }
  ];

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents })
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error?.message || `Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('No response text received from Gemini');
  return text;
}

// Main Conversational AI function
export async function queryGlobalTourismAI(
  userInput: string,
  history: AIChatMessage[] = []
): Promise<AIChatMessage> {
  const q = userInput.trim();
  const lower = q.toLowerCase();
  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const messageId = 'msg-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6);

  // Check if live API key is saved
  const config = getSavedApiKey();
  if (config && config.key && config.provider === 'gemini') {
    try {
      const liveText = await callGeminiLive(config.key, q, history);
      const destKey = detectDestination(q);
      const snapshot = destKey ? GLOBAL_TOURISM_DATABASE[destKey] : undefined;

      return {
        id: messageId,
        sender: 'assistant',
        text: liveText,
        timestamp: time,
        snapshot,
        quickSuggestions: [
          'Generate day-by-day itinerary',
          'Calculate full budget breakdown',
          'Check visa and entry rules',
          'Show secret uncrowded spots'
        ]
      };
    } catch (e: any) {
      console.warn('Live API call failed, falling back to built-in Tourism Engine:', e.message);
      // Fall through to built-in engine
    }
  }

  // 1. Check for Destination Comparison
  const comparisonPair = detectComparison(q);
  if (comparisonPair) {
    const [d1Key, d2Key] = comparisonPair;
    const dest1 = GLOBAL_TOURISM_DATABASE[d1Key];
    const dest2 = GLOBAL_TOURISM_DATABASE[d2Key];

    const reply = `### ⚖️ Head-to-Head Comparison: **${dest1.name}** vs **${dest2.name}**

Here is your comprehensive side-by-side travel verdict:

| Feature | **${dest1.flag} ${dest1.name}** | **${dest2.flag} ${dest2.name}** |
| :--- | :--- | :--- |
| **Best Season** | ${dest1.bestSeason} | ${dest2.bestSeason} |
| **Ideal Duration** | ${dest1.idealDays} Days | ${dest2.idealDays} Days |
| **Mid-Range Daily Cost** | ${dest1.dailyBudget.midRange} | ${dest2.dailyBudget.midRange} |
| **Safety Rating** | ${dest1.safetyRating}/100 | ${dest2.safetyRating}/100 |
| **Currency** | ${dest1.currency} | ${dest2.currency} |
| **Top Vibe** | ${dest1.tagline} | ${dest2.tagline} |

#### 🏆 The Travelora Verdict:
- Choose **${dest1.name}** if you prioritize: *${dest1.topAttractions.slice(0, 2).join(' and ')}* with rich local cuisine like *${dest1.localFood[0]}*.
- Choose **${dest2.name}** if you want: *${dest2.topAttractions.slice(0, 2).join(' and ')}* and love *${dest2.localFood[0]}*.

Which one aligns better with your dates and budget? Ask me for a customized day-by-day plan for either!`;

    return {
      id: messageId,
      sender: 'assistant',
      text: reply,
      timestamp: time,
      category: 'comparison',
      comparison: {
        dest1,
        dest2,
        verdict: `${dest1.name} vs ${dest2.name}`
      },
      quickSuggestions: [
        `Plan a 5-day itinerary for ${dest1.name.split(' ')[0]}`,
        `Plan a 5-day itinerary for ${dest2.name.split(' ')[0]}`,
        `Budget calculator for ${dest1.name.split(' ')[0]}`,
        `Visa rules for both countries`
      ]
    };
  }

  // 2. Check if a specific destination is requested
  const destKey = detectDestination(q);

  if (destKey) {
    const dest = GLOBAL_TOURISM_DATABASE[destKey];

    // Sub-intent: Itinerary Request
    if (lower.includes('itinerary') || lower.includes('days') || lower.includes('schedule') || lower.includes('plan a trip') || lower.includes('day 1')) {
      const daysCount = lower.includes('3') ? 3 : lower.includes('7') ? 7 : 5;
      const text = `### 🗺️ Master ${daysCount}-Day Itinerary for **${dest.flag} ${dest.name}**
*${dest.tagline}*

---

#### 📍 **Day 1: Arrival & Iconic Landmarks**
- **Morning:** ${dest.itinerarySummary.day1.split(',')[0] || 'Check into your boutique stay and explore city center'}
- **Afternoon:** ${dest.itinerarySummary.day1.split(',')[1] || 'Savor local street specialties and visit the historic quarter'}
- **Evening:** ${dest.itinerarySummary.day1.split(',')[2] || 'Panoramic sunset viewpoint followed by dining under the stars'}
- **Transit & Tip:** ${dest.transportTips.split(',')[0]}

#### 📍 **Day 2: Cultural Immersion & Scenic Wonders**
- **Morning:** ${dest.itinerarySummary.day2.split(',')[0] || 'Early morning excursion before crowds arrive'}
- **Afternoon:** ${dest.itinerarySummary.day2.split(',')[1] || 'Explore museums, gardens, and authentic artisan shops'}
- **Evening:** ${dest.itinerarySummary.day2.split(',')[2] || 'Traditional night market or cultural evening performance'}

#### 📍 **Day 3: Secret Trails & Off-the-Beaten-Path Escape**
- **Morning:** Venture out to **${dest.hiddenGems[0]}** for an authentic local escape (up to 80% fewer tourists).
- **Afternoon:** Try **${dest.localFood[0]}** and **${dest.localFood[1] || dest.localFood[0]}** at a local family-run eatery.
- **Evening:** ${dest.itinerarySummary.day3 || 'Relax at a cozy rooftop lounge and savor evening vistas'}

${daysCount >= 5 ? `
#### 📍 **Day 4: Deep Nature & High Adventure**
- **Day Expedition:** Explore **${dest.topAttractions[2] || dest.topAttractions[0]}** with photography stops and local market foraging.

#### 📍 **Day 5: Culinary Masterclass & Sunset Farewell**
- **Morning & Afternoon:** Local cooking workshop or artisanal food tasting tour.
- **Sunset & Night:** Final twilight walk, souvenir shopping for authentic crafts, and celebratory farewell dinner.
` : ''}

---
💡 **Insider Advice:**
- **Best Season to Visit:** ${dest.bestSeason}
- **Watch out for:** ${dest.scamsToAvoid[0]}
- **Cultural Etiquette:** ${dest.cultureTips[0]}`;

      return {
        id: messageId,
        sender: 'assistant',
        text,
        timestamp: time,
        snapshot: dest,
        category: 'itinerary',
        quickSuggestions: [
          `Calculate budget for ${dest.name.split(' ')[0]}`,
          `Visa checklist for ${dest.name.split(' ')[0]}`,
          `Top hidden gems in ${dest.name.split(' ')[0]}`,
          `Best local street food to try`
        ]
      };
    }

    // Sub-intent: Budget Request
    if (lower.includes('budget') || lower.includes('cost') || lower.includes('price') || lower.includes('how much') || lower.includes('expense') || lower.includes('cheap')) {
      const text = `### 💰 Travel Budget Breakdown for **${dest.flag} ${dest.name}**

Here is your realistic daily expense guide across three traveler styles:

| Tier | Estimated Daily Budget | Typical Inclusions |
| :--- | :--- | :--- |
| **🎒 Backpacker / Budget** | **${dest.dailyBudget.backpacker}** | Hostels, metro passes, authentic street food & market meals |
| **🏨 Mid-Range Comfort** | **${dest.dailyBudget.midRange}** | Boutique 3–4★ hotels, sit-down restaurants, guided entry tickets |
| **✨ Luxury / Indulgence** | **${dest.dailyBudget.luxury}** | 5★ luxury resorts, private chauffeurs, Michelin/fine dining |

#### 📊 Cost Saving Hacks from Travelora:
1. **Transit:** ${dest.transportTips}
2. **Food:** Eat where locals eat—try *${dest.localFood.slice(0, 2).join(' & ')}*.
3. **Currency:** Primary currency is **${dest.currency}**. Use multi-currency cards with zero forex markup.
4. **Scam Alert:** Save money by avoiding ${dest.scamsToAvoid[0].toLowerCase()}.`;

      return {
        id: messageId,
        sender: 'assistant',
        text,
        timestamp: time,
        snapshot: dest,
        category: 'budget',
        quickSuggestions: [
          `Create a 5-day itinerary for ${dest.name.split(' ')[0]}`,
          `Visa rules for ${dest.name.split(' ')[0]}`,
          `Hidden gems in ${dest.name.split(' ')[0]}`
        ]
      };
    }

    // Sub-intent: Visa & Entry Rules
    if (lower.includes('visa') || lower.includes('entry') || lower.includes('passport') || lower.includes('documents')) {
      const text = `### 🛂 Visa & Entry Guide for **${dest.flag} ${dest.name}**

- **Official Visa Status:** ${dest.visaSummary}
- **Passport Rule:** Must be valid for at least **6 months** beyond your arrival date with at least 2 blank pages.
- **Return Ticket Requirement:** Proof of return or onward transit ticket is routinely required at airline check-in.
- **Accommodation Proof:** Confirmed hotel booking or invitation letter recommended.
- **Currency & Cards:** ${dest.currency}. Credit/debit cards accepted broadly, keep emergency cash.

📋 **Recommended Checklist Before Flying:**
- [ ] Verify passport expiration date
- [ ] Submit online arrival declaration / health declaration if required
- [ ] Purchase comprehensive international travel insurance
- [ ] Install local transit & rideshare apps: *${dest.transportTips.split('.')[0]}*`;

      return {
        id: messageId,
        sender: 'assistant',
        text,
        timestamp: time,
        snapshot: dest,
        category: 'visa',
        quickSuggestions: [
          `Best time to visit ${dest.name.split(' ')[0]}`,
          `Safety tips in ${dest.name.split(' ')[0]}`,
          `Must try food in ${dest.name.split(' ')[0]}`
        ]
      };
    }

    // Sub-intent: Hidden Gems
    if (lower.includes('gem') || lower.includes('secret') || lower.includes('crowd') || lower.includes('offbeat') || lower.includes('quiet')) {
      const text = `### 💎 Top Secret Hidden Gems in **${dest.flag} ${dest.name}**
*(Skip the tourist traps & experience authentic tranquility)*

${dest.hiddenGems.map((gem, i) => `**${i + 1}. ${gem}**
- Experience: Pristine authenticity with up to 80% fewer tourist crowds.
- Perfect for: Travelers seeking photography, peace, and real cultural connection.`).join('\n\n')}

---
🛡️ **How to beat the crowds at popular spots:**
- Visit *${dest.topAttractions[0]}* at sunrise (before 8:30 AM).
- Always respect local customs: *${dest.cultureTips[0]}*`;

      return {
        id: messageId,
        sender: 'assistant',
        text,
        timestamp: time,
        snapshot: dest,
        category: 'gems',
        quickSuggestions: [
          `Generate 5-day itinerary with these gems`,
          `Local food guide for ${dest.name.split(' ')[0]}`,
          `Calculate trip budget`
        ]
      };
    }

    // Sub-intent: Food & Cuisine
    if (lower.includes('food') || lower.includes('eat') || lower.includes('cuisine') || lower.includes('restaurant') || lower.includes('dish') || lower.includes('drink')) {
      const text = `### 🍜 Ultimate Foodie & Culinary Guide for **${dest.flag} ${dest.name}**

#### 🌟 5 Must-Try Signature Delicacies:
${dest.localFood.map((dish, i) => `**${i + 1}. ${dish}**`).join('\n')}

#### 🥢 Dining Etiquette & Cultural Rules:
${dest.cultureTips.map(c => `- ${c}`).join('\n')}

#### 🥤 Tap Water & Safety:
- Always check tap water safety; when in doubt, drink filtered or sealed bottled water.
- Keep emergency medication for upset stomachs when exploring vigorous night market street food!`;

      return {
        id: messageId,
        sender: 'assistant',
        text,
        timestamp: time,
        snapshot: dest,
        category: 'food',
        quickSuggestions: [
          `Show itinerary including best food spots`,
          `Estimate daily food budget`,
          `Check safety and scams`
        ]
      };
    }

    // General Destination Overview
    const text = `### 🌟 Welcome to **${dest.flag} ${dest.name}**
*${dest.tagline}*

Here is your comprehensive travel intelligence dossier:

- 🗓️ **Best Season:** ${dest.bestSeason}
- ⏱️ **Recommended Duration:** ${dest.idealDays} Days
- 💰 **Mid-Range Daily Budget:** ${dest.dailyBudget.midRange}
- 🛡️ **Safety Rating:** **${dest.safetyRating}/100** (Very High)
- 🛂 **Visa:** ${dest.visaSummary}
- 💱 **Currency:** ${dest.currency}

#### 🏛️ Top 5 Must-Experience Sights:
${dest.topAttractions.slice(0, 5).map((a, i) => `${i + 1}. **${a}**`).join('\n')}

#### 💎 Secret Hidden Gems:
${dest.hiddenGems.slice(0, 2).map((g, i) => `✨ **${g}**`).join('\n')}

#### 🍜 Signature Dishes to Savor:
${dest.localFood.slice(0, 4).join(' • ')}

#### ⚠️ Essential Scams & Tips to Remember:
- **Avoid:** ${dest.scamsToAvoid[0]}
- **Transit Hack:** ${dest.transportTips}
- **Culture Tip:** ${dest.cultureTips[0]}`;

    return {
      id: messageId,
      sender: 'assistant',
      text,
      timestamp: time,
      snapshot: dest,
      category: 'general',
      quickSuggestions: [
        `Plan a ${dest.idealDays}-day itinerary for ${dest.name.split(' ')[0]}`,
        `Calculate total budget for 2 people`,
        `Visa requirements and paperwork`,
        `Find secret spots in ${dest.name.split(' ')[0]}`
      ]
    };
  }

  // 3. Fallback for General Inquiries across the entire world
  // Smart dynamic response tailored to the theme of user inquiry
  let dynamicResponse = '';
  let matchedCat: AIChatMessage['category'] = 'general';

  if (lower.includes('honeymoon') || lower.includes('couple') || lower.includes('romantic')) {
    matchedCat = 'general';
    dynamicResponse = `### 💍 Top Romantic & Honeymoon Destinations Across the World

Here are the world's most breathtaking honeymoon sanctuaries curated by Travelora AI:

1. **Santorini & Milos, Greece 🇬🇷**
   - *Vibe:* Private infinity plunge pools overlooking the Aegean caldera, candlelit cliffside dinners.
   - *Ideal Season:* May to October | *Budget:* $250–$500/day.

2. **Swiss Alps (Zermatt & Lauterbrunnen), Switzerland 🇨🇭**
   - *Vibe:* Storybook wooden chalets, waking up to the Matterhorn, panoramic Glacier Express journeys.
   - *Ideal Season:* Dec–March (Winter snow) or June–Sept (Alpine wildflowers) | *Budget:* $300–$600/day.

3. **Bali & Nusa Islands, Indonesia 🇮🇩**
   - *Vibe:* Secluded jungle pool villas in Ubud, private flower baths, sunset dining on Jimbaran Beach.
   - *Ideal Season:* April to October | *Budget:* $100–$250/day.

4. **Amalfi Coast & Positano, Italy 🇮🇹**
   - *Vibe:* Pastel cliffs cascading into the Tyrrhenian Sea, private Riva boat charters, lemon groves.
   - *Ideal Season:* May to September | *Budget:* $300–$600/day.

Which continent or climate speaks to your dream romantic journey? Ask me to craft a customized itinerary!`;
  } else if (lower.includes('solo') || lower.includes('female') || lower.includes('backpack')) {
    matchedCat = 'budget';
    dynamicResponse = `### 🎒 Safest & Most Rewarding Solo Travel Destinations Worldwide

Travelora AI has scored global destinations specifically for solo travelers based on safety, hostel culture, ease of navigation, and value:

1. **Japan 🇯🇵 (Safety Score: 98/100)**
   - Unrivalled personal safety, capsule hotels, female-only train cars, and warm hospitality even if you don't speak Japanese.

2. **Iceland 🇮🇸 (Safety Score: 99/100)**
   - Ranked #1 on the Global Peace Index for over 15 consecutive years. Effortless to meet fellow solo travelers in Reykjavik hostels.

3. **Vietnam 🇻🇳 (Value Score: 96/100)**
   - Vibrant backpacking route (Hanoi to Hoi An), welcoming locals, delicious $2 street food, and effortless sleeper train networks.

4. **Switzerland 🇨🇭 (Transit Score: 99/100)**
   - Perfectly connected Swiss railway network, English spoken everywhere, safe day and night.

Ask me for a solo backpacking budget calculation or packing checklist for any of these countries!`;
  } else if (lower.includes('visa') || lower.includes('passport')) {
    matchedCat = 'visa';
    dynamicResponse = `### 🛂 Global Visa & Entry Intelligence Hub

Travelora tracks entry requirements for over 195 countries worldwide:

- **Schengen Area (29 European Countries):** Uniform 90 days in any 180-day window. Requires standard Schengen Visa or ETIAS for waiver countries.
- **Southeast Asia (Thailand, Vietnam, Indonesia, Malaysia):** Thailand & Malaysia offer 30–60 day visa-free entry for most nations; Vietnam offers 90-day eVisas online; Indonesia offers instant e-VoA ($35).
- **Middle East (UAE / Dubai):** 30–60 day eVisas issued within 24–48 hours; Visa on arrival for 70+ passports.
- **Japan & South Korea:** Simplified tourist eVisas or K-ETA online registration.

Tell me your **passport nationality** and **destination country**, and I will generate your exact document checklist!`;
  } else {
    dynamicResponse = `### 🌍 Travelora Global Tourism AI: Ask Me Anything About the World!

I am your comprehensive travel copilot with deep, real-time knowledge of all **195+ countries, 5,000+ cities, islands, and wilderness sanctuaries**.

Here are some powerful ways I can help you right now:

1. **🗺️ Instant Itineraries:** *"Create a 5-day budget itinerary for Japan under $800"*
2. **💰 Cost & Currency:** *"How much does 1 week in Switzerland or Bali cost for 2 people?"*
3. **⚖️ Destination Battles:** *"Compare Thailand vs Vietnam for food and beaches"*
4. **💎 Hidden Gems:** *"Give me uncrowded mountain villages in Europe and India"*
5. **🛂 Visa Guidance:** *"What are the visa requirements for France, Dubai, or Bali?"*
6. **🍜 Food & Culture:** *"Best street foods in Bangkok, Mexico City, and Rome"*

Type any city, country, or travel question above to get an instant deep-dive guide!`;
  }

  return {
    id: messageId,
    sender: 'assistant',
    text: dynamicResponse,
    timestamp: time,
    category: matchedCat,
    quickSuggestions: [
      'Top 5 places in Japan with budget',
      'Compare Switzerland vs Austria',
      '7 days in Bali under $500',
      'Schengen visa requirements'
    ]
  };
}
