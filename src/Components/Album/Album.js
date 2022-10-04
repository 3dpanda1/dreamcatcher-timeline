import React from "react"
import './Album.css'

const Album = (props) => {
  return <div
    className={
      'album' +
      (props.selected? '-selected' : '') +
      (props.start ? (' album-base' + (props.selected ? '-selected' : '')) : '')
    }
  >
    {props.start && (
      <div className="album-shadow-container">
        <div className='album-shadow'></div>
      </div>)}
    <img className="center-cropped" alt= {props.altText}
    src={props.imgSrc} 
    onClick={props.onClick}/>
  </div>;
};

export default Album;