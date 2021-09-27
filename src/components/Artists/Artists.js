import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './Artists.css';

const Artists = (props) => {

    // destructuring the object
    const { name, band, age, image, fee, country } = props.artist


    return (
        // artist information
        <div className="col">
            <div className="card h-100 shadow artist-card text-center">
                <img height="170px" src={image} className="card-img-top px-5 mt-2 rounded-circle" alt="..." />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{name}</h5>
                    <h6><small>Age: {age}</small></h6>
                    <h6><small>From: {country}</small></h6>
                    <h6>Band: {band}</h6>
                    <h5>Fee: ${fee}</h5>
                </div>

                {/*artist selection button */}
                <button onClick={() => { props.cartHandler(props.artist) }} type="button" className="btn text-white m-2 fw-bold">Add To List {<FontAwesomeIcon icon={faUserPlus} />}</button>
            </div>
        </div>

    );
};

export default Artists;