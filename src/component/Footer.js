import React from 'react';
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div className={classes.container}>
         <div className={classes.footerContainer}>
             <div className={classes.footer}>
                 <div>Соглашение</div>
                 <div>Конфиденциальность</div>
                 <div>Для правообладателей</div>
             </div>
             <div className={classes.text}>© animego.org 2017-2023</div>
         </div>
        </div>
    );
};

export default Footer;