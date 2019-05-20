import React, { Component } from 'react';
import { Container, Row } from 'reactstrap'

export class FormUserIntro extends Component {
    
    
	state = {
		termsAgreed: false
	}

	render () {
		return (
			<Container>
				<Row>
          <div className="col-sm-12 col-md-6 offset-md-3">QUESTIONNAIRE</div>
					<div>
						Dear Respondent
						I Satnam Singh, Research scholar in the department of Industrial &amp; Production Engineering at Dr. B.R
						Ambedkar National Institute of Information Technology, Jalandhar pursuing research work Entitled,
						“Parametric study of occupational safety norms for SME’s in Punjab”. All the information provided by
						you would be used for academic purpose only and will be kept confidential.
					</div>
					<div>
						Please give rating from 1 to 5. 1- Fully Disagree, 2-Disagree, 3-Neutral, 4-Agree, 5-Fully Agree.
					</div>
        </Row>
			</Container>
		);
	}
};

export default FormUserIntro;