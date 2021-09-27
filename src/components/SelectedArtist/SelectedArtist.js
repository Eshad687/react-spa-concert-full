import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import './SelectedArtist.css';

const SelectedArtist = (props) => {
    // destructuring artist object
    const { image, name } = props.artist;

    return (
        // selected artist
        <div className="d-flex mt-2 p-2 text-white bg-info rounded-3 artist-box">
            <img className="rounded-circle px-2" width="50px" src={image} alt="" />
            <h5>{name} <span className="selected">{<FontAwesomeIcon icon={faUserCheck} />}</span> <button onClick={() => props.cartHandlerRemove(props.artist)} className="user-cross">{<FontAwesomeIcon icon={faUserTimes} />}</button></h5>



        </div>
    );
};

export default SelectedArtist;