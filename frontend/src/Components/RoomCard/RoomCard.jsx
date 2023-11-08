import React from "react";
import styles from "./RoomCard.module.css";
import chatImage from "../../Assets/images/chat.png";
import peopleImage from "../../Assets/images/peoples.png";

const RoomCard = ({ room }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.topic}>{room.topic}</h3>
      <div className={styles.speakers}>
        <div className={styles.avatars}>
          {room.speakers.map((speaker, index) => {
            return (
              <img
                key={index}
                src={speaker.avatar}
                alt="speaker"
                width={"40"}
              />
            );
          })}
        </div>
        <div className={styles.avatarNames}>
          {room.speakers.map((speaker, index) => {
            return (
              <div className={styles.nameWrapper}>
                <span>{speaker.name}</span>
                <img src={chatImage} alt="chat" />
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.peopleCount}>
          <span>{room.totalPeople}</span>
          <img src={peopleImage} alt="peoples" />
      </div>
    </div>
  );
};

export default RoomCard;
