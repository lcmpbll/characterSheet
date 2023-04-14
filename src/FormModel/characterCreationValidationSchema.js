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
    form_speed,
    form_age,
    form_size,
    form_abilityBonuses,
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
    [form_speed.name]: Yup.string().required(`${form_speed.requiredErrorMsg}`),
    [form_size.name]: Yup.string().required(`${form_size.requiredErrorMsg}`),
    [form_age.name]: Yup.string().required(`${form_age.name.requiredErrorMsg}`),
    [form_abilityBonuses.name]: Yup.object().required(`${form_abilityBonuses.name.requiredErrorMessage}`),
  })
]