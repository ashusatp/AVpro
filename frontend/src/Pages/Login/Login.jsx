import React, { useState } from "react";
import StepOtp from "../Steps/StepOtp/StepOtp";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};
const Login = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const nextStep = () => {
    if (step === 2) {
    } else {
      setStep(step + 1);
    }
  };
  return(
    <div>
        <Step nextStep={nextStep} />
    </div>
  );
};

export default Login;
