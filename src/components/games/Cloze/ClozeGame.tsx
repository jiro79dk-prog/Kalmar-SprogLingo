/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { GameContent } from '../../../types';
import { soundService } from '../../../services/soundService';

interface GameProps {
  content: GameContent;
  onCorrect: () => void;
  onWrong: (hint: string) => void;
}

export const ClozeGame = ({ content, onCorrect, onWrong }: GameProps) => {
  return (
    <div className="space-y-6 md:space-y-10 text-center">
      <div className="p-6 md:p-10 bg-white/40 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] border border-white shadow-lg">
        <p className="text-xl md:text-3xl font-bold leading-relaxed text-slate-800">
          {content.question}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {content.options?.map((opt) => (
          <motion.button
            key={opt}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              soundService.playClick();
              opt === content.answer ? onCorrect() : onWrong("Det ord passer ikke helt ind.");
            }}
            className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl md:rounded-2xl font-black text-base md:text-xl shadow-lg hover:shadow-orange-200 transition-all"
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
