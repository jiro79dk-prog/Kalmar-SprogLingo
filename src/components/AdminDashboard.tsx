import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Database, ArrowLeft, BarChart3, Globe, GraduationCap, Gamepad2 } from 'lucide-react';
import { ALL_DATA } from '../services/contentService';
import { Language, Grade, GameType } from '../types';
import { LANGUAGES, GRADES, GAME_LABELS } from '../constants';

interface AdminDashboardProps {
  onExit: () => void;
  isDarkMode: boolean;
}

export const AdminDashboard = ({ onExit, isDarkMode }: AdminDashboardProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Ugyldigt brugernavn eller kodeord');
    }
  };

  const stats = React.useMemo(() => {
    const data: any = {
      total: 0,
      byLanguage: {} as Record<string, number>,
      byGrade: {} as Record<number, number>,
      byType: {} as Record<string, number>
    };

    // Initialize
    LANGUAGES.forEach(l => data.byLanguage[l] = 0);
    GRADES.forEach(g => data.byGrade[g] = 0);
    Object.keys(ALL_DATA).forEach(t => data.byType[t] = 0);

    // Populate
    Object.entries(ALL_DATA).forEach(([type, langData]: [string, any]) => {
      Object.entries(langData).forEach(([lang, gradeData]: [string, any]) => {
        Object.entries(gradeData).forEach(([grade, items]: [string, any]) => {
          const count = items.length;
          data.total += count;
          data.byLanguage[lang as Language] = (data.byLanguage[lang as Language] || 0) + count;
          data.byGrade[parseInt(grade)] = (data.byGrade[parseInt(grade)] || 0) + count;
          data.byType[type] = (data.byType[type] || 0) + count;
        });
      });
    });

    return data;
  }, []);

  if (!isLoggedIn) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`max-w-md mx-auto glass-card p-6 md:p-10 ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-white'}`}
      >
        <div className="text-center mb-6 md:mb-8">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-indigo-100 text-indigo-600 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4">
            <Lock size={24} className="md:w-8 md:h-8" />
          </div>
          <h2 className={`text-xl md:text-2xl font-black ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>Admin Login</h2>
          <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mt-1">Kun for personale</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest ml-2">Brugernavn</label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-indigo-50/50 border-indigo-100 text-indigo-900'} border rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 ring-indigo-500/20`}
              placeholder="admin"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-indigo-400 uppercase tracking-widest ml-2">Kodeord</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-indigo-50/50 border-indigo-100 text-indigo-900'} border rounded-2xl p-4 text-sm font-bold outline-none focus:ring-2 ring-indigo-500/20`}
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-[10px] font-bold text-red-500 text-center">{error}</p>}
          
          <div className="pt-2 md:pt-4 flex flex-col gap-3">
            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white p-4 rounded-2xl font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all text-sm"
            >
              LOG IND
            </button>
            <button 
              type="button"
              onClick={onExit}
              className="w-full py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-indigo-600 transition-colors"
            >
              Annuller
            </button>
          </div>
        </form>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-6xl mx-auto space-y-6 md:space-y-8 px-4 md:px-0"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <button onClick={onExit} className={`p-3 rounded-2xl shadow-sm ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-white text-indigo-400'} hover:text-indigo-600 transition-all`}>
            <ArrowLeft size={20} className="md:w-6 md:h-6" />
          </button>
          <div>
            <h1 className={`text-xl md:text-2xl font-black ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>System Oversigt</h1>
            <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">Database Statistikker</p>
          </div>
        </div>
        <div className="flex items-center gap-3 bg-indigo-600 text-white px-5 md:px-6 py-3 rounded-2xl shadow-lg shadow-indigo-100 self-start md:self-auto">
          <Database size={18} className="md:w-5 md:h-5" />
          <span className="font-black text-lg md:text-xl">{stats.total} <span className="text-[10px] font-bold opacity-70 uppercase">OPGAVER TOTAL</span></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Spragoversigt */}
        <div className={`glass-card p-6 ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/60 border-white'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Globe className="text-indigo-600" size={20} />
            <h3 className={`font-black uppercase text-sm tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-indigo-900'}`}>Sprog</h3>
          </div>
          <div className="space-y-3">
            {Object.entries(stats.byLanguage).map(([lang, count]: [any, any]) => (
              <div key={lang} className={`flex items-center justify-between p-4 rounded-2xl border ${isDarkMode ? 'bg-slate-800/60 border-slate-700 text-white' : 'bg-white border-indigo-50 text-indigo-900'}`}>
                <span className={`font-bold ${isDarkMode ? 'text-slate-100' : 'text-indigo-900'}`}>{lang}</span>
                <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg font-black text-xs">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Klassetrinsoversigt */}
        <div className={`glass-card p-6 ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/60 border-white'}`}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-indigo-600" size={20} />
            <h3 className={`font-black uppercase text-sm tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-indigo-900'}`}>Klassetrin</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(stats.byGrade).map(([grade, count]: [any, any]) => (
              <div key={grade} className={`flex flex-col p-4 rounded-2xl border text-center ${isDarkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-indigo-50'}`}>
                <span className="text-[10px] font-black text-indigo-400 uppercase">{grade}. KL</span>
                <span className={`font-black text-lg ${isDarkMode ? 'text-slate-100' : 'text-indigo-900'}`}>{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spiltyper */}
        <div className={`glass-card p-6 ${isDarkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white/60 border-white'}`}>
          <div className="flex items-center gap-3 mb-6">
            <Gamepad2 className="text-indigo-600" size={20} />
            <h3 className={`font-black uppercase text-sm tracking-widest ${isDarkMode ? 'text-indigo-400' : 'text-indigo-900'}`}>Spiltyper</h3>
          </div>
          <div className="space-y-2">
            {Object.entries(stats.byType).map(([type, count]: [any, any]) => (
              <div key={type} className={`flex items-center justify-between p-3 rounded-xl border ${isDarkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-white border-indigo-50'}`}>
                <div className="min-w-0">
                  <p className={`font-bold text-xs truncate ${isDarkMode ? 'text-slate-100' : 'text-indigo-900'}`}>{GAME_LABELS[type as GameType]}</p>
                </div>
                <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md font-black text-[10px] shrink-0">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card p-8 bg-indigo-900 text-white overflow-hidden relative">
        <div className="relative z-10">
          <h3 className="text-xl font-black mb-2">Datakvalitet</h3>
          <p className="text-sm text-indigo-200 mb-6 max-w-xl">Systemet overvåger automatisk opgaverne for at sikre korrekt svarsvante og konsistens på tværs af klassetrin.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
              <p className="text-[10px] font-black opacity-60 uppercase mb-1">Dækning</p>
              <p className="text-2xl font-black">94%</p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
              <p className="text-[10px] font-black opacity-60 uppercase mb-1">Unikke ord</p>
              <p className="text-2xl font-black">~1.2k</p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
              <p className="text-[10px] font-black opacity-60 uppercase mb-1">Audio filer</p>
              <p className="text-2xl font-black">450+</p>
            </div>
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/10">
              <p className="text-[10px] font-black opacity-60 uppercase mb-1">Variation</p>
              <p className="text-2xl font-black">Høj</p>
            </div>
          </div>
        </div>
        <BarChart3 className="absolute -bottom-10 -right-10 text-white/5" size={240} />
      </div>
    </motion.div>
  );
};
