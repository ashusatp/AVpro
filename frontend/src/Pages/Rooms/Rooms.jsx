import React from "react";
import styles from "./Rooms.module.css";
import searchImg from "../../Assets/images/search.png";
import startRoomImg from "../../Assets/images/startRoom.png";
import defaultAvatarImg from "../../Assets/images/defaultAvatar.png";
import RoomCard from "../../Components/RoomCard/RoomCard";
const rooms = [
  {
    id: 1,
    topic: "which framework is best for frontend?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: defaultAvatarImg,
      },
      {
        id: 2,
        name: "Ashu",
        avatar: defaultAvatarImg,
      },
    ],
    totalPeople: 40,
  },
  {
    id: 2,
    topic: "which language is best for backend?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: defaultAvatarImg,
      },
      {
        id: 2,
        name: "Ashu",
        avatar: defaultAvatarImg,
      },
    ],
    totalPeople: 40,
  },
  {
    id: 3,
    topic: "Blockchain",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: defaultAvatarImg,
      },
      {
        id: 2,
        name: "Ashu",
        avatar: defaultAvatarImg,
      },
    ],
    totalPeople: 10,
  },
  {
    id: 4,
    topic: "which language is best for game development?",
    speakers: [
      {
        id: 1,
        name: "John Doe",
        avatar: defaultAvatarImg,
      },
      {
        id: 2,
        name: "Ashu",
        avatar: defaultAvatarImg,
      },
    ],
    totalPeople: 20,
  },
];
const Rooms = () => {
  return (
    <>
      <div className="container">
        <div className={styles.roomHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice rooms</span>
            <div className={styles.searchBox}>
              <img src={searchImg} alt="" width={"20"} />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button className={styles.startRoomButton}>
              <img src={startRoomImg} alt="" width={"20"} />
              <span>start room</span>
            </button>
          </div>
        </div>
        <div className={styles.roomList}>
          {rooms.map((room, index) => {
            return <RoomCard key={index} room={room} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Rooms;
