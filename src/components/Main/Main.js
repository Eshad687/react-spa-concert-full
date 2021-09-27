import React, { useEffect, useState } from 'react';
import { addToDb, getStoredcart, removeFromDb } from '../../utilities/localStorage';
import Artists from '../Artists/Artists';
import Cart from '../Cart/Cart';

import './Main.css';

const Main = () => {
    // states for artists section
    const [artists, setArtists] = useState([]);

    // states for cart section
    const [cart, setCart] = useState([]);

    const [displayArtists, setDisplayArtists] = useState([]);

    // loading data from JSON file of the public folder
    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => {
                setArtists(data);
                setDisplayArtists(data);
            });
    }, []);

    // loading data from local storage
    useEffect(() => {
        if (artists.length) {


            const storedList = getStoredcart();
            const storedArtists = [];
            if (storedList) {
                storedList.forEach(id => {
                    const artist = artists.find(artist => artist.id === id);
                    storedArtists.push(artist);
                });
                setCart(storedArtists);

            }
        }

    }, [artists]);

    // handler for updating cart
    const cartHandler = (artist) => {
        if (cart.indexOf(artist) === -1) {
            const newCart = [...cart, artist];
            setCart(newCart);
            addToDb(artist.id);
        }
    }
    // removing from cart and local storage
    const cartHandlerRemove = (artist) => {
        const newCart = cart.filter(artistParameter => artistParameter !== artist);
        setCart(newCart);
        removeFromDb(artist.id);
    }
    // search handler
    const searchHandler = event => {
        const searchText = event.target.value;
        const searchedArtist = artists.filter(artist => artist.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayArtists(searchedArtist);
    }

    return (
        <div className="main">
            {/* search field */}
            <div className="text-center p-2 input-field">
                <input onChange={searchHandler} type="text" placeholder="Search Artist..." />
            </div>
            <div className="pt-2 mx-5 px-4">
                <div className="row">

                    {/* artists section */}
                    <div className="col-9">
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            {
                                displayArtists.map(artist => <Artists
                                    key={artist.id}
                                    artist={artist}
                                    cartHandler={cartHandler}
                                ></Artists>)
                            }
                        </div>
                    </div>
                    {/* cart section */}
                    <div className="col-3 border border-info">
                        <Cart cartHandlerRemove={cartHandlerRemove} cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;