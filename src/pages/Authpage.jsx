import React from 'react';
import '../App.css';
import Modal from "../component/UI/Modal/modal";
import Footer from "../component/Footer";

const Authpage = () => {
    return (
        <div className="background-white">
            <div className="containerAuth">
                <Modal/>
            </div>
            <Footer/>
        </div>
    );
};

export default Authpage;