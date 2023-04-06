import {
  Box,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
  OutlinedInput,
  Grid
} from "@mui/material";
import { v4 as uuid } from "uuid";
import React, { useState, useContext } from "react";
import Loading from '../../Components/loading';
import useMediaQuery from "@mui/material/useMediaQuery";
import * as classes from "../../data/classes";
import * as races from "../../data/races.json";
import { WidthFull } from "@mui/icons-material";
import InputField from '../../FormFields/InputField';
import { SelectField } from '../../FormFields/SelectField';


export const getOptions = (data) => {
  let array = [];
  
  Object.values(data.default).forEach((val) => array.push(val.name));
  array.push("Other");
  return array;
};

export const getRaceOptions = (data) => {
  let array = [];
  
  array.push("Other");
  // return array;
  if(data !== null){
    console.log(data, 'ln 32');
    data.forEach((val) => array.push(val.name));
    
    return array;
    
  }
}

export const NameRaceClass = (props) => {
  const {
    formField: {
      firstName,
      lastName,
      race,
      characterClass
    },
    data
  } = props;
  // Form Setup
  const [isLoading, setIsLoading] = useState(true);
  
  const raceOptions = getRaceOptions(data);
  const classOptions = getOptions(classes);
  const isNonMobile = useMediaQuery("min-width: 600px");
  
  setTimeout(() => {
    if(data !== undefined){
      setIsLoading(false);
    }   
  }, 3000)
 

  return (
    <Box>
      {isLoading ? <Loading/> : (
         <Box>
          <InputField name={firstName.name} label={firstName.name} fullWidth/>
          <InputField name={lastName.name} label={lastName.name} fullWidth/>
          <SelectField name={characterClass.name} label={characterClass.name} data={classOptions} fullWidth/>
          <SelectField name={race.name} label={race.name} data={raceOptions} fullWidth />
        </Box>
      )}
    </Box>
  )
}
