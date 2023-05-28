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

const getOptions = (data) => {

  if (data && Array.isArray(data)) { // Check if data is defined and an array
    const items = data.map((obj) => Object.values(obj.from));
   

      
      return items[0][1];
  
  }
};

const getEquipmentOptions = (data) => {

  if (data && Array.isArray(data)) { // Check if data is defined and an array
    const items = data.map((obj) => console.log(obj));
    // console.log(items, 'items')
    // const options = data.map((item) => Object.values(item.from))
      console.log(data, 'data eqe')
      // return options;
  
  }
};


const filterSavingThrows = (proficiencies) => {
  const noSavesArray = proficiencies.filter((profs) => profs.name.includes('Saving Throw:') === false);
  return noSavesArray;
}

const constructNewStats = (hd) => {
  const newStats = hd;
  return newStats;
}
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
    starting_equipment_options,
    subclasses,
    url,
    spellcasting
  } = data || {};
  const {currentCharacter, setCurrentCharacter} = useContext(FormContext);
  let noSaves = [];
  let startingEqOptions = [];
  let someEQ = [];
  if(proficiencies !== undefined){
    noSaves = filterSavingThrows(proficiencies);
    startingEqOptions = getOptions(starting_equipment_options);
    someEQ = Object.values(starting_equipment_options);
    console.log(starting_equipment_options, ' 55')
    console.log(starting_equipment_options[1].from, '56')
    console.log(getEquipmentOptions(startingEqOptions), 'ln 77')
    console.log(startingEqOptions, 'ln 29')
    
  }
  const parsedChoices = getOptions(proficiency_choices);
  
  return  data ? (
    <Box>
      <h1>{name} Details</h1>
      <Box>
        <Box sx={{justifyContent:'space-evenly', alignItems: 'center', display: 'flex', flexDirection: 'row'}}>
        <Box>
          <p>Hit Die</p>
          {hit_die}
        </Box>
        <Box>
          <p>Saving Throw Bonuses</p>
          {saving_throws.map((bonus) => (
            <p key={bonus.index}>{bonus.name}</p>
          ))}
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
      <Box sx={{display: 'flex', flex: 4, flexDirection: 'row'}}>
        <Box sx={{flex: 1}}>
          <h3>Proficiencies</h3>
          {noSaves.map((prof) => (
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
        <Box sx={{display: 'flex', flex: 2, flexDirection: 'row'}}>
          <Box sx={{flex: 1}}>
            <h3>Equipment</h3>
            {starting_equipment.map((equip) => (
              <p>{equip.equipment.name}</p>
            ))} 

          </Box>
          <Box sx={{flex: 1}}>
          <h3>Equipment Options</h3>
          {starting_equipment_options.map((option, index) => (
            <Box key={index}>
              <p>{option.desc}</p>
              <p>Choose: {option.choose}</p>
              <Box>
                {option.from.option_set_type === 'options_array' ?
                option.from.options.map((item) => (
                  <CheckBoxField name={item} label={item.name} />
                ))
                : 
                  <p>This is not an array</p>
                }
              </Box>
            </Box>
          ))}
          
          </Box>
        </Box>
      </Box>
    </Box>
    
  ) : 
  ( 
    <Loading/>
  )
}

export default AddClassDetails;
