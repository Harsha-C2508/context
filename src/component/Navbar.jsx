import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ThemeContext } from '../context/ThemeContex'
import Styles from '../style/navbar.module.css'
const Navbar = () => {
    const [state,{ handleLogIn, handleLogOut}] = useContext(AuthContext)
    const {isLight,toggleTheme} = useContext(ThemeContext)

    const handleToggle=()=>{
        if(!state.isAuth){
            handleLogIn(Date.now());
        }
        else{
            handleLogOut();
        }
    }
  return (
    <div className={Styles.box}>
        <div className={Styles.h3}>
        <h3>Logo</h3>
        </div>
        <div className={Styles.sec}>
            <h3>Mens</h3>
            <h3>Cart</h3>
            <button onClick={handleToggle}>{state.isAuth? "LogOut" : "LogIn" }</button>
            <button 
            className={Styles.button} 
            onClick={toggleTheme}>
              {` ${
                isLight ? "Dark":"Light"
              }`}</button>
        </div>
    </div>
  )
}

export default Navbar