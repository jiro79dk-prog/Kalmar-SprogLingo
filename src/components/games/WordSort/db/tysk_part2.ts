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

export const TYSK_WORDSORT_P2: Partial<Record<Grade, GameContent[]>> = {
  3: generateWordSort('de3-ws', 100, ['Der', 'Die', 'Das'], [
    [
      { word: 'Hund', cat: 'Der' }, { word: 'Katze', cat: 'Die' }, { word: 'Haus', cat: 'Das' }, 
      { word: 'Apfel', cat: 'Der' }, { word: 'Lampe', cat: 'Die' }, { word: 'Buch', cat: 'Das' }
    ]
  ]),
  4: generateWordSort('de4-ws', 100, ['Pronomen', 'Präpositionen'], [
    [
      { word: 'Ich', cat: 'Pronomen' }, { word: 'Du', cat: 'Pronomen' }, { word: 'In', cat: 'Präpositionen' }, 
      { word: 'Auf', cat: 'Präpositionen' }, { word: 'Er', cat: 'Pronomen' }, { word: 'Unter', cat: 'Präpositionen' }
    ]
  ]),
  5: generateWordSort('de5-ws', 100, ['Länder', 'Städte'], [
    [
      { word: 'Deutschland', cat: 'Länder' }, { word: 'Berlin', cat: 'Städte' }, { word: 'Österreich', cat: 'Länder' }, 
      { word: 'Wien', cat: 'Städte' }, { word: 'Schweiz', cat: 'Länder' }, { word: 'Zürich', cat: 'Städte' }
    ]
  ])
};
