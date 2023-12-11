import React from 'react';
import classes from './card.module.css'
const Card = ({obj}) => {
    return (
        <div>
            <div className={classes.card}>
              <img src={obj.img} alt=""/>
            </div>
            <div className={classes.cardText}>
                <p>{obj.text}</p>
            </div>
        </div>
    );
};

export default Card;