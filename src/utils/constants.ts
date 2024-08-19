import characterImage from '../assets/images/freith.jpeg';

export const characterInfo = {
  name: 'Freith',
  race: "Mezz'elfo",
  classes: [
    {
      name: 'Ladro',
      level: 6,
    },
    // {
    //   name: 'Ladros',
    //   level: 6,
    // },
  ],
  image: { name: 'character Image', link: characterImage },
  armor: 16,
  hitPoints: {
    total: 90,
    remain: 90,
  },
};

export const valuesDropdown = [
  {
    value: '/',
    label: 'Caratteristiche',
  },
  {
    value: '/skills',
    label: 'Abilità',
  },
  {
    value: '/actions',
    label: 'Azioni',
  },
  {
    value: '/notes',
    label: 'Note',
  },
  {
    value: '/background',
    label: 'Background',
  },
];

export const PROFICIENCY_BONUS = 3;

type AbilitiesType =
  | 'Forza'
  | 'Destrezza'
  | 'Costituzione'
  | 'Intelligenza'
  | 'Saggezza'
  | 'Carisma';

interface Abilities {
  name: AbilitiesType;
  value: number;
  proficienty: boolean;
}

export const abilities: Abilities[] = [
  { name: 'Forza', value: 8, proficienty: false },
  { name: 'Destrezza', value: 17, proficienty: true },
  { name: 'Costituzione', value: 14, proficienty: false },
  { name: 'Intelligenza', value: 10, proficienty: true },
  { name: 'Saggezza', value: 12, proficienty: false },
  { name: 'Carisma', value: 16, proficienty: false },
];

export type AbilityMod = 'FOR' | 'DES' | 'COS' | 'INT' | 'SAG' | 'CAR';

export type SkillName =
  | 'Acrobazia'
  | 'Addestrare Animali'
  | 'Arcano'
  | 'Atletica'
  | 'Inganno'
  | 'Intrattenere'
  | 'Intuizione'
  | 'Investigazione'
  | 'Natura'
  | 'Percezione'
  | 'Persuasione'
  | 'Rapidità di Mano'
  | 'Risolutezza'
  | 'Religione'
  | 'Sopravvivenza'
  | 'Storia'
  | 'Furtività'
  | 'Medicina'
  | 'Intimidire';

export interface Skill {
  proficient: boolean;
  expertise: boolean;
  name: SkillName;
  mod: AbilityMod;
}

export const skills: Skill[] = [
  { proficient: false, expertise: false, name: 'Acrobazia', mod: 'DES' },
  {
    proficient: false,
    expertise: false,
    name: 'Addestrare Animali',
    mod: 'SAG',
  },
  { proficient: false, expertise: false, name: 'Arcano', mod: 'INT' },
  { proficient: true, expertise: true, name: 'Atletica', mod: 'FOR' },
  { proficient: true, expertise: false, name: 'Inganno', mod: 'CAR' },
  { proficient: false, expertise: false, name: 'Intrattenere', mod: 'CAR' },
  { proficient: true, expertise: true, name: 'Intuizione', mod: 'SAG' },
  { proficient: false, expertise: false, name: 'Investigazione', mod: 'INT' },
  { proficient: false, expertise: false, name: 'Natura', mod: 'INT' },
  { proficient: true, expertise: true, name: 'Percezione', mod: 'SAG' },
  { proficient: true, expertise: true, name: 'Persuasione', mod: 'CAR' },
  { proficient: false, expertise: false, name: 'Rapidità di Mano', mod: 'DES' },
  { proficient: false, expertise: false, name: 'Risolutezza', mod: 'COS' },
  { proficient: false, expertise: false, name: 'Religione', mod: 'INT' },
  { proficient: false, expertise: false, name: 'Sopravvivenza', mod: 'SAG' },
  { proficient: false, expertise: false, name: 'Storia', mod: 'INT' },
  { proficient: true, expertise: true, name: 'Furtività', mod: 'DES' },
  { proficient: false, expertise: false, name: 'Medicina', mod: 'SAG' },
  { proficient: true, expertise: true, name: 'Intimidire', mod: 'CAR' },
];
