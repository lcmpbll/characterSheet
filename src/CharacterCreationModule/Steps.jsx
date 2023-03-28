import React, { useContext } from "react";
import { FormContext } from "./NewCharacter";
import { NameClassRace } from './NameClassRace'
import { NameRaceClass } from "./NameRaceClass";
import { AddRaceDetails } from './AddRace';

export const Step = () => {
  const { currentStep } = useContext(FormContext);
  let stepContent;
  switch(currentStep) {
    case 1:
      stepContent = <NameRaceClass />;
      break;
    case 2: 
      stepContent = <AddRaceDetails />;
      break;
    default:
      break;
      
  }
  return stepContent;
}