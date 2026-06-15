/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Grade, GameContent } from '../../../types';
import { FRANSK_GRAMMAR } from './db/fransk';
import { DANSK_GRAMMAR } from './db/dansk';
import { ENGELSK_GRAMMAR } from './db/engelsk';
import { TYSK_GRAMMAR } from './db/tysk';
import { SPANSK_GRAMMAR } from './db/spansk';

export const GRAMMAR_DATA: Record<Language, Partial<Record<Grade, GameContent[]>>> = {
  'Fransk': FRANSK_GRAMMAR,
  'Dansk': DANSK_GRAMMAR,
  'Engelsk': ENGELSK_GRAMMAR,
  'Tysk': TYSK_GRAMMAR,
  'Spansk': SPANSK_GRAMMAR,
};
