import { createSlice } from "@reduxjs/toolkit";
import listWordsDefault from "../ReferenceStorage/ListWordsDefault";


const albumsSlice = createSlice(
  {
    name: 'Albums',
    initialState: {albums: listWordsDefault, selected: -1},
    reducers:{
      open(state, action){
        state.selected = action.payload; 
      },
      reset(state){
        state.selected = -1;
      }
    }
  });

  export const albumsActions = albumsSlice.actions;
  export default albumsSlice;