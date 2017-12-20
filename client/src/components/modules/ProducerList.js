import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import getTypeIcon from 'media/product-types/getTypeIcon';
import './ProducerList.css'

/**
  * PRODUCER LIST
**/
export function ProducerList(props) {
  return (
    <div className="Producer-List">
      {props.children}
    </div>
  )
}

export function ListHeading(props) {
  const heading = (props) => !props.heading ? (null) : (<h2>{props.heading}</h2>);
  const subheading = (props) => !props.subheading ? (null) : (<h4>{props.subheading}</h4>);
  const colHeadings = (props) => {
    if (!props.colHeadings) {return null} else {
      return (
        <div className="Producer-Row heading">
          {props.colHeadings.map(colHeadingMapper)}
        </div>
      )
    }
  }
  const colHeadingMapper = (headingElement, index) => {
    const cutKeys = () => "COLHEADING_" + headingElement + "_" + index;
    switch (headingElement) {
      case "TYPE":
        return <div className="icon" key={cutKeys()}><p>Type</p></div>;
      case "NAME":
        return <div className="name" key={cutKeys()}><p>Name</p></div>;
      case "SUMMARY":
        return <div className="summary" key={cutKeys()}><p>Product Summary</p></div>;
      case "DATE":
        return <div className="date" key={cutKeys()}><p>Date</p></div>;
      case "DAYS":
        return <div className="Producer-Days" key={cutKeys()}><p>Days</p></div>;
      default:
        return null;
    }
  }
  return (
    <header>
      {heading(props)}
      {subheading(props)}
      {colHeadings(props)}
    </header>
  )
}

/**
  * PRODUCER ROW & ROW CONTENTS
  * The row contents are meant to be used selectively
  * so they need to be imported separately
**/
export function ProducerRow(props) {
  return (
    <Link to={"/producers/" + props.id} className={props.className + " Producer-Row"}>
      {props.children}
    </Link>
  )
}

export function RowIcon(props) {
  const icon = getTypeIcon(props.type);
  return (
    <div className="icon">
      <img src={icon} alt="type" />
    </div>
  )
}

export function RowName(props) {
  return (
    <div className="name">
      <p>{props.name}</p>
    </div>
  )
}

export function RowDate(props) {
  return (
    <div className="date">
      <p>
        <Moment date={props.date} format={"ddd, MM/DD/YY"}/>
      </p>
    </div>
  )
}

export function RowSummary(props) {
  const shortSum = shortenString(props.summary, props.maxLength);
  const summary = () => !props.maxLength ? props.summary : shortSum;
  return (
    <div className="summary">
      <p>
        {summary()}
      </p>
    </div>
  )
}

function shortenString(string, max) {
  if (string.length > max) {
    return string.slice(0,max - 1) + "...";
  } else {
    return string;
  }
}
