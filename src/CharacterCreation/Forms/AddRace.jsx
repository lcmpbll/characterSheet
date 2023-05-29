import React, {useState, useContext, useEffect } from 'react';
import Loading from '../../Components/loading';
import { Box, Typography, TextField, Grid } from "@mui/material";
import InputField from '../../FormFields/InputField';
import { FormContext } from '../CreateNewCharacter';

 // Add ability choice options
 // Add proficiencies
 // add clickable for more information to traits, and languages
 // add slider for age selection?
 // switch size selection to slectfield, 



const getAbilityBonuses = (data) => {
  let abilityArray = [];
  Object.values(data).forEach(ability => abilityArray.push(ability.ability_score?.index));
  
  return abilityArray;
} 

const getIncreaseAmount = (data) => {
  let abilityBonusArray = [];
  Object.values(data).forEach(ability => abilityBonusArray.push(ability.bonus));
  return abilityBonusArray;
  
}



export const getAvgAge = (ageDescription) => {
  
  let regExp = /([Aa]dult)/g;
  let numRegExp = /(\d+)/g;
  let array = [];
  let ageDescriptionArray = array.concat(ageDescription.match(numRegExp));
  if(ageDescriptionArray.length === 0){
    return 30;
  }else if(ageDescriptionArray.length >= 3){
    return ageDescriptionArray[2];
  }else if (ageDescriptionArray.length < 3){
    return ageDescriptionArray[0];
  }else{
    return ageDescriptionArray[1];
  }
  
}

const combineAbilityBonuses = (abilityName, bonusAmount) => {
  let bonusObject = {};
  if(abilityName !== null){
    for(let i = 0; i < abilityName.length; i ++){
      let key = abilityName[i];
      bonusObject[key] = bonusAmount[i];
    }
  }
  return bonusObject;
}



export const AddRaceDetails = ({formField, data }) => {
  const {
    character_speed,
    character_size,
    character_age,
    character_abilityBonuses
  } = formField;
  const { 
    ability_bonuses,
    age,
    alignment,
    index,
    language_desc,
    languages,
    name,
    size,
    size_description,
    speed,
    starting_proficiencies,
    subraces,
    traits,
    url
    } = data || {};
  // console.log(data, 'stuff');
  
  const [isLoading, setIsLoading] = useState(true);
  const {currentCharacter, setCurrentCharacter} = useContext(FormContext);
  
  let characterAbilityBonuses = null;
  let characterBonusAmounts = null;
  let abilityBonuses = null;
  useEffect(() => {
    if(data !== null){
    
      characterAbilityBonuses = getAbilityBonuses(ability_bonuses);
      characterBonusAmounts = getIncreaseAmount(ability_bonuses);
      abilityBonuses = combineAbilityBonuses(characterAbilityBonuses, characterBonusAmounts);
    
      const currentCharacterWithAbilities = {...currentCharacter, abilityBonuses}
      setCurrentCharacter(currentCharacterWithAbilities);
      
      if(abilityBonuses !== null){
        
        setIsLoading(false)
      }
      // console.log(currentCharacter);
    }
  }, [data])
 
 
  // const averageRaceAge = getAvgAge(raceDetails.age);
  
  return data? (
    <Box>
      <Box>

        <InputField name={character_speed.name} label={character_speed.label} fullWidth/>
        <InputField name={character_size.name} label={character_size.label} fullWidth/> 
        <InputField name={character_age.name} label={character_age.label} fullWidth/> 
        <InputField name={character_abilityBonuses.name} label={character_abilityBonuses.label} fullWidth />
      </Box>
      {/* {isLoading === false ?   */}
      <Box display="grid" justifyContent="start" m='20px'>
        <Typography>Common Stats: {name}</Typography>
        <Box p='8px'>
          <Box sx={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr 1fr 1fr',
            justifyContent: 'space-around'
          }}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 2fr 2fr',
              margin: '8px'
            }}> 
              <Box>
                <Typography m='3px'>Speed: {speed} feet</Typography>
                <Typography m='3px'>Size: {size}</Typography> 
              </Box>
              <Box>
                <Typography>Languages:</Typography>
                {languages.map((lang, index) => (
                  <Typography key={index}>
                    {lang.name}
                  </Typography>
                ))}
              </Box>
              <Box>
                <Typography>Traits: </Typography>
                {traits.map((trait, index) => (
                  <Typography key={index}>
                    {trait.name}
                  </Typography>
                ))}
              </Box>
              <Box>
                <AbilitiesComponent props={ability_bonuses}/>
              </Box>
            </Box>
            <Box sx={{
              display: 'grid',
            }}>
              
              <Typography>Age: {age}</Typography>
            </Box>
            <Box sx={{
              display: 'grid',
            }}>
              <Typography>{size_description}</Typography>
            </Box>
            <Box sx={{
              display: 'grid',
            }}>
              
              <Typography>{language_desc}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
     {/* : <Loading/> }   */}
      <Box>
        <Typography></Typography>
      </Box> 
     
     </Box>
  ): null;
};

const checkAbilities = (allAbilities, characterAbilities) => {

  const allAbilitiesKeys = Object.keys(allAbilities).sort();
  const characterAbilitiiesKeys = Object.keys(characterAbilities).sort();
 
  
  for(let i  = 0; i <  allAbilitiesKeys.length; i ++){
    for( let j = 0; j <= characterAbilitiiesKeys.length; j ++){
      if(allAbilitiesKeys[i] === characterAbilitiiesKeys[j]){
        
        allAbilities[allAbilitiesKeys[i]] = characterAbilities[characterAbilitiiesKeys[j]];
        i += 1;
        j = 0;
      }
    }
  }
  return allAbilities;
}


const AbilitiesComponent = (props) => {
  const {characterAbilities} = props;
  const allAbilities = { str: 0, dex: 0, int: 0, con: 0, wis: 0, cha: 0};
  const example = {str: 2, cha: 1};
  const [displayedAbilities, setDisplayedAbilities] = useState(checkAbilities(allAbilities, example));
 
  return (
    <Box>
      <p sx={{m: 0}}>Bonuses:</p>
      <Box sx={{display: 'flex', flexDirection: 'row', flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', m: 0, justifyContent: 'flex-start'}}>
          <p>Stregth: {displayedAbilities.str}</p>
          <p>Dexterity: {displayedAbilities.dex}</p>
          <p>Constitution: {displayedAbilities.con}</p>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', m: 0, justifyContent: 'flex-start'}}>
          <p>Intelligence: {displayedAbilities.int}</p>
          <p>Charisma: {displayedAbilities.cha}</p>
          <p>Wisdom: {displayedAbilities.wis}</p>
        </Box>
      </Box> 
   </Box>
  )
}