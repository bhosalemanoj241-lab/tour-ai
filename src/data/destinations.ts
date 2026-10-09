import { Destination, TravelStory } from '../types/travel';

export const INITIAL_DESTINATIONS: Destination[] = [
// ================= NORTH INDIA =================
  {
    id: 'ladakh',
    name: 'Ladakh',
    region: 'Himalayas, Ladakh',
    country: 'India',
    tagline: 'High altitude monasteries, turquoise lakes and celestial mountain passes',
    description: 'The land of stark mountain passes, azure lakes like Pangong Tso, cliffside Tibetan monasteries, and crisp high-altitude air under starry skies.',
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&w=800&q=80'
    ],
    lat: 34.1526,
    lng: 77.5771,
    baseBudgetInr: 18000,
    estimatedBudget: 18000,
    recommendedDays: 5,
    duration: 5,
    tags: ['Mountains', 'Adventure', 'Nature', 'Photography', 'Spirituality'],
    bestSeason: 'May – September',
    currentTemp: '12°C',
    weatherCondition: 'Sunny & Crisp',
    crowdLevel: 'Moderate',
    crowdScore: 30,
    experienceScore: 98,
    aiMatchScore: 96,
    matchScore: 96,
    scores: { adventure: 98, culture: 94, food: 72, nature: 99, relaxation: 80, luxury: 55, spontaneity: 75 },
    whyAiChose: [
      'Fits your mountain & high-altitude preference perfectly',
      'World-class vistas across Pangong Tso and Nubra Valley',
      'Peaceful cliffside monasteries away from busy tourist routes',
      'Unmatched celestial night skies for stargazing'
    ],
    travelDnaFit: 'The High-Altitude Explorer',
    hiddenGems: [
      {
        name: 'Uleytokpo & Mangyu Monastery',
        description: 'A secluded sanctuary with 11th-century mural art predating Alchi, untouched by jeep crowds.',
        crowdReductionPct: 88,
        savingsInr: 4500,
        authenticityScore: 99,
        experienceScore: 96,
        popularAlternativeName: 'Pangong Commercial Camps',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
      }
    ],
    optimalVisitingHours: { peakHours: '10:00 AM – 04:00 PM', recommendedHours: '05:30 AM – 08:30 AM', reason: 'Dawn monastic chanting in silent valleys', aiConfidence: 96 },
    budgetBreakdown: { flights: 7000, accommodation: 5000, food: 2500, transport: 2000, activities: 1000, shopping: 500, emergency: 500 },
    moodMatches: ['Adventure', 'Adventurous', 'Nature', 'Curious', 'Relaxing', 'Peaceful'],
    itinerary: [
      {
        day: 1,
        title: 'Acclimatization & Leh Old Town Stroll',
        weather: { temp: '14°C', condition: 'Sunny', icon: 'Sun' },
        activities: [
          { id: 'ld-1', time: '10:00 AM', title: 'Arrival & Rest', description: 'Scenic drive to Leh and altitude acclimatization.', location: 'Leh Valley', category: 'transit', duration: '2h', costInr: 500, isOutdoor: false },
          { id: 'ld-2', time: '01:00 PM', title: 'Tibetan Thukpa Lunch', description: 'Steaming broth and momos at local old market eatery.', location: 'Old Market', category: 'food', duration: '1h', costInr: 300, isOutdoor: false },
          { id: 'ld-3', time: '05:00 PM', title: 'Shanti Stupa Sunset', description: 'Panoramic vistas over Indus Valley at twilight.', location: 'Changspa Hill', category: 'culture', duration: '2h', costInr: 0, isOutdoor: true }
        ]
      }
    ]
  },
  {
    id: 'kashmir',
    name: 'Kashmir (Gulmarg & Pahalgam)',
    region: 'Jammu & Kashmir',
    country: 'India',
    tagline: 'Paradise on Earth with pine valleys, Dal Lake shikaras and snowy peaks',
    description: 'Fabled alpine valleys, floating lotus gardens on Dal Lake, gondola rides over Apharwat peak, and saffron-scented Kashmiri kahwa by pine forests.',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=80'
    ],
    lat: 34.0837,
    lng: 74.7973,
    baseBudgetInr: 19000,
    estimatedBudget: 19000,
    recommendedDays: 5,
    duration: 5,
    tags: ['Mountains', 'Romantic', 'Nature', 'Photography', 'Food'],
    bestSeason: 'March – October & Dec – Feb for Snow',
    currentTemp: '15°C',
    weatherCondition: 'Cool & Pleasant',
    crowdLevel: 'Moderate',
    crowdScore: 35,
    experienceScore: 97,
    aiMatchScore: 95,
    matchScore: 95,
    scores: { adventure: 88, culture: 92, food: 95, nature: 99, relaxation: 96, luxury: 85, spontaneity: 72 },
    whyAiChose: [
      'Ideal for romantic and peaceful mountain getaways',
      'Gondola cable car with dramatic snowy Himalayan views',
      'Rich culinary wazwan feasts and saffron tea',
      'Wooden carved houseboats on tranquil lake waters'
    ],
    travelDnaFit: 'The Romantic Wanderer',
    hiddenGems: [{ name: 'Aru Valley & Doodhpathri', description: 'Lush green meadows and sheep herds untouched by tourist rush.', crowdReductionPct: 82, savingsInr: 3500, authenticityScore: 98, experienceScore: 95, popularAlternativeName: 'Sonamarg crowded taxi stands' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '06:00 AM – 08:30 AM', reason: 'Mirror reflection on Dal Lake with morning mist', aiConfidence: 94 },
    budgetBreakdown: { flights: 7500, accommodation: 5500, food: 3000, transport: 1800, activities: 800, shopping: 400 },
    moodMatches: ['Romantic', 'Relaxing', 'Peaceful', 'Nature', 'Food'],
    itinerary: [
      {
        day: 1,
        title: 'Shikara Ride & Heritage Houseboat Stay',
        weather: { temp: '16°C', condition: 'Sunny', icon: 'Sun' },
        activities: [
          { id: 'ks-1', time: '11:00 AM', title: 'Check into Cedar Houseboat', description: 'Traditional carved houseboat with lake views.', location: 'Nigeen Lake', category: 'relaxation', duration: '1h', costInr: 0, isOutdoor: false },
          { id: 'ks-2', time: '04:00 PM', title: 'Sunset Shikara Cruise', description: 'Glide past floating lotus gardens and water lilies.', location: 'Dal Lake', category: 'nature', duration: '2h', costInr: 500, isOutdoor: true }
        ]
      }
    ]
  },
  {
    id: 'tirthan-valley',
    name: 'Tirthan Valley',
    region: 'Himachal Pradesh',
    country: 'India',
    tagline: 'An uncrowded sanctuary of cedar forests, trout streams and wooden chalets',
    description: 'A secluded haven in the Great Himalayan National Park with crystal glacial rivers, apple orchards, traditional timber architecture, and peaceful forest trails.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=80'
    ],
    lat: 31.6424,
    lng: 77.3475,
    baseBudgetInr: 12500,
    estimatedBudget: 12500,
    recommendedDays: 4,
    duration: 4,
    tags: ['Mountains', 'Nature', 'Hidden Gems', 'Adventure', 'Peaceful'],
    bestSeason: 'March – June & Sept – Nov',
    currentTemp: '16°C',
    weatherCondition: 'Crisp & Sunny',
    crowdLevel: 'Low',
    crowdScore: 18,
    experienceScore: 96,
    aiMatchScore: 94,
    matchScore: 94,
    scores: { adventure: 92, culture: 84, food: 78, nature: 98, relaxation: 94, luxury: 45, spontaneity: 86 },
    whyAiChose: [
      '74% fewer tourists compared to Manali and Kasol',
      'Unmatched value with ₹12,500 average budget',
      'Direct access to UNESCO World Heritage wild trails',
      'Riverside wooden cedar chalets with zero commercial noise'
    ],
    travelDnaFit: 'The Mindful Wilderness Pioneer',
    hiddenGems: [{ name: 'Chehni Kothi Ancient Fortress', description: 'A towering 1500-year-old stone and timber tower built without mortar.', crowdReductionPct: 92, savingsInr: 2000, authenticityScore: 99, experienceScore: 97, popularAlternativeName: 'Kasol Main Street' }],
    optimalVisitingHours: { peakHours: '12:00 PM – 03:00 PM', recommendedHours: '07:00 AM – 10:00 AM', reason: 'Birdsong and crisp mountain air by the river', aiConfidence: 95 },
    budgetBreakdown: { flights: 4000, accommodation: 4500, food: 2200, transport: 1200, activities: 600 },
    moodMatches: ['Peaceful', 'Nature', 'Adventure', 'Relaxing'],
    itinerary: [
      {
        day: 1,
        title: 'Riverside Check-in & Cedar Woods Stroll',
        weather: { temp: '16°C', condition: 'Sunny', icon: 'Sun' },
        activities: [
          { id: 'tv-1', time: '11:00 AM', title: 'Check in to Wooden Homestay', description: 'Riverside wooden balcony overlooking mountain rapids.', location: 'Gushaini', category: 'relaxation', duration: '1h', costInr: 0, isOutdoor: false },
          { id: 'tv-2', time: '02:30 PM', title: 'Choie Waterfall Trek', description: 'Easy 45-minute pine trail to hidden cascade.', location: 'Tirthan Riverbank', category: 'nature', duration: '2h', costInr: 0, isOutdoor: true }
        ]
      }
    ]
  },
  {
    id: 'spiti-valley',
    name: 'Spiti Valley',
    region: 'Himachal Pradesh',
    country: 'India',
    tagline: 'The Middle Land: ancient monasteries, moonscapes and fossil villages',
    description: 'A stark, windswept high-altitude cold desert with 1000-year-old Key Monastery, Chandratal Lake, fossil hunting in Langza, and highest post office at Hikkim.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
    ],
    lat: 32.2461,
    lng: 78.0349,
    baseBudgetInr: 16000,
    estimatedBudget: 16000,
    recommendedDays: 6,
    duration: 6,
    tags: ['Mountains', 'Adventure', 'Photography', 'Spirituality', 'Hidden Gems'],
    bestSeason: 'June – October',
    currentTemp: '10°C',
    weatherCondition: 'Clear & Cold',
    crowdLevel: 'Low',
    crowdScore: 20,
    experienceScore: 97,
    aiMatchScore: 93,
    matchScore: 93,
    scores: { adventure: 99, culture: 93, food: 68, nature: 98, relaxation: 75, luxury: 35, spontaneity: 88 },
    whyAiChose: [
      'Rugged offbeat terrain for true road trip explorers',
      'Milky Way galaxy visibility from high-altitude mud villages',
      'Centuries of Buddhist heritage and peaceful cliffside gompas',
      'High-altitude Chandratal Lake camping'
    ],
    travelDnaFit: 'The High-Altitude Nomad',
    hiddenGems: [{ name: 'Dhankar Lake & Mudh Village', description: 'Crest of Pin Valley with purple mountains and silence.', crowdReductionPct: 90, savingsInr: 2500, authenticityScore: 98, experienceScore: 96, popularAlternativeName: 'Kaza Main Market' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '05:00 AM – 07:30 AM', reason: 'Alpenglow on high snow peaks', aiConfidence: 93 },
    budgetBreakdown: { flights: 5000, accommodation: 4500, food: 2500, transport: 3000, activities: 1000 },
    moodMatches: ['Adventure', 'Peaceful', 'Nature', 'Curious'],
    itinerary: [
      {
        day: 1,
        title: 'Kaza & Key Monastery',
        weather: { temp: '11°C', condition: 'Sunny', icon: 'Sun' },
        activities: [
          { id: 'sp-1', time: '10:00 AM', title: 'Key Gompa Exploration', description: 'Ancient fortress-style monastery perched at 13,600 ft.', location: 'Key', category: 'culture', duration: '2h', costInr: 0, isOutdoor: true }
        ]
      }
    ]
  },
  {
    id: 'manali',
    name: 'Manali & Solang Valley',
    region: 'Himachal Pradesh',
    country: 'India',
    tagline: 'Snow adventures, paragliding, hot springs and cedar valleys',
    description: 'Surrounded by towering Pir Panjal peaks, Old Manali apple orchards, café culture, Solang adventure valley, and high alpine gateway through Atal Tunnel.',
    heroImage: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ],
    lat: 32.2396,
    lng: 77.1887,
    baseBudgetInr: 13000,
    estimatedBudget: 13000,
    recommendedDays: 4,
    duration: 4,
    tags: ['Mountains', 'Adventure', 'Food', 'Nature'],
    bestSeason: 'Year-round (Snow in Dec–Feb, Green in May–July)',
    currentTemp: '15°C',
    weatherCondition: 'Sunny',
    crowdLevel: 'Moderate',
    crowdScore: 45,
    experienceScore: 92,
    aiMatchScore: 90,
    matchScore: 90,
    scores: { adventure: 94, culture: 80, food: 88, nature: 92, relaxation: 82, luxury: 75, spontaneity: 85 },
    whyAiChose: ['Abundant adventure sports from paragliding to skiing', 'Charming wooden cafes in Old Manali', 'Direct access to Sissu snow valley via Atal Tunnel', 'Budget-friendly travel options'],
    travelDnaFit: 'The Mountain Adrenaline Seeker',
    hiddenGems: [{ name: 'Sethi & Naggar Castle Estate', description: 'Ancient wooden castle and art gallery overlooking the Beas valley.', crowdReductionPct: 75, savingsInr: 1800, authenticityScore: 94, experienceScore: 93, popularAlternativeName: 'Mall Road crowd' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 04:00 PM', recommendedHours: '07:00 AM – 09:30 AM', reason: 'Fresh mountain breeze before day-tourist rush', aiConfidence: 91 },
    budgetBreakdown: { flights: 3500, accommodation: 4000, food: 2500, transport: 1800, activities: 1200 },
    moodMatches: ['Adventure', 'Relaxing', 'Nature', 'Food'],
    itinerary: [{ day: 1, title: 'Old Manali Cafes & Beas River', weather: { temp: '15°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'mn-1', time: '11:00 AM', title: 'Hadimba Temple & Cedar Grove', description: 'Ancient pagoda-style wooden temple in deep woods.', location: 'Dhungri', category: 'culture', duration: '2h', costInr: 0, isOutdoor: true }] }]
  },
  {
    id: 'rishikesh',
    name: 'Rishikesh',
    region: 'Uttarakhand',
    country: 'India',
    tagline: 'Yoga capital of the world, emerald river rafting and evening Ganga Aarti',
    description: 'Where the holy Ganga emerges from the Shivalik Himalayas into the plains. Famed for whitewater rapids, cliff jumping, cliffside vegan cafes, ashrams, and magical evening aartis.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'],
    lat: 30.0869,
    lng: 78.2676,
    baseBudgetInr: 9500,
    estimatedBudget: 9500,
    recommendedDays: 3,
    duration: 3,
    tags: ['Adventure', 'Spirituality', 'Rivers', 'Yoga', 'Food'],
    bestSeason: 'September – May',
    currentTemp: '22°C',
    weatherCondition: 'Sunny & Pleasant',
    crowdLevel: 'Moderate',
    crowdScore: 40,
    experienceScore: 94,
    aiMatchScore: 92,
    matchScore: 92,
    scores: { adventure: 96, culture: 92, food: 88, nature: 90, relaxation: 90, luxury: 60, spontaneity: 90 },
    whyAiChose: ['World-class Grade III & IV river rafting on emerald waters', 'Triveni Ghat Aarti with floating oil lamps', 'Affordable backpacker & wellness stays under ₹1,500/night', 'Cliffside cafes with organic food & live acoustic music'],
    travelDnaFit: 'The Zen Adventurer',
    hiddenGems: [{ name: 'Vashistha Cave & Neer Garh Secret Pool', description: 'Ancient meditation cave right on Ganga white sand beach.', crowdReductionPct: 80, savingsInr: 1200, authenticityScore: 98, experienceScore: 95, popularAlternativeName: 'Ram Jhula main crossing' }],
    optimalVisitingHours: { peakHours: '12:00 PM – 04:00 PM', recommendedHours: '05:30 AM – 08:00 AM & 06:00 PM – 07:30 PM', reason: 'Serene sunrise yoga and glowing river sunset', aiConfidence: 95 },
    budgetBreakdown: { flights: 2500, accommodation: 3000, food: 2000, transport: 1000, activities: 1000 },
    moodMatches: ['Adventure', 'Peaceful', 'Relaxing', 'Cultural'],
    itinerary: [{ day: 1, title: 'Rafting & Triveni Aarti', weather: { temp: '22°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'rk-1', time: '09:00 AM', title: '16km Whitewater Rafting', description: 'Rafting through Roller Coaster and Golf Course rapids.', location: 'Shivpuri', category: 'adventure', duration: '3h', costInr: 1000, isOutdoor: true }] }]
  },
  {
    id: 'auli',
    name: 'Auli & Chopta',
    region: 'Uttarakhand',
    country: 'India',
    tagline: 'Ski capital of India, alpine meadows and Chandrashila summit vistas',
    description: 'Glistening snow slopes overlooked by Nanda Devi (India’s second highest peak), high-altitude oak forests, Tungnath (highest Shiva temple), and alpine camping.',
    heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'],
    lat: 30.5307,
    lng: 79.5674,
    baseBudgetInr: 14500,
    estimatedBudget: 14500,
    recommendedDays: 4,
    duration: 4,
    tags: ['Mountains', 'Adventure', 'Nature', 'Trekking', 'Snow'],
    bestSeason: 'Dec – March for Snow, April – Nov for Meadows',
    currentTemp: '8°C',
    weatherCondition: 'Chilly & Sunny',
    crowdLevel: 'Low',
    crowdScore: 22,
    experienceScore: 96,
    aiMatchScore: 93,
    matchScore: 93,
    scores: { adventure: 97, culture: 82, food: 70, nature: 99, relaxation: 84, luxury: 50, spontaneity: 80 },
    whyAiChose: ['Panoramic 360-degree views of Nanda Devi, Kamet and Trishul', 'Asia’s longest cable car ropeway', 'High alpine trek to Tungnath & Chandrashila', 'Pristine uncrowded snow slopes'],
    travelDnaFit: 'The Alpine Pioneer',
    hiddenGems: [{ name: 'Deoria Tal Reflection Lake', description: 'Crystal lake reflecting the Chaukhamba peaks at dawn.', crowdReductionPct: 85, savingsInr: 2000, authenticityScore: 98, experienceScore: 96, popularAlternativeName: 'Joshimath bus stand' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '06:00 AM – 08:30 AM', reason: 'Golden sunrise hitting snow peaks', aiConfidence: 96 },
    budgetBreakdown: { flights: 4000, accommodation: 4500, food: 2500, transport: 2500, activities: 1000 },
    moodMatches: ['Adventure', 'Nature', 'Peaceful'],
    itinerary: [{ day: 1, title: 'Ropeway Ascent & Snow Walk', weather: { temp: '9°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'al-1', time: '10:00 AM', title: 'Joshimath to Auli Ropeway', description: 'Gondola ride over oak and coniferous forests.', location: 'Auli Slopes', category: 'nature', duration: '1h', costInr: 1000, isOutdoor: true }] }]
  },
  {
    id: 'varanasi',
    name: 'Varanasi',
    region: 'Uttar Pradesh',
    country: 'India',
    tagline: 'The timeless spiritual heart of India on the banks of sacred Ganga',
    description: 'One of the world’s oldest living cities with 84 sacred riverfront ghats, mystical sunrise boat rides, silk weaving lanes, and grand evening aartis with fire and conch shells.',
    heroImage: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=800&q=80'],
    lat: 25.3176,
    lng: 82.9739,
    baseBudgetInr: 11000,
    estimatedBudget: 11000,
    recommendedDays: 3,
    duration: 3,
    tags: ['Culture', 'Spirituality', 'History', 'Food', 'Photography'],
    bestSeason: 'October – March',
    currentTemp: '24°C',
    weatherCondition: 'Sunny',
    crowdLevel: 'Moderate',
    crowdScore: 50,
    experienceScore: 95,
    aiMatchScore: 92,
    matchScore: 92,
    scores: { adventure: 65, culture: 100, food: 96, nature: 70, relaxation: 76, luxury: 65, spontaneity: 85 },
    whyAiChose: ['Deep spiritual immersion unlike anywhere on Earth', 'Sunrise wooden boat ride along heritage ghats', 'Celebrated street food: kachori sabzi, malaiyo & lassi', 'Intricate Banarasi silk weaving ateliers'],
    travelDnaFit: 'The Living Historian',
    hiddenGems: [{ name: 'Assi Ghat Subah-e-Banaras & Lolark Kund', description: 'Dawn classical music and Vedic chanting with morning mist.', crowdReductionPct: 70, savingsInr: 1000, authenticityScore: 99, experienceScore: 97, popularAlternativeName: 'Dashashwamedh noon crowd' }],
    optimalVisitingHours: { peakHours: '05:00 PM – 08:00 PM', recommendedHours: '05:00 AM – 07:30 AM', reason: 'Silent morning mist and morning prayers on the river', aiConfidence: 97 },
    budgetBreakdown: { flights: 3500, accommodation: 3500, food: 2000, transport: 1000, activities: 1000 },
    moodMatches: ['Cultural', 'Peaceful', 'Food'],
    itinerary: [{ day: 1, title: 'Sunrise Boat & Ganga Aarti', weather: { temp: '23°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'vn-1', time: '05:30 AM', title: 'Rowboat Sunrise Tour', description: 'Floating past Dashashwamedh and Manikarnika Ghats.', location: 'Ganga River', category: 'culture', duration: '2h', costInr: 400, isOutdoor: true }] }]
  },
  {
    id: 'amritsar',
    name: 'Amritsar',
    region: 'Punjab',
    country: 'India',
    tagline: 'The glowing Golden Temple, Wagah patriotism and world-class Punjabi cuisine',
    description: 'Home to the magnificent Harmandir Sahib (Golden Temple) serving free community meals to 100,000 daily, the Wagah Border retreat ceremony, and mouthwatering culinary traditions.',
    heroImage: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80'],
    lat: 31.6340,
    lng: 74.8723,
    baseBudgetInr: 9000,
    estimatedBudget: 9000,
    recommendedDays: 2,
    duration: 2,
    tags: ['Culture', 'Spirituality', 'Food', 'History'],
    bestSeason: 'October – March',
    currentTemp: '23°C',
    weatherCondition: 'Pleasant',
    crowdLevel: 'Moderate',
    crowdScore: 42,
    experienceScore: 96,
    aiMatchScore: 91,
    matchScore: 91,
    scores: { adventure: 60, culture: 98, food: 100, nature: 60, relaxation: 88, luxury: 70, spontaneity: 80 },
    whyAiChose: ['Pristine spiritual peace sitting beside the Amrit Sarovar lake', 'Legendary Amritsari kulchas, butter chicken and sweet lassi', 'Electrifying Wagah Border evening ceremony', 'Warm, welcoming Punjabi hospitality'],
    travelDnaFit: 'The Epicurean Pilgrim',
    hiddenGems: [{ name: 'Ram Bagh & Partition Museum', description: 'World’s first emotional museum dedicated to the 1947 Partition.', crowdReductionPct: 65, savingsInr: 800, authenticityScore: 97, experienceScore: 94, popularAlternativeName: 'Hall Gate bazaar rush' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '04:00 AM – 06:30 AM & 08:30 PM – 10:30 PM', reason: 'Palki Sahib night ceremony when the temple is illuminated in gold', aiConfidence: 98 },
    budgetBreakdown: { flights: 3000, accommodation: 2500, food: 2000, transport: 1000, activities: 500 },
    moodMatches: ['Cultural', 'Food', 'Peaceful'],
    itinerary: [{ day: 1, title: 'Golden Temple & Wagah', weather: { temp: '22°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'am-1', time: '09:00 AM', title: 'Harmandir Sahib & Langar Service', description: 'Visit the sanctum and experience community kitchen.', location: 'Golden Temple', category: 'culture', duration: '3h', costInr: 0, isOutdoor: true }] }]
  },

  // ================= WEST & CENTRAL INDIA =================
  {
    id: 'jaipur',
    name: 'Jaipur',
    region: 'Rajasthan',
    country: 'India',
    tagline: 'Royal palaces, living artisan bazaars and pink stone architecture',
    description: 'The storied Pink City of Rajasthan filled with majestic hill forts, intricate sandstone lattice screens, royal heritage havelis, and aromatic street cuisines.',
    heroImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80'],
    lat: 26.9124,
    lng: 75.7873,
    baseBudgetInr: 14000,
    estimatedBudget: 14000,
    recommendedDays: 3,
    duration: 3,
    tags: ['Culture', 'History', 'Food', 'Architecture', 'Shopping'],
    bestSeason: 'October – March',
    currentTemp: '24°C',
    weatherCondition: 'Sunny & Pleasant',
    crowdLevel: 'Moderate',
    crowdScore: 40,
    experienceScore: 93,
    aiMatchScore: 91,
    matchScore: 91,
    scores: { adventure: 70, culture: 99, food: 94, nature: 60, relaxation: 80, luxury: 85, spontaneity: 78 },
    whyAiChose: ['Exceptional architectural depth and UNESCO world heritage marvels', 'Royal heritage stays with grand courtyards under ₹4,000/night', 'Rich culinary legacy from dal baati churma to pyaz kachoris', 'Ideal 3-day cultural escape'],
    travelDnaFit: 'The Living Historian',
    hiddenGems: [{ name: 'Panna Meena Ka Kund Stepwell', description: 'An architectural 16th-century symmetrical geometric stepwell tucked away from standard bus tours.', crowdReductionPct: 76, savingsInr: 1500, authenticityScore: 96, experienceScore: 92, popularAlternativeName: 'Hawa Mahal busy street' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:30 PM', recommendedHours: '08:00 AM – 10:30 AM', reason: 'Crisp morning sunlight hitting Amber Fort ramparts', aiConfidence: 92 },
    budgetBreakdown: { flights: 4000, accommodation: 4500, food: 2500, transport: 1500, activities: 1000, shopping: 500 },
    moodMatches: ['Cultural', 'Food', 'Romantic'],
    itinerary: [{ day: 1, title: 'Amer Fort & Stepwell', weather: { temp: '24°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'jp-1', time: '08:30 AM', title: 'Amer Fort Exploration', description: 'Hilltop fort with Sheesh Mahal mirror palace.', location: 'Amer', category: 'culture', duration: '3h', costInr: 200, isOutdoor: true }] }]
  },
  {
    id: 'udaipur',
    name: 'Udaipur',
    region: 'Rajasthan',
    country: 'India',
    tagline: 'The City of Lakes: floating marble palaces and sunset boat rides',
    description: 'The Venice of the East, famed for Lake Pichola, the whitewashed City Palace overlooking the water, romantic rooftop dining, and Aravalli mountain backdrops.',
    heroImage: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=800&q=80'],
    lat: 24.5854,
    lng: 73.7125,
    baseBudgetInr: 16500,
    estimatedBudget: 16500,
    recommendedDays: 3,
    duration: 3,
    tags: ['Romantic', 'Lakes', 'Culture', 'Architecture', 'Luxury'],
    bestSeason: 'September – March',
    currentTemp: '25°C',
    weatherCondition: 'Sunny',
    crowdLevel: 'Moderate',
    crowdScore: 36,
    experienceScore: 97,
    aiMatchScore: 95,
    matchScore: 95,
    scores: { adventure: 65, culture: 95, food: 92, nature: 88, relaxation: 95, luxury: 96, spontaneity: 75 },
    whyAiChose: ['Voted India’s most romantic city year after year', 'Rooftop candlelight dinners overlooking illuminated lake palaces', 'Heritage boat ride past Jag Mandir at sunset', 'Charming boutique havelis right on the water'],
    travelDnaFit: 'The Romantic Connoisseur',
    hiddenGems: [{ name: 'Bahubali Hills & Badi Lake', description: 'Quiet emerald lake encircled by rugged hills with zero commercial noise.', crowdReductionPct: 88, savingsInr: 2000, authenticityScore: 97, experienceScore: 96, popularAlternativeName: 'City Palace main gate crowd' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 04:00 PM', recommendedHours: '05:00 PM – 07:15 PM', reason: 'Golden hour reflection over Lake Pichola', aiConfidence: 96 },
    budgetBreakdown: { flights: 5000, accommodation: 5500, food: 3000, transport: 1500, activities: 1500 },
    moodMatches: ['Romantic', 'Relaxing', 'Cultural'],
    itinerary: [{ day: 1, title: 'Lake Pichola & City Palace', weather: { temp: '25°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'ud-1', time: '04:30 PM', title: 'Sunset Boat Ride', description: 'Cruise around Lake Palace and Jag Mandir.', location: 'Pichola', category: 'relaxation', duration: '1h 30m', costInr: 600, isOutdoor: true }] }]
  },
  {
    id: 'jaisalmer',
    name: 'Jaisalmer',
    region: 'Rajasthan',
    country: 'India',
    tagline: 'The Golden City: live sandstone fort and starry Thar desert dunes',
    description: 'A magical golden fortress rising from Thar desert sands with living medieval quarters, carved Jain temples, camel safaris, and folk music around desert campfires.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'],
    lat: 26.9157,
    lng: 70.9083,
    baseBudgetInr: 13500,
    estimatedBudget: 13500,
    recommendedDays: 3,
    duration: 3,
    tags: ['Desert', 'Culture', 'Adventure', 'Photography'],
    bestSeason: 'October – March',
    currentTemp: '22°C',
    weatherCondition: 'Sunny & Crisp',
    crowdLevel: 'Moderate',
    crowdScore: 32,
    experienceScore: 94,
    aiMatchScore: 91,
    matchScore: 91,
    scores: { adventure: 90, culture: 96, food: 85, nature: 88, relaxation: 82, luxury: 70, spontaneity: 80 },
    whyAiChose: ['Only living medieval fort in India where residents still reside', 'Camp overnight under the celestial desert stars in Sam dunes', 'Intricate yellow sandstone havelis with lace-like carvings', 'Traditional Rajasthani Kalbelia dance and fireside folk songs'],
    travelDnaFit: 'The Desert Nomad',
    hiddenGems: [{ name: 'Kuldhara Abandoned Ghost Village', description: 'Centuries-old eerie abandoned village with intact stone architecture.', crowdReductionPct: 80, savingsInr: 1000, authenticityScore: 98, experienceScore: 92, popularAlternativeName: 'Sam dunes jeep chaos' }],
    optimalVisitingHours: { peakHours: '12:00 PM – 03:30 PM', recommendedHours: '05:30 PM – 07:30 PM', reason: 'Sunset transforming the desert sand to molten gold', aiConfidence: 95 },
    budgetBreakdown: { flights: 4000, accommodation: 4500, food: 2200, transport: 1500, activities: 1300 },
    moodMatches: ['Adventure', 'Cultural', 'Romantic'],
    itinerary: [{ day: 1, title: 'Living Fort & Sam Dunes Camp', weather: { temp: '22°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'js-1', time: '04:00 PM', title: 'Camel Safari & Starlit Camp', description: 'Ride into golden dunes for sunset and starry night camp.', location: 'Sam Dunes', category: 'adventure', duration: '4h', costInr: 1200, isOutdoor: true }] }]
  },
  {
    id: 'south-goa',
    name: 'South Goa Secret Coves',
    region: 'Goa',
    country: 'India',
    tagline: 'Quiet palm-lined beaches, Portuguese villas and secret freshwater lagoons',
    description: 'The unhurried, serene counterpart to crowded party beaches. Home to Agonda, Palolem, Cola lagoon, authentic Goan fish curries, and centuries-old colonial mansions.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'],
    lat: 15.0104,
    lng: 74.0205,
    baseBudgetInr: 15000,
    estimatedBudget: 15000,
    recommendedDays: 4,
    duration: 4,
    tags: ['Beaches', 'Relaxing', 'Romantic', 'Food', 'Nature'],
    bestSeason: 'October – May',
    currentTemp: '28°C',
    weatherCondition: 'Warm & Breezy',
    crowdLevel: 'Low',
    crowdScore: 22,
    experienceScore: 96,
    aiMatchScore: 95,
    matchScore: 95,
    scores: { adventure: 78, culture: 88, food: 96, nature: 96, relaxation: 99, luxury: 82, spontaneity: 84 },
    whyAiChose: ['85% fewer crowds compared to Baga and Calangute', 'Secluded Cola Beach where fresh river water meets the sea', 'Authentic woodfire Goan fish thalis and fresh kokum curry', 'Stunning violet coastal sunsets with zero techno noise'],
    travelDnaFit: 'The Mindful Coastal Wanderer',
    hiddenGems: [{ name: 'Butterfly Beach & Cabo de Rama Cliff', description: 'Dramatic cliff fortress overlooking turquoise waves and quiet beaches.', crowdReductionPct: 88, savingsInr: 2500, authenticityScore: 98, experienceScore: 97, popularAlternativeName: 'Baga overcrowded strip' }],
    optimalVisitingHours: { peakHours: '01:00 PM – 04:30 PM', recommendedHours: '06:30 AM – 09:00 AM & 05:30 PM – 07:15 PM', reason: 'Fishermen hauling nets and tranquil sunset walks', aiConfidence: 96 },
    budgetBreakdown: { flights: 5000, accommodation: 5500, food: 2500, transport: 1200, activities: 800 },
    moodMatches: ['Relaxing', 'Romantic', 'Nature', 'Food', 'Peaceful'],
    itinerary: [{ day: 1, title: 'Cola Lagoon & Sunset Shack', weather: { temp: '28°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'sg-1', time: '02:30 PM', title: 'Cola Beach Freshwater Kayak', description: 'Paddle along coconut palm lagoon right beside the ocean.', location: 'Cola Beach', category: 'nature', duration: '2h', costInr: 300, isOutdoor: true }] }]
  },
  {
    id: 'north-goa',
    name: 'North Goa (Anjuna & Morjim)',
    region: 'Goa',
    country: 'India',
    tagline: 'Vibrant beach shacks, flea markets, sunset cliffs and bohemian vibes',
    description: 'Electric coastal energy featuring bohemian seaside cafes, cliffside sunset views at Vagator, olive ridley turtle beach at Morjim, and vibrant Saturday night markets.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'],
    lat: 15.5800,
    lng: 73.7400,
    baseBudgetInr: 16000,
    estimatedBudget: 16000,
    recommendedDays: 4,
    duration: 4,
    tags: ['Beaches', 'Nightlife', 'Food', 'Social', 'Shopping'],
    bestSeason: 'November – April',
    currentTemp: '29°C',
    weatherCondition: 'Sunny',
    crowdLevel: 'High',
    crowdScore: 65,
    experienceScore: 91,
    aiMatchScore: 89,
    matchScore: 89,
    scores: { adventure: 82, culture: 78, food: 95, nature: 85, relaxation: 78, luxury: 85, spontaneity: 95 },
    whyAiChose: ['Vibrant beach cafes with world cuisines and live music', 'Sunset cocktails on Chapora & Vagator red cliffs', 'Water sports: jet ski, parasailing and windsurfing', 'Lively flea markets and artisanal boutiques'],
    travelDnaFit: 'The Bohemian Socialite',
    hiddenGems: [{ name: 'Ashwem Secret Palm Grove', description: 'Quieter wide sands with boutique French bakeries.', crowdReductionPct: 60, savingsInr: 1500, authenticityScore: 92, experienceScore: 90, popularAlternativeName: 'Calangute traffic' }],
    optimalVisitingHours: { peakHours: '02:00 PM – 06:00 PM', recommendedHours: '05:00 PM – 08:00 PM', reason: 'Sunset trance tunes and beach shack glow', aiConfidence: 90 },
    budgetBreakdown: { flights: 5000, accommodation: 5500, food: 3000, transport: 1500, activities: 1000 },
    moodMatches: ['Social', 'Food', 'Adventure', 'Relaxing'],
    itinerary: [{ day: 1, title: 'Anjuna Flea & Vagator Sunset', weather: { temp: '29°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'ng-1', time: '05:00 PM', title: 'Sunset at Vagator Cliff', description: 'Overlooking Arabian sea with acoustic sundowners.', location: 'Vagator', category: 'relaxation', duration: '2h', costInr: 400, isOutdoor: true }] }]
  },
  {
    id: 'mahabaleshwar',
    name: 'Mahabaleshwar & Panchgani',
    region: 'Maharashtra',
    country: 'India',
    tagline: 'Strawberry plateaus, misty Sahyadri valleys and colonial viewpoints',
    description: 'Perched in the Western Ghats with lush strawberry plantations, Arthur’s Seat cliff edge, Venna Lake boating, table land plateaus, and fresh cream treats.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'],
    lat: 17.9237,
    lng: 73.6586,
    baseBudgetInr: 9500,
    estimatedBudget: 9500,
    recommendedDays: 3,
    duration: 3,
    tags: ['Western Ghats', 'Nature', 'Food', 'Weekend', 'Romantic'],
    bestSeason: 'October – June & Monsoon for Waterfalls',
    currentTemp: '19°C',
    weatherCondition: 'Misty & Pleasant',
    crowdLevel: 'Moderate',
    crowdScore: 40,
    experienceScore: 92,
    aiMatchScore: 90,
    matchScore: 90,
    scores: { adventure: 75, culture: 78, food: 92, nature: 95, relaxation: 92, luxury: 75, spontaneity: 85 },
    whyAiChose: ['Convenient road-trip getaway from Mumbai and Pune', 'Fresh organic strawberry farms with fresh cream bowls', 'Breathtaking 2000ft drop views into Konkan valley', 'Pleasant misty mountain climate year-round'],
    travelDnaFit: 'The Weekend Escapist',
    hiddenGems: [{ name: 'Kate’s Point Secret Needle Hole', description: 'Natural rock arch overlooking Dhom dam with few visitors.', crowdReductionPct: 75, savingsInr: 1000, authenticityScore: 95, experienceScore: 93, popularAlternativeName: 'Venna lake boat crowd' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '06:30 AM – 09:00 AM', reason: 'Valley blanketed in morning mist', aiConfidence: 94 },
    budgetBreakdown: { flights: 1500, accommodation: 4000, food: 2200, transport: 1200, activities: 600 },
    moodMatches: ['Relaxing', 'Romantic', 'Nature', 'Food', 'Peaceful'],
    itinerary: [{ day: 1, title: 'Strawberry Farm & Valley Sunset', weather: { temp: '20°C', condition: 'Misty', icon: 'Cloud' }, activities: [{ id: 'mb-1', time: '10:00 AM', title: 'Farm Strawberry Picking', description: 'Pick fresh berries and taste mulberry preserves.', location: 'Panchgani', category: 'food', duration: '2h', costInr: 250, isOutdoor: true }] }]
  },
  {
    id: 'rann-of-kutch',
    name: 'Rann of Kutch',
    region: 'Gujarat',
    country: 'India',
    tagline: 'Endless white salt desert under the full moon and Kutchi handicrafts',
    description: 'The world’s largest white salt desert stretching to the horizon. Celebrated for full-moon desert walks, vibrant Rogan art, Kutchi embroidery, and desert tent cities.',
    heroImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'],
    lat: 23.8346,
    lng: 69.8329,
    baseBudgetInr: 15500,
    estimatedBudget: 15500,
    recommendedDays: 3,
    duration: 3,
    tags: ['Desert', 'Culture', 'Photography', 'Art'],
    bestSeason: 'November – February (Rann Utsav)',
    currentTemp: '20°C',
    weatherCondition: 'Sunny & Crisp Nights',
    crowdLevel: 'Moderate',
    crowdScore: 42,
    experienceScore: 95,
    aiMatchScore: 92,
    matchScore: 92,
    scores: { adventure: 85, culture: 98, food: 88, nature: 96, relaxation: 88, luxury: 78, spontaneity: 74 },
    whyAiChose: ['Surreal visual wonder of walking on endless white salt flats', 'Magical full moon night reflection when the desert glows silver', 'Direct interaction with master artisans of Rogan & Ajrakh art', 'Authentic Gujarati Kathiyawadi cuisine & bajra rotlas'],
    travelDnaFit: 'The Cultural Visionary',
    hiddenGems: [{ name: 'Kala Dungar (Black Hill) & Dholavira', description: 'UNESCO Indus Valley Harappan archaeological site and highest point in Kutch.', crowdReductionPct: 82, savingsInr: 2200, authenticityScore: 99, experienceScore: 96, popularAlternativeName: 'Dhordo commercial tent gate' }],
    optimalVisitingHours: { peakHours: '12:00 PM – 04:00 PM', recommendedHours: '05:30 PM – 09:00 PM', reason: 'Full moon rising over white salt crust', aiConfidence: 97 },
    budgetBreakdown: { flights: 4500, accommodation: 5500, food: 2500, transport: 2000, activities: 1000 },
    moodMatches: ['Cultural', 'Nature', 'Romantic', 'Curious'],
    itinerary: [{ day: 1, title: 'White Desert Sunset & Full Moon Walk', weather: { temp: '20°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'rk-1', time: '05:00 PM', title: 'White Rann Sunset Exploration', description: 'Walk onto the shimmering salt desert as sun sets.', location: 'Dhordo', category: 'nature', duration: '3h', costInr: 100, isOutdoor: true }] }]
  },

  // ================= SOUTH INDIA =================
  {
    id: 'munnar',
    name: 'Munnar',
    region: 'Kerala',
    country: 'India',
    tagline: 'Rolling emerald tea carpets, misty peaks and cool mountain streams',
    description: 'South India’s premier tea garden sanctuary with endless green hills, Anamudi peak, fragrant cardamom plantations, Eravikulam National Park (Nilgiri Tahr), and cool mountain fog.',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'],
    lat: 10.0889,
    lng: 77.0595,
    baseBudgetInr: 13500,
    estimatedBudget: 13500,
    recommendedDays: 4,
    duration: 4,
    tags: ['Mountains', 'Tea Gardens', 'Nature', 'Romantic', 'Relaxing'],
    bestSeason: 'September – May',
    currentTemp: '18°C',
    weatherCondition: 'Misty & Pleasant',
    crowdLevel: 'Moderate',
    crowdScore: 38,
    experienceScore: 96,
    aiMatchScore: 94,
    matchScore: 94,
    scores: { adventure: 84, culture: 82, food: 90, nature: 99, relaxation: 96, luxury: 80, spontaneity: 78 },
    whyAiChose: ['Endless manicured emerald tea gardens stretching into mist', 'Cool refreshing mountain air with private hillside treehouse stays', 'Authentic Kerala spice trails and fresh homemade chocolates', 'Chances to spot rare Nilgiri Tahr in wild grasslands'],
    travelDnaFit: 'The Serene Nature Lover',
    hiddenGems: [{ name: 'Kolukkumalai Tea Estate & Peak', description: 'Highest organic tea plantation in the world reached only by 4x4 jeep.', crowdReductionPct: 80, savingsInr: 2000, authenticityScore: 99, experienceScore: 98, popularAlternativeName: 'Munnar town main circle' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:30 PM', recommendedHours: '05:30 AM – 08:30 AM', reason: 'Sea of clouds rolling over tea hills at sunrise', aiConfidence: 96 },
    budgetBreakdown: { flights: 4500, accommodation: 4500, food: 2200, transport: 1500, activities: 800 },
    moodMatches: ['Peaceful', 'Romantic', 'Nature', 'Relaxing'],
    itinerary: [{ day: 1, title: 'Tea Trails & Mountain Viewpoint', weather: { temp: '18°C', condition: 'Misty', icon: 'Cloud' }, activities: [{ id: 'mn-1', time: '09:00 AM', title: 'Tea Plantation Walk & Factory', description: 'Learn artisan orthodox tea processing.', location: 'Lockhart Tea', category: 'nature', duration: '2h', costInr: 150, isOutdoor: true }] }]
  },
  {
    id: 'alleppey',
    name: 'Alleppey & Kumarakom',
    region: 'Kerala',
    country: 'India',
    tagline: 'Quiet palm backwaters, wooden houseboats and emerald paddy lagoons',
    description: 'The Venice of the East with peaceful canals, mirror-calm backwaters, private thatched houseboats, fresh pearl spot fish feasts, and water-bound village life.',
    heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'],
    lat: 9.4981,
    lng: 76.3388,
    baseBudgetInr: 16000,
    estimatedBudget: 16000,
    recommendedDays: 3,
    duration: 3,
    tags: ['Backwaters', 'Relaxing', 'Romantic', 'Food', 'Nature'],
    bestSeason: 'September – March',
    currentTemp: '27°C',
    weatherCondition: 'Sunny',
    crowdLevel: 'Moderate',
    crowdScore: 35,
    experienceScore: 96,
    aiMatchScore: 95,
    matchScore: 95,
    scores: { adventure: 70, culture: 88, food: 98, nature: 97, relaxation: 100, luxury: 88, spontaneity: 72 },
    whyAiChose: ['Profound tranquility gliding on private wooden houseboats', 'Fresh Karimeen Pollichathu (pearl spot fish in banana leaf)', 'Canoeing through narrow mangrove village waterways', 'Vembanad Lake sunsets with flying kingfishers'],
    travelDnaFit: 'The Mindful Epicurean',
    hiddenGems: [{ name: 'Kainakary Village Canoe Trail', description: 'Paddling silently through canals where motorized houseboats cannot fit.', crowdReductionPct: 86, savingsInr: 2500, authenticityScore: 98, experienceScore: 96, popularAlternativeName: 'Alleppey main boat jetty' }],
    optimalVisitingHours: { peakHours: '01:00 PM – 04:30 PM', recommendedHours: '06:00 AM – 08:30 AM', reason: 'Sunrise reflects mirror-calm waters with chirping birds', aiConfidence: 95 },
    budgetBreakdown: { flights: 5000, accommodation: 6000, food: 2500, transport: 1500, activities: 1000 },
    moodMatches: ['Relaxing', 'Romantic', 'Nature', 'Food', 'Peaceful'],
    itinerary: [{ day: 1, title: 'Houseboat Check-in & Canal Cruise', weather: { temp: '27°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'al-1', time: '12:00 PM', title: 'Traditional Houseboat Boarding', description: 'Cruise through palm-fringed backwaters with onboard chef.', location: 'Vembanad Lake', category: 'relaxation', duration: '5h', costInr: 4500, isOutdoor: true }] }]
  },
  {
    id: 'coorg',
    name: 'Coorg (Kodagu)',
    region: 'Karnataka',
    country: 'India',
    tagline: 'The Scotland of India: coffee estates, spice trails and misty waterfalls',
    description: 'Nestled in the lush Western Ghats with sprawling Arabica & Robusta coffee plantations, aromatic pepper vines, Abbey Falls, Tibetan Golden Temple at Bylakuppe, and Kodava hospitality.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'],
    lat: 12.3375,
    lng: 75.8069,
    baseBudgetInr: 12000,
    estimatedBudget: 12000,
    recommendedDays: 3,
    duration: 3,
    tags: ['Western Ghats', 'Coffee', 'Nature', 'Relaxing', 'Food'],
    bestSeason: 'October – May (Lush green in Monsoon)',
    currentTemp: '20°C',
    weatherCondition: 'Cool & Pleasant',
    crowdLevel: 'Moderate',
    crowdScore: 34,
    experienceScore: 94,
    aiMatchScore: 93,
    matchScore: 93,
    scores: { adventure: 80, culture: 86, food: 94, nature: 98, relaxation: 95, luxury: 80, spontaneity: 82 },
    whyAiChose: ['Stay in heritage coffee estate bungalows surrounded by birdsong', 'Authentic Pandi Curry and freshly roasted Arabica coffee', 'Trek up Mandalpatti for rolling cloud vistas', 'Serene Buddhist murals at Namdroling Monastery'],
    travelDnaFit: 'The Coffee Connoisseur',
    hiddenGems: [{ name: 'Chelavara Falls & Tadiandamol Base', description: 'Natural curtain waterfall and highest peak trail in Coorg.', crowdReductionPct: 82, savingsInr: 1800, authenticityScore: 97, experienceScore: 95, popularAlternativeName: 'Abbey Falls tourist platform' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '06:30 AM – 09:00 AM', reason: 'Fresh morning coffee aroma in misty estates', aiConfidence: 94 },
    budgetBreakdown: { flights: 3500, accommodation: 4500, food: 2200, transport: 1200, activities: 600 },
    moodMatches: ['Peaceful', 'Relaxing', 'Nature', 'Food', 'Romantic'],
    itinerary: [{ day: 1, title: 'Coffee Estate Walk & Bylakuppe', weather: { temp: '20°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'cg-1', time: '10:00 AM', title: 'Estate Coffee Tour & Tasting', description: 'Walk through Arabica & cardamom groves.', location: 'Madikeri Estate', category: 'nature', duration: '2h', costInr: 300, isOutdoor: true }] }]
  },
  {
    id: 'hampi',
    name: 'Hampi',
    region: 'Karnataka',
    country: 'India',
    tagline: 'UNESCO boulder moonscape, royal Vijayanagara ruins and riverside cafes',
    description: 'Surreal landscape of giant balancing granite boulders, the ruins of the 14th-century Vijayanagara Empire, Virupaksha temple, coracle boat rides, and bohemian hippie island cafes.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'],
    lat: 15.3350,
    lng: 76.4600,
    baseBudgetInr: 10500,
    estimatedBudget: 10500,
    recommendedDays: 3,
    duration: 3,
    tags: ['History', 'Culture', 'Architecture', 'Adventure', 'Photography'],
    bestSeason: 'October – March',
    currentTemp: '26°C',
    weatherCondition: 'Sunny',
    crowdLevel: 'Moderate',
    crowdScore: 32,
    experienceScore: 97,
    aiMatchScore: 93,
    matchScore: 93,
    scores: { adventure: 88, culture: 100, food: 80, nature: 92, relaxation: 85, luxury: 55, spontaneity: 90 },
    whyAiChose: ['One of the world’s most unique architectural landscapes', 'Stone Chariot & musical pillars at Vijaya Vittala temple', 'Sunset boulder climbs over the Tungabhadra river valley', 'Extremely budget-friendly bicycle and moped rentals'],
    travelDnaFit: 'The Living Historian',
    hiddenGems: [{ name: 'Anjaneya Hill & Sanapur Lake', description: 'Coracle boat ride on blue lake bordered by giant boulders.', crowdReductionPct: 80, savingsInr: 1200, authenticityScore: 98, experienceScore: 96, popularAlternativeName: 'Virupaksha bazaar line' }],
    optimalVisitingHours: { peakHours: '12:00 PM – 03:30 PM', recommendedHours: '05:45 AM – 08:30 AM & 05:00 PM – 06:45 PM', reason: 'Soft golden light turning boulders to amber', aiConfidence: 97 },
    budgetBreakdown: { flights: 3000, accommodation: 3500, food: 2000, transport: 1000, activities: 1000 },
    moodMatches: ['Cultural', 'Adventure', 'Peaceful'],
    itinerary: [{ day: 1, title: 'Vittala Temple & Sunset Boulder', weather: { temp: '26°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'hp-1', time: '09:00 AM', title: 'Vijaya Vittala & Stone Chariot', description: 'Explore iconic stone chariot and musical columns.', location: 'Hampi Ruins', category: 'culture', duration: '3h', costInr: 40, isOutdoor: true }] }]
  },
  {
    id: 'gokarna',
    name: 'Gokarna',
    region: 'Karnataka',
    country: 'India',
    tagline: 'Untamed cliffside beaches, sacred temple town and barefoot bohemian bliss',
    description: 'Where the Western Ghats meet the Arabian Sea. Famed for its five crescent beaches (Om Beach, Kudle, Half Moon, Paradise), cliffside hiking trails, and laid-back beach shacks.',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'],
    lat: 14.5479,
    lng: 74.3188,
    baseBudgetInr: 9000,
    estimatedBudget: 9000,
    recommendedDays: 3,
    duration: 3,
    tags: ['Beaches', 'Adventure', 'Relaxing', 'Spirituality'],
    bestSeason: 'October – April',
    currentTemp: '28°C',
    weatherCondition: 'Warm & Breezy',
    crowdLevel: 'Low',
    crowdScore: 25,
    experienceScore: 94,
    aiMatchScore: 92,
    matchScore: 92,
    scores: { adventure: 88, culture: 85, food: 84, nature: 95, relaxation: 96, luxury: 50, spontaneity: 92 },
    whyAiChose: ['Scenic beach trek connecting 5 secluded beaches over rocky cliffs', 'Affordable beachfront thatched huts right on the sand', 'Less commercialized than Goa with spiritual serenity', 'Dolphin spotting right from Kudle beach shacks'],
    travelDnaFit: 'The Barefoot Wanderer',
    hiddenGems: [{ name: 'Half Moon to Paradise Beach Trail', description: 'Wild cliff trail only accessible by foot or small wooden boat.', crowdReductionPct: 88, savingsInr: 1500, authenticityScore: 98, experienceScore: 95, popularAlternativeName: 'Om Beach parking area' }],
    optimalVisitingHours: { peakHours: '01:00 PM – 04:00 PM', recommendedHours: '06:00 AM – 08:30 AM & 05:30 PM – 07:00 PM', reason: 'Crimson cliff sunset into the Arabian Sea', aiConfidence: 95 },
    budgetBreakdown: { flights: 2500, accommodation: 3000, food: 2000, transport: 1000, activities: 500 },
    moodMatches: ['Relaxing', 'Adventure', 'Peaceful', 'Nature'],
    itinerary: [{ day: 1, title: 'Kudle to Paradise Beach Trek', weather: { temp: '28°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'gk-1', time: '07:30 AM', title: '5-Beach Cliff Trek', description: 'Hike across coastal hills from Om to Paradise beach.', location: 'Om Beach', category: 'adventure', duration: '3h', costInr: 0, isOutdoor: true }] }]
  },
  {
    id: 'ooty',
    name: 'Ooty & Nilgiris',
    region: 'Tamil Nadu',
    country: 'India',
    tagline: 'Blue Mountains, UNESCO toy train, pine forests and tea estates',
    description: 'The Queen of Hill Stations in the Nilgiris with aromatic eucalyptus groves, heritage Nilgiri Mountain Railway (UNESCO), botanical gardens, and Pykara lake cascades.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'],
    lat: 11.4100,
    lng: 76.6950,
    baseBudgetInr: 11500,
    estimatedBudget: 11500,
    recommendedDays: 3,
    duration: 3,
    tags: ['Mountains', 'Nature', 'Heritage', 'Tea Gardens', 'Family'],
    bestSeason: 'October – June',
    currentTemp: '16°C',
    weatherCondition: 'Cool & Pleasant',
    crowdLevel: 'Moderate',
    crowdScore: 45,
    experienceScore: 92,
    aiMatchScore: 90,
    matchScore: 90,
    scores: { adventure: 74, culture: 82, food: 86, nature: 95, relaxation: 92, luxury: 75, spontaneity: 76 },
    whyAiChose: ['Charming heritage steam toy train crossing viaducts and tunnels', 'Cool hill station climate away from southern summer heat', 'Fragrant homemade chocolate stores and Nilgiri orthodox tea', 'Pine forests featured in classic Indian cinema'],
    travelDnaFit: 'The Nostalgic Explorer',
    hiddenGems: [{ name: 'Avalanche Lake & Emerald Village', description: 'Secluded pristine lake surrounded by magnolia and rhododendron woods.', crowdReductionPct: 84, savingsInr: 1500, authenticityScore: 97, experienceScore: 95, popularAlternativeName: 'Ooty lake pedal boat jam' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:30 PM', recommendedHours: '07:00 AM – 09:30 AM', reason: 'Fresh pine scent and morning mist over Doddabetta', aiConfidence: 93 },
    budgetBreakdown: { flights: 3500, accommodation: 4000, food: 2200, transport: 1200, activities: 600 },
    moodMatches: ['Relaxing', 'Nature', 'Romantic', 'Peaceful'],
    itinerary: [{ day: 1, title: 'Toy Train & Botanical Walk', weather: { temp: '16°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'ot-1', time: '09:00 AM', title: 'Nilgiri Toy Train Ride', description: 'Scenic heritage train through valleys and bridges.', location: 'Coonoor to Ooty', category: 'nature', duration: '1h 30m', costInr: 200, isOutdoor: true }] }]
  },
  {
    id: 'pondicherry',
    name: 'Pondicherry (Puducherry)',
    region: 'Puducherry & Tamil Nadu',
    country: 'India',
    tagline: 'French colonial villas, seaside promenade and Auroville peace',
    description: 'A coastal French enclave with mustard-yellow colonial mansions, bougainvillea archways, French bakeries with buttery croissants, rocky ocean promenade, and spiritual retreat at Auroville.',
    heroImage: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'],
    lat: 11.9416,
    lng: 79.8083,
    baseBudgetInr: 11000,
    estimatedBudget: 11000,
    recommendedDays: 3,
    duration: 3,
    tags: ['Colonial', 'Beaches', 'Food', 'Culture', 'Relaxing'],
    bestSeason: 'October – March',
    currentTemp: '27°C',
    weatherCondition: 'Pleasant & Breezy',
    crowdLevel: 'Moderate',
    crowdScore: 38,
    experienceScore: 94,
    aiMatchScore: 92,
    matchScore: 92,
    scores: { adventure: 65, culture: 95, food: 98, nature: 82, relaxation: 94, luxury: 80, spontaneity: 85 },
    whyAiChose: ['Unique French-Tamil heritage architecture & bicycle-friendly streets', 'World-class artisan bakeries, sourdough crepes and seafood', 'Serene Matrimandir dome meditation at Auroville', 'Evening breeze walks along the rocky beach promenade'],
    travelDnaFit: 'The Bohemian Francophile',
    hiddenGems: [{ name: 'Serenity Beach Surf Point & Eden Beach', description: 'Blue Flag eco-beach with golden sand and quiet palm groves.', crowdReductionPct: 78, savingsInr: 1200, authenticityScore: 96, experienceScore: 94, popularAlternativeName: 'White Town weekend parking' }],
    optimalVisitingHours: { peakHours: '12:00 PM – 04:00 PM', recommendedHours: '06:00 AM – 08:30 AM & 05:30 PM – 07:30 PM', reason: 'Promenade closed to vehicular traffic for peaceful strolling', aiConfidence: 96 },
    budgetBreakdown: { flights: 3500, accommodation: 4000, food: 2200, transport: 800, activities: 500 },
    moodMatches: ['Relaxing', 'Food', 'Romantic', 'Cultural'],
    itinerary: [{ day: 1, title: 'White Town Bicycle & Promenade', weather: { temp: '27°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'pc-1', time: '08:30 AM', title: 'French Quarter Bicycle Tour', description: 'Ride through mustard streets and heritage villas.', location: 'White Town', category: 'culture', duration: '2h', costInr: 150, isOutdoor: true }] }]
  },

  // ================= EAST & NORTHEAST INDIA & ISLANDS =================
  {
    id: 'darjeeling',
    name: 'Darjeeling & Kalimpong',
    region: 'West Bengal',
    country: 'India',
    tagline: 'Kanchenjunga sunrise from Tiger Hill, champagne of teas and toy train',
    description: 'Perched in the eastern Himalayas overlooking the world’s third highest peak (Mt. Kanchenjunga), sprawling heritage tea estates, British colonial architecture, and Tibetan momo culture.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'],
    lat: 27.0410,
    lng: 88.2663,
    baseBudgetInr: 13000,
    estimatedBudget: 13000,
    recommendedDays: 4,
    duration: 4,
    tags: ['Mountains', 'Tea Gardens', 'Nature', 'Heritage', 'Food'],
    bestSeason: 'October – May',
    currentTemp: '14°C',
    weatherCondition: 'Cool & Clear',
    crowdLevel: 'Moderate',
    crowdScore: 38,
    experienceScore: 95,
    aiMatchScore: 93,
    matchScore: 93,
    scores: { adventure: 80, culture: 92, food: 92, nature: 98, relaxation: 92, luxury: 75, spontaneity: 78 },
    whyAiChose: ['Breathtaking pink-gold sunrise illumination on Mt. Kanchenjunga', 'World-famous Darjeeling first-flush tea tasting at heritage plantations', 'UNESCO Darjeeling Himalayan Railway toy train ride', 'Steamy Tibetan thukpa and pork momos on misty evenings'],
    travelDnaFit: 'The Himalayan Epicurean',
    hiddenGems: [{ name: 'Lamahatta Eco Park & Tinchuley', description: 'Pine forest trails and quiet village homestays with direct mountain views.', crowdReductionPct: 85, savingsInr: 2000, authenticityScore: 98, experienceScore: 96, popularAlternativeName: 'Tiger Hill 4 AM traffic jam' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '04:30 AM – 06:30 AM', reason: 'Unobstructed morning view of Kanchenjunga', aiConfidence: 96 },
    budgetBreakdown: { flights: 4000, accommodation: 4500, food: 2500, transport: 1500, activities: 500 },
    moodMatches: ['Peaceful', 'Nature', 'Romantic', 'Food'],
    itinerary: [{ day: 1, title: 'Tiger Hill Sunrise & Glenary’s Bakery', weather: { temp: '14°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'dj-1', time: '04:30 AM', title: 'Tiger Hill Kanchenjunga Sunrise', description: 'Watch the sunrise light up snow peaks.', location: 'Tiger Hill', category: 'nature', duration: '2h', costInr: 100, isOutdoor: true }] }]
  },
  {
    id: 'sikkim',
    name: 'Sikkim (Gangtok & Pelling)',
    region: 'Sikkim',
    country: 'India',
    tagline: 'Glacial lakes, cliffside Nyingma monasteries and organic valley feasts',
    description: 'India’s first 100% organic state. Home to Rumtek and Pemayangtse monasteries, turquoise Tsomgo glacial lake, Gurudongmar, and close-up views of Mt. Kanchenjunga.',
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'],
    lat: 27.3389,
    lng: 88.6065,
    baseBudgetInr: 15500,
    estimatedBudget: 15500,
    recommendedDays: 5,
    duration: 5,
    tags: ['Mountains', 'Nature', 'Spirituality', 'Adventure', 'Organic'],
    bestSeason: 'March – May & Oct – Dec',
    currentTemp: '13°C',
    weatherCondition: 'Sunny & Crisp',
    crowdLevel: 'Low',
    crowdScore: 24,
    experienceScore: 97,
    aiMatchScore: 94,
    matchScore: 94,
    scores: { adventure: 92, culture: 96, food: 88, nature: 99, relaxation: 90, luxury: 65, spontaneity: 80 },
    whyAiChose: ['Pristine organic farming food culture and herbal Himalayan broths', 'Sacred Buddhist monasteries filled with chanting and prayer wheels', 'Glacial high-altitude lakes with snow-covered mountain walls', 'Warm and genuinely welcoming Sikkimese communities'],
    travelDnaFit: 'The High-Altitude Pilgrim',
    hiddenGems: [{ name: 'Yuksom & Khecheopalri Sacred Wish Lake', description: 'Ancient first capital of Sikkim where footprint of Guru Rinpoche is preserved.', crowdReductionPct: 88, savingsInr: 2500, authenticityScore: 99, experienceScore: 97, popularAlternativeName: 'MG Marg Gangtok crowd' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '06:00 AM – 08:30 AM', reason: 'Crystal reflection of snow on silent mountain lakes', aiConfidence: 96 },
    budgetBreakdown: { flights: 4500, accommodation: 5000, food: 2800, transport: 2200, activities: 1000 },
    moodMatches: ['Peaceful', 'Nature', 'Adventure', 'Cultural'],
    itinerary: [{ day: 1, title: 'Rumtek Monastery & Sikkimese Feast', weather: { temp: '14°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'sk-1', time: '10:00 AM', title: 'Rumtek Dharma Chakra Centre', description: 'Largest monastery in Sikkim with golden stupa.', location: 'Rumtek', category: 'culture', duration: '2h', costInr: 50, isOutdoor: true }] }]
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya (Shillong & Cherrapunji)',
    region: 'Meghalaya',
    country: 'India',
    tagline: 'The Abode of Clouds: living root bridges, turquoise river canyons and roaring falls',
    description: 'A magical realm of bio-engineered living double-decker root bridges, Nohkalikai waterfall, Umngot glass-like river in Dawki, and limestone cave explorations.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'],
    lat: 25.5788,
    lng: 91.8933,
    baseBudgetInr: 16000,
    estimatedBudget: 16000,
    recommendedDays: 5,
    duration: 5,
    tags: ['Nature', 'Waterfalls', 'Adventure', 'Trekking', 'Rainforest'],
    bestSeason: 'October – May (Monsoon June–Sept for thunderous falls)',
    currentTemp: '17°C',
    weatherCondition: 'Pleasant & Misty',
    crowdLevel: 'Low',
    crowdScore: 22,
    experienceScore: 98,
    aiMatchScore: 96,
    matchScore: 96,
    scores: { adventure: 98, culture: 92, food: 82, nature: 100, relaxation: 88, luxury: 60, spontaneity: 85 },
    whyAiChose: ['World-unique living root bridges grown across centuries by Khasi tribes', 'Crystal-clear Umngot river at Dawki where boats appear to float in air', 'India’s tallest plunge waterfall (Nohkalikai)', 'Deep limestone cave networks and clean organic villages'],
    travelDnaFit: 'The Rainforest Explorer',
    hiddenGems: [{ name: 'Krang Shuri Falls & Mawryngkhang Bamboo Trail', description: 'Turquoise natural swimming pool and thrilling cliff bamboo skywalk.', crowdReductionPct: 85, savingsInr: 3000, authenticityScore: 99, experienceScore: 98, popularAlternativeName: 'Police Bazar traffic' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '07:00 AM – 09:30 AM', reason: 'Clear waters and morning sun piercing mist', aiConfidence: 97 },
    budgetBreakdown: { flights: 5000, accommodation: 5000, food: 2500, transport: 2500, activities: 1000 },
    moodMatches: ['Adventure', 'Nature', 'Peaceful'],
    itinerary: [{ day: 1, title: 'Double Decker Living Root Bridge Trek', weather: { temp: '18°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'mg-1', time: '07:30 AM', title: 'Trek into Tyrna Valley', description: 'Descend 3,000 stone steps to ancient living root bridges.', location: 'Nongriat', category: 'adventure', duration: '5h', costInr: 200, isOutdoor: true }] }]
  },
  {
    id: 'andaman',
    name: 'Andaman (Havelock / Swaraj Dweep)',
    region: 'Andaman & Nicobar Islands',
    country: 'India',
    tagline: 'Radhanagar Beach, turquoise coral reefs and bioluminescent night kayaking',
    description: 'An idyllic tropical paradise in the Bay of Bengal with Asia’s best beach (Radhanagar), vibrant coral reefs for scuba diving, mangrove lagoons, and warm crystal-clear waters.',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80'],
    lat: 11.9761,
    lng: 92.9876,
    baseBudgetInr: 28000,
    estimatedBudget: 28000,
    recommendedDays: 6,
    duration: 6,
    tags: ['Islands', 'Beaches', 'Scuba Diving', 'Romantic', 'Nature'],
    bestSeason: 'October – May',
    currentTemp: '28°C',
    weatherCondition: 'Tropical & Sunny',
    crowdLevel: 'Moderate',
    crowdScore: 30,
    experienceScore: 99,
    aiMatchScore: 97,
    matchScore: 97,
    scores: { adventure: 96, culture: 75, food: 90, nature: 100, relaxation: 98, luxury: 92, spontaneity: 74 },
    whyAiChose: ['Consistently ranked among the top 10 beaches in the world', 'World-class scuba diving among pristine coral reefs and sea turtles', 'Bioluminescent night kayaking under starry island skies', 'Pristine white sand with zero urban pollution'],
    travelDnaFit: 'The Tropical Pioneer',
    hiddenGems: [{ name: 'Kalapathar Beach & Neil Island Caves', description: 'Black rock contrast against white sands and quiet private coves.', crowdReductionPct: 80, savingsInr: 3000, authenticityScore: 98, experienceScore: 97, popularAlternativeName: 'Port Blair ferry jetty rush' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 03:00 PM', recommendedHours: '05:00 PM – 06:45 PM', reason: 'Spectacular sunset over Radhanagar beach horizon', aiConfidence: 98 },
    budgetBreakdown: { flights: 11000, accommodation: 9000, food: 4000, transport: 2500, activities: 1500 },
    moodMatches: ['Romantic', 'Relaxing', 'Adventure', 'Nature'],
    itinerary: [{ day: 1, title: 'Radhanagar Sunset & Coastal Villa', weather: { temp: '28°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'an-1', time: '04:30 PM', title: 'Radhanagar Beach Stroll & Sunset', description: 'Powder white sand and violet sea sunset.', location: 'Beach No. 7', category: 'nature', duration: '2h', costInr: 0, isOutdoor: true }] }]
  },
  {
    id: 'ziro-valley',
    name: 'Ziro Valley',
    region: 'Arunachal Pradesh',
    country: 'India',
    tagline: 'Pine-clad hills, Apatani tribal culture and terraced rice paddies',
    description: 'A serene plateau in Arunachal Pradesh home to the hospitable Apatani tribe, UNESCO-contender sustainable wet rice paddy cultivation, bamboo groves, and indie music festivals.',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    galleryImages: ['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'],
    lat: 27.5939,
    lng: 93.8340,
    baseBudgetInr: 16500,
    estimatedBudget: 16500,
    recommendedDays: 5,
    duration: 5,
    tags: ['Culture', 'Hidden Gems', 'Nature', 'Tribal', 'Mountains'],
    bestSeason: 'March – October',
    currentTemp: '15°C',
    weatherCondition: 'Crisp & Sunny',
    crowdLevel: 'Low',
    crowdScore: 14,
    experienceScore: 97,
    aiMatchScore: 93,
    matchScore: 93,
    scores: { adventure: 88, culture: 100, food: 82, nature: 98, relaxation: 94, luxury: 40, spontaneity: 86 },
    whyAiChose: ['Deep cultural authenticity with the tattoo-art Apatani community', '95% off the standard tourist circuit for genuine discovery', 'Lush bamboo pine groves and traditional wooden stilt homestays', 'Home of the famous open-air Ziro Music Festival'],
    travelDnaFit: 'The Uncharted Anthropologist',
    hiddenGems: [{ name: 'Hong Village & Tarin Fish Farm', description: 'Largest traditional village in Asia with unique dual rice-fish farming.', crowdReductionPct: 92, savingsInr: 2500, authenticityScore: 99, experienceScore: 98, popularAlternativeName: 'Itanagar highway line' }],
    optimalVisitingHours: { peakHours: '11:00 AM – 02:30 PM', recommendedHours: '06:00 AM – 08:30 AM', reason: 'Dew on terraced paddy fields with mountain backdrop', aiConfidence: 96 },
    budgetBreakdown: { flights: 5500, accommodation: 4500, food: 2500, transport: 2500, activities: 1500 },
    moodMatches: ['Peaceful', 'Cultural', 'Nature'],
    itinerary: [{ day: 1, title: 'Apatani Village Walk & Bamboo Homestay', weather: { temp: '16°C', condition: 'Sunny', icon: 'Sun' }, activities: [{ id: 'zr-1', time: '10:00 AM', title: 'Hong Village Heritage Walk', description: 'Interact with Apatani elders and witness bamboo architecture.', location: 'Hong', category: 'culture', duration: '3h', costInr: 200, isOutdoor: true }] }]
  },

  // ================= EXPANDED PAN-INDIA DESTINATIONS =================
  {
    "id": "shimla",
    "name": "Shimla & Kufri",
    "region": "Himachal Pradesh",
    "country": "India",
    "tagline": "Colonial hill charm, heritage toy train and pine-scented ridge promenades",
    "description": "The historic Summer Capital of British India nestled in cedar forests, featuring the iconic Mall Road, snow-capped Himalayan viewpoints at Kufri, and scenic UNESCO heritage toy train rides.",
    "heroImage": "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 31.1048,
    "lng": 77.1734,
    "baseBudgetInr": 14000,
    "estimatedBudget": 14000,
    "recommendedDays": 4,
    "duration": 4,
    "tags": [
      "Mountains",
      "Colonial",
      "Family",
      "Nature",
      "Romantic"
    ],
    "bestSeason": "March – June & Dec – Feb for Snow",
    "currentTemp": "16°C",
    "weatherCondition": "Pleasant & Breezy",
    "crowdLevel": "Moderate",
    "crowdScore": 42,
    "experienceScore": 94,
    "aiMatchScore": 92,
    "matchScore": 92,
    "scores": {
      "adventure": 80,
      "culture": 92,
      "food": 88,
      "nature": 95,
      "relaxation": 90,
      "luxury": 82,
      "spontaneity": 75
    },
    "whyAiChose": [
      "Accessible family-friendly mountain gateway with historic charm",
      "Iconic UNESCO Kalka-Shimla heritage railway mountain vistas",
      "Pleasant alpine climate with cedar and pine walking trails",
      "Panoramic sunset viewpoints from Jakhu Temple and the Ridge"
    ],
    "travelDnaFit": "The Colonial Heritage Escapist",
    "hiddenGems": [
      {
        "name": "Mashobra & Craignano Pine Apple Trails",
        "description": "Serene Italian-style fruit orchard and tranquil cedar trails without tourist congestion.",
        "crowdReductionPct": 78,
        "savingsInr": 2500,
        "authenticityScore": 96,
        "experienceScore": 94,
        "popularAlternativeName": "Crowded Mall Road center"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 04:00 PM",
      "recommendedHours": "06:30 AM – 09:00 AM",
      "reason": "Crisp morning views across snow-peaked Pir Panjal range",
      "aiConfidence": 94
    },
    "budgetBreakdown": {
      "flights": 3500,
      "accommodation": 5000,
      "food": 2500,
      "transport": 2000,
      "activities": 1000
    },
    "moodMatches": [
      "Relaxing",
      "Romantic",
      "Cultural",
      "Nature",
      "Peaceful"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "The Ridge, Christ Church & Mall Promenade",
        "weather": {
          "temp": "17°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "sh-1",
            "time": "10:30 AM",
            "title": "Heritage Ridge Walk",
            "description": "Stroll past Christ Church and Tudor-library architecture.",
            "location": "The Ridge",
            "category": "culture",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          },
          {
            "id": "sh-2",
            "time": "04:00 PM",
            "title": "Jakhu Ropeway Ride",
            "description": "Cable car ride through pine woods to ancient hilltop temple.",
            "location": "Jakhu Hill",
            "category": "adventure",
            "duration": "1.5h",
            "costInr": 500,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "dharamshala",
    "name": "Dharamshala & McLeodganj",
    "region": "Himachal Pradesh",
    "country": "India",
    "tagline": "Tibetan monastic chanting, Dhauladhar snow ridges and serene cedar trails",
    "description": "The sacred residence of His Holiness the Dalai Lama surrounded by deodar pine slopes, colourful Tibetan prayer flags, world-renowned Triund trek, and quaint mountain bakeries.",
    "heroImage": "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 32.219,
    "lng": 76.3234,
    "baseBudgetInr": 13000,
    "estimatedBudget": 13000,
    "recommendedDays": 4,
    "duration": 4,
    "tags": [
      "Mountains",
      "Spirituality",
      "Culture",
      "Trekking",
      "Peaceful"
    ],
    "bestSeason": "March – June & Sept – Dec",
    "currentTemp": "18°C",
    "weatherCondition": "Clear & Mountain Crisp",
    "crowdLevel": "Moderate",
    "crowdScore": 32,
    "experienceScore": 96,
    "aiMatchScore": 95,
    "matchScore": 95,
    "scores": {
      "adventure": 90,
      "culture": 98,
      "food": 92,
      "nature": 96,
      "relaxation": 94,
      "luxury": 60,
      "spontaneity": 82
    },
    "whyAiChose": [
      "Peaceful Tibetan spiritual sanctuary with authentic Buddhist monasteries",
      "Spectacular Dhauladhar snow wall visible directly above the valley",
      "Rewarding day trek to Triund with panoramic alpine camp views",
      "Vibrant culinary scene with momos, thukpa, and artisan mountain bakeries"
    ],
    "travelDnaFit": "The Mindful Mountain Seeker",
    "hiddenGems": [
      {
        "name": "Naddi Sunset Point & St. John in the Wilderness",
        "description": "Hidden neo-Gothic church in thick deodar woods and quiet Himalayan village walks.",
        "crowdReductionPct": 84,
        "savingsInr": 1800,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Main McLeodganj square"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:30 AM – 03:30 PM",
      "recommendedHours": "06:00 AM – 08:30 AM",
      "reason": "Monks circumambulating Tsuglagkhang Temple during morning kora",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 3800,
      "accommodation": 4200,
      "food": 2400,
      "transport": 1600,
      "activities": 1000
    },
    "moodMatches": [
      "Peaceful",
      "Adventure",
      "Cultural",
      "Curious",
      "Nature"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Dalai Lama Temple Kora & Tibetan Culture",
        "weather": {
          "temp": "19°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "dh-1",
            "time": "09:00 AM",
            "title": "Tsuglagkhang Temple Complex",
            "description": "Witness monastic debates and spin Tibetan prayer wheels.",
            "location": "McLeodganj",
            "category": "culture",
            "duration": "2.5h",
            "costInr": 0,
            "isOutdoor": true
          },
          {
            "id": "dh-2",
            "time": "01:00 PM",
            "title": "Tibetan Herbal Tea & Thukpa",
            "description": "Traditional noodle soup and butter tea at local rooftop.",
            "location": "Temple Road",
            "category": "food",
            "duration": "1h",
            "costInr": 300,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "kasol",
    "name": "Kasol & Parvati Valley",
    "region": "Himachal Pradesh",
    "country": "India",
    "tagline": "Roaring glacial rivers, pine-clad hippie trails and hot natural sulphur springs",
    "description": "An idyllic mountain getaway beside the turquoise Parvati River, renowned for Bohemian cafes, Israeli cuisine, apple orchards, and the legendary Kheerganga and Tosh hikes.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 32.01,
    "lng": 77.315,
    "baseBudgetInr": 9500,
    "estimatedBudget": 9500,
    "recommendedDays": 4,
    "duration": 4,
    "tags": [
      "Mountains",
      "Adventure",
      "Youth",
      "Nature",
      "Hiking"
    ],
    "bestSeason": "April – June & Sept – Nov",
    "currentTemp": "16°C",
    "weatherCondition": "Sunny & River Breeze",
    "crowdLevel": "Moderate",
    "crowdScore": 36,
    "experienceScore": 94,
    "aiMatchScore": 93,
    "matchScore": 93,
    "scores": {
      "adventure": 96,
      "culture": 82,
      "food": 88,
      "nature": 98,
      "relaxation": 88,
      "luxury": 40,
      "spontaneity": 92
    },
    "whyAiChose": [
      "Super affordable budget escape starting around ₹9,500",
      "Pristine pine riverside trails alongside rushing turquoise rapids",
      "Popular Kheerganga trek with natural hot water springs at the summit",
      "Warm traveler community with international Bohemian cafe culture"
    ],
    "travelDnaFit": "The Free-Spirited Backpacker",
    "hiddenGems": [
      {
        "name": "Grahan Village Trek",
        "description": "A secluded traditional Himachali village 4 hours away with zero vehicular roads and warm homestays.",
        "crowdReductionPct": 90,
        "savingsInr": 1800,
        "authenticityScore": 99,
        "experienceScore": 97,
        "popularAlternativeName": "Kasol market center"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "12:00 PM – 04:00 PM",
      "recommendedHours": "07:00 AM – 10:00 AM",
      "reason": "Fresh pine forest mist by Parvati riverbank",
      "aiConfidence": 95
    },
    "budgetBreakdown": {
      "flights": 3000,
      "accommodation": 3200,
      "food": 1800,
      "transport": 1000,
      "activities": 500
    },
    "moodMatches": [
      "Adventure",
      "Adventurous",
      "Social",
      "Nature",
      "Peaceful"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Chalal Riverside Walk & Israeli Delights",
        "weather": {
          "temp": "17°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "ksl-1",
            "time": "11:00 AM",
            "title": "Suspension Bridge to Chalal",
            "description": "Walk through pine groves beside the rushing river.",
            "location": "Chalal Trail",
            "category": "nature",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          },
          {
            "id": "ksl-2",
            "time": "02:00 PM",
            "title": "Shakshuka & Hummus Platter",
            "description": "Authentic Mediterranean meal at riverside wooden cafe.",
            "location": "Old Kasol",
            "category": "food",
            "duration": "1h",
            "costInr": 350,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "nainital",
    "name": "Nainital & Bhimtal",
    "region": "Uttarakhand",
    "country": "India",
    "tagline": "Eye-shaped emerald lake, colonial oak woods and Himalayan ridge vistas",
    "description": "A glittering lake town situated around Naini Lake in the Kumaon Himalayas, surrounded by seven lush peaks, scenic sailing boats, Mall Road shopping, and peaceful neighboring Bhimtal.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 29.3919,
    "lng": 79.4542,
    "baseBudgetInr": 12000,
    "estimatedBudget": 12000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Lakes",
      "Mountains",
      "Family",
      "Boating",
      "Nature"
    ],
    "bestSeason": "March – June & Oct – Feb",
    "currentTemp": "17°C",
    "weatherCondition": "Cool & Pleasant",
    "crowdLevel": "Moderate",
    "crowdScore": 40,
    "experienceScore": 92,
    "aiMatchScore": 90,
    "matchScore": 90,
    "scores": {
      "adventure": 78,
      "culture": 85,
      "food": 86,
      "nature": 94,
      "relaxation": 92,
      "luxury": 75,
      "spontaneity": 78
    },
    "whyAiChose": [
      "Quintessential Kumaon lake retreat ideal for couples and families",
      "Scenic wooden sailboat rides across the emerald waters of Naini Lake",
      "Breathtaking views of Nanda Devi peak from Snow View Point",
      "Peaceful boating and kayaking alternatives at nearby Bhimtal and Naukuchiatal"
    ],
    "travelDnaFit": "The Lakefront Relaxer",
    "hiddenGems": [
      {
        "name": "Pangot & Kilbury Bird Sanctuary",
        "description": "Over 580 species of Himalayan birds in deep oak and rhododendron forests, 15 km away.",
        "crowdReductionPct": 88,
        "savingsInr": 2000,
        "authenticityScore": 97,
        "experienceScore": 95,
        "popularAlternativeName": "Crowded Naini boat jetty"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 04:00 PM",
      "recommendedHours": "05:30 PM – 07:00 PM",
      "reason": "Twinkling lakeside lights reflecting across the water at dusk",
      "aiConfidence": 94
    },
    "budgetBreakdown": {
      "flights": 3000,
      "accommodation": 4500,
      "food": 2200,
      "transport": 1500,
      "activities": 800
    },
    "moodMatches": [
      "Relaxing",
      "Romantic",
      "Peaceful",
      "Family"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Naini Lake Sailing & Mall Road Promenade",
        "weather": {
          "temp": "17°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "nn-1",
            "time": "11:00 AM",
            "title": "Yacht Sailing on Naini Lake",
            "description": "Vintage sailboat ride around the emerald lake perimeter.",
            "location": "Naini Lake",
            "category": "nature",
            "duration": "1h",
            "costInr": 400,
            "isOutdoor": true
          },
          {
            "id": "nn-2",
            "time": "04:30 PM",
            "title": "Sunset from Tiffin Top",
            "description": "Gentle trek to Dorothy Seat for panoramic 360-degree views.",
            "location": "Tiffin Top",
            "category": "adventure",
            "duration": "2.5h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "mussoorie",
    "name": "Mussoorie & Dhanaulti",
    "region": "Uttarakhand",
    "country": "India",
    "tagline": "The Queen of Hills with dramatic Doon Valley sunsets and deodar forests",
    "description": "Perched on a horseshoe ridge overlooking the lights of Dehradun, Mussoorie charms with colonial bungalows, Gun Hill cable car, Kempty cascades, and peaceful eco-parks in Dhanaulti.",
    "heroImage": "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 30.4598,
    "lng": 78.0644,
    "baseBudgetInr": 13500,
    "estimatedBudget": 13500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Mountains",
      "Colonial",
      "Nature",
      "Waterfalls",
      "Romantic"
    ],
    "bestSeason": "April – June & Sept – Jan",
    "currentTemp": "16°C",
    "weatherCondition": "Cool & Foggy",
    "crowdLevel": "Moderate",
    "crowdScore": 38,
    "experienceScore": 93,
    "aiMatchScore": 91,
    "matchScore": 91,
    "scores": {
      "adventure": 78,
      "culture": 88,
      "food": 88,
      "nature": 95,
      "relaxation": 92,
      "luxury": 80,
      "spontaneity": 76
    },
    "whyAiChose": [
      "Iconic Queen of Hills with sweeping views of the glowing Doon Valley below",
      "Peaceful deodar trails in Dhanaulti Eco Park just 25 km away",
      "Romantic heritage cafes and bookstore walks along Camel’s Back Road",
      "Quick and seamless road access from Delhi NCR and Dehradun"
    ],
    "travelDnaFit": "The Romantic Valley Dreamer",
    "hiddenGems": [
      {
        "name": "George Everest Peak & Hathipaon Estate",
        "description": "The historic estate of Sir George Everest with 360-degree snow peak vistas and gentle ridge walks.",
        "crowdReductionPct": 82,
        "savingsInr": 2200,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Commercial Kempty Falls queue"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "12:00 PM – 04:00 PM",
      "recommendedHours": "05:30 PM – 07:15 PM",
      "reason": "Winter line phenomenon sunset with fiery horizon hues",
      "aiConfidence": 95
    },
    "budgetBreakdown": {
      "flights": 3200,
      "accommodation": 5000,
      "food": 2500,
      "transport": 1800,
      "activities": 1000
    },
    "moodMatches": [
      "Romantic",
      "Relaxing",
      "Nature",
      "Family"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Camel’s Back Road & Lal Tibba Sunset",
        "weather": {
          "temp": "16°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "ms-1",
            "time": "11:00 AM",
            "title": "Camel’s Back Nature Stroll",
            "description": "Scenic pine road overlooking mountain gorges.",
            "location": "Camel’s Back Road",
            "category": "nature",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          },
          {
            "id": "ms-2",
            "time": "04:30 PM",
            "title": "Lal Tibba Telescope View",
            "description": "Highest viewpoint in Landour with telescope views of Kedarnath peaks.",
            "location": "Landour",
            "category": "culture",
            "duration": "2h",
            "costInr": 100,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "jim-corbett",
    "name": "Jim Corbett National Park",
    "region": "Uttarakhand",
    "country": "India",
    "tagline": "Bengal tigers, wild elephant herds and dense sal forest safaris",
    "description": "India’s oldest national park nestled in the Himalayan foothills along the Ramganga River, home to Royal Bengal tigers, Asiatic elephants, leopards, and 600+ species of birds in dense sal jungles.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 29.53,
    "lng": 78.7747,
    "baseBudgetInr": 16000,
    "estimatedBudget": 16000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Wildlife",
      "Tiger Safari",
      "Jungle",
      "Adventure",
      "Nature"
    ],
    "bestSeason": "November – June",
    "currentTemp": "22°C",
    "weatherCondition": "Sunny & Jungle Breeze",
    "crowdLevel": "Moderate",
    "crowdScore": 35,
    "experienceScore": 97,
    "aiMatchScore": 94,
    "matchScore": 94,
    "scores": {
      "adventure": 98,
      "culture": 70,
      "food": 82,
      "nature": 100,
      "relaxation": 88,
      "luxury": 85,
      "spontaneity": 72
    },
    "whyAiChose": [
      "Top-tier Royal Bengal tiger tracking in legendary Dhikala and Bijrani zones",
      "Thrilling open-top 4x4 gypsy safaris through deep sal and riverine forests",
      "Wild Asiatic elephant herds roaming across the Ramganga riverbanks",
      "Luxurious jungle river lodges with bonfire star-gazing"
    ],
    "travelDnaFit": "The Apex Wildlife Tracker",
    "hiddenGems": [
      {
        "name": "Durgadevi Zone & Kosi River Rapids",
        "description": "Hilly terrain zone with clear river streams, Mahseer fish spotting, and minimal safari jeeps.",
        "crowdReductionPct": 84,
        "savingsInr": 2500,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Main Bijrani entry gate rush"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "02:00 PM – 05:30 PM",
      "recommendedHours": "05:45 AM – 09:30 AM",
      "reason": "Dawn tiger territorial walks and alarm calls",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 3000,
      "accommodation": 6500,
      "food": 2500,
      "transport": 2000,
      "activities": 2000
    },
    "moodMatches": [
      "Adventure",
      "Nature",
      "Family"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Dawn 4x4 Tiger Safari & Jungle Lodge Check-in",
        "weather": {
          "temp": "22°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "jc-1",
            "time": "06:00 AM",
            "title": "Open Gypsy Wildlife Safari",
            "description": "Track pugmarks and listen to deer alarm calls in Bijrani.",
            "location": "Bijrani Zone",
            "category": "adventure",
            "duration": "3.5h",
            "costInr": 1800,
            "isOutdoor": true
          },
          {
            "id": "jc-2",
            "time": "04:30 PM",
            "title": "Kosi Riverbank Stroll",
            "description": "Watch wading birds and elephants by the rocky riverbed.",
            "location": "Kosi River",
            "category": "nature",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "haridwar",
    "name": "Haridwar",
    "region": "Uttarakhand",
    "country": "India",
    "tagline": "Gateway to the Gods, roaring Ganga waters and divine evening aarti fires",
    "description": "One of India’s seven holiest cities where the River Ganges emerges from the Himalayas onto the Indo-Gangetic plain, famed for the mesmerizing Maha Aarti at Har Ki Pauri and ancient Ayurvedic ashrams.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 29.9457,
    "lng": 78.1642,
    "baseBudgetInr": 8500,
    "estimatedBudget": 8500,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "Spirituality",
      "Ganga Aarti",
      "Temples",
      "Culture",
      "Vegetarian Food"
    ],
    "bestSeason": "October – April",
    "currentTemp": "24°C",
    "weatherCondition": "Sunny & Pleasant",
    "crowdLevel": "High",
    "crowdScore": 68,
    "experienceScore": 93,
    "aiMatchScore": 89,
    "matchScore": 89,
    "scores": {
      "adventure": 65,
      "culture": 100,
      "food": 90,
      "nature": 88,
      "relaxation": 85,
      "luxury": 50,
      "spontaneity": 78
    },
    "whyAiChose": [
      "World-famous Har Ki Pauri evening Ganga Aarti with thousands of floating leaf lamps",
      "Extremely affordable pilgrimage and cultural retreat under ₹8,500",
      "Cable car ropeways to hilltop Mansa Devi and Chandi Devi shrines",
      "Authentic ancient street foods: hot kachoris, jalebis, and spiced rabri"
    ],
    "travelDnaFit": "The Sacred Soul Seeker",
    "hiddenGems": [
      {
        "name": "Kankhal Heritage Town & Daksh Temple",
        "description": "Peaceful 200-year-old painted havelis and ancient Shiva shrine away from the busy main ghats.",
        "crowdReductionPct": 80,
        "savingsInr": 1200,
        "authenticityScore": 99,
        "experienceScore": 95,
        "popularAlternativeName": "Main market stampede"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "05:30 PM – 07:30 PM",
      "recommendedHours": "05:00 AM – 07:00 AM",
      "reason": "Serene sunrise holy dip before pilgrim rush",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 2000,
      "accommodation": 2500,
      "food": 1800,
      "transport": 1200,
      "activities": 1000
    },
    "moodMatches": [
      "Peaceful",
      "Cultural"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Har Ki Pauri Holy Dip & Evening Maha Aarti",
        "weather": {
          "temp": "24°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "hd-1",
            "time": "10:00 AM",
            "title": "Mansa Devi Cable Car",
            "description": "Ropeway ride to hilltop shrine with aerial views of the Ganges.",
            "location": "Bilha Parvat",
            "category": "culture",
            "duration": "2h",
            "costInr": 250,
            "isOutdoor": true
          },
          {
            "id": "hd-2",
            "time": "05:30 PM",
            "title": "Har Ki Pauri Maha Aarti",
            "description": "Thousands of brass lamps, ringing bells, and Vedic chanting.",
            "location": "Har Ki Pauri",
            "category": "culture",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "agra",
    "name": "Agra",
    "region": "Uttar Pradesh",
    "country": "India",
    "tagline": "The timeless monument of love, grand Mughal forts and marble mastercraft",
    "description": "Home of the breathtaking Taj Mahal, one of the New Seven Wonders of the World, alongside the colossal red sandstone Agra Fort and the ghost city of Fatehpur Sikri.",
    "heroImage": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 27.1767,
    "lng": 78.0081,
    "baseBudgetInr": 11000,
    "estimatedBudget": 11000,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "UNESCO Heritage",
      "Taj Mahal",
      "Mughal Architecture",
      "History",
      "Food"
    ],
    "bestSeason": "October – March",
    "currentTemp": "26°C",
    "weatherCondition": "Sunny & Warm",
    "crowdLevel": "High",
    "crowdScore": 72,
    "experienceScore": 98,
    "aiMatchScore": 94,
    "matchScore": 94,
    "scores": {
      "adventure": 60,
      "culture": 100,
      "food": 92,
      "nature": 70,
      "relaxation": 82,
      "luxury": 88,
      "spontaneity": 70
    },
    "whyAiChose": [
      "Unmissable wonder: the ivory-white marble Taj Mahal at sunrise",
      "Extensive Mughal fortifications and palaces across Agra Fort",
      "Authentic Mughlai culinary heritage and traditional Agra Petha delicacies",
      "Seamless connectivity via the high-speed Yamuna Expressway and Gatimaan Express"
    ],
    "travelDnaFit": "The Timeless Romantic Historian",
    "hiddenGems": [
      {
        "name": "Mehtab Bagh & Chini Ka Rauza",
        "description": "Peaceful riverbank moonlight gardens with zero crowds directly across the Yamuna from the Taj.",
        "crowdReductionPct": 82,
        "savingsInr": 1500,
        "authenticityScore": 98,
        "experienceScore": 97,
        "popularAlternativeName": "Noisy West Gate ticket line"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "10:00 AM – 03:30 PM",
      "recommendedHours": "05:45 AM – 07:30 AM",
      "reason": "Sunrise glow casting pink and golden reflections on white marble dome",
      "aiConfidence": 99
    },
    "budgetBreakdown": {
      "flights": 2500,
      "accommodation": 4000,
      "food": 2200,
      "transport": 1300,
      "activities": 1000
    },
    "moodMatches": [
      "Cultural",
      "Romantic",
      "Family",
      "History"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Sunrise Taj Mahal & Agra Fort Citadel",
        "weather": {
          "temp": "26°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "ag-1",
            "time": "06:00 AM",
            "title": "Taj Mahal Sunrise Walk",
            "description": "Be the first through the gates as dawn mist reveals the marble dome.",
            "location": "Taj Mahal",
            "category": "culture",
            "duration": "2.5h",
            "costInr": 50,
            "isOutdoor": true
          },
          {
            "id": "ag-2",
            "time": "11:00 AM",
            "title": "Agra Fort Mughal Citadel",
            "description": "Explore Jahangiri Mahal, Diwan-i-Khas, and Shah Jahan’s prison pavilion.",
            "location": "Agra Fort",
            "category": "culture",
            "duration": "2h",
            "costInr": 50,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "mathura-vrindavan",
    "name": "Mathura & Vrindavan",
    "region": "Uttar Pradesh",
    "country": "India",
    "tagline": "Sacred birthplace of Lord Krishna, Prem Mandir lights and Yamuna aarti",
    "description": "The sacred twin cities celebrating the life and divine pastimes of Shri Krishna, featuring Shri Krishna Janmabhoomi, Banke Bihari Temple, stunning illuminated Prem Mandir, and holy Yamuna ghats.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 27.4924,
    "lng": 77.6737,
    "baseBudgetInr": 8000,
    "estimatedBudget": 8000,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "Spirituality",
      "Temples",
      "Culture",
      "Heritage",
      "Street Food"
    ],
    "bestSeason": "October – March",
    "currentTemp": "25°C",
    "weatherCondition": "Sunny",
    "crowdLevel": "High",
    "crowdScore": 65,
    "experienceScore": 92,
    "aiMatchScore": 88,
    "matchScore": 88,
    "scores": {
      "adventure": 55,
      "culture": 100,
      "food": 92,
      "nature": 70,
      "relaxation": 82,
      "luxury": 50,
      "spontaneity": 75
    },
    "whyAiChose": [
      "Profound spiritual atmosphere with continuous devotional kirtans and bells",
      "Dazzling architectural night lighting across white Italian marble Prem Mandir",
      "Legendary dairy sweets: Mathura Peda, warm spiced milk, and khoya delicacies",
      "Super budget-friendly weekend getaway under ₹8,000"
    ],
    "travelDnaFit": "The Devotional Heritage Pilgrim",
    "hiddenGems": [
      {
        "name": "Radha Kund & Kusum Sarovar",
        "description": "Magnificent 18th-century sandstone cenotaphs and silent sacred lake with zero tour buses.",
        "crowdReductionPct": 85,
        "savingsInr": 1000,
        "authenticityScore": 99,
        "experienceScore": 96,
        "popularAlternativeName": "Banke Bihari narrow alley crush"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "10:00 AM – 01:00 PM",
      "recommendedHours": "06:00 PM – 08:30 PM",
      "reason": "Evening light show and fountain display at Prem Mandir",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 1800,
      "accommodation": 2500,
      "food": 1800,
      "transport": 1100,
      "activities": 800
    },
    "moodMatches": [
      "Cultural",
      "Peaceful",
      "Food"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Krishna Janmabhoomi & Prem Mandir Spectacle",
        "weather": {
          "temp": "25°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "mv-1",
            "time": "10:00 AM",
            "title": "Shri Krishna Janmabhoomi Complex",
            "description": "Visit the sacred prison cell temple and ancient stone relics.",
            "location": "Mathura",
            "category": "culture",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": false
          },
          {
            "id": "mv-2",
            "time": "06:30 PM",
            "title": "Prem Mandir Illuminations",
            "description": "Marvel at colorful LED illuminated carvings depicting Krishna Leela.",
            "location": "Vrindavan",
            "category": "culture",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "ayodhya",
    "name": "Ayodhya",
    "region": "Uttar Pradesh",
    "country": "India",
    "tagline": "The ancient capital of Kosala, sacred Ram Janmabhoomi and Saryu riverfront",
    "description": "The revered birthplace of Lord Rama on the banks of the sacred Saryu River, featuring the monumental Ram Janmabhoomi Mandir, Hanuman Garhi fortress, and the glowing lamps of Ram Ki Paidi ghats.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 26.7922,
    "lng": 82.1998,
    "baseBudgetInr": 9000,
    "estimatedBudget": 9000,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "Spirituality",
      "Temples",
      "Heritage",
      "Ghats",
      "Culture"
    ],
    "bestSeason": "October – March",
    "currentTemp": "24°C",
    "weatherCondition": "Sunny",
    "crowdLevel": "High",
    "crowdScore": 70,
    "experienceScore": 94,
    "aiMatchScore": 91,
    "matchScore": 91,
    "scores": {
      "adventure": 50,
      "culture": 100,
      "food": 88,
      "nature": 75,
      "relaxation": 82,
      "luxury": 60,
      "spontaneity": 72
    },
    "whyAiChose": [
      "Monumental Nagar-style sandstone Ram Janmabhoomi Mandir complex",
      "Elevated fortress temple of Hanuman Garhi overlooking the holy town",
      "Illuminated laser and sound presentations on Ram Ki Paidi ghats",
      "Peaceful evening boat rides and aarti along the holy Saryu River"
    ],
    "travelDnaFit": "The Epic Heritage Pilgrim",
    "hiddenGems": [
      {
        "name": "Guptar Ghat & Saryu Riverside Walk",
        "description": "Tranquil sandstone pavilions where Lord Rama took Jal Samadhi, peaceful and uncrowded.",
        "crowdReductionPct": 86,
        "savingsInr": 1200,
        "authenticityScore": 99,
        "experienceScore": 96,
        "popularAlternativeName": "Main temple queue crush"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "10:00 AM – 02:00 PM",
      "recommendedHours": "05:30 PM – 07:45 PM",
      "reason": "Grand Maha Aarti on the Saryu riverfront with floating diyas",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 2200,
      "accommodation": 3000,
      "food": 1800,
      "transport": 1200,
      "activities": 800
    },
    "moodMatches": [
      "Cultural",
      "Peaceful"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ram Mandir Darshan & Ram Ki Paidi Twilight",
        "weather": {
          "temp": "24°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "ay-1",
            "time": "09:00 AM",
            "title": "Shri Ram Janmabhoomi Mandir",
            "description": "Witness the grand pink sandstone carving and sanctum sanctorum.",
            "location": "Ram Kot",
            "category": "culture",
            "duration": "2.5h",
            "costInr": 0,
            "isOutdoor": false
          },
          {
            "id": "ay-2",
            "time": "06:00 PM",
            "title": "Saryu River Aarti & Ghat Walk",
            "description": "Watch hundreds of evening oil lamps illuminate the river steps.",
            "location": "Ram Ki Paidi",
            "category": "culture",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "jodhpur",
    "name": "Jodhpur",
    "region": "Rajasthan",
    "country": "India",
    "tagline": "The Blue City: towering Mehrangarh Fort, blue Brahmin houses and royal stepwells",
    "description": "A sea of cobalt blue houses spread beneath the mighty Mehrangarh Fort perched on a 400-foot clifftop, featuring Umaid Bhawan Palace, ancient stepwells, spice bazaars, and Thar zip-lining.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 26.2389,
    "lng": 73.0243,
    "baseBudgetInr": 15000,
    "estimatedBudget": 15000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Forts",
      "Heritage",
      "Culture",
      "Photography",
      "Food"
    ],
    "bestSeason": "October – March",
    "currentTemp": "27°C",
    "weatherCondition": "Sunny & Desert Dry",
    "crowdLevel": "Moderate",
    "crowdScore": 38,
    "experienceScore": 97,
    "aiMatchScore": 95,
    "matchScore": 95,
    "scores": {
      "adventure": 88,
      "culture": 98,
      "food": 95,
      "nature": 76,
      "relaxation": 88,
      "luxury": 90,
      "spontaneity": 82
    },
    "whyAiChose": [
      "Arguably India’s most magnificent cliffside fortress: Mehrangarh",
      "Endless photogenic labyrinth of blue-painted houses in the old town",
      "Thrilling Flying Fox zipline over fortress battlements and desert lakes",
      "Iconic Marwari culinary treats: Pyaaz Kachori, Mirchi Bada, and Makhaniya Lassi"
    ],
    "travelDnaFit": "The Desert Fortress Chronicler",
    "hiddenGems": [
      {
        "name": "Toorji Ka Jhalra & Navchokiya Alleys",
        "description": "Intricate 18th-century stepwell surrounded by artisan cafes and secluded blue alleys.",
        "crowdReductionPct": 76,
        "savingsInr": 2000,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Clock tower traffic knot"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:30 PM",
      "recommendedHours": "05:00 PM – 07:00 PM",
      "reason": "Sunset from fort ramparts with golden light sweeping over blue roofs",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 4000,
      "accommodation": 5000,
      "food": 2500,
      "transport": 2000,
      "activities": 1500
    },
    "moodMatches": [
      "Cultural",
      "Adventure",
      "Food",
      "Photography"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Mehrangarh Citadel & Blue City Exploration",
        "weather": {
          "temp": "27°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "jd-1",
            "time": "09:30 AM",
            "title": "Mehrangarh Fort Ramparts",
            "description": "Tour museum galleries, cannon ramparts, and royal palanquins.",
            "location": "Mehrangarh",
            "category": "culture",
            "duration": "3h",
            "costInr": 200,
            "isOutdoor": true
          },
          {
            "id": "jd-2",
            "time": "04:00 PM",
            "title": "Navchokiya Blue Alleys Walk",
            "description": "Wander through vibrant blue painted houses with local guides.",
            "location": "Old City",
            "category": "culture",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "pushkar",
    "name": "Pushkar",
    "region": "Rajasthan",
    "country": "India",
    "tagline": "Sacred holy lake, rare Brahma shrine, camel desert dunes and hippie cafes",
    "description": "A magical sacred town curving around holy Pushkar Lake with 52 bathing ghats, one of the world’s only temples dedicated to Lord Brahma, colorful desert camel safaris, and rooftop rose water cafes.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 26.4897,
    "lng": 74.5511,
    "baseBudgetInr": 8500,
    "estimatedBudget": 8500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Desert",
      "Holy Lake",
      "Brahma Temple",
      "Bohemian",
      "Cafes"
    ],
    "bestSeason": "October – March",
    "currentTemp": "26°C",
    "weatherCondition": "Sunny",
    "crowdLevel": "Moderate",
    "crowdScore": 34,
    "experienceScore": 93,
    "aiMatchScore": 91,
    "matchScore": 91,
    "scores": {
      "adventure": 80,
      "culture": 98,
      "food": 88,
      "nature": 82,
      "relaxation": 94,
      "luxury": 55,
      "spontaneity": 88
    },
    "whyAiChose": [
      "Unbelievably affordable desert oasis getaway under ₹8,500",
      "Peaceful spiritual bells echoing across 52 sacred white lake ghats",
      "Desert sunset camel safari into golden dunes with gypsy folk music",
      "Vibrant global traveler cafes serving wood-fired pizza and rose lassi"
    ],
    "travelDnaFit": "The Bohemian Desert Nomad",
    "hiddenGems": [
      {
        "name": "Savitri Temple Hilltop Sunrise Trek",
        "description": "Ratnagiri hill steps offering sweeping aerial views of the entire lake and desert at dawn.",
        "crowdReductionPct": 84,
        "savingsInr": 1200,
        "authenticityScore": 98,
        "experienceScore": 97,
        "popularAlternativeName": "Main market tourist touts"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:00 PM",
      "recommendedHours": "05:30 AM – 07:30 AM",
      "reason": "Chanting and temple bells over mirror-like sacred lake",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 2200,
      "accommodation": 2800,
      "food": 1800,
      "transport": 1000,
      "activities": 700
    },
    "moodMatches": [
      "Peaceful",
      "Cultural",
      "Spontaneous"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Brahma Temple & Varaha Ghat Sunset Aarti",
        "weather": {
          "temp": "26°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "pk-1",
            "time": "10:00 AM",
            "title": "Ancient Brahma Temple",
            "description": "Visit the 14th-century red-spire shrine of Lord Brahma.",
            "location": "Brahma Chowk",
            "category": "culture",
            "duration": "1.5h",
            "costInr": 0,
            "isOutdoor": false
          },
          {
            "id": "pk-2",
            "time": "05:30 PM",
            "title": "Sunset Aarti at Varaha Ghat",
            "description": "Sit on marble steps as priests wave flaming brass multi-tiered lamps.",
            "location": "Varaha Ghat",
            "category": "culture",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "ranthambore",
    "name": "Ranthambore National Park",
    "region": "Rajasthan",
    "country": "India",
    "tagline": "Ancient stone fortresses, crocodile lakes and majestic wild Royal Bengal tigers",
    "description": "One of the most famous tiger habitats in the world where Royal Bengal tigers roam among the atmospheric ruins of 10th-century Ranthambore Fort, ancient banyan trees, and lotus-filled lakes.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 26.0173,
    "lng": 76.5026,
    "baseBudgetInr": 18500,
    "estimatedBudget": 18500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Wildlife",
      "Tiger Safari",
      "Forts",
      "Nature",
      "Adventure"
    ],
    "bestSeason": "October – June",
    "currentTemp": "28°C",
    "weatherCondition": "Warm & Dry",
    "crowdLevel": "Moderate",
    "crowdScore": 40,
    "experienceScore": 98,
    "aiMatchScore": 95,
    "matchScore": 95,
    "scores": {
      "adventure": 98,
      "culture": 88,
      "food": 82,
      "nature": 98,
      "relaxation": 80,
      "luxury": 88,
      "spontaneity": 74
    },
    "whyAiChose": [
      "Highest density and best daytime tiger sightings in North India",
      "Dramatic surreal backdrop of ancient UNESCO hill fort towers within jungle",
      "Spot crocodiles, sambar deer, leopards, and sloth bears beside Padam Talao",
      "Superb heritage tiger lodges and eco-glamping resorts"
    ],
    "travelDnaFit": "The Royal Tiger Hunter (Lens)",
    "hiddenGems": [
      {
        "name": "Surwal Lake & Mansarovar Reservoir",
        "description": "Winter bird paradise with migratory flamingos, pelicans, and zero crowds 20 km away.",
        "crowdReductionPct": 88,
        "savingsInr": 2500,
        "authenticityScore": 97,
        "experienceScore": 95,
        "popularAlternativeName": "Sawai Madhopur station scramble"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "02:30 PM – 05:45 PM",
      "recommendedHours": "06:00 AM – 09:30 AM",
      "reason": "Dawn tiger waterhole visits and territorial stalking",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 3500,
      "accommodation": 7000,
      "food": 3000,
      "transport": 2500,
      "activities": 2500
    },
    "moodMatches": [
      "Adventure",
      "Nature",
      "Family"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Zone 3 Tiger Safari & Historic Fort Climb",
        "weather": {
          "temp": "28°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "rt-1",
            "time": "06:15 AM",
            "title": "Open Gypsy Tiger Safari",
            "description": "Explore lakeside ruins and track tiger pugmarks in prime zones.",
            "location": "Zone 3",
            "category": "adventure",
            "duration": "3.5h",
            "costInr": 2200,
            "isOutdoor": true
          },
          {
            "id": "rt-2",
            "time": "03:30 PM",
            "title": "UNESCO Ranthambore Fort Trek",
            "description": "Walk through stone battlements and visit Trinetra Ganesha Temple.",
            "location": "Ranthambore Fort",
            "category": "culture",
            "duration": "2.5h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "mount-abu",
    "name": "Mount Abu",
    "region": "Rajasthan",
    "country": "India",
    "tagline": "Rajasthan’s only hill station: Dilwara marble marvels and tranquil Nakki Lake",
    "description": "An oasis in the Aravalli range with cool mountain air, the world-renowned 11th-century Dilwara Jain temples with translucent marble filigree, Nakki Lake boating, and Toad Rock viewpoints.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 24.5926,
    "lng": 72.7156,
    "baseBudgetInr": 12000,
    "estimatedBudget": 12000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Mountains",
      "Dilwara Temples",
      "Lakes",
      "Nature",
      "Relaxing"
    ],
    "bestSeason": "All Year (March – June & Oct – Feb)",
    "currentTemp": "20°C",
    "weatherCondition": "Cool & Breezy",
    "crowdLevel": "Moderate",
    "crowdScore": 36,
    "experienceScore": 93,
    "aiMatchScore": 90,
    "matchScore": 90,
    "scores": {
      "adventure": 75,
      "culture": 96,
      "food": 84,
      "nature": 92,
      "relaxation": 94,
      "luxury": 72,
      "spontaneity": 75
    },
    "whyAiChose": [
      "Unsurpassed marble craftsmanship at the 11th-century Dilwara Temples",
      "Pleasant escape from Rajasthan desert heat with temperatures around 20°C",
      "Scenic pedal boating and walking promenades around Nakki Lake",
      "Dramatic panoramic sunset over the desert plains from Sunset Point"
    ],
    "travelDnaFit": "The Serene Marble Seeker",
    "hiddenGems": [
      {
        "name": "Trevor’s Tank & Guru Shikhar Peak",
        "description": "Peaceful crocodile breeding park in dense woods and the highest point of the Aravalli range.",
        "crowdReductionPct": 80,
        "savingsInr": 1600,
        "authenticityScore": 97,
        "experienceScore": 94,
        "popularAlternativeName": "Nakki Lake ice cream crowd"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "12:00 PM – 03:00 PM",
      "recommendedHours": "08:30 AM – 11:00 AM",
      "reason": "Intricate marble ceilings illuminated by natural morning daylight",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 3000,
      "accommodation": 4500,
      "food": 2200,
      "transport": 1500,
      "activities": 800
    },
    "moodMatches": [
      "Relaxing",
      "Romantic",
      "Cultural"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Dilwara Marble Marvels & Nakki Lake Boating",
        "weather": {
          "temp": "20°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "ma-1",
            "time": "09:00 AM",
            "title": "Dilwara Jain Temples",
            "description": "Be awed by marble carvings that resemble delicate lace.",
            "location": "Dilwara",
            "category": "culture",
            "duration": "2.5h",
            "costInr": 0,
            "isOutdoor": false
          },
          {
            "id": "ma-2",
            "time": "04:30 PM",
            "title": "Nakki Lake Pedal Boat",
            "description": "Glide across mountain waters beneath Toad Rock.",
            "location": "Nakki Lake",
            "category": "nature",
            "duration": "1.5h",
            "costInr": 250,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "lonavala",
    "name": "Lonavala & Khandala",
    "region": "Maharashtra",
    "country": "India",
    "tagline": "Sahyadri misty cliffs, roaring monsoon waterfalls and ancient rock caves",
    "description": "The beloved hill retreat of Maharashtra nestled in the Western Ghats, celebrated for roaring waterfalls at Tiger Point, ancient Buddhist rock-cut Karla Caves, Rajmachi forts, and fresh chikki fudge.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 18.7557,
    "lng": 73.4091,
    "baseBudgetInr": 8500,
    "estimatedBudget": 8500,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "Western Ghats",
      "Monsoon",
      "Waterfalls",
      "Hiking",
      "Caves"
    ],
    "bestSeason": "June – October & Nov – Feb",
    "currentTemp": "21°C",
    "weatherCondition": "Misty & Breezy",
    "crowdLevel": "Moderate",
    "crowdScore": 46,
    "experienceScore": 92,
    "aiMatchScore": 90,
    "matchScore": 90,
    "scores": {
      "adventure": 86,
      "culture": 82,
      "food": 88,
      "nature": 95,
      "relaxation": 88,
      "luxury": 75,
      "spontaneity": 90
    },
    "whyAiChose": [
      "Fast 2-hour drive from Mumbai and Pune via the scenic expressway",
      "Spectacular monsoon green hills, overflowing dams, and misty valleys",
      "2000-year-old Buddhist rock-cut shrines at Karla and Bhaja Caves",
      "Delicious local snacks: piping hot corn pakodas, vada pav, and Maganlal chikki"
    ],
    "travelDnaFit": "The Sahyadri Monsoon Sprinter",
    "hiddenGems": [
      {
        "name": "Korigad Fort & Pawna Lake Camping",
        "description": "Lakeside glamping with bonfires and easy wall trek overlooking Pawna dam waters.",
        "crowdReductionPct": 78,
        "savingsInr": 1500,
        "authenticityScore": 96,
        "experienceScore": 94,
        "popularAlternativeName": "Bushi Dam staircase crush"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "12:00 PM – 05:00 PM",
      "recommendedHours": "06:30 AM – 09:30 AM",
      "reason": "Fog cascading over Tiger Point before tour traffic arrives",
      "aiConfidence": 94
    },
    "budgetBreakdown": {
      "flights": 1500,
      "accommodation": 3500,
      "food": 1800,
      "transport": 1000,
      "activities": 700
    },
    "moodMatches": [
      "Relaxing",
      "Adventure",
      "Friends"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tiger Point Valley View & Karla Caves",
        "weather": {
          "temp": "21°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "ln-1",
            "time": "10:00 AM",
            "title": "Karla Buddhist Rock Caves",
            "description": "Climb stone steps to the massive 2nd-century BC Chaitya hall.",
            "location": "Karla",
            "category": "culture",
            "duration": "2h",
            "costInr": 50,
            "isOutdoor": true
          },
          {
            "id": "ln-2",
            "time": "04:30 PM",
            "title": "Tiger Point Sunset & Pakodas",
            "description": "Watch the valley drop steeply into clouds with hot masala tea.",
            "location": "Khandala Ridge",
            "category": "nature",
            "duration": "2h",
            "costInr": 150,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "alibaug",
    "name": "Alibaug & Kashid",
    "region": "Maharashtra",
    "country": "India",
    "tagline": "Coastal sea forts, clean sandy beaches and Konkani seafood retreats",
    "description": "A breezy coastal paradise just a 45-minute speedboat ride from Mumbai Gateway of India, famous for historic Kolaba Sea Fort in the waves, white sand beaches at Kashid, water sports, and fresh surmai fish thalis.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 18.6414,
    "lng": 72.8722,
    "baseBudgetInr": 10500,
    "estimatedBudget": 10500,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "Beaches",
      "Watersports",
      "Sea Forts",
      "Seafood",
      "Weekend"
    ],
    "bestSeason": "October – May",
    "currentTemp": "28°C",
    "weatherCondition": "Warm & Ocean Breeze",
    "crowdLevel": "Moderate",
    "crowdScore": 40,
    "experienceScore": 92,
    "aiMatchScore": 90,
    "matchScore": 90,
    "scores": {
      "adventure": 84,
      "culture": 82,
      "food": 95,
      "nature": 92,
      "relaxation": 92,
      "luxury": 82,
      "spontaneity": 88
    },
    "whyAiChose": [
      "Effortless 45-minute catamaran ride from Mumbai Gateway of India",
      "Walk or take horse carts across low tide to Kolaba Sea Fort inside the ocean",
      "White sandy beach at Kashid with parasailing, jet-skis, and banana boats",
      "Authentic Malvani and Konkani seafood thalis cooked with fresh coconut milk"
    ],
    "travelDnaFit": "The Coastal Weekend Cruiser",
    "hiddenGems": [
      {
        "name": "Korlai Fort & LightHouse Trail",
        "description": "Historic Portuguese coastal fort on a rocky promontory with 360-degree Arabian Sea views and zero crowds.",
        "crowdReductionPct": 86,
        "savingsInr": 1800,
        "authenticityScore": 98,
        "experienceScore": 95,
        "popularAlternativeName": "Alibaug main beach parking"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "12:00 PM – 04:00 PM",
      "recommendedHours": "04:30 PM – 06:45 PM",
      "reason": "Low tide ocean walk to Kolaba Fort during golden sunset",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 1800,
      "accommodation": 4500,
      "food": 2500,
      "transport": 1000,
      "activities": 700
    },
    "moodMatches": [
      "Relaxing",
      "Friends",
      "Food"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kolaba Sea Fort & Sunset Beach Walk",
        "weather": {
          "temp": "28°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "ab-1",
            "time": "11:00 AM",
            "title": "Kolaba Fort Walk in Low Tide",
            "description": "Walk across the shallow sea to Shivaji Maharaj’s island stronghold.",
            "location": "Alibaug Beach",
            "category": "culture",
            "duration": "2h",
            "costInr": 50,
            "isOutdoor": true
          },
          {
            "id": "ab-2",
            "time": "01:30 PM",
            "title": "Authentic Surmai Thali Feast",
            "description": "Fresh pan-fried Kingfish and solkadhi at Sanman restaurant.",
            "location": "Alibaug Town",
            "category": "food",
            "duration": "1h",
            "costInr": 450,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "panchgani",
    "name": "Panchgani",
    "region": "Maharashtra",
    "country": "India",
    "tagline": "Asia’s second largest table land, strawberry valleys and colonial boarding charm",
    "description": "Nestled between five Sahyadri hills overlooking the Krishna River valley, Panchgani is renowned for its vast volcanic Table Land plateau, sweet strawberry farms, Raj-era architecture, and cool unpolluted air.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 17.9237,
    "lng": 73.8018,
    "baseBudgetInr": 11000,
    "estimatedBudget": 11000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Western Ghats",
      "Table Land",
      "Strawberries",
      "Peaceful",
      "Nature"
    ],
    "bestSeason": "September – May",
    "currentTemp": "20°C",
    "weatherCondition": "Cool & Sunny",
    "crowdLevel": "Low",
    "crowdScore": 28,
    "experienceScore": 94,
    "aiMatchScore": 92,
    "matchScore": 92,
    "scores": {
      "adventure": 80,
      "culture": 82,
      "food": 92,
      "nature": 96,
      "relaxation": 96,
      "luxury": 76,
      "spontaneity": 78
    },
    "whyAiChose": [
      "Huge 95-acre flat volcanic rock Table Land with endless mountain horizons",
      "Fresh strawberry plucking, strawberry cream bowls, and artisanal jams",
      "Much quieter and more relaxing than neighboring touristy Mahabaleshwar",
      "Panoramic Dhom Dam lake vistas and paragliding launch spots"
    ],
    "travelDnaFit": "The Plateau Breeze Dreamer",
    "hiddenGems": [
      {
        "name": "Sydney Point & Rajpuri Caves",
        "description": "Ancient rock caves associated with the Pandavas and a secluded cliff point over Dhom Dam.",
        "crowdReductionPct": 84,
        "savingsInr": 1500,
        "authenticityScore": 97,
        "experienceScore": 95,
        "popularAlternativeName": "Table Land horse ride touts"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 04:00 PM",
      "recommendedHours": "06:00 AM – 08:30 AM",
      "reason": "Morning valley mist rising across Krishna river gorges",
      "aiConfidence": 95
    },
    "budgetBreakdown": {
      "flights": 2200,
      "accommodation": 4500,
      "food": 2200,
      "transport": 1300,
      "activities": 800
    },
    "moodMatches": [
      "Peaceful",
      "Relaxing",
      "Family",
      "Nature"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Table Land Stroll & Fresh Strawberry Cream",
        "weather": {
          "temp": "20°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "pg-1",
            "time": "10:00 AM",
            "title": "Table Land Geological Walk",
            "description": "Walk along the vast volcanic laterite rock plateau.",
            "location": "Table Land",
            "category": "nature",
            "duration": "2h",
            "costInr": 50,
            "isOutdoor": true
          },
          {
            "id": "pg-2",
            "time": "04:00 PM",
            "title": "Mapro Garden & Strawberry Bowls",
            "description": "Indulge in fresh cream topped with ripe strawberries.",
            "location": "Mapro",
            "category": "food",
            "duration": "1.5h",
            "costInr": 300,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "ajanta-ellora",
    "name": "Ajanta & Ellora Caves",
    "region": "Maharashtra",
    "country": "India",
    "tagline": "Monumental rock-cut monolithic Kailash Temple and ancient Buddhist frescoes",
    "description": "A world architectural wonder carved out of solid basalt cliffs from the 2nd century BC to the 10th century AD, featuring the jaw-dropping monolithic Kailash Temple (carved from top down) and masterwork Buddhist murals.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 20.0268,
    "lng": 75.1792,
    "baseBudgetInr": 11500,
    "estimatedBudget": 11500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "UNESCO Heritage",
      "Rock-cut Architecture",
      "Ancient Art",
      "History",
      "Culture"
    ],
    "bestSeason": "October – March",
    "currentTemp": "26°C",
    "weatherCondition": "Clear & Sunny",
    "crowdLevel": "Moderate",
    "crowdScore": 35,
    "experienceScore": 99,
    "aiMatchScore": 96,
    "matchScore": 96,
    "scores": {
      "adventure": 78,
      "culture": 100,
      "food": 82,
      "nature": 85,
      "relaxation": 86,
      "luxury": 65,
      "spontaneity": 75
    },
    "whyAiChose": [
      "Kailash Temple (Cave 16) is the single largest monolithic rock sculpture in human history",
      "World-famous Ajanta frescoes preserving 2000-year-old Buddhist master paintings",
      "Harmonious coexistence of Hindu, Buddhist, and Jain cave sanctuaries",
      "Rich historic gateway near Aurangabad with Bibi Ka Maqbara"
    ],
    "travelDnaFit": "The Master Antiquities Explorer",
    "hiddenGems": [
      {
        "name": "Daulatabad Fort & Chand Minar",
        "description": "Impregnable hilltop fortress with pitch-dark maze corridors and panoramic plateau views.",
        "crowdReductionPct": 80,
        "savingsInr": 1200,
        "authenticityScore": 99,
        "experienceScore": 97,
        "popularAlternativeName": "Main Ajanta bus turnaround"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:00 PM",
      "recommendedHours": "09:00 AM – 11:30 AM",
      "reason": "Natural morning sunlight illuminating Cave 16 Kailash carvings",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 3000,
      "accommodation": 4200,
      "food": 2200,
      "transport": 1500,
      "activities": 600
    },
    "moodMatches": [
      "Cultural",
      "Curious",
      "History"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Monolithic Kailash Temple & Ellora Caves",
        "weather": {
          "temp": "26°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "ae-1",
            "time": "09:30 AM",
            "title": "Cave 16 Kailash Exploration",
            "description": "Be astonished by 200,000 tons of rock excavated by hand.",
            "location": "Ellora Cave 16",
            "category": "culture",
            "duration": "3h",
            "costInr": 40,
            "isOutdoor": true
          },
          {
            "id": "ae-2",
            "time": "03:00 PM",
            "title": "Jain Caves Indra Sabha",
            "description": "Marvel at delicate rock pillars and lotus carvings in Cave 32.",
            "location": "Ellora North",
            "category": "culture",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "gir-national-park",
    "name": "Gir National Park",
    "region": "Gujarat",
    "country": "India",
    "tagline": "The only sanctuary on Earth where you can see wild Asiatic Lions in freedom",
    "description": "The sole remaining natural refuge for the majestic Asiatic Lion (Panthera leo persica), featuring rugged teak forests, rocky ravines, crocodile-filled Kamleshwar reservoir, and rich Maldhari pastoral culture.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 21.1241,
    "lng": 70.8242,
    "baseBudgetInr": 17000,
    "estimatedBudget": 17000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Asiatic Lions",
      "Wildlife",
      "Safari",
      "Nature",
      "Adventure"
    ],
    "bestSeason": "December – March",
    "currentTemp": "28°C",
    "weatherCondition": "Warm & Dry",
    "crowdLevel": "Moderate",
    "crowdScore": 36,
    "experienceScore": 98,
    "aiMatchScore": 95,
    "matchScore": 95,
    "scores": {
      "adventure": 98,
      "culture": 78,
      "food": 85,
      "nature": 100,
      "relaxation": 82,
      "luxury": 80,
      "spontaneity": 72
    },
    "whyAiChose": [
      "The ONLY place in the wild outside Africa where lions roam free",
      "Extremely high safari success rate with pride sightings around watering holes",
      "Spotting leopards, marsh crocodiles, golden jackals, and Chital deer herds",
      "Traditional vegetarian Kathiyawadi cuisine with hot bajra rotla and garlic chutney"
    ],
    "travelDnaFit": "The Wildlife Safari Specialist",
    "hiddenGems": [
      {
        "name": "Devalia Safari Park & Somnath Coastal Drive",
        "description": "Quick guaranteed sightings and a scenic sunset drive to the historic Somnath sea temple.",
        "crowdReductionPct": 75,
        "savingsInr": 2000,
        "authenticityScore": 97,
        "experienceScore": 95,
        "popularAlternativeName": "Sasan Gir permit desk rush"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "03:00 PM – 06:00 PM",
      "recommendedHours": "06:00 AM – 09:00 AM",
      "reason": "Dawn lion prides resting after night hunts in the teak groves",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 4000,
      "accommodation": 6000,
      "food": 2500,
      "transport": 2500,
      "activities": 2000
    },
    "moodMatches": [
      "Adventure",
      "Nature",
      "Family"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Dawn Asiatic Lion Safari in Teak Woods",
        "weather": {
          "temp": "28°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "gr-1",
            "time": "06:00 AM",
            "title": "Open 4x4 Lion Tracking Safari",
            "description": "Traverse forest routes to track Asiatic lions in their native territory.",
            "location": "Gir Core",
            "category": "adventure",
            "duration": "3.5h",
            "costInr": 2000,
            "isOutdoor": true
          },
          {
            "id": "gr-2",
            "time": "01:00 PM",
            "title": "Kathiyawadi Village Lunch",
            "description": "Bajra rotla, sev tameta, and fresh buttermilk at local dhabba.",
            "location": "Sasan Gir",
            "category": "food",
            "duration": "1h",
            "costInr": 250,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "khajuraho",
    "name": "Khajuraho",
    "region": "Madhya Pradesh",
    "country": "India",
    "tagline": "UNESCO temple masterwork, exquisite stone eroticism and Chandela artistry",
    "description": "A world-famous temple town featuring stunning 10th-century sand-stone temples adorned with the finest medieval sculpture in the world, celebrating human love, celestial nymphs, and spiritual transcendence.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 24.8318,
    "lng": 79.9199,
    "baseBudgetInr": 12500,
    "estimatedBudget": 12500,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "UNESCO Heritage",
      "Temples",
      "Sculptures",
      "History",
      "Culture"
    ],
    "bestSeason": "October – March",
    "currentTemp": "25°C",
    "weatherCondition": "Sunny & Pleasant",
    "crowdLevel": "Low",
    "crowdScore": 28,
    "experienceScore": 97,
    "aiMatchScore": 94,
    "matchScore": 94,
    "scores": {
      "adventure": 65,
      "culture": 100,
      "food": 82,
      "nature": 82,
      "relaxation": 90,
      "luxury": 75,
      "spontaneity": 78
    },
    "whyAiChose": [
      "UNESCO World Heritage monuments celebrated globally for stone sculpturing genius",
      "The towering Kandariya Mahadeva Temple with 872 intricately carved statues",
      "Extremely peaceful, walkable green temple gardens with zero chaotic traffic",
      "Spectacular evening sound and light show narrated by Amitabh Bachchan"
    ],
    "travelDnaFit": "The Classical Stone Connoisseur",
    "hiddenGems": [
      {
        "name": "Raneh Falls & Ken River Canyon",
        "description": "Stunning multi-colored crystalline granite canyon and cascades just 20 km from the temples.",
        "crowdReductionPct": 88,
        "savingsInr": 1500,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Main western temple parking"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:00 PM",
      "recommendedHours": "06:30 AM – 09:30 AM",
      "reason": "Warm morning light illuminating intricate sandstone Apsara sculptures",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 3500,
      "accommodation": 4500,
      "food": 2200,
      "transport": 1500,
      "activities": 800
    },
    "moodMatches": [
      "Cultural",
      "Curious",
      "History"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Western Group Temples & Light and Sound Show",
        "weather": {
          "temp": "25°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "kj-1",
            "time": "09:00 AM",
            "title": "Western Group of Temples",
            "description": "Explore Kandariya Mahadeva, Lakshmana, and Vishvanatha temples.",
            "location": "Western Complex",
            "category": "culture",
            "duration": "3h",
            "costInr": 40,
            "isOutdoor": true
          },
          {
            "id": "kj-2",
            "time": "06:30 PM",
            "title": "Evening Light and Sound Show",
            "description": "Relive the Chandela dynasty history under starry skies.",
            "location": "Temple Gardens",
            "category": "culture",
            "duration": "1h",
            "costInr": 250,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "kanha-national-park",
    "name": "Kanha Tiger Reserve",
    "region": "Madhya Pradesh",
    "country": "India",
    "tagline": "The real-life inspiration for Rudyard Kipling’s Jungle Book and pristine sal meadows",
    "description": "One of Asia’s greatest wildlife parks with sweeping open grasslands, ancient sal forests, thriving Royal Bengal tiger populations, and the last surviving habitat of the rare Barasingha swamp deer.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 22.3345,
    "lng": 80.6115,
    "baseBudgetInr": 19500,
    "estimatedBudget": 19500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Wildlife",
      "Tiger Safari",
      "Jungle Book",
      "Sal Forest",
      "Nature"
    ],
    "bestSeason": "October – May",
    "currentTemp": "24°C",
    "weatherCondition": "Sunny & Crisp",
    "crowdLevel": "Low",
    "crowdScore": 28,
    "experienceScore": 99,
    "aiMatchScore": 96,
    "matchScore": 96,
    "scores": {
      "adventure": 100,
      "culture": 72,
      "food": 82,
      "nature": 100,
      "relaxation": 88,
      "luxury": 85,
      "spontaneity": 72
    },
    "whyAiChose": [
      "The original wild landscapes that inspired Kipling’s Jungle Book characters",
      "Legendary tiger tracking through vast, mist-covered meadows at Bamni Dadar",
      "Conservation miracle home of the hard-ground Barasingha swamp deer",
      "Ultra-peaceful remote jungle luxury lodges with naturalists"
    ],
    "travelDnaFit": "The Wilderness Purist",
    "hiddenGems": [
      {
        "name": "Bamni Dadar Sunset Point",
        "description": "High plateau viewpoint watching sambar deer grazing as the sun dips behind the Maikal hills.",
        "crowdReductionPct": 88,
        "savingsInr": 2500,
        "authenticityScore": 99,
        "experienceScore": 97,
        "popularAlternativeName": "Khatia gate souvenir shop crowd"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "02:30 PM – 05:30 PM",
      "recommendedHours": "06:00 AM – 09:30 AM",
      "reason": "Dew on meadows with tiger calls ringing across sal forests",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 4000,
      "accommodation": 8000,
      "food": 3000,
      "transport": 2500,
      "activities": 2000
    },
    "moodMatches": [
      "Adventure",
      "Nature",
      "Peaceful"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kanha Meadow Tiger Safari & Naturalist Walk",
        "weather": {
          "temp": "24°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "kn-1",
            "time": "06:00 AM",
            "title": "Deep Jungle Tiger Safari",
            "description": "Follow tiger tracks through Kanha and Mukki zones.",
            "location": "Mukki Zone",
            "category": "adventure",
            "duration": "4h",
            "costInr": 2200,
            "isOutdoor": true
          },
          {
            "id": "kn-2",
            "time": "04:00 PM",
            "title": "Tribal Baiga Village Walk",
            "description": "Learn about indigenous herbal knowledge from local Baiga elders.",
            "location": "Buffer Zone",
            "category": "culture",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "pachmarhi",
    "name": "Pachmarhi",
    "region": "Madhya Pradesh",
    "country": "India",
    "tagline": "Queen of Satpura: cascading waterfalls, cave temples and dense teak hills",
    "description": "Madhya Pradesh’s sole hill station situated in a bowl of the Satpura Range at 1,067m, surrounded by natural waterfalls like Bee Falls, ancient rock shelters, sacred Shiva caves at Jata Shankar, and pristine biosphere forest.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 22.4674,
    "lng": 78.4346,
    "baseBudgetInr": 11500,
    "estimatedBudget": 11500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Satpura Hills",
      "Waterfalls",
      "Cave Temples",
      "Nature",
      "Peaceful"
    ],
    "bestSeason": "October – June",
    "currentTemp": "22°C",
    "weatherCondition": "Cool & Pleasant",
    "crowdLevel": "Low",
    "crowdScore": 26,
    "experienceScore": 94,
    "aiMatchScore": 92,
    "matchScore": 92,
    "scores": {
      "adventure": 85,
      "culture": 88,
      "food": 80,
      "nature": 96,
      "relaxation": 95,
      "luxury": 60,
      "spontaneity": 82
    },
    "whyAiChose": [
      "Secluded, uncrowded UNESCO Biosphere Reserve hill retreat",
      "Plunge pools at Bee Falls and Duchess Falls deep in the forest",
      "Mystic stalactite cave shrines at Jata Shankar and Bada Mahadev",
      "Panoramic 360-degree sunset over Satpura hills from Dhoopgarh peak"
    ],
    "travelDnaFit": "The Satpura Sanctuary Wanderer",
    "hiddenGems": [
      {
        "name": "Reechgarh Natural Amphitheatre",
        "description": "A natural rock canyon gorge where cool mountain breezes whistle between boulders.",
        "crowdReductionPct": 86,
        "savingsInr": 1500,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Bee Falls staircase crowd"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "12:00 PM – 03:30 PM",
      "recommendedHours": "05:00 PM – 06:45 PM",
      "reason": "Highest sunset in MP from Dhoopgarh peak",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 2500,
      "accommodation": 4500,
      "food": 2200,
      "transport": 1500,
      "activities": 800
    },
    "moodMatches": [
      "Peaceful",
      "Nature",
      "Relaxing"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Bee Falls Cascades & Dhoopgarh Sunset",
        "weather": {
          "temp": "22°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "pm-1",
            "time": "10:00 AM",
            "title": "Bee Falls Trek & Dip",
            "description": "Trek down into the valley for clear natural pool swimming.",
            "location": "Bee Falls",
            "category": "nature",
            "duration": "2.5h",
            "costInr": 50,
            "isOutdoor": true
          },
          {
            "id": "pm-2",
            "time": "04:30 PM",
            "title": "Dhoopgarh Highest Sunset",
            "description": "Stand at 1,352m as sunset casts golden rays across the Satpura ridges.",
            "location": "Dhoopgarh",
            "category": "nature",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "wayanad",
    "name": "Wayanad",
    "region": "Kerala",
    "country": "India",
    "tagline": "Heart-shaped mountain lakes, prehistoric cave art and treehouse plantations",
    "description": "A mist-shrouded green paradise high in the Western Ghats of Kerala, renowned for Chembra Peak’s heart-shaped lake, Neolithic carvings in Edakkal Caves, wild elephant corridors in Muthanga, and cardamom estates.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 11.6854,
    "lng": 76.132,
    "baseBudgetInr": 13500,
    "estimatedBudget": 13500,
    "recommendedDays": 4,
    "duration": 4,
    "tags": [
      "Western Ghats",
      "Tea Plantations",
      "Waterfalls",
      "Caves",
      "Treehouses"
    ],
    "bestSeason": "September – May",
    "currentTemp": "22°C",
    "weatherCondition": "Lush & Misty",
    "crowdLevel": "Moderate",
    "crowdScore": 32,
    "experienceScore": 96,
    "aiMatchScore": 94,
    "matchScore": 94,
    "scores": {
      "adventure": 92,
      "culture": 88,
      "food": 94,
      "nature": 100,
      "relaxation": 94,
      "luxury": 82,
      "spontaneity": 80
    },
    "whyAiChose": [
      "Chembra Peak trek with the fabled natural heart-shaped lake that never dries up",
      "Prehistoric petroglyph rock art dating to 6,000 BC in Edakkal Caves",
      "Dreamy bamboo treehouse and cardamom plantation boutique stays",
      "Bamboo rafting along the quiet forest streams of Kuruva Island"
    ],
    "travelDnaFit": "The Western Ghats Botanist",
    "hiddenGems": [
      {
        "name": "Thirunelly Temple & Papanasini Stream",
        "description": "Ancient 1000-year-old mountain granite temple hidden deep in wild elephant forests.",
        "crowdReductionPct": 85,
        "savingsInr": 2000,
        "authenticityScore": 99,
        "experienceScore": 97,
        "popularAlternativeName": "Banasura dam speed boat line"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:00 PM",
      "recommendedHours": "07:00 AM – 09:30 AM",
      "reason": "Morning fog swirling across tea hills and spice valleys",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 3500,
      "accommodation": 5000,
      "food": 2500,
      "transport": 1500,
      "activities": 1000
    },
    "moodMatches": [
      "Peaceful",
      "Nature",
      "Romantic",
      "Adventure"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Edakkal Neolithic Caves & Tea Valley Sunset",
        "weather": {
          "temp": "22°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "wy-1",
            "time": "09:30 AM",
            "title": "Edakkal Cave Art Trek",
            "description": "Hike up Ambukuthi Hill to inspect ancient Stone Age rock carvings.",
            "location": "Edakkal",
            "category": "culture",
            "duration": "2.5h",
            "costInr": 50,
            "isOutdoor": true
          },
          {
            "id": "wy-2",
            "time": "03:30 PM",
            "title": "Soochipara Waterfall Dip",
            "description": "Swim in natural rock pools surrounded by dense evergreen canopy.",
            "location": "Vellarimala",
            "category": "nature",
            "duration": "2h",
            "costInr": 80,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "varkala",
    "name": "Varkala Cliff & Beach",
    "region": "Kerala",
    "country": "India",
    "tagline": "Dramatic red laterite ocean cliffs, surf waves and coastal candlelit shacks",
    "description": "A breathtaking seaside destination in Kerala where dramatic red laterite cliffs overlook the Arabian Sea, featuring natural mineral water springs, yoga shacks, surf breaks, and fresh grilled catch under fairy lights.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 8.7379,
    "lng": 76.7163,
    "baseBudgetInr": 12000,
    "estimatedBudget": 12000,
    "recommendedDays": 4,
    "duration": 4,
    "tags": [
      "Beaches",
      "Cliffs",
      "Surfing",
      "Sunset Cafes",
      "Ayurveda"
    ],
    "bestSeason": "October – April",
    "currentTemp": "29°C",
    "weatherCondition": "Tropical & Sunset Glow",
    "crowdLevel": "Moderate",
    "crowdScore": 34,
    "experienceScore": 97,
    "aiMatchScore": 95,
    "matchScore": 95,
    "scores": {
      "adventure": 88,
      "culture": 82,
      "food": 95,
      "nature": 98,
      "relaxation": 98,
      "luxury": 78,
      "spontaneity": 86
    },
    "whyAiChose": [
      "Unmatched panoramic dining right on the edge of the 80-foot red cliffs",
      "Clean swimming and surfing waters at Papanasam and Black Sand Beach",
      "Laid-back Bohemian vibe with Ayurvedic massages and daily cliff yoga",
      "Spectacular uninterrupted golden ocean sunsets every single evening"
    ],
    "travelDnaFit": "The Cliffside Ocean Bohemian",
    "hiddenGems": [
      {
        "name": "Edava Beach & Blue Lagoon Backwater",
        "description": "A quiet sandspit separating the sea from the backwaters, 4 km north of the cliff with zero crowds.",
        "crowdReductionPct": 86,
        "savingsInr": 2000,
        "authenticityScore": 98,
        "experienceScore": 97,
        "popularAlternativeName": "North cliff cafe strip line"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:00 PM",
      "recommendedHours": "05:00 PM – 07:00 PM",
      "reason": "Sunset watching from clifftop restaurants as shacks light candle lamps",
      "aiConfidence": 99
    },
    "budgetBreakdown": {
      "flights": 3500,
      "accommodation": 4500,
      "food": 2500,
      "transport": 1000,
      "activities": 500
    },
    "moodMatches": [
      "Romantic",
      "Relaxing",
      "Adventure",
      "Food"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Papanasam Beach Waves & North Cliff Dinner",
        "weather": {
          "temp": "29°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "vk-1",
            "time": "09:00 AM",
            "title": "Surf Lesson & Holy Dip",
            "description": "Catch gentle waves on Papanasam beach.",
            "location": "Papanasam",
            "category": "adventure",
            "duration": "2h",
            "costInr": 800,
            "isOutdoor": true
          },
          {
            "id": "vk-2",
            "time": "05:30 PM",
            "title": "Cliff Edge Sunset Dining",
            "description": "Fresh lemon butter garlic prawns as the sun sinks into the sea.",
            "location": "North Cliff",
            "category": "food",
            "duration": "2h",
            "costInr": 600,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "kochi",
    "name": "Kochi / Fort Cochin",
    "region": "Kerala",
    "country": "India",
    "tagline": "Colonial spice warehouses, Chinese fishing nets and art heritage cafes",
    "description": "The historic Queen of the Arabian Sea where Portuguese, Dutch, British, and Jewish cultures mingle, featuring iconic cantilevered Chinese fishing nets, Jew Town antique shops, spice aromas, and Kathakali performances.",
    "heroImage": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 9.9674,
    "lng": 76.2454,
    "baseBudgetInr": 14000,
    "estimatedBudget": 14000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Colonial Heritage",
      "Chinese Fishing Nets",
      "Spice Markets",
      "Cafes",
      "Art Biennale"
    ],
    "bestSeason": "October – April",
    "currentTemp": "29°C",
    "weatherCondition": "Warm & Tropical",
    "crowdLevel": "Moderate",
    "crowdScore": 40,
    "experienceScore": 96,
    "aiMatchScore": 93,
    "matchScore": 93,
    "scores": {
      "adventure": 70,
      "culture": 100,
      "food": 96,
      "nature": 85,
      "relaxation": 92,
      "luxury": 88,
      "spontaneity": 80
    },
    "whyAiChose": [
      "Incredible 600-year melting pot of global colonial maritime history",
      "Silhouette of ancient Chinese fishing nets operated against harbour sunsets",
      "Aromas of cardamom, pepper, and cinnamon wafting through Mattancherry",
      "Cosy heritage courtyard cafes serving artisanal coffees and Appam with stew"
    ],
    "travelDnaFit": "The Global Spice Route Historian",
    "hiddenGems": [
      {
        "name": "Kumbalangi Integrated Tourism Village",
        "description": "Model eco-fishing village with crab farming, country boat rides, and zero commercial noise.",
        "crowdReductionPct": 82,
        "savingsInr": 2000,
        "authenticityScore": 99,
        "experienceScore": 96,
        "popularAlternativeName": "Fort Kochi jetty crowd"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:30 PM",
      "recommendedHours": "05:00 PM – 06:45 PM",
      "reason": "Fishermen lowering Chinese nets against the fiery harbour sunset",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 3500,
      "accommodation": 5000,
      "food": 3000,
      "transport": 1500,
      "activities": 1000
    },
    "moodMatches": [
      "Cultural",
      "Food",
      "Curious"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Chinese Fishing Nets, Jew Town & Kathakali Night",
        "weather": {
          "temp": "29°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "kc-1",
            "time": "10:00 AM",
            "title": "Paradesi Synagogue & Jew Town",
            "description": "Browse antique clocks, brass lamps, and 16th-century floor tiles.",
            "location": "Mattancherry",
            "category": "culture",
            "duration": "2h",
            "costInr": 20,
            "isOutdoor": false
          },
          {
            "id": "kc-2",
            "time": "05:30 PM",
            "title": "Sunset at Chinese Fishing Nets",
            "description": "Watch the balanced counterweight cantilever nets rise from the sea.",
            "location": "Fort Kochi Beach",
            "category": "culture",
            "duration": "1.5h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "kovalam",
    "name": "Kovalam",
    "region": "Kerala",
    "country": "India",
    "tagline": "Iconic red-and-white striped lighthouse, crescent beach bays and ayurvedic calm",
    "description": "Kerala’s original world-famous beach haven featuring three crescent-shaped beaches, the landmark 35-meter Vizhinjam Lighthouse, gentle surfing waves, and authentic coastal Ayurveda resorts.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 8.4004,
    "lng": 76.9787,
    "baseBudgetInr": 14500,
    "estimatedBudget": 14500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Beaches",
      "Lighthouse",
      "Ayurveda",
      "Seafood",
      "Relaxing"
    ],
    "bestSeason": "September – March",
    "currentTemp": "30°C",
    "weatherCondition": "Sunny & Coastal Breeze",
    "crowdLevel": "Moderate",
    "crowdScore": 38,
    "experienceScore": 94,
    "aiMatchScore": 92,
    "matchScore": 92,
    "scores": {
      "adventure": 80,
      "culture": 82,
      "food": 92,
      "nature": 95,
      "relaxation": 98,
      "luxury": 85,
      "spontaneity": 78
    },
    "whyAiChose": [
      "Climb the historic red-and-white Vizhinjam Lighthouse for aerial views of coconut palm shores",
      "Gentle sandy crescent bay perfect for relaxed swimming and bodyboarding",
      "Authentic certified Ayurvedic rejuvenation and Panchakarma therapies",
      "Fresh catch of lobster, tiger prawns, and kingfish on beachside candlelit tables"
    ],
    "travelDnaFit": "The Lighthouse Ayurvedic Rejuvenator",
    "hiddenGems": [
      {
        "name": "Samudra Beach & Chowara Fishing Shore",
        "description": "Peaceful northern cove separated from the crowds where local fishermen pull shore seines.",
        "crowdReductionPct": 82,
        "savingsInr": 2000,
        "authenticityScore": 98,
        "experienceScore": 95,
        "popularAlternativeName": "Lighthouse beach hawker strip"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:30 AM – 03:30 PM",
      "recommendedHours": "04:45 PM – 06:30 PM",
      "reason": "Top of Vizhinjam Lighthouse as sun sinks beneath the horizon",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 3800,
      "accommodation": 5500,
      "food": 2700,
      "transport": 1500,
      "activities": 1000
    },
    "moodMatches": [
      "Relaxing",
      "Romantic",
      "Wellness"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Lighthouse Beach Climb & Sunset Seafood Grill",
        "weather": {
          "temp": "30°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "kv-1",
            "time": "04:00 PM",
            "title": "Climb Vizhinjam Lighthouse",
            "description": "Take the spiral steps for panoramic views of Kovalam’s three crescent bays.",
            "location": "Lighthouse Hill",
            "category": "nature",
            "duration": "1.5h",
            "costInr": 50,
            "isOutdoor": true
          },
          {
            "id": "kv-2",
            "time": "06:30 PM",
            "title": "Beachside Lobster Dinner",
            "description": "Freshly grilled catch prepared with Kerala coastal spices.",
            "location": "Lighthouse Beach",
            "category": "food",
            "duration": "1.5h",
            "costInr": 700,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "chikmagalur",
    "name": "Chikmagalur",
    "region": "Karnataka",
    "country": "India",
    "tagline": "The Coffee Capital of India, Mullayanagiri heights and misty plantation retreats",
    "description": "The historic birthplace of Indian coffee where Sufi saint Baba Budan first planted beans, featuring Karnataka’s highest peak Mullayanagiri, cascading Hebbe waterfalls, and colonial coffee estate homestays.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 13.3161,
    "lng": 75.772,
    "baseBudgetInr": 12500,
    "estimatedBudget": 12500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Coffee Plantations",
      "Mullayanagiri Peak",
      "Trekking",
      "Western Ghats",
      "Nature"
    ],
    "bestSeason": "September – April",
    "currentTemp": "20°C",
    "weatherCondition": "Crisp & Mountain Air",
    "crowdLevel": "Low",
    "crowdScore": 26,
    "experienceScore": 96,
    "aiMatchScore": 94,
    "matchScore": 94,
    "scores": {
      "adventure": 92,
      "culture": 85,
      "food": 90,
      "nature": 100,
      "relaxation": 96,
      "luxury": 78,
      "spontaneity": 80
    },
    "whyAiChose": [
      "Stay inside fragrant Arabica coffee estates with morning birdsong",
      "Trek to Karnataka’s highest summit Mullayanagiri (1,930 m) above floating clouds",
      "Refreshing jeep safari and plunge pools at multi-tiered Hebbe Falls",
      "Freshly brewed authentic South Indian filter coffee straight from the source"
    ],
    "travelDnaFit": "The High-Ghats Coffee Pioneer",
    "hiddenGems": [
      {
        "name": "Kemmanagundi & Z Point Ridge",
        "description": "Former royal summer retreat with deep canyon valleys and zero tourist bustle.",
        "crowdReductionPct": 85,
        "savingsInr": 1800,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Mullayanagiri parking jam"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:00 PM",
      "recommendedHours": "06:00 AM – 08:30 AM",
      "reason": "Sea of white clouds floating below Mullayanagiri peak",
      "aiConfidence": 97
    },
    "budgetBreakdown": {
      "flights": 2800,
      "accommodation": 4800,
      "food": 2200,
      "transport": 1700,
      "activities": 1000
    },
    "moodMatches": [
      "Nature",
      "Peaceful",
      "Adventure"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Mullayanagiri Cloud Peak Trek & Coffee Estate Walk",
        "weather": {
          "temp": "20°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "cm-1",
            "time": "06:30 AM",
            "title": "Mullayanagiri Summit Steps",
            "description": "Climb 500 stone steps to Shiva shrine atop Karnataka’s highest point.",
            "location": "Mullayanagiri",
            "category": "adventure",
            "duration": "3h",
            "costInr": 0,
            "isOutdoor": true
          },
          {
            "id": "cm-2",
            "time": "03:00 PM",
            "title": "Coffee Bean Tasting Tour",
            "description": "Learn picking, pulping, and roasting process with expert planters.",
            "location": "Coffee Estate",
            "category": "culture",
            "duration": "2h",
            "costInr": 300,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "kabini",
    "name": "Kabini & Nagarhole",
    "region": "Karnataka",
    "country": "India",
    "tagline": "Asia’s largest elephant congregations, black panther territory and river safaris",
    "description": "A legendary wildlife haven along the tranquil Kabini River in Nagarhole National Park, world-famous for sightings of the elusive Black Panther (Sayik), leopards, tiger prides, and swimming wild elephants.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 11.9366,
    "lng": 76.2711,
    "baseBudgetInr": 21000,
    "estimatedBudget": 21000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Wildlife",
      "Leopards",
      "River Boat Safari",
      "Elephants",
      "Luxury Lodges"
    ],
    "bestSeason": "October – May",
    "currentTemp": "26°C",
    "weatherCondition": "Warm & Jungle Mist",
    "crowdLevel": "Low",
    "crowdScore": 22,
    "experienceScore": 99,
    "aiMatchScore": 97,
    "matchScore": 97,
    "scores": {
      "adventure": 100,
      "culture": 70,
      "food": 88,
      "nature": 100,
      "relaxation": 92,
      "luxury": 96,
      "spontaneity": 70
    },
    "whyAiChose": [
      "Unsurpassed wildlife boat safaris watching elephant herds swim across the river",
      "The highest leopard and black panther sighting frequency in the country",
      "High ecological protection with limited vehicles ensuring quiet wilderness",
      "World-class eco-luxury jungle resorts overlooking the serene reservoir waters"
    ],
    "travelDnaFit": "The Aristocratic Wildlife Naturalist",
    "hiddenGems": [
      {
        "name": "Taraka Dam & Kuruva Island Backshore",
        "description": "Hidden quiet reservoir bank watching marsh birds, otters, and wild deer in complete solitude.",
        "crowdReductionPct": 90,
        "savingsInr": 3000,
        "authenticityScore": 99,
        "experienceScore": 98,
        "popularAlternativeName": "Main jungle lodge safari gate queue"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "02:30 PM – 05:30 PM",
      "recommendedHours": "06:00 AM – 09:30 AM",
      "reason": "Elephants coming down to drink water in morning mist",
      "aiConfidence": 99
    },
    "budgetBreakdown": {
      "flights": 4000,
      "accommodation": 9500,
      "food": 3500,
      "transport": 2000,
      "activities": 2000
    },
    "moodMatches": [
      "Nature",
      "Adventure",
      "Luxury"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kabini River Boat Safari & Leopard Tracking",
        "weather": {
          "temp": "26°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "kb-1",
            "time": "06:15 AM",
            "title": "Kabini River Boat Safari",
            "description": "Glide quietly beside elephants and marsh crocodiles basking on islands.",
            "location": "Kabini River",
            "category": "adventure",
            "duration": "3h",
            "costInr": 2200,
            "isOutdoor": true
          },
          {
            "id": "kb-2",
            "time": "03:30 PM",
            "title": "Open Jeep Leopard Safari",
            "description": "Track leopards and sloth bears through Nagarhole teak forests.",
            "location": "Nagarhole Core",
            "category": "adventure",
            "duration": "3h",
            "costInr": 2000,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "mysore",
    "name": "Mysore / Mysuru",
    "region": "Karnataka",
    "country": "India",
    "tagline": "City of Palaces, 100,000 glowing lights, silk sarees and fragrant sandalwood",
    "description": "The royal cultural capital of Karnataka celebrated for the opulent Indo-Saracenic Mysore Palace (illuminated by 100,000 bulbs on Sunday evenings), Chamundi Hills, Devaraja spice markets, and rich royal culinary heritage.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 12.2958,
    "lng": 76.6394,
    "baseBudgetInr": 10500,
    "estimatedBudget": 10500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Royal Palace",
      "Heritage",
      "Silk",
      "Sandalwood",
      "Mysore Pak"
    ],
    "bestSeason": "October – March",
    "currentTemp": "27°C",
    "weatherCondition": "Sunny & Pleasant",
    "crowdLevel": "Moderate",
    "crowdScore": 42,
    "experienceScore": 96,
    "aiMatchScore": 93,
    "matchScore": 93,
    "scores": {
      "adventure": 65,
      "culture": 100,
      "food": 95,
      "nature": 82,
      "relaxation": 90,
      "luxury": 85,
      "spontaneity": 78
    },
    "whyAiChose": [
      "Gasp at the breathtaking sight of 100,000 incandescent bulbs lighting the Amba Vilas Palace",
      "Climb 1,000 stone steps to Chamundeshwari Temple past the colossal Nandi statue",
      "Fragrant visual feasts through 120-year-old Devaraja Market: marigolds and essential oils",
      "Mylari Dosa and melt-in-mouth original Mysore Pak from Guru Sweets"
    ],
    "travelDnaFit": "The Royal Court Dignitary",
    "hiddenGems": [
      {
        "name": "Ranganathittu Bird Sanctuary & Srirangapatna",
        "description": "Boat ride within touching distance of nesting painted storks and Tipu Sultan’s water gate.",
        "crowdReductionPct": 78,
        "savingsInr": 1800,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Main palace ticket queue"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:30 PM",
      "recommendedHours": "06:45 PM – 07:45 PM",
      "reason": "Sunday evening palace illumination when the entire palace glows gold",
      "aiConfidence": 99
    },
    "budgetBreakdown": {
      "flights": 2500,
      "accommodation": 4000,
      "food": 2200,
      "transport": 1200,
      "activities": 600
    },
    "moodMatches": [
      "Cultural",
      "Family",
      "Food"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Amba Vilas Palace & Devaraja Market Sights",
        "weather": {
          "temp": "27°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "my-1",
            "time": "10:00 AM",
            "title": "Mysore Palace Durbar Hall",
            "description": "Marvel at stained glass ceilings, mahogany carvings, and solid silver doors.",
            "location": "Mysore Palace",
            "category": "culture",
            "duration": "2.5h",
            "costInr": 100,
            "isOutdoor": false
          },
          {
            "id": "my-2",
            "time": "04:00 PM",
            "title": "Devaraja Market & Mylari Dosa",
            "description": "Walk through heaps of kumkum powder and try famous butter dosas.",
            "location": "Devaraja",
            "category": "food",
            "duration": "2h",
            "costInr": 200,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "kodaikanal",
    "name": "Kodaikanal",
    "region": "Tamil Nadu",
    "country": "India",
    "tagline": "Princess of Hill Stations, star-shaped lake and misty pillar rock cliffs",
    "description": "Set amidst the granite cliffs of the Palani Hills at 2,133m, Kodaikanal enchants with its central star-shaped lake, fragrant eucalyptus pine groves, cascading Silver Cascade falls, and panoramic Coaker’s Walk.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 10.2381,
    "lng": 77.4892,
    "baseBudgetInr": 13000,
    "estimatedBudget": 13000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Hill Station",
      "Pine Forests",
      "Star Lake",
      "Pillar Rocks",
      "Romantic"
    ],
    "bestSeason": "October – May",
    "currentTemp": "17°C",
    "weatherCondition": "Crisp & Foggy",
    "crowdLevel": "Moderate",
    "crowdScore": 36,
    "experienceScore": 94,
    "aiMatchScore": 92,
    "matchScore": 92,
    "scores": {
      "adventure": 80,
      "culture": 82,
      "food": 86,
      "nature": 98,
      "relaxation": 96,
      "luxury": 78,
      "spontaneity": 78
    },
    "whyAiChose": [
      "Cycling or pedal boating around the 5 km perimeter of star-shaped Kodai Lake",
      "Walking through mystical tall pine forests with cinematic fog corridors",
      "Panoramic cliff drop viewpoints at Pillar Rocks and Dolphin’s Nose",
      "Artisanal homemade chocolates and fresh fruit jams in charming hill boutiques"
    ],
    "travelDnaFit": "The Princess Hill Station Stroller",
    "hiddenGems": [
      {
        "name": "Vattakanal Dolphin’s Nose & Echo Rock",
        "description": "Little Amsterdam village with cliff edge views over plunging valleys and quiet Israeli cafes.",
        "crowdReductionPct": 82,
        "savingsInr": 1800,
        "authenticityScore": 97,
        "experienceScore": 95,
        "popularAlternativeName": "Main Kodai lake boat queue"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:30 PM",
      "recommendedHours": "06:30 AM – 09:00 AM",
      "reason": "Coaker’s Walk cloud formations sweeping across Vaigai plains",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 3200,
      "accommodation": 5000,
      "food": 2400,
      "transport": 1600,
      "activities": 800
    },
    "moodMatches": [
      "Romantic",
      "Peaceful",
      "Nature"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Star Lake Cycling & Pine Forest Walk",
        "weather": {
          "temp": "17°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "kd-1",
            "time": "10:00 AM",
            "title": "Cycle around Kodai Lake",
            "description": "Rent tandem bicycles for a circuit around the water.",
            "location": "Kodai Lake",
            "category": "nature",
            "duration": "2h",
            "costInr": 150,
            "isOutdoor": true
          },
          {
            "id": "kd-2",
            "time": "03:30 PM",
            "title": "Pine Forest Walking Trail",
            "description": "Walk through towering 100-year-old pine plantations.",
            "location": "Pine Forest",
            "category": "nature",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "rameswaram",
    "name": "Rameswaram & Dhanushkodi",
    "region": "Tamil Nadu",
    "country": "India",
    "tagline": "Pamban sea bridge, sacred 22 theertham wells and Dhanushkodi ghost town",
    "description": "A sacred island city connected to mainland India by the engineering marvel of Pamban Sea Bridge, famous for Ramanathaswamy Temple’s 1,200 carved pillars, holy beach bathing, and the eerie ghost town of Dhanushkodi where the Bay of Bengal meets the Indian Ocean.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 9.2876,
    "lng": 79.3129,
    "baseBudgetInr": 11000,
    "estimatedBudget": 11000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Pamban Bridge",
      "Temples",
      "Ghost Town",
      "Ocean",
      "Spirituality"
    ],
    "bestSeason": "October – April",
    "currentTemp": "29°C",
    "weatherCondition": "Warm & Ocean Breeze",
    "crowdLevel": "Moderate",
    "crowdScore": 40,
    "experienceScore": 96,
    "aiMatchScore": 93,
    "matchScore": 93,
    "scores": {
      "adventure": 88,
      "culture": 100,
      "food": 82,
      "nature": 94,
      "relaxation": 86,
      "luxury": 60,
      "spontaneity": 78
    },
    "whyAiChose": [
      "Spectacular train or road crossing over the historic Pamban Bridge over open ocean",
      "World’s longest temple corridor with 1,212 intricately carved painted granite pillars",
      "Exhilarating 4x4 drive to Dhanushkodi: ruins of church and railway station in coastal sand",
      "Stand at Ram Setu (Adam’s Bridge) point where two different oceans meet with contrasting colors"
    ],
    "travelDnaFit": "The Oceanic Pilgrimage Explorer",
    "hiddenGems": [
      {
        "name": "Arichal Munai & Ghost Town Ruins",
        "description": "The absolute tip of India where only 29 km of sea separates from Sri Lanka with azure sands.",
        "crowdReductionPct": 78,
        "savingsInr": 1500,
        "authenticityScore": 99,
        "experienceScore": 98,
        "popularAlternativeName": "Agni Theertham morning crowd"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "10:00 AM – 02:00 PM",
      "recommendedHours": "06:00 AM – 08:30 AM",
      "reason": "Morning holy bath across 22 ancient temple wells inside temple",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 3000,
      "accommodation": 3800,
      "food": 2200,
      "transport": 1200,
      "activities": 800
    },
    "moodMatches": [
      "Cultural",
      "Curious",
      "Peaceful"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Pamban Bridge Crossing & Ramanathaswamy Temple",
        "weather": {
          "temp": "29°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "rw-1",
            "time": "09:30 AM",
            "title": "Ramanathaswamy Pillar Corridors",
            "description": "Walk through the grand 1,200-pillar corridor and receive holy well water.",
            "location": "Main Temple",
            "category": "culture",
            "duration": "3h",
            "costInr": 25,
            "isOutdoor": false
          },
          {
            "id": "rw-2",
            "time": "04:00 PM",
            "title": "Pamban Rail Bridge Sunset",
            "description": "Watch waves lap beneath the century-old cantilever railway bridge.",
            "location": "Pamban",
            "category": "nature",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "madurai",
    "name": "Madurai",
    "region": "Tamil Nadu",
    "country": "India",
    "tagline": "The Athens of the East: towering Meenakshi gopurams and nocturnal street food",
    "description": "One of the oldest continuously inhabited cities in the world, built around the monumental Meenakshi Amman Temple with its 14 towering technicolor gopurams, famous for jasmine flower markets, and legendary Chettinad feasts.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 9.9252,
    "lng": 78.1198,
    "baseBudgetInr": 9500,
    "estimatedBudget": 9500,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "Meenakshi Temple",
      "Heritage",
      "Dravidian Architecture",
      "Street Food",
      "Culture"
    ],
    "bestSeason": "October – March",
    "currentTemp": "30°C",
    "weatherCondition": "Warm & Tropical",
    "crowdLevel": "High",
    "crowdScore": 65,
    "experienceScore": 97,
    "aiMatchScore": 93,
    "matchScore": 93,
    "scores": {
      "adventure": 60,
      "culture": 100,
      "food": 98,
      "nature": 65,
      "relaxation": 80,
      "luxury": 70,
      "spontaneity": 82
    },
    "whyAiChose": [
      "Gaze up at 14 towering Dravidian gopurams covered in 33,000 sculpted deities",
      "The vibrant night ceremony where Lord Sundareswarar is carried to Meenakshi’s shrine",
      "World-famous Madurai jasmine (Malli) flower market fragrances",
      "Phenomenal culinary treats: Kari Dosa, Jigarthanda drink, and Bun Parotta"
    ],
    "travelDnaFit": "The Dravidian Heritage Epicurean",
    "hiddenGems": [
      {
        "name": "Thirumalai Nayakkar Mahal & Gandhi Memorial Museum",
        "description": "Magnificent 17th-century palace with giant circular stucco pillars and peaceful courtyards.",
        "crowdReductionPct": 80,
        "savingsInr": 1200,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "East tower bazaar stampede"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "10:00 AM – 03:00 PM",
      "recommendedHours": "08:30 PM – 10:00 PM",
      "reason": "Witnessing the daily nighttime procession of the deities with drums",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 2500,
      "accommodation": 3500,
      "food": 2000,
      "transport": 1000,
      "activities": 500
    },
    "moodMatches": [
      "Cultural",
      "Food",
      "Spirituality"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Meenakshi Amman Temple & Jigarthanda Feast",
        "weather": {
          "temp": "30°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "md-1",
            "time": "09:00 AM",
            "title": "Meenakshi Temple Hall of 1000 Pillars",
            "description": "Inspect musical pillars and ancient Dravidian sculpted stone pillars.",
            "location": "Meenakshi Amman Temple",
            "category": "culture",
            "duration": "3h",
            "costInr": 50,
            "isOutdoor": false
          },
          {
            "id": "md-2",
            "time": "04:00 PM",
            "title": "Original Famous Jigarthanda",
            "description": "Cool down with the legendary almond gum, condensed milk, and ice cream dessert.",
            "location": "East Marret Street",
            "category": "food",
            "duration": "1h",
            "costInr": 100,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "mahabalipuram",
    "name": "Mahabalipuram / Mamallapuram",
    "region": "Tamil Nadu",
    "country": "India",
    "tagline": "UNESCO 7th-century Shore Temple, giant monolithic rathas and coastal stone art",
    "description": "An open-air museum by the Bay of Bengal where 7th-century Pallava kings carved granitic boulders into sea-facing temples, the giant relief of Arjuna’s Penance, the balancing Krishna’s Butter Ball, and surf beaches.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 12.6269,
    "lng": 80.1928,
    "baseBudgetInr": 11500,
    "estimatedBudget": 11500,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "UNESCO Shore Temple",
      "Monolithic Rock Carvings",
      "Beach",
      "Seafood",
      "Sculpture"
    ],
    "bestSeason": "November – March",
    "currentTemp": "28°C",
    "weatherCondition": "Sunny & Coastal Breeze",
    "crowdLevel": "Moderate",
    "crowdScore": 36,
    "experienceScore": 96,
    "aiMatchScore": 92,
    "matchScore": 92,
    "scores": {
      "adventure": 78,
      "culture": 100,
      "food": 90,
      "nature": 88,
      "relaxation": 92,
      "luxury": 82,
      "spontaneity": 80
    },
    "whyAiChose": [
      "The iconic 8th-century Shore Temple standing proud against the crashing waves",
      "Arjuna’s Penance: the world’s largest open-air stone relief carving",
      "The mysterious gravity-defying Krishna’s Butter Ball perched on a 45-degree slope",
      "Relaxed seaside cafes serving grilled lobster and fresh calamari on the beach"
    ],
    "travelDnaFit": "The Coastal Stone Sculptor",
    "hiddenGems": [
      {
        "name": "Tiger Cave & Sadras Dutch Fort",
        "description": "A secluded rock-cut mandapa on coastal rocks and an abandoned 17th-century seaside fortress.",
        "crowdReductionPct": 84,
        "savingsInr": 1500,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Shore Temple parking jam"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:30 PM",
      "recommendedHours": "06:00 AM – 08:30 AM",
      "reason": "Shore Temple bathed in golden sunrise light over the Bay of Bengal",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 3000,
      "accommodation": 4500,
      "food": 2200,
      "transport": 1000,
      "activities": 800
    },
    "moodMatches": [
      "Cultural",
      "Relaxing",
      "History"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Shore Temple Sunrise & Pancha Rathas Monoliths",
        "weather": {
          "temp": "28°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "mb-1",
            "time": "06:30 AM",
            "title": "Shore Temple Sunrise Walk",
            "description": "Watch waves lap the base of the granite pagoda as the sun rises.",
            "location": "Shore Temple",
            "category": "culture",
            "duration": "2h",
            "costInr": 40,
            "isOutdoor": true
          },
          {
            "id": "mb-2",
            "time": "11:00 AM",
            "title": "Pancha Rathas Monolithic Chariots",
            "description": "Inspect five monolithic stone chariots carved from a single rock ridge.",
            "location": "Pancha Rathas",
            "category": "culture",
            "duration": "1.5h",
            "costInr": 40,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "araku-valley",
    "name": "Araku Valley & Vizag",
    "region": "Andhra Pradesh",
    "country": "India",
    "tagline": "Eastern Ghats coffee estates, million-year-old Borra caves and tribal valleys",
    "description": "A tranquil hill station in the Eastern Ghats of Andhra Pradesh, famous for aromatic tribal organic coffee, million-year-old limestone Borra Caves with natural Shiva lingams, and scenic mountain railway tunnels.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 18.3273,
    "lng": 82.8775,
    "baseBudgetInr": 10500,
    "estimatedBudget": 10500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Eastern Ghats",
      "Coffee Gardens",
      "Borra Caves",
      "Tribal Culture",
      "Waterfalls"
    ],
    "bestSeason": "October – March",
    "currentTemp": "22°C",
    "weatherCondition": "Cool & Pleasant",
    "crowdLevel": "Low",
    "crowdScore": 28,
    "experienceScore": 93,
    "aiMatchScore": 90,
    "matchScore": 90,
    "scores": {
      "adventure": 84,
      "culture": 88,
      "food": 86,
      "nature": 96,
      "relaxation": 94,
      "luxury": 60,
      "spontaneity": 80
    },
    "whyAiChose": [
      "Scenic Vistadome glass-roof train passing through 58 tunnels into misty hills",
      "Million-year-old subterranean Borra Caves illuminated with colorful lights",
      "Organic Arabica coffee cultivated by indigenous tribal farmers",
      "Combined experience of Eastern Ghats valleys with Vizag coastal beaches"
    ],
    "travelDnaFit": "The Eastern Valley Rail Pioneer",
    "hiddenGems": [
      {
        "name": "Katiki Waterfalls & Chaparai Cascades",
        "description": "Hidden 50-foot waterfall in deep forests accessed by thrilling jungle jeep tracks.",
        "crowdReductionPct": 82,
        "savingsInr": 1500,
        "authenticityScore": 98,
        "experienceScore": 95,
        "popularAlternativeName": "Borra cave ticket line"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:30 AM – 03:00 PM",
      "recommendedHours": "07:30 AM – 10:00 AM",
      "reason": "Vistadome train climb through mountain tunnels in morning mist",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 2500,
      "accommodation": 4000,
      "food": 2000,
      "transport": 1200,
      "activities": 800
    },
    "moodMatches": [
      "Nature",
      "Peaceful",
      "Adventure"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Borra Caves Exploration & Coffee Museum",
        "weather": {
          "temp": "22°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "av-1",
            "time": "10:30 AM",
            "title": "Borra Limestone Caves",
            "description": "Descend 80 meters into stalactite and stalagmite cavern formations.",
            "location": "Borra",
            "category": "nature",
            "duration": "2h",
            "costInr": 80,
            "isOutdoor": false
          },
          {
            "id": "av-2",
            "time": "03:00 PM",
            "title": "Araku Tribal Coffee Museum",
            "description": "Taste freshly roasted indigenous coffee and learn tribal history.",
            "location": "Araku Town",
            "category": "culture",
            "duration": "1.5h",
            "costInr": 50,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "tirupati",
    "name": "Tirupati",
    "region": "Andhra Pradesh",
    "country": "India",
    "tagline": "Lord Venkateswara on the Seven Sacred Hills, golden vimana and divine laddu",
    "description": "The world’s most visited sacred pilgrimage shrine situated on the Venkatadri hill of the Seshachalam range, famous for the gilded Sri Venkateswara Temple, spiritual silence of morning suprabhatam, and GI-tagged Tirupati Laddus.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 13.6288,
    "lng": 79.4192,
    "baseBudgetInr": 8500,
    "estimatedBudget": 8500,
    "recommendedDays": 2,
    "duration": 2,
    "tags": [
      "Venkateswara Temple",
      "Seven Hills",
      "Spiritual Pilgrimage",
      "Laddoo Prasadam"
    ],
    "bestSeason": "September – March",
    "currentTemp": "28°C",
    "weatherCondition": "Sunny",
    "crowdLevel": "High",
    "crowdScore": 78,
    "experienceScore": 95,
    "aiMatchScore": 90,
    "matchScore": 90,
    "scores": {
      "adventure": 55,
      "culture": 100,
      "food": 92,
      "nature": 80,
      "relaxation": 80,
      "luxury": 60,
      "spontaneity": 68
    },
    "whyAiChose": [
      "Profound spiritual reverence at India’s premier devotional pilgrimage site",
      "The sacred climb through Alipiri Mettu stone steps amidst deers and forests",
      "The world-famous consecrated pure ghee Tirupati Laddu prasadam",
      "Magnificent golden Ananda Nilayam vimana dome crowning the sanctum"
    ],
    "travelDnaFit": "The Sacred Seven-Hills Devotee",
    "hiddenGems": [
      {
        "name": "Kapila Theertham & Chandragiri Fort",
        "description": "Sacred waterfall cave temple at the base of the mountain and a historic 14th-century Vijayanagara fort.",
        "crowdReductionPct": 82,
        "savingsInr": 1200,
        "authenticityScore": 98,
        "experienceScore": 95,
        "popularAlternativeName": "Tirumala Q-complex crowd"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "10:00 AM – 04:00 PM",
      "recommendedHours": "05:00 AM – 07:30 AM",
      "reason": "Dawn darshan with resonant Vedic Suprabhatam hymns",
      "aiConfidence": 97
    },
    "budgetBreakdown": {
      "flights": 2200,
      "accommodation": 2800,
      "food": 1800,
      "transport": 1000,
      "activities": 700
    },
    "moodMatches": [
      "Cultural",
      "Spirituality",
      "Family"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tirumala Hills Darshan & Sacred Temple Prasadam",
        "weather": {
          "temp": "28°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "tp-1",
            "time": "08:30 AM",
            "title": "Sri Venkateswara Temple Darshan",
            "description": "Behold the magnificent deity adorned with diamonds and tulsi garlands.",
            "location": "Tirumala",
            "category": "culture",
            "duration": "3.5h",
            "costInr": 300,
            "isOutdoor": false
          },
          {
            "id": "tp-2",
            "time": "04:00 PM",
            "title": "Silathoranam Geological Arch",
            "description": "Visit the rare 2.5-billion-year-old natural stone arch in the forest.",
            "location": "Tirumala Hills",
            "category": "nature",
            "duration": "1h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "tawang",
    "name": "Tawang",
    "region": "Arunachal Pradesh",
    "country": "India",
    "tagline": "India’s largest Buddhist monastery, frozen Sela Pass lake and Himalayan clouds",
    "description": "A magical high-altitude valley at 3,048m in Arunachal Pradesh, home to the 400-year-old Tawang Monastery (birthplace of the 6th Dalai Lama), the dramatic snowbound Sela Pass (13,700 ft), and the cascading Nuranang Falls.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 27.5861,
    "lng": 91.8594,
    "baseBudgetInr": 22000,
    "estimatedBudget": 22000,
    "recommendedDays": 6,
    "duration": 6,
    "tags": [
      "Himalayan Monastery",
      "Sela Pass Snow",
      "Buddhism",
      "Offbeat",
      "Adventure"
    ],
    "bestSeason": "March – October",
    "currentTemp": "11°C",
    "weatherCondition": "Chilly & Clear Mountain",
    "crowdLevel": "Low",
    "crowdScore": 16,
    "experienceScore": 99,
    "aiMatchScore": 96,
    "matchScore": 96,
    "scores": {
      "adventure": 98,
      "culture": 100,
      "food": 82,
      "nature": 100,
      "relaxation": 90,
      "luxury": 55,
      "spontaneity": 78
    },
    "whyAiChose": [
      "Home to India’s largest and world’s second largest Buddhist monastery",
      "Breathtaking crossing of Sela Pass at 13,700 feet with frozen alpine lakes",
      "Completely untouched by mass tourism with genuine Monpa tribal hospitality",
      "Dramatic Nuranang (Jang) Waterfall cascading through virgin rhododendron valleys"
    ],
    "travelDnaFit": "The High Himalayan Pilgrim",
    "hiddenGems": [
      {
        "name": "Madhuri (Sangetsar) Lake & PTSO Lake",
        "description": "Ethereal high-altitude lake surrounded by dead tree trunks and snow peaks near the border.",
        "crowdReductionPct": 92,
        "savingsInr": 3500,
        "authenticityScore": 99,
        "experienceScore": 98,
        "popularAlternativeName": "Tawang town center"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 02:00 PM",
      "recommendedHours": "05:30 AM – 08:00 AM",
      "reason": "Morning prayer chants and giant horn trumpets echoing across the valley",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 6500,
      "accommodation": 6000,
      "food": 3500,
      "transport": 4500,
      "activities": 1500
    },
    "moodMatches": [
      "Peaceful",
      "Adventure",
      "Cultural"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tawang Gompa Monastery & Monpa Village Stroll",
        "weather": {
          "temp": "11°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "tw-1",
            "time": "09:00 AM",
            "title": "Tawang Monastery (Galden Namgey Lhatse)",
            "description": "Explore ancient scripture library, golden Buddha statue, and murals.",
            "location": "Tawang Ridge",
            "category": "culture",
            "duration": "3h",
            "costInr": 20,
            "isOutdoor": false
          },
          {
            "id": "tw-2",
            "time": "03:00 PM",
            "title": "Nuranang (Jang) Waterfall",
            "description": "Watch the powerful 100-meter roaring white torrent.",
            "location": "Jang",
            "category": "nature",
            "duration": "2h",
            "costInr": 0,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "kaziranga",
    "name": "Kaziranga National Park",
    "region": "Assam",
    "country": "India",
    "tagline": "World capital of the Great Indian One-Horned Rhino, tea gardens and Brahmaputra floodplains",
    "description": "A UNESCO World Heritage sanctuary in Assam hosting two-thirds of the entire global population of the Great Indian One-Horned Rhinoceros, alongside wild water buffaloes, swamp deer, Bengal tigers, and sprawling tea estates.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 26.5775,
    "lng": 93.1711,
    "baseBudgetInr": 18000,
    "estimatedBudget": 18000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "One-Horned Rhino",
      "UNESCO Heritage",
      "Tea Gardens",
      "Elephant Safari",
      "Wildlife"
    ],
    "bestSeason": "November – April",
    "currentTemp": "23°C",
    "weatherCondition": "Sunny & Morning Mist",
    "crowdLevel": "Moderate",
    "crowdScore": 35,
    "experienceScore": 98,
    "aiMatchScore": 95,
    "matchScore": 95,
    "scores": {
      "adventure": 98,
      "culture": 82,
      "food": 88,
      "nature": 100,
      "relaxation": 88,
      "luxury": 82,
      "spontaneity": 72
    },
    "whyAiChose": [
      "Guaranteed close-up encounters with the majestic prehistoric One-Horned Rhinoceros",
      "Dawn elephant-back safari walking directly through tall elephant grass",
      "Highest tiger density protected area in Assam with river dolphins in the Brahmaputra",
      "Sip fresh single-origin orthodox Assam tea right beside the lush green estates"
    ],
    "travelDnaFit": "The Prehistoric Wildlife Observer",
    "hiddenGems": [
      {
        "name": "Kakochang Waterfalls & Orchid Park",
        "description": "Splashing crystal waterfall in the coffee hills and Asia’s largest indigenous wild orchid collection.",
        "crowdReductionPct": 85,
        "savingsInr": 2000,
        "authenticityScore": 98,
        "experienceScore": 96,
        "popularAlternativeName": "Kohora gate jeep scrum"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "01:30 PM – 04:30 PM",
      "recommendedHours": "05:30 AM – 08:30 AM",
      "reason": "Elephant safari emerging through morning dew mist near rhinos",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 4500,
      "accommodation": 6000,
      "food": 3000,
      "transport": 2500,
      "activities": 2000
    },
    "moodMatches": [
      "Adventure",
      "Nature",
      "Family"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Dawn Rhino Safari & Assam Tea Tasting",
        "weather": {
          "temp": "23°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "kz-1",
            "time": "05:45 AM",
            "title": "Central Kohora Zone Rhino Safari",
            "description": "Approach wild rhinos and swamp deer in open elephant grasslands.",
            "location": "Kohora",
            "category": "adventure",
            "duration": "3.5h",
            "costInr": 1800,
            "isOutdoor": true
          },
          {
            "id": "kz-2",
            "time": "03:00 PM",
            "title": "Hathikuli Organic Tea Estate",
            "description": "Sample fresh first-flush organic orthodox green and black teas.",
            "location": "Hathikuli",
            "category": "food",
            "duration": "2h",
            "costInr": 100,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "majuli",
    "name": "Majuli Island",
    "region": "Assam",
    "country": "India",
    "tagline": "World’s largest inhabited river island, mask-making satras and Mishing tribal villages",
    "description": "The world’s largest river island floating in the mighty Brahmaputra River, the spiritual cradle of Assamese Neo-Vaishnavite culture with 500-year-old monastic Satras, traditional bamboo mask-making, and stilt village life.",
    "heroImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 26.95,
    "lng": 94.2167,
    "baseBudgetInr": 12500,
    "estimatedBudget": 12500,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "World Largest River Island",
      "Neo-Vaishnavite Monasteries",
      "Mask Making",
      "Brahmaputra",
      "Tribal"
    ],
    "bestSeason": "October – March",
    "currentTemp": "22°C",
    "weatherCondition": "Crisp & River Breeze",
    "crowdLevel": "Low",
    "crowdScore": 18,
    "experienceScore": 97,
    "aiMatchScore": 94,
    "matchScore": 94,
    "scores": {
      "adventure": 85,
      "culture": 100,
      "food": 85,
      "nature": 96,
      "relaxation": 96,
      "luxury": 45,
      "spontaneity": 84
    },
    "whyAiChose": [
      "Travel by ferry across the legendary Brahmaputra to the world’s largest river island",
      "Watch masters craft bamboo and clay theatrical masks at Samaguri Satra",
      "Cycle on quiet flat river roads between stilt wooden villages of the Mishing tribe",
      "Pristine wetland birdwatching with pelicans, adjutant storks, and whistling ducks"
    ],
    "travelDnaFit": "The Riverine Cultural Anthropologist",
    "hiddenGems": [
      {
        "name": "Chamaguri Satra & Dakhinpat Riverside",
        "description": "Hands-on mask-making workshop with monk artisans and silent sunset on riverbanks.",
        "crowdReductionPct": 90,
        "savingsInr": 1800,
        "authenticityScore": 99,
        "experienceScore": 97,
        "popularAlternativeName": "Kamalabari ferry jetty queue"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:00 PM",
      "recommendedHours": "05:00 PM – 06:30 PM",
      "reason": "Sunset reflection across the waters of the Brahmaputra",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 4000,
      "accommodation": 3500,
      "food": 2200,
      "transport": 1800,
      "activities": 1000
    },
    "moodMatches": [
      "Peaceful",
      "Cultural",
      "Curious"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Brahmaputra Ferry Crossing & Satra Mask Workshop",
        "weather": {
          "temp": "22°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "mj-1",
            "time": "09:00 AM",
            "title": "Ferry to Majuli Island",
            "description": "Scenic boat crossing on the Brahmaputra past sandbanks and river dolphins.",
            "location": "Nimati Ghat",
            "category": "transit",
            "duration": "1.5h",
            "costInr": 50,
            "isOutdoor": true
          },
          {
            "id": "mj-2",
            "time": "02:00 PM",
            "title": "Samaguri Satra Mask Making",
            "description": "Learn the ancient art of bamboo, cloth, and cow dung theatrical masks.",
            "location": "Samaguri",
            "category": "culture",
            "duration": "2.5h",
            "costInr": 200,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "puri-konark",
    "name": "Puri & Konark",
    "region": "Odisha",
    "country": "India",
    "tagline": "UNESCO Sun Temple stone chariot, sacred Jagannath shrine and golden surf beaches",
    "description": "The spiritual heart of coastal Odisha featuring the 13th-century UNESCO Sun Temple at Konark designed as a colossal 24-wheeled chariot, the sacred Jagannath Temple in Puri, and golden surf beaches with fresh seafood.",
    "heroImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 19.8135,
    "lng": 85.8312,
    "baseBudgetInr": 11000,
    "estimatedBudget": 11000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Jagannath Temple",
      "Sun Temple Konark",
      "Golden Beach",
      "Odia Thali",
      "Chariot Festival"
    ],
    "bestSeason": "October – March",
    "currentTemp": "27°C",
    "weatherCondition": "Sunny & Coastal Breeze",
    "crowdLevel": "Moderate",
    "crowdScore": 48,
    "experienceScore": 96,
    "aiMatchScore": 93,
    "matchScore": 93,
    "scores": {
      "adventure": 75,
      "culture": 100,
      "food": 92,
      "nature": 90,
      "relaxation": 90,
      "luxury": 72,
      "spontaneity": 78
    },
    "whyAiChose": [
      "Gasp at the colossal 24 carved stone wheels of the 13th-century Konark Sun Temple",
      "Sacred pilgrimage to the holy Jagannath Temple and sampling Mahaprasad from the world’s largest earthen kitchen",
      "Golden Beach Blue Flag certified clean swimming and surfing sands in Puri",
      "Scenic Marine Drive highway hugging the Bay of Bengal coastline"
    ],
    "travelDnaFit": "The Golden Coast Stone Chronicler",
    "hiddenGems": [
      {
        "name": "Raghurajpur Heritage Crafts Village",
        "description": "Every house is a living art studio of master Pattachitra palm-leaf painters and Gotipua dancers.",
        "crowdReductionPct": 82,
        "savingsInr": 1500,
        "authenticityScore": 100,
        "experienceScore": 98,
        "popularAlternativeName": "Puri Swargadwar beach crowd"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:30 PM",
      "recommendedHours": "06:00 AM – 08:30 AM",
      "reason": "Sunrise rays hitting the sanctum wheel at Konark Sun Temple",
      "aiConfidence": 98
    },
    "budgetBreakdown": {
      "flights": 3000,
      "accommodation": 4000,
      "food": 2200,
      "transport": 1200,
      "activities": 600
    },
    "moodMatches": [
      "Cultural",
      "Family",
      "Relaxing"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Konark Sun Temple & Marine Drive Coastal Ride",
        "weather": {
          "temp": "27°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "pr-1",
            "time": "09:00 AM",
            "title": "Konark Sun Temple UNESCO Wonder",
            "description": "Inspect the 24 sundial wheels telling time to the exact minute.",
            "location": "Konark",
            "category": "culture",
            "duration": "2.5h",
            "costInr": 40,
            "isOutdoor": true
          },
          {
            "id": "pr-2",
            "time": "04:00 PM",
            "title": "Puri Golden Beach Walk & Seafood",
            "description": "Stroll on clean sands and savor fresh fried pomfret and crab.",
            "location": "Golden Beach",
            "category": "relaxation",
            "duration": "2h",
            "costInr": 300,
            "isOutdoor": true
          }
        ]
      }
    ]
  },
  {
    "id": "kalimpong",
    "name": "Kalimpong & Mirik",
    "region": "West Bengal",
    "country": "India",
    "tagline": "Orchid nurseries, Kanchenjunga mountain panoramas and quiet colonial bungalows",
    "description": "A peaceful Himalayan retreat overlooking the Teesta River gorge at 1,250m, famous for producing 80% of India’s gladioli and exotic orchids, serene Buddhist monasteries, and Sumendu Lake boating in nearby Mirik.",
    "heroImage": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 27.0594,
    "lng": 88.4695,
    "baseBudgetInr": 12000,
    "estimatedBudget": 12000,
    "recommendedDays": 3,
    "duration": 3,
    "tags": [
      "Himalayas",
      "Orchids",
      "Pine Ridges",
      "Sumendu Lake",
      "Monasteries"
    ],
    "bestSeason": "March – May & Sept – Dec",
    "currentTemp": "18°C",
    "weatherCondition": "Crisp & Mountain Breeze",
    "crowdLevel": "Low",
    "crowdScore": 22,
    "experienceScore": 94,
    "aiMatchScore": 92,
    "matchScore": 92,
    "scores": {
      "adventure": 78,
      "culture": 92,
      "food": 88,
      "nature": 98,
      "relaxation": 96,
      "luxury": 70,
      "spontaneity": 78
    },
    "whyAiChose": [
      "Significantly quieter, greener and more authentic than crowded Darjeeling",
      "Spectacular uninterrupted panoramic views of snow-capped Mt. Kanchenjunga",
      "Exotic cacti and orchid nurseries with over 4,000 varieties of flowers",
      "Historic Zang Dhok Palri Phodang monastery with rare Tibetan scriptures"
    ],
    "travelDnaFit": "The Peaceful Himalayan Florist",
    "hiddenGems": [
      {
        "name": "Deolo Hill & Dr. Graham’s Homes",
        "description": "Highest point in Kalimpong with paragliding lawns, landscaped gardens, and 100-year-old stone cottages.",
        "crowdReductionPct": 84,
        "savingsInr": 1600,
        "authenticityScore": 98,
        "experienceScore": 95,
        "popularAlternativeName": "Kalimpong market jam"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:00 PM",
      "recommendedHours": "06:00 AM – 08:30 AM",
      "reason": "Unobstructed morning Kanchenjunga reflections over the valleys",
      "aiConfidence": 96
    },
    "budgetBreakdown": {
      "flights": 3200,
      "accommodation": 4500,
      "food": 2200,
      "transport": 1300,
      "activities": 800
    },
    "moodMatches": [
      "Peaceful",
      "Romantic",
      "Nature"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Deolo Hill Panoramas & Pine View Cactus Nursery",
        "weather": {
          "temp": "18°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "kl-1",
            "time": "09:30 AM",
            "title": "Deolo Hill Viewpoint Walk",
            "description": "Soak in 360-degree views of the Relli Valley and snow peaks.",
            "location": "Deolo",
            "category": "nature",
            "duration": "2.5h",
            "costInr": 20,
            "isOutdoor": true
          },
          {
            "id": "kl-2",
            "time": "03:00 PM",
            "title": "Pine View Nursery Exotic Cacti",
            "description": "Marvel at Asia’s premier collection of exotic desert cacti and orchids.",
            "location": "Atisha Road",
            "category": "nature",
            "duration": "1.5h",
            "costInr": 50,
            "isOutdoor": false
          }
        ]
      }
    ]
  },
  {
    "id": "lakshadweep",
    "name": "Lakshadweep Islands",
    "region": "Lakshadweep",
    "country": "India",
    "tagline": "Untouched turquoise atolls, pristine coral lagoons and glass-clear diving",
    "description": "An archipelago of 36 breathtaking coral atolls in the Arabian Sea with crystal turquoise lagoons, live coral reefs teeming with manta rays and sea turtles, water villas at Bangaram, and pristine white sands with strict eco-protection.",
    "heroImage": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80"
    ],
    "lat": 10.853,
    "lng": 72.195,
    "baseBudgetInr": 32000,
    "estimatedBudget": 32000,
    "recommendedDays": 5,
    "duration": 5,
    "tags": [
      "Turquoise Lagoons",
      "Coral Reefs",
      "Scuba Diving",
      "Untouched Islands",
      "Beaches"
    ],
    "bestSeason": "October – May",
    "currentTemp": "28°C",
    "weatherCondition": "Tropical & Crystal Clear",
    "crowdLevel": "Low",
    "crowdScore": 12,
    "experienceScore": 100,
    "aiMatchScore": 98,
    "matchScore": 98,
    "scores": {
      "adventure": 98,
      "culture": 75,
      "food": 88,
      "nature": 100,
      "relaxation": 100,
      "luxury": 95,
      "spontaneity": 65
    },
    "whyAiChose": [
      "Unspoiled Maldives-rivaling turquoise lagoons with zero commercial tourist crowds",
      "World-class scuba diving and snorkeling with sea turtles and live coral gardens",
      "Exclusive permit-based entry ensuring pristine ecology and privacy",
      "Over-water and beachfront eco-cottages on uninhabited Bangaram and Thinnakara atolls"
    ],
    "travelDnaFit": "The Exclusive Coral Castaway",
    "hiddenGems": [
      {
        "name": "Thinnakara Island Sandspit & Turtle Reef",
        "description": "An uninhabited private island ringed by a glowing turquoise lagoon where green sea turtles graze.",
        "crowdReductionPct": 96,
        "savingsInr": 4500,
        "authenticityScore": 100,
        "experienceScore": 100,
        "popularAlternativeName": "Agatti airport jetty"
      }
    ],
    "optimalVisitingHours": {
      "peakHours": "11:00 AM – 03:00 PM",
      "recommendedHours": "07:00 AM – 10:00 AM",
      "reason": "Crystal lagoon water visibility extending over 30 meters for snorkeling",
      "aiConfidence": 99
    },
    "budgetBreakdown": {
      "flights": 13000,
      "accommodation": 11000,
      "food": 4000,
      "transport": 2500,
      "activities": 1500
    },
    "moodMatches": [
      "Romantic",
      "Adventure",
      "Relaxing",
      "Nature"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Agatti Arrival & Bangaram Lagoon Catamaran",
        "weather": {
          "temp": "28°C",
          "condition": "Sunny",
          "icon": "Sun"
        },
        "activities": [
          {
            "id": "lk-1",
            "time": "11:00 AM",
            "title": "Speedboat to Bangaram Atoll",
            "description": "Cruise across glowing neon turquoise waters into the lagoon.",
            "location": "Bangaram Lagoon",
            "category": "nature",
            "duration": "1.5h",
            "costInr": 0,
            "isOutdoor": true
          },
          {
            "id": "lk-2",
            "time": "03:30 PM",
            "title": "Snorkeling with Sea Turtles",
            "description": "Snorkel in shallow crystal warm water directly off the white sand beach.",
            "location": "Shipwreck Reef",
            "category": "adventure",
            "duration": "2h",
            "costInr": 1200,
            "isOutdoor": true
          }
        ]
      }
    ]
  }
];

export const MOCK_STORIES: TravelStory[] = [
  {
    id: 'story-1',
    title: 'A 4-Day Himalayan Reset in Tirthan',
    author: 'Manoj Bhosale',
    authorLocation: 'Pune, India',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    destination: 'Tirthan Valley, Himachal Pradesh',
    duration: '4 Days',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    stats: { distanceKm: 486, placesVisited: 12, hiddenGemsFound: 4, savedInr: 3850 },
    quote: 'Instead of standing in Manali traffic for 4 hours, Travelora pointed me to an ancient timber fortress in an apple orchard with zero tourists. Truly magical.',
    likes: 142
  }
];
