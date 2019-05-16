import React, { Component } from 'react';
import { Container } from 'reactstrap'

import { Button } from 'reactstrap';
import { Card, CardBody, CardFooter } from 'reactstrap';

import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
// import Page4 from './Pages/Page4';
// import Page5 from './Pages/Page5';
// import Page6 from './Pages/Page6';
// import Page7 from './Pages/Page7';
// import Page8 from './Pages/Page8';
// import Page9 from './Pages/Page9';

export class FormUserSelections extends Component {

    
	state = {
			checkedButton: 0,
			time: false
	}

	render () {



		return (
			<Container>
				<Card>
					<CardBody>
						<Page1 /><br />
						<Page2 /><br />
						<Page3 />
					</CardBody>
					<CardFooter>
						<Button style={{ width: '100%'}}>Submit</Button>
					</CardFooter>
				</Card>
			</Container>
		);
	}
};

export default FormUserSelections;