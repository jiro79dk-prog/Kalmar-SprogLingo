/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Grade, GameContent } from '../../../types';
import { DANSK_MEMORY } from './db/dansk';
import { ENGELSK_MEMORY } from './db/engelsk';
import { TYSK_MEMORY } from './db/tysk';
import { FRANSK_MEMORY } from './db/fransk';
import { SPANSK_MEMORY } from './db/spansk';

export const MEMORY_DATA: Record<Language, Partial<Record<Grade, GameContent[]>>> = {
  'Dansk': DANSK_MEMORY,
  'Engelsk': ENGELSK_MEMORY,
  'Tysk': TYSK_MEMORY,
  'Fransk': FRANSK_MEMORY,
  'Spansk': SPANSK_MEMORY,
};
