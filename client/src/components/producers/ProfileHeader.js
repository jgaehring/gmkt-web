import React from 'react';
import Header from 'modules/Header';
import Section from 'modules/Section';
import getTypeIcon from 'media/product-types/getTypeIcon';
import WebIcon from 'react-icons/lib/md/public'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import './ProfileHeader.css'
import ProducerDays from 'producers/ProducerDays'
import logo from 'media/GrowNYC-Circle-large-2065px.png';

function getProducerImage(pic, type) {
  if (pic === undefined) {
    return getTypeIcon(type);
  } else {
    return pic;
  }
}

function getTypeName(typeNum) {
  switch (typeNum) {
    case 0:
      return "Orchard"
    case 1:
      return "Vegetable Farm"
    case 2:
      return "Dairy"
    case 3:
      return "Bakery"
    case 4:
      return "Livestock / Poultry Farm"
    case 5:
      return "Fishery"
    case 6:
      return "Preserves"
    case 7:
      return "Beverages"
    case 8:
      return "Plants"
    default:
      return "Local Producer"
  }
}

function Website(props) {
  if (props.producer.website) {
    return (
      <a href={props.producer.website} target="_blank" rel="noopener noreferrer" title="Website">
        <WebIcon />
      </a>
    )
  } else {
    return null;
  }
}

function Twitter(props) {
  if (props.producer.twitter) {
    const baseURL = "https://twitter.com/";
    const endpoint = props.producer.twitter.replace(/@/g, "")
    return (
      <a href={baseURL + endpoint} target="_blank" rel="noopener noreferrer" title="Twitter Profile">
        <TwitterIcon />
      </a>
    )
  } else {
    return null;
  }
}

function Facebook(props) {
  if (props.producer.facebook) {
    return (
      <a href={props.producer.facebook} target="_blank" rel="noopener noreferrer" title="Facebook Profile">
        <FacebookIcon />
      </a>
    )
  } else {
    return null;
  }
}

function ProfileHeader(props) {
  const pic = props.producer.pic_url;
  const type = props.producer.main_type;
  const imgURL = getProducerImage(pic, type);
  return (
    <Header className="Producer-Profile">
      <Section className="header-section">
        <div className="header-image">
          <img src={imgURL} alt="Producer" />
        </div>
        <div className="header-info">
          <div className="producer-info">
            <img className="logo" src={logo} alt="logo" />
            <h2>{props.producer.name}</h2>
            <p>{props.producer.city}, {props.producer.state}</p>
            <div className="connect">
              <Website producer={props.producer} />
              <Twitter producer={props.producer} />
              <Facebook producer={props.producer} />
            </div>
          </div>
          <div className="profile-details">
            <div id="product-summary" className="detail-row">
              <h4>Product Summary</h4>
              <p>{props.producer.product_summary}</p>
            </div>
            <div className="detail-row">
              <h4>Days</h4>
              <ProducerDays seasons={props.producer.seasons}/>
            </div>
            <div className="detail-row">
              <h4>Product Type</h4>
              <img className="small-type-icon" src={getTypeIcon(type)} alt="type" />
              <p>{(getTypeName(type))}</p>
            </div>
          </div>
        </div>
      </Section>
    </Header>
  )
};

export default ProfileHeader;