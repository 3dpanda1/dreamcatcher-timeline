import Album from "./Album";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { albumsActions } from "../../store/albums-Slice";

const PileAlbums = () => {
  const selected = useSelector(state => state.albums.selected );
  const dummy_values = useSelector(state => state.albums.albums);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    console.log("album " + i + " clicked.");
    return dispatch(albumsActions.open(i));
  };
  
  return (
  <div className="album-display">
    <div className="album-container">
      {dummy_values.map((album, i) => {
        return <Album imgSrc= {album.coverImg} 
          altText = {album.title}
          selected={selected===i} 
          start = {i===0} 
          onClick={()=>handleClick(i)}/>
        }
      )}
    </div>
  </div>
  );
};

export default PileAlbums;