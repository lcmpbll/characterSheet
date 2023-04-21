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
    form_speed,
    form_age,
    form_size,
    form_abilityBonuses,
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
  [form_speed.name]: '',
  [form_age.name]: '',
  [form_size.name]: '',
  [form_abilityBonuses.name]: null,
};

