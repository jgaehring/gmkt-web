import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import ChevronUp from 'react-icons/lib/fa/chevron-up';
import getTypeIcon from 'media/product-types/getTypeIcon';
import './ProducerList.css'

/**
  * LIST
**/
export function List(props) {
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
  * ROW COMPONENT & ROW CONTENTS
  * The row contents are meant to be used selectively
  * so they need to be imported separately
**/
export function Row(props) {
  return (
    <Link {...props} className={props.className + " Producer-Row"}>
      {props.children}
    </Link>
  )
}

// Renders the icon for the producer's main_type or product's type.
// Pass type={null} to render no icon.
export function RowIcon(props) {
  const iconUrl = getTypeIcon(props.type);
  const imgEl = () => <img src={iconUrl} alt="type" />;
  return (
    <div className="icon">
      { props.type === null ? null : imgEl() }
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

/**
  * ROW WITH TOGGLE
  * withToggle() is a Higher Order Component (HOC)
  * which takes the Components ParentRow and ChildRow as arguments,
  * composes them and adds the necessary state and event handlers.
  * The ParentRow and ChildRow components must be used instead of
  * the regular Row component but can contain the regular Row Contents.
**/
export function withToggle(ParentRow, ChildRow) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.toggleChildren = this.toggleChildren.bind(this);
      this.state = {
        showChildren: true
      }
    }

    toggleChildren(e) {
      e.preventDefault();
      this.setState(prevState => ({
        showChildren: !prevState.showChildren
      }))
    }

    componentDidMount() {
      this.setState({
        showChildren: false
      })
    }

    render(props) {
      const show = this.state.showChildren;
      const hasChildRows = this.props.childRows.length > 0;
      const renderChildRows = () => {
        return this.props.childRows.map(child => {
          return <ChildRow {...child} hasChildRows={false} key={child.id}/>
        })
      }
      return (
        <div className="Row-with-Toggle">
          <ParentRow show={show} hasChildRows={hasChildRows} onClick={this.toggleChildren} {...this.props.parentRow}/>
          { show ? renderChildRows() : null }
        </div>
      )
    }
  }
}

const ToggleWidget = (props) => {
  const title = () => {
    if (props.hasChildRows) {
      return props.show ? "Show Varieties" : "Hide Varieties";
    }
  }
  const chevron = props.show ?
  (<ChevronUp className="chevron chevron-up" />) :
  (<ChevronDown className="chevron chevron-down" />)
  const onClick = props.hasChildRows ? props.onClick : null;
  return (
    <div onClick={onClick} className="toggle" title={title()}>
      { props.hasChildRows ? chevron : null }
    </div>
  )
}

export function ParentRow(props) {
  return (
    <Link to={props.to} className={props.className + " Producer-Row parent"}>
      {props.children}
      <ToggleWidget
        onClick={props.onClick}
        show={props.show}
        hasChildRows={props.hasChildRows} />
    </Link>
  )
}

export function ChildRow(props) {
  return (
    <Link to={props.to} className={props.className + " Producer-Row variety"}>
      {props.children}
      <ToggleWidget hasChildRows={false} />
    </Link>
  )
}
