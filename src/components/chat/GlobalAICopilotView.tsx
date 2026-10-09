import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Bot,
  Send,
  User,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Download,
  Trash2,
  Key,
  Globe2,
  Compass,
  ArrowRight,
  Bookmark,
  Calendar,
  Wallet,
  Shield,
  Utensils,
  MapPin,
  HelpCircle,
  X,
  Layers,
  ChevronDown
} from 'lucide-react';
import {
  AIChatMessage,
  queryGlobalTourismAI,
  GLOBAL_TOURISM_DATABASE,
  getSavedApiKey,
  saveApiKey,
  clearApiKey,
  DestinationSnapshot
} from '../../services/globalTourismAI';
import { MarkdownText } from './MarkdownText';
import { DestinationSnapshotCard } from './DestinationSnapshotCard';
import { Destination } from '../../types/travel';

interface GlobalAICopilotViewProps {
  onSelectDestination?: (dest: Destination) => void;
  onSaveTrip?: (dest: Destination) => void;
  savedTrips?: Destination[];
  initialPrompt?: string;
}

export const GlobalAICopilotView: React.FC<GlobalAICopilotViewProps> = ({
  onSelectDestination,
  onSaveTrip,
  savedTrips = [],
  initialPrompt = '',
}) => {
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `### 🌍 Welcome to Travelora Global Tourism AI!
I am your worldwide travel intelligence copilot. I provide complete, real-time details for all **195+ countries**, iconic landmarks, secret valleys, visas, budgets, and culinary scenes.

**What would you like to explore today?**`,
      timestamp: 'Just now',
      quickSuggestions: [
        'Plan a 5-day trip to Japan on a budget',
        'Compare Bali vs Thailand for December',
        'Complete Schengen visa guide',
        'Top hidden gems in Switzerland',
        'Best street food in Bangkok & Hanoi'
      ]
    }
  ]);

  const [input, setInput] = useState<string>(initialPrompt);
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showKeyModal, setShowKeyModal] = useState<boolean>(false);
  const [apiKeyInput, setApiKeyInput] = useState<string>('');
  const [hasCustomKey, setHasCustomKey] = useState<boolean>(!!getSavedApiKey());

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  // Handle initial prompt if passed
  useEffect(() => {
    if (initialPrompt && initialPrompt.trim()) {
      handleSend(initialPrompt);
    }
  }, [initialPrompt]);

  // Speech Recognition Setup (Web Speech API)
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  // Text to Speech (SpeechSynthesis API)
  const toggleSpeech = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in your browser.');
      return;
    }

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Strip markdown formatting for cleaner speech
    const cleanText = text
      .replace(/[#*|_\-`]/g, '')
      .replace(/\[.*?\]/g, '')
      .replace(/\(.*?\)/g, '')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  // Copy Message to Clipboard
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Send Message
  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    if (speakingId) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
    }

    const userMsg: AIChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    try {
      const response = await queryGlobalTourismAI(text, messages);
      setMessages((prev) => [...prev, response]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: 'err-' + Date.now(),
          sender: 'assistant',
          text: `⚠️ **Travelora AI Encountered an Issue:** ${err.message || 'Please check your connection and try again.'}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  // Export conversation as text file
  const handleExportChat = () => {
    const chatContent = messages
      .map((m) => `[${m.timestamp}] ${m.sender.toUpperCase()}:\n${m.text}\n`)
      .join('\n---\n\n');

    const blob = new Blob([chatContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Travelora-AI-Tourism-Guide-${new Date().toISOString().slice(0, 10)}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Clear Chat
  const handleClearChat = () => {
    if (confirm('Clear current AI conversation history?')) {
      setMessages([
        {
          id: 'welcome-reset',
          sender: 'assistant',
          text: 'Chat cleared! What destination or travel inquiry can I help you explore next?',
          timestamp: 'Just now',
          quickSuggestions: [
            'Plan 5 days in Italy (Rome & Florence)',
            'Top uncrowded beaches in Greece',
            'Backpacking budget for Thailand',
            'Compare Japan vs South Korea'
          ]
        }
      ]);
    }
  };

  // Save API Key
  const handleSaveApiKey = () => {
    if (apiKeyInput.trim()) {
      saveApiKey('gemini', apiKeyInput.trim());
      setHasCustomKey(true);
      setShowKeyModal(false);
      setApiKeyInput('');
    }
  };

  const handleRemoveApiKey = () => {
    clearApiKey();
    setHasCustomKey(false);
    setShowKeyModal(false);
  };

  // Quick Action Buttons
  const quickTools = [
    { label: '🗺️ Itinerary Builder', prompt: 'Create an optimized 5-day itinerary with daily activities and budgets for ' },
    { label: '💰 Budget Estimator', prompt: 'Give me a complete daily budget breakdown for ' },
    { label: '🛂 Visa & Entry', prompt: 'What are the visa and entry requirements for ' },
    { label: '💎 Secret Gems', prompt: 'What are the top secret hidden gems with 80% fewer tourists in ' },
    { label: '🍜 Local Food Guide', prompt: 'What are the must-taste dishes, street food spots, and dining rules in ' },
    { label: '⚖️ Compare Places', prompt: 'Compare the following two destinations side by side: ' },
  ];

  const destinationChips = [
    { name: 'Japan 🇯🇵', query: 'Tell me all about traveling to Japan with top sights, budget, and best seasons' },
    { name: 'France 🇫🇷', query: 'Complete travel guide to Paris and France with iconic sights and hidden gems' },
    { name: 'Italy 🇮🇹', query: 'Plan a 7-day classic Italy trip: Rome, Florence, and Amalfi Coast' },
    { name: 'Switzerland 🇨🇭', query: 'Switzerland trip guide: Interlaken, Zermatt, budgets, and Swiss Pass' },
    { name: 'Thailand 🇹🇭', query: 'Ultimate Thailand travel guide: Bangkok, Chiang Mai, Phuket, and street food' },
    { name: 'Bali 🇮🇩', query: 'Bali travel masterplan: Ubud, Nusa Penida, beaches, and secret waterfalls' },
    { name: 'Dubai 🇦🇪', query: '4-day Dubai and Abu Dhabi itinerary with desert safari and budget tips' },
    { name: 'Greece 🇬🇷', query: 'Santorini and Greek Islands itinerary with uncrowded spots and budgets' },
    { name: 'Iceland 🇮🇸', query: 'Iceland Ring Road and Golden Circle guide with Northern Lights and thermal spas' },
    { name: 'Vietnam 🇻🇳', query: 'Vietnam backpacking guide: Hanoi, Ha Long Bay, Hoi An, and food' },
    { name: 'Spain 🇪🇸', query: 'Spain itinerary: Barcelona, Madrid, Andalusia, tapas, and flamenco' },
    { name: 'India 🇮🇳', query: 'Guide to Ladakh, Rajasthan, and Kerala: culture, sights, and hidden gems' },
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-16 min-h-screen bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main Grid: Left Quick Tools / Shortcuts + Right Chat Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-[calc(100vh-130px)] min-h-[640px]">
          {/* LEFT SIDEBAR: Tools, Presets & Knowledge (Hidden on small mobile unless toggled) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col bg-white rounded-3xl border border-slate-200/90 shadow-sm p-5 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-travel-600 text-white flex items-center justify-center shadow-sm">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900">
                    World Tourism Hub
                  </h3>
                  <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    195+ Countries Online
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowKeyModal(true)}
                className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                title="AI Engine & API Settings"
              >
                <Key className={`w-3.5 h-3.5 ${hasCustomKey ? 'text-travel-600' : ''}`} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-3 space-y-5 custom-scrollbar pr-1">
              {/* Quick AI Tool Modes */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Quick AI Toolkits
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {quickTools.map((t, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(t.prompt)}
                      className="w-full text-left px-3 py-2 rounded-xl bg-slate-50 hover:bg-travel-50/70 border border-slate-200/60 hover:border-travel-300 text-xs font-medium text-slate-700 hover:text-travel-800 transition-all flex items-center justify-between group"
                    >
                      <span>{t.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Global Destinations */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Instant Destination Guides
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {destinationChips.map((dest, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(dest.query)}
                      className="px-2.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-travel-400 hover:bg-travel-50 text-slate-700 hover:text-travel-800 text-[11px] font-medium transition-colors shadow-2xs"
                    >
                      {dest.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Travel Questions */}
              <div className="space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Trending Prompts
                </span>
                <div className="space-y-1.5">
                  {[
                    'How to visit Switzerland on a budget with Swiss Pass?',
                    'Compare Bali vs Thailand for a couple trip',
                    '7-day solo backpacking route in Vietnam',
                    'Schengen visa requirements and document list',
                    'Secret uncrowded beaches in Greece',
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(p)}
                      className="w-full text-left p-2 rounded-xl bg-slate-50/60 hover:bg-slate-100 border border-slate-100 text-[11px] text-slate-600 hover:text-slate-900 transition-colors line-clamp-1"
                    >
                      "{p}"
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Footer Controls */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <button
                onClick={handleExportChat}
                className="flex items-center gap-1.5 hover:text-slate-800 font-medium transition-colors"
                title="Download Chat History"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Chat</span>
              </button>

              <button
                onClick={handleClearChat}
                className="flex items-center gap-1.5 hover:text-rose-600 font-medium transition-colors"
                title="Clear Chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* RIGHT MAIN CHAT STUDIO */}
          <div className="lg:col-span-8 flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden h-full">
            {/* Chat Studio Top Header */}
            <div className="px-4 sm:px-6 py-3.5 border-b border-slate-100 flex items-center justify-between bg-white/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-travel-700 via-travel-600 to-sky-400 text-white flex items-center justify-center shadow-md shadow-travel-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-display font-extrabold text-sm sm:text-base text-slate-900">
                      Global Tourism AI Copilot
                    </h2>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Live Travel Intelligence
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 hidden sm:block">
                    Ask anything about destinations, itineraries, budgets, visas, cuisines, or hidden spots
                  </p>
                </div>
              </div>

              {/* Action shortcuts */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportChat}
                  className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                  title="Export Chat History"
                >
                  <Download className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClearChat}
                  className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  title="Clear Chat"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 custom-scrollbar bg-slate-50/30">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-7 h-7 rounded-xl bg-travel-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[88%] sm:max-w-[82%] rounded-2xl p-4 transition-all ${
                      msg.sender === 'user'
                        ? 'bg-travel-600 text-white rounded-tr-none shadow-sm font-medium'
                        : 'bg-white text-slate-800 rounded-tl-none border border-slate-200/80 shadow-xs'
                    }`}
                  >
                    {msg.sender === 'user' ? (
                      <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                    ) : (
                      <div className="space-y-2">
                        <MarkdownText content={msg.text} />

                        {/* If a structured destination snapshot is available */}
                        {msg.snapshot && (
                          <DestinationSnapshotCard
                            snapshot={msg.snapshot}
                            onActionClick={(prompt) => handleSend(prompt)}
                            onSaveTrip={(name) => {
                              // If parent callback provided
                              alert(`Saved ${name} to your travel notes!`);
                            }}
                          />
                        )}

                        {/* Interactive message toolbar */}
                        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                          <span className="text-[10px]">{msg.timestamp}</span>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => toggleSpeech(msg.id, msg.text)}
                              className={`p-1.5 rounded-lg border transition-colors flex items-center gap-1 ${
                                speakingId === msg.id
                                  ? 'bg-travel-50 text-travel-700 border-travel-300 animate-pulse'
                                  : 'border-slate-100 hover:bg-slate-100 text-slate-500'
                              }`}
                              title={speakingId === msg.id ? 'Stop Speaking' : 'Read Aloud'}
                            >
                              {speakingId === msg.id ? (
                                <>
                                  <VolumeX className="w-3 h-3 text-travel-600" />
                                  <span className="text-[10px] font-medium">Stop</span>
                                </>
                              ) : (
                                <>
                                  <Volume2 className="w-3 h-3" />
                                  <span className="text-[10px] hidden sm:inline">Listen</span>
                                </>
                              )}
                            </button>

                            <button
                              onClick={() => handleCopy(msg.id, msg.text)}
                              className="p-1.5 rounded-lg border border-slate-100 hover:bg-slate-100 text-slate-500 transition-colors flex items-center gap-1"
                              title="Copy Text"
                            >
                              {copiedId === msg.id ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span className="text-[10px] text-emerald-600 font-semibold">Copied</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span className="text-[10px] hidden sm:inline">Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Follow-up question chips */}
                    {msg.sender === 'assistant' && msg.quickSuggestions && msg.quickSuggestions.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">
                          Suggested next steps:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.quickSuggestions.map((sug, sIdx) => (
                            <button
                              key={sIdx}
                              onClick={() => handleSend(sug)}
                              className="text-[11px] px-2.5 py-1 rounded-full bg-slate-50 hover:bg-travel-50 border border-slate-200 hover:border-travel-300 text-slate-700 hover:text-travel-800 font-medium transition-all"
                            >
                              "{sug}"
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isThinking && (
                <div className="flex gap-3 justify-start items-center">
                  <div className="w-7 h-7 rounded-xl bg-travel-600 text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none shadow-xs flex items-center gap-2 text-xs text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-travel-600 animate-bounce" />
                    <span className="w-2 h-2 rounded-full bg-travel-600 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 rounded-full bg-travel-600 animate-bounce [animation-delay:0.4s]" />
                    <span className="ml-1 font-medium text-slate-600">Travelora AI is exploring global databases...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Mobile quick destination bar */}
            <div className="lg:hidden px-3 py-1.5 border-t border-slate-100 bg-white flex overflow-x-auto gap-1.5 no-scrollbar">
              {destinationChips.slice(0, 6).map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(c.query)}
                  className="shrink-0 text-[10px] px-2 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 whitespace-nowrap"
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Chat Input Bar */}
            <div className="p-3 sm:p-4 border-t border-slate-100 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2 bg-slate-50 border border-slate-200/90 rounded-2xl p-1.5 focus-within:border-travel-500 focus-within:ring-2 focus-within:ring-travel-100 transition-all"
              >
                {/* Voice Input Mic Button */}
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`p-2 sm:p-2.5 rounded-xl transition-all ${
                    isListening
                      ? 'bg-rose-500 text-white animate-pulse shadow-md'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-200/50'
                  }`}
                  title={isListening ? 'Listening... click to stop' : 'Click to speak your question'}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    isListening
                      ? 'Listening to you speak...'
                      : 'Ask about any country, city, itinerary, budget, visa, food, or comparison...'
                  }
                  className="flex-1 bg-transparent text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none px-1"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isThinking}
                  className="p-2 sm:p-2.5 rounded-xl bg-travel-600 hover:bg-travel-700 disabled:opacity-40 text-white font-medium transition-all shadow-sm flex items-center justify-center shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* API Key Modal (Optional Live Gemini/OpenAI Configuration) */}
      {showKeyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 max-w-md w-full shadow-modal space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-travel-100 text-travel-700 flex items-center justify-center">
                  <Key className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900">
                    AI Engine Configuration
                  </h3>
                  <p className="text-[11px] text-slate-500">Live Gemini API or Built-In Tourism Engine</p>
                </div>
              </div>
              <button
                onClick={() => setShowKeyModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <p>
                Travelora AI is equipped with an <strong>encyclopedic built-in tourism engine</strong> covering 195+ countries out of the box with zero setup.
              </p>
              <p>
                If you wish to enable <strong>unlimited live generative reasoning</strong>, you can optionally paste your free Google Gemini API key below. It is saved purely inside your browser's localStorage.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-slate-700">
                Google Gemini API Key (Optional)
              </label>
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full text-xs p-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-travel-600"
              />
              <span className="text-[10px] text-slate-400 block">
                Get a free key from Google AI Studio (aistudio.google.com)
              </span>
            </div>

            <div className="pt-2 flex items-center justify-between">
              {hasCustomKey && (
                <button
                  onClick={handleRemoveApiKey}
                  className="text-xs text-rose-600 hover:underline font-medium"
                >
                  Reset to Built-in Engine
                </button>
              )}

              <div className="flex items-center gap-2 ml-auto">
                <button
                  onClick={() => setShowKeyModal(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveApiKey}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-travel-600 hover:bg-travel-700 rounded-xl transition-colors"
                >
                  Save Key
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
