import '../css/NavBar.css';
import React from 'react';

function NavBar(props) {
  const navBarStyle = {
    width: '96%',
    position: 'fixed',
    background: 'pink',
    padding: '3px',
    marginTop: '110px',
    textAlign: 'center',
    borderRadius: '2px'
  }

  return (
    <div style={navBarStyle}>
      <div class='navLink' id='navLink1'>
        <button class='navLink' onClick={props.onViewAllClick}>View All Bracelets</button>
      </div>
      <div class='navLink' id='navLink2'>
        <button class='navLink' onClick={props.onAddProdClick}>Add Bracelet</button>
      </div>
      <div class='navLink' id='navLink3'>
        <button class='navLink'>Cart</button>
      </div>
    </div>
  )
}

export default NavBar;