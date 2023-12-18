import React from 'react';
import Footer from "../component/Footer";
import RegisterModal from "../component/UI/Modal/RegisterModal";

const RegisterPage = () => {
    return (
    <div className="background-white">
        <div className="containerAuth">
        <RegisterModal/>
        </div>
        <Footer/>
    </div>
    );
};

export default RegisterPage;