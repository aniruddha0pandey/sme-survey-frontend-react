import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import { createBrowserHistory } from "history"

import { Container } from 'reactstrap';
import { Button, Spinner, Modal } from 'reactstrap';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';

import FormUserResults from './FormUserResults'
import API from '../Utils/Api.js';

import FormUserDetails from './FormUserDetails';
import FormUserSelections from './FormUserSelections';

import '../App.css'

const hist = createBrowserHistory()

class FormEntry extends Component {
	constructor(  ) {
		super(  );

		this.collectValues = this.collectValues.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
      info: {},
      values: {},
      postRequestCompleted: false,
      modal: false
    };
	}

  collectValues( value, name ) {
    if ( name === 'info' )
      this.setState(state => ({ info: value }))
    else if ( name === 'values' )
      this.setState(state => ({ values: value }))
  }

  // TODO: use componentDidMount() (i.e async await)
  handleSubmit ( ) {
    let params = {
      info: this.state.info,
      values: this.state.values
    };
    // let spreadsheetId = '/1pbEG_HGrhKsh8seYF4-7h-5Wiq6PBVvKWqZjuitQmJw';
    let spreadsheetId = `/api`;
    
    API.post(spreadsheetId, { params })
      .then(res => console.log(JSON.parse(res.config.data)))
      .then(() => this.setState({ postRequestCompleted: true }))
      .catch(err => console.log(err))

    this.setState(({ modal: true }))
  }

  render () {
    const stylish = {
      width: '5rem', 
      height: '5rem', 
      color: 'lightblue',
      marginLeft: '42%',
    }

    return (
      <React.Fragment>
        { this.state.postRequestCompleted ? (
          <Router history={hist}>
            <Switch>
              <Route exact={true} path="/result" component={FormUserResults} />
              <Redirect from="/form" to="/result" />
            </Switch>
          </Router>
        ) : (
          <Container>
            <Card>
              <CardHeader tag="h2">
                <CardTitle>Form</CardTitle>
              </CardHeader>
              <CardBody>
                <FormUserDetails changeValue={this.collectValues} /><br />
                <FormUserSelections changeValue={this.collectValues} />
              </CardBody>
              <CardFooter>
                <Button style={{ width:'100%' }} onClick={this.handleSubmit} >Submit</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <Spinner style={ stylish } />
                </Modal>
              </CardFooter>
            </Card>
          </Container>
        )}
      </React.Fragment>
    );
  }
}

export default FormEntry;