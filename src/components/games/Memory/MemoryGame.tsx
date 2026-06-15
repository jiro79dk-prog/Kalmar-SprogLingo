/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GameContent } from '../../../types';
import { soundService } from '../../../services/soundService';

interface MemoryCard {
  id: string;
  content: string;
  type: 'word' | 'match';
  isFlipped: boolean;
  isMatched: boolean;
  pairId: string;
}

interface MemoryGameProps {
  content: GameContent;
  onComplete: (isCorrect: boolean) => void;
}

export const MemoryGame: React.FC<MemoryGameProps> = ({ content, onComplete }) => {
  const [cards, setCards] = useState<MemoryCard[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  useEffect(() => {
    // content.context will hold pairs like "Dog:hund|Cat:kat|..."
    if (content.context) {
      const pairs = content.context.split('|').map(p => p.split(':'));
      const initialCards: MemoryCard[] = [];
      
      pairs.forEach(([word, match], index) => {
        const pairId = `pair-${index}`;
        initialCards.push({
          id: `${pairId}-word`,
          content: word,
          type: 'word',
          isFlipped: false,
          isMatched: false,
          pairId
        });
        initialCards.push({
          id: `${pairId}-match`,
          content: match,
          type: 'match',
          isFlipped: false,
          isMatched: false,
          pairId
        });
      });

      // Shuffle
      setCards(initialCards.sort(() => Math.random() - 0.5));
    }
  }, [content]);

  const handleFlip = (index: number) => {
    if (flippedIndices.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

    soundService.playFlip();
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = newFlipped;
      
      if (cards[first].pairId === cards[second].pairId) {
        // Match!
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[first].isMatched = true;
          matchedCards[second].isMatched = true;
          setCards(matchedCards);
          setFlippedIndices([]);

          if (matchedCards.every(c => c.isMatched)) {
            onComplete(true);
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[first].isFlipped = false;
          resetCards[second].isFlipped = false;
          setCards(resetCards);
          setFlippedIndices([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 max-w-2xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{content.question}</h2>
        <p className="text-gray-600">{content.instruction}</p>
        <p className="mt-2 font-medium text-blue-600">Forsøg: {moves}</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 w-full">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative h-24 sm:h-32 perspective-1000 cursor-pointer"
            onClick={() => handleFlip(index)}
            whileHover={{ scale: card.isMatched ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence initial={false}>
              {!card.isFlipped && !card.isMatched ? (
                <motion.div
                  key="back"
                  className="absolute inset-0 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center border-4 border-white"
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-4xl text-white font-bold">?</span>
                </motion.div>
              ) : (
                <motion.div
                  key="front"
                  className={`absolute inset-0 ${card.isMatched ? 'bg-green-100 border-green-500' : 'bg-white border-blue-500'} rounded-xl shadow-lg flex items-center justify-center p-2 text-center border-4`}
                  initial={{ rotateY: -180 }}
                  animate={{ rotateY: 0 }}
                  exit={{ rotateY: -180 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className={`text-sm sm:text-base font-bold ${card.isMatched ? 'text-green-700' : 'text-blue-700'}`}>
                    {card.content}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
