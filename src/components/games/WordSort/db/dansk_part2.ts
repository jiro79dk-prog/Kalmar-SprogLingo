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
      instruction: `Sorter ordene i ${categories.join(', ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const DANSK_WORDSORT_P2: Partial<Record<Grade, GameContent[]>> = {
  3: generateWordSort('da3-ws', 100, ['Navneord', 'Udsagnsord', 'Tillægsord'], [
    [
      { word: 'Kat', cat: 'Navneord' }, { word: 'Spiser', cat: 'Udsagnsord' }, { word: 'Sød', cat: 'Tillægsord' }, 
      { word: 'Hund', cat: 'Navneord' }, { word: 'Gør', cat: 'Udsagnsord' }, { word: 'Glad', cat: 'Tillægsord' }
    ],
    [
      { word: 'Bil', cat: 'Navneord' }, { word: 'Kører', cat: 'Udsagnsord' }, { word: 'Hurtig', cat: 'Tillægsord' }, 
      { word: 'Havet', cat: 'Navneord' }, { word: 'Bølger', cat: 'Udsagnsord' }, { word: 'Blåt', cat: 'Tillægsord' }
    ]
  ]),
  4: generateWordSort('da4-ws', 100, ['En-ord', 'Et-ord'], [
    [
      { word: 'Skole', cat: 'En-ord' }, { word: 'Hus', cat: 'Et-ord' }, { word: 'Dreng', cat: 'En-ord' }, 
      { word: 'Barn', cat: 'Et-ord' }, { word: 'Pære', cat: 'En-ord' }, { word: 'Æble', cat: 'Et-ord' }
    ],
    [
      { word: 'Kop', cat: 'En-ord' }, { word: 'Glas', cat: 'Et-ord' }, { word: 'Ske', cat: 'En-ord' }, 
      { word: 'Bestik', cat: 'Et-ord' }, { word: 'Væg', cat: 'En-ord' }, { word: ' Loft', cat: 'Et-ord' }
    ]
  ]),
  5: generateWordSort('da5-ws', 100, ['Land', 'By'], [
    [
      { word: 'Danmark', cat: 'Land' }, { word: 'København', cat: 'By' }, { word: 'Norge', cat: 'Land' }, 
      { word: 'Oslo', cat: 'By' }, { word: 'Tyskland', cat: 'Land' }, { word: 'Berlin', cat: 'By' }
    ],
    [
      { word: 'Sverige', cat: 'Land' }, { word: 'Stockholm', cat: 'By' }, { word: 'Frankrig', cat: 'Land' }, 
      { word: 'Paris', cat: 'By' }, { word: 'England', cat: 'Land' }, { word: 'London', cat: 'By' }
    ]
  ])
};
