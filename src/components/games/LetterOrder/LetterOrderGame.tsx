/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2 } from 'lucide-react';
import { GameContent, Language } from '../../../types';
import { soundService } from '../../../services/soundService';

interface GameProps {
  content: GameContent;
  language: Language;
  onCorrect: () => void;
  onWrong: (hint: string) => void;
}

export const LetterOrderGame = ({ content, language, onCorrect, onWrong }: GameProps) => {
  const [currentGuess, setCurrentGuess] = useState('');
  const [availableLetters, setAvailableLetters] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'wrong' | null>(null);

  const speak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(content.answer);
      utterance.rate = 0.8;
      utterance.lang = 
        language === 'Dansk' ? 'da-DK' : 
        language === 'Engelsk' ? 'en-US' : 
        language === 'Tysk' ? 'de-DE' : 
        language === 'Spansk' ? 'es-ES' : 
        'fr-FR';
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    // Scramble letters
    const letters = content.answer.split('').sort(() => Math.random() - 0.5);
    setAvailableLetters(letters);
    setCurrentGuess('');
    
    // Auto-play after a short delay
    const timer = setTimeout(() => {
      speak();
    }, 500);
    return () => clearTimeout(timer);
  }, [content.answer]);

  const handleLetterClick = (letter: string, index: number) => {
    soundService.playClick();
    const nextGuess = currentGuess + letter;
    
    // Check if progress is correct so far
    if (content.answer.startsWith(nextGuess)) {
      setCurrentGuess(nextGuess);
      const newAvailable = [...availableLetters];
      newAvailable.splice(index, 1);
      setAvailableLetters(newAvailable);

      if (nextGuess === content.answer) {
        setTimeout(onCorrect, 500);
      }
    } else {
      setFeedback('wrong');
      onWrong(`Hov! Det var ikke det rigtige bogstav.`);
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const handleReset = () => {
    soundService.playClick();
    setAvailableLetters(content.answer.split('').sort(() => Math.random() - 0.5));
    setCurrentGuess('');
  };

  return (
    <div className="space-y-12 text-center">
      <div className="space-y-6">
        <div className="flex flex-col items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={speak}
            className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors"
          >
            <Volume2 size={40} />
          </motion.button>
          <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">
            {content.question}
          </h3>
        </div>
        <div className="min-h-[80px] md:min-h-[100px] flex flex-wrap items-center justify-center gap-2 md:gap-4 px-2">
          <AnimatePresence>
            {currentGuess.split('').map((char, i) => (
              <motion.div
                key={`${char}-${i}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-10 h-14 md:w-16 md:h-20 bg-white shadow-xl rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-4xl font-black text-indigo-900 border-b-4 md:border-b-8 border-indigo-200"
              >
                {char}
              </motion.div>
            ))}
            {Array.from({ length: content.answer.length - currentGuess.length }).map((_, i) => (
              <div key={`empty-${i}`} className="w-10 h-14 md:w-16 md:h-20 bg-slate-100/50 rounded-xl md:rounded-2xl border-2 border-dashed border-slate-300" />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-2xl mx-auto px-2">
        <AnimatePresence>
          {availableLetters.map((letter, i) => (
            <motion.button
              key={`${letter}-${i}`}
              layout
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleLetterClick(letter, i)}
              className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black shadow-lg transition-colors bg-white hover:bg-indigo-50 border-2 border-transparent hover:border-indigo-200 text-indigo-600`}
            >
              {letter}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {currentGuess.length > 0 && (
        <button 
          onClick={handleReset}
          className="text-indigo-400 font-bold hover:text-indigo-600 transition-colors uppercase text-sm tracking-widest"
        >
          Start forfra
        </button>
      )}
    </div>
  );
};
