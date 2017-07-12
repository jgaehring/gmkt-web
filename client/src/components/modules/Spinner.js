import React from 'react';
import Center from 'media/GrowNYC-Center.png';
import Ring from 'media/GrowNYC-Ring.png';
import './Spinner.css'

export default function Spinner(props) {
  return (
    <div className="Spinner">
      <img className="center" src={Center} alt="GrowNYC Spinner"/>
      <img className="ring" src={Ring} alt="GrowNYC Spinner"/>
    </div>
  )
}
