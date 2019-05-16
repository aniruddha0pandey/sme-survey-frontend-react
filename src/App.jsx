import React, { Component } from 'react';

import './App.css';

import FormUserDetails from './components/FormUserDetails';
import FormUserSelections from './components/FormUserSelections';
import FormUserResults from './components/FormUserResults';

export default class App extends Component {

  state = { page: 1 }

  render () {
    return (
      <div className="App" style={{ backgroundColor: '#fcfffd', padding: '50px 0px 50px 0px' }}>
        <FormUserDetails /><br /><br />
        <FormUserSelections /><br /><br />
        <FormUserResults />
      </div>
    );
  }
}
