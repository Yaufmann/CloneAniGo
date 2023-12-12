import React, {useEffect, useRef, useState} from 'react';
import classes from './accordion.module.css'
import {itemAccordion} from "../../utils/itemAccordion";
import AccordionItem from "./AccordionItem";
import AccordionBody from "./AccordionBody";
import AccordionTwoBody from "./AccordionaTwoBody";
const Accordion = ({text}) => {
    return (
        <div className={classes.padding}>
            <div className={classes.topBlock}><span>{text}</span></div>
            <AccordionBody/>
            <AccordionTwoBody/>
        </div>
    );
};

export default Accordion;