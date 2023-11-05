import React, { useState } from "react";
import styles from "./StepOtp.module.css";
import Card from "../../../Components/Shared/Card/Card";
import TextInput from "../../../Components/Shared/TextInput/TextInput";
import Button from "../../../Components/Shared/Button/Button";
import { verifyOtp } from "../../../http";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../../Stores/authSlice";

const StepOtp = () => {
  const [otp, setOtp] = useState("");
  const dataFromStore = useSelector((state)=>state.auth.otp);
  const dispatch = useDispatch();
  const submit = async() => {
    try{
      const {data} = await verifyOtp({otp, phone: dataFromStore.phone, hash: dataFromStore.hash});
      console.log(data);
      dispatch(setAuth(data));
    }catch(error){
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icon="lock">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={styles.actionButtonWrap}>
            <Button onClick={submit} text="Lets go" />
          </div>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
