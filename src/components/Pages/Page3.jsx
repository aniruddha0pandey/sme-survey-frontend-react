import React from 'react';

import { Form, FormGroup, Label, CustomInput, Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';


const Page3 = () => {
  return (
		<Card>
			<CardHeader tag="h5">
				<CardTitle>Workplace Layout and Housekeeping</CardTitle>
			</CardHeader>
			<CardBody>
				<Form>
					<FormGroup>
						<Label for="q10">1. There is adequate and smooth flow of material.</Label>
						<div>
							<CustomInput type="radio" value="1" id="c11" name="q10" label="1" inline />
							<CustomInput type="radio" value="2" id="c12" name="q10" label="2" inline />
							<CustomInput type="radio" value="3" id="c13" name="q10" label="3" inline />
							<CustomInput type="radio" value="4" id="c14" name="q10" label="4" inline />
							<CustomInput type="radio" value="5" id="c15" name="q10" label="5" inline />
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="q11">2. Well designed layout of safe and smooth production line.</Label>
						<div>
							<CustomInput type="radio" value="1" id="c21" name="q11" label="1" inline />
							<CustomInput type="radio" value="2" id="c22" name="q11" label="2" inline />
							<CustomInput type="radio" value="3" id="c23" name="q11" label="3" inline />
							<CustomInput type="radio" value="4" id="c24" name="q11" label="4" inline />
							<CustomInput type="radio" value="5" id="c25" name="q11" label="5" inline />
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="q12">3. Floors, walls and ceilings are properly designed and cleaned.</Label>
						<div>
							<CustomInput type="radio" value="1" id="c31" name="q12" label="1" inline />
							<CustomInput type="radio" value="2" id="c32" name="q12" label="2" inline />
							<CustomInput type="radio" value="3" id="c33" name="q12" label="3" inline />
							<CustomInput type="radio" value="4" id="c34" name="q12" label="4" inline />
							<CustomInput type="radio" value="5" id="c35" name="q12" label="5" inline />
						</div>
					</FormGroup>
					<FormGroup>
						<Label for="q13">4. Waste is properly disposed, disposable bins are clearly marked and located.</Label>
						<div>
							<CustomInput type="radio" value="1" id="c41" name="q13" label="1" inline />
							<CustomInput type="radio" value="2" id="c42" name="q13" label="2" inline />
							<CustomInput type="radio" value="3" id="c43" name="q13" label="3" inline />
							<CustomInput type="radio" value="4" id="c44" name="q13" label="4" inline />
							<CustomInput type="radio" value="5" id="c45" name="q13" label="5" inline />
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

export default Page3;


