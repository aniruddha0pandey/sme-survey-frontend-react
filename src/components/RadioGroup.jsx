import React, { Component } from 'react';

import { CustomInput } from 'reactstrap';

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

	customInput (id, index, bulk, newKey, it) {
    const customInputList = [];
		for (it=1; it<bulk+1; ++it) {
			newKey = id[id.length-1]+(index+1)+it;
			customInputList.push(
				<CustomInput 
					key={newKey} 
					type="radio" 
					value={it} 
					id={newKey} 
					name={'q'+index+1} 
					label={it} 
				inline />
			) 
		}
		return customInputList;
	}  

  render () {


    return (
      <div>
        {this.customInput(
          this.props.id, this.props.index, this.props.bulk
        )}
      </div>
    );
  }
}


export default RadioGroup;

