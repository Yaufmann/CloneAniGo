import React, {useEffect, useRef, useState} from 'react';
import classes from "./accordion.module.css";
import AccordionItem from "./AccordionItem";
import {itemAccordion} from "../../utils/itemAccordion";


const AccordionBody = () => {
    const [toggle,setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();
    const [item,setItem] = useState(itemAccordion)

    const getDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        return today
    }

    useEffect(() => {
        console.log(refHeight)
        setHeightEl(`${refHeight.current.scrollHeight}px`)
        getDate()
    }, []);

    const arr = [classes.accordionToggle]

    if (toggle) {
        arr.push(classes.animated)
    }
    const toggleState = () => {
        setToggle(!toggle)
    }
    return (
        <div className={classes.accordion}>
            <button
                className={classes.accordionVisible}
                onClick={toggleState}
            >
                <span>Сегодня {getDate()}</span>
                <span>{toggle ? 'Свернуть' : 'Развернуть'}</span>
            </button>
            <div
                className={arr.join(' ')}
                style={{height: toggle ? `${heightEl}` : "0px"}}
                ref={refHeight}
            >
                {item.map(item =>
                    <AccordionItem
                        key={item.id}
                        item={item}
                        toggle={toggle}
                    />
                )}
            </div>
        </div>
    );
};

export default AccordionBody;