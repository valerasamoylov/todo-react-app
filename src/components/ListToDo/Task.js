import React, { Component } from "react";
import styled from "styled-components"

const ChangeTodo=styled.input`
	outline:none;
	border:none;
	:hover {
		outline:none;
	}
`
const CheckTodo=styled.input`
	margin-right: 5px;
`
const DeleteTodo=styled.span`
	color:rgb(192, 0, 0);
	float: right;
	margin-right: 15px;
	cursor: pointer;
	display: none;
	font-weight: bold;
`
const TaskTodo=styled.div`
	margin-left: 3px;
	margin-top: 3px;
	padding: 4px;
	:hover {
		background:lightgray;
	}
	&:hover ${DeleteTodo} {
    display: inline-block;
	}
	&.done {
    text-decoration: line-through;
  }
	&:hover ${ChangeTodo} {
		background:lightgray;
		:hover {
			background:lightgray;
		}
	}
`





export class Task extends Component{

	constructor(props){
		super(props);

		this.state = {
		task: props.task,
		editMode: false,
		title: props.task.title
		};


		this.parentDelete = props.delete;
	}


deleteTask(e){
	this.parentDelete(this.state.task.id);
}




toogleTaskIsChecked(e) {

		var newTask = {
			...this.state.task,
			isDone: !this.state.task.isDone
		};

		this.setState({
			task: newTask
		});
	
}


changeTitle(e){
	this.setState({
		title: e.currentTarget.value
	});
}



saveTitle(e){
	if (e.key === 'Enter' &&  !e.currentTarget.value === !'undefined') {
	const newTitle = e.currentTarget.value;
	
	var task = {
		...this.state.task,
		
	};
	task.title = newTitle;
	this.setState({
		editMode: false
	})
	}
}


goToEditMode(){
	this.setState({
		editMode: true
	});
}



render() {
	var {isDone} = this.state.task;
	var {title} = this.state;

	var showTask = "";
	if (this.state.editMode){
		showTask = <ChangeTodo value={title} onChange={this.changeTitle.bind(this)} onKeyPress={this.saveTitle.bind(this)}/>
	} else {
		showTask =<span onDoubleClick={this.goToEditMode.bind(this)}>
								{title}
							</span>
	}
	return (
		
		<TaskTodo key={this.state.task.title} className={isDone ? 'done' : TaskTodo}>
		<CheckTodo type="checkbox" defaultChecked={isDone} onClick={this.toogleTaskIsChecked.bind(this)}/>
		{showTask}
		<DeleteTodo onClick={this.deleteTask.bind(this)}>x</DeleteTodo>
		</TaskTodo>
	); 
}





	
}
export default Task;