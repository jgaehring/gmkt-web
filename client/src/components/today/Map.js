import React, {Component} from 'react';
import Modal from 'react-modal';
import PDF from 'react-pdf-js';
import Section from 'modules/Section'
import CloseIcon from 'react-icons/lib/fa/times-circle'
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
      <Section id="Map">
        <div className="modal-target" onClick={this.openModal} >
          <h2>Today's Map</h2>
          <PDF className="PDF thumbnail-map" file={this.props.currentMap} />

        </div>
        <Modal className="Modal modal-content"
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Full-size Map">
          <CloseIcon className="close-icon" onClick={this.closeModal}/>
          <PDF className="PDF modal-map" file={this.props.currentMap} onClick={this.closeModal} />
        </Modal>
      </Section>
    )
  }
}

export default MapViewer;
