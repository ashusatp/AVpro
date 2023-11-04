import React from 'react'

const StepPhoneEmail = ({nextStep}) => {
  return (
    <>
      <div>Phone or Email component</div>
      <button onClick={nextStep}>Next</button>
    </>
  )
}

export default StepPhoneEmail
