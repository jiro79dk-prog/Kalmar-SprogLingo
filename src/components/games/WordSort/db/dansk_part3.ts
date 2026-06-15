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

export const DANSK_WORDSORT_P3: Partial<Record<Grade, GameContent[]>> = {
  6: generateWordSort('da6-ws', 100, ['Nutid', 'Datid', 'Førnutid'], [
    [
      { word: 'Løber', cat: 'Nutid' }, { word: 'Løb', cat: 'Datid' }, { word: 'Har løbet', cat: 'Førnutid' },
      { word: 'Spiser', cat: 'Nutid' }, { word: 'Spiste', cat: 'Datid' }, { word: 'Har spist', cat: 'Førnutid' }
    ],
    [
      { word: 'Skriver', cat: 'Nutid' }, { word: 'Skrev', cat: 'Datid' }, { word: 'Har skrevet', cat: 'Førnutid' },
      { word: 'Sover', cat: 'Nutid' }, { word: 'Sov', cat: 'Datid' }, { word: 'Har sovet', cat: 'Førnutid' }
    ]
  ]),
  7: generateWordSort('da7-ws', 100, ['Epik', 'Lyrik', 'Drama'], [
    [
      { word: 'Roman', cat: 'Epik' }, { word: 'Digt', cat: 'Lyrik' }, { word: 'Skuespil', cat: 'Drama' },
      { word: 'Novelle', cat: 'Epik' }, { word: 'Haiku', cat: 'Lyrik' }, { word: 'Komedie', cat: 'Drama' }
    ],
    [
      { word: 'Eventyr', cat: 'Epik' }, { word: 'Salme', cat: 'Lyrik' }, { word: 'Tragedie', cat: 'Drama' },
      { word: 'Sagn', cat: 'Epik' }, { word: 'Rim', cat: 'Lyrik' }, { word: 'Opera', cat: 'Drama' }
    ]
  ])
};
