import * as Yup from 'yup';
import characterCreationFormModel from './characterCreationFormModel';

const {
  formField: {
    firstName,
    lastName,
    characterClass,
    race,
    //gender,
    characterId,
    level,
    speed,
    age,
    size,
    abilityBonuses,
  }
} = characterCreationFormModel;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [characterClass.name]: Yup.string().required(`${characterClass.requiredErrorMsg}`),
    [race.name]: Yup.string().required(`${race.requiredErrorMsg}`),
    //[gender.name]: Yup.string().required(`${gender.requiredErrorMsg}`),
    [level.name]: Yup.string().required(`${level.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [speed.name]: Yup.string().required(`${speed.requiredErrorMsg}`),
    [size.name]: Yup.string().required(`${size.requiredErrorMsg}`),
    [age.name]: Yup.string().required(`${age.name.requiredErrorMsg}`),
    [abilityBonuses.name]: Yup.object().required(`${abilityBonuses.name.requiredErrorMessage}`),
  })
]