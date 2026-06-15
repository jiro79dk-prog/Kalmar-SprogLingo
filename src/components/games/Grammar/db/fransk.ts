/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { FRANSK_GRAMMAR_P1 } from './fransk_part1';
import { FRANSK_GRAMMAR_P2 } from './fransk_part2';
import { FRANSK_GRAMMAR_P3 } from './fransk_part3';

export const FRANSK_GRAMMAR: Partial<Record<Grade, GameContent[]>> = {
  ...FRANSK_GRAMMAR_P1,
  ...FRANSK_GRAMMAR_P2,
  ...FRANSK_GRAMMAR_P3,
};
