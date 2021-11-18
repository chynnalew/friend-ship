import React from 'react';

function ViewProd(props) {
  const productStyle = {

  }
  
  return (
    <React.Fragment>
      <div style={productStyle}>
        <h1>{props.name}</h1>
        <div>{props.image}</div>
        <p>{props.description}</p>
        <p>Price: $ {props.price}</p>
        <p>Quantity: {props.count}</p>
        <button>Add to Cart</button>
        <button>Delete Bracelet</button>
      </div>
    </React.Fragment>
  );
}

export default ViewProd;