
import { RoleKey, Question, CalculationResult } from './types';

export function calculateResult(answers: Record<number, number>, questions: Question[]): CalculationResult {
  const scores: Record<RoleKey, number> = {
    niugulu: 0, niuyork: 0, sheniu: 0, quanzhiniu: 0,
    huangama: 0, kajima: 0, elema: 0, banma: 0
  };
  const coreScores: Record<RoleKey, number> = {
    niugulu: 0, niuyork: 0, sheniu: 0, quanzhiniu: 0,
    huangama: 0, kajima: 0, elema: 0, banma: 0
  };

  Object.entries(answers).forEach(([qIdStr, optionIdx]) => {
    const qId = parseInt(qIdStr);
    const question = questions.find(q => q.id === qId);
    if (!question) return;

    const option = question.options[optionIdx];
    const mainScore = question.isCore ? 3 : 2;
    const subScore = 1;

    scores[option.mainType] += mainScore;
    scores[option.subType] += subScore;

    if (question.isCore) {
      coreScores[option.mainType] += mainScore;
      coreScores[option.subType] += subScore;
    }
  });

  // Find max score
  const maxScore = Math.max(...Object.values(scores));
  const topRoles = (Object.keys(scores) as RoleKey[]).filter(role => scores[role] === maxScore);

  if (topRoles.length === 1) {
    return { finalType: topRoles[0], scores, coreScores };
  }

  // Tie breaker 1: coreScores
  const maxCoreScore = Math.max(...topRoles.map(role => coreScores[role]));
  const coreTopRoles = topRoles.filter(role => coreScores[role] === maxCoreScore);

  if (coreTopRoles.length === 1) {
    return { finalType: coreTopRoles[0], scores, coreScores };
  }

  // Tie breaker 2: Last 3 questions mainType frequency
  const last3QIds = [14, 15, 16];
  const last3MainTypes = last3QIds.map(id => {
    const ansIdx = answers[id];
    return questions.find(q => q.id === id)?.options[ansIdx]?.mainType;
  }).filter(Boolean) as RoleKey[];

  const roleFrequencies: Record<string, number> = {};
  coreTopRoles.forEach(role => {
    roleFrequencies[role] = last3MainTypes.filter(t => t === role).length;
  });

  const maxFreq = Math.max(...Object.values(roleFrequencies));
  const freqTopRoles = coreTopRoles.filter(role => roleFrequencies[role] === maxFreq);

  return {
    finalType: freqTopRoles[0],
    hiddenType: freqTopRoles.length > 1 ? freqTopRoles[1] : undefined,
    scores,
    coreScores
  };
}
