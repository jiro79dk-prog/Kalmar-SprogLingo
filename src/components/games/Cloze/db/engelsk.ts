/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, Grade } from '../../../../types';
import { ENGELSK_CLOZE_P1 } from './engelsk_part1';
import { ENGELSK_CLOZE_P2 } from './engelsk_part2';
import { ENGELSK_CLOZE_P3 } from './engelsk_part3';

const mergeGameContent = (
  ...parts: Partial<Record<Grade, GameContent[]>>[]
): Partial<Record<Grade, GameContent[]>> => {
  const merged: Partial<Record<Grade, GameContent[]>> = {};

  parts.forEach((part) => {
    (Object.keys(part) as unknown as Grade[]).forEach((grade) => {
      if (!merged[grade]) {
        merged[grade] = [];
      }
      merged[grade] = [...(merged[grade] || []), ...(part[grade] || [])];
    });
  });

  return merged;
};

export const ENGELSK_CLOZE = mergeGameContent(
  ENGELSK_CLOZE_P1,
  ENGELSK_CLOZE_P2,
  ENGELSK_CLOZE_P3
);
