import React, { useState } from 'react'
import Card from '../../../Components/Shared/Card/Card'
import TextInput from '../../../Components/Shared/TextInput/TextInput'
import Button from '../../../Components/Shared/Button/Button'
import styles from './StepName.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../../Stores/activateSlice'
const StepName = ({nextStep}) => {
  const {name} = useSelector(state=>state.activate);
  const [fullName, setFullName] = useState(name);
  const dispatch = useDispatch();
  const next = () =>{
    if(!fullName){
      return;
    }
    dispatch(setName(fullName))
    nextStep();
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="What's your full name?" icon="thinking">
          <TextInput value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <div className={styles.actionButtonWrap}>
            <Button onClick={next} text="Lets go" />
          </div>
        </Card>
    </div>
  )
}

export default StepName
