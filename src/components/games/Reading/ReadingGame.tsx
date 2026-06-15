/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mic } from 'lucide-react';
import { motion } from 'motion/react';
import { GameContent, Language } from '../../../types';
import { soundService } from '../../../services/soundService';

interface GameProps {
  content: GameContent;
  language: Language;
  onCorrect: () => void;
  onWrong: (hint: string) => void;
}

export const ReadingGame = ({ content, language, onCorrect, onWrong }: GameProps) => {
  const [isListening, setIsListening] = useState(false);
  const [, setTranscript] = useState('');

  const startListening = () => {
    soundService.playClick();
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Hov! Din browser understøtter ikke stemmegenkendelse.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = language === 'Dansk' ? 'da-DK' : language === 'Engelsk' ? 'en-US' : language === 'Tysk' ? 'de-DE' : 'fr-FR';
    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript.toLowerCase();
      setTranscript(text);
      if (text.includes(content.answer.toLowerCase())) {
        onCorrect();
      } else {
        onWrong(`Du sagde: "${text}". Prøv at udtale det som: "${content.answer}"`);
      }
    };
    recognition.onend = () => setIsListening(false);
    recognition.start();
  };

  return (
    <div className="space-y-10 text-center">
      <div className="p-10 bg-white/60 backdrop-blur-md rounded-[3rem] border-4 border-dashed border-indigo-100 shadow-inner">
        <p className="text-4xl font-black text-indigo-900 leading-tight">
          {content.question}
        </p>
      </div>
      <div className="space-y-4">
        <motion.button
          animate={isListening ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
          transition={isListening ? { repeat: Infinity, duration: 2 } : {}}
          onClick={startListening}
          className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all ${
            isListening ? 'bg-rose-500 shadow-rose-200' : 'bg-indigo-600 shadow-indigo-200'
          } text-white`}
        >
          <Mic size={40} />
        </motion.button>
        <p className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-xs">
          {isListening ? 'Optager din stemme...' : 'Tryk på mikrofonen og læs højt'}
        </p>
      </div>
    </div>
  );
};
