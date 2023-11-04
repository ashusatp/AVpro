import React from "react";
import styles from "./Home.module.css";
import { Link,useNavigate } from "react-router-dom";
import Card from "../../Components/Shared/Card/Card";
import Button from "../../Components/Shared/Button/Button";
const Home = () => {
  const signInLink = {
    color: "#6DFE8D",
    fontWeight: 'bold',
    textDecoration: 'none',
    marginLeft: '10px'
  }
  const navigate = useNavigate ();
  const startRegister = () => {
    navigate('/register');
  }
  return (
    <div className={styles.cardWrapper}>
      <Card title={"Welcome To AVpro!"} icon={"smile"}>
        <p className={styles.text}> Get ready to join the new world. </p>
        <div>
          <Button onClick={startRegister} text={'Get your Username'} />
        </div>
        <div className={styles.signinWrapper}> 
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link to="/login" style={signInLink}>Sign in</Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
