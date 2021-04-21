import React from 'react';
import Member from '../Member/Member';
import teamMember1 from '../../../images/teamMember1.png'
import teamMember2 from '../../../images/teamMember2.png'
import teamMember3 from '../../../images/teamMember3.png'

const teamData = [
    {
        name: 'Emilia Johnson',
        img: teamMember1,
        position:'PET INSTRUCTOR '
    },
    {
        name: 'Peter Ronson',
        img: teamMember2,
        position:'FOUNDER'
        
    },
    {
        name: 'Barbra Stevens',
        img: teamMember3,
        position:'ASSISTANT'
    }
]

const Team = () => {
    return (
        <section >
            <div className="container">
                <h4 className="text-center  text-danger my-5">Our Team</h4>
                <div className="row">
                    {
                        teamData.map(member => <Member member={member}></Member>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;