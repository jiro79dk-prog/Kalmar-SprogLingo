/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Grade, GameContent } from '../../../types';
import { DANSK_LETTERORDER } from './db/dansk';
import { ENGELSK_LETTERORDER } from './db/engelsk';
import { TYSK_LETTERORDER } from './db/tysk';
import { FRANSK_LETTERORDER } from './db/fransk';
import { SPANSK_LETTERORDER } from './db/spansk';

export const LETTERORDER_DATA: Record<Language, Partial<Record<Grade, GameContent[]>>> = {
  'Dansk': DANSK_LETTERORDER,
  'Engelsk': ENGELSK_LETTERORDER,
  'Tysk': TYSK_LETTERORDER,
  'Fransk': FRANSK_LETTERORDER,
  'Spansk': SPANSK_LETTERORDER,
};
