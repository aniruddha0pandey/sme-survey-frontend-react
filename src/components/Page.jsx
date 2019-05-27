import React, { Component } from 'react';

import { Form, FormGroup, Label, Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';

import InputGroupRadio from './InputGroupRadio.jsx';

class Pagu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  createQuestions( questions, id ) {
    return (
      <Form>
        {questions.map((question, index) => {
          return (
            <FormGroup key={ index }>
              <Label for={'q'+index}>{index+1+'. '+question.text}</Label>
              <InputGroupRadio 
                choices={question.choices} 
                id={id} 
                index={index} 
                name={'q'+index} 
              />
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

