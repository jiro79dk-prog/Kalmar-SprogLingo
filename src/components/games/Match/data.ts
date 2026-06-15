/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Grade, GameContent } from '../../../types';
import { FRANSK_MATCH } from './db/fransk';
import { DANSK_MATCH } from './db/dansk';
import { ENGELSK_MATCH } from './db/engelsk';
import { TYSK_MATCH } from './db/tysk';
import { SPANSK_MATCH } from './db/spansk';

export const MATCH_DATA: Record<Language, Partial<Record<Grade, GameContent[]>>> = {
  'Fransk': FRANSK_MATCH,
  'Dansk': DANSK_MATCH,
  'Engelsk': ENGELSK_MATCH,
  'Tysk': TYSK_MATCH,
  'Spansk': SPANSK_MATCH,
};
