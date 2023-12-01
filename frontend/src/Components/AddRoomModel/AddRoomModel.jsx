import React, { useState } from "react";
import styles from "./AddRoomModel.module.css";
import TextInput from "../Shared/TextInput/TextInput";
import Open from "../../Assets/images/Glob.png";
import Social from "../../Assets/images/public.png";
import Lock from "../../Assets/images/lock.png";
import { createRoom as create} from '../../http'
import {useNavigate} from 'react-router-dom'
const AddRoomModel = ({ closeModal }) => {
  const [roomType, setRoomType] = useState("open");
  const [topic, setTopic] = useState("");
  const  navigate = useNavigate();
  const createRoom = async() =>{
    if(!topic) return;
   try{
    const {data} = await create({roomType,topic});
    if(data){
      navigate(`/room/${data.id}`);
    }
   }catch(error){
    console.log(error.message);
   }
  }
  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <button className={styles.closeBtn} onClick={closeModal}>
          close
        </button>
        <div className={styles.modalHeader}>
          <h3 className={styles.heading}>Enter the topic to be discussed</h3>
          <TextInput
            fullWidth={"true"}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <h2 className={styles.subHeading}>Room Types</h2>
          <div className={styles.roomTypes}>
            <div
              className={
                roomType === "open"
                  ? `${styles.typeBox} ${styles.typeActive}`
                  : `${styles.typeBox}`
              }
              onClick={() => setRoomType("open")}
            >
              <img src={Open} alt="globe" />
              <span>Open</span>
            </div>
            <div
              className={
                roomType === "social"
                  ? `${styles.typeBox} ${styles.typeActive}`
                  : `${styles.typeBox}`
              }
              onClick={() => setRoomType("social")}
            >
              <img src={Social} alt="social" width={40} />
              <span>Social</span>
            </div>
            <div
              className={
                roomType === "private"
                  ? `${styles.typeBox} ${styles.typeActive}`
                  : `${styles.typeBox}`
              }
              onClick={() => setRoomType("private")}
            >
              <img src={Lock} alt="lock" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <h2>Start a room, open to everyone</h2>
          <button className={styles.footerBtn} onClick={createRoom}>Let's Go</button>
        </div>
      </div>
    </div>
  );
};

export default AddRoomModel;
