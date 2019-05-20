import React, { Component } from 'react';
import { Container } from 'reactstrap'

import { Form, FormGroup, Label, Input, CustomInput, Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';


export class FormUserDetails extends Component {
    
    
	state = {
		fname: '',
		iname: '',
		email: '',
		cnumber: 0,
		xp: '',
		gender: ''
	}

	render () {
		return (
			<Container>
				<Card>
					<CardHeader tag="h2">
						<CardTitle>Personal Information</CardTitle>
					</CardHeader>
					<CardBody>
						<Form>
							<FormGroup>
								<Label for="fname">Full Name</Label>
								<Input type="text" name="fname" id="fname" placeholder="Enter Full Name" />
							</FormGroup>
							<FormGroup>
								<Label for="iname">Industry Name</Label>
								<CustomInput type="select" id="iname" name="iname">
									<option value="">Select Industry</option>
									<option>Test Industry 1</option>
									<option>Test Industry 2</option>
								</CustomInput>
							</FormGroup>
							<FormGroup>
								<Label for="email">Email</Label>
								<Input type="email" name="email" id="email" placeholder="Enter Email" />
							</FormGroup>
							<FormGroup>
								<Label for="cnumber">Contact Number</Label>
								<Input type="number" name="cnumber" id="cnumber" placeholder="Enter Contact Number" min="0"/>
							</FormGroup>
							<FormGroup>
								<Label for="xp">Experience</Label>
								<Input type="textarea" name="xp" id="xp" placeholder="Enter Your Experience" />
							</FormGroup>
							<FormGroup>
								<Label for="gender">Gender</Label>
								<div>
									<CustomInput type="radio" value="female" id="genderFemale" name="gender" label="Female" inline />
									<CustomInput type="radio" value="male" id="genderMale" name="gender" label="Male" inline />
								</div>
							</FormGroup>
						</Form>
					</CardBody>
					<CardFooter>
						<Button>Next</Button>
					</CardFooter>
				</Card>
			</Container>
		);
	}
};

export default FormUserDetails;