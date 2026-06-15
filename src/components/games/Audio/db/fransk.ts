/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { FRANSK_AUDIO_P1 } from './fransk_part1';
import { FRANSK_AUDIO_P2 } from './fransk_part2';

export const FRANSK_AUDIO: Partial<Record<Grade, GameContent[]>> = {
  ...FRANSK_AUDIO_P1,
  ...FRANSK_AUDIO_P2,
};
