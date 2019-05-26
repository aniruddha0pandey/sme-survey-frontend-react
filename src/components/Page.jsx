import React, { Component } from 'react';

import { Form, FormGroup, Label, Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';

import RadioGroup from './RadioGroup.jsx';

class Pagu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  createQuestions( questions, id, questionIterator = 1 ) {
    return (
      <Form>
        {questions.map((question, index) => {
          return (
            <FormGroup key={ questionIterator++ }>
              <Label for={'q'+index+1}>{(index+1)+'. '+question}</Label>
              <RadioGroup bulk={5} id={id} index={index} />
            </FormGroup>
          );
        })}
      </Form>
    );
  }

  render () {


    return (
      <div className="pageCard">
        <Card>
          <CardHeader tag="h5">
            <CardTitle>{this.props.page.title}</CardTitle>
          </CardHeader>
          <CardBody>
            {this.createQuestions( 
              this.props.page.questions, this.props.page.id 
            )}
          </CardBody>
          <CardFooter>
            <Button>Previous</Button>
            <Button style={{ float: 'right' }}>Next</Button>
          </CardFooter>
        </Card>
        <br />
      </div>
    );
  }
}


export default Pagu;

