import React, { useContext, useEffect } from 'react';
import { FormContext } from '../CreateNewCharacter';
import * as data from "../../data/races.json";
import { Box, Typography, TextField, Grid } from "@mui/material";
import InputField from '../../FormFields/InputField';



 // Add ability choice options
 // Add proficiencies
 // add clickable for more information to traits, and languages

export const getRaceInfo = (data, race) => {
  return Object.values(data.default).filter((details) => details.name === race);
};

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
  
  // let regExp = /([Aa]dult)/g;
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



export const AddRaceDetails = (props) => {
  const {
    formField: {
      speed,
      size,
      age,
      
    }
  } = props;
  const { currentCharacter } = useContext(FormContext);
  console.log(currentCharacter);
  //formdata.race
  
  useEffect(() => {
    
  }, [currentCharacter])
  
  const getDetails = (currentCharacer) => {
    const raceDetails = getRaceInfo(data, 'Elf')[0];
    const characterAbilityBonuses = getAbilityBonuses(raceDetails.ability_bonuses);
    const characterBonusAmounts = getIncreaseAmount(raceDetails.ability_bonuses);
    return [raceDetails, characterAbilityBonuses, characterBonusAmounts];
  }
  // const averageRaceAge = getAvgAge(raceDetails.age);
  // const abilityBonuses = combineAbilityBonuses(characterAbilityBonuses, characterBonusAmounts);
  
  
  return (
    <Box>
      <Box>
        <Typography>Add Race Details</Typography>
        <InputField name={speed.name} label={speed.name} fullWidth/>
        <InputField name={size.name} label={size.name} fullWidth/> 
        <InputField name={age.name} label={age.name} fullWidth/>
      </Box>
      
      {/* <Box display="grid" justifyContent="start" m='20px'>
        <Typography>Stats:</Typography>
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
            }}> */}
              {/* <Box>
                <Typography m='3px'>Speed: {raceDetails.speed} feet</Typography>
                <Typography m='3px'>Size: {raceDetails.size}</Typography> 
              </Box>
              <Box>
                <Typography>Languages:</Typography>
                {raceDetails.languages.map((lang, index) => (
                  <Typography key={index}>
                    {lang.name}
                  </Typography>
                ))}
              </Box>
              <Box>
                <Typography>Traits: </Typography>
                {raceDetails.traits.map((trait, index) => (
                  <Typography key={index}>
                    {trait.name}
                  </Typography>
                ))}
              </Box>
              <Box sx={{display: 'grid', justifyContent: 'center'}}>
                <Typography>Ability Bonuses</Typography>
                <Box sx={{display: 'grid', gridTemplateColumns: '.3fr .3fr'}}>
                  <Box>{characterAbilityBonuses.map((ability, index) => (
                    <Typography key={index}>{ability}</Typography>
                  ))}</Box>
                  <Box>{characterBonusAmounts.map((bonus, index) => (
                    <Typography key={index}> + {bonus}</Typography>
                  ))}</Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{
              display: 'grid',
            }}>
              
              <Typography>Age: {raceDetails.age}</Typography>
            </Box>
            <Box sx={{
              display: 'grid',
            }}>
              <Typography>{raceDetails.size_description}</Typography>
            </Box>
            <Box sx={{
              display: 'grid',
            }}>
              
              <Typography>{raceDetails.language_desc}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography></Typography>
      </Box> */}
    </Box>
  );
};


