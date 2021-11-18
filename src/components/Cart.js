import React from 'react';
import CartProduct from './CartProduct';
import PropTypes from "prop-types";

function Cart(props) {
  const cartStyle = {
    float: 'left',
    marginTop: '180px',
    width: '80%'
  }

  return (
    <React.Fragment>
      <div style={cartStyle}>
        <h1>Your Cart</h1>
        {props.cartList.map((product) =>
          <CartProduct
            whenRemoveFromCartClicked={props.onRemoveFromCartClick}
            name={product.name}
            image={product.image}
            price={product.price}
            key={product.id}
            id={product.id}
          />
        )}
      </div>
    </React.Fragment>
  )
}

Cart.propTypes = {
  onRemoveFromCartClick: PropTypes.func
}

export default Cart;