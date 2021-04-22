import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import MemberDetail from '../MemberDetail/MemberDetail';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Team></Team>
            <MemberDetail></MemberDetail>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;