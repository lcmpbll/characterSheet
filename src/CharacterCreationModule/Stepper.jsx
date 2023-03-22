import React, { useContext } from "react";
import { useTheme } from '@mui/material/styles';
import { Button, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { FormContext } from "./NewCharacter";



const Stepper = (props) => {
  const { nextStep, prevStep } = props;
  const theme = useTheme();
  const { currentStep } = useContext(FormContext);
  return (
    <MobileStepper
      variant="progress"
      steps={3}
      position="static"
      activeStep={currentStep}
      sx={{ maxWidth: 1500, flexGrow: 3}}
      nextButton={
        <Button size="small" onClick={nextStep} disabled={ currentStep === 2}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft/>
          ) : (
            <KeyboardArrowRight/>
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={prevStep} disabled={ currentStep === 1}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}

export default Stepper;