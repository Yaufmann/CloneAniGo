import React from 'react';
import classes from "./accordion.module.css";

const AccordionItem = ({item,toggle}) => {
    return (
        <p aria-hidden={toggle ? "true" : "false"}>
            <div className={classes.accordionContainerItem}>
                <div className={classes.itemText}>{item.text}</div>
                <div className={classes.textContainer}>
                    <div>{item.textSer}</div>
                    <div>{item.textStudio}</div>
                </div>
            </div>
        </p>
    );
};

export default AccordionItem;