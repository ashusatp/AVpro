import React, { useState } from "react";
import Card from "../../../../Components/Shared/Card/Card";
import Button from "../../../../Components/Shared/Button/Button";
import TextInput from "../../../../Components/Shared/TextInput/TextInput";
import styles from '../StepPhoneEmail.module.css'
import { sendOtp } from "../../../../http";
import { useDispatch } from "react-redux";
import { setOtp } from "../../../../Stores/authSlice";

const Phone = ({nextStep}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const submit = async () =>{
    // server request
    const {data} = await sendOtp({phone: phoneNumber});
    dispatch(setOtp({phone: data.phone, hash: data.hash}));
    console.log(data);
    nextStep();
  }
  return (
    <Card title={"Enter your phone number!"} icon={"phone"}>
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text={"Lets Go "}  onClick={submit}/>
        </div>
      </div>
    </Card>
  );
};

export default Phone;
