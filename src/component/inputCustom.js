import React from 'react';
import classes from './inputCustom.module.css'

const InputCustom = (props) => {
    return (
       <input
           className={classes.customInput}
           {...props}
       />
    );
};

export default InputCustom;