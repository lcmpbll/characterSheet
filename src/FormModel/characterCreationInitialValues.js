import characterCreationFormModel from "./characterCreationFormModel";
import { v4 as uuid } from 'uuid'

const {
  formField: {
    firstName,
    lastName,
    characterClass,
    race,
    gender,
    characterId,
    level,
    speed,
    age,
    size,
    abilityBonuses,
  }
} = characterCreationFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [characterClass.name]: '',
  [race.name]: '',
  [gender.name]: '',
  [characterId.name]: uuid(),
  [level.name]: 1,
  [speed.name]: '',
  [age.name]: '',
  [size.name]: '',
  [abilityBonuses.name]: [],
};

