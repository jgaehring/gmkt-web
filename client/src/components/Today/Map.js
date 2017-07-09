import React from 'react';
// import PDF from 'react-pdf-js';

function MapViewer(props) {
  const monMap = (
    <div className="map">
      <a href="http://www.grownyc.org/files/gmkt/usqmaps/unsq-mon.pdf">
        <img src="http://www.grownyc.org/files/gmkt/usqmaps/unsq-mon.jpg" alt="map"/>
      </a>
    </div>
  );
  const wedMap = (
    <div className="map">
      <a href="http://www.grownyc.org/files/gmkt/usqmaps/unsq-wed.pdf">
        <img src="http://www.grownyc.org/files/gmkt/usqmaps/unsq-wed.jpg" alt="map"/>
      </a>
    </div>
  );
  const friMap = (
    <div className="map">
      <a href="http://www.grownyc.org/files/gmkt/usqmaps/unsq-fri.pdf">
        <img src="http://www.grownyc.org/files/gmkt/usqmaps/unsq-fri.jpg" alt="map"/>
      </a>
    </div>
  );
  const satMap = (
    <div className="map">
      <a href="http://www.grownyc.org/files/gmkt/usqmaps/unsq-sat.pdf">
        <img src="http://www.grownyc.org/files/gmkt/usqmaps/unsq-sat.jpg" alt="map"/>
      </a>
    </div>
  );
  let currentMap = null;
  if (props.marketDay === 0) {
    currentMap = monMap;
  } else if (props.marketDay === 2) {
    currentMap = wedMap;
  } else if (props.marketDay === 4) {
    currentMap = friMap;
  } else if (props.marketDay === 5) {
    currentMap = satMap;
  }
  return (
    // <PDF file="http://www.grownyc.org/files/gmkt/usqmaps/unsq-sat.pdf" />
    currentMap
  )

}

export default MapViewer;
