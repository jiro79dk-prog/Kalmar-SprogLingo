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
      instruction: `Clasifica las palabras en ${categories.join(' y ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const SPANSK_WORDSORT_P4: Partial<Record<Grade, GameContent[]>> = {
  8: generateWordSort('es8-ws', 100, ['Abjetivos', 'Adverbios'], [
    [
      { word: 'Rápido', cat: 'Abjetivos' }, { word: 'Inteligente', cat: 'Abjetivos' }, { word: 'Rápidamente', cat: 'Adverbios' }, 
      { word: 'Ayer', cat: 'Adverbios' }, { word: 'Hermoso', cat: 'Abjetivos' }, { word: 'Hoy', cat: 'Adverbios' }
    ]
  ]),
  9: generateWordSort('es9-ws', 100, ['Literatura', 'Historia'], [
    [
      { word: 'Novela', cat: 'Literatura' }, { word: 'Poesía', cat: 'Literatura' }, { word: 'Guerra', cat: 'Historia' }, 
      { word: 'Revolución', cat: 'Historia' }, { word: 'Autor', cat: 'Literatura' }, { word: 'Rey', cat: 'Historia' }
    ]
  ])
};
