import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Section from 'modules/Section';
import getTypeIcon from 'media/product-types/getTypeIcon';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import ChevronUp from 'react-icons/lib/fa/chevron-up';
import 'producers/Products.css';

class ProductRow extends Component {
  constructor(props) {
    super(props);
    this.toggleVarieties = this.toggleVarieties.bind(this);
    this.state = {
      icon: getTypeIcon(this.props.product.type),
      showVarieties: true
    }
  }

  toggleVarieties(e) {
    e.preventDefault();
    if (this.state.showVarieties) {
      this.setState({
        showVarieties: false
      })
    } else {
      this.setState({
        showVarieties: true
      })
    }
  }

  componentDidMount() {
    this.setState({
      showVarieties: false
    })
  }

  render(props) {
    const toggleWidget = () => {
      if (this.props.product.varieties.length > 0 && !this.state.showVarieties) {
        return (
          <div className="toggle-container">
            <div onClick={this.toggleVarieties} className="toggle" title="Show Varieties">
              <ChevronDown className="chevron" />
            </div>
          </div>
        )
      } else if (this.props.product.varieties.length > 0 && this.state.showVarieties) {
        return (
          <div className="toggle-container">
            <div onClick={this.toggleVarieties} className="toggle" title="Hide Varieties">
              <ChevronUp className="chevron" />
            </div>
          </div>
        )
      } else { return null }
    }
    return (
      <div className="product-row-container">
        <Link to={"/products/" + this.props.product.id} className="Product-Row parent">
          <div className="icon">
            <img src={this.state.icon} alt="type" />
          </div>
          <div className="name">
            <p>{this.props.product.name}</p>
          </div>
          { toggleWidget()}
        </Link>
        {
          this.props.product.varieties.map(variety => {
            if (this.state.showVarieties) {
              return (
                <Link to={"/products/" + variety.id} className="Product-Row variety"
                  key={variety.id}>
                  <div className="icon">
                    &nbsp;
                  </div>
                  <div className="name">
                    <p>{variety.name}</p>
                  </div>
                </Link>
              )
            } else {
                return null
            }
          })

        }
      </div>
    )
  }

}

// function ProductRow(props) {
//   const icon = getTypeIcon(props.product.type);
//   return (
//     <Link to={"/products/" + props.product.id} className="Product-Row">
//       <div className="icon">
//         <img src={icon} alt="type" />
//       </div>
//       <div className="name">
//         <p>{props.product.name}</p>
//       </div>
//     </Link>
//   )
// }

function Products(props) {
  let varietiesByProduct = [];
  props.products.forEach(product => {
    if (!product.variety_of_id && varietiesByProduct.indexOf(product) === -1) {
      varietiesByProduct.push({
        id: product.id,
        name: product.name,
        type: product.type,
        varieties: []
      })
    } else if (product.variety_of_id) {
      varietiesByProduct.forEach(parentProduct => {
        if (product.variety_of_id === parentProduct.id) {
          parentProduct.varieties.push({
            id: product.id,
            name: product.name,
            type: product.type
          })
        }
      })
    }
  })
  console.log("varietiesByProduct: ", varietiesByProduct);
  return (
    <Section className="Product-List">
      {
        varietiesByProduct.map( product => {
          return (
            <ProductRow product={product} key={product.id} />
          )
        })
      }
    </Section>
  )
}

export default Products;
