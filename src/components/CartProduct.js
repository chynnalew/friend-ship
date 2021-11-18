import React from 'react';
import PropTypes from 'prop-types';

function CartProduct(props) {
  const productCardStyle = {
    width: '200px',
    height: '250px',
    padding: '10px',
    margin: '10px',
    border: '1px grey solid',
    float: 'left'
  }

  return (
    <React.Fragment>
      <div style={productCardStyle}>
        <h1>{props.name}</h1>
        <div>{props.image}</div>
        <p>Price: $ {props.price}</p>
        <button>Remove From Cart</button>
      </div>
    </React.Fragment>
  )
}

CartProduct.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number,
  id: PropTypes.string,
}

export default CartProduct;