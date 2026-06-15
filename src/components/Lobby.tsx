/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  BookOpen, 
  GraduationCap, 
  Settings,
  Link2,
  Volume2,
  Eye,
  Edit3,
  Layers,
  SortAsc,
  Brain,
  X,
  Lock,
  BarChart3,
  Gamepad2
} from 'lucide-react';
import { LANGUAGES, GRADES, GRADE_LABELS, GAME_LABELS, GAME_TYPES } from '../constants';
import { Language, Grade, GameType } from '../types';
import { getAvailableGameTypes } from '../services/contentService';
import { ProfileDashboard } from './ProfileDashboard';

const AVATARS = ['🦊', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐸', '🐙', '🦖', '🦄', '🐝', '🦋', '🐢', '🐍', '🐘', '🦒', '🦓', '🦩'];

const GAME_ICONS: Record<string, React.ReactNode> = {
  'Random': <Zap size={24} className="text-yellow-500 fill-yellow-200/50" />,
  'Grammar': <BookOpen size={24} className="text-indigo-500 fill-indigo-200/50" />,
  'Match': <Link2 size={24} className="text-pink-500 stroke-[2.5]" />,
  'Audio': <Volume2 size={24} className="text-blue-500 fill-blue-200/50" />,
  'Reading': <Eye size={24} className="text-emerald-500 fill-emerald-200/50" />,
  'Cloze': <Edit3 size={24} className="text-orange-500 fill-orange-200/50" />,
  'WordSort': <Layers size={24} className="text-purple-500 fill-purple-200/50" />,
  'LetterOrder': <SortAsc size={24} className="text-cyan-500 stroke-[2.5]" />,
  'Memory': <Brain size={24} className="text-rose-500 fill-rose-200/50" />
};

interface LobbyProps {
  currentLanguage: Language;
  setCurrentLanguage: (l: Language) => void;
  currentGrade: Grade;
  setCurrentGrade: (g: (prev: Grade) => Grade) => void;
  isChallengeMode: boolean;
  setIsChallengeMode: (v: boolean) => void;
  scores: Record<Language, number>;
  onStart: (type?: GameType | 'Random', grade?: Grade) => void;
  userName: string;
  setUserName: (n: string) => void;
  userAvatar: string;
  setUserAvatar: (a: string) => void;
  isOnboarded: boolean;
  setIsOnboarded: (v: boolean) => void;
  selectedGameType: GameType | 'Random';
  setSelectedGameType: (t: GameType | 'Random') => void;
  isDarkMode: boolean;
  onAdminClick: () => void;
  streak: number;
  history: any[];
  achievements: string[];
}

export const Lobby = ({
  currentLanguage,
  setCurrentLanguage,
  currentGrade,
  setCurrentGrade,
  isChallengeMode,
  setIsChallengeMode,
  scores,
  onStart,
  userName,
  setUserName,
  userAvatar,
  setUserAvatar,
  isOnboarded,
  setIsOnboarded,
  selectedGameType,
  setSelectedGameType,
  isDarkMode,
  onAdminClick,
  streak,
  history,
  achievements
}: LobbyProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState<'games' | 'profile'>('games');
  const [error, setError] = useState<string | null>(null);

  React.useEffect(() => {
    const handleToggle = () => setShowSettings(prev => !prev);
    window.addEventListener('toggle-settings', handleToggle);
    return () => window.removeEventListener('toggle-settings', handleToggle);
  }, []);

  if (!isOnboarded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl mx-auto px-4 md:px-0"
      >
        <div className="glass-card p-6 md:p-10 text-center space-y-6 md:space-y-8">
          <div className="space-y-4">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-100 rounded-2xl md:rounded-3xl flex items-center justify-center text-indigo-600 mx-auto animate-pulse">
              <GraduationCap size={32} className="md:w-10 md:h-10" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-indigo-900">Velkommen!</h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">Lad os få dig sat op, så opgaverne passer lige til dig.</p>
          </div>

          <div className="space-y-6 text-left">
            <div className="space-y-3">
              <label className="text-[10px] md:text-xs font-black uppercase text-indigo-400 tracking-widest pl-2">Vælg din avatar</label>
              <div className="grid grid-cols-5 md:grid-cols-5 gap-2 bg-white/40 p-2 md:p-3 rounded-2xl border-2 border-white">
                {AVATARS.map(a => (
                  <button
                    key={a}
                    onClick={() => setUserAvatar(a)}
                    className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-lg rounded-xl transition-all ${
                      userAvatar === a ? 'bg-indigo-600 shadow-md ring-2 ring-indigo-200 scale-110' : 'bg-white/40 hover:bg-white'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-indigo-400 tracking-widest pl-4">Hvad hedder du?</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={20} />
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Skriv dit navn..."
                  className="w-full bg-white/60 border-2 border-white focus:border-indigo-400 rounded-2xl py-4 pl-12 pr-4 text-indigo-900 font-bold outline-none transition-all placeholder:text-gray-400"
                />
              </div>
              {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-xs font-bold pl-4 mt-1">{error}</motion.p>}
            </div>

            <div className="space-y-4">
              <label className="text-xs font-black uppercase text-indigo-400 tracking-widest pl-4">Hvilket klassetrin går du i?</label>
              <div className="flex items-center justify-between bg-white/60 p-2 rounded-2xl border-2 border-white">
                <button 
                  onClick={() => setCurrentGrade(prev => Math.max(0, prev - 1) as Grade)}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm text-indigo-600 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="text-center">
                  <span className="text-2xl font-black text-indigo-600 block">{GRADE_LABELS[currentGrade]}</span>
                </div>
                <button 
                  onClick={() => setCurrentGrade(prev => Math.min(10, prev + 1) as Grade)}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm text-indigo-600 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (userName.trim()) {
                setIsOnboarded(true);
              } else {
                setError("Hov! Du skal lige skrive dit navn først.");
              }
            }}
            disabled={!userName.trim()}
            className="w-full bg-indigo-600 text-white p-5 rounded-[1.5rem] font-black text-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 disabled:opacity-50 disabled:grayscale transition-all flex items-center justify-center gap-3"
          >
            KOM I GANG <Play fill="currentColor" />
          </button>
        </div>
      </motion.div>
    );
  }

  const availableGames = getAvailableGameTypes(currentLanguage);

  const GameRow = ({ type, label, description, icon }: { type: GameType | 'Random', label: string, description: string, icon: React.ReactNode }) => {
    const [localGrade, setLocalGrade] = useState<Grade>(currentGrade);

    return (
      <div className={`flex flex-col sm:flex-row items-center gap-4 p-4 md:p-5 rounded-[2rem] border transition-all group shadow-sm ${
        isDarkMode ? 'bg-slate-800/40 border-slate-700/60 hover:bg-slate-800/60' : 'bg-white/60 border-white hover:bg-white'
      }`}>
        <div className="flex items-center gap-4 flex-1 min-w-0 w-full">
          <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all ${
            selectedGameType === type 
              ? 'bg-indigo-600 shadow-lg shadow-indigo-100 ring-4 ring-indigo-50/10' 
              : isDarkMode ? 'bg-slate-700 shadow-sm border border-slate-600' : 'bg-indigo-50 shadow-sm border border-indigo-100'
          }`}>
            {selectedGameType === type ? React.cloneElement(GAME_ICONS[type] as React.ReactElement, { className: 'text-white' }) : GAME_ICONS[type] || icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className={`font-black text-base md:text-lg truncate ${isDarkMode ? 'text-slate-100' : 'text-indigo-900'}`}>{label}</h3>
            <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-indigo-400'}`}>{description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className={`flex items-center gap-3 p-1 px-3 rounded-2xl shrink-0 h-12 md:h-14 border ${
            isDarkMode ? 'bg-slate-900/50 border-slate-700' : 'bg-indigo-50/50 border-indigo-100'
          }`}>
            <span className={`text-[9px] font-black uppercase tracking-widest ${isDarkMode ? 'text-slate-500' : 'text-indigo-300'}`}>KLASSE</span>
            <div className="flex items-center gap-2 md:gap-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLocalGrade(prev => Math.max(0, prev - 1) as Grade);
                }}
                className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-xl transition-all ${
                  isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-indigo-100 text-indigo-600 shadow-sm'
                }`}
              >
                <ChevronLeft size={16} />
              </button>
              
              <div className="w-5 md:w-6 text-center">
                <span className={`text-base md:text-lg font-black ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  {localGrade === 0 ? 'BH' : localGrade}
                </span>
              </div>

              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setLocalGrade(prev => Math.min(10, prev + 1) as Grade);
                }}
                className={`w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-xl transition-all ${
                  isDarkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-white hover:bg-indigo-100 text-indigo-600 shadow-sm'
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
    
          <button
            onClick={() => {
              onStart(type, localGrade);
            }}
            className="flex-1 sm:flex-none sm:w-28 md:w-32 h-12 md:h-14 bg-indigo-600 text-white rounded-2xl font-black text-xs md:text-sm shadow-xl shadow-indigo-100 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2 group-hover:bg-indigo-500"
          >
            <span>SPIL</span>
            <Play size={14} className="md:w-4 md:h-4" fill="currentColor" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      className="max-w-4xl mx-auto space-y-8"
    >
      <div className={`glass-card p-6 md:p-8 ${isDarkMode ? 'bg-slate-900/60' : 'bg-white/60'}`}>
        <div className={`flex flex-col md:flex-row items-center gap-6 mb-8 pb-8 border-b ${isDarkMode ? 'border-slate-800' : 'border-white'}`}>
          <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-tr from-indigo-500 to-indigo-700 rounded-[2.5rem] flex items-center justify-center text-4xl shadow-2xl shadow-indigo-200 border-4 border-white">
            {userAvatar}
          </div>
          <div className="text-center md:text-left flex-1">
            <p className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.3em] mb-1">DIN PROFIL</p>
            <h2 className={`text-3xl md:text-4xl font-black leading-none flex flex-wrap justify-center md:justify-start items-center gap-3 ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>
              {userName}
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                  isDarkMode ? 'text-slate-400 border-slate-700 bg-slate-800 hover:text-slate-200' : 'text-indigo-400 border-white bg-white/40 hover:text-indigo-600'
                }`}
              >
                Skift
              </button>
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
              {isChallengeMode && (
                <span className="bg-orange-500 px-4 py-1.5 rounded-full text-[10px] font-black text-white shadow-md animate-pulse uppercase tracking-widest flex items-center gap-2">
                  <Zap size={12} fill="currentColor" />
                  BOOST AKTIV
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-1 bg-indigo-50/50 p-1 rounded-xl border border-indigo-100/50">
              <button 
                onClick={() => setActiveTab('games')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === 'games' ? 'bg-indigo-600 text-white shadow-md' : 'text-indigo-400 hover:text-indigo-600'
                }`}
              >
                <Gamepad2 size={12} />
                Spil
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === 'profile' ? 'bg-indigo-600 text-white shadow-md' : 'text-indigo-400 hover:text-indigo-600'
                }`}
              >
                <BarChart3 size={12} />
                Profil
              </button>
            </div>
            
            {activeTab === 'games' && (
              <button
                onClick={() => setIsChallengeMode(!isChallengeMode)}
                className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 border ${
                  isChallengeMode 
                    ? 'bg-orange-500 text-white border-orange-600 shadow-md' 
                    : 'bg-white text-indigo-400 border-indigo-100 hover:border-indigo-300'
                }`}
              >
                <Zap size={12} className={isChallengeMode ? 'fill-current' : ''} />
                {isChallengeMode ? 'Udfordring aktiv' : 'Udfordring OFF'}
              </button>
            )}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'games' ? (
              <motion.div 
                key="games-tab"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="space-y-3"
              >
                <GameRow 
                  type="Random" 
                  label="Blandet Pose" 
                  description="Tilfældige udfordringer" 
                  icon={<Zap size={24} />} 
                />
                
                {availableGames.map(type => (
                  <div key={type}>
                    <GameRow 
                      type={type}
                      label={GAME_LABELS[type]}
                      description="Træn dine færdigheder"
                      icon={GAME_ICONS[type]}
                    />
                  </div>
                ))}
              </motion.div>
            ) : (
                <motion.div
                  key="profile-tab"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  <ProfileDashboard 
                    userName={userName}
                    userAvatar={userAvatar}
                    scores={scores}
                    history={history}
                    streak={streak}
                    achievements={achievements}
                    isDarkMode={isDarkMode}
                  />
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onAdminClick}
          className={`group flex items-center gap-2 py-4 px-8 text-[10px] font-black uppercase tracking-widest transition-all rounded-2xl border ${
            isDarkMode 
              ? 'text-slate-500 border-slate-800 hover:text-indigo-400 hover:border-indigo-900/30 bg-slate-900/40' 
              : 'text-indigo-300 border-indigo-50 hover:text-indigo-600 hover:bg-white/40'
          }`}
        >
          <Lock size={12} className="transition-transform group-hover:scale-110" />
          Admin Portal
        </button>
      </div>

      {showSettings && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={`glass-card p-6 overflow-hidden ${isDarkMode ? 'bg-slate-900/80 border-slate-800 text-white' : 'bg-white/80 border-white text-slate-800'}`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-black ${isDarkMode ? 'text-indigo-400' : 'text-indigo-900'}`}>Indstillinger</h3>
              <button onClick={() => setShowSettings(false)} className="text-xs font-bold text-indigo-400 hover:text-indigo-500 transition-colors">Luk</button>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-indigo-400 uppercase block mb-1">Skift avatar</label>
                <div className="flex flex-wrap gap-2">
                  {AVATARS.map(a => (
                    <button
                      key={a}
                      onClick={() => setUserAvatar(a)}
                      className={`w-9 h-9 flex items-center justify-center text-lg rounded-lg transition-all ${
                        userAvatar === a 
                          ? 'bg-indigo-600 shadow-md scale-110 text-white' 
                          : isDarkMode 
                            ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white' 
                            : 'bg-white hover:bg-indigo-50 border border-indigo-50 text-slate-800'
                      }`}
                    >
                      {a}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black text-indigo-400 uppercase block mb-1">Skift navn</label>
                  <input 
                    type="text" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}
                    className={`w-full rounded-lg p-2 text-sm font-bold outline-none border transition-all ${
                      isDarkMode 
                        ? 'bg-slate-800 border-slate-700 text-white focus:border-indigo-500' 
                        : 'bg-white border-indigo-100 text-indigo-900 focus:border-indigo-400'
                    }`}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black text-indigo-400 uppercase block mb-1">Skift niveau</label>
                  <select 
                    value={currentGrade} 
                    onChange={(e) => setCurrentGrade(() => parseInt(e.target.value) as Grade)}
                    className={`w-full rounded-lg p-2 text-sm font-bold outline-none border transition-all ${
                      isDarkMode 
                        ? 'bg-slate-800 border-slate-700 text-white focus:border-indigo-500' 
                        : 'bg-white border-indigo-100 text-indigo-900 focus:border-indigo-400'
                    }`}
                  >
                    {GRADES.map(g => (
                      <option 
                        key={g} 
                        value={g} 
                        className={isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-indigo-900'}
                      >
                        {GRADE_LABELS[g]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        )}
    </motion.div>
  );
};
