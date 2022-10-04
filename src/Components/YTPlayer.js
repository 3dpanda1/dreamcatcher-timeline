import React from "react";
import { useDispatch } from "react-redux";
import { playlistActions } from "../store/playlist-slice";

const YTPlayer = (props) => {
  const dispatch = useDispatch();
  
  const handleResetPlayer = ()=>{
    dispatch(playlistActions.resetPlayer())
  }
  console.log("linkYT:", props.src);
  return (
    <div className="full-absolute">
      <div className="video-container background-canvas overlay_black" onClick={handleResetPlayer}>
      {props.src?
        <iframe width="709" height="399" src={props.src} title={props.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        :
        <h4 className="text-white"> Not available. </h4>
      }
      </div>
    </div>
  );
};

export default YTPlayer;