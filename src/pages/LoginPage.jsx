import React from 'react';
import '../App.css';
import LoginModal from "../component/UI/Modal/LoginModal";
import Footer from "../component/Footer";

const LoginPage = () => {
    return (
        <div className="background-white">
            <div className="containerAuth">
                <LoginModal/>
            </div>
            <Footer/>
        </div>
    );
};

export default LoginPage;