import React from 'react';
import PDF from 'react-pdf-js';

function MapViewer(props) {
  return (
    <PDF file="http://www.grownyc.org/files/gmkt/usqmaps/unsq-sat.pdf" />
  )

}

export default MapViewer;
