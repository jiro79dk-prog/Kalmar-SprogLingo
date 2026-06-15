/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

const generateWordSort = (idPrefix: string, count: number, categories: string[], groups: {word: string, cat: string}[][]): GameContent[] => {
  return Array.from({ length: count }, (_, i) => {
    const group = groups[i % groups.length];
    const context = group.map(item => `${item.word}:${item.cat}`).join('|');
    return {
      id: `${idPrefix}-${i}`,
      type: 'WordSort',
      instruction: `Sort the words into ${categories.join(', ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const ENGELSK_WORDSORT_P4: Partial<Record<Grade, GameContent[]>> = {
  8: generateWordSort('en8-ws', 100, ['Formal', 'Informal'], [
    [
      { word: 'Purchase', cat: 'Formal' }, { word: 'Buy', cat: 'Informal' }, { word: 'Inform', cat: 'Formal' },
      { word: 'Tell', cat: 'Informal' }, { word: 'Apologize', cat: 'Formal' }, { word: 'Say sorry', cat: 'Informal' }
    ],
    [
      { word: 'Request', cat: 'Formal' }, { word: 'Ask', cat: 'Informal' }, { word: 'Inquire', cat: 'Formal' },
      { word: 'Ask about', cat: 'Informal' }, { word: 'Terminate', cat: 'Formal' }, { word: 'End', cat: 'Informal' }
    ]
  ]),
  9: generateWordSort('en9-ws', 100, ['Nouns', 'Adjectives', 'Adverbs'], [
    [
      { word: 'Happiness', cat: 'Nouns' }, { word: 'Happy', cat: 'Adjectives' }, { word: 'Happily', cat: 'Adverbs' },
      { word: 'Quickness', cat: 'Nouns' }, { word: 'Quick', cat: 'Adjectives' }, { word: 'Quickly', cat: 'Adverbs' }
    ],
    [
      { word: 'Beauty', cat: 'Nouns' }, { word: 'Beautiful', cat: 'Adjectives' }, { word: 'Beautifully', cat: 'Adverbs' },
      { word: 'Silent', cat: 'Adjectives' }, { word: 'Silently', cat: 'Adverbs' }, { word: 'Silence', cat: 'Nouns' }
    ]
  ])
};
