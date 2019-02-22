import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import styled from "styled-components";


const Main=styled.div`
	margin: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
const MainInformation=styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 50px;
`
const ConfirmButton=styled.button`
	margin-top: 30px;
	width: 150px;
`
const InputName=styled.input`
	border:none;
`

export class FormHello extends Component{
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}
	render() {
		const { values, handleChange } = this.props;
		return (

				<Main>
					<h1><Clock /></h1>
					<MainInformation>
						<h2>Hello,what's your name:</h2>
						<InputName type="text" className="form-control" placeholder="Enter your name" 
						onChange={handleChange('firstName')} defaultValue={values.firstName} id="standard-textarea" />
						<ConfirmButton onClick={this.continue} className="btn btn-primary" type="submit">Confirm</ConfirmButton>
						</MainInformation>
					</Main>
				
		)
	}
}






export default FormHello;
