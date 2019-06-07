import React, { Component } from 'react';

import './App.css';

// import FormUserIntro from './Components/FormUserIntro';
import FormEntry from './Components/FormEntry';
// import FormUserResults from './Components/FormUserResults';

export default class App extends Component {

  state = {};

  render () {
    const stylish = {
      backgroundColor: '#fcfffd',
      padding: '50px 0px 50px 0px'
    };

    return (
      <div className="App" style={stylish}>
        {/* <FormUserIntro /><br /><br /> */}
        <FormEntry />
        {/* <FormUserResults /> */}
      </div>
    );
  }
}
