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
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import * as classes from "./data/classes";
import * as races from "./data/races";

const initialValues = {
  id: "",
  firstName: "",
  lastName: "",
  class: "",
  race: "",
  level: 1
};

const getOptions = (data) => {
  let array = [];
  Object.values(data.default).forEach((val) => array.push(val.name));
  array.push("Other");
  return array;
};

const characterSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().nullable().notRequired(),
  class: yup.string().required("required"),
  race: yup.string().required("required"),
  //gender?
  level: yup.number().required("required")
});

const NewCharacterForm = (props) => {
  const { handleAddingCharacterToList } = props;
  const navigate = useNavigate();
  console.log(props);
  const [characterRace, setCharacterRace] = useState("");
  // const [customRace, setCustomRace] = useState("");
  // const [raceValue, setRaceValue] = useState("");
  const [characterClass, setCharacterClass] = useState("");
  // const [customClass, setCustomClass] = useState("");
  // const [classValue, setClassValue] = useState('');
  // const getFinalSelection = () => {
  //   if(characterClass === 'Other' && customClass !== ''){
  //     setClassValue(customClass);
  //   }else{
  //     setClassValue(characterClass);
  //   }
  //   console.log(characterRace, customRace);
  //   if(characterRace === 'Other' && customRace !== ''){
  //     setRaceValue(customRace);
  //   }else{
  //     setRaceValue(characterRace);
  //   }
  //   console.log(raceValue);
  // }
  const raceOptions = getOptions(races);
  const classOptions = getOptions(classes);
  const isNonMobile = useMediaQuery("min-width: 600px");
  const handleFormSubmit = (values, { resetForm }) => {
    // getFinalSelection();
    const newCharacter = {
      id: uuid(),
      firstName: values.firstName,
      lastName: values.lastName,
      class: characterClass,
      race: characterRace
    };
    // console.log(newCharacter);
    resetForm({ values: "" });
    handleAddingCharacterToList(newCharacter);
    navigate("/addRaceDetails");
  };
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
  // const handleRaceChangeOther = (event) => {
  //   console.log(event);
  //   console.log(value);
  //   const {
  //     target: {value}
  //   } = event;
  //   raceOptions.push(value);
  //   setCustomRace(value);
  // }

  return (
    <Box>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validation={characterSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
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
              {/* Race Select Box */}
              {/* {characterRace !== 'Other' ?  */}
              <FormControl sx={{ gridColumn: "span 2" }}>
                <InputLabel id="race-label-helper">
                  {characterClass === "" ? "Race" : characterRace}
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
                      // style={getStyles(name, personName, theme)}
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
                      // style={getStyles(name, personName, theme)}
                    >
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained">
                Create Character
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default NewCharacterForm;
