import React from 'react';
import CartProduct from './CartProduct';

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

export default Cart;