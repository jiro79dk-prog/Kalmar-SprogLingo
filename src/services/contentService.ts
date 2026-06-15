/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GameContent, GameType, Language, Grade } from "../types.ts";
import { MATCH_DATA } from "../components/games/Match/data.ts";
import { AUDIO_DATA } from "../components/games/Audio/data.ts";
import { GRAMMAR_DATA } from "../components/games/Grammar/data.ts";
import { CLOZE_DATA } from "../components/games/Cloze/data.ts";
import { READING_DATA } from "../components/games/Reading/data.ts";
import { WORDSORT_DATA } from "../components/games/WordSort/data.ts";
import { LETTERORDER_DATA } from "../components/games/LetterOrder/data.ts";
import { MEMORY_DATA } from "../components/games/Memory/data.ts";

export const ALL_DATA: Record<GameType, any> = {
  'Match': MATCH_DATA,
  'Audio': AUDIO_DATA,
  'Grammar': GRAMMAR_DATA,
  'Cloze': CLOZE_DATA,
  'Reading': READING_DATA,
  'WordSort': WORDSORT_DATA,
  'LetterOrder': LETTERORDER_DATA,
  'Memory': MEMORY_DATA,
};

export async function generateGameContent(
  language: Language,
  grade: Grade,
  type: GameType
): Promise<GameContent[]> {
  const gameDatabase = ALL_DATA[type];
  const staticItems = gameDatabase[language]?.[grade] || [];

  // Returner de statiske emner (shuffled)
  // Vi finder fra nærmeste trin som backup HVIS der ikke er noget overhovedet, 
  // men brugeren vil have specifikke trin, så vi prioriterer de rigtige data.
  let results = [...staticItems];

  if (results.length < 5) {
    // Find alle emner for sproget og spiltypen som backup
    const allForLang = Object.values(gameDatabase[language] || {}).flat() as GameContent[];
    results = [...results, ...allForLang];
  }

  // Shuffle og returner op til 20 opgaver pr. session
  return results.sort(() => Math.random() - 0.5).slice(0, 20);
}

export function getAvailableGameTypes(language: Language): GameType[] {
  return (Object.keys(ALL_DATA) as GameType[]).filter(type => {
    const gameDatabase = ALL_DATA[type];
    return gameDatabase[language] && Object.keys(gameDatabase[language]).length > 0;
  });
}
