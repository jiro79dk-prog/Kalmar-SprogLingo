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

export const SPANSK_WORDSORT_P3: Partial<Record<Grade, GameContent[]>> = {
  6: generateWordSort('es6-ws', 100, ['Tecnología', 'Naturaleza'], [
    [
      { word: 'Ordenador', cat: 'Tecnología' }, { word: 'Internet', cat: 'Tecnología' }, { word: 'Bosque', cat: 'Naturaleza' }, 
      { word: 'Río', cat: 'Naturaleza' }, { word: 'Smartphone', cat: 'Tecnología' }, { word: 'Montaña', cat: 'Naturaleza' }
    ]
  ]),
  7: generateWordSort('es7-ws', 100, ['Profesiones', 'Hogar'], [
    [
      { word: 'Médico', cat: 'Profesiones' }, { word: 'Arquitecto', cat: 'Profesiones' }, { word: 'Cocina', cat: 'Hogar' }, 
      { word: 'Dormitorio', cat: 'Hogar' }, { word: 'Ingeniero', cat: 'Profesiones' }, { word: 'Salón', cat: 'Hogar' }
    ]
  ])
};
