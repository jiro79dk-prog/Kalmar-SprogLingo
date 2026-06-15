/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

export const TYSK_LETTERORDER: Partial<Record<Grade, GameContent[]>> = {
  0: [
    { id: 'de0-lo1', type: 'LetterOrder', question: 'Buchstabiere "Hund"', answer: 'hund', instruction: 'Ein Haustier' },
    { id: 'de0-lo2', type: 'LetterOrder', question: 'Buchstabiere "Katze"', answer: 'katze', instruction: 'Ein Haustier' },
    { id: 'de0-lo3', type: 'LetterOrder', question: 'Buchstabiere "Haus"', answer: 'haus', instruction: 'Wo man wohnt' }
  ],
  1: [
    { id: 'de1-lo1', type: 'LetterOrder', question: 'Buchstabiere "Apfel"', answer: 'apfel', instruction: 'Eine Frucht' },
    { id: 'de1-lo2', type: 'LetterOrder', question: 'Buchstabiere "Schule"', answer: 'schule', instruction: 'Ort zum Lernen' },
    { id: 'de1-lo3', type: 'LetterOrder', question: 'Buchstabiere "Brot"', answer: 'brot', instruction: 'Man isst es' }
  ],
  2: [
    { id: 'de2-lo1', type: 'LetterOrder', question: 'Buchstabiere "Garten"', answer: 'garten', instruction: 'Hinter dem Haus' },
    { id: 'de2-lo2', type: 'LetterOrder', question: 'Buchstabiere "Wetter"', answer: 'wetter', instruction: 'Sonne oder Regen' }
  ]
};
