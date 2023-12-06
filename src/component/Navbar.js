import React from 'react';
import logo from '../assets/logo.png'
import '../App.css'

const NavBar = () => {
    return (
     <nav className="navbar">
       <div className="container">
         <div className="logo">
             <img src={logo} alt="logo"/>
         </div>
         <div className="items">
            <a className="login">Войти</a>
            <div className="search">Поиск</div>
         </div>
       </div>
     </nav>
    );
};

export default NavBar;