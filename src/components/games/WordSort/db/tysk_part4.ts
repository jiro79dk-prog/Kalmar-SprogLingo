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

export const TYSK_WORDSORT_P4: Partial<Record<Grade, GameContent[]>> = {
  8: generateWordSort('de8-ws', 100, ['Formell', 'Informell'], [
    [
      { word: 'Guten Tag', cat: 'Formell' }, { word: 'Hallo', cat: 'Informell' }, { word: 'Auf Wiedersehen', cat: 'Formell' }, 
      { word: 'Tschüss', cat: 'Informell' }, { word: 'Sehr geehrte Damen', cat: 'Formell' }, { word: 'Hi', cat: 'Informell' }
    ]
  ]),
  9: generateWordSort('de9-ws', 100, ['Nomen', 'Adjektive', 'Adverben'], [
    [
      { word: 'Schönheit', cat: 'Nomen' }, { word: 'Schön', cat: 'Adjektive' }, { word: 'Sehr', cat: 'Adverben' }, 
      { word: 'Schnelligkeit', cat: 'Nomen' }, { word: 'Schnell', cat: 'Adjektive' }, { word: 'Vielleicht', cat: 'Adverben' }
    ]
  ])
};
