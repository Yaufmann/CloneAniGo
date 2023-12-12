import React, {useState} from 'react';
import classes from './secondTitle.module.css'
import Asura from '../../assets/Asura.png'
import {arraySecondTitle} from "../../utils/ArrayImage";
import SecondTitleItem from "./SecondTitleItem";
const SecondTitle = () => {
    const [arr,setArr] = useState(arraySecondTitle);
    return (
        <div className={classes.container}>
          <div className={classes.containerTitle}>
              <span>Новые аниме на сайте</span>
          </div>
          {arr.map(item =>
            <SecondTitleItem
              key={item.id}
              item={item}
            />
          )}
        </div>
    );
};

export default SecondTitle;