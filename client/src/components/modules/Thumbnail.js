import React from 'react';
import 'modules/Thumbnail.css';

function Thumbnail(props) {
  return (
    <div className="Thumbnail">
      <img className="thumbnail-img" src={props.imgURL} alt={props.altText}/>
      <p className="thumbnail-text">{props.thumbnailText}</p>
    </div>
  )
};

export default Thumbnail;
