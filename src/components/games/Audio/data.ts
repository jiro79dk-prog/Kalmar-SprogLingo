/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language, Grade, GameContent } from '../../../types';
import { FRANSK_AUDIO } from './db/fransk';
import { DANSK_AUDIO } from './db/dansk';
import { ENGELSK_AUDIO } from './db/engelsk';
import { TYSK_AUDIO } from './db/tysk';
import { SPANSK_AUDIO } from './db/spansk';

export const AUDIO_DATA: Record<Language, Partial<Record<Grade, GameContent[]>>> = {
  'Fransk': FRANSK_AUDIO,
  'Dansk': DANSK_AUDIO,
  'Engelsk': ENGELSK_AUDIO,
  'Tysk': TYSK_AUDIO,
  'Spansk': SPANSK_AUDIO,
};
