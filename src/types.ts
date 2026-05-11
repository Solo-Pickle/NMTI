
export type RoleKey = 'niugulu' | 'niuyork' | 'sheniu' | 'quanzhiniu' | 'huangama' | 'kajima' | 'elema' | 'banma';
export type Language = 'zh' | 'en';

export interface Role {
  name: { zh: string; en: string };
  type: { zh: string; en: string };
  slogan: { zh: string; en: string };
  keywords: { zh: string[]; en: string[] };
  image: string;
  description: { zh: string; en: string };
  dailyState: { zh: string[]; en: string[] };
  exclusiveStrength: { zh: string; en: string };
  dailyActionGuide: { zh: string[]; en: string[] };
}

export interface Option {
  text: { zh: string; en: string };
  mainType: RoleKey;
  subType: RoleKey;
}

export interface Question {
  id: number;
  question: { zh: string; en: string };
  isCore: boolean;
  options: Option[];
}

export interface CalculationResult {
  finalType: RoleKey;
  hiddenType?: RoleKey;
  scores: Record<RoleKey, number>;
  coreScores: Record<RoleKey, number>;
}

export type Step = 'home' | 'quiz' | 'loading' | 'result' | 'gallery';
