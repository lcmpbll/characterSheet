import React, { useContext, useEffect, useState } from 'react';
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
  const [pageData, setPageData] = useState(null);
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const {
    formField: {
      speed,
      size,
      age,
      
    }
  } = props;
  const { currentCharacter } = useContext(FormContext);
  
  //formdata.race
  
  useEffect(() => {
    setPageData(getDetails(currentCharacter));
    forceUpdate();
  }, [currentCharacter])
  
  const getDetails = (currentCharacter) => {
    if(typeof currentCharacter !== undefined){
      const raceDetails = getRaceInfo(data, 'Elf')[0];
      const characterAbilityBonuses = getAbilityBonuses(raceDetails.ability_bonuses);
      const characterBonusAmounts = getIncreaseAmount(raceDetails.ability_bonuses);
      console.log(pageData, 'speed');
      return [raceDetails, characterAbilityBonuses, characterBonusAmounts];
      
    }
  }
  let raceDetails = null;
  let characterAbilityBonuses = null;
  let characterBonusAmounts = null;
  const abilityBonuses = null;
  if(pageData !== null){
     raceDetails = pageData[0];
     characterAbilityBonuses = pageData[1];
     characterBonusAmounts = pageData[2];
     const abilityBonuses = combineAbilityBonuses(characterAbilityBonuses, characterBonusAmounts);
     
  }
  console.log(typeof pageData);
  // const averageRaceAge = getAvgAge(raceDetails.age);
  
  return (
    <Box>
      <Box>

        <InputField name={speed.name} label={speed.label} fullWidth/>
        <InputField name={size.name} label={size.label} fullWidth/> 
        <InputField name={age.name} label={age.label} fullWidth/>
        {/* <InputField name={abilityBonuses.name} label={abilityBonuses.label} fullWidth/> */}
      </Box>
      {pageData !== null ?  
     <Box display="grid" justifyContent="start" m='20px'>
        <Typography>Common Stats: {raceDetails.name}</Typography>
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
     : null }  
      <Box>
        <Typography></Typography>
      </Box> 
     
    </Box>
  );
};


