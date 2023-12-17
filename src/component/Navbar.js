import React, {useState} from 'react';
import logo from '../assets/logo.png'
import '../App.css'
import {FormControl} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import InputCustom from "./inputCustom";
import {NavLink, useNavigate} from "react-router-dom";
import {AUTH_ROUTER, HOME_ROUTER, LIST_PAGE_ROUTER} from "../utils/constant";



const NavBar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [text,setText] = useState('');

    const arr = ["items"]
    if (open === true) {
        arr.push("active")
    }

    const close = () => {
        setOpen(!open)
        setText('')
    }
    return (
     <div className="navbar">
       <div className="container">
         <div className="logo">
             <img
                 onClick={()=> navigate(HOME_ROUTER)}
                 src={logo} alt="logo"
             />
         </div>
         <div className={arr.join(' ')}>
            {open
            ?
            <FormControl sx={{ m: -2 }} variant="standard">
                <InputCustom
                    value={text.title}
                    onChange={e => setText(e.target.value)}
                    placeholder="Поиск содержимого..."
                />
            </FormControl>
            :
            <div
                className="login"
                onClick={()=>navigate(AUTH_ROUTER)}
            >Войти</div>
            }
             {open
             ?
             <CloseIcon
                 className="search"
                 onClick={()=>setOpen(!open)}
             />
             :
              <SearchIcon
                  className="search"
                  onClick={close}
              />
             }
         </div>
       </div>
     </div>
    );
};

export default NavBar;