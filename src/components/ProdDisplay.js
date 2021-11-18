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
        {props.productsList.map((product, index) =>
          <Product name={product.name}
            image={product.image}
            price={product.price}
            count={product.count}
            key={index}
          />
        )}
      </div>
    </React.Fragment>
  );
}

ProdDisplay.propTypes = {
  productsList: PropTypes.array
}
export default ProdDisplay;