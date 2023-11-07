import React, { useState } from "react";
import Card from "../../../Components/Shared/Card/Card";
import TextInput from "../../../Components/Shared/TextInput/TextInput";
import Button from "../../../Components/Shared/Button/Button";
import styles from "./StepAvatar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../../../Stores/activateSlice";
import defaultAvatar from "../../../Assets/images/defaultAvatar.png";
import { activate } from "../../../http";
import { setAuth } from "../../../Stores/authSlice";
const StepAvatar = () => {
  const { name,avatar } = useSelector((state) => state.activate);
  const [image, setImage] = useState(defaultAvatar);
  const dispatch = useDispatch();
  
  const captureImage = (e) =>{
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(){
      // console.log(reader.result);
      setImage(reader.result);
      dispatch(setAvatar(reader.result));
    }
  }
  
  const submit = async() => {
    try{
      // console.log(avatar);
      const {data} = await activate({name, avatar});
      if(data.auth){
        dispatch(setAuth(data))
      }
      console.log(data);
    }catch(error){
      console.log(error);
    }
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title={`Welcome ${name}!`} icon="avatarpart">
        <p className={styles.subHeading}>How's this photo?</p>
        <div className={styles.avatarWrapper}>
          <img className={styles.avatarImage} src={image} alt="avatar" />
        </div>
        <div>
          <input id="avatarInput" type="file" className={styles.avatarInput}  onChange={captureImage}/>
          <label htmlFor="avatarInput" className={styles.avatarLabel}>
            chose a diffrent photo
          </label>
        </div>
        <div className={styles.actionButtonWrap}>
          <Button onClick={submit} text="Lets go" />
        </div>
      </Card>
    </div>
  );
};

export default StepAvatar;
