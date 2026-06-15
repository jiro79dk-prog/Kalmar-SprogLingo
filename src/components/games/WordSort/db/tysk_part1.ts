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
      instruction: `Sortiere die Wörter in ${categories.join(' und ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const TYSK_WORDSORT_P1: Partial<Record<Grade, GameContent[]>> = {
  3: generateWordSort('de3-ws', 50, ['Tiere', 'Essen'], [
    [
      { word: 'Hund', cat: 'Tiere' }, { word: 'Katze', cat: 'Tiere' }, { word: 'Apfel', cat: 'Essen' }, 
      { word: 'Banane', cat: 'Essen' }, { word: 'Pferd', cat: 'Tiere' }, { word: 'Brot', cat: 'Essen' }
    ]
  ]),
  4: generateWordSort('de4-ws', 50, ['Farben', 'Körper'], [
    [
      { word: 'Rot', cat: 'Farben' }, { word: 'Blau', cat: 'Farben' }, { word: 'Grün', cat: 'Farben' },
      { word: 'Hand', cat: 'Körper' }, { word: 'Fuß', cat: 'Körper' }, { word: 'Kopf', cat: 'Körper' }
    ]
  ])
};
