import React, { Component } from 'react';
import { Container } from 'reactstrap'

import { Button } from 'reactstrap';
import { Card, CardBody, CardFooter } from 'reactstrap';

import datastore from '../datastore.json';
import Page from './Page.jsx';


export class FormUserSelections extends Component {
	constructor( props ) {
		super( props );

		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			allChecked: false,
			time: new Date().toLocaleTimeString(),
			data: []
		};
	}

  handleSubmit( e ) {
		e.preventDefault();

    alert('Form Submited');
  }

  createPages( pages ) {
    return pages.map(page => {
      return (
				<Page 
					key={page.id} 
					page={page}
				/>
			);
    })
  }
  
	render () {


		return (
			<Container>
				<Card>
					<CardBody>
						{this.createPages( datastore.pages )}
					</CardBody>
					<CardFooter>
						<Button style={{ width:'100%' }}>Submit</Button>
					</CardFooter>
				</Card>
			</Container>
		);
	}
};

export default FormUserSelections;