import React from 'react';
import classes from "./lt.module.css";
import starChil from "../../assets/starChildren.jpg";

const ListTitleItem = ({item}) => {
    return (
        <div className={classes.card}>
            <img src={item.img} alt=""/>
            <div className={classes.cardText}>
                <span>{item.title}</span>
                <div>{item.text}</div>
                <div>{item.epizodText}</div>
            </div>
        </div>
    );
};

export default ListTitleItem;