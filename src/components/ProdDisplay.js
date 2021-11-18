import React from 'react';
import Product from './Product';
import PropTypes from "prop-types";

function ProdDisplay(props) {
  const displayStyle = {
    float: 'left',
    marginTop: '180px',
    width: '80%'
  }
  return (
    <React.Fragment>
      <div style={displayStyle}>
        {props.productsList.map((product) =>
          <Product
            whenProdClicked={props.onIndividualProdClick}
            whenAddToCartClicked={props.onAddToCartClick}
            name={product.name}
            image={product.image}
            price={product.price}
            count={product.count}
            key={product.id}
            id={product.id}
          />
        )}
      </div>
    </React.Fragment>
  );
}

ProdDisplay.propTypes = {
  productsList: PropTypes.array,
  onIndividualProdClick: PropTypes.func,
  onAddToCartClick: PropTypes.func
}
export default ProdDisplay;