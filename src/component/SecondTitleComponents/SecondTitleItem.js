import React from 'react';
import classes from "./secondTitle.module.css";

const SecondTitleItem = ({item}) => {
    return (
        <div className={classes.card}>
            <img src={item.img} alt=""/>
            <div className={classes.textContainer}>
                <span>{item.title}</span>
                <span>{item.secondTitle}</span>
                <span>{item.lineText}</span>
                <span>{item.mainText}</span>
            </div>
        </div>
    );
};

export default SecondTitleItem;