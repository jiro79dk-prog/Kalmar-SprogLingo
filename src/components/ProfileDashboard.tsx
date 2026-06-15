/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  TrendingUp, 
  Flame, 
  Calendar,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { ACHIEVEMENTS } from '../constants';
import { Language } from '../types';

interface ProfileDashboardProps {
  userName: string;
  userAvatar: string;
  scores: Record<Language, number>;
  streak: number;
  history: any[];
  achievements: string[];
  isDarkMode: boolean;
}

export const ProfileDashboard = ({
  userName,
  userAvatar,
  scores,
  streak,
  history,
  achievements,
  isDarkMode
}: ProfileDashboardProps) => {
  // Process history for chart
  const chartData = history.slice(-7).map(entry => ({
    name: entry.date.split('-').slice(1).join('/'),
    score: entry.score,
    lang: entry.language
  }));

  const totalPoints = Object.values(scores).reduce((a, b) => a + b, 0);
  const currentLevel = Math.floor(Math.sqrt(totalPoints / 10)) + 1;
  const nextLevelPoints = Math.pow(currentLevel, 2) * 10;
  const prevLevelPoints = Math.pow(currentLevel - 1, 2) * 10;
  const progress = ((totalPoints - prevLevelPoints) / (nextLevelPoints - prevLevelPoints)) * 100;

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div 
          whileHover={{ y: -5 }}
          className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-white'} shadow-sm flex items-center gap-4`}
        >
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center">
            <Flame size={24} fill="currentColor" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Dags Streak</p>
            <p className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>{streak} Dage</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-white'} shadow-sm flex items-center gap-4`}
        >
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Level</p>
            <p className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>{currentLevel}</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-white'} shadow-sm flex items-center gap-4`}
        >
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
            <CheckCircle2 size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Point</p>
            <p className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>{totalPoints}</p>
          </div>
        </motion.div>
      </div>

      {/* Level bar */}
      <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-white'} shadow-sm`}>
        <div className="flex justify-between items-end mb-4">
          <div>
            <h4 className={`text-lg font-black ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>Level Progress</h4>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Næste level ved {nextLevelPoints} point</p>
          </div>
          <span className="text-sm font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Level {currentLevel}</span>
        </div>
        <div className={`h-4 w-full ${isDarkMode ? 'bg-slate-900' : 'bg-indigo-50'} rounded-full overflow-hidden`}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-indigo-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Progress Chart */}
        <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-white'} shadow-sm`}>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp size={20} className="text-indigo-500" />
            <h4 className={`font-black uppercase tracking-widest text-sm ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>Læringskurve</h4>
          </div>
          <div className="h-[250px] w-full">
            {chartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#334155' : '#e2e8f0'} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: isDarkMode ? '#94a3b8' : '#64748b' }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: isDarkMode ? '#94a3b8' : '#64748b' }} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '16px', 
                      border: 'none', 
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      backgroundColor: isDarkMode ? '#1e293b' : '#ffffff'
                    }}
                  />
                  <Area type="monotone" dataKey="score" stroke="#4f46e5" fillOpacity={1} fill="url(#colorScore)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-2">
                  <Clock size={32} strokeWidth={1} />
                  <p className="text-xs font-bold uppercase tracking-widest">Ingen data endnu</p>
                </div>
            )}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className={`p-6 rounded-3xl border ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-white'} shadow-sm`}>
          <div className="flex items-center gap-3 mb-6">
            <Trophy size={20} className="text-yellow-500" />
            <h4 className={`font-black uppercase tracking-widest text-sm ${isDarkMode ? 'text-white' : 'text-indigo-900'}`}>Badges & Achievements</h4>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {ACHIEVEMENTS.map(achievement => {
              const isUnlocked = achievements.includes(achievement.id);
              return (
                <motion.div
                  key={achievement.id}
                  whileHover={isUnlocked ? { scale: 1.05 } : {}}
                  className={`p-4 rounded-2xl border text-center transition-all ${
                    isUnlocked 
                      ? isDarkMode ? 'bg-indigo-950/30 border-indigo-900' : 'bg-indigo-50 border-indigo-100 shadow-sm'
                      : isDarkMode ? 'bg-slate-900 border-slate-800 opacity-40 grayscale' : 'bg-slate-50 border-slate-100 opacity-40 grayscale'
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <p className={`text-[10px] font-black uppercase tracking-tighter truncate ${isDarkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                    {achievement.title}
                  </p>
                  <p className="text-[8px] font-bold text-slate-400 leading-tight mt-1">
                    {achievement.condition}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
