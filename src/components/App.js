import '../css/App.css';
import React from 'react';
import Header from './Header';
import LittlePappa from './LittlePappa';
import Ads from './Ads';

function App() {
  const styledApp = {
    margin: '2%',
  }
  return (
    <div style={styledApp}>
      <React.Fragment>
        <Header />
        <LittlePappa />
        <Ads />
      </React.Fragment>
    </div>
  );
}

export default App;
