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

export const FRANSK_WORDSORT_P3: Partial<Record<Grade, GameContent[]>> = {
  6: generateWordSort('fr6-ws', 20, ['Animaux', 'Couleurs'], [
    [
      { word: 'Chien', cat: 'Animaux' }, { word: 'Chat', cat: 'Animaux' }, { word: 'Lapin', cat: 'Animaux' },
      { word: 'Rouge', cat: 'Couleurs' }, { word: 'Bleu', cat: 'Couleurs' }, { word: 'Vert', cat: 'Couleurs' }
    ],
    [
      { word: 'Oiseau', cat: 'Animaux' }, { word: 'Lion', cat: 'Animaux' }, { word: 'Singe', cat: 'Animaux' },
      { word: 'Jaune', cat: 'Couleurs' }, { word: 'Rose', cat: 'Couleurs' }, { word: 'Orange', cat: 'Couleurs' }
    ]
  ]),
  7: generateWordSort('fr7-ws', 20, ['Nourriture', 'Boissons'], [
    [
      { word: 'Pain', cat: 'Nourriture' }, { word: 'Fromage', cat: 'Nourriture' }, { word: 'Viande', cat: 'Nourriture' },
      { word: 'Eau', cat: 'Boissons' }, { word: 'Lait', cat: 'Boissons' }, { word: 'Jus', cat: 'Boissons' }
    ],
    [
      { word: 'Pomme', cat: 'Nourriture' }, { word: 'Poisson', cat: 'Nourriture' }, { word: 'Poulet', cat: 'Nourriture' },
      { word: 'Thé', cat: 'Boissons' }, { word: 'Café', cat: 'Boissons' }, { word: 'Soda', cat: 'Boissons' }
    ]
  ]),
  8: generateWordSort('fr8-ws', 10, ['Musique', 'Cinéma'], [
    [
      { word: 'Chanteur', cat: 'Musique' }, { word: 'Instrument', cat: 'Musique' }, { word: 'Concert', cat: 'Musique' },
      { word: 'Réalisateur', cat: 'Cinéma' }, { word: 'Acteur', cat: 'Cinéma' }, { word: 'Écran', cat: 'Cinéma' }
    ]
  ])
};
