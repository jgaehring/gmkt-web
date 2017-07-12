import React from 'react';
import './Section.css'

function Section(props) {
  return <section className={props.className}>{props.children}</section>
}

export default Section;
