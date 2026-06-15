/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { SPANSK_MEMORY_P1 } from './spansk_part1';
import { SPANSK_MEMORY_P2 } from './spansk_part2';
import { SPANSK_MEMORY_P3 } from './spansk_part3';
import { SPANSK_MEMORY_P4 } from './spansk_part4';
import { SPANSK_MEMORY_P5 } from './spansk_part5';
import { SPANSK_MEMORY_P6 } from './spansk_part6';
import { SPANSK_MEMORY_P7 } from './spansk_part7';
import { SPANSK_MEMORY_P8 } from './spansk_part8';
import { SPANSK_MEMORY_P9 } from './spansk_part9';
import { SPANSK_MEMORY_P10 } from './spansk_part10';
import { SPANSK_MEMORY_P11 } from './spansk_part11';

export const SPANSK_MEMORY: Partial<Record<Grade, GameContent[]>> = {
  ...SPANSK_MEMORY_P1,
  ...SPANSK_MEMORY_P2,
  ...SPANSK_MEMORY_P3,
  ...SPANSK_MEMORY_P4,
  ...SPANSK_MEMORY_P5,
  ...SPANSK_MEMORY_P6,
  ...SPANSK_MEMORY_P7,
  ...SPANSK_MEMORY_P8,
  ...SPANSK_MEMORY_P9,
  ...SPANSK_MEMORY_P10,
  ...SPANSK_MEMORY_P11,
};
