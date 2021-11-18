import React from 'react';
import PropTypes from "prop-types";

function ViewProd(props) {
  const productStyle = {
    float: 'left',
    marginTop: '180px',
    width: '80%'
  }
  const {product} = props
  console.log(props)

  if (product.count === 0) {
    return (
      <React.Fragment>
        <div style={productStyle}>
          <h1>{product.name}</h1>
          <div>{product.image}</div>
          <p>{product.description}</p>
          <p>Price: $ {product.price}</p>
          <p>Quantity: {product.count}</p>
          <button>Delete Bracelet</button>
        </div>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div style={productStyle}>
        <h1>{product.name}</h1>
        <div>{product.image}</div>
        <p>{product.description}</p>
        <p>Price: $ {product.price}</p>
        <p>Quantity: {product.count}</p>
        <button onClick= {() => props.onAddToCartClick(product.id)}>Add to Cart</button>
        <button>Delete Bracelet</button>
      </div>
    </React.Fragment>
  );
}

ViewProd.propTypes = {
  product: PropTypes.object,
  onAddToCartClick: PropTypes.func
};

export default ViewProd;