import React, { Component } from 'react';
import Clock from '../Clock/Clock';
import ListToDo from '../ListToDo/ListToDo';
import styled from "styled-components";
import Sidebar from "react-sidebar";


const Wrapper=styled.div`
	margin: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`
const HelloTitle=styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	margin-top: 50px;
	color: white;
	font-family: 'Marmelad', sans-serif;
`
const TodoButton=styled.button`
	margin-top: 30px;
	width: 150px;
`

export class FormWelcome extends Component{
	constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

	render() {
    const {
      values: { firstName }
    } = this.props;
		return (
			<Wrapper>
			<Sidebar
			sidebar={ <ListToDo /> }
			
			open={this.state.sidebarOpen}
			onSetOpen={this.onSetSidebarOpen}
			styles={{ sidebar: { background: "white" } }}>
			<TodoButton className="btn btn-primary" type="submit" onClick={() => this.onSetSidebarOpen(true)}>
			Todos</TodoButton>
		</Sidebar>
		<h1><Clock/></h1>
		<HelloTitle>
							<h2>Hello,</h2>
							<h2>{firstName}</h2>
						</HelloTitle>
		</Wrapper>
	);
}
}		





export default FormWelcome;
