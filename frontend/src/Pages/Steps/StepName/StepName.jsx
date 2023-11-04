import React from 'react'

const StepName = ({nextStep}) => {
  return (
    <>
      <div> name component</div>
      <button onClick={nextStep}>Next</button>
    </>
  )
}

export default StepName
