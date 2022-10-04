import {createSlice } from "@reduxjs/toolkit";

const ytToEmbed = (url)=>{
  const regexp = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]vi?=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const data = url.match (regexp);
  return data[1] ? ('https://www.youtube.com/embed/'+data[1]) : url;
}

const playlistSlice = createSlice(
  {
    name: "Playlist",
    initialState: {currVideo: '', songs: []},
    reducers:{
      playVideo(state, action){
        state.currVideo = {
          link: ytToEmbed(action.payload.linkYT),
          title: action.payload.title}
      },
      resetPlayer(state){
        state.currVideo = '';
      }
    }
  }
);

export const playlistActions = playlistSlice.actions;
export default playlistSlice;