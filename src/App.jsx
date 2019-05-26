import React, { Component } from 'react';

import './App.css';

// import FormUserIntro from './Components/FormUserIntro';
import FormUserDetails from './Components/FormUserDetails';
import FormUserSelections from './Components/FormUserSelections';
// import FormUserResults from './Components/FormUserResults';

export default class App extends Component {

  state = { 
    page: 1
  }

  render () {
    const stylish = {
      backgroundColor: '#fcfffd',
      padding: '50px 0px 50px 0px'
    };

    return (
      <div className="App" style={stylish}>
        {/* <FormUserIntro /><br /><br /> */}
        <FormUserDetails /><br /><br />
        <FormUserSelections /><br /><br />
        {/* <FormUserResults /> */}
      </div>
    );
  }
}
