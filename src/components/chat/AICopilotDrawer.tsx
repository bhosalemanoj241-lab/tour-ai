import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  ArrowRight,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Copy,
  Check,
  ExternalLink,
  Compass
} from 'lucide-react';
import {
  AIChatMessage,
  queryGlobalTourismAI
} from '../../services/globalTourismAI';
import { MarkdownText } from './MarkdownText';
import { DestinationSnapshotCard } from './DestinationSnapshotCard';

interface AICopilotDrawerProps {
  onSelectDestinationById?: (id: string) => void;
  onNavigateToFullAI?: () => void;
  isOpenControlled?: boolean;
  onCloseControlled?: () => void;
}

export const AICopilotDrawer: React.FC<AICopilotDrawerProps> = ({
  onSelectDestinationById,
  onNavigateToFullAI,
  isOpenControlled,
  onCloseControlled,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState<boolean>(false);
  const isOpen = isOpenControlled !== undefined ? isOpenControlled : internalIsOpen;
  const setIsOpen = (val: boolean) => {
    if (onCloseControlled && !val) {
      onCloseControlled();
    }
    setInternalIsOpen(val);
  };

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [isThinking, setIsThinking] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [speakingId, setSpeakingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: `### ✈️ Hi, I'm TourAI!
Your intelligent travel assistant. Ask me anything about Indian destinations: **custom itineraries, budgets, best seasons, offbeat hidden gems, or local food!**`,
      timestamp: 'Just now',
      quickSuggestions: [
        'Best 4 days in Manali on ₹15K',
        'Compare Goa vs Gokarna for couples',
        'Top offbeat spots in Himachal',
        'Authentic Rajasthani food trail'
      ]
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking, isOpen]);

  // Speech Recognition setup
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('Speech recognition is not supported in this browser.');
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

  const toggleSpeech = (id: string, text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[#*|_\-`]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.onend = () => setSpeakingId(null);
    utterance.onerror = () => setSpeakingId(null);

    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

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
      const aiReply = await queryGlobalTourismAI(text, messages);
      setMessages((prev) => [...prev, aiReply]);
    } catch (e: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: 'err-' + Date.now(),
          sender: 'assistant',
          text: `I had trouble connecting. Here is a quick travel tip: check your destination seasonality and always carry a universal adapter!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <>
      {/* Floating Action Button: "Ask TourAI" - positioned above bottom navigation on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-40 px-3.5 py-2.5 sm:px-5 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-display font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(6,182,212,0.4)] hover:shadow-cyan-500/50 transition-all flex items-center gap-2 active:scale-95 group"
        aria-label="Open AI Copilot"
      >
        <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
        <span className="hidden xs:inline">Ask TourAI Copilot</span>
        <span className="xs:hidden">TourAI</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </button>

      {/* Floating Chat Drawer & Mobile Backdrop */}
      {isOpen && (
        <>
          {/* Mobile Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 sm:hidden animate-fadeIn"
            onClick={() => setIsOpen(false)}
          />

          <div
            className={`fixed z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-fadeIn transition-all duration-300 ${
              isExpanded
                ? 'inset-x-0 bottom-0 top-6 sm:inset-6 md:inset-10'
                : 'inset-x-0 bottom-0 top-14 sm:top-auto sm:inset-auto sm:bottom-20 sm:right-6 sm:w-[440px] h-[calc(100dvh-56px)] sm:h-[580px] max-h-[100dvh] sm:max-h-[78vh]'
            }`}
          >
            {/* Mobile Drag Handle */}
            <div className="w-12 h-1 rounded-full bg-slate-300 dark:bg-slate-700/60 mx-auto mt-2 sm:hidden shrink-0" />

            {/* Header */}
            <div className="p-3.5 sm:p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/90 dark:bg-slate-900/80 backdrop-blur-md shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white dark:text-slate-950 flex items-center justify-center font-bold shadow-xs">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      TourAI Copilot
                    </h4>
                    <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30">
                      Live
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Indian Tourism Intelligence</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Fullscreen AI Studio Shortcut */}
                {onNavigateToFullAI && (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onNavigateToFullAI();
                    }}
                    className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Open Fullscreen AI Studio"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                )}

                {/* Expand / Minimize */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="hidden sm:block p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  title={isExpanded ? 'Restore Size' : 'Maximize'}
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                {/* Close */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close Chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3.5 custom-scrollbar text-xs bg-slate-50/70 dark:bg-slate-950/60">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'assistant' && (
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-sky-600 to-blue-600 dark:from-cyan-500 dark:to-blue-600 text-white dark:text-slate-950 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                      AI
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] sm:max-w-[80%] p-3.5 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-tr-none font-medium shadow-sm'
                        : 'bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-800 shadow-sm'
                    }`}
                  >
                    {msg.sender === 'user' ? (
                      <p className="text-xs">{msg.text}</p>
                    ) : (
                      <div className="space-y-2">
                        <MarkdownText content={msg.text} />

                        {msg.snapshot && (
                          <DestinationSnapshotCard
                            snapshot={msg.snapshot}
                            onActionClick={(prompt) => handleSend(prompt)}
                          />
                        )}

                        {/* Tool bar */}
                        <div className="pt-1.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                          <span>{msg.timestamp}</span>
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => toggleSpeech(msg.id, msg.text)}
                              className="p-1 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
                              title="Read Aloud"
                            >
                              {speakingId === msg.id ? (
                                <VolumeX className="w-3 h-3 text-sky-600 dark:text-cyan-400" />
                              ) : (
                                <Volume2 className="w-3 h-3" />
                              )}
                            </button>
                            <button
                              onClick={() => handleCopy(msg.id, msg.text)}
                              className="p-1 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
                              title="Copy"
                            >
                              {copiedId === msg.id ? (
                                <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Quick suggestion pills */}
                    {msg.sender === 'assistant' && msg.quickSuggestions && msg.quickSuggestions.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-1">
                        {msg.quickSuggestions.map((sug, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleSend(sug)}
                            className="text-[10px] px-2.5 py-1 rounded-full bg-slate-100 hover:bg-sky-50 text-sky-800 border border-slate-200 hover:border-sky-300 dark:bg-slate-800 dark:hover:bg-cyan-950 dark:text-cyan-300 dark:border-slate-700 dark:hover:border-cyan-500/40 font-medium transition-colors text-left"
                          >
                            "{sug}"
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isThinking && (
                <div className="flex gap-2 items-center text-xs text-slate-500 dark:text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-sky-600 dark:bg-cyan-400 animate-bounce" />
                  <span>TourAI is analyzing 69 Indian destinations...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick preset topics */}
            <div className="px-3 py-1.5 border-t border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/60 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
              {['Manali 🏔️', 'Goa 🌴', 'Kerala 🍃', 'Jaipur 🏰', 'Varanasi 🛕', 'Ladakh ❄️'].map((dest, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(`Tell me all about traveling to ${dest}`)}
                  className="shrink-0 text-[10px] px-2.5 py-1 rounded-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-sky-400 font-medium transition-colors shadow-2xs"
                >
                  {dest}
                </button>
              ))}
            </div>

            {/* Chat Input Bar with Safe-area padding */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-2.5 sm:p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-1.5 pb-safe shrink-0"
            >
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2 rounded-xl transition-all ${
                  isListening ? 'bg-rose-500 text-white animate-pulse' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                }`}
                title="Voice Input"
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about itineraries, budgets, food..."
                className="flex-1 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-sky-500/30"
              />

              <button
                type="submit"
                disabled={!input.trim() || isThinking}
                className="p-2 rounded-xl bg-sky-600 hover:bg-sky-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-slate-950 disabled:opacity-40 transition-colors font-bold shadow-xs"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};
