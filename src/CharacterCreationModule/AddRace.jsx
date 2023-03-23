import * as data from "../data/races";
import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useContext } from 'react';
import { FormContext } from './NewCharacter';
import * as yup from 'yup';
import { Formik, Form } from "formik";



 // Add ability choice options
 // Add proficiencies
 // add clickable for more information to traits, and languages

const getRaceInfo = (data, race) => {
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


const getAvgAge = (ageDescription) => {
  
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



const AddRaceDetails = () => {
  const { nextStep, prevStep, currentStep, formData, setFormData, values } = useContext(FormContext);
  const raceDetails = getRaceInfo(data, "Dwarf")[0];
  const characterAbilityBonuses = getAbilityBonuses(raceDetails.ability_bonuses);
  const characterBonusAmounts = getIncreaseAmount(raceDetails.ability_bonuses);
  const averageRaceAge = getAvgAge(raceDetails.age);
  const abilityBonuses = combineAbilityBonuses(characterAbilityBonuses, characterBonusAmounts);
  const characterSchema = yup.object().shape({
    size: yup.string().required(),
    speed: yup.number().required(),
    abilityBonus: yup.object().required(),
    age: yup.number().required(),
  })
  const handleFormSubmit= (values) => {
    const data = { ...formData, ...values};
    setFormData(data);
    
    nextStep();
  }
  return (
    <Box>
      <Formik
        initialValues={{
          size: raceDetails.size,
          speed: raceDetails.speed,
          abilityBonusArray: characterAbilityBonuses, 
          abilityBonusAmount: characterBonusAmounts,
          abilityBonus: abilityBonuses,
          age: getAvgAge(raceDetails.age),
          
        }}
          onSubmit={handleFormSubmit}
          validationSchema={characterSchema}
        >
        {({ 
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <Form className="raceDetailsForm">
            <h1>{raceDetails.name}</h1>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Speed"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={raceDetails.speed}
              value={values.speed}
              name="speed"
              errors={!!touched.speed && !!errors.speed}
              helperText={touched.speed && errors.speed}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={raceDetails.size}
              value={values.size}
              name="speed"
              errors={!!touched.size && !!errors.size}
              helperText={touched.size && errors.size}
              sx={{ gridColumn: "span 1" }}
            /> 
             <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Age"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={averageRaceAge}
              value={values.age}
              name="age"
              errors={!!touched.age && !!errors.age}
              helperText={touched.speed && errors.age}
              sx={{ gridColumn: "span 1" }}
            />
            <Button type="submit" variant="contained">
                Continue
            </Button>  
          </Form>
        )}
      </Formik>
      
      <Box display="grid" justifyContent="start" m='20px'>
        <Typography>Stats:</Typography>
        <Box p='8px'>
          <Box sx={{
            display: 'grid',
            gridTemplateRows: '1fr 1fr 1fr 1fr',
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
      <Box>
        <Typography></Typography>
      </Box>
    </Box>
  );
};

export default AddRaceDetails;
