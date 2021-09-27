// getting data from local storage
const getDb = () => localStorage.getItem('artistsSelected');

//updating data to local storage
const updateDb = artistsSelected => localStorage.setItem('artistsSelected', JSON.stringify(artistsSelected));
let artistsSelected = [];

// adding to local storage
const addToDb = uniqueId => {
    const artistList = getDb();


    if (!artistList) {
        artistsSelected.push(uniqueId);
        updateDb(artistsSelected);


    }
    else {
        artistsSelected = JSON.parse(artistList);

        if (artistsSelected.indexOf(uniqueId) === -1) {
            artistsSelected.push(uniqueId)
            updateDb(artistsSelected);


        }
    }
}
// removing from local storage
const removeFromDb = id => {
    const artistList = getDb();

    if (artistList) {
        artistsSelected = JSON.parse(artistList);
        artistsSelected = artistsSelected.filter(artistid => artistid !== id);

        updateDb(artistsSelected);
    }
}

// getting data from local storage to display on the cart
const getStoredcart = () => {
    const artistList = getDb();

    return artistList ? JSON.parse(artistList) : [];
}




export { addToDb, getStoredcart, removeFromDb };