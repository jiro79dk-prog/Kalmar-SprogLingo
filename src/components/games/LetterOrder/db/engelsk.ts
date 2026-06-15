/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const ENGELSK_LETTERORDER: Partial<Record<Grade, GameContent[]>> = {
  0: [
    { id: 'en0-lo1', type: 'LetterOrder', question: 'Spell "Cat"', answer: 'cat', instruction: 'A small pet' },
    { id: 'en0-lo2', type: 'LetterOrder', question: 'Spell "Dog"', answer: 'dog', instruction: 'A loyal pet' },
    { id: 'en0-lo3', type: 'LetterOrder', question: 'Spell "Ball"', answer: 'ball', instruction: 'You play with it' },
    { id: 'en0-lo4', type: 'LetterOrder', question: 'Spell "Sun"', answer: 'sun', instruction: 'It is hot' },
    { id: 'en0-lo5', type: 'LetterOrder', question: 'Spell "Red"', answer: 'red', instruction: 'A color' }
  ],
  1: [
    { id: 'en1-lo1', type: 'LetterOrder', question: 'Spell "Apple"', answer: 'apple', instruction: 'A fruit' },
    { id: 'en1-lo2', type: 'LetterOrder', question: 'Spell "House"', answer: 'house', instruction: 'Where you live' },
    { id: 'en1-lo3', type: 'LetterOrder', question: 'Spell "Bread"', answer: 'bread', instruction: 'You eat it' },
    { id: 'en1-lo4', type: 'LetterOrder', question: 'Spell "Table"', answer: 'table', instruction: 'Furniture' },
    { id: 'en1-lo5', type: 'LetterOrder', question: 'Spell "Chair"', answer: 'chair', instruction: 'Sit on it' }
  ],
  2: [
    { id: 'en2-lo1', type: 'LetterOrder', question: 'Spell "Rabbit"', answer: 'rabbit', instruction: 'Long ears' },
    { id: 'en2-lo2', type: 'LetterOrder', question: 'Spell "Flower"', answer: 'flower', instruction: 'Grows in gardens' },
    { id: 'en2-lo3', type: 'LetterOrder', question: 'Spell "School"', answer: 'school', instruction: 'Place to learn' }
  ],
  3: [
    { id: 'en3-lo1', type: 'LetterOrder', question: 'Spell "Science"', answer: 'science', instruction: 'A school subject' },
    { id: 'en3-lo2', type: 'LetterOrder', question: 'Spell "Library"', answer: 'library', instruction: 'Full of books' }
  ]
};
