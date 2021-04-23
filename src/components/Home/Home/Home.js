import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import MemberDetail from '../MemberDetail/MemberDetail';
import NormalServices from '../NormalServices/NormalServices';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <NormalServices></NormalServices>
            <Team></Team>
            <MemberDetail></MemberDetail>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;