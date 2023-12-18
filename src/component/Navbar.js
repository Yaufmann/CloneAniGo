import React, {useState} from 'react';
import logo from '../assets/logo.png'
import '../App.css'
import {FormControl} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import InputCustom from "./inputCustom";
import {useNavigate} from "react-router-dom";
import {AUTH_ROUTER, HOME_ROUTER, LIST_PAGE_ROUTER} from "../utils/constant";
import {useDispatch, useSelector} from "react-redux";
import {Auth, removeUser} from "../store/firstSlice";



const NavBar = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [text,setText] = useState('');

    const selector = useSelector(state => state.user.isAuth);
    const dispatch = useDispatch();

    const arr = ["items"]
    if (open === true) {
        arr.push("active")
    }

    const close = () => {
        setOpen(!open)
        setText('')
    }

    const unLogin = () => {
        navigate(AUTH_ROUTER)
    }

    const isLogin = () => {
        navigate(AUTH_ROUTER)
        dispatch(Auth())
        if (selector === false) {
            dispatch(removeUser())
        }
    }
    return (
     <div className="navbar">
       <div className="container">
         <div className="leftNavbarContainer">
             <div className="logo">
                 <img
                     onClick={()=> navigate(HOME_ROUTER)}
                     src={logo} alt="logo"
                 />
             </div>
             <div
                 className="logoText"
                 onClick={()=>navigate(LIST_PAGE_ROUTER)}
             >Аниме</div>
         </div>
         <div className={arr.join(' ')}>
            {open
            ?
            <FormControl variant="standard">
                <InputCustom
                    value={text.title}
                    onChange={e => setText(e.target.value)}
                    placeholder="Поиск содержимого..."
                />
            </FormControl>
            :
                <div>{selector ?
                    <div
                    className="login"
                    onClick={isLogin}
                >Выйти</div>
                    :
                    <div
                    className="login"
                    onClick={unLogin}
                >Войти</div>}
                </div>
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