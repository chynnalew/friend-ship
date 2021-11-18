import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {
  const productCardStyle = {
    width: '200px',
    height: '250px',
    padding: '10px',
    margin: '10px',
    border: '1px grey solid',
    float: 'left'
  }

  if (props.count === 0) {
    return (
      <React.Fragment>
        <div style={productCardStyle}>
          <h1>{props.name}</h1>
          <div>{props.image}</div>
          <p>Price: $ {props.price}</p>
          <p>Quantity: {props.count}</p>
          <button onClick={() => props.whenProdClicked(props.id)}>View Details</button>
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div style={productCardStyle}>
        <h1>{props.name}</h1>
        <div>{props.image}</div>
        <p>Price: $ {props.price}</p>
        <p>Quantity: {props.count}</p>
        <button onClick={() => props.whenProdClicked(props.id)}>View Details</button>
        <button onClick= {() => props.whenAddToCartClicked(props.id)}>Add to Cart</button>
      </div>
    </React.Fragment>
  )
}

Product.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  id: PropTypes.string,
  whenProdClicked: PropTypes.func,
  whenAddToCartClicked: PropTypes.func
}

export default Product;