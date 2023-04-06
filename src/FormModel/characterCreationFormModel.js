export default {
  formId: 'characterCreationForm',
  formField: {
    firstName: {
      name: 'firstName',
      label: 'First name*',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required'
    },
    characterClass: {
      name: 'characterClass',
      label: 'Class*',
      requiredErrorMsg: 'A class selection is required'
    },
    race: {
      name: 'race',
      label: 'A race selection is required'
    },
    gender: {
      name: 'gender',
      label: 'Gender*',
      requiredErrorMsg: 'City is required'
    },
    characterId: {
      name: 'characterId',
      label: 'characterId'
    },
    level: {
      name: 'level',
      label: 'Level*',
      requiredErrorMsg: 'Level is required',
      invalidErrorMsg: 'Please select a level'
    },
    speed: {
      name: 'speed',
      label: 'Speed*',
      requiredErrorMsg: 'Speed is required'
    },
    age: {
      name: 'age',
      label: 'Age'
    },
    size: {
      name: 'size',
      label: 'Size*',
      requiredErrorMsg: 'Size is requied'
    },
    ownerId: {
      name: 'ownerId',
      label: 'owner id',
      requiredErrorMessage: 'Owner Id is required.'
    },
    abilityBonuses: {
      name: 'abilityBonuses',
      label: 'Ability Bonuses',
      requiredErrorMessage: 'This is not required.'
    },
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
