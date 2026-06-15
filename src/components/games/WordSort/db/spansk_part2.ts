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

export const SPANSK_WORDSORT_P2: Partial<Record<Grade, GameContent[]>> = {
  3: generateWordSort('es3-ws', 100, ['Ropa', 'Comida'], [
    [
      { word: 'Camisa', cat: 'Ropa' }, { word: 'Pantalones', cat: 'Ropa' }, { word: 'Pan', cat: 'Comida' }, 
      { word: 'Queso', cat: 'Comida' }, { word: 'Zapatos', cat: 'Ropa' }, { word: 'Leche', cat: 'Comida' }
    ]
  ]),
  4: generateWordSort('es4-ws', 100, ['Países', 'Ciudades'], [
    [
      { word: 'España', cat: 'Países' }, { word: 'México', cat: 'Países' }, { word: 'Madrid', cat: 'Ciudades' }, 
      { word: 'París', cat: 'Ciudades' }, { word: 'Argentina', cat: 'Países' }, { word: 'Londres', cat: 'Ciudades' }
    ]
  ]),
  5: generateWordSort('es5-ws', 100, ['Deportes', 'Instrumentos'], [
    [
      { word: 'Fútbol', cat: 'Deportes' }, { word: 'Tenis', cat: 'Deportes' }, { word: 'Guitarra', cat: 'Instrumentos' }, 
      { word: 'Piano', cat: 'Instrumentos' }, { word: 'Natación', cat: 'Deportes' }, { word: 'Violín', cat: 'Instrumentos' }
    ]
  ])
};
