import React, { Component } from 'react';

import { Container } from 'reactstrap';
import { Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';

import FormUserDetails from './FormUserDetails';
import FormUserSelections from './FormUserSelections';

import API from '../Utils/Api.js';

class FormEntry extends Component {
	constructor(  ) {
		super(  );

		this.collectValues = this.collectValues.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
      info: {},
      values: {}
    };
	}

  collectValues( value, name ) {
    if ( name === 'info' )
      this.setState(state => ({ info: value }))
    else if ( name === 'values' )
      this.setState(state => ({ values: value }))
  }

  // TODO: use componentDidMount()
  handleSubmit ( ) {
    let params = this.state;
    // let spreadsheetId = '/1pbEG_HGrhKsh8seYF4-7h-5Wiq6PBVvKWqZjuitQmJw';
    let spreadsheetId = `/api`;
    
    API.post(spreadsheetId, { params })
      .then(res => console.log(JSON.parse(res.config.data)))
      .then(res => console.log(JSON.parse(res.data.msg)))
      .catch(err => console.log(err))
  }

  render () {
    return (
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
					</CardFooter>
				</Card>
			</Container>
    );
  }
}

export default FormEntry;