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
      instruction: `Sorter ordene i ${categories.join(', ')}`,
      question: `${categories.join(' vs ')}`,
      answer: '',
      options: categories,
      context: context
    };
  });
};

export const DANSK_WORDSORT_P4: Partial<Record<Grade, GameContent[]>> = {
  8: generateWordSort('da8-ws', 100, ['Metafor', 'Besjæling', 'Sammenligning'], [
    [
      { word: 'Du er en stjerne', cat: 'Metafor' }, { word: 'Vinden hyler', cat: 'Besjæling' }, { word: 'Stærk som en bjørn', cat: 'Sammenligning' },
      { word: 'Livet er en rejse', cat: 'Metafor' }, { word: 'Solen smiler', cat: 'Besjæling' }, { word: 'Blid som et lam', cat: 'Sammenligning' }
    ],
    [
      { word: 'Tiden er penge', cat: 'Metafor' }, { word: 'Uret går', cat: 'Besjæling' }, { word: 'Hurtig som et lyn', cat: 'Sammenligning' },
      { word: 'Du er mit lys', cat: 'Metafor' }, { word: 'Blomsterne bukker', cat: 'Besjæling' }, { word: 'Klar som glas', cat: 'Sammenligning' }
    ]
  ]),
  9: generateWordSort('da9-ws', 100, ['Etos', 'Logos', 'Patos'], [
    [
      { word: 'Som læge mener jeg...', cat: 'Etos' }, { word: 'Statistikken viser...', cat: 'Logos' }, { word: 'Tænk på børnene!', cat: 'Patos' },
      { word: 'Efter 20 år i branchen...', cat: 'Etos' }, { word: '2 + 2 er 4', cat: 'Logos' }, { word: 'Føl mit had', cat: 'Patos' }
    ],
    [
       { word: 'Eksperter er enige...', cat: 'Etos' }, { word: 'Undersøgelsen beviser...', cat: 'Logos' }, { word: 'For din skyld', cat: 'Patos' },
       { word: 'Min erfaring siger...', cat: 'Etos' }, { word: 'Data peger på...', cat: 'Logos' }, { word: 'Det gør ondt i hjertet', cat: 'Patos' }
    ]
  ])
};
