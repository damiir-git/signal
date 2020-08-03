import React from 'react';
import { Signals } from './Signals';

export class DataContainer extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			signal: {}
		};
	}

	componentDidMount() {
		setInterval(() => {
			const request = new XMLHttpRequest();
			request.addEventListener("load", (data) => {
				const dataToState = JSON.parse(data.target.response);
				console.log(dataToState);
				this.setState({signal: dataToState}); 
			});
			request.open("GET", "http://localhost:8000/api/device/signal");
			request.send();
		}, 1000)
	}

	render() {
		return <Signals
			sinr={this.state.signal.sinr}
			rssi={this.state.signal.rssi}
			rsrq={this.state.signal.rsrq}
			rsrp={this.state.signal.rsrp}
			cqi0={this.state.signal.cqi0}
			cqi1={this.state.signal.cqi1}/>;
	}
}