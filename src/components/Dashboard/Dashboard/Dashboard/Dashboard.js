
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {

    // const containerStyle = {
    //     backgroundColor: "#F4FDFB",
    // }

    return (
        <section>
            <div  className="row">
                <div className="col-md-4 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div>
                    <h1 style={{padding:"9rem"}} className="text-danger">here is your <br/> Dashboard</h1>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;


