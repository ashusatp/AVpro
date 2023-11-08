import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
import { logout } from '../../../http';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setAuth } from '../../../Stores/authSlice';
import logoutImg from '../../../Assets/images/logout.png'
const Navigation = () => {
  const dispatch = useDispatch();
  const {isAuth, user} = useSelector((state)=>state.auth);
  const brandStyle ={
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center'
  }
  
  const logoText = {
    marginLeft: '10px'
  }
  const logoutUser = async() =>{
    // 
    try{
      const {data} = await logout();
      dispatch(setAuth(data));
    }catch(error){
      console.log(error);
    }
  }
  return (
    <nav className={`${styles.navbar} container`} >
        <Link style={brandStyle} to={'/'}>
            <img src={require("../../../Assets/images/logo.png")} alt="logo" />
            <span style={logoText} >AVpro</span>
        </Link>
        <div className={styles.navRight}>
          <h3>{user.name}</h3>
          <Link to='/'>
            <img className={styles.avatar} src={user.avatar} width="50" height='50' alt="avatar" />
          </Link>
          <button className={styles.logoutButton} onClick={logoutUser} >
            <img src={logoutImg} alt="" width={'30'} />
          </button>
        </div>
    </nav>
  )
}

export default Navigation
