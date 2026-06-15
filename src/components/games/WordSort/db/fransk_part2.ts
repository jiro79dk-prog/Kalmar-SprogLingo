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

export const FRANSK_WORDSORT_P2: Partial<Record<Grade, GameContent[]>> = {
  3: generateWordSort('fr3-ws', 100, ['Masculin', 'Féminin'], [
    [
      { word: 'Le livre', cat: 'Masculin' }, { word: 'La table', cat: 'Féminin' }, { word: 'Le garçon', cat: 'Masculin' }, 
      { word: 'La fille', cat: 'Féminin' }, { word: 'Le chat', cat: 'Masculin' }, { word: 'La pomme', cat: 'Féminin' }
    ]
  ]),
  4: generateWordSort('fr4-ws', 100, ['Pronoms', 'Prépositions'], [
    [
      { word: 'Je', cat: 'Pronoms' }, { word: 'Tu', cat: 'Pronoms' }, { word: 'Dans', cat: 'Prépositions' }, 
      { word: 'Sur', cat: 'Prépositions' }, { word: 'Il', cat: 'Pronoms' }, { word: 'Sous', cat: 'Prépositions' }
    ]
  ]),
  5: generateWordSort('fr5-ws', 100, ['Pays', 'Villes'], [
    [
      { word: 'France', cat: 'Pays' }, { word: 'Paris', cat: 'Villes' }, { word: 'Canada', cat: 'Pays' }, 
      { word: 'Lyon', cat: 'Villes' }, { word: 'Belgique', cat: 'Pays' }, { word: 'Marseille', cat: 'Villes' }
    ]
  ]),
  7: generateWordSort('fr7-ws', 5, ['Commerces', 'Produits'], [
    [
      { word: 'Boulangerie', cat: 'Commerces' }, { word: 'Boucherie', cat: 'Commerces' }, { word: 'Marché', cat: 'Commerces' },
      { word: 'Pain', cat: 'Produits' }, { word: 'Viande', cat: 'Produits' }, { word: 'Légumes', cat: 'Produits' }
    ],
    [
      { word: 'Pharmacie', cat: 'Commerces' }, { word: 'Cinéma', cat: 'Commerces' }, { word: 'Banque', cat: 'Commerces' },
      { word: 'Médicament', cat: 'Produits' }, { word: 'Billet', cat: 'Produits' }, { word: 'Argent', cat: 'Produits' }
    ]
  ])
};
