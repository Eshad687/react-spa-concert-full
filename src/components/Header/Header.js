import React from 'react';
import './Header.css';
import logo from '../../images/unnamed-removebg-preview.png'

const Header = () => {
    return (
        <div className="bg-info text-white border-0 align-middle d-flex justify-content-between align-items-center">
            {/* website name and some information */}
            <div className="text-start website-name ms-5 ps-4">
                <div className="d-flex">
                    <img height="80px" src={logo} alt="" />
                    <div>
                        <h1 className="fw-bold">Live Aid Concert</h1>
                        <h6>The money earned from the concert will directly go to the charity</h6>
                        <h6><small>Selected artists will perform on the concert</small> </h6>
                    </div>
                </div>


            </div>
            {/* budget */}
            <h3 className="text-end me-5 pe-4">Total Budget: <span className="fs-2 fw-bold">100K</span></h3>

        </div>
    );
};

export default Header;