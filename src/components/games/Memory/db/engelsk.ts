/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { ENGELSK_MEMORY_P1 } from './engelsk_part1';
import { ENGELSK_MEMORY_P2 } from './engelsk_part2';
import { ENGELSK_MEMORY_P3 } from './engelsk_part3';
import { ENGELSK_MEMORY_P4 } from './engelsk_part4';
import { ENGELSK_MEMORY_P5 } from './engelsk_part5';

const mergeGameContent = (
  ...parts: Partial<Record<Grade, GameContent[]>>[]
): Partial<Record<Grade, GameContent[]>> => {
  const result: Partial<Record<Grade, GameContent[]>> = {};
  parts.forEach((part) => {
    Object.keys(part).forEach((grade) => {
      const g = grade as unknown as Grade;
      if (!result[g]) result[g] = [];
      result[g] = [...result[g]!, ...part[g]!];
    });
  });
  return result;
};

export const ENGELSK_MEMORY: Partial<Record<Grade, GameContent[]>> = mergeGameContent(
  ENGELSK_MEMORY_P1,
  ENGELSK_MEMORY_P2,
  ENGELSK_MEMORY_P3,
  ENGELSK_MEMORY_P4,
  ENGELSK_MEMORY_P5
);
