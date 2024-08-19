import { useState } from 'react';
import { calculateSkillValue, rollD20 } from '../utils';
import { SkillName, skills } from '../utils/constants';

const Skills = () => {
  const [resultRoll, setResultRoll] = useState<number | undefined>();
  const [ability, setAbility] = useState<SkillName | undefined>();

  const listSkill = skills.map((skill) => {
    const baseSkillValue = calculateSkillValue(skill);
    const formattedSkillValue =
      baseSkillValue > 0 ? `+${baseSkillValue}` : baseSkillValue.toString();
    return (
      <div
        className="flex cursor-pointer items-center gap-3 border-2 border-gray-300 rounded-lg p-3 py-4"
        key={skill.name}
        onClick={() => {
          setResultRoll(rollD20(baseSkillValue));
          setAbility(skill.name);
        }}
      >
        <p className="flex-1">{skill.name}</p>
        <div className="flex items-center w-20">
          <p className=" w-10">{skill.mod}</p>
          <p className="ml-auto">{formattedSkillValue}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col w-full gap-2">
      <p className="font-bold text-gray-300 mb-4">
        Risultato per il tiro di{' '}
        <span className="font-bold text-white">{ability}</span> :{' '}
        <span className="font-bold text-white">{resultRoll}</span>
      </p>
      {listSkill}
    </div>
  );
};

export default Skills;
