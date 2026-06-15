/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { TYSK_GRAMMAR_P1 } from './tysk_part1';
import { TYSK_GRAMMAR_P2 } from './tysk_part2';
import { TYSK_GRAMMAR_P3 } from './tysk_part3';

export const TYSK_GRAMMAR: Partial<Record<Grade, GameContent[]>> = {
  ...TYSK_GRAMMAR_P1,
  ...TYSK_GRAMMAR_P2,
  ...TYSK_GRAMMAR_P3,
};
