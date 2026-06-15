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
      instruction: `Sortiere die Wörter in ${categories.join(', ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const TYSK_WORDSORT_P3: Partial<Record<Grade, GameContent[]>> = {
  6: generateWordSort('de6-ws', 100, ['Präsens', 'Präteritum'], [
    [
      { word: 'Ich esse', cat: 'Präsens' }, { word: 'Ich aß', cat: 'Präteritum' }, { word: 'Er geht', cat: 'Präsens' }, 
      { word: 'Er ging', cat: 'Präteritum' }, { word: 'Wir sind', cat: 'Präsens' }, { word: 'Wir waren', cat: 'Präteritum' }
    ]
  ]),
  7: generateWordSort('de7-ws', 100, ['Positiv', 'Negativ'], [
    [
      { word: 'Toll', cat: 'Positiv' }, { word: 'Schrecklich', cat: 'Negativ' }, { word: 'Schön', cat: 'Positiv' }, 
      { word: 'Hässlich', cat: 'Negativ' }, { word: 'Froh', cat: 'Positiv' }, { word: 'Traurig', cat: 'Negativ' }
    ]
  ])
};
