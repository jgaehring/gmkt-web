import React, {Component} from 'react';
import Modal from 'react-modal';
import PDF from 'react-pdf-js';
import "today/Map.css";


class MapViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div className="modal-opener" onClick={this.openModal} >
          <h3>Open Map</h3>
          <PDF className="PDF thumbnail-map" file={this.props.currentMap} />

        </div>
        <Modal className="Modal modal-content"
          isOpen={this.state.modalIsOpen}
          // onAfterOpen={afterOpenFn}
          onRequestClose={this.closeModal}
          // onClick={this.closeModal}
          // closeTimeoutMS={n}
          style={{outline: "2px solid red"}}
          contentLabel="Modal">
          <PDF className="PDF modal-map" file={this.props.currentMap} onClick={this.closeModal} />
        </Modal>
      </div>
    )
  }

}

// function MapViewer(props) {
//   const monMap = (
//     <div className="map">
//       <a href="http://www.grownyc.org/files/gmkt/usqmaps/unsq-mon.pdf">
//         <img src="http://www.grownyc.org/files/gmkt/usqmaps/unsq-mon.jpg" alt="map"/>
//       </a>
//     </div>
//   );
//   const wedMap = (
//     <div className="map">
//       <a href="http://www.grownyc.org/files/gmkt/usqmaps/unsq-wed.pdf">
//         <img src="http://www.grownyc.org/files/gmkt/usqmaps/unsq-wed.jpg" alt="map"/>
//       </a>
//     </div>
//   );
//   const friMap = (
//     <div className="map">
//       <a href="http://www.grownyc.org/files/gmkt/usqmaps/unsq-fri.pdf">
//         <img src="http://www.grownyc.org/files/gmkt/usqmaps/unsq-fri.jpg" alt="map"/>
//       </a>
//     </div>
//   );
//   const satMap = (
//     <div className="map">
//       <a href="http://www.grownyc.org/files/gmkt/usqmaps/unsq-sat.pdf">
//         <img src="http://www.grownyc.org/files/gmkt/usqmaps/unsq-sat.jpg" alt="map"/>
//       </a>
//     </div>
//   );
//   let currentMap = null;
//   if (props.marketDay === 0) {
//     currentMap = monMap;
//   } else if (props.marketDay === 2) {
//     currentMap = wedMap;
//   } else if (props.marketDay === 4) {
//     currentMap = friMap;
//   } else if (props.marketDay === 5) {
//     currentMap = satMap;
//   }
//
//   return (
//     currentMap
//   )
// }

export default MapViewer;
