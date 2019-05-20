import React from 'react';

import { Form, FormGroup, Label, CustomInput, Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';


const Page = ({ page }) => {



  return (
		<div className="pageCard">
			<Card>
				<CardHeader tag="h5">
					<CardTitle>{page.title}</CardTitle>
				</CardHeader>
				<CardBody>
					<Form>
						<FormGroup>
							<Label for="q1">1. Safety policy has implemented in the industry.</Label>
							<div>
								<CustomInput type="radio" value="1" id="a11" name="q1" label="1" inline />
								<CustomInput type="radio" value="2" id="a12" name="q1" label="2" inline />
								<CustomInput type="radio" value="3" id="a13" name="q1" label="3" inline />
								<CustomInput type="radio" value="4" id="a14" name="q1" label="4" inline />
								<CustomInput type="radio" value="5" id="a15" name="q1" label="5" inline />
							</div>
						</FormGroup>
						<FormGroup>
							<Label for="q2">2. Industry has a safety department & committee.</Label>
							<div>
								<CustomInput type="radio" value="1" id="a21" name="q2" label="1" inline />
								<CustomInput type="radio" value="2" id="a22" name="q2" label="2" inline />
								<CustomInput type="radio" value="3" id="a23" name="q2" label="3" inline />
								<CustomInput type="radio" value="4" id="a24" name="q2" label="4" inline />
								<CustomInput type="radio" value="5" id="a25" name="q2" label="5" inline />
							</div>
						</FormGroup>
						<FormGroup>
							<Label for="q3">3. All the workers are always made aware of safety issues by safety officer.</Label>
							<div>
								<CustomInput type="radio" value="1" id="a31" name="q3" label="1" inline />
								<CustomInput type="radio" value="2" id="a32" name="q3" label="2" inline />
								<CustomInput type="radio" value="3" id="a33" name="q3" label="3" inline />
								<CustomInput type="radio" value="4" id="a34" name="q3" label="4" inline />
								<CustomInput type="radio" value="5" id="a35" name="q3" label="5" inline />
							</div>
						</FormGroup>
					</Form>
				</CardBody>
				<CardFooter>
					<Button>Previous</Button>
					<Button style={{ float: 'right' }}>Next</Button>
				</CardFooter>
			</Card>
			<br />
		</div>
	);
};

export default Page;