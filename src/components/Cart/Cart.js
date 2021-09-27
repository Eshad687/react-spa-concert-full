import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import SelectedArtist from '../SelectedArtist/SelectedArtist';
import './Cart.css';

const Cart = (props) => {

    // calculating the total fee
    let totalFee = 0;
    for (const artist of props.cart) {
        totalFee += artist.fee;

    }
    return (
        // cart information
        <div className="artist-count-text text-center pt-3">
            <h4 >{<FontAwesomeIcon icon={faUser} />} Artists Selected: <span className="fw-bold">{props.cart.length}</span>  </h4>
            <h4>{<FontAwesomeIcon icon={faMoneyBillAlt} />} Total Fees: <span className="fw-bold">${totalFee}</span></h4>

            {/* added artists section */}
            <div className="mt-5">
                {props.cart.map(artist => <SelectedArtist
                    key={artist.id}
                    artist={artist}
                    cartHandlerRemove={props.cartHandlerRemove}
                ></SelectedArtist>)}

            </div>
        </div>
    );
};

export default Cart;