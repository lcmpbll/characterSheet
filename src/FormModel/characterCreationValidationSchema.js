import * as Yup from 'yup';
import characterCreationFormModel from './characterCreationFormModel';

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
    character_skill,
  }
} = characterCreationFormModel;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [characterClass.name]: Yup.object().required(`${characterClass.requiredErrorMsg}`),
    [race.name]: Yup.object().required(`${race.requiredErrorMsg}`),
    //[gender.name]: Yup.string().required(`${gender.requiredErrorMsg}`),
    [level.name]: Yup.string().required(`${level.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [character_speed.name]: Yup.string().required(`${character_speed.requiredErrorMsg}`),
    [character_size.name]: Yup.string().required(`${character_size.requiredErrorMsg}`),
    [character_age.name]: Yup.number().required(`${character_age.name.requiredErrorMsg}`),
    [character_abilityBonuses.name]: Yup.object(),
    [character_skill.name]: Yup.object(),
  }),
  // Yup.object().shape({
  //   [character_proficiencies.name]: Yup.object().required(`${character_speed.requiredErrorMsg}`),
  //   [character_size.name]: Yup.string().required(`${character_size.requiredErrorMsg}`),
  //   [character_age.name]: Yup.string().required(`${character_age.name.requiredErrorMsg}`),
  //   [character_abilityBonuses.name]: Yup.object(),
  // })
]