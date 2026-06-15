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
      instruction: `Sort the words into ${categories.join(' and ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const ENGELSK_WORDSORT_P1: Partial<Record<Grade, GameContent[]>> = {
  0: generateWordSort('en0-ws', 100, ['Animals', 'Fruit'], [
    [
      { word: 'Dog', cat: 'Animals' }, { word: 'Cat', cat: 'Animals' }, { word: 'Apple', cat: 'Fruit' }, 
      { word: 'Banana', cat: 'Fruit' }, { word: 'Horse', cat: 'Animals' }, { word: 'Pear', cat: 'Fruit' }
    ],
    [
      { word: 'Toys', cat: 'Objects' }, { word: 'Ball', cat: 'Objects' }, { word: 'Doll', cat: 'Objects' }, 
      { word: 'Sun', cat: 'Nature' }, { word: 'Tree', cat: 'Nature' }, { word: 'Flower', cat: 'Nature' }
    ],
    [
      { word: 'Mom', cat: 'Family' }, { word: 'Dad', cat: 'Family' }, { word: 'Baby', cat: 'Family' }, 
      { word: 'Milk', cat: 'Food' }, { word: 'Bread', cat: 'Food' }, { word: 'Juice', cat: 'Food' }
    ]
  ]),
  1: generateWordSort('en1-ws', 100, ['Colors', 'Shapes'], [
    [
      { word: 'Red', cat: 'Colors' }, { word: 'Blue', cat: 'Colors' }, { word: 'Circle', cat: 'Shapes' }, 
      { word: 'Square', cat: 'Shapes' }, { word: 'Green', cat: 'Colors' }, { word: 'Triangle', cat: 'Shapes' }
    ],
    [
      { word: 'Pencil', cat: 'School' }, { word: 'Book', cat: 'School' }, { word: 'Desk', cat: 'School' }, 
      { word: 'Bed', cat: 'House' }, { word: 'Chair', cat: 'House' }, { word: 'Table', cat: 'House' }
    ]
  ]),
  2: generateWordSort('en2-ws', 100, ['Clothes', 'Body'], [
    [
      { word: 'Shirt', cat: 'Clothes' }, { word: 'Hat', cat: 'Clothes' }, { word: 'Shoes', cat: 'Clothes' }, 
      { word: 'Head', cat: 'Body' }, { word: 'Hand', cat: 'Body' }, { word: 'Foot', cat: 'Body' }
    ],
    [
      { word: 'Dress', cat: 'Clothes' }, { word: 'Pants', cat: 'Clothes' }, { word: 'Coat', cat: 'Clothes' }, 
      { word: 'Arm', cat: 'Body' }, { word: 'Leg', cat: 'Body' }, { word: 'Eye', cat: 'Body' }
    ],
    [
      { word: 'Apple', cat: 'Food' }, { word: 'Pizza', cat: 'Food' }, { word: 'Milk', cat: 'Food' }, 
      { word: 'Park', cat: 'Place' }, { word: 'Shop', cat: 'Place' }, { word: 'Home', cat: 'Place' }
    ]
  ])
};
