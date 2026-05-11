
export type RoleKey = 'niugulu' | 'niuyork' | 'sheniu' | 'quanzhiniu' | 'huangama' | 'kajima' | 'elema' | 'banma';

export interface Role {
  name: string;
  type: string;
  slogan: string;
  keywords: string[];
  image: string;
  description: string;
  dailyState: string[];
  exclusiveStrength: string;
  dailyActionGuide: string[];
}

export interface Option {
  text: string;
  mainType: RoleKey;
  subType: RoleKey;
}

export interface Question {
  id: number;
  question: string;
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
