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

export const SPANSK_WORDSORT_P1: Partial<Record<Grade, GameContent[]>> = {
  0: generateWordSort('es0-ws', 100, ['Animales', 'Frutas'], [
    [
      { word: 'Perro', cat: 'Animales' }, { word: 'Gato', cat: 'Animales' }, { word: 'Manzana', cat: 'Frutas' }, 
      { word: 'Plátano', cat: 'Frutas' }, { word: 'Caballo', cat: 'Animales' }, { word: 'Pera', cat: 'Frutas' }
    ]
  ]),
  1: generateWordSort('es1-ws', 100, ['Colores', 'Formas'], [
    [
      { word: 'Rojo', cat: 'Colores' }, { word: 'Azul', cat: 'Colores' }, { word: 'Círculo', cat: 'Formas' }, 
      { word: 'Cuadrado', cat: 'Formas' }, { word: 'Verde', cat: 'Colores' }, { word: 'Triángulo', cat: 'Formas' }
    ]
  ]),
  2: generateWordSort('es2-ws', 100, ['Ropa', 'Cuerpo'], [
    [
      { word: 'Camisa', cat: 'Ropa' }, { word: 'Pantalones', cat: 'Ropa' }, { word: 'Zapato', cat: 'Ropa' }, 
      { word: 'Cabeza', cat: 'Cuerpo' }, { word: 'Mano', cat: 'Cuerpo' }, { word: 'Pie', cat: 'Cuerpo' }
    ]
  ])
};
