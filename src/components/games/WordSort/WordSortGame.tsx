/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GameContent } from '../../../types';
import { soundService } from '../../../services/soundService';

interface GameProps {
  content: GameContent;
  onCorrect: () => void;
  onWrong: (hint: string) => void;
}

interface Item {
  text: string;
  category: string;
}

export const WordSortGame = ({ content, onCorrect, onWrong }: GameProps) => {
  // Parse items from context: "word:category|word:category"
  const items: Item[] = content.context?.split('|').map(pair => {
    const [text, category] = pair.split(':');
    return { text, category };
  }) || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const currentItem = items[currentIndex];

  const handleSort = (category: string) => {
    if (!currentItem) return;
    soundService.playClick();

    if (category === currentItem.category) {
      setFeedback('correct');
      setTimeout(() => {
        setFeedback(null);
        if (currentIndex < items.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          onCorrect();
        }
      }, 500);
    } else {
      setFeedback('wrong');
      onWrong(`Hov! "${currentItem.text}" er et ${currentItem.category}.`);
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h3 className="text-lg md:text-2xl font-bold text-slate-400 uppercase tracking-widest mb-4">
          Sorter ordet
        </h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentItem?.text}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className={`text-3xl md:text-6xl font-black p-8 md:p-12 bg-white rounded-2xl md:rounded-[2rem] shadow-xl inline-block min-w-[200px] md:min-w-[300px] ${
              feedback === 'correct' ? 'bg-green-50 text-green-600' : 
              feedback === 'wrong' ? 'bg-red-50 text-red-600' : 'text-indigo-900'
            }`}
          >
            {currentItem?.text}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {content.options?.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSort(category)}
            className="p-4 md:p-8 bg-indigo-50 border-2 md:border-4 border-indigo-100 rounded-xl md:rounded-[2rem] text-sm md:text-xl font-black text-indigo-700 hover:bg-indigo-100 transition-colors"
          >
            {category}
          </motion.button>
        ))}
      </div>
      
      <div className="flex justify-center gap-2">
        {items.map((_, i) => (
          <div 
            key={i}
            className={`w-3 h-3 rounded-full ${i <= currentIndex ? 'bg-indigo-500' : 'bg-slate-200'}`}
          />
        ))}
      </div>
    </div>
  );
};
