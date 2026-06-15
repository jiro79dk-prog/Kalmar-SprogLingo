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
      instruction: `Classez les mots en ${categories.join(' et ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const FRANSK_WORDSORT_P1: Partial<Record<Grade, GameContent[]>> = {
  0: generateWordSort('fr0-ws', 100, ['Animaux', 'Fruits'], [
    [
      { word: 'Chien', cat: 'Animaux' }, { word: 'Chat', cat: 'Animaux' }, { word: 'Pomme', cat: 'Fruits' }, 
      { word: 'Banane', cat: 'Fruits' }, { word: 'Cheval', cat: 'Animaux' }, { word: 'Poire', cat: 'Fruits' }
    ]
  ]),
  1: generateWordSort('fr1-ws', 100, ['Couleurs', 'Formes'], [
    [
      { word: 'Rouge', cat: 'Couleurs' }, { word: 'Bleu', cat: 'Couleurs' }, { word: 'Cercle', cat: 'Formes' }, 
      { word: 'Carré', cat: 'Formes' }, { word: 'Vert', cat: 'Couleurs' }, { word: 'Triangle', cat: 'Formes' }
    ]
  ]),
  2: generateWordSort('fr2-ws', 10, ['Vêtements', 'Le Corps'], [
    [
      { word: 'Chemise', cat: 'Vêtements' }, { word: 'Pantalon', cat: 'Vêtements' }, { word: 'Chaussure', cat: 'Vêtements' }, 
      { word: 'Tête', cat: 'Le Corps' }, { word: 'Main', cat: 'Le Corps' }, { word: 'Pied', cat: 'Le Corps' }
    ],
    [
      { word: 'Chapeau', cat: 'Vêtements' }, { word: 'Chaussettes', cat: 'Vêtements' }, { word: 'Veste', cat: 'Vêtements' }, 
      { word: 'Bras', cat: 'Le Corps' }, { word: 'Jambe', cat: 'Le Corps' }, { word: 'Dos', cat: 'Le Corps' }
    ]
  ]),
  6: generateWordSort('fr6-ws', 5, ['Salutations', 'Présentation'], [
    [
      { word: 'Bonjour', cat: 'Salutations' }, { word: 'Salut', cat: 'Salutations' }, { word: 'Bonsoir', cat: 'Salutations' },
      { word: 'Moi', cat: 'Présentation' }, { word: 'Je m’appelle', cat: 'Présentation' }, { word: 'J’habite', cat: 'Présentation' }
    ],
    [
      { word: 'Bonne nuit', cat: 'Salutations' }, { word: 'Au revoir', cat: 'Salutations' }, { word: 'À plus tard', cat: 'Salutations' },
      { word: 'Ma famille', cat: 'Présentation' }, { word: 'Mon âge', cat: 'Présentation' }, { word: 'Mon école', cat: 'Présentation' }
    ]
  ])
};
