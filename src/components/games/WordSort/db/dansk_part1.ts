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
      instruction: `Sorter ordene i ${categories.join(' og ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const DANSK_WORDSORT_P1: Partial<Record<Grade, GameContent[]>> = {
  0: generateWordSort('da0-ws', 100, ['Dyr', 'Mad'], [
    [
      { word: 'Hund', cat: 'Dyr' }, { word: 'Kat', cat: 'Dyr' }, { word: 'Æble', cat: 'Mad' }, 
      { word: 'Banan', cat: 'Mad' }, { word: 'Hest', cat: 'Dyr' }, { word: 'Brød', cat: 'Mad' }
    ],
    [
      { word: 'Mus', cat: 'Dyr' }, { word: 'Giraf', cat: 'Dyr' }, { word: 'Pasta', cat: 'Mad' }, 
      { word: 'Ris', cat: 'Mad' }, { word: 'Elefant', cat: 'Dyr' }, { word: 'Mælk', cat: 'Mad' }
    ],
    [
      { word: 'Ko', cat: 'Dyr' }, { word: 'Fisk', cat: 'Dyr' }, { word: 'Kage', cat: 'Mad' }, 
      { word: 'Slik', cat: 'Mad' }, { word: 'Fugl', cat: 'Dyr' }, { word: 'Pizza', cat: 'Mad' }
    ]
  ]),
  1: generateWordSort('da1-ws', 100, ['Farver', 'Former'], [
    [
      { word: 'Rød', cat: 'Farver' }, { word: 'Blå', cat: 'Farver' }, { word: 'Cirkel', cat: 'Former' }, 
      { word: 'Kvadrat', cat: 'Former' }, { word: 'Grøn', cat: 'Farver' }, { word: 'Trekant', cat: 'Former' }
    ],
    [
      { word: 'Gul', cat: 'Farver' }, { word: 'Sort', cat: 'Farver' }, { word: 'Oval', cat: 'Former' }, 
      { word: 'Hvid', cat: 'Farver' }, { word: 'Stjerne', cat: 'Former' }, { word: 'Rektangel', cat: 'Former' }
    ],
    [
      { word: 'Lilla', cat: 'Farver' }, { word: 'Grå', cat: 'Farver' }, { word: 'Hjerte', cat: 'Former' }, 
      { word: 'Brun', cat: 'Farver' }, { word: 'Runde', cat: 'Former' }, { word: 'Kantet', cat: 'Former' }
    ]
  ]),
  2: generateWordSort('da2-ws', 10, ['Tøj', 'Kroppen'], [
    [
      { word: 'Bukser', cat: 'Tøj' }, { word: 'Skjorte', cat: 'Tøj' }, { word: 'Hat', cat: 'Tøj' }, 
      { word: 'Hoved', cat: 'Kroppen' }, { word: 'Arm', cat: 'Kroppen' }, { word: 'Ben', cat: 'Kroppen' }
    ],
    [
      { word: 'Sko', cat: 'Tøj' }, { word: 'Strømper', cat: 'Tøj' }, { word: 'Jakke', cat: 'Tøj' }, 
      { word: 'Fod', cat: 'Kroppen' }, { word: 'Hånd', cat: 'Kroppen' }, { word: 'Næse', cat: 'Kroppen' }
    ],
    [
      { word: 'Bluse', cat: 'Tøj' }, { word: 'Nederdel', cat: 'Tøj' }, { word: 'Hue', cat: 'Tøj' }, 
      { word: 'Øje', cat: 'Kroppen' }, { word: 'Øre', cat: 'Kroppen' }, { word: 'Mund', cat: 'Kroppen' }
    ]
  ])
};
