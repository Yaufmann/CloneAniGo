import React, {useState} from 'react';
import classes from './lt.module.css'
import starChil from '../../assets/starChildren.jpg'
import {arrayTitleImage} from "../../utils/ArrayImage";
import ListTitleItem from "./ListTitleItem";

const ListTitle = () => {
    const [arr,setArr] = useState(arrayTitleImage);
    return (
        <div className={classes.container}>
          <div className={classes.containerTitle}>
            <div>Недавно вышедшие аниме</div>
            <div>Все</div>
          </div>
            {arr.map(item =>
              <ListTitleItem key={item.id} item={item}/>
            )}
        </div>
    );
};

export default ListTitle;