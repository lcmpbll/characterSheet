import React, { useState} from "react";
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
import Loading from '../../Components/loading';
import useMediaQuery from "@mui/material/useMediaQuery";
import * as classes from "../../data/classes";
// import * as races from "../../data/races.json";
import { WidthFull } from "@mui/icons-material";
import InputField from '../../FormFields/InputField';
import { SelectField } from '../../FormFields/SelectField';


export const getOptions = (data) => {
  let array = [];
  
  Object.values(data).forEach((val) => array.push(val));
  array.push({name: "Other", url: null,  });
  return array;
};

// export const getRaceOptions = (data) => {
//   let array = [];
  
//   array.push("Other");
//   // return array;
//   if(data !== null){
//     console.log(data, 'ln 32');
//     data.forEach((val) => array.push(val));
//     array.push({name: "Other", url: null})
//     return array;
    
//   }
// }

const NameRaceClass = (props) => {

  const {
    formField: {
      firstName,
      lastName,
      race,
      characterClass
    },
    races,
    data
  } = props;
  const [raceOptions, setRaceOptions] = useState([]);
  const [classOptions, setClassOptions] = useState([]);
  // Form Setup
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingClass, setIsLoadingClass] = useState(true)
  if (races !== null && raceOptions.length < 2) {
    setRaceOptions(getOptions(races))
    setIsLoading(false)
  }
  if(data !== null && classOptions.length < 2){
    setClassOptions(getOptions(data.results));
    setIsLoadingClass(false)
  }

  const isNonMobile = useMediaQuery("min-width: 600px");


 

  return data? (
    <Box>
      {isLoading || isLoadingClass ? <Loading/> : (
         <Box>
          <InputField name={firstName.name} label={firstName.label} fullWidth/>
          <InputField name={lastName.name} label={lastName.label} fullWidth/>
          <SelectField name={race.name} label={race.label} data={raceOptions} fullWidth /> 
          <SelectField name={characterClass.name} label={characterClass.label} data={classOptions} fullWidth /> 
        </Box>
      )}
    </Box>
  ) : null ; 
}


export default NameRaceClass;
