import React, { useEffect, useState } from "react";
import styles from "./Rooms.module.css";
import searchImg from "../../Assets/images/search.png";
import startRoomImg from "../../Assets/images/startRoom.png";
import defaultAvatarImg from "../../Assets/images/defaultAvatar.png";
import RoomCard from "../../Components/RoomCard/RoomCard";
import AddRoomModel from "../../Components/AddRoomModel/AddRoomModel";
import { getAllRooms } from "../../http";
const Rooms = () => {
  const [showModal, setShowModal] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(()=>{
    const fetchRooms = async () =>{
      const {data} = await getAllRooms();
      setRooms(data);
    }
    fetchRooms();
  },[]);

  const openModal = () =>{
    setShowModal(true);
  }
  const closeModal = () =>{
    setShowModal(false);
  }
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
            <button className={styles.startRoomButton} onClick={openModal}>
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
      {showModal && <AddRoomModel closeModal={closeModal}/>}
    </>
  );
};

export default Rooms;
