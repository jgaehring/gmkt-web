import React from 'react';
import Today from 'containers/Today';
import Producer from 'containers/Producer';
import Product from 'containers/Product';
import Map from 'containers/Map';
import 'modules/Page.css'

function Page(props) {
  function getPageMarkup() {
    if (props.currentPage === "TODAY") {
      return <Today/>
    } else if (props.currentPage === "PRODUCER") {
      return <Producer/>
    } else if (props.currentPage === "PRODUCT") {
      return <Product/>
    } else if (props.currentPage === "MAP") {
      return <Map/>
    } else {
      return <Today/>
    }
  }
  const pageMarkup = getPageMarkup()
  return (
    <div className="Page">
      {pageMarkup}
    </div>
  )
}

export default Page;
