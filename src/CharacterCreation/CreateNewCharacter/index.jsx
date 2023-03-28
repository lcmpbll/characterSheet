import React, { useState } from 'react';
import { MobileStepper, Step, StepLabel, Button, Typography, Box } from '@mui/material';
import { Formik, Form } from 'formik';

import { NameClassRace } from '../../CharacterCreationModule/NameClassRace'
import { AddRaceDetails } from '../../CharacterCreationModule/AddRace.jsx';


import validationSchema from '../../FormModel/characterCreationValidationSchema';
import characterCreationFormModel from '../../FormModel/characterCreationFormModel';
import initialValues from '../../FormModel/characterCreationInitialValues';

const steps = ['Name', 'Race', 'Class', 'Confirm'];
const { formId, formField } = characterCreationFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0: 
      return <NameClassRace formField={formField}/>;
    case 1: 
      return <AddRaceDetails formField={formField} />;
    case 2: 
      return <h1>Class</h1>;
    case 3: 
      return <h1>Confirm</h1>;
    default:
      return <>Not Found</>;
    
  }
}

const CreateNewCharacterPage  = (props) =>  {
  const [activeStep, setActiveStep ] = useState(0);
  const currentValidationSchema = validationSchema[activeStep]
  const isLastStep = activeStep === steps.length -1;
  
  function _sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function _submitCharacter(values, actions){
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }
  
  function _handleSubmit(values, actions){
    if(isLastStep){
      handleAddingCharacterToList(values)
    } else {
      setActiveStep(activeStep + 1);
      _submitCharacter(values);
      actions.setTouched({});
      actions.setSubitting(false);
    }
  }
  
  function _handleBack() {
    setActiveStep(activeStep -1);
  }
  
  return (
    <Box>
      <Box>
        <MobileStepper activeStep={activeStep} >
          {steps.map(label => (<Step key={label}/>))}
        </MobileStepper>
      </Box>
      <Box>
        {activeStep === steps.length ? (<h1>Success</h1>) : (
          <Formik
            initialValues={initialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}
                <Box>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack}>Back</Button>
                  )}
                  <Box>
                    <Button
                      disabled={isSubmitting}
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
  );
}

export default CreateNewCharacterPage;