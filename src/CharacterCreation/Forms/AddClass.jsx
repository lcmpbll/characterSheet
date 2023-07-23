import React, {useContext, useEffect} from 'react';
import Loading from '../../Components/loading';
import {Box, Typography } from '@mui/material';
// import InputField from '../../FormFields';
import { FormContext } from '../CreateNewCharacter';
import { SelectField } from '../../FormFields/SelectField';
import CheckBoxField from '../../FormFields/CheckboxField';
// construct screen switch to move back and forth
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
      
      // return options;
  
  }
};


const filterSavingThrows = (proficiencies) => {
  const noSavesArray = proficiencies.filter((profs) => profs.name.includes('Saving Throw:') === false);
  return noSavesArray;
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
  const inventory = [];
  const constructNewStats = (array, statName) => {
    // let newCharacter = {...currentCharacter};
    for(let i = 0; i < array.lenght; i ++){
      let newCharacter = {...currentCharacter, [statName[i]] : array[i]}
      setCurrentCharacter(newCharacter);
    }
    console.log(currentCharacter)
  }
  let noSaves = [];
  //useEffect
  if(proficiencies !== undefined){
    noSaves = filterSavingThrows(proficiencies);
    // constructNewStats(hit_die);
    // console.log(proficiencies);
    // console.log(spellcasting)
    
    
  }
  useEffect(() => {
    if(hit_die !== undefined){
      
      constructNewStats([hit_die, saving_throws, spellcasting], ['hit_die', 'saving_throws', 'spellcasting'])
    }
  }, [data])
  
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
                  <p>This is not an array || display a component that contains api info</p>
                }
              </Box>
            </Box>
          ))}
          
          </Box>
        </Box>
      </Box>
      {spellcasting ? (
        <Box>
          <p>Spellcasting</p>
          <SpellInfo spellInfo={spellcasting}/>
        </Box> 
      ) :  null}
    </Box>
    
  ) : 
  ( 
    <Loading/>
  )
}

export default AddClassDetails;


const SpellInfo = (props) => {
  const {spellInfo} = props;
 
  return ( 
    <Box>
      <p>Level: {spellInfo?.level} Magical Deets</p>
      <p>Spell casting Skill: {spellInfo?.spellcasting_ability.name}</p>
      <Box>
        {spellInfo?.info.map((skill) => (
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
            <p>{skill.name} :</p>
            {skill.desc.map((desc) => (
              <p>{desc}</p>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}