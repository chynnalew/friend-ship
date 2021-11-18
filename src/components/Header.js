import React from 'react';

function Header() {
  const myStyledHeaderStyles = {
    backgroundColor: 'azure',
    border: '1px solid black', 
    textAlign: 'center',
    margin: '5px',
    borderRadius: '5px',
    height: '90px',
    fontFamily: 'Brush Script MT',
    fontSize: '20px',
    position: 'fixed',
    width: '96%'
  }
  return (
    <div style={myStyledHeaderStyles}>
      <h1>Friendship is Forever</h1>
    </div>
  );
}

export default Header;