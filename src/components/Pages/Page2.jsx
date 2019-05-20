import React from 'react';

import { Form, FormGroup, Label, CustomInput, Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';


const Page2 = () => {
  return (
		<Card>
			<CardHeader tag="h5">
				<CardTitle>Occupational Safety Services/documentation</CardTitle>
			</CardHeader>
			<CardBody>
				<Form>
					<FormGroup>
						<Label for="q4">1. Periodic medical examination is done for all the workers.</Label>
						<div>
							<CustomInput type="radio" value="1" id="b11" name="q4" label="1" inline />
							<CustomInput type="radio" value="2" id="b12" name="q4" label="2" inline />
							<CustomInput type="radio" value="3" id="b13" name="q4" label="3" inline />
							<CustomInput type="radio" value="4" id="b14" name="q4" label="4" inline />
							<CustomInput type="radio" value="5" id="b15" name="q4" label="5" inline />
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="q5">2. All the workers are having medical insurance which is provided by the industry.</Label>
						<div>
							<CustomInput type="radio" value="1" id="b21" name="q5" label="1" inline />
							<CustomInput type="radio" value="2" id="b22" name="q5" label="2" inline />
							<CustomInput type="radio" value="3" id="b23" name="q5" label="3" inline />
							<CustomInput type="radio" value="4" id="b24" name="q5" label="4" inline />
							<CustomInput type="radio" value="5" id="b25" name="q5" label="5" inline />
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="q6">3. First aid boxes contain all the required medicines in all the sections.</Label>
						<div>
							<CustomInput type="radio" value="1" id="b31" name="q6" label="1" inline />
							<CustomInput type="radio" value="2" id="b32" name="q6" label="2" inline />
							<CustomInput type="radio" value="3" id="b33" name="q6" label="3" inline />
							<CustomInput type="radio" value="4" id="b34" name="q6" label="4" inline />
							<CustomInput type="radio" value="5" id="b35" name="q6" label="5" inline />
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="q7">4. Safety programs conducted for workers are well documented.</Label>
						<div>
							<CustomInput type="radio" value="1" id="b41" name="q7" label="1" inline />
							<CustomInput type="radio" value="2" id="b42" name="q7" label="2" inline />
							<CustomInput type="radio" value="3" id="b43" name="q7" label="3" inline />
							<CustomInput type="radio" value="4" id="b44" name="q7" label="4" inline />
							<CustomInput type="radio" value="5" id="b45" name="q7" label="5" inline />
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="q8">5. Record of accidents is maintained by the industry.</Label>
						<div>
							<CustomInput type="radio" value="1" id="b51" name="q8" label="1" inline />
							<CustomInput type="radio" value="2" id="b52" name="q8" label="2" inline />
							<CustomInput type="radio" value="3" id="b53" name="q8" label="3" inline />
							<CustomInput type="radio" value="4" id="b54" name="q8" label="4" inline />
							<CustomInput type="radio" value="5" id="b55" name="q8" label="5" inline />
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="q9">6. Worker’s absentee record is maintained by the industry.</Label>
						<div>
							<CustomInput type="radio" value="1" id="b61" name="q9" label="1" inline />
							<CustomInput type="radio" value="2" id="b62" name="q9" label="2" inline />
							<CustomInput type="radio" value="3" id="b63" name="q9" label="3" inline />
							<CustomInput type="radio" value="4" id="b64" name="q9" label="4" inline />
							<CustomInput type="radio" value="5" id="b65" name="q9" label="5" inline />
						</div>
					</FormGroup>
				</Form>
			</CardBody>
			<CardFooter>
				<Button>Previous</Button>
				<Button style={{ float: 'right' }}>Next</Button>
			</CardFooter>
		</Card>
	);
};

export default Page2;