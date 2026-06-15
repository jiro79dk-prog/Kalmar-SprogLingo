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
      instruction: `Classez les mots en ${categories.join(', ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const FRANSK_WORDSORT_P4: Partial<Record<Grade, GameContent[]>> = {
  8: generateWordSort('fr8-ws-alt', 20, ['Villes', 'Pays'], [
    [
      { word: 'Paris', cat: 'Villes' }, { word: 'Lyon', cat: 'Villes' }, { word: 'Marseille', cat: 'Villes' },
      { word: 'France', cat: 'Pays' }, { word: 'Belgique', cat: 'Pays' }, { word: 'Suisse', cat: 'Pays' }
    ]
  ]),
  9: generateWordSort('fr9-ws', 20, ['Technologie', 'Environnement'], [
    [
      { word: 'Ordinateur', cat: 'Technologie' }, { word: 'Internet', cat: 'Technologie' }, { word: 'Smartphone', cat: 'Technologie' },
      { word: 'Climat', cat: 'Environnement' }, { word: 'Nature', cat: 'Environnement' }, { word: 'Pollution', cat: 'Environnement' }
    ],
    [
      { word: 'Énergie', cat: 'Environnement' }, { word: 'Solaire', cat: 'Environnement' }, { word: 'Recyclage', cat: 'Environnement' },
      { word: 'Espace', cat: 'Technologie' }, { word: 'Robot', cat: 'Technologie' }, { word: 'Écran', cat: 'Technologie' }
    ]
  ])
};
