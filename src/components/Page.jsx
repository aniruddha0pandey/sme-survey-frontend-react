import React from 'react';

import { Form, FormGroup, Label, CustomInput, Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';

const createQuestions = ( questions, id, it ) => {
	var questionIterator = 1;

	function customInput (id, index) {
		var newKey;
		const customInputList = [];
		for (it=1; it<6; ++it) {
			newKey = id[id.length-1]+(index+1)+it;
			customInputList.push(
				<CustomInput 
					key={newKey} 
					type="radio" 
					value={it} 
					id={newKey} 
					name={'q'+index+1} 
					label={it} 
					inline 
				/>
			) 
		}
		return customInputList;
	}

	return (
		<Form>
			{
				questions.map((question, index) => {
					return (
						<FormGroup key={ questionIterator++ }>
							<Label for={'q'+index+1}>{(index+1)+'. '+question}</Label>
							<div>{customInput(id, index)}</div>
						</FormGroup>
					);
				})
			}
		</Form>
	);
}

const Page = ({ page }) => {


  return (
		<div className="pageCard">
			<Card>
				<CardHeader tag="h5">
					<CardTitle>{page.title}</CardTitle>
				</CardHeader>
				<CardBody>
					{createQuestions( page.questions, page.id )}
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