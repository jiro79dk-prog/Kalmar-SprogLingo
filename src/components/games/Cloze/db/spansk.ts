/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { SPANSK_CLOZE_P1 } from './spansk_part1';
import { SPANSK_CLOZE_P2 } from './spansk_part2';

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

export const SPANSK_CLOZE: Partial<Record<Grade, GameContent[]>> = mergeGameContent(
  SPANSK_CLOZE_P1,
  SPANSK_CLOZE_P2
);
