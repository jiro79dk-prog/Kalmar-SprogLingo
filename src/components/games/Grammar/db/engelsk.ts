/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { ENGELSK_GRAMMAR_P1 } from './engelsk_part1';
import { ENGELSK_GRAMMAR_P2 } from './engelsk_part2';
import { ENGELSK_GRAMMAR_P3 } from './engelsk_part3';

export const ENGELSK_GRAMMAR: Partial<Record<Grade, GameContent[]>> = {
  ...ENGELSK_GRAMMAR_P1,
  ...ENGELSK_GRAMMAR_P2,
  ...ENGELSK_GRAMMAR_P3,
};
