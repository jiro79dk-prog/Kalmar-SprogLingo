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

export const ENGELSK_WORDSORT_P2: Partial<Record<Grade, GameContent[]>> = {
  3: generateWordSort('en3-ws', 100, ['Nouns', 'Verbs', 'Adjectives'], [
    [
      { word: 'Bird', cat: 'Nouns' }, { word: 'Sing', cat: 'Verbs' }, { word: 'Loud', cat: 'Adjectives' },
      { word: 'Water', cat: 'Nouns' }, { word: 'Drink', cat: 'Verbs' }, { word: 'Cold', cat: 'Adjectives' }
    ],
    [
      { word: 'Friend', cat: 'Nouns' }, { word: 'Talk', cat: 'Verbs' }, { word: 'Kind', cat: 'Adjectives' },
      { word: 'Game', cat: 'Nouns' }, { word: 'Play', cat: 'Verbs' }, { word: 'Fun', cat: 'Adjectives' }
    ]
  ]),
  4: generateWordSort('en4-ws', 100, ['Pronouns', 'Prepositions'], [
    [
      { word: 'He', cat: 'Pronouns' }, { word: 'She', cat: 'Pronouns' }, { word: 'In', cat: 'Prepositions' },
      { word: 'On', cat: 'Prepositions' }, { word: 'They', cat: 'Pronouns' }, { word: 'Under', cat: 'Prepositions' }
    ],
    [
      { word: 'It', cat: 'Pronouns' }, { word: 'We', cat: 'Pronouns' }, { word: 'At', cat: 'Prepositions' },
      { word: 'By', cat: 'Prepositions' }, { word: 'You', cat: 'Pronouns' }, { word: 'Behind', cat: 'Prepositions' }
    ]
  ]),
  5: generateWordSort('en5-ws', 100, ['Countries', 'Cities'], [
    [
      { word: 'USA', cat: 'Countries' }, { word: 'New York', cat: 'Cities' }, { word: 'UK', cat: 'Countries' },
      { word: 'London', cat: 'Cities' }, { word: 'France', cat: 'Countries' }, { word: 'Paris', cat: 'Cities' }
    ],
    [
      { word: 'Japan', cat: 'Countries' }, { word: 'Tokyo', cat: 'Cities' }, { word: 'Germany', cat: 'Countries' },
      { word: 'Berlin', cat: 'Cities' }, { word: 'Spain', cat: 'Countries' }, { word: 'Madrid', cat: 'Cities' }
    ]
  ])
};
