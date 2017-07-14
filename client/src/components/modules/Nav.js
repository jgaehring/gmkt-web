import React from 'react';
import './Nav.css'

export default function Nav(props) {
  return (
    <nav className={(props.className) ? props.className + " Nav" : "Nav"}>
      {props.children}
    </nav>
  )
}
