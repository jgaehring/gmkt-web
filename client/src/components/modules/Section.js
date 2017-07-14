import React from 'react';
import './Section.css'

function Section(props) {
  return (
    <section id={props.id} className={props.className}>
      {props.children}
    </section>
  ) 
}

export default Section;
