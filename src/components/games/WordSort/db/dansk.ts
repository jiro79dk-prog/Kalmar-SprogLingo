/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { DANSK_WORDSORT_P1 } from './dansk_part1';
import { DANSK_WORDSORT_P2 } from './dansk_part2';
import { DANSK_WORDSORT_P3 } from './dansk_part3';
import { DANSK_WORDSORT_P4 } from './dansk_part4';

const mergeGameContent = (
  ...parts: Partial<Record<Grade, GameContent[]>>[]
): Partial<Record<Grade, GameContent[]>> => {
  const result: Partial<Record<Grade, GameContent[]>> = {};
  parts.forEach((part) => {
    Object.keys(part).forEach((grade) => {
      const g = parseInt(grade) as unknown as Grade;
      if (!result[g]) result[g] = [];
      result[g] = [...result[g]!, ...part[g]!];
    });
  });
  return result;
};

export const DANSK_WORDSORT: Partial<Record<Grade, GameContent[]>> = mergeGameContent(
  DANSK_WORDSORT_P1,
  DANSK_WORDSORT_P2,
  DANSK_WORDSORT_P3,
  DANSK_WORDSORT_P4
);
