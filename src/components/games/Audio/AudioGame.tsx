/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Volume2 } from 'lucide-react';
import { motion } from 'motion/react';
import { GameContent, Language } from '../../../types';
import { soundService } from '../../../services/soundService';

interface GameProps {
  content: GameContent;
  language: Language;
  onCorrect: () => void;
  onWrong: (hint: string) => void;
}

export const AudioGame = ({ content, language, onCorrect, onWrong }: GameProps) => {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(content.question);
    utterance.lang = 
      language === 'Dansk' ? 'da-DK' : 
      language === 'Engelsk' ? 'en-US' : 
      language === 'Tysk' ? 'de-DE' : 
      language === 'Spansk' ? 'es-ES' : 
      'fr-FR';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="space-y-8 text-center">
      <motion.button
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(99, 102, 241, 1)' }}
        whileTap={{ scale: 0.9 }}
        onClick={speak}
        className="mx-auto w-28 h-28 bg-gradient-to-tr from-indigo-500 to-purple-600 text-white rounded-[2.5rem] flex items-center justify-center shadow-xl hover:shadow-indigo-200"
      >
        <Volume2 size={48} />
      </motion.button>
      <p className="text-slate-400 font-bold tracking-wide uppercase text-xs">Tryk for at høre ordet</p>
      <div className="grid grid-cols-2 gap-6">
        {content.options?.map((opt) => (
          <button
            key={opt}
            onClick={() => {
              soundService.playClick();
              opt === content.answer ? onCorrect() : onWrong("Lyt grundigt igen!");
            }}
            className="p-8 bg-white/40 border-2 border-white rounded-[2rem] shadow-sm text-2xl font-black text-slate-600 backdrop-blur-sm hover:bg-white/80 transition-all"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};
