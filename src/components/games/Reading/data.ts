/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Grade, GameContent } from '../../../types';
import { FRANSK_READING } from './db/fransk';
import { DANSK_READING } from './db/dansk';
import { ENGELSK_READING } from './db/engelsk';
import { TYSK_READING } from './db/tysk';
import { SPANSK_READING } from './db/spansk';

export const READING_DATA: Record<Language, Partial<Record<Grade, GameContent[]>>> = {
  'Fransk': FRANSK_READING,
  'Dansk': DANSK_READING,
  'Engelsk': ENGELSK_READING,
  'Tysk': TYSK_READING,
  'Spansk': SPANSK_READING,
};
