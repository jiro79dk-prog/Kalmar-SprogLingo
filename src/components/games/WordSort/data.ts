/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Grade, GameContent } from '../../../types';
import { DANSK_WORDSORT } from './db/dansk';
import { ENGELSK_WORDSORT } from './db/engelsk';
import { TYSK_WORDSORT } from './db/tysk';
import { FRANSK_WORDSORT } from './db/fransk';
import { SPANSK_WORDSORT } from './db/spansk';

export const WORDSORT_DATA: Record<Language, Partial<Record<Grade, GameContent[]>>> = {
  'Dansk': DANSK_WORDSORT,
  'Engelsk': ENGELSK_WORDSORT,
  'Tysk': TYSK_WORDSORT,
  'Fransk': FRANSK_WORDSORT,
  'Spansk': SPANSK_WORDSORT,
};
