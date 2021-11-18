import React from 'react';

function Ads() {
  const adWrapperStyle = {
    position: 'fixed',
    marginTop: '180px',
    width: '10%',
    border: '2px black solid',
    right: '2%',
    textAlign: 'center'
  }
  const adsStyle = {
    padding: '10px',
    paddingtop: '20px'
  }
  return (
    <React.Fragment>
      <div style={adWrapperStyle}>
        <p style={adsStyle}>ads</p>
        <p style={adsStyle}>ads</p>
        <p style={adsStyle}>ads</p>
        <p style={adsStyle}>ads</p>
        <p style={adsStyle}>ads</p>
        <p style={adsStyle}>ads</p>
        <p style={adsStyle}>ads</p>
        <p style={adsStyle}>ads</p>
        <p style={adsStyle}>ads</p>
        <p style={adsStyle}>ads</p>
      </div>
    </React.Fragment>
  )
}

export default Ads;