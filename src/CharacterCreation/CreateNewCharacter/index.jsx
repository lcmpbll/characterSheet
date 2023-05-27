import React, { useEffect, useState, createContext, useContext, useCallback, useMemo, memo } from 'react';
import { MobileStepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';
import { Formik } from 'formik';
import { Form } from 'formik';
import NameRaceClass from '../Forms/NameRaceClass';
import { AddRaceDetails } from '../Forms/AddRace';
import FormHeader from '../../Components/FormHeader';
import { withData, withDoubleData } from '../../HOC/withFormData';
import validationSchema from '../../FormModel/characterCreationValidationSchema';
import characterCreationFormModel from '../../FormModel/characterCreationFormModel';
import initialValues from '../../FormModel/characterCreationInitialValues';
import AddClassDetails from '../Forms/AddClass';



const { formId, formField } = characterCreationFormModel;


function _renderStepContent(steps, data) {
  
  const initialUrl = '/api/classes'
  const { currentCharacter } = useContext(FormContext);
  const NameRaceClassWithData = useMemo(() => withData(NameRaceClass, initialUrl), []);
  const MemoizedNameRaceClass = useMemo(
    () => memo(() => <NameRaceClassWithData races={data} formField={formField} />),
    [data, formField]
  );
  const AddRaceDetailsWithData = useMemo(() => withData(AddRaceDetails, currentCharacter?.race?.url), [currentCharacter?.race?.url]);
  const MemoizedAddRaceDetails = useMemo(
    () => memo(() => <AddRaceDetailsWithData formField={formField} />),
    [formField, currentCharacter?.race?.url]
  );

  const AddClassDetailsWithData = useMemo(() => withData(AddClassDetails, currentCharacter?.characterClass?.url), [currentCharacter?.characterClass?.url]);
  const MemoizedAddClassDetails = useMemo(
    () => memo(() => <AddClassDetailsWithData formField={formField} />),
    [formField, currentCharacter?.characterClass?.url]
  );
  switch (steps) {
    case 0: 
      return <MemoizedNameRaceClass  />
      // return <h1>hahaha</h1>
      //<NameRaceClass formField={formField} data={data}/>;
    // case 1: 
      // return <AddRaceDetails formField={formField} data={data} />;
    case 1: 
      return <MemoizedAddRaceDetails />
      // return <h1>hehehe</h1>
    case 2: 
      return <MemoizedAddClassDetails/>;
      //  return <h1>hohohoho</h1>
    default:
      return <>Not Found</>;
    
  }
}

// const userAction = async () => {
//   const response = await fetch('https://www.dnd5eapi.co/api/races')
//   const data = await response.json();
//   return data.results;
//   //extract JSON from the http response
//   // do something with myJson
// }




export const FormContext = createContext();

export const CreateNewCharacterPage  = (props) =>  {
  const { handleAddingCharacterToList } = props
  const steps = ['Name', 'Add Race Details', 'Class', 'Confirm'];
  const [activeStep, setActiveStep] = useState(0);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const currentValidationSchema = validationSchema[activeStep]
  
  const isLastStep = activeStep === steps.length - 1;
  const [currentCharacter, setCurrentCharacter] = useState({});
  const [data, setData] = useState(null);
  
 
 
  useEffect(() => {
    
    fetch('https://www.dnd5eapi.co/api/races').then(response => {
      if(!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json();
      }
    }).then((jsonifiedResponse) => {
      
      setData(jsonifiedResponse.results);
      
     
    })
   }, [])
   
  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    
  }
  
  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    // actions.setSubmitting(false);
    setCurrentCharacter(values);
    handleAddingCharacterToList(currentCharacter);
    setActiveStep(activeStep + 1);
  }
  
  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setCurrentCharacter(values);
      actions.setTouched({});
      actions.setSubmitting(false);
      setTimeout(() => {
        setActiveStep(activeStep + 1);
        
      }, 0)
   
      console.log(currentCharacter);
    }
  }
  
  
 
  //Set steps and get data? 
  function _handleNext() {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep)

  }
  function _handleBack() {
    setActiveStep(activeStep -1);
  }
  
  
  
  return (
    <FormContext.Provider value={{ currentCharacter, setCurrentCharacter }}>
      <Box>
        <Box>
          <MobileStepper activeStep={activeStep} >
            {steps.map(label => (<Step key={label}/>))}
          </MobileStepper>
        </Box>
        <Box>
          <FormHeader formTitle={steps[activeStep]}/>
          {activeStep === steps.length ? (<h1>Success</h1>) : (
            <Formik
              initialValues={initialValues}
              validationSchema={currentValidationSchema}
              onSubmit={_handleSubmit}
            >
              {() => (
                <Form id={formId}>
                  {_renderStepContent(activeStep, data)}
                  <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'} m={'8px'}>
                    {activeStep !== 0 && (
                      <Button onClick={_handleBack}>Back</Button>
                    )}
                    <Box>
                      <Button
                        // disabled={isSubmitting}
                        type='submit'
                        variant='contained'
                        color='primary'
                      >{isLastStep ? 'Create Character' : 'Next' }</Button>
                    </Box>
                  </Box>
                </Form>
              )}
            </Formik>
          )}
        </Box>
      </Box>
    </FormContext.Provider>
  );
}

