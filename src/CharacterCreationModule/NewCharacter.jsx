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
import React, { useState, createContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import * as classes from "../data/classes";
import * as races from "../data/races";
import { NameClassRace } from "./NameClassRace";
import { AddRaceDetails } from "./AddRace";
import Stepper from  './Stepper';
import { Step } from './Steps';

export const FormContext = createContext();

export const NewCharacterForm = (props) => {
  const { handleAddingCharacterToList } = props;
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({});
  console.log(formData);
  //Control back and fourth for character creation steps
  const [ currentStep, setCurrentStep] = useState(1);
  const nextStep = () => {
    
    setCurrentStep( currentStep + 1);
  };
  const prevStep = () => {
    setCurrentStep( currentStep - 1);
  };
  
  // handleAddingCharacterToList(formData);
  
  //handling form input by taking the onchange value ad updating previous form data state
  const handleInputData = input => e => {
    e.preventDefault();
    //input value from the form 
    const {value} = e.target;
    //update for data state taking prev state then ading value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
    }));
  }
  const isNonMobile = useMediaQuery("min-width: 600px");
  // const handleFormSubmit = (values, { resetForm }) => {
  //   // getFinalSelection();
    
  //   const newCharacter = {
  //     id: uuid(),
  //     firstName: values.firstName,
  //     lastName: values.lastName,
  //     class: characterClass,
  //     race: characterRace
  //   };

    // console.log(newCharacter);
    // resetForm({ values: "" });
    // handleAddingCharacterToList(formData);
  return (
    <FormContext.Provider value={{ currentStep, nextStep, prevStep, setFormData, formData }}>
      <Box>
        <Stepper prevStep={prevStep} nextStep={nextStep} />
        <Step/>
      </Box>
    </FormContext.Provider>
  )
  
      
  

};


