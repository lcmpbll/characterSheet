import React, { useEffect, useState, createContext, useContext } from 'react';
import { MobileStepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import { NameRaceClass } from '../Forms/NameRaceClass';
import { AddRaceDetails } from '../Forms/AddRace.jsx';
import FormHeader from '../../Components/FormHeader';
import { withData, withDoubleData } from '../../HOC/withFormData';
import validationSchema from '../../FormModel/characterCreationValidationSchema';
import characterCreationFormModel from '../../FormModel/characterCreationFormModel';
import initialValues from '../../FormModel/characterCreationInitialValues';
import {AddClassDetails} from '../Forms/AddClass';



const { formId, formField } = characterCreationFormModel;
//const step = ['Name', 'Add Race Details', 'Class', 'Confirm'];

function _renderStepContent(steps, data) {
  const initialUrls = ['/api/races', '/api/classes'];
  const { currentCharacter } = useContext(FormContext);
  const NameRaceClassWithData = withDoubleData(NameRaceClass, initialUrls )
  const AddRaceDetailsWithData = withData(AddRaceDetails, currentCharacter?.race?.url)
  const AddClassDetailsWithData = withData(AddClassDetails, currentCharacter?.class?.url)
  switch (steps) {
    case 0: 
      return <NameRaceClassWithData formField={formField} />
      //<NameRaceClass formField={formField} data={data}/>;
    // case 1: 
      // return <AddRaceDetails formField={formField} data={data} />;
    case 1: 
      return <AddRaceDetailsWithData formField={formField}/>
    case 2: 
      return <h1>Confirm</h1>;
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

const CreateNewCharacterPage  = (props) =>  {
  
  const steps = ['Name', 'Add Race Details', 'Class', 'Confirm'];
  const [activeStep, setActiveStep ] = useState(0);
  const currentValidationSchema = validationSchema[activeStep]
  const isLastStep = activeStep === steps.length -1;
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
      
      console.log(jsonifiedResponse.results, 'ln 73')
    })
   }, [])
  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    
  }
  
  
  async function _submitCharacter(values){
    setCurrentCharacter(values)
    await _sleep(1000);
    // await updateCurrentCharacter(values);
    alert(JSON.stringify(currentCharacter, null, 2));
    // actions.setSubmitting(false);
    // console.log(currentCharacter);
    // setActiveStep(activeStep + 1);
  }
  
  async function _handleSubmit(values, actions){
    if(isLastStep){
      handleAddingCharacterToList(values)
    } else {
      setCurrentCharacter(values)
      _submitCharacter(values);
     
     
      setTimeout(setActiveStep(activeStep + 1), 1000);
      actions.setTouched({});
      actions.setSubitting(false);
      
    }
  }
  //Set steps and get data? 
  
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
              {({ isSubmitting }) => (
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

export default CreateNewCharacterPage;