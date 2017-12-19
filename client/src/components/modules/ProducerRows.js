import React from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import getTypeIcon from 'media/product-types/getTypeIcon';
import './ProducerRows.css'

/**
  * Module Components
**/
export function ProducerRow(props) {
  return (
    <Link to={"/producers/" + props.id} className="Producer-Row">
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
