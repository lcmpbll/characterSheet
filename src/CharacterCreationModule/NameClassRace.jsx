import {
  Box,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  TextField,
  OutlinedInput
} from "@mui/material";
import { v4 as uuid } from "uuid";
import React, { useState, useContext } from "react";
import { FormContext } from './NewCharacter';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import * as classes from "../data/classes";
import * as races from "../data/races";





export const getOptions = (data) => {
  let array = [];
  
  Object.values(data.default).forEach((val) => array.push(val.name));
  array.push("Other");
  return array;
};

export const NameClassRace = (props) => {

  // Form Setup
  const raceOptions = getOptions(races);
  const classOptions = getOptions(classes);
  const isNonMobile = useMediaQuery("min-width: 600px");


  
  // const { currentStep, nextStep, formData, setFormData } = useContext(FormContext);
  
 



  // const handleFormSubmit = (values) => {
  //   const data = { ...formData, ...values};
  //   setFormData(data);
  //   console.log(formData, values);
  //   nextStep();
  // }


  return (
    <Box>
      <Formik
        
        // onSubmit={handleFormSubmit()}
        // initialValues={initialValues}
        // // validationSchema={characterSchema}
      >
       {({values, errors, handleChange, handleBlur, touched, onSubmit }) => 
          <Form>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4 minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                errors={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                errors={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lasttName}
                sx={{ gridColumn: "span 2" }}
              />
              <ErrorMessage name="name" render={renderError} />
              {/* Race Select Box */}
              {/* {characterRace !== 'Other' ?  */}
              <FormControl sx={{ gridColumn: "span 2" }}>
                <InputLabel id="race-label-helper">
                  {characterRace === "" ? "Race" : characterRace}
                </InputLabel>
                <Select
                  labelId="race-select-label"
                  id="race-select"
                  value={values.race}
                  onChange={handleRaceChange}
                  input={<OutlinedInput label="Race" />}
                >
                  {raceOptions.map((type, index) => (
                    <MenuItem
                      key={index}
                      value={type}
                      
                    >
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* // :
              // <Box display='grid' gridTemplateColumns='2fr 1fr' >
              //   <TextField
              //     fullWidth
              //     variant="filled"
              //     type="text"
              //     label="Custom Race Input"
              //     // onBlur={handleBlur}
              //     onSubmit={handleRaceChangeOther}
              //     value={values.customRace}
              //     name="otherRace"
              //     // errors={!!touched.race && !!errors.race}
              //     // helperText={touched.race && errors.race}
              //     sx={{ gridColumn: "span 1" }}
              //   />
              //   <Box>
              //     <Button onSubmit={() => {handleRaceChangeOther('')}}>Select Race</Button>
              //     <Button onClick={() => {setCharacterRace('')}}>Clear Selection</Button>
              //   </Box>    {characterRace === "" ? "Race" : characterRace}
           
              // </Box>
              //    }
              */}

              {/* Class Select Box */}
              <FormControl sx={{ gridColumn: "span 2" }}>
                <InputLabel id="class-label-helper">
                  {characterClass === "" ? "Class" : characterClass}
                </InputLabel>
                <Select
                  labelId="class-select-label"
                  id="class-select"
                  value={values.class}
                  onChange={handleClassChange}
                  input={<OutlinedInput label="Class" />}
                >
                  {classOptions.map((type, index) => (
                    <MenuItem
                      key={index}
                      value={type}
                      
                    >
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" variant="contained">
                Continue
            </Button>  
            </Box>
          </Form>
        }
      </Formik>
    </Box>
  );
};


