/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { TYSK_CLOZE_P1 } from './tysk_part1';
import { TYSK_CLOZE_P2 } from './tysk_part2';
import { TYSK_CLOZE_P3 } from './tysk_part3';
import { TYSK_CLOZE_P4 } from './tysk_part4';

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

export const TYSK_CLOZE: Partial<Record<Grade, GameContent[]>> = mergeGameContent(
  TYSK_CLOZE_P1,
  TYSK_CLOZE_P2,
  TYSK_CLOZE_P3,
  TYSK_CLOZE_P4
);
