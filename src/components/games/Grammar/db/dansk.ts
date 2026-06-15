/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { DANSK_GRAMMAR_P1 } from './dansk_part1';
import { DANSK_GRAMMAR_P2 } from './dansk_part2';
import { DANSK_GRAMMAR_P3 } from './dansk_part3';

export const DANSK_GRAMMAR: Partial<Record<Grade, GameContent[]>> = {
  ...DANSK_GRAMMAR_P1,
  ...DANSK_GRAMMAR_P2,
  ...DANSK_GRAMMAR_P3,
};
