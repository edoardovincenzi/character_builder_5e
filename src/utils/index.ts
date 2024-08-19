import {
  AbilitiesType,
  AbilityMod,
  PROFICIENCY_BONUS,
  Skill,
  abilities,
} from './constants';

export function getAbilityModifier(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function calculateSkillValue(skill: Skill): number {
  const ability = abilities.find((a) => a.name === getAbilityName(skill.mod));

  if (!ability) {
    throw new Error(`Ability with mod ${skill.mod} not found.`);
  }

  const modifier = getAbilityModifier(ability.value);

  const proficiencyBonusEffective = skill.expertise
    ? 2 * PROFICIENCY_BONUS
    : skill.proficient
    ? PROFICIENCY_BONUS
    : 0;

  const skillValue = modifier + proficiencyBonusEffective;

  return skillValue;
}

function getAbilityName(mod: AbilityMod): string {
  switch (mod) {
    case 'FOR':
      return 'Forza';
    case 'DES':
      return 'Destrezza';
    case 'COS':
      return 'Costituzione';
    case 'INT':
      return 'Intelligenza';
    case 'SAG':
      return 'Saggezza';
    case 'CAR':
      return 'Carisma';
    default:
      throw new Error(`Unknown ability mod: ${mod}`);
  }
}

export function rollD20(modifier: number = 0): number {
  const roll = Math.floor(Math.random() * 20) + 1;

  return roll + modifier;
}

export const getAbility = (nameAbility: AbilitiesType) => {
  return abilities.find((ability) => (ability.name = nameAbility));
};

export const passivePerception = () => {
  return (
    10 +
    getAbilityModifier(getAbility('Saggezza')?.value ?? 0) +
    PROFICIENCY_BONUS
  );
};
