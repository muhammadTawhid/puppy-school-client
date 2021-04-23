
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
                <div className="col-md-4 col-sm-12 col-12 d-flex justify-content-center">
                    <h3>bjkhjkh</h3>
                </div>
                <div className="col-md-4 col-sm-12 col-12">
                    <h3>ghjghjgjh</h3>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;


