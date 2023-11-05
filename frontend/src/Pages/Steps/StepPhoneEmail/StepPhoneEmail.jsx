import React, { useState } from "react";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import styles from "./StepPhoneEmail.module.css";
const phoneEmailMap = {
  phone: Phone,
  email: Email,
};
const StepPhoneEmail = ({ nextStep }) => {
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={styles.cardWrapper}>
        <div style={{width: '550px'}}>
          <div className={`${styles.buttonWrap} `}>
            <button
              className={`${styles.tabButton} ${
                type === "phone" ? styles.active : ""
              }`}
              onClick={() => setType("phone")}
            >
              {type === "phone" ? (
                <img
                  src={require("../../../Assets/images/mobile-black.png")}
                  alt="mobile"
                />
              ) : (
                <img
                  src={require("../../../Assets/images/mobile-white.png")}
                  alt="mobile"
                />
              )}
            </button>
            <button
              className={`${styles.tabButton} ${
                type === "email" ? styles.active : ""
              }`}
              onClick={() => setType("email")}
            >
              {type === "email" ? (
                <img
                  src={require("../../../Assets/images/email-black.png")}
                  alt="mobile"
                />
              ) : (
                <img
                  src={require("../../../Assets/images/email-white.png")}
                  alt="mobile"
                />
              )}
            </button>
          </div>
          <Component nextStep={nextStep} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
