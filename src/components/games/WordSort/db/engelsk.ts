/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { ENGELSK_WORDSORT_P1 } from './engelsk_part1';
import { ENGELSK_WORDSORT_P2 } from './engelsk_part2';
import { ENGELSK_WORDSORT_P3 } from './engelsk_part3';
import { ENGELSK_WORDSORT_P4 } from './engelsk_part4';

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

export const ENGELSK_WORDSORT: Partial<Record<Grade, GameContent[]>> = mergeGameContent(
  ENGELSK_WORDSORT_P1,
  ENGELSK_WORDSORT_P2,
  ENGELSK_WORDSORT_P3,
  ENGELSK_WORDSORT_P4
);
