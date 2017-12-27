import React from 'react';
import Moment from 'react-moment';
import {
  List,
  ListHeading,
  ParentRow,
  ChildRow,
  RowIcon,
  RowName,
  withToggle } from 'modules/ProducerList'

export default function ProductPresences(props) {
  const subheading = () => (
    <span>
      as of&nbsp;
      <Moment date={props.date} format={'dddd, MMMM Do'} />
    </span>
  )
  return (
    <List>
      <ListHeading
        heading={"Current Products"}
        subheading={subheading()} />
      {
        props.products.map( product => {
          return (
            <ProductRowWithToggle
              parentRow={product}
              childRows={product.varieties}
              key={product.id} />
          )
        })
      }
    </List>
  )
}

const ProductRow = (props) => (
  <ParentRow {...props} to={"/products/" + props.id}>
    <RowIcon type={props.type} />
    <RowName name={props.name} />
  </ParentRow>
)

const VarietyRow = (props) => (
  <ChildRow to={"/products/" + props.id}>
    <RowIcon type={null} />
    <RowName name={props.name} />
  </ChildRow>
)

const ProductRowWithToggle = withToggle(ProductRow, VarietyRow);
