import React, { Component} from 'react';
import FormHello from './FormHello/FormHello';
import FormWelcome from './FormWelcome/FormWelcome'

export class FormDefault extends Component{
	state = {
		step: 1,
		firstName: ''
	}


nextStep = () =>{
	const { step } =this.state;
	this.setState({
		step: step + 1
	});
};

handleChange = input => e =>{
	this.setState({[input]: e.target.value});
}


	render() {
		const { step } = this.state;
		const { firstName } = this.state;
		const values = { firstName }

		switch(step) {
			case 1:
			return (
				<FormHello 
				nextStep={this.nextStep}
				handleChange={this.handleChange}
				values={values}
				primary="true"
				/>
			)
			case 2:
			return (
			<FormWelcome 
			values={values}
			/>
			)
			default:
			break;
		}
	}
}

export default FormDefault;