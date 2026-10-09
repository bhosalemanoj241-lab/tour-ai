import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, ActiveTab } from './components/layout/Navbar';
import { BottomNav } from './components/layout/BottomNav';
import { AIRecommenderView } from './components/ai/AIRecommenderView';
import { ExplorePage } from './components/explore/ExplorePage';
import { DestinationDetailsModal } from './components/destination/DestinationDetailsModal';
import { SavedTripsDrawer } from './components/trips/SavedTripsDrawer';
import { MyTripsView } from './components/trips/MyTripsView';
import { Footer } from './components/layout/Footer';
import { BackgroundVideo } from './components/common/BackgroundVideo';
import { AICopilotDrawer } from './components/chat/AICopilotDrawer';

import { INITIAL_DESTINATIONS } from './data/destinations';
import { Destination, UserPreferences } from './types/travel';
import { computeRecommendations } from './services/recommendationEngine';

export function AppContent() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('ai');
  const [isCopilotOpen, setIsCopilotOpen] = useState<boolean>(false);

  // Initial user preferences
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({
    mood: 'Peaceful',
    companions: 'Solo',
    budget: '₹10K–₹25K',
    duration: '3–5 days',
    geography: 'Cold Mountains & Snow',
    crowdTolerance: 'Secluded & Offbeat',
    foodStyle: 'Authentic Regional Thali',
    interests: ['Mountains', 'Nature', 'Photography'],
    pace: 'Balanced',
    priority: 'Balanced',
  });

  // Destinations with AI computed scores
  const [destinations, setDestinations] = useState<Destination[]>(() => {
    const results = computeRecommendations(
      {
        mood: 'Peaceful',
        companions: 'Solo',
        budget: '₹10K–₹25K',
        duration: '3–5 days',
        geography: 'Cold Mountains & Snow',
        interests: ['Mountains', 'Nature', 'Photography'],
      },
      INITIAL_DESTINATIONS
    );
    return results.map((r) => r.destination);
  });

  // Selected destination for details modal
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  // Saved bookmarked trips in localStorage
  const [savedTrips, setSavedTrips] = useState<Destination[]>(() => {
    try {
      const stored = localStorage.getItem('tourai_saved_trips');
      if (stored) {
        const parsedIds = JSON.parse(stored);
        if (Array.isArray(parsedIds)) {
          return INITIAL_DESTINATIONS.filter((d) => parsedIds.includes(d.id));
        }
      }
    } catch {
      // fallback
    }
    return [INITIAL_DESTINATIONS[0]];
  });

  // Drawer for saved trips
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState<boolean>(false);

  // Save trips persistence
  useEffect(() => {
    try {
      const ids = savedTrips.map((d) => d.id);
      localStorage.setItem('tourai_saved_trips', JSON.stringify(ids));
    } catch {
      // ignore
    }
  }, [savedTrips]);

  // Handle Preferences update
  const handleUpdatePreferences = (newPrefs: UserPreferences) => {
    setUserPreferences(newPrefs);
    const results = computeRecommendations(newPrefs, INITIAL_DESTINATIONS);
    setDestinations(results.map((r) => r.destination));
  };

  // Toggle Save Trip Bookmark
  const handleToggleSaveTrip = (dest: Destination) => {
    setSavedTrips((prev) => {
      const exists = prev.some((d) => d.id === dest.id);
      if (exists) {
        return prev.filter((d) => d.id !== dest.id);
      } else {
        return [...prev, dest];
      }
    });
  };

  // Remove saved trip
  const handleRemoveSavedTrip = (destId: string) => {
    setSavedTrips((prev) => prev.filter((d) => d.id !== destId));
  };

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 overflow-x-hidden selection:bg-sky-500 selection:text-white bg-slate-50 dark:bg-slate-950">
      {/* 1. Cinematic Looping Background Video & Ambient Layer */}
      <BackgroundVideo />

      {/* 2. Global Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedTripsCount={savedTrips.length}
        onOpenSavedDrawer={() => setIsSavedDrawerOpen(true)}
      />

      {/* 3. Main Page Content with Fluid Page Switching Transition Animation */}
      <main className="relative z-10 min-h-[calc(100vh-260px)] pb-24 md:pb-12">
        <div key={activeTab} className="page-transition-enter">
          {activeTab === 'ai' && (
            <AIRecommenderView
              destinations={destinations}
              userPreferences={userPreferences}
              onUpdatePreferences={handleUpdatePreferences}
              onSelectDestination={setSelectedDestination}
              onToggleSaveTrip={handleToggleSaveTrip}
              savedTrips={savedTrips}
            />
          )}

          {activeTab === 'explore' && (
            <ExplorePage
              destinations={destinations}
              onSelectDestination={setSelectedDestination}
              onSaveTrip={handleToggleSaveTrip}
              savedTrips={savedTrips}
              onNavigateToAI={() => {
                setActiveTab('ai');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}

          {activeTab === 'trips' && (
            <MyTripsView
              savedTrips={savedTrips}
              onSelectDestination={setSelectedDestination}
              onRemoveTrip={handleRemoveSavedTrip}
              onStartPlanning={() => {
                setActiveTab('ai');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          )}
        </div>
      </main>

      {/* 4. Universal Destination Details Modal */}
      <DestinationDetailsModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onToggleSave={handleToggleSaveTrip}
        isSaved={selectedDestination ? savedTrips.some((d) => d.id === selectedDestination.id) : false}
      />

      {/* 5. Slide-over Saved Trips Drawer */}
      <SavedTripsDrawer
        isOpen={isSavedDrawerOpen}
        onClose={() => setIsSavedDrawerOpen(false)}
        savedTrips={savedTrips}
        onSelectDestination={setSelectedDestination}
        onRemoveTrip={handleRemoveSavedTrip}
        onNavigateExplore={() => {
          setActiveTab('explore');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 6. Floating AI Travel Copilot & Recommendations Assistant */}
      <AICopilotDrawer
        isOpenControlled={isCopilotOpen ? true : undefined}
        onCloseControlled={() => setIsCopilotOpen(false)}
        onSelectDestinationById={(id) => {
          const found = INITIAL_DESTINATIONS.find((d) => d.id === id);
          if (found) setSelectedDestination(found);
        }}
        onNavigateToFullAI={() => {
          setActiveTab('ai');
          setIsCopilotOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 7. Dedicated Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        onSelectTab={(tab) => {
          setActiveTab(tab);
          setIsCopilotOpen(false);
        }}
        savedTripsCount={savedTrips.length}
        onOpenCopilot={() => setIsCopilotOpen(!isCopilotOpen)}
        isCopilotOpen={isCopilotOpen}
      />

      {/* 8. Clean Web3 Footer */}
      <div className="relative z-10">
        <Footer onSelectTab={(tab) => setActiveTab(tab as any)} />
      </div>
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
