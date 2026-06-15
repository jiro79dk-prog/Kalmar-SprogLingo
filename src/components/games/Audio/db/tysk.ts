/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';

import { TYSK_AUDIO_P1 } from './tysk_part1';
import { TYSK_AUDIO_P2 } from './tysk_part2';

export const TYSK_AUDIO: Partial<Record<Grade, GameContent[]>> = {
  ...TYSK_AUDIO_P1,
  ...TYSK_AUDIO_P2,
};
