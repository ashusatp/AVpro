import React, { useState } from 'react'
import StepName from '../Steps/StepName/StepName';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';

const steps = { 
  1: StepName,
  2: StepAvatar
}
const Activate = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];
  const nextStep = () =>{
    if(step === 2){

    }else{
      setStep(step + 1);
    }
  }
  return (
    <div>
      <Step nextStep={nextStep}></Step>
    </div>
  )
}

export default Activate