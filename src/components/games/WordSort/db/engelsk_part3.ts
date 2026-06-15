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

export const ENGELSK_WORDSORT_P3: Partial<Record<Grade, GameContent[]>> = {
  6: generateWordSort('en6-ws', 100, ['Present', 'Past', 'Future'], [
    [
      { word: 'Go', cat: 'Present' }, { word: 'Went', cat: 'Past' }, { word: 'Will go', cat: 'Future' },
      { word: 'Eat', cat: 'Present' }, { word: 'Ate', cat: 'Past' }, { word: 'Will eat', cat: 'Future' }
    ],
    [
      { word: 'Sleep', cat: 'Present' }, { word: 'Slept', cat: 'Past' }, { word: 'Will sleep', cat: 'Future' },
      { word: 'Write', cat: 'Present' }, { word: 'Wrote', cat: 'Past' }, { word: 'Will write', cat: 'Future' }
    ]
  ]),
  7: generateWordSort('en7-ws', 100, ['Positive', 'Negative'], [
    [
      { word: 'Great', cat: 'Positive' }, { word: 'Horrible', cat: 'Negative' }, { word: 'Beautiful', cat: 'Positive' },
      { word: 'Ugly', cat: 'Negative' }, { word: 'Happy', cat: 'Positive' }, { word: 'Sad', cat: 'Negative' }
    ],
    [
      { word: 'Kind', cat: 'Positive' }, { word: 'Cruel', cat: 'Negative' }, { word: 'Smart', cat: 'Positive' },
      { word: 'Stupid', cat: 'Negative' }, { word: 'Clean', cat: 'Positive' }, { word: 'Dirty', cat: 'Negative' }
    ]
  ])
};
