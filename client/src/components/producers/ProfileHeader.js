import React from 'react';
import Header, {
  HeaderImage,
  HeaderInfo,
  MainInfo,
  Details,
  DetailRow,
} from 'modules/Header';
import parseProductType from 'utils/parseProductType';
import WebIcon from 'react-icons/lib/md/public'
import TwitterIcon from 'react-icons/lib/fa/twitter'
import FacebookIcon from 'react-icons/lib/fa/facebook'
import './ProfileHeader.css'
import ProducerDays from 'producers/ProducerDays'

function getProducerImage(pic, type) {
  if (pic === undefined) {
    return parseProductType(type).icon;
  } else {
    return pic;
  }
}

function Website(props) {
  if (props.producer.website) {
    const website = props.producer.website.replace(/[^\x00-\x7F]/, "");
    return (
      <a href={website} target="_blank" rel="noopener noreferrer" title="Website">
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
    <Header className="Profile-Header">
      <HeaderImage imgURL={imgURL} alt="Producer" />
      <HeaderInfo>
        <MainInfo>
          <h2>{props.producer.name}</h2>
          <p>{props.producer.city}, {props.producer.state}</p>
          <div className="connect">
            <Website producer={props.producer} />
            <Twitter producer={props.producer} />
            <Facebook producer={props.producer} />
          </div>
        </MainInfo>
        <Details>
          <DetailRow id="product-summary">
            <h4>Product Summary</h4>
            <p>{props.producer.product_summary}</p>
          </DetailRow>
          <DetailRow>
            <h4>Days</h4>
            <ProducerDays seasons={props.producer.seasons}/>
          </DetailRow>
          <DetailRow>
            <h4>Producer Type</h4>
            <img className="small-type-icon" src={parseProductType(type).icon} alt="type" />
            <p>{(parseProductType(type).producer)}</p>
          </DetailRow>
        </Details>
      </HeaderInfo>
    </Header>
  )
};

export default ProfileHeader;
