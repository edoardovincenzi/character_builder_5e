import { useState } from 'react';
import { getAbilityModifier, rollD20 } from '../utils';
import { PROFICIENCY_BONUS, abilities } from '../utils/constants';

const AbilitiesSaves = () => {
  const [resultRoll, setResultRoll] = useState<number | undefined>();
  const [ability, setAbility] = useState<string | undefined>();

  const listAbilities = abilities.map((ability) => {
    const baseModifier = getAbilityModifier(ability.value);
    const formattedModifier =
      baseModifier > 0 ? `+${baseModifier}` : baseModifier.toString();
    return (
      <div
        key={ability.name}
        className="flex cursor-pointer flex-col items-center justify-between border border-gray-300 rounded-lg p-4 gap-2"
        onClick={() => {
          setResultRoll(rollD20(baseModifier));
          setAbility('Tiro caratteristica - ' + ability.name);
        }}
      >
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-gray-300">{ability.name}</p>
          <p className="font-bold ">{formattedModifier}</p>
        </div>
        <div className="border-2 border-gray-300 rounded-lg p-1">
          <p className="font-bold  ">{ability.value}</p>
        </div>
      </div>
    );
  });
  const listSaves = abilities.map((ability) => {
    const baseModifier = getAbilityModifier(ability.value);
    const totalModifier = ability.proficienty
      ? baseModifier + PROFICIENCY_BONUS
      : baseModifier;
    const formattedModifier =
      totalModifier > 0 ? `+${totalModifier}` : totalModifier.toString();
    return (
      <div
        key={ability.name}
        className="flex flex-col cursor-pointer items-center justify-between border border-gray-300 rounded-lg p-4 gap-2"
        onClick={() => {
          setResultRoll(rollD20(totalModifier));
          setAbility('Tiro salvezza - ' + ability.name);
        }}
      >
        <div className="flex items-center justify-between gap-1 w-full">
          <p className="text-gray-300">{ability.name}</p>
          <p className="font-bold ">{formattedModifier}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <p className="font-bold text-gray-300 mb-4">
        Risultato per il <span className="font-bold text-white">{ability}</span>{' '}
        : <span className="font-bold text-white">{resultRoll}</span>
      </p>
      <div className="grid grid-cols-3 gap-4">{listAbilities}</div>
      <div className="mt-4">
        <h2 className="text-2xl w-full  mb-2">Tiri salvezza</h2>
        <div className="grid grid-cols-2 gap-4">{listSaves}</div>
      </div>
    </div>
  );
};

export default AbilitiesSaves;
