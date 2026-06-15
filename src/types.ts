/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'Dansk' | 'Engelsk' | 'Tysk' | 'Fransk' | 'Spansk';

export type Grade = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type GameType = 'Match' | 'Audio' | 'Grammar' | 'Cloze' | 'Reading' | 'WordSort' | 'LetterOrder' | 'Memory';

export interface GameContent {
  id: string;
  type: GameType;
  question: string;
  options?: string[];
  answer: string;
  instruction: string;
  audioUrl?: string;
  imageUrl?: string;
  context?: string; // For Cloze or Reading
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  condition: string;
}

export interface ScoreEntry {
  date: string;
  score: number;
  language: Language;
  type: GameType | 'Random';
}

export interface UserProgress {
  scores: Record<Language, number>;
  currentGrade: Grade;
  streak: number;
  lastPlayDate?: string;
  history: ScoreEntry[];
  achievements: string[]; // IDs of unlocked achievements
}

export interface GameState {
  currentLanguage: Language;
  currentGrade: Grade;
  isChallengeMode: boolean;
  score: number;
}
