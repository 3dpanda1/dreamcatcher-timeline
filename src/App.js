import React from "react";
import { useSelector } from "react-redux";
import AlbumBackground from "./Components/Album/AlbumBackground";
import ListSongs from "./Components/Album/ListSongs";
import PileAlbums from "./Components/Album/PileAlbums";
import YTPlayer from "./Components/YTPlayer";

import "./style.css";

export default function App() {
  const selected = useSelector(state => state.albums.selected );
  const playVideo =  useSelector(state => state.playList.currVideo);

  
  return (
    <div className = "base-page">
      <div className="albums-main">
        <AlbumBackground />
        <PileAlbums />
        {0<=selected && <ListSongs />}
      </div>
      {playVideo && <YTPlayer 
        src = {playVideo.link}  
        title = {playVideo.title}/>}
    </div>
  );
}