export default {
  formId: 'characterCreationForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First Name',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last Name',
      requiredErrorMsg: 'Last name is required'
    },
    characterClass: {
      name: 'characterClass',
      label: 'Class',
      requiredErrorMsg: 'A class selection is required'
    },
    race: {
      name: 'race',
      label: 'Race',
      requiredErrorMsg: 'A race selection is required'
    },
    gender: {
      name: 'gender',
      label: 'Gender',
      requiredErrorMsg: 'City is required'
    },
    characterId: {
      name: 'characterId',
      label: 'characterId'
    },
    level: {
      name: 'level',
      label: 'Level',
      requiredErrorMsg: 'Level is required',
      invalidErrorMsg: 'Please select a level'
    },
    character_speed: {
      name: 'speed',
      label: 'Speed',
      requiredErrorMsg: 'Speed is required'
    },
    character_age: {
      name: 'age',
      label: 'Age'
    },
    character_size: {
      name: 'size',
      label: 'Size',
      requiredErrorMsg: 'Size is requied'
    },
    ownerId: {
      name: 'ownerId',
      label: 'owner id',
      requiredErrorMessage: 'Owner Id is required.'
    },
    character_abilityBonuses: {
      name: 'abilityBonuses',
      label: 'Ability Bonuses',
      
    },
    character_skill: {
      name: 'character_skills',
      label: 'Skills'
    }
    // expiryDate: {
    //   name: 'expiryDate',
    //   label: 'Expiry date*',
    //   requiredErrorMsg: 'Expiry date is required',
    //   invalidErrorMsg: 'Expiry date is not valid'
    // },
    // cvv: {
    //   name: 'cvv',
    //   label: 'CVV*',
    //   requiredErrorMsg: 'CVV is required',
    //   invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    // }
  }
};
