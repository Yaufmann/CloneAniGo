import React, {useEffect, useRef, useState} from 'react';
import classes from "./accordion.module.css";
import AccordionItem from "./AccordionItem";
import {itemAccordionTwoBody} from "../../utils/itemAccordion";


const AccordionTwoBody = () => {
    const [toggle,setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();
    const [item,setItem] = useState(itemAccordionTwoBody)

    const getDate = () => {
        let yesterday = new Date();
        let dd = String(yesterday.getDate() - 1).padStart(2, '0');
        let mm = String(yesterday.getMonth() + 1).padStart(2, '0');
        let yyyy = yesterday.getFullYear();
        yesterday = dd + '-' + mm + '-' + yyyy;
        return yesterday
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
                <span>Вчера {getDate()}</span>
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

export default AccordionTwoBody;