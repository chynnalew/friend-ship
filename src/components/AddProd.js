import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function AddProdForm(props) {

  function handleNewProductFormSubmission(e) {
    e.preventDefault();
    props.onNewProductCreation({name: e.target.name.value, description: e.target.description.value, price: e.target.price.value, count: e.target.count.value, id: v4()});
  }

  const formStyle = {
    float: 'left',
  marginTop: '180px',
  width: '80%'
  }

  return (
    <React.Fragment>
      <div style={formStyle}>
        <form onSubmit={handleNewProductFormSubmission}>
          <input
            type="text"
            name="name"
            placeholder="Product Name" />
          <br />
          <br/>
          <textarea 
            name="description"
            placeholder="Product Description" />
          <br />
          <br/>
          <input 
            type="number"
            name="price"
            placeholder="Product Price"
            min="1" />
          <br />
          <br/>
          <input 
            type="number"
            name="count"
            placeholder="Product Quantity"
            min="0" />
          <br />
          <br/>
          <input
            type="file"
            name="image"
            accept="image/*" />
          <br />
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </React.Fragment>
  );
}

AddProdForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default AddProdForm;