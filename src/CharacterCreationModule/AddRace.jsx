import * as data from "../data/races";
import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useContext } from 'react';
import { FormContext } from './NewCharacter';
import * as yup from 'yup';
import { Formik } from "formik";

const getRaceInfo = (data, race) => {
  return Object.values(data.default).filter((details) => details.name === race);
};
const AddRaceDetails = (props) => {
  const { nextStep, prevStep, currentStep, formData, setFormData, values } = useContext(FormContext);
  console.log(getRaceInfo(data, "Dragonborn")[0]);
  const raceDetails = getRaceInfo(data, "Dragonborn")[0];
  const abilityBonuses = raceDetails.ability_bonuses;
  console.log(abilityBonuses);
  
  const characterSchema = yup.object().shape({
    size: yup.string().required(),
    speed: yup.number().required()
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
          size: '',
          speed: '',
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
          <form className="raceDetailsForm">
            <h1>{raceDetails.name}</h1>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Speed"
              onBlur={handleBlur}
              // onChange={handleFormData("firstName")}
              placeholder={raceDetails.speed}
              // value={values.firstName}
              name="speed"
              errors={!!touched.speed && !!errors.speed}
              helperText={touched.speed && errors.speed}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Size"
              onBlur={handleBlur}
              // onChange={handleFormData("firstName")}
              placeholder={raceDetails.size}
              // value={values.firstName}
              name="speed"
              errors={!!touched.size && !!errors.size}
              helperText={touched.size && errors.size}
              sx={{ gridColumn: "span 2" }}
            /> 
            <Button type="submit" variant="contained">
                Continue
            </Button>  
          </form>
        )}
      </Formik>
      
      <Box display="grid" justifyContent="start">
        <Typography>Stats:</Typography>
        <Box>
          <Box>
            <Typography>Speed: {raceDetails.speed} feet</Typography>
            <Typography>Size: {raceDetails.size}</Typography>
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
