import React, {Component} from 'react';
import styled from "styled-components";


const ClockTime=styled.div`
	color: white;
	font-size:3em;
`

export class Clock extends Component {
	
	constructor(props) {
		
		super(props)
		
		this.state = {
			time: new Date()
		}
		
	}
	
	componentDidMount() {
		
		setInterval(this.update, 1000)
		
	}
	
	update = () => {
		
		this.setState({
			time: new Date()
		})
		
	};
	
	render() {
		
		const h = this.state.time.getHours()
		const m = this.state.time.getMinutes()
		
		return (
		
			<ClockTime>{h}:{(m < 10 ? '0' + m : m)}</ClockTime>
		
		)
		
	}
	
}





export default Clock;



