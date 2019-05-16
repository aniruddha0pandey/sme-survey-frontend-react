import React, { Component } from 'react';
import { Container } from 'reactstrap'

import { Card, CardBody, CardTitle, CardHeader } from 'reactstrap';

export class FormUserResults extends Component {

    
	state = {
		reponse: '',
		success: false
	}

	render () {

		return (
			<Container>
				<Card>
					<CardHeader tag="h2">
						<CardTitle>Survey Report</CardTitle>
					</CardHeader>
					<CardBody>
						This is a result.
					</CardBody>
				</Card>
			</Container>
		);
	}
};

export default FormUserResults;