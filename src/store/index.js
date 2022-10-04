import { configureStore } from "@reduxjs/toolkit";
import albumsSlice from "./albums-Slice";
import listWordsSlice from "./listWords-slice";
import optionsSlice from "./options-slice";
import playlistSlice from "./playlist-slice";

const store = configureStore({
    reducer:{
        options: optionsSlice.reducer, 
        list: listWordsSlice.reducer, 
        albums: albumsSlice.reducer,
        playList: playlistSlice.reducer
    }
});

export default store;