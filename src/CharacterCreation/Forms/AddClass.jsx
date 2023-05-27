import React, {useContext} from 'react';
import Loading from '../../Components/loading';
import {Box, Typography } from '@mui/material';
// import InputField from '../../FormFields';
import { FormContext } from '../CreateNewCharacter';
import { SelectField } from '../../FormFields/SelectField';
import CheckBoxField from '../../FormFields/CheckboxField';

// build labels and names for all proficiency choices
const getProfienciesNumbers = (profChoices) => {

  // let profNumOpt = profChoices.reduce((arr, red) => {
    
  // }, []);
  // return profNumOpt;
}

export const getOptions = (data) => {
  console.log(data, 'data');
  
  if (data && Array.isArray(data)) { // Check if data is defined and an array
    const items = data.map((obj) => Object.values(obj.from));
    return items[0][1];
  }
};
const AddClassDetails = ({formField, data}) => {
  const {
    index,
    class_levels,
    hit_die,
    mulitClassing,
    name,
    proficiencies,
    proficiency_choices,
    saving_throws, 
    starting_equipment,
    starting_equiptment_options,
    subclasses,
    url,
    spellcasting
  } = data || {};
  const {currentCharacter, setCurrentCharacter} = useContext(FormContext);
  // console.log(currentCharacter, 'class')
  //  const proficienciesOptsNumber = getProfienciesNumbers( proficiency_choices)
  //  console.log(proficienciesOptsNumber)
  //const proficienciesOptions = proficiency_choices.forEach((option) => (option.from.forEach((item) => (item.name))))
  // console.log(proficiency_choices)
  const parsedChoices = getOptions(proficiency_choices);
  console.log(parsedChoices, 'pc');
  return  data ? (
    <Box>
      <h1>{data.name} Details</h1>
      <Box sx={{display: 'flex', flex: 2, flexDirection: 'row'}}>
        <Box sx={{flex: 1}}>
          <h3>Proficiencies</h3>
          {proficiencies.map((prof) => (
            <p>{prof.name}</p>
          ))}
        </Box>
        <Box sx={{flex: 1}}>
        <h3>Proficiency Options</h3>
          {proficiency_choices.map((prof) => (
           <Box>
              <p>{prof.desc}:</p>
              
              {parsedChoices.map((opt) => (
                <CheckBoxField name={opt.item} label={opt?.item?.name}/>
                
              ))}
            </Box>
          ))}
          
        </Box>
      </Box>
      <Box>
        <Box sx={{justifyContent:'space-evenly', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
        <Box>
          <p>Hit Die</p>
          {hit_die}
        </Box>
        <Box>
          <p>Hit Die</p>
          {hit_die}
        </Box>
        <Box>
          <p>Hit Die</p>
          {hit_die}
        </Box>
        <Box>
          <p>Hit Die</p>
          {hit_die}
        </Box>
        </Box>
      </Box>
    </Box>
    
  ) :  (
    <Loading/>
  );
}

export default AddClassDetails;


// class_levels
// : 
// "/api/classes/bard/levels"
// hit_die
// : 
// 8
// index
// : 
// "bard"
// multi_classing
// : 
// {prerequisites: Array(1), proficiencies: Array(1), proficiency_choices: Array(2)}
// name
// : 
// "Bard"
// proficiencies
// : 
// (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// proficiency_choices
// : 
// (2) [{…}, {…}]
// saving_throws
// : 
// (2) [{…}, {…}]
// spellcasting
// : 
// {level: 1, spellcasting_ability: {…}, info: Array(6)}
// spells
// : 
// "/api/classes/bard/spells"
// starting_equipment
// : 
// (2) [{…}, {…}]
// starting_equipment_options
// : 
// (3) [{…}, {…}, {…}]
// subclasses
// : 
// [{…}]
// url
// : 
// "/api/classes/bard"