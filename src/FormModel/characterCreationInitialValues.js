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
    character_speed,
    character_age,
    character_size,
    character_abilityBonuses,
    character_skill
  }
} = characterCreationFormModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [characterClass.name]: null,
  [race.name]: null,
  [gender.name]: '',
  [characterId.name]: uuid(),
  [level.name]: 1,
  [character_speed.name]: '',
  [character_age.name]: '',
  [character_size.name]: '',
  [character_abilityBonuses.name]: {},
  [character_skill]: {}
};

