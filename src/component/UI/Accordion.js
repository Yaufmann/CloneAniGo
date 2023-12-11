import React, {useEffect, useRef, useState} from 'react';
import classes from './accordion.module.css'
import Chevron from '../../assets/chevron.svg'
const Accordion = () => {
    const [toggle,setToggle] = useState(false);
    const [heightEl, setHeightEl] = useState();
    const refHeight = useRef();

    useEffect(() => {
        console.log(refHeight)
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, []);

    const arr = [classes.accordionToggle]

    const toggleState = () => {
        setToggle(!toggle)
        if (toggle) {
            arr.push(classes.animated)
        }
    }

    return (
        <div className={classes.accordion}>
           <button
               className={classes.accordionVisible}
               onClick={toggleState}
           >
               <span>Lorem Lorem Lorem Lorem Lorem</span>
               <img src={Chevron} alt=""/>
           </button>
            <div
                className={arr.join(' ')}
                style={{height: toggle ? `${heightEl}` : "0px"}}
                ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                    Lorem asdasdasdasdasdasda
                    Lorem asdasdasdasdasdasda
                    Lorem asdasdasdasdasdasda
                </p>
            </div>
        </div>
    );
};

export default Accordion;