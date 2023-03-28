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
import { FormContext } from './NewCharacter';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import * as classes from "../data/classes";
import * as races from "../data/races";
import { WidthFull } from "@mui/icons-material";
import { InputField } from '../FormFields/InputField';
import { SelectField } from '../FormFields/SelectField';

export const getOptions = (data) => {
  let array = [];
  
  Object.values(data.default).forEach((val) => array.push(val.name));
  array.push("Other");
  return array;
};

export const NameRaceClass = () => {
  const { nextStep, prevStep, currentStep, formData, setFormData, values } = useContext(FormContext);
  const [characterRace, setCharacterRace] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  // Form Setup
  const raceOptions = getOptions(races);
  const classOptions = getOptions(classes);
  const isNonMobile = useMediaQuery("min-width: 600px");
  
  // const characterSchema = yup.object().shape({
  //   characterId: yup.string().required(),
  //   firstName: yup.string().required("required"),
  //   lastName: yup.string().nullable().notRequired(),
  //   class: yup.string().required("required"),
  //   race: yup.string().required("required"),
  //   level: yup.number().required("required")
  // });
  
  const handleFormSubmit= (values) => {
    const data = { ...formData, ...values };
    setFormData(data);
    console.log(data);
    nextStep();
  }
  
  const handleRaceChange = (event) => {
    const {
      target: { value }
    } = event;
    setCharacterRace(value);
  };
  const handleClassChange = (event) => {
    const {
      target: { value }
    } = event;
    setCharacterClass(value);
  };

  return (
    <Box>
      <Formik
        initialValues={{
          characterId: uuid(),
          level: 1,
          firstName: '',
          lastName: '',
          class: '',
          race: '',
          }}
          onSubmit={handleFormSubmit}
          // validationSchema={characterSchema}
        >
        {({ 
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <Form  
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4 minmax(0, 1fr))" className="raceDetailsForm">
            
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="First Name"
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder={"First Name"}
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
              placeholder={'Last Name'}
              value={values.lastName}
              name="lastName"
              errors={!!touched.lastName && !!errors.lastName}
              helperText={touched.lastName && errors.lastName}
              sx={{ gridColumn: "span 2" }}
            /> 
            {/* race selection */}
            <FormControl sx={{ gridColumn: "span 2" }}>
                <InputLabel id="race-label-helper">
                  {/* {characterRace === "" ? "Race" : characterRace} */}
                  Race
                </InputLabel>
                <Select
                  fullWidth
                  labelId="race-select-label"
                  id="race-select"
                  value={values.race}
                  onChange={handleChange}
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
           
              
        <Grid item xs={12} sm={6}>
          <SelectField
            name={values.class}
            label={values.class}
            data={classOptions}
            fullWidth
          />
          </Grid>
           
            <Button type="submit" variant="contained">
                Continue
            </Button>  
          </Form>
        )}
      </Formik>
    </Box>
  )
}
