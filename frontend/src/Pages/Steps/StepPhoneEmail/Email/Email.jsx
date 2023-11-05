import React, { useState } from "react";
import Card from "../../../../Components/Shared/Card/Card";
import Button from "../../../../Components/Shared/Button/Button";
import TextInput from "../../../../Components/Shared/TextInput/TextInput";
import styles from '../StepPhoneEmail.module.css'
const Email = ({nextStep}) => {
  const [email, setEmail] = useState("");
  return (
    <Card title={"Enter your email id!"} icon={"email"}>
      <TextInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text={"Lets Go"} onClick={nextStep} />
        </div>
      </div>
    </Card>
  );
};

export default Email;
