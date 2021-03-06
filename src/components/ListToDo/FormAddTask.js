import React, { Component } from "react";
import styled from "styled-components";


const InputTodo=styled.input`
	border-color:blue;
	width:250px;
	margin: 5px 15px 15px 3px;
`


export class FormAddTask extends Component{

	constructor(props){


		super(props);

		this.newIndex = 2;

	}



createNewTask(e){

	if (e.key === 'Enter' &&  !e.currentTarget.value === !'undefined') {
	const newTask = { title: e.currentTarget.value, isDone: false, id: this.newIndex};

		this.props.onCreate(newTask);
		
		e.currentTarget.value = '';
		this.newIndex++;
	}
}

render() {
	return (
			<div className="header">
				<InputTodo onKeyPress={this.createNewTask.bind(this)} placeholder="For example, learn js"/>
			</div>
			
	); 
}

	
}
export default FormAddTask;