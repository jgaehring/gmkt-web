import React, {Component} from 'react';
import Modal from 'react-modal';
import PDF from 'react-pdf-js';
import "./Map.css";


class MapViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  setCurrentMap() {
    if (this.state.marketDay === 0) {
      this.setState({
        currentMap: "/img/unsq-mon.pdf"
      });
    } else if (this.state.marketDay === 2) {
      this.setState({
        currentMap: "/img/unsq-wed.pdf"
      });
    } else if (this.state.marketDay === 4) {
      this.setState({
        currentMap: "/img/unsq-fri.pdf"
      });
    } else if (this.state.marketDay === 5) {
      this.setState({
        currentMap: "/img/unsq-sat.pdf"
      });
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
    this.setCurrentMap();
  }

  render() {
    return (
      <div>
        <div>
          <div className="modal-opener" onClick={this.openModal} >
            <h3>Open Map</h3>
            <PDF className="PDF thumbnail-map" file="/img/unsq-mon.pdf" />

          </div>
          <Modal className="Modal modal-content"
            isOpen={this.state.modalIsOpen}
            // onAfterOpen={afterOpenFn}
            onRequestClose={this.closeModal}
            // closeTimeoutMS={n}
            // style={outline: "2px solid red"}
            contentLabel="Modal">
            <PDF className="PDF modal-map" file="/img/unsq-mon.pdf"/>
          </Modal>
        </div>
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
