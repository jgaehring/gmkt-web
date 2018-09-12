import React from 'react';
import Header, {
  HeaderImage,
  HeaderInfo,
  MainInfo,
  Details,
  DetailRow,
} from 'modules/Header';
import parseProductType from 'utils/parseProductType.js';

function getProductImage(pic, type) {
  if (pic === undefined) {
    return parseProductType(type).icon;
  } else {
    return pic;
  }
}

function parseMonth(int) {
  switch (int) {
    case 1:
      return {
        name: 'January',
        abbrev: 'Jan',
        number: int,
      };
    case 2:
    return {
      name: 'February',
      abbrev: 'Feb',
      number: int,
    };
    case 3:
    return {
      name: 'March',
      abbrev: 'Mar',
      number: int,
    };
    case 4:
    return {
      name: 'April',
      abbrev: 'Apr',
      number: int,
    };
    case 5:
    return {
      name: 'May',
      abbrev: 'May',
      number: int,
    };
    case 6:
    return {
      name: 'June',
      abbrev: 'Jun',
      number: int,
    };
    case 7:
    return {
      name: 'July',
      abbrev: 'Jul',
      number: int,
    };
    case 8:
    return {
      name: 'August',
      abbrev: 'Aug',
      number: int,
    };
    case 9:
    return {
      name: 'September',
      abbrev: 'Sep',
      number: int,
    };
    case 10:
    return {
      name: 'October',
      abbrev: 'Oct',
      number: int,
    };
    case 11:
    return {
      name: 'November',
      abbrev: 'Nov',
      number: int,
    };
    case 12:
    return {
      name: 'December',
      abbrev: 'Dec',
      number: int,
    };
    default: 
      return undefined;
  }
}

function ProfileHeader({ product }) {
  const pic = product.pic_url;
  const type = product.type;
  const imgURL = getProductImage(pic, type);
  const season = product.season_from && product.season_to
    ? (<p>{`Available from ${parseMonth(product.season_from).name}`
      + ` to ${parseMonth(product.season_to).name}`}</p>)
    : null;
  return (
    <Header>
      <HeaderImage imgURL={imgURL}  alt="Product"/>
      <HeaderInfo>
        <MainInfo>
          <h1>{product.name}</h1>
        </MainInfo>
        <Details>
          <DetailRow>
            {season}
          </DetailRow>
        </Details>
      </HeaderInfo>
    </Header>
  )
};

export default ProfileHeader;
