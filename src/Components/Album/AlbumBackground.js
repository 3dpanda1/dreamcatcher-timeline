import React from "react";
import { useDispatch } from "react-redux";
import { albumsActions } from "../../store/albums-Slice";

const AlbumBackground = () => {
  const dispatch = useDispatch();
  const handleReset = ()=>{
    dispatch(albumsActions.reset());
  }

  return (  
    <div className="background-canvas" onClick={handleReset}/>
  );
};

export default AlbumBackground;
