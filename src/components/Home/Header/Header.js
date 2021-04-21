import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import './Header.css'

const Header = () => {
    return (
        <div className="headerStyle">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <ServiceInfo></ServiceInfo>
        </div>
    );
};

export default Header;