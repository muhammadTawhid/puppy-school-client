import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import './Header.css'

const Header = () => {
    return (
        <div className="headerStyle">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;