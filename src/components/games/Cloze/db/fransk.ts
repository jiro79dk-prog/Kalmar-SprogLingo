/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { FRANSK_CLOZE_P1 } from './fransk_part1';
import { FRANSK_CLOZE_P2 } from './fransk_part2';
import { FRANSK_CLOZE_P3 } from './fransk_part3';
import { FRANSK_CLOZE_P4 } from './fransk_part4';

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

export const FRANSK_CLOZE: Partial<Record<Grade, GameContent[]>> = mergeGameContent(
  FRANSK_CLOZE_P1,
  FRANSK_CLOZE_P2,
  FRANSK_CLOZE_P3,
  FRANSK_CLOZE_P4
);
